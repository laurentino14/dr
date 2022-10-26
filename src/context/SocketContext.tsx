import {createContext, useContext, useState} from "react";
import io from "socket.io-client";
import {GetUserByIdDocument} from "../graphql/graphql";
import {client} from "../http/apollo";
import {AuthContext} from "./AuthContext";

export type Message = {
  id: string;
  sentAt: Date;
  content: string;
  from: string;
};
type Room = {
  room: string;
  messages: Message[];
  from: string;
};

interface SocketContextProps {
  socket: any;
  messages: Message[] | [];
  userToSendMessage: any | null;
  room: string | null;
  socketConnect: () => void;
  socketDisconnect: () => void;
  setUserToSendMessage: (user: string) => void;
  setUserToSendMessagee: (user: string) => void;
  sentMessage: (message: string) => void;
  closeRoom: () => void;
}

export const SocketContext = createContext({} as SocketContextProps);

export function SocketProvider({children}) {
  const {user} = useContext(AuthContext);
  const [userToSendMessage, setUserToSendMessagee] = useState<null | any>(null);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState<string | null>(null);

  const socket = io("http://localhost:5000", {autoConnect: false});
  var usersOnline = [];

  async function socketConnect() {
    socket.auth = {userID: user?.id};
    socket.connect();
  }

  if (user?.id) {
    socketConnect();
  }

  async function socketDisconnect() {
    socket.disconnect();
  }
  const generateRoomId = async (from: string, to: string) => {
    const id = [from, to].sort().join("-");
    return await id;
  };

  // console.log(room, " =>>>>>> room");

  async function setUserToSendMessage(to: string) {
    await client
      .query({query: GetUserByIdDocument, variables: {id: to}})
      .then(async res => {
        const roomId = await generateRoomId(user?.id, res.data.getUserByID.id);

        if (roomId) {
          setRoom(roomId);
          setUserToSendMessagee(res.data.getUserByID);
          socket.emit("join", {
            room: roomId,
          });
        } else {
          alert("Deu merda");
        }
      });
  }

  async function sentMessage(message: string) {
    socket.emit("message", {
      room: room,
      message: message,
      from: user.id,
      to: userToSendMessage,
    });
  }

  async function closeRoom() {
    const roomId = await generateRoomId(user?.id, userToSendMessage.id);
    console.log(roomId, " =>>>>>> room");
    socket.emit("leave", {
      room: roomId,
      secondUser: userToSendMessage.id,
    });

    socket.off("private message");

    setUserToSendMessagee(null);
    setRoom("");
  }

  socket.on("user connected", async user => {
    let a = {
      userID: user.userID,
      socketID: user.socketID,
      self: user.socketID === socket.id,
      connected: true,
    };
    usersOnline.push(a);

    usersOnline = usersOnline.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.userID < b.userID) return -1;
      return a.userID > b.userID ? 1 : 0;
    });

    console.log(usersOnline);
  });

  socket.on("users", users => {
    users.forEach(user => {
      user.self = user.socketID === socket.id;

      usersOnline.push({
        userID: user.userID,
        socketID: user.socketID,
        connected: user.connected,
        self: user.socketID === socket.id,
      });
    });

    usersOnline = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.userID < b.userID) return -1;
      return a.userID > b.userID ? 1 : 0;
    });
    console.log(usersOnline);
  });

  socket.on("private message", async data => {
    const a = await messages.find(message => message.id === data.id);
    if (a) {
      return;
    } else {
      setMessages(messages => [...messages, data]);
    }

    // document.getElementById("chatroom").innerHTML +=
    //   data.from === user.id
    //     ? `<div id="msg" class='w-full snap-end px-10 flex justify-end gap-3 items-center'><div class='z-50 flex w-auto max-w-[50%]  items-center justify-end rounded-lg bg-neutral-300 px-2 py-2 text-sm font-medium'>
    //     ${data.content}
    //   </div><p class="h-full w-auto flex items-end font-medium text-xs">${
    //     parseHours(data.sentAt) + ":" + parseMinutes(data.sentAt)
    //   }</p></div>`
    //     : `<div id="msg" class='w-full px-10 snap-end flex justify-start gap-3 items-center'><p class="h-full w-auto flex items-end font-medium text-xs">${
    //         parseHours(data.sentAt) + ":" + parseMinutes(data.sentAt)
    //       }</p><div class='z-50 flex w-auto max-w-[50%]  items-center justify-end rounded-lg bg-dark text-neutral-100 px-2 py-2 text-sm font-medium'>
    //   ${data.content}
    // </div></div>`;

    // var element = document.getElementById("chatroom");
    // element.scrollTop = element.scrollHeight;
  });
  return (
    <SocketContext.Provider
      value={{
        socket,
        setUserToSendMessagee,
        userToSendMessage,
        messages,
        room,
        closeRoom,
        socketConnect,
        socketDisconnect,
        setUserToSendMessage,
        sentMessage,
      }}>
      {children}
    </SocketContext.Provider>
  );
}

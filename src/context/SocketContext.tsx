import {createContext, useContext, useState} from "react";
import io from "socket.io-client";
import {GetUserByIdDocument} from "../graphql/graphql";
import {client} from "../http/apollo";
import {AuthContext} from "./AuthContext";
import {parseHours} from "./utils/parseHours";
import {parseMinutes} from "./utils/parseMinuts";

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
  const [room, setRooom] = useState("");
  let messages: Message[] = [];
  const [userToSendMessage, setUserToSendMessagee] = useState(null);
  const [notifications, setNotifications] = useState([]);
  var socket = io("http://localhost:5000", {autoConnect: false});

  function socketConnect() {
    socket.auth = {userID: user?.id};
    socket.connect();
  }

  if (user?.id) {
    socketConnect();
  }

  function socketDisconnect() {
    socket.disconnect();
  }

  async function setUserToSendMessage(user: string) {
    await client
      .query({query: GetUserByIdDocument, variables: {id: user}})
      .then(res => {
        setUserToSendMessagee(res.data.getUserByID);
        socket.emit("join", {
          room: `${res.data.getUserByID.id + socket.auth.userID}`,
          user2: res.data.getUserByID.id,
        });
        socket.emit("join", {
          room: `${socket.auth.userID + res.data.getUserByID.id}`,
          user2: socket.auth.userID,
        });
        setRooom(`${socket.auth.userID + res.data.getUserByID.id}`);
      });
  }

  function sentMessage(message: string) {
    socket.emit("message", {
      room: room,
      message: message,
      from: user.id,
      to: userToSendMessage,
    });
  }

  function closeRoom() {
    socket.emit("leave", {
      room: `${userToSendMessage.id + socket.auth.userID}`,
      room2: `${socket.auth.userID + userToSendMessage.id}`,
    });
    socket.disconnect();
    const leng = document.getElementById("chatroom").children.length;
    for (let i = 0; i < leng; i++) {
      document.getElementById("chatroom").children[i].innerHTML = null;
    }
    setUserToSendMessagee(null);
    setRooom("");
    socket.auth = {userID: user?.id};
    socket.connect();
  }

  socket.emit("userconnect", {
    userID: user?.id,
    socketID: socket.id,
  });

  socket.on("connection", data => console.log(data));

  socket.on("Welcome", data => console.log(data));
  socket.on("private message", data => {
    document.getElementById("chatroom").innerHTML +=
      data.from === user.id
        ? `<div id="msg" class='w-full snap-end px-10 flex justify-end gap-3 items-center'><div class='z-50 flex w-auto max-w-[50%]  items-center justify-end rounded-lg bg-neutral-300 px-2 py-2 text-sm font-medium'>
  ${data.content}
</div><p class="h-full w-auto flex items-end font-medium text-xs">${
            parseHours(data.sentAt) + ":" + parseMinutes(data.sentAt)
          }</p></div>`
        : `<div id="msg" class='w-full px-10 snap-end flex justify-start gap-3 items-center'><p class="h-full w-auto flex items-end font-medium text-xs">${
            parseHours(data.sentAt) + ":" + parseMinutes(data.sentAt)
          }</p><div class='z-50 flex w-auto max-w-[50%]  items-center justify-end rounded-lg bg-dark text-neutral-100 px-2 py-2 text-sm font-medium'>
      ${data.content}
    </div></div>`;

    var element = document.getElementById("chatroom");
    element.scrollTop = element.scrollHeight;
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

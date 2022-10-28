import {createContext, useContext, useRef, useState} from "react";
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
  room: string;
  setUserToSendMessage: (user: string) => void;
  setUserToSendMessagee: (user: string) => void;
  closeRoom: () => void;
}

export const SocketContext = createContext({} as SocketContextProps);

export function SocketProvider({children}) {
  const {user} = useContext(AuthContext);
  const [userToSendMessage, setUserToSendMessagee] = useState<null | any>(null);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [room, setRoom] = useState("");
  const roomRef = useRef(room);
  roomRef.current = room;

  const socket = io("http://localhost:5000", {
    autoConnect: false,
    reconnection: false,
    multiplex: false,
  });
  if (user?.id) {
    socket.id = user?.id;
    socket.auth = {userID: user?.id};
    socket.connect();
  }

  var usersOnline = [];

  socket.on("connect", () => {
    console.log(socket);
  });

  socket.on("message", data => console.log(data));

  socket.on("users", users => {
    usersOnline = [];
    users.forEach(user => {
      usersOnline.push({
        userID: user.userID,
        socketID: user.socketID,
        connected: user.connected,
        self: user.socketID === socket.id,
      });
    });

    usersOnline = usersOnline.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.userID < b.userID) return -1;
      return a.userID > b.userID ? 1 : 0;
    });
    let myUser = usersOnline.find(
      item => item.socketID === socket.id && item.userID === user?.id,
    );
    usersOnline = usersOnline.filter(item => item.userID !== user?.id);

    usersOnline.unshift(myUser);

    console.log(usersOnline, " =>>>>>> usersOnline");
  });
  socket.on("private message", async data => {
    if (roomRef.current === data.room) {
      setMessages(messages => [...messages, data]);
    }
    if (roomRef.current !== data.room) {
      alert("You have a new message from " + data.from);

      //   setMessages(messages => [...messages, data]);
      //   setNotifications(notifications => [...notifications, data]);
    }
  });

  const generateRoomId = async (from: string, to: string) => {
    const id = [from, to].sort().join("-");
    return await id;
  };

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
        }
      });
  }

  async function closeRoom() {
    const roomId = await generateRoomId(user?.id, userToSendMessage.id);
    socket.emit("leave", {
      room: roomId,
      secondUser: userToSendMessage.id,
    });
    // socket.emit("join", {
    //   room: socket.id,
    // });

    setUserToSendMessagee(null);
    setRoom("");
  }

  return (
    <SocketContext.Provider
      value={{
        socket,
        setUserToSendMessagee,
        userToSendMessage,
        messages,
        room,
        closeRoom,
        setUserToSendMessage,
      }}>
      {children}
    </SocketContext.Provider>
  );
}

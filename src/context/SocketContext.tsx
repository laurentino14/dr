import {createContext, useContext, useRef, useState} from "react";
import io, {Socket} from "socket.io-client";
import {GetUserByIdDocument} from "../graphql/graphql";
import {client} from "../http/apollo";
import {AuthContext} from "./AuthContext";
import {ToastNewMessage} from "./utils/toast/newMessage";
import {userFilter} from "./utils/usersFilter";
export type Message = {
  id: string;
  sentAt: Date;
  content: string;
  from: string;
};

interface SocketContextProps {
  socket: Socket;
  onlineRef: any;
  messages: Message[] | [];
  userToSendMessage: any | null;
  room: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setUserToSendMessage: (user: string) => void;
  setUserToSendMessagee: (user: string) => void;
  closeRoom: () => void;
}

export const SocketContext = createContext({} as SocketContextProps);

export function SocketProvider({children}) {
  const {user} = useContext(AuthContext);
  const [userToSendMessage, setUserToSendMessagee] = useState<null | any>(null);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState(0);
  const [room, setRoom] = useState("");
  const [open, setOpen] = useState(false);
  const roomRef = useRef(room);
  const onlineRef = useRef(usersOnline);
  // const toast = useToast({duration: 3000, isClosable: true, position: "top"});
  roomRef.current = room;

  const socket = io("http://localhost:5000", {
    autoConnect: false,
    reconnection: false,
    protocols: ["websocket"],
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

  socket.on("users", async users => {
    usersOnline = [];

    usersOnline = userFilter(users, user, socket);
    onlineRef.current = usersOnline;
    console.log(usersOnline, " =>>>>>> usersOnline");
  });

  socket.on("private message", async data => {
    if (roomRef.current === data.room) {
      setMessages(messages => [...messages, data]);
    }
    if (roomRef.current !== data.room) {
      await client
        .query({query: GetUserByIdDocument, variables: {id: data.from}})
        .then(res => {
          console.log(res);
          ToastNewMessage({
            notifications,
            user: res.data.getUserByID,
            setUserToSendMessage,
            setNotifications,
            setOpen,
          });
        });
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
        onlineRef,
        setUserToSendMessagee,
        userToSendMessage,
        messages,
        open,
        setOpen,
        room,
        closeRoom,
        setUserToSendMessage,
      }}>
      {children}
    </SocketContext.Provider>
  );
}

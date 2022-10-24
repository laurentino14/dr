import {createContext, useContext, useEffect, useState} from "react";
import io from "socket.io-client";
import {GetUserByIdDocument} from "../graphql/graphql";
import {client} from "../http/apollo";
import {AuthContext, User} from "./AuthContext";

interface SocketContextProps {
  socket: any;
  setRoom: (id: string) => void;
  room: string;
  messages: Message[] | [];
  userToSendMessage: User | null;
  setUserToSendMessage: (user: string) => Promise<void>;
}

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

export const SocketContext = createContext({} as SocketContextProps);

export function SocketProvider({children}) {
  const {user} = useContext(AuthContext);
  const [socketID, setSocketID] = useState(null);
  const [room, setRooom] = useState("");
  let messages: Message[] = [];
  const [userToSendMessage, setUserToSendMessagee] = useState(null);
  var socket = io("http://localhost:5000");

  function setRoom(id: string) {
    setRooom(id);
  }
  socket.on("message-in-room", (data: Message) => {
    document.getElementById("chatroom").innerHTML +=
      data.from === user.id
        ? `<div class='w-full px-10 flex justify-end gap-3 items-center'><div class='z-50 flex w-auto max-w-[50%]  items-center justify-end rounded-lg bg-primary px-2 py-2 text-sm font-medium'>
    ${data.content}
  </div><p class="h-full w-auto flex items-end font-medium text-xs">${
    new Date(data.sentAt).getHours().toString() +
    ":" +
    new Date(data.sentAt).getMinutes().toString()
  }</p></div>`
        : `<div class='w-full px-10 flex justify-start gap-3 items-center'><p class="h-full w-auto flex items-end font-medium text-xs">${
            new Date(data.sentAt).getHours().toString() +
            ":" +
            new Date(data.sentAt).getMinutes().toString()
          }</p><div class='z-50 flex w-auto max-w-[50%]  items-center justify-end rounded-lg bg-dark px-2 py-2 text-sm font-medium'>
        ${data.content}
      </div></div>`;
    // document.getElementById("chatroom").innerHTML +=
    //   data.from === user.id
    //     ? `
    //     <div className='z-50 flex w-full h-4 items-center justify-end rounded-lg bg-primary px-2 py-2 text-sm font-medium'>
    //       ${data.content}
    //     </div>`
    //     : `<>nao é</>`;
  });

  async function setUserToSendMessage(user: string) {
    await client
      .query({query: GetUserByIdDocument, variables: {id: user}})
      .then(res => {
        setUserToSendMessagee(res.data.getUserByID);
        socket.emit("join", {
          room: `${user} + ${res.data.getUserByID.id}`,
          user2: res.data.getUserByID.id,
        });
        setRoom(`${user} + ${res.data.getUserByID.id}`);
      });
  }

  useEffect(() => {
    socket.emit("userconnect", {
      userSocketID: socket?.id,
      userID: user?.id,
    });
  }, [user]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        setRoom,
        room,
        setUserToSendMessage,
        userToSendMessage,
        messages,
      }}>
      {children}
    </SocketContext.Provider>
  );
}

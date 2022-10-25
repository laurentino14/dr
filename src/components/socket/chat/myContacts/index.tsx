import {useContext, useState} from "react";
import {AuthContext} from "../../../../context/AuthContext";
import {SocketContext} from "../../../../context/SocketContext";
import {useGetAllUsersQuery} from "../../../../graphql/graphql";
import {CardUsersChat} from "../cardUsers";

export const MyContactsChat = () => {
  const {userToSendMessage} = useContext(SocketContext);
  const {user} = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const {data} = useGetAllUsersQuery();

  return (
    <div
      className={`${
        userToSendMessage !== null ? "h-0 opacity-0" : "h-full opacity-100"
      }  flex  w-full flex-col gap-3 overflow-y-hidden bg-neutral-100 pt-6 transition-all delay-200 duration-500 `}>
      <h1 className=' ml-10 text-sm font-medium'>Meus contatos</h1>
      <div
        id='ccardsdiv'
        className=' flex h-full flex-col gap-3 overflow-y-auto py-4'>
        {data?.users?.map(user => (
          <CardUsersChat user={user} key={user.id + Math.random()} />
        ))}
      </div>
    </div>
  );
};

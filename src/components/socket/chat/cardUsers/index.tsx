import Image from "next/image";
import {useContext, useEffect} from "react";
import {SocketContext} from "../../../../context/SocketContext";

export const CardUsersChat = ({user}) => {
  const {setRoom, setUserToSendMessage, userToSendMessage} =
    useContext(SocketContext);

  useEffect(() => {
    console.log(userToSendMessage);
  }, [userToSendMessage]);
  return (
    <button
      onClick={async () => await setUserToSendMessage(user.id)}
      className='flex h-16 items-center gap-6  py-1 px-4 transition-colors duration-200 hover:cursor-pointer hover:bg-neutral-300'>
      <div className='h-12 w-12 rounded-full drop-shadow-md'>
        <Image
          className='rounded-full'
          src={user?.avatar}
          width={100}
          height={100}
          alt=''
        />
      </div>
      <div className='flex h-full flex-col items-start justify-center'>
        <h1 className='text-xs font-bold'>
          {user?.firstname} {user?.lastname}
        </h1>
        <h1 className='text-xs font-medium'>{user?.bio}</h1>
      </div>
    </button>
  );
};

import {Avatar, AvatarBadge} from "@chakra-ui/react";
import {useContext} from "react";
import {SocketContext} from "../../../../context/SocketContext";

export const CardUsersChat = ({user}) => {
  const {setUserToSendMessage, userToSendMessage} = useContext(SocketContext);

  return (
    <button
      onClick={async () => {
        await setUserToSendMessage(user.id);
      }}
      className='flex h-16 items-center gap-6  py-1 px-4 transition-colors duration-200 hover:cursor-pointer hover:bg-neutral-300'>
      <div className='h-12 w-12 rounded-full drop-shadow-md'>
        <Avatar
          src={user?.avatar.includes("google" || "default") ? "" : user?.avatar}
          width={12}
          height={12}
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

export const CardUsersChatOnline = ({user}) => {
  const {setUserToSendMessage, userToSendMessage} = useContext(SocketContext);

  return (
    <button
      onClick={async () => {
        await setUserToSendMessage(user.id);
      }}
      className='flex h-16 items-center gap-6 py-1 px-4 transition-colors duration-200 hover:cursor-pointer hover:bg-neutral-300'>
      <div className='h-12 w-12 rounded-full  drop-shadow-md'>
        <Avatar src={user?.avatar} width={12} height={12}>
          <AvatarBadge
            borderColor='transparent'
            boxSize='0.8em'
            right={+1}
            bottom={+1}
            className=' right-4 bg-green-500'
          />
        </Avatar>
        {/* <div className='absolute -bottom-0 right-0 h-4 w-4 rounded-full border-2 border-neutral-300 bg-green-500' /> */}
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

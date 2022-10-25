import Image from "next/image";
import {useContext} from "react";
import {IoMdClose} from "react-icons/io";
import {Message, SocketContext} from "../../../../context/SocketContext";
type ChatProps = {
  userTo: any;
  messages: Message[];
};

export const ChatRoom = ({userTo}) => {
  const {closeRoom} = useContext(SocketContext);
  return (
    <div className='h-full w-full bg-neutral-100'>
      <div className=' relative flex h-14 w-auto items-center gap-4 bg-neutral-100 py-10 pl-8 drop-shadow-sm'>
        {userTo?.avatar ? (
          <Image
            className='rounded-full'
            src={userTo?.avatar}
            width={50}
            height={50}
            alt=''
          />
        ) : (
          <></>
        )}
        <div className='flex flex-col'>
          <h1 className='font-bold'>
            {userTo.firstname} {userTo.lastname}
          </h1>
          <h1 className='text-xs'>{userTo.bio}</h1>
        </div>
        <div className='absolute right-8 flex h-14 w-20 items-center justify-center'>
          <button
            onClick={() => {
              closeRoom();
            }}>
            <IoMdClose className='text-3xl hover:text-neutral-600' />
          </button>
        </div>
      </div>
      <div
        className=' flex h-[22.2rem] w-full  flex-col gap-y-3 overflow-y-scroll  overscroll-y-contain bg-neutral-100 py-10 text-dark'
        id='chatroom'></div>
    </div>
  );
};

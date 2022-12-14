import {Avatar, AvatarBadge, Fade} from "@chakra-ui/react";
import {useContext, useEffect} from "react";
import {IoMdClose} from "react-icons/io";
import {AuthContext} from "../../../../context/AuthContext";
import {Message, SocketContext} from "../../../../context/SocketContext";
import {Msg} from "./msg";
type ChatProps = {
  userTo: any;
  messages: Message[];
};

export const ChatRoom = ({userTo, onlineRef}) => {
  const {closeRoom, messages, room} = useContext(SocketContext);
  const {user} = useContext(AuthContext);
  const verify = onlineRef.current?.find(
    (us: {userID: string}) => us?.userID === userTo.id,
  );

  useEffect(() => {
    var a = document.getElementById("chatroom");
    a.scrollTop = a.scrollHeight;
  }, [messages]);

  return (
    <Fade in={userTo}>
      <div className='h-full w-full bg-neutral-100'>
        <div className=' relative z-50 flex h-14 w-auto items-center gap-4 bg-neutral-100 py-10 pl-8 drop-shadow-sm'>
          <div className='relative flex items-center'>
            {verify ? (
              <Avatar src={userTo?.avatar} width={50} height={50}>
                <AvatarBadge
                  borderColor='transparent'
                  boxSize='0.8em'
                  right={+1}
                  bottom={+1}
                  className='bottom-2 right-4 bg-green-500'
                />
              </Avatar>
            ) : (
              <Avatar src={userTo?.avatar} width={50} height={50}></Avatar>
            )}
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold '>
              {userTo.firstname} {userTo.lastname}
            </h1>
            <h1 className='text-xs'>{userTo.bio}</h1>
          </div>
          <div className='absolute right-5 flex h-14 w-20 items-center justify-center'>
            <button onClick={async () => await closeRoom()}>
              <IoMdClose className='text-3xl hover:text-neutral-600' />
            </button>
          </div>
        </div>
        <div
          className=' flex h-[22.2rem] w-full  flex-col gap-y-3 overflow-y-scroll overscroll-y-contain  scroll-smooth bg-neutral-100 py-5 text-dark'
          id='chatroom'>
          {messages.map((message: any) => (
            <Msg
              message={message}
              room={room}
              user={user}
              key={Math.random() * 9999}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
};

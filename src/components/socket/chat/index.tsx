import {Slide} from "@chakra-ui/react";
import {useContext, useState} from "react";
import {AiFillWechat} from "react-icons/ai";
import {BsEmojiLaughing} from "react-icons/bs";
import {ImAttachment} from "react-icons/im";
import {RiArrowRightSLine} from "react-icons/ri";
import {AuthContext} from "../../../context/AuthContext";
import {SocketContext} from "../../../context/SocketContext";
import {ChatRoom} from "./chatroom";
import {MyContactsChat} from "./myContacts";

export const Chat = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const {
    userToSendMessage,
    socket,
    room,
    onlineRef,
    open,
    setOpen,
    closeRoom,
    setUserToSendMessage,
  } = useContext(SocketContext);
  const {user} = useContext(AuthContext);

  return (
    <>
      <Slide in={open} direction='bottom' className='z-50'>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          className={`${
            open ? "opacity-0" : "opacity-100"
          } fixed bottom-10 right-20 flex h-14 w-14 items-center justify-center rounded-lg bg-primary drop-shadow-md transition-all delay-300 duration-500`}>
          <AiFillWechat className='  text-3xl text-dark' />
        </button>
        <div
          className={` ${open ? "h-[34rem] drop-shadow-2xl " : "h-0"}  ${
            user ? "opacity-100" : "opacity-0"
          } fixed bottom-0 right-40 z-50 flex w-[40rem] flex-col rounded-t-lg transition-all delay-200 duration-500 will-change-transform`}>
          <div className='flex h-14 w-full items-center justify-between rounded-t-lg  bg-dark px-4 drop-shadow-xl'>
            <div className='flex h-full items-center gap-2 pt-1'>
              <AiFillWechat className='  text-3xl text-primary' />
              <h1 className='text-sm font-light text-neutral-100'>Conversas</h1>
            </div>
            <button
              className='flex h-full items-center  text-neutral-100'
              onClick={() => (open ? setOpen(false) : setOpen(true))}>
              <RiArrowRightSLine
                className={` rotate-90 text-2xl delay-200 duration-300`}
              />
            </button>
          </div>
          <div className='h-full w-full bg-neutral-100 '>
            {userToSendMessage ? (
              <ChatRoom userTo={userToSendMessage} onlineRef={onlineRef} />
            ) : (
              <MyContactsChat />
            )}
          </div>
          <h1 className='bottom absolute bottom-6 right-5 z-50 w-28 text-right font-raj text-xs  font-bold text-neutral-500'>
            {textAreaValue.length > 0 ? textAreaValue.length + "/300" : null}
          </h1>
          <div className=' group  flex h-20 items-center justify-between  drop-shadow-2xl  '>
            <div className=' z-50 flex h-full w-24 items-center justify-center gap-4 bg-dark text-neutral-100 shadow-2xl shadow-black drop-shadow-2xl '>
              <BsEmojiLaughing />
              <ImAttachment />
            </div>

            <textarea
              maxLength={300}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  socket.emit("private message", {
                    message: textAreaValue,
                    to: userToSendMessage.id,
                    from: user.id,
                    room: room,
                  });
                  setTextAreaValue("");
                }
              }}
              onChange={e => setTextAreaValue(e.target.value)}
              value={textAreaValue}
              className='relative h-full w-full resize-none border-neutral-200 bg-dark px-4   py-2 pr-20 text-sm font-light text-neutral-100 transition-colors duration-300 focus:bg-neutral-900 focus:outline-none    '></textarea>

            {/* <button className=' h-full w-24 bg-dark  text-xs text-neutral-100'>
            Enviar
          </button> */}
          </div>
        </div>
      </Slide>
    </>
  );
};

import {Avatar, AvatarBadge} from "@chakra-ui/react";
import {BsChatTextFill} from "react-icons/bs";
import {MdOutlineClose} from "react-icons/md";
import {toast} from "react-toastify";
export const ToastNewMessage = ({
  notifications,
  user,
  setUserToSendMessage,
  setNotifications,
  setOpen,
}) => {
  return toast("", {
    toastId: notifications + 1,
    theme: "dark",
    closeButton: false,
    pauseOnHover: false,
    // <IoIosText className='text-4xl' />
    icon: (
      <div className='absolute -top-10 -left-[0.90rem] z-50 flex w-[30rem] items-center justify-center gap-2  px-6'>
        <Avatar className='-ml-2 scale-75' src={user.avatar} w={20} h={20}>
          <AvatarBadge
            borderColor='transparent'
            boxSize='1.25em'
            right={+1}
            bottom={+1}
            className=' right-4 bg-green-500'
          />
        </Avatar>
        <div className='mr-4 flex w-full justify-center '>
          {user.firstname} enviou uma mensagem...
        </div>
        <div className=' -mt-2 flex flex-col items-center justify-center gap-3'>
          <button
            onClick={e => {
              toast.dismiss(notifications + 1);
              setNotifications(notifications + 1);
            }}
            className='  rounded-full bg-neutral-800 p-3  text-base font-bold transition-all duration-200 hover:scale-110 hover:bg-neutral-700'>
            <MdOutlineClose className=' text-neutral-200' />
          </button>
          <button
            onClick={async e => {
              toast.dismiss(notifications + 1);
              await setUserToSendMessage(user?.id);
              setOpen(true);
              setNotifications(notifications + 1);
            }}
            className='  rounded-full bg-neutral-800 p-3  text-base font-bold transition-all duration-200 hover:scale-110 hover:bg-primary'>
            <BsChatTextFill className=' text-neutral-200' />
          </button>
        </div>
      </div>
    ),
    onClick: e => {
      e.preventDefault();
    },
    closeOnClick: false,
    delay: 0,

    position: "top-center",
    className:
      "drop-shadow-2xl relative h-32 w-[30rem] flex items-center justify-center cursor-default hover:bg-neutral-800 transition-colors duration-200 ",
    progressClassName: "  bg-gradient-to-r from-primary to-primary/70",
  });
};

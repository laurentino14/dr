import {parseHours} from "../../../../context/utils/parseHours";
import {parseMinutes} from "../../../../context/utils/parseMinuts";

export const Msg = ({message, room, user}) => {
  if (message.room === room) {
    if (message.from === user.id) {
      return (
        <div
          id='msg'
          key={message.id}
          className='box-border  flex h-auto max-h-max w-full max-w-[100%] snap-end items-center justify-end gap-3  px-5'>
          <div className='z-40 h-auto max-h-max min-h-max w-auto max-w-[70%] whitespace-pre-wrap break-words rounded-lg bg-neutral-300 px-4 py-4 text-sm font-medium leading-relaxed text-black antialiased will-change-scroll'>
            {message.content}
          </div>
          <p className='flex h-full w-auto items-end text-xs font-medium'>
            {parseHours(message.sentAt) + ":" + parseMinutes(message.sentAt)}
          </p>
        </div>
      );
    } else {
      return (
        <div
          id='msg'
          key={message.id}
          className='box-border flex h-auto max-h-max w-full max-w-[100%] snap-end items-center justify-start gap-3  px-5'>
          <div className='flex h-full  w-auto items-end text-xs font-medium'>
            {parseHours(message.sentAt) + ":" + parseMinutes(message.sentAt)}
          </div>
          <div className='z-40  h-auto min-h-max  w-auto max-w-[70%]  overflow-auto whitespace-pre-wrap break-words rounded-lg bg-dark px-2 py-2 text-sm  font-medium leading-relaxed text-neutral-100 antialiased  will-change-scroll'>
            {message.content}
          </div>
        </div>
      );
    }
  }
};

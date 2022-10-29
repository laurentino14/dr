import {Avatar} from "@chakra-ui/react";
import {useState} from "react";
import {
  BsChatTextFill,
  BsGithub,
  BsHeartFill,
  BsTextIndentLeft,
} from "react-icons/bs";
import {GoCalendar} from "react-icons/go";
import {IoLogoTwitter} from "react-icons/io";
import {RiRepeatFill} from "react-icons/ri";
import {TbWorld} from "react-icons/tb";
import {User} from "../../../context/AuthContext";

type Props = {
  user: User;
  post: any;
};

export const PostsDashboard = ({user, post}: Props) => {
  const [like, setLike] = useState<Boolean | string>(false);
  const [comment, setComment] = useState<Boolean | string>(false);
  const [share, setShare] = useState<Boolean | string>(false);
  const [btnComment, setBtnComment] = useState<Boolean>(false);
  const [commentOnPostData, setCommentOnPostData] = useState<string>("");
  const [read, setRead] = useState<Boolean>(false);

  function commentOnPost(data: string) {
    setCommentOnPostData("");
    alert(data);
  }

  return (
    <div className='flex  w-full gap-6 rounded-md border border-neutral-100  bg-neutral-100 px-10 py-20 transition-all delay-200 duration-1000'>
      <aside className='flex w-1/4 flex-col items-start justify-start'>
        <div className='flex w-full items-center px-3 drop-shadow-lg'>
          <div className='ml-6 rounded-full drop-shadow-xl'>
            <Avatar src={user?.avatar} size='xl' />
          </div>
        </div>
        <h1 className='ml-7 mt-4 w-full font-medium text-dark'>
          {user?.firstname} {user?.lastname}
        </h1>
        <p className='ml-7 text-xs font-medium'>{user?.username}</p>
        <p className='mt-2 flex items-center gap-2 text-xs'>
          <BsTextIndentLeft className='text-xl' /> {user?.bio}
        </p>
        <p className='mt-2 flex items-center  gap-2 text-xs'>
          <TbWorld className='text-xl ' />
          {user?.location}
        </p>
        <a
          href={user?.github}
          target='_blank'
          className='mt-10 flex items-center gap-2 text-xs font-medium transition-colors duration-200 hover:text-neutral-600'>
          <BsGithub className='text-xl' />
          {user?.github.split("/")[3]}
        </a>
        <a
          href={`http://twitter.com/${user?.twitter}`}
          target='_blank'
          className='mt-2 flex items-center gap-2 text-xs font-medium transition-colors duration-200 hover:text-neutral-600'>
          <IoLogoTwitter className='text-xl ' />
          {user?.twitter}
        </a>
      </aside>
      <section className='flex w-3/4 flex-col'>
        <h1 className='w-full text-2xl font-bold'>Título do Post</h1>
        <div className='mt-4 flex w-full justify-between gap-10'>
          <span className='font-mediu flex items-center gap-2 text-base'>
            <GoCalendar className='-mt-[0.2rem] text-xl' /> 16 de outubro de
            2022
          </span>
          <span className='flex gap-8'>
            <span className='flex items-center gap-2 text-xs font-bold'>
              <BsHeartFill className='text-xl text-red-500' /> 12
            </span>
            <span className='flex items-center gap-2 text-xs font-bold'>
              <BsChatTextFill className='text-xl text-yellow-400' /> 10
            </span>
          </span>
        </div>
        <div
          className={` ${
            read ? "h-full max-h-full " : " h-96 max-h-96"
          } relative mt-8  flex  flex-col gap-4 overflow-hidden transition-all delay-100 duration-1000`}>
          <p className='text-justify'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </p>
          <p className='text-justify'>
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p className='text-justify'>
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p className='text-justify'>
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p className='text-justify'>
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <div
            className={`${
              read ? "opacity-0" : "opacity-100"
            } absolute z-40 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent transition-all delay-200 duration-1000`}
          />
          <div
            className={`${
              read ? "opacity-0" : "opacity-100"
            } absolute z-40 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent transition-all delay-200 duration-1000`}
          />
        </div>
        <div
          className={`${
            read ? "" : "-mt-4"
          } z-50  flex w-full justify-end transition-all delay-200 duration-300 `}>
          <button
            onClick={() => setRead(!read)}
            className='flex items-center justify-center rounded-sm bg-neutral-300 px-4 py-3 text-xs font-bold transition-colors duration-100 hover:bg-dark hover:text-neutral-100'>
            {read ? "VER MENOS..." : "VER MAIS..."}
          </button>
        </div>
        <div className='mt-5 flex w-full justify-between'>
          <button
            onClick={() => (!like ? setLike(true) : setLike(false))}
            className='group flex w-32 items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-300 hover:text-neutral-700 '>
            <BsHeartFill
              className={` ${
                like ? "text-red-500" : ""
              } text-xl transition-colors delay-100 duration-300 group-hover:animate-pulse  `}
            />
            <p
              className={`${
                like ? "w-0 opacity-0" : "w-12 opacity-100"
              }  flex h-2 items-center text-left delay-100 duration-300`}>
              Curtir
            </p>
          </button>
          <button
            onClick={() => {
              if (!btnComment) {
                setBtnComment(true);
              } else {
                setBtnComment(false);
              }
            }}
            className='group flex w-32 items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-300 hover:text-neutral-700 '>
            <BsChatTextFill
              className={` ${
                comment ? "text-yellow-400" : ""
              } text-xl transition-colors delay-100 duration-300 group-hover:animate-pulse  `}
            />
            <p
              className={`${
                comment ? "w-0 opacity-0" : "w-20  opacity-100"
              } flex h-2 items-center text-left delay-100 duration-300`}>
              Comentar
            </p>
          </button>
          <button
            onClick={() => (!share ? setShare(true) : setShare(false))}
            className='group flex w-32 items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-300 hover:text-neutral-700 '>
            <RiRepeatFill
              className={` ${
                share ? "text-blue-500" : ""
              } text-xl transition-colors delay-100 duration-300 group-hover:animate-pulse  `}
            />
            <p
              className={`${
                share ? "w-0 opacity-0" : "w-32 opacity-100"
              } flex h-2 items-center delay-100 duration-300`}>
              Compartilhar
            </p>
          </button>
        </div>
        <section
          className={`${
            btnComment ? "h-96" : "h-0"
          } mt-4  transition-all delay-200 duration-300`}>
          <div
            className={`${
              btnComment ? "opacity-100" : "opacity-0"
            }  flex flex-col gap-4  px-10 pt-10 delay-200 duration-300 `}>
            <h1 className='text-xs font-bold'>Escreva um comentário:</h1>
            <textarea
              className='h-20 w-full rounded-lg border-2 border-transparent bg-neutral-300 py-4 px-4 text-sm text-dark outline-none transition-all delay-200 duration-500 focus:h-72 focus:border-2 focus:border-neutral-600 focus:outline-none'
              value={commentOnPostData}
              onChange={e => {
                setCommentOnPostData(e.target.value);
              }}
              id=''
            />
            <div className='flex justify-end'>
              <button
                disabled={commentOnPostData != "" ? false : true}
                className={` ${
                  commentOnPostData != ""
                    ? "bg-dark text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100"
                    : "bg-neutral-300 text-neutral-400"
                }   mt-4 rounded-sm py-2 px-5 text-xs font-bold uppercase`}
                onClick={e => {
                  commentOnPost(commentOnPostData);
                  setComment(true);
                  setBtnComment(false);
                }}>
                ENVIAR
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

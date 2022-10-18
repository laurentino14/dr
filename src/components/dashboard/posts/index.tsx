import Image from "next/image";
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
  const [like, setLike] = useState<Boolean | String>(false);
  const [comment, setComment] = useState<Boolean | String>(false);
  const [share, setShare] = useState<Boolean | String>(false);
  const [read, setRead] = useState<Boolean>(false);
  return (
    <div className='flex  w-full gap-6 rounded-md border border-neutral-100  bg-neutral-100 px-10 py-20 transition-all delay-200 duration-1000'>
      <aside className='flex w-1/4 flex-col items-start justify-start'>
        <div className='flex w-full items-center px-3 drop-shadow-lg'>
          <div className='ml-6 rounded-full drop-shadow-xl'>
            <Image
              className='rounded-full'
              src={user?.avatar}
              width={100}
              height={100}
            />
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
            read ? "h-full max-h-full" : " h-96 max-h-96"
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
                like ? "w-0 opacity-0" : "w-10 opacity-100"
              } text-left delay-100 duration-300`}>
              Curtir
            </p>
          </button>
          <button
            onClick={() => (!comment ? setComment(true) : setComment(false))}
            className='group flex w-32 items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-300 hover:text-neutral-700 '>
            <BsChatTextFill
              className={` ${
                comment ? "text-yellow-400" : ""
              } text-xl transition-colors delay-100 duration-300 group-hover:animate-pulse  `}
            />
            <p
              className={`${
                comment ? "w-0 opacity-0" : "w-20  opacity-100"
              } text-left delay-100 duration-300`}>
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
              } delay-100 duration-300`}>
              Compartilhar
            </p>
          </button>
        </div>
      </section>
    </div>
  );
};

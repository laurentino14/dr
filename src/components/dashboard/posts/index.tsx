import Image from "next/image";
import {BsChatTextFill, BsHeartFill} from "react-icons/bs";
import {GoCalendar} from "react-icons/go";

export const PostsDashboard = ({user, post}) => {
  return (
    <div className=' flex w-full gap-6 rounded-md border border-neutral-100 bg-neutral-100 px-10 py-20'>
      <aside className='flex w-1/4 flex-col items-center justify-start'>
        <div className='rounded-full drop-shadow-lg'>
          <Image
            className='rounded-full'
            src={user.avatar}
            width={100}
            height={100}
          />
        </div>
        <h1 className='mt-4 w-full text-center font-medium text-dark'>
          {user.firstname} {user.lastname}
        </h1>
        <p className='text-xs'>{user.bio}</p>
      </aside>
      <section className='flex w-3/4 flex-col'>
        <h1 className='w-full text-2xl font-bold'>TITULO</h1>
        <div className='mt-2 flex w-full justify-between gap-10'>
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
        <div className='mt-8 flex flex-col gap-4'>
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
            {" "}
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
        <div className='mt-20 flex w-full justify-between'>
          <button className='flex w-32 items-center justify-center rounded-sm bg-neutral-300 px-4 py-2 font-medium transition-colors duration-100 hover:bg-dark hover:text-neutral-100 '>
            Curtir
          </button>
          <button className='flex w-32 items-center justify-center rounded-sm bg-neutral-300 px-4 py-2 font-medium transition-colors duration-100 hover:bg-dark hover:text-neutral-100'>
            Comentar
          </button>
          <button className='flex w-32 items-center justify-center rounded-sm bg-neutral-300 px-4 py-2 font-medium transition-colors duration-100 hover:bg-dark hover:text-neutral-100'>
            Compartilhar
          </button>
        </div>
      </section>
    </div>
  );
};

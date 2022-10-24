import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import {MdPlayLesson} from "react-icons/md";
import {useGetAllCoursesQuery} from "../../../../graphql/graphql";
import {CardDashboard} from "../../cards";
import {PostsDashboard} from "../../posts";

export const Feed = ({user, nav}) => {
  const {data} = useGetAllCoursesQuery();
  return (
    <main
      className={` ${
        nav === "feed"
          ? "max-h-auto  h-auto opacity-100 "
          : " fixed -z-50 h-0 opacity-0"
      }  box-border rounded-md bg-neutral-100 transition-all delay-200 duration-700 ease-in-out`}>
      <div
        className={` ${
          nav === "feed" ? "opacity-100" : "  opacity-0"
        }   w-full rounded-md bg-neutral-100  py-16 px-10 transition-all delay-75 duration-100`}>
        <h1 className=' ml-16 flex items-center gap-2 font-medium'>
          <MdPlayLesson className='text-2xl' />
          Continue assistindo...
        </h1>
        <section
          id='cd'
          className=' right-[42%] ml-[38rem] -mt-[33rem]  flex h-[70vw] w-48 -rotate-90 snap-y snap-mandatory scroll-px-10 flex-col items-center space-y-72 overflow-y-auto overflow-x-hidden overscroll-none py-28 '>
          <CardDashboard data={data} className='rotate-90' />
          <CardDashboard data={data} className='rotate-90' />
          <CardDashboard data={data} className='rotate-90' />
          <CardDashboard data={data} className='rotate-90' />
          <CardDashboard data={data} className='rotate-90' />
          <CardDashboard data={data} className='rotate-90' />
        </section>
        <section className='-mt-[30rem] min-h-screen  '>
          <h1 className='-ml-[9rem] mb-20 flex items-center gap-2 px-52 font-medium'>
            <BsFillFileEarmarkTextFill className='text-2xl' />
            Publicações recentes
          </h1>
          <div className='flex  h-auto w-full flex-col items-center gap-10 px-52 transition-all duration-1000'>
            <PostsDashboard user={user} post={``} />
            <PostsDashboard user={user} post={``} />
            <PostsDashboard user={user} post={``} />
            <button className='flex w-32 items-center justify-center rounded-sm bg-dark px-4 py-3 text-xs font-medium  text-neutral-300 transition-colors duration-300 hover:bg-dark hover:text-neutral-100'>
              VER MAIS...
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

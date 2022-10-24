import {MdPlayLesson} from "react-icons/md";
import {useGetAllCoursesQuery} from "../../../../graphql/graphql";
import {CardDashboard} from "../../cards";

export const MyCourses = ({nav}) => {
  const {data} = useGetAllCoursesQuery();
  return (
    <main
      className={` ${
        nav === "mycourses"
          ? "h-auto min-h-screen opacity-100"
          : " fixed -z-50 h-0 opacity-0"
      }  box-border w-[78vw] rounded-md bg-neutral-100 pb-24  transition-all delay-300 duration-500 ease-in-out`}>
      <div
        className={` ${
          nav === "mycourses" ? "opacity-100" : " opacity-0"
        }     rounded-lg   px-10 pt-16 transition-all delay-200 duration-500`}>
        <h1 className=' ml-16 flex items-center gap-2 font-medium text-dark'>
          <MdPlayLesson className='text-2xl text-dark group-hover:animate-pulse' />
          Meus cursos
        </h1>
        <section className='mx-auto mt-20 grid grid-cols-3 flex-wrap items-center justify-center gap-20 px-4'>
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
          <CardDashboard data={data} className='col-auto mx-auto' />
        </section>
      </div>
    </main>
  );
};

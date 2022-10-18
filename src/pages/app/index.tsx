import Head from "next/head";
import {useContext} from "react";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import {MdPlayLesson} from "react-icons/md";
import {AsideDashboard} from "../../components/dashboard/aside";
import {CardDashboard} from "../../components/dashboard/cards";
import {PostsDashboard} from "../../components/dashboard/posts";
import {AuthContext} from "../../context/AuthContext";

export default function App() {
  const {signOut, user} = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Dev Running - Dashboard</title>
      </Head>
      <main className=' flex h-auto min-h-screen w-full bg-dark bg-gradient-to-b from-black to-dark pb-20  pr-10'>
        <section className='relative bg-gradient-to-b from-black to-dark'>
          <AsideDashboard />
        </section>
        <section className=' mt-12 box-border  w-full max-w-[80%]  rounded-md bg-neutral-100 py-16 px-10'>
          <h1 className=' ml-16 flex items-center gap-2 font-medium'>
            <MdPlayLesson className='text-2xl' />
            Continue assistindo...
          </h1>
          <section
            id='cd'
            className=' right-[42%] ml-[38rem] -mt-[33rem]  flex h-[70vw] w-48 -rotate-90 snap-y snap-proximity flex-col items-center space-y-60 overflow-y-auto overflow-x-hidden overscroll-none py-28 '>
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
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
              <button className='flex w-32 items-center justify-center rounded-sm bg-neutral-300 px-4 py-3 text-xs font-medium transition-colors duration-100 hover:bg-dark hover:text-neutral-100'>
                VER MAIS...
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

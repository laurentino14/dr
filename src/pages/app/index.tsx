import Head from "next/head";
import {useContext, useState} from "react";
import {AsideDashboard} from "../../components/dashboard/aside";
import {Feed} from "../../components/dashboard/pages/feed";
import {MyCourses} from "../../components/dashboard/pages/mycourses";
import {Chat} from "../../components/socket/chat";
import {AuthContext} from "../../context/AuthContext";

export default function App() {
  const {signOut, user} = useContext(AuthContext);
  const [nav, setNav] = useState("feed");

  return (
    <>
      <Head>
        <title>Dev Running - Dashboard</title>
      </Head>
      <main className=' flex h-full w-full bg-dark bg-gradient-to-b from-black to-dark pb-20 pr-10 transition-all delay-200  duration-1000'>
        <section className='relative h-auto  '>
          <AsideDashboard nav={nav} setNav={setNav} />
        </section>
        <section className='mt-12  rounded-md '>
          <Feed nav={nav} user={user} />
          <MyCourses nav={nav} />
        </section>
      </main>
      <Chat />
    </>
  );
}

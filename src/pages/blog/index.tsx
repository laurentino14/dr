import Head from "next/head";
import {IoIosConstruct} from "react-icons/io";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
export default function Blog() {
  return (
    <>
      <HeaderNotLogged />
      <main className='min-h-screen flex items-center justify-center text-[20rem]'>
        <Head>
          <title>Dev Running - Construindo...</title>
        </Head>
        <IoIosConstruct />
      </main>
    </>
  );
}

import Image from "next/image";
import {useContext} from "react";
import {HeaderLogged} from "../../components/header/HeaderLogged";
import {HeaderLoggedMobile} from "../../components/header/HeaderLoggedMobile";
import {AuthContext} from "../../context/AuthContext";

export default function App() {
  const {signOut, user} = useContext(AuthContext);
  return (
    <>
      <HeaderLogged signOut={signOut} user={user} />
      <HeaderLoggedMobile user={user} signOut={signOut} />
      <main className='min-h-screen'>
        <h1 className='w-screen text-center mb-20 text-2xl mt-20'>/APP</h1>
        {user?.avatar ? (
          <Image
            src={user?.avatar}
            quality={100}
            width={650}
            height={650}
            alt=''
          />
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

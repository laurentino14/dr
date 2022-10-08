import {useContext} from "react";
import {HeaderLogged} from "../../components/header/HeaderLogged";
import {AuthContext} from "../../context/AuthContext";

export default function App() {
  const {signOut, user} = useContext(AuthContext);
  return (
    <>
      <HeaderLogged signOut={signOut} user={user} />
      <main className='min-h-screen'>
        <h1 className='w-screen text-center mb-20 text-2xl mt-20'>/APP</h1>
      </main>
    </>
  );
}
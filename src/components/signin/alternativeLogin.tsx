import {signIn, useSession} from "next-auth/react";
import {useEffect} from "react";
import {BsGithub, BsGoogle} from "react-icons/bs";
import {AnchorDefault} from "../anchor/default";

export const AlternativeLogin = () => {
  const {data, status} = useSession();

  useEffect(() => {
    console.log(status);
    console.log(data);
  }, [data]);

  return (
    <>
      <div className='flex items-center justify-evenly  w-full '>
        <button onClick={() => signIn()}>SIGNIN</button>
        <AnchorDefault
          href='/api/auth/login'
          className='flex hover:text-neutral-700 items-center justify-end gap-2'
          value={
            <>
              <BsGithub className='text-2xl' />
              <h2 className='text-sm'>GitHub</h2>
            </>
          }
        />
        <AnchorDefault
          href=''
          className='flex hover:text-neutral-700 items-center justify-end gap-2'
          value={
            <>
              <BsGoogle className='text-2xl' />
              <h2 className='text-sm'>Google</h2>
            </>
          }
        />
      </div>
    </>
  );
};

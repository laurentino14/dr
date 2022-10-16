import {PrismaClient} from "@prisma/client";
import Image from "next/image";
import {useRouter} from "next/router";
import {BsGithub, BsLink, BsTextIndentLeft} from "react-icons/bs";
import {IoLogoTwitter} from "react-icons/io";
import {TbWorld} from "react-icons/tb";
import {UserForComponents} from "../../../context/AuthContext";

export const ProfileHeader = ({user}: UserForComponents) => {
  const {push} = useRouter();
  async function updateTwitter(twitter) {
    const prisma = new PrismaClient();
    await prisma.user
      .update({
        where: {id: user.id},
        data: {twitter: twitter},
      })
      .then(res => alert("Editado com sucesso"));
    return;
  }
  return (
    <section className=' absolute flex w-96   -mt-40  justify-center items-center flex-col gap-8'>
      <div className='rounded-full p-2 bg-gradient-to-b from-dark to-black flex items-center'>
        <Image
          className='z-30 rounded-full drop-shadow-2xl'
          src={user?.avatar}
          quality={100}
          width={250}
          height={250}
        />
      </div>
      <div className=' flex justify-center gap-4 w-full items-center flex-col'>
        <div className='flex items-center justify-center w-full ml-14 flex-col'>
          <h1 className='font-medium text-2xl w-full text-neutral-100 flex gap-2  items-center'>
            <p>{user?.firstname}</p> <p>{user.lastname}</p>
          </h1>
          <h2 className='font-poppins w-full font-normal text-base text-primary flex items-center '>
            {user?.username}
          </h2>
        </div>
        <div className='flex justify-center w-full items-center gap-1 flex-col'>
          {user.bio ? (
            <span className='text-neutral-400 w-full flex gap-2 text-xs items-center'>
              <BsTextIndentLeft className='text-xl' />
              <p>{user.bio}</p>
            </span>
          ) : (
            <span className='text-neutral-400 w-full flex gap-2 text-xs items-center'>
              <BsTextIndentLeft className='text-xl' />
              <p contentEditable>{user.bio}</p>
            </span>
          )}
          {user.location ? (
            <span className='text-neutral-400 w-full  text-xs flex gap-2 items-center'>
              <TbWorld className='text-xl ' />
              <p>{user.location}</p>
            </span>
          ) : (
            <span className='text-neutral-400 w-full  text-xs flex gap-2 items-center'>
              <TbWorld className='text-xl ' />
              <p>Adicionar localidade</p>
            </span>
          )}
          {user.site ? (
            <span className='flex gap-[0.6rem] w-full text-neutral-400 text-xs items-center'>
              <BsLink className='text-lg' />{" "}
              <a
                target='_blank'
                href={`http://${user.site}`}
                className='hover:text-neutral-100 transition-colors duration-300'>
                {user.site}
              </a>
            </span>
          ) : (
            <span className='flex gap-[0.6rem] w-full text-neutral-400 text-xs items-center'>
              <BsLink className='text-lg' />{" "}
              <a
                target='_blank'
                className='hover:text-neutral-100 transition-colors duration-300'>
                Adicionar portfolio
              </a>
            </span>
          )}
          <div className='flex flex-col gap-3 pt-4 w-full items-center'>
            <div className='flex ml-1 flex-col  gap-2 w-full text-base text-neutral-400'>
              {user.github ? (
                <a
                  href={user.github}
                  target='_blank'
                  className='flex items-center gap-[0.6rem] hover:text-neutral-100 transition-colors duration-300'>
                  <BsGithub /> <span className='text-xs'>Github</span>
                </a>
              ) : (
                <a
                  target='_blank'
                  className='flex items-center gap-[0.6rem] hover:text-neutral-100 transition-colors duration-300'>
                  <BsGithub /> <span className='text-xs'>Adicionar GitHub</span>
                </a>
              )}
              {user.twitter ? (
                <a
                  href={`http://twitter.com/${user.twitter}`}
                  target='_blank'
                  className='flex items-center gap-2 hover:text-neutral-100 transition-colors duration-300'>
                  <IoLogoTwitter />
                  <p className='text-xs'>Twitter</p>
                </a>
              ) : (
                <a
                  target='_blank'
                  onBlur={() => updateTwitter("123")}
                  className='flex items-center gap-2 hover:text-neutral-100 transition-colors duration-300'>
                  <IoLogoTwitter />
                  <p contentEditable className='text-xs'>
                    Adicionar Twitter
                  </p>
                </a>
              )}
            </div>
          </div>
          {/* <h1 className='font-light  text-base w-auto text-neutral-100 text-center '>
          {user?.email}
        </h1>{" "} */}
        </div>
      </div>
    </section>
  );
};

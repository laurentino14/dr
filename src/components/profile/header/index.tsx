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
    <section className=' absolute -mt-40 flex   w-96  flex-col items-center justify-center gap-8'>
      <div className='flex items-center rounded-full bg-gradient-to-b from-dark to-black p-2'>
        <Image
          className='z-30 rounded-full drop-shadow-2xl'
          src={user?.avatar}
          quality={100}
          width={250}
          height={250}
        />
      </div>
      <div className=' flex w-full flex-col items-center justify-center gap-4'>
        <div className='ml-14 flex w-full flex-col items-center justify-center'>
          <h1 className='flex w-full items-center gap-2 text-2xl font-medium  text-neutral-100'>
            <p>{user?.firstname}</p> <p>{user.lastname}</p>
          </h1>
          <h2 className='flex w-full items-center font-poppins text-base font-normal text-primary '>
            {user?.username}
          </h2>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-1'>
          {user.bio ? (
            <span className='flex w-full items-center gap-2 text-xs text-neutral-400'>
              <BsTextIndentLeft className='text-xl' />
              <p contentEditable spellCheck={false}>
                {user.bio}
              </p>
            </span>
          ) : (
            <span className='flex w-full items-center gap-2 text-xs text-neutral-400'>
              <BsTextIndentLeft className='text-xl' />
              <p contentEditable>Adicionar biografia</p>
            </span>
          )}
          {user.location ? (
            <span className='flex w-full  items-center gap-2 text-xs text-neutral-400'>
              <TbWorld className='text-xl ' />
              <p>{user.location}</p>
            </span>
          ) : (
            <span className='flex w-full  items-center gap-2 text-xs text-neutral-400'>
              <TbWorld className='text-xl ' />
              <p>Adicionar localidade</p>
            </span>
          )}
          {user.site ? (
            <span className='flex w-full items-center gap-[0.6rem] text-xs text-neutral-400'>
              <BsLink className='text-lg' />{" "}
              <a
                target='_blank'
                href={`http://${user.site}`}
                className='transition-colors duration-300 hover:text-neutral-100'>
                {user.site}
              </a>
            </span>
          ) : (
            <span className='flex w-full items-center gap-[0.6rem] text-xs text-neutral-400'>
              <BsLink className='text-lg' />{" "}
              <a
                target='_blank'
                className='transition-colors duration-300 hover:text-neutral-100'>
                Adicionar portfolio
              </a>
            </span>
          )}
          <div className='flex w-full flex-col items-center gap-3 pt-4'>
            <div className='ml-1 flex w-full  flex-col gap-2 text-base text-neutral-400'>
              {user.github ? (
                <a
                  href={user.github}
                  target='_blank'
                  className='flex items-center gap-[0.6rem] transition-colors duration-300 hover:text-neutral-100'>
                  <BsGithub />{" "}
                  <span className='text-xs'>{user.github.split("/")[3]}</span>
                </a>
              ) : (
                <a
                  target='_blank'
                  className='flex items-center gap-[0.6rem] transition-colors duration-300 hover:text-neutral-100'>
                  <BsGithub /> <span className='text-xs'>Adicionar GitHub</span>
                </a>
              )}
              {user.twitter ? (
                <a
                  href={`http://twitter.com/${user.twitter}`}
                  target='_blank'
                  className='flex items-center gap-[0.6rem] transition-colors duration-300 hover:text-neutral-100'>
                  <IoLogoTwitter />
                  <p className='text-xs'>{user.twitter}</p>
                </a>
              ) : (
                <a
                  target='_blank'
                  onBlur={() => updateTwitter("123")}
                  className='flex items-center gap-[0.6rem] transition-colors duration-300 hover:text-neutral-100'>
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

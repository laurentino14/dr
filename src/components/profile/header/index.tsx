import Image from "next/image";
export const ProfileHeader = ({user}) => {
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
      <div className=' flex justify-center items-center flex-col'>
        <h1 className='font-medium text-2xl  text-neutral-100 text-center '>
          {user?.firstname} {user?.lastname}
        </h1>
        <h2 className='font-poppins font-medium text-base text-primary'>
          @{user?.username}
        </h2>
        {/* <h1 className='font-light  text-base w-auto text-neutral-100 text-center '>
          {user?.email}
        </h1>{" "} */}
      </div>
    </section>
  );
};

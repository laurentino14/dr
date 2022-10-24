import Image from "next/image";

export const CardMyCourses = props => {
  return (
    <div
      className={`${props.className}  flex h-full min-h-[130vh] w-[70vw] snap-start flex-col  items-center justify-start rounded-lg bg-gradient-to-b from-[#e10198] to-dark px-10 pt-20 text-neutral-100 backdrop-blur-lg  `}>
      <div className='flex w-full justify-around  '>
        <Image
          className='skew-x-0 skew-y-0 text-2xl'
          src={props.data.image}
          alt={props.data.name}
          width={500}
          quality={100}
          height={500}
        />
      </div>
      <h1 className='mt-24 font-raj  text-6xl font-semibold text-neutral-100'>
        {props.data.title}
      </h1>
      <div className='mt-24 flex items-center justify-between'>
        <div className='flex w-1/2 flex-col text-justify'>
          <p>{props.data.description}</p>
        </div>
        <div className='w-1/2'>1</div>
      </div>
    </div>
  );
};

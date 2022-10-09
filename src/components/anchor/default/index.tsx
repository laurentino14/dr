import Link from "next/link";

export const AnchorDefault = ({value, href}) => {
  return (
    <Link href={href} passHref>
      <a className='uppercase w-28 flex items-center justify-center font-raj drop-shadow-lg hover:bg-yellow-400 font-bold h-auto pb-2 px-4 bg-primary rounded-md  pt-3 transition-all'>
        {value}
      </a>
    </Link>
  );
};

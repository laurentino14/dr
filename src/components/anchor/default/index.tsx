import Link from "next/link";

export const AnchorDefault = ({value, href, className}) => {
  return (
    <Link href={href} passHref>
      <a
        className={` ${className}  flex items-center justify-center  hover:drop-shadow-2xl   h-auto   rounded-md   transition-all`}>
        {value}
      </a>
    </Link>
  );
};

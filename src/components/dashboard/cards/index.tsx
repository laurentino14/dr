import Image from "next/image";
import {useRouter} from "next/router";
import {ButtonDefault} from "../../button/default";

export const CardDashboard = props => {
  const {push} = useRouter();
  return (
    <div
      className={` ${props.className}  flex  h-48 w-96 flex-shrink-0  snap-start rounded-lg`}>
      <div className='flex h-full w-1/4 items-start justify-center pt-4  '>
        {props.data?.courses[0] ? (
          <Image src={props.data?.courses[0].image} width={100} height={100} />
        ) : null}
      </div>
      <div className='w-3/4'>
        <span className='flex h-12 w-full flex-col items-baseline justify-center pl-4 '>
          <h1 className='font-bold'>{props.data?.courses[0].title}</h1>
        </span>
        <span className='flex h-20 w-full flex-col items-baseline justify-center pl-4 '>
          <p className='overflow-hidden text-xs'>
            {props.data?.courses[0].description}
          </p>
        </span>
        <span className='flex h-20 w-full items-center justify-end'>
          <ButtonDefault
            className='rounded-sm  font-poppins text-xs font-medium  text-black hover:text-neutral-600 '
            data={props.data?.courses[0].slug}
            value='Assistir...'
            func={push}
          />
        </span>
      </div>
    </div>
  );
};

import {BsPlus} from "react-icons/bs";

export const AddCard = props => {
  return (
    <div
      className={`${props.className} border-2 border-dark  w-20 h-20 rounded-md hover:drop-shadow-md flex items-center justify-center text-5xl hover:cursor-pointer hover:brightness-125 transition-all  duration-200 `}>
      <BsPlus />
    </div>
  );
};

export const ButtonDefault = ({value, func, data, className}) => {
  return (
    <button
      onClick={e => {
        func(data);
      }}
      className={` ${className}  flex items-center justify-center  hover:drop-shadow-2xl   h-auto   rounded-md   transition-all`}>
      {value}
    </button>
  );
};

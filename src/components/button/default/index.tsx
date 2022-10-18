export const ButtonDefault = ({value, func, data, className}) => {
  return (
    <button
      onClick={e => {
        func(data);
      }}
      className={` ${className}  flex h-auto items-center     justify-center   rounded-md   transition-all`}>
      {value}
    </button>
  );
};

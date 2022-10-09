export const ButtonDefault = ({value, data, func}) => {
  return (
    <button
      onClick={e => {
        func(data);
      }}
      className='uppercase w-28 flex items-center justify-center font-raj drop-shadow-lg hover:bg-yellow-400 font-bold h-auto pb-2 px-4 bg-primary rounded-md  pt-3 transition-all'>
      {value}
    </button>
  );
};

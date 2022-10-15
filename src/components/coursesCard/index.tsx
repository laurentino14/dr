import Image from "next/image";
import Link from "next/link";

export const CoursesCard = ({course}) => {
  return (
    <div
      className=' flex flex-col bg-white rounded-md hover:drop-shadow-2xl hover:-translate-y-2 delay-150 duration-500 transition-transform px-12 w-[40rem] py-10'
      key={course.id}>
      <div className='   rounded-b-xl gap-10   flex   items-center justify-center '>
        {course.image ? (
          <Image
            src={course.image}
            width={300}
            height={300}
            className='rounded-full'
          />
        ) : (
          <></>
        )}

        <div className='w-72 '>
          <h1 className=' flex items-center justify-end w-72   h-16 font-semibold text-3xl font-raj drop-shadow-lg'>
            {course.title}
          </h1>
          <h2 className='font-roboto font-bold'>Descricao:</h2>
          <div>
            <div className='w-72 h-32 max-h-32 overflow-clip mx-auto mb-10 relative text-justify'>
              <div className='absolute bg-gradient-to-t from-white to-transparent w-full h-full'></div>
              {course.description}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-end gap-4 flex-col -mt-10'>
        <span className='flex flex-col items-end'>
          <div>
            <strong>Lancado em:</strong>{" "}
            {`${course.created_at[8] + course.created_at[9]}/${
              course.created_at[5] + course.created_at[6]
            }/${
              course.created_at[0] +
              course.created_at[1] +
              course.created_at[2] +
              course.created_at[3]
            }`}
          </div>
          {course.updated_at !== course.created_at ? (
            <div>
              <strong>Atualizado em:</strong>{" "}
              {`${course.updated_at[8] + course.updated_at[9]}/${
                course.updated_at[5] + course.updated_at[6]
              }/${
                course.updated_at[0] +
                course.updated_at[1] +
                course.updated_at[2] +
                course.updated_at[3]
              }`}
            </div>
          ) : (
            <></>
          )}
        </span>
        <Link passHref href={`/courses/${course.slug}`}>
          <a className='uppercase font-raj drop-shadow-lg hover:bg-yellow-400 font-bold h-auto pb-2 px-4 bg-primary rounded-md flex items-center pt-3 transition-all w-28 justify-center'>
            VER MAIS
          </a>
        </Link>
      </div>
    </div>
  );
};

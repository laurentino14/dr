import {GetStaticProps} from "next";
import Head from "next/head";
import {CoursesCard} from "../../components/coursesCard";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
import {GetAllCoursesDocument} from "../../graphql/graphql";
import {client} from "../../http/apollo";
export default function Cursos({data}) {
  return (
    <>
      <HeaderNotLogged />
      <main className='min-h-screen bg-gradient-to-t from-dark to-dark flex-col py-40 flex items-center justify-center '>
        <Head>
          <title>Dev Running - Cursos </title>
        </Head>
        <h1 className='font-raj text-neutral-300 font-medium uppercase text-5xl'>
          Todos os cursos disponíveis
        </h1>
        <section className='w-full min-h-screen  flex px-10  py-40 items-center justify-center gap-12 gap-y-16 flex-wrap'>
          {data.courses.map(course => {
            return <CoursesCard course={course} />;
          })}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: await client
        .query({query: GetAllCoursesDocument})
        .then(res => res.data),
    },
    revalidate: 60 * 60,
  };
};

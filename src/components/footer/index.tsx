import Image from "next/future/image";

export const Footer = () => {
  return (
    <footer className='w-full h-96 bg-primary flex items-center justify-center font-poppins font-medium  gap-20 border-t-8 border-black'>
      <div className='flex items-center justify-center flex-col -mt-20'>
        <Image
          src='/logo.png'
          className='drop-shadow-md'
          width={300}
          height={300}
          alt='Logomarca da Dev Running'
        />
        <h1 className='-mt-20 text-4xl font-raj font-medium drop-shadow-lg'>
          Dev Running
        </h1>
      </div>
      <div className='flex flex-col gap-2 '>
        <span className='font-raj font-bold text-lg'>Usuário</span>
        <a className='text-sm'>Entrar</a>
        <a className='text-sm'>Criar conta</a>
        <a className='text-sm'>Recuperar senha</a>
      </div>
      <div className='flex flex-col gap-2 '>
        <span className='font-raj font-bold text-lg'>Cursos</span>
        <a className='text-sm'>Front-end</a>
        <a className='text-sm'>Back-end</a>
        <a className='text-sm'>Escalonamento</a>
      </div>
      <div className='flex flex-col gap-2 '>
        <span className='font-raj font-bold text-lg'>Dúvidas</span>
        <a className='text-sm'>E-mail</a>
        <a className='text-sm'>Sobre os cursos</a>
        <a className='text-sm'>Sobre a Dev Running</a>
      </div>
    </footer>
  );
};

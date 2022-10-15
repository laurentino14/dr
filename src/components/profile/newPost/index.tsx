import {useState} from "react";
import {ButtonDefault} from "../../button/default";

export const NewPost = () => {
  const [postData, setPostData] = useState("");
  const [btn, setBtn] = useState(false);

  async function newPost(postData: string) {
    return postData;
  }

  return (
    <section className='full flex flex-col gap-5 mt-32   px-10 py-6 bg-[#111111aa] rounded-xl'>
      <h1 className='text-neutral-100 font-medium'>Nova postagem:</h1>
      <textarea
        className='w-full h-20 focus:h-72 delay-200 duration-500 border-2 border-transparent outline-none transition-all bg-dark rounded-lg focus:border-2 text-neutral-100 py-2 px-4 focus:border-neutral-600 focus:outline-none'
        name=''
        onChange={e => setPostData(e.target.value)}
        onFocus={e => setBtn(true)}
        onBlur={e => setBtn(false)}
        id=''
      />
      <div className='flex justify-end'>
        {btn ? (
          <ButtonDefault
            data={postData}
            func={newPost}
            value='Postar'
            className='bg-primary px-4 py-2 hover:bg-yellow-500'
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

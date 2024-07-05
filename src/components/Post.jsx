const Post = () => {
  return (
    <div className='w-5/6 lg:max-w-7xl mx-auto '>
        
      <div className='bg-[#D9D9D9] flex justify-around  p-4 h-[100px] rounded-xl mb-[30px]'>
        <div className=' bg-white w-[500px] lg:w-[900px] flex justify-between items-center  h-[70px] rounded-full'>
                <h1 className='p-5 '>Your Replay</h1>
        </div>
        <button className='p-3 w-[70px] h-fit mt-2 lg:w-40 bg-[#F2CB57] text-white rounded-lg '>Post</button>
      </div>
    </div>
  );
};

export default Post;

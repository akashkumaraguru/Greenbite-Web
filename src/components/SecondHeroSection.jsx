import secondHeroimg from '../assets/Herosection/secondHeroimg.png'
import trademark from '../assets/Herosection/trademark-bg.png'

const SecondHeroSection = () => {
  return <div className="w-5/6 lg:max-w-7xl mx-auto ">
    <div className='flex  justify-evenly items-center'>
    <div>
        <h1 className='text-4xl mt-10 border-b-2 w-fit border-b-green-400 border-orange-100 font-bold mb-3 lg:font-bold lg:text-7xl lg:mb-10 text-[#73BF78]'>
          Green <span className='text-[#F2CB57]'>Bite!</span>
        </h1>
        <h1 className='lg:text-xl w-5/6 font-semibold lg:mb-10'>
          GreenBite is your passport to a healthier lifestyle. We're not just a
          delivery service; we're your partner in cultivating a nutritious and
          delicious culinary journey. Immerse yourself in the freshest, locally
          sourced organic produce and handpicked ingredients as GreenBite brings
          the farm to your table.
        </h1>
        <button className=' mb-10 h-[40px]  w-[120px] bg-[#F2CB57] lg:h-[60px]  text-center lg:p-3 lg:w-[200px] rounded-md text-white mt-2'>For more</button>
        
      </div>

      <div className=''>
                <img src={secondHeroimg} alt="" />
      </div>
    </div>
    <div>
    <img src={trademark} alt=""  className='mt-0 lg:mt-10' />
    </div>

    <div className="mt-10">
        <h1 className="font-bold text-7xl text-center mb-2 text-[#73BF78]">
          Our menu
        </h1>
        <h1 className="font-bold text-xl text-center mb-2 text-black">
          Meals kit
        </h1>
        <h1 className="text-center">
          Eat the Yemmy Foods here! Eat and Enjoy here!!
        </h1>
      </div>
  </div>;
};

export default SecondHeroSection;

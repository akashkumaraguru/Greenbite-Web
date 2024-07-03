import FoodMenu from '../components/FoodMenu';
import FoodOne from '../assets/Herosection/FoodMenu/Food-One.png';
import FoodTwo from '../assets/Herosection/FoodMenu/Food-two.png';
import FoodThree from '../assets/Herosection/FoodMenu/Food-three.png';
import FoodFour from '../assets/Herosection/FoodMenu/Food-four.png';
import FoodFive from '../assets/Herosection/FoodMenu/Food-five.png';
import FoodSix from '../assets/Herosection/FoodMenu/Food-six.png';
import FoodSeven from '../assets/Herosection/FoodMenu/Food-seven.png';
import FoodEight from '../assets/Herosection/FoodMenu/Food-eight.png';

const FoodMenuLayout = () => {
    const Foods = [
        {
            img: FoodOne,
            maintext: 'Idly',
            subtext: 'Chutney & Sambar',
            amount: '₹90',
        },
        {
            img: FoodTwo,
            maintext: 'Dosa',
            subtext: 'Red Chutney & Sambar',
            amount: '₹100',
        },
        {
            img: FoodThree,
            maintext: 'Veg meals',
            subtext: 'Sambar & coo',
            amount: '₹90',
        },
        {
            img: FoodFour,
            maintext: 'Andhra veg meals',
            subtext: 'Spicy-meals',
            amount: '₹100',
        },
        {
            img: FoodFive,
            maintext: 'Ghee Dosa',
            subtext: 'Sambar & Chutney',
            amount: '₹90',
        },
        {
            img: FoodSix,
            maintext: 'Mini Meals',
            subtext: 'Yummy Meals',
            amount: '₹100',
        },
        {
            img: FoodSeven,
            maintext: 'Podi Dosa',
            subtext: 'Chutney & Sambar',
            amount: '₹90',
        },
        {
            img: FoodEight,
            maintext: 'Veg Biriyani',
            subtext: 'Spicy & yummy',
            amount: '₹90',
        }
    ];

    return (
        <div className='flex w-5/6 lg:max-w-7xl  mx-auto justify-evenly items-center flex-wrap cursor-pointer  '>
            {Foods.map((food, index) => (
                <div key={index}>
                    <FoodMenu img={food.img} maintext={food.maintext} subtext={food.subtext} amount={food.amount} />
                </div>
            ))}
        </div>
    );
};

export default FoodMenuLayout;

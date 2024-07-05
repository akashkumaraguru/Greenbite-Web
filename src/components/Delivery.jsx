import firstCard from "../assets/Herosection/Order/order 1.png";
import secondCard from "../assets/Herosection/Order/service-card.png";
import thirdCard from "../assets/Herosection/Order/best-Quality.png";

const Delivery = () => {
  const details = [
    {
      img: firstCard,
      maintext: "Easy to Order",
      subtext: "You only order through the web",
    },
    {
      img: secondCard,
      maintext: "Fastest Delivery",
      subtext: "Delivery will be on time",
    },
    {
      img: thirdCard,
      maintext: "Best Quality",
      subtext: "The best quality of food for you",
    },
  ];

  return (
    <div className="w-5/6 lg:max-w-7xl mx-auto">
      <div className="bg-[#F2CB57] mb-20 rounded-3xl   h-[1200px] lg:h-[500px]">
        <div className="lg:flex">
          {details.map((e, index) => (
            <div
              key={index}
              className="  text-center ml-20 h-[350px] rounded-xl p-[30px] "
            >
              <img
                src={e.img}
                alt=""
                className="h-[150px] ml-[150px] lg:ml-20 mx-10 my-20 text-center w-[150px]  "
              />
              <h1 className="text-white text-center mt-10 text-2xl font-semibold ">
                {e.maintext}
              </h1>
              <h1 className="text-white text-center text-l font-semibold ">
                {e.subtext}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Delivery;

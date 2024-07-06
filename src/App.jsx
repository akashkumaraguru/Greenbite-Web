import Navbar from './components/Navbar'
import Herosection from './components/Herosection';
import SecondHeroSection from './components/SecondHeroSection';
import FoodMenuLayout from './layouts/FoodMenuLayout';
import Testimonials from './components/Testimonials';
import Post from './components/Post';
import AboutUs from './components/AboutUs';
import Delivery from './components/Delivery';
import Footer from './components/Footer';


function App() {

  return (
   <div>
    <Navbar/>
    <Herosection/>
    <SecondHeroSection />
    <FoodMenuLayout />
    <Testimonials />
    <Post />
    <AboutUs />
    <Delivery/>
    <Footer/>
   </div>
  )
}

export default App;

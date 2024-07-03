import Navbar from './components/Navbar'
import Herosection from './components/Herosection';
import SecondHeroSection from './components/SecondHeroSection';

import FoodMenuLayout from './layouts/FoodMenuLayout';


function App() {

  return (
   <div>
    <Navbar/>
    <Herosection/>
    <SecondHeroSection />
    <FoodMenuLayout />
   </div>
  )
}

export default App;

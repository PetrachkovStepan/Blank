import "./App.css";
import freeSpaceBG from "./Assets/FreeSpaceBG.png"
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Homepage";
import OurServices from "./pages/OurServices/OurServices";
import Partnerships from "./pages/Partnerships/Partnerships";
import PersonInfo from "./pages/PersonInfo/PersonInfo";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";

function App() {
  return (
    <div className="App">
      <Home/>
      <WhatWeDo/>
      <OurServices/>
      <img src={freeSpaceBG} alt="" id="freeSpace"/>
      <PersonInfo/>
      <Partnerships/>
      <ContactUs/>
    </div>
  );
}

export default App;

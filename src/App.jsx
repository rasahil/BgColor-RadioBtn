import { Route, Routes } from "react-router-dom";
import Help from "./Components/Help";
import Home from "./Components/Home";
import About from "./Components/About";
// import  Navbar  from "./Components/Navbar";
import { NavbarSimple } from "./Components/NavbarSimple";
import Contact from "./Components/Contact";
import { Radiolist } from "./Components/Radiolist";
import { Gallery } from "./Components/Gallery";

const App = () => {
  return (
    <>
    <div ><Radiolist/></div>
    {/* <div><Navbar/></div> */}
    <div><NavbarSimple/></div>
      <Routes>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;

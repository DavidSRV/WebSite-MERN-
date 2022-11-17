import "./_App.scss";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

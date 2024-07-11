import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./8routeRelated/Home";
import Contact from "./8routeRelated/Contact";
import About from "./8routeRelated/About";

const Routing = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul className="flex ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

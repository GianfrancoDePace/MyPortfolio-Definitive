import { HashLink as Link } from "react-router-hash-link";
import Home from "../../Assets/home.png";
import Info from "../../Assets/info.png";
import Skills from "../../Assets/pencil.png";
import Projects from "../../Assets/analytics.png";
import ContactMe from "../../Assets/video-call.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-left">
        <Link to="#home" smooth>
          <img src={Home} className="icons-navbar" alt="" />
        </Link>
      </div>
      <div id="navbar-right">
        <Link to="#About-me" smooth>
          <img src={Info} className="icons-navbar" alt="" />
        </Link>
        <Link to="#Skills" smooth>
          <img src={Skills} className="icons-navbar" alt="" />
        </Link>
        <Link to="#Projects" smooth>
          <img src={Projects} className="icons-navbar" alt="" />
        </Link>
        <Link to="#Contact-me" smooth>
          <img src={ContactMe} className="icons-navbar" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

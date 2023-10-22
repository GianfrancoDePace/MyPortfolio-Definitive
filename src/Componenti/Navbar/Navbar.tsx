import { Link } from "react-router-dom";
import Home from "../../Assets/home.png";
import Info from "../../Assets/info.png";
import Skills from "../../Assets/pencil.png";
import Projects from "../../Assets/analytics.png";
import ContactMe from "../../Assets/video-call.png";
import "../../Style/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-left">
        <Link to="#home" >
          <img src={Home} className="icons-navbar" alt="" />
        </Link>
      </div>
      <div id="navbar-right">
        <Link to="/About-me" >
          <img src={Info} className="icons-navbar" alt="" />
        </Link>
        <Link to="/Skills" >
          <img src={Skills} className="icons-navbar" alt="" />
        </Link>
        <Link to="/Projects" >
          <img src={Projects} className="icons-navbar" alt="" />
        </Link>
        <Link to="/Contact-me" >
          <img src={ContactMe} className="icons-navbar" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

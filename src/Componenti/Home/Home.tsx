import { HashLink as Link } from "react-router-hash-link";
import ProPic from "../../Assets/developer-removebg-preview.png";
//import Download from "../../Assets/download.png";
import "./Home.css";

const Home = () => {
  function resumelink() {
    window.open(
      "https://www.canva.com/design/DAFU09s_K6M/NhObfiAH7wfQ__ZV4WIOyw/edit"
    );
  }

  return (
    <div id="home">
      <div id="profile">
        <img src={ProPic} id="ProPic" alt="profile-picture" />
      </div>
      <div className="descrizione">
        <h1>
          Hi,i'm Gianfranco De Pace <br />a wannabe
        </h1>
        <h2> FULL STACK DEVELOPER</h2>
        <div className="HomeButton">
          <div className="Button">
            <Link to={"#Projects"} smooth>
              <button className="ProjectButton"> Projects </button>
            </Link>
          </div>
          <div id="resume">
            <button id="resumeButton" onClick={resumelink}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

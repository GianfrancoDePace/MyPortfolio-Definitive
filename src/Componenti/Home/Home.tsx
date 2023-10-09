import { HashLink as Link } from "react-router-hash-link";
import ProPic from "../../Assets/developer-removebg-preview.png";
import "../../Style/Home.css";

const Home = () => {
  return (
    <div id="home">
      <div id="profile">
        <img src={ProPic} id="profilePicture" alt="profile-picture" />
      </div>
      <div className="descrizione">
        <h1>
          Hi,i'm Gianfranco De Pace <br /> a wannabe
        </h1>
        <h2> FULL STACK DEVELOPER</h2>
        <div>
          <Link to={"#Projects"} smooth>
          <button className="buttons"> Projects </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

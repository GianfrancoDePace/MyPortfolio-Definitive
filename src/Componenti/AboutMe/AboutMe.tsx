import { HashLink as Link } from "react-router-hash-link";
import Photo from "../../Assets/icon-developer-12.png";
import "./AboutMe.css";
import DataFetch from "./DataFetcth/DataFetch";

const AboutMe = () => {
  return (
    <div id="About-me">
        <img src={Photo} className="immagine" alt="" />
        <div className="descrizione">
          <p>
            Hi,I'm Gianfranco, a full stack developer, based in Monza,
            Italy. <br />
            I'm currently studing at <strong>JAC</strong>. I like science,
            engeneering and coding.<br />
            My goal is to create stunning and user-friendly applications to help
            people get connected. <hr />
            Take a look at what I can do: 
          </p>
          <div className="Button">
            <Link to={"#Projects"} smooth>
              <button className="ProjectButton"> Projects </button>
            </Link>
            <Link to={"#Contact-me"} smooth>
              <button id="ContactMe"> ContactMe </button>
            </Link>
          </div>
          <hr />
          <div id="GitHubStats">
            <p>
               If you are interested those are my Github stats:
              <DataFetch />
            </p>
          </div>
        </div>
      </div>
  );
};

export default AboutMe;

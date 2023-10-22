import { Link } from "react-router-dom";
import DataFetch from "./DataFetcth/DataFetch";
import Photo from "../../Assets/icon-developer-12.png";
import GitHub from "../../Assets/github.png";
import "./../../Style/AboutMe.css";

const AboutMe = () => {

  return (
    <div id="About-me">
      <img src={Photo} className="immagine" alt="" />
      <div className="descrizione">
        <p>
          Hi,I'm Gianfranco, a full stack developer, based in Monza, Italy.{" "}
          <br />
          I'm currently studing at <strong>JAC</strong>. I like science,
          engeneering and coding.
          <br />
          My goal is to create stunning and user-friendly applications to help
          people get connected.
          <hr />
          Take a look at what I can do:
        </p>
        <div className="buttons-box">
          <Link to={"/Projects"} >
            <button className="buttons"> Projects </button>
          </Link>
          <Link to={"/Contact-me"} >
            <button className="buttons"> ContactMe </button>
          </Link>
        </div>
        <hr />
        <div id="gitHubStats">
          <p>
            If you are interested those are my Github stats:
            <DataFetch />
          </p>
          <button className="link-buttons" >
            <a href="https://github.com/GianfrancoDePace" target="_blank">
              <img src={GitHub} className="bottone" alt="Github" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

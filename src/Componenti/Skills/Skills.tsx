import HTML from "../../Assets/html-5.png";
import CSS from "../../Assets/css-3.png";
import Boostrap from "../../Assets/bootstrap.png";
import React from "../../Assets/physics.png";
import Javascript from "../../Assets/java-script.png";
import Java from "../../Assets/java.png";
import Python from "../../Assets/python.png";
import MySQL from "../../Assets/mysql.png";
import Csharp from "../../Assets/c-sharp.png";
import WordPress from "../../Assets/wordpress.png";
import Github from "../../Assets/github.png";
import Unity from "../../Assets/unity.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="Skills">
        <h3 className="title"> Known languages:</h3>
        <div className="FrontEnd">
          <h4 className=""> Front-End: </h4>
          <div className="iconeLinguaggioProg">
            <img src={HTML} className="LinguaggioProg" alt="" />
            <img src={CSS} className="LinguaggioProg" alt="" />
            <img src={Boostrap} className="LinguaggioProg" alt="" />
            <img src={Javascript} className="LinguaggioProg" alt="" />
            <img src={React} className="LinguaggioProg" alt="" />
          </div>
        </div>
        <div className="BackEnd">
          <h4 className=""> Back-End:</h4>
          <div className="iconeLinguaggioProg">
            <img src={Java} className="LinguaggioProg" alt="" />
            <img src={Python} className="LinguaggioProg" alt="" />
            <img src={MySQL} className="LinguaggioProg" alt="" />
            <img src={Csharp} className="LinguaggioProg" alt="" />
          </div>
        </div>
        <div>
          <h4 className=""> Others Skills or IDE: </h4>
          <div className="iconeLinguaggioProg">
            <img src={WordPress} className="LinguaggioProg" alt="" />
            <img src={Github} className="LinguaggioProg" alt="" />
            <img src={Unity} className="LinguaggioProg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

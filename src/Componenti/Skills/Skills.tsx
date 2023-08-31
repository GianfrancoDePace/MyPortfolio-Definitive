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
      <div id="skills">
        <h3 className="linguaggi-conosciuti"> Known languages:</h3>

        <div className="linguaggi-box">
          <div className="boxSkills">
            <h4 className="sottotitolo"> Front-End: </h4>
            <div className="iconeLinguaggioProg">
              <img src={HTML} className="linguaggioProg-icon" alt="" />
              <img src={CSS} className="linguaggioProg-icon" alt="" />
              <img src={Boostrap} className="linguaggioProg-icon" alt="" />
              <img src={Javascript} className="linguaggioProg-icon" alt="" />
              <img src={React} className="linguaggioProg-icon" alt="" />
            </div>
          </div>
          <div className="boxSkills">
            <h4 className="sottotitolo"> Back-End:</h4>
            <div className="iconeLinguaggioProg">
              <img src={Java} className="linguaggioProg-icon" alt="" />
              <img src={Python} className="linguaggioProg-icon" alt="" />
              <img src={MySQL} className="linguaggioProg-icon" alt="" />
              <img src={Csharp} className="linguaggioProg-icon" alt="" />
            </div>
          </div>
          <div className="boxSkills">
            <h4 className="sottotitolo"> Others Skills or IDE: </h4>
            <div className="iconeLinguaggioProg">
              <img src={WordPress} className="linguaggioProg-icon" alt="" />
              <img src={Github} className="linguaggioProg-icon" alt="" />
              <img src={Unity} className="linguaggioProg-icon" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

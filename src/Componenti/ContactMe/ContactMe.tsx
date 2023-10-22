import LinkedIn from "../../Assets/LinkedIn.png";
import GitHub from "../../Assets/github.png";
import Mail from "../../Assets/arroba-sign.png";
import Telegram from "../../Assets/telegram.png";
import "./../../Style/ContactMe.css";

const ContactMe = () => {
  return (
    <div id="Contact-me">
      <div className="Text">
        <h3> Let's get in touch: </h3>
      </div>
      <div className="button">
        <button className="link-buttons">
          <a href="https://www.linkedin.com/in/gianfranco-de-pace-42172223b/">
            <img src={LinkedIn} className="bottone" alt="Linkedin" />
          </a>
        </button>
        <button className="link-buttons">
          <a href="https://github.com/GianfrancoDePace">
            <img src={GitHub} className="bottone" alt="Github" />
          </a>
        </button>
        <button className="link-buttons">
          <a href="https://github.com/GianfrancoDePace">
            <img
              src={Telegram}
              className="bottone"
              alt="Telegram"
            />
          </a>
        </button>
        <button className="link-buttons">
          <img
            src={Mail}
            className="bottone"
            alt="Twitter"
          />
        </button>
      </div>
    </div>
  );
};

export default ContactMe;

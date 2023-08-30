import LinkedIn from "../../Assets/LinkedIn.png";
import GitHub from "../../Assets/github.png";
import Mail from "../../Assets/arroba-sign.png";
import Telegram from "../../Assets/telegram.png";
import "./ContactMe.css";

const ContactMe = () => {
  function ClickLinkedIn() {
    window.open("https://www.linkedin.com/in/gianfranco-de-pace-42172223b/");
  }
  function ClickGitHub() {
    window.open("https://github.com/GianfrancoDePace");
  }
  function ClickMail() {
    window.open("https://gmail.com/");
  }

  return (
    <div id="Contact-me">
      <div className="Text">
        <h3> Let's get in touch: </h3>
      </div>
      <div className="button">
        <button className="link-buttons" onClick={ClickLinkedIn} >
          <img src={LinkedIn} className="bottone" alt="Linkedin" />
        </button>
        <button className="link-buttons" onClick={ClickGitHub}>
          <img src={GitHub} className="bottone" alt="Github" />
        </button>
        <button className="link-buttons">
          <img
            src={Telegram}
            className="bottone"
            onClick={ClickMail}
            alt="Telegram"
          />
        </button>
        <button className="link-buttons">
          <img
            src={Mail}
            className="bottone"
            onClick={ClickMail}
            alt="Twitter"
          />
        </button>
      </div>
    </div>
  );
};

export default ContactMe;

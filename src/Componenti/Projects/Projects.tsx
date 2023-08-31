import Zelda from "../../Assets/Zelda.png";
import GameShop from "../../Assets/gamestore projects[2329].png";
import "./Projects.css";

const Projects = () => {
  
  function ZeldaLink(){
    window.open("https://github.com/GianfrancoDePace/Zelda");
  }
  function WpLink(){
    window.open("hungry-yogurt.localsite.io");
  }
  
  return (
    <>
      <div id="Projects">
        <h2 id="projects-title"> Projects</h2>
        <div id="progetti">
          <div className="progetto">
            <h3>
              Project Z
            </h3>
            <div>
              <img
                src={Zelda}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p>A game created in Phython using Pygame </p>
               <button className="project-button" onClick={ZeldaLink}>See more here</button>
            </div>
          </div>
          <div className="progetto">
            <h3>
              GameShop
            </h3>
            <div>
              <img
                src={GameShop}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p>A shop I created for an exam using Wordpress. <br />
                Username:hammer <br />
                password:gifted
              </p>
              <button className="project-button" onClick={WpLink}>Go to the site</button>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

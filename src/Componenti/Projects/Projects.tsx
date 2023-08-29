import Zelda from "../../Assets/Zelda.png";
import GameShop from "../../Assets/gamestore projects[2329].png";
import "./Projects.css";

const Projects = () => {
  
  function ZeldaLink(){
    window.open("https://github.com/GianfrancoDePace/Zelda");
  }
  
  return (
    <>
      <div id="Projects">
        <h3> Projects</h3>
        <div id="progetti">
          <div className="progetto">
            <h3>
              Project Zelda
            </h3>
            <div>
              <img
                src={Zelda}
                className="ImmagineProgetto"
                alt="immagine-prog1"
                onClick={ZeldaLink}
              />
            </div>
            <div className="descrizione">
              <p>A game created in Phython using Pygame </p>
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
              <p>A shop I created for an exam using Wordpress </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

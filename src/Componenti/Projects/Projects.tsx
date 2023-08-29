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
        <div id="Progetti">
          <div id="Filtro"></div>
          <div className="Progetto">
            <h3>
              Project Z
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
          <div className="Progetto">
            <div>
              <h3>
                E-shop 
              </h3>
              <img
                src={GameShop}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p>E-shop createsd with Wordpress</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

import Immagine from "../../Assets/fasi-di-progetto-1130x753.png";
import "./Projects.css";

const Projects = () => {
  
  function Zelda(){
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
              Social Page: Work in Progress
            </h3>
            <div>
              <img
                src={Immagine}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p> Social network</p>
            </div>
          </div>
          <div className="Progetto">
            <h3>
              Project Z
            </h3>
            <div>
              <img
                src={Immagine}
                className="ImmagineProgetto"
                alt="immagine-prog1"
                onClick={Zelda}
              />
            </div>
            <div className="descrizione">
              <p>Piccolo videogioco creato interamente in Python</p>
            </div>
          </div>
          <div className="Progetto">
            <div>
              <h3>
                E-shop 
              </h3>
              <img
                src={Immagine}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p>E-commerce creato tramite l'utilizzo di Wordpress, utilizzando diversi plugin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

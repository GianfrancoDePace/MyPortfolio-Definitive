import Zelda from "../../Assets/Zelda.png";
import GameShop from "../../Assets/gamestore projects[2329].png";
import "../../Style/Projects.css";

const Projects = () => {

  return (
    <>
      <div id="Projects">
        <h2 id="projects-title"> Projects</h2>
        <div id="progetti">
          <div className="progetto">
            <h3>Project Z</h3>
            <div>
              <img
                src={Zelda}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p>A game created in Phython using Pygame </p>
              <button className="project-button">
                <a href="https://github.com/GianfrancoDePace/Zelda" target="_blank">
                  See more here
                </a>
              </button>
            </div>
          </div>
          <div className="progetto">
            <h3>GameShop</h3>
            <div>
              <img
                src={GameShop}
                className="ImmagineProgetto"
                alt="immagine-prog1"
              />
            </div>
            <div className="descrizione">
              <p>
                A shop I created for an exam using Wordpress. <br />
                Username:hammer <br />
                password:gifted <br />
                currently offline
              </p>
              <button className="project-button">
                <a href="hungry-yogurt.localsite.io" target="_blank">Go to the site</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

import Navbar from "./Componenti/Navbar/Navbar.tsx";
import Home from "./Componenti/Home/Home.tsx";
import AboutMe from "./Componenti/AboutMe/AboutMe.tsx";
import Skills from "./Componenti/Skills/Skills.tsx";
import Projects from "./Componenti/Projects/Projects.tsx";
import ContactMe from "./Componenti/ContactMe/ContactMe.tsx";
import Footer from "./Componenti/Footer/Footer.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <br />
      <AboutMe />
      <Skills />
      <br />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;

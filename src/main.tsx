import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componenti/Home/Home";
import AboutMe from "./Componenti/AboutMe/AboutMe";
import DataFetch from "./Componenti/AboutMe/DataFetcth/DataFetch";
import Skills from "./Componenti/Skills/Skills";
import Projects from "./Componenti/Projects/Projects.tsx";
import App from "./App";
import ContactMe from "./Componenti/ContactMe/ContactMe.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="fetch" element={<DataFetch />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact-me" element={<ContactMe />} />

    </Routes>
  </BrowserRouter >,
  document.getElementById("root")
);



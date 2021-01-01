import React from "react";
import { NavBar, Footer } from "./components";
import { Courses, Experience, Landing, Projects, Skills } from "./containers";
import {
  faGithub,
  faLinkedin,
  faHubspot
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileAlt,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHubspot, faGithub, faLinkedin, faFileAlt, faExternalLinkAlt);

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto mb-10 sm:mb-0">
        <Landing />
        <Skills />
        <Experience />
        <Courses />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import HeroBanner from "./components/HeroBanner";
import {} from "./index.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBackground from "./components/ParticlesBackground";
function App() {
  return (
    <>
      <ParticlesBackground />
      <NavBar />
      <HeroBanner />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

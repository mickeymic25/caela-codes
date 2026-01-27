import HeroBanner from "./components/sections/HeroBanner";
import {} from "./index.css";
import NavBar from "./components/common/NavBar";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/common/Footer";
import Hobbies from "./components/sections/Hobbies";

import ParticlesBackground from "./components/common/ParticlesBackground";
function App() {
  return (
    <>
      <ParticlesBackground />
      <NavBar />

      <HeroBanner />
      <AboutMe />
      <Projects />
      <Hobbies />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

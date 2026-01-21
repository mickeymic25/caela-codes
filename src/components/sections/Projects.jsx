import Card from "../common/Cards";
import { projectDetails } from "../data/data.js";

function Projects() {
  return (
    <section
      id="projects"
      className="projects md:max-w-screen p-4 flex flex-col bg-white"
    >
      <h1 className="projects-title flex justify-center py-3 ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 justify-items-center">
        <Card {...projectDetails[0]} />
        <Card {...projectDetails[1]} />
        <Card {...projectDetails[2]} />
        <Card {...projectDetails[3]} />
        <Card {...projectDetails[4]} />
        <Card {...projectDetails[5]} />
      </div>
    </section>
  );
}

export default Projects;

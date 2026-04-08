import Cards from "../common/Cards.tsx";
import { projectDetails } from "../data/data.ts";

function Projects() {
  return (
    <section
      id="projects"
      className="projects md:max-w-screen p-4 flex flex-col bg-white"
    >
      <h1 className="projects-title flex justify-center py-3 ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 justify-items-center">
        <Cards {...projectDetails[0]} />
        <Cards {...projectDetails[1]} />
        <Cards {...projectDetails[2]} />
        <Cards {...projectDetails[3]} />
        <Cards {...projectDetails[4]} />
        <Cards {...projectDetails[5]} />
      </div>
    </section>
  );
}

export default Projects;

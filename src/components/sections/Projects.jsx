import Card from "../common/Cards";
import { projectDetails } from "../data/data.js";

function Projects() {
  return (
    <div className="projects md:max-w-screen m-8 ">
      <h1 className="projects-title flex justify-center pt-4 pb-4">Projects</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 justify-center">
        <Card {...projectDetails[0]} />
        <Card {...projectDetails[1]} />
        <Card {...projectDetails[2]} />
        <Card {...projectDetails[3]} />
        <Card {...projectDetails[4]} />
        <Card {...projectDetails[5]} />
      </div>
    </div>
  );
}

export default Projects;

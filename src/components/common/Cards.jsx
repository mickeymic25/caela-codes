function Cards({ image, title, description }) {
  return (
    <div className="project-cards relative border w-[450px] h-[400px] bg-white border-gray-50 rounded-4xl shadow-lg  shadow-[#FFBB5C]">
      <div className="project-content p-4">
        <img src={image} className="object-cover" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-buttons flex gap-3 absolute bottom-3.5 ">
          <button>View Project</button>
          <button>View Code</button>
        </div>
      </div>
    </div>
  );
}
export default Cards;

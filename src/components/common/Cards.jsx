function Cards({ image, title, description, button }) {
  return (
    <div className="project-cards flex sm:flex-row md:flex-col border w-full h-full sm:max-w-sm md:max-w-md lg:max-w-lg  bg-white border-gray-50 rounded-4xl shadow-lg  shadow-[#FFBB5C]">
      <div className="project-content flex flex-col flex-grow p-6">
        <img
          src={image}
          className="object-cover rounded-xl h-full bg-orange-100"
        />
        <h2 className=" font-bold mt-2 mb-2">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-row  gap-4 py-2 mt-auto">
          {button?.length > 0 &&
            button.map((btn, i) => {
              return (
                <button
                  key={i}
                  href={btn.link}
                  onClick={() => {
                    window.location.href = btn.link;
                  }}
                >
                  {btn.text}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Cards;

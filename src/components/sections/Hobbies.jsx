import { hobbyPhoto } from "../data/data";

function Hobbies() {
  return (
    <div className=" bg-orange-100 md:max-w-screen md:h-screen p-4">
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="py-3">My Hobbies </h1>
        <p className="pb-2">
          Outside of coding, I’m a curious creator who loves to make, explore,
          and learn. Whether it’s arts and crafts, photography, or diving into a
          good book, I’m always finding new ways to stay inspired.
        </p>
      </div>

      <div className="columns-1 md:columns-5 gap-4 object-cover overflow-hidden p-6 bg-white rounded-2xl">
        {hobbyPhoto.map((hobby, index) => {
          return (
            <div
              key={index}
              className="relative group p-1 break-inside-avoid overflow-hidden"
            >
              <img
                src={hobby.image}
                alt={hobby.alt}
                className="w-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center  p-4 rounded-2xl">
                <p className="text-base text-white text-center">
                  {hobby.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hobbies;

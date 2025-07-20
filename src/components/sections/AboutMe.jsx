import { skillLogo } from "../data/data";

function AboutMe() {
  return (
    <div className="about-me-section flex flex-col items-center justify-center bg-orange-100 md:max-w-screen md:h-screen px-4">
      {/*ABOUT ME TITLE*/}
      <h1 className="about-me-title # pt-2 pb-3">About Me</h1>

      <div className="about-me-para flex flex-row items-center justify-center w-full ">
        {/*SKILLS AND TOOLS*/}
        <div className="skills z-100 bg-transparent rounded-4xl shadow-2xl shadow-orange-200  p-24  grid grid-cols-3 grid-rows-3 gap-3">
          {skillLogo.map((skill, index) => {
            return (
              <div key={index} className="flex flex-col items-center p-3">
                <img src={skill.image} alt={skill.alt} className="h-20" />
                <h3>{skill.title}</h3>
              </div>
            );
          })}
        </div>

        {/*ABOUT ME DETAILS*/}

        <div className="about-me-details z-0 w-3/5 p-16 border border-[#F1A661] bg-[#E9A319] space-y-8 rounded-tr-[10rem] rounded-bl-[10rem] text-left">
          <p>
            I build accessible, responsive websites using HTML, CSS, JavaScript,
            and React. I love crafting clean, interactive user experiences, and
            I’m always exploring new tools and technologies to push my skills
            and creativity further.
          </p>
          <p>
            Perform the Bulgarian split squats on one leg for 45 seconds, then
            immediately switch to the other for another 45 seconds. After that,
            immediately move to the elevator squats for 45 seconds. That's one
            round. Immediately begin the next round. Perform three total rounds.
            As the exercises get progressively the reps go up working each
            movement pattern at a high intensity, and not limited by anyone body
            part.To perform the challenge, warm up thoroughly and set a
            countdown timer for 15 minutes. In this time, build towards the
            heaviest weight you can manage to complete a full round of the
            complex, without letting go of the bar. Make a note of the weight
            you finish on and attempt to go heavier in subsequent attempts,
            building strength not to mention resilience
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

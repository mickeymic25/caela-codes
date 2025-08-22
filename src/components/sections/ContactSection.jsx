import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function ContactSection() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center md:max-w-screen md:h-1/2 p-8">
      <h1 className="contact-title py-3">Contact me </h1>
      <p className="text-wrap text-left text-base sm:text-lg md:text-xl">
        I am currently open to entry-level software development roles and
        collaboration opportunities. Whether you're building something exciting
        or looking for a motivated team member, I would love to hear from you!
        Feel free to reach out via email, LinkedIn, or GitHub.
      </p>
      <div className="flex gap-14">
        <a href="" alt="e-mail envelope icon">
          <FaEnvelope color="#E9A319" className="w-10 h-[100px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/micaela-opoku-mensah/"
          alt="Linkedin logo"
        >
          <FaLinkedin color="#E9A319" className="w-10 h-[100px]" />
        </a>

        <a href="https://github.com/mickeymic25" alt="Github logo">
          <FaGithub color="#E9A319" className="w-10 h-[100px]" />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;

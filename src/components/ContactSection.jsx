import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ContactForm from "./ContactForm";
function ContactSection() {
  return (
    <div className=" bg-orange-100 md:max-w-screen md:h-100vh">
      <h1 className="contact-title flex justify-center">Contact me </h1>
      <div className=" flex contact-content">
        <DotLottieReact
          src="https://lottie.host/aee83590-7177-47d1-bd85-de6752055bfe/n4GlDuPE9D.lottie"
          loop
          autoplay
          className="w-3/5"
        />

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;

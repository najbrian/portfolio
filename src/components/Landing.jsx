
import ContactForm from "./ContactForm"
import AboutMe from "./AboutMe"
import Experience from './Experience'
import Projects from "./Projects"

const Landing = () => {
  return (
    <>
      <section id="about">
        <AboutMe />
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
};

export default Landing;

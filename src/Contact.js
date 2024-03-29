import "./Contact.css";
import ContactList from "./ContactList";
import landscape from "./assets/img1.jpg";
import resume from "./assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const contacts = [
    {
      link: resume,
      name: "Resume",
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      link:
        "https://www.linkedin.com/in/annabuyevich/%3E?original_referer=https%3A%2F%2Fannabuyevich.com%2F",
      name: "Linkedin",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
    {
      link: "mailto:avbuyevich@gmail.com",
      name: "Email",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      link: "https://github.com/annabuyevich",
      name: "Github",
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
  ];

  return (
    <section className="panel contact">
      <div className="text">
        <h2>Contact Me</h2>
        {contacts && <ContactList contacts={contacts} />}
      </div>
      <img src={landscape} alt="landscape" />
    </section>
  );
};

export default Contact;

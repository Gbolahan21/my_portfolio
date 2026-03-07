import { useEffect } from "react";
import Typed from "typed.js";
import { useForm, ValidationError } from "@formspree/react";
import "./App.css";

import frontendEngineer from './assets/sodiq.jpeg'

function App() {

  const [state, handleSubmit] = useForm("xdawknka");

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollBtn = document.querySelector(".scroll-up-btn");

      if (window.scrollY > 20) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }

      if (window.scrollY > 500) {
        scrollBtn?.classList.add("show");
      } else {
        scrollBtn?.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // typing animation
    const typed1 = new Typed(".typing", {
      strings: ["Developer", "Pentester"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    const typed2 = new Typed(".typing-2", {
      strings: ["Developer", "Pentester"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const toggleMenu = () => {
    document.querySelector(".navbar .menu")?.classList.toggle("active");
    document.querySelector(".menu-btn i")?.classList.toggle("active");
  };

  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "Bootstrap", level: 100 },
    { name: "React", level: 80 },
    { name: "MySQL", level: 70 },
    { name: "Tailwind", level: 50 },
    { name: "Node", level: 60 },
    { name: "Python", level: 70 },
  ];

  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <>
      <div className="scroll-up-btn" onClick={scrollToTop}>
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#home">MOH</a></div>
          <ul className="menu">
              <li><a href="#home" className="menu-btn">Home</a></li>
              <li><a href="#about" className="menu-btn">About</a></li>
              <li><a href="#services" className="menu-btn">Services</a></li>
              <li><a href="#skills" className="menu-btn">Skills</a></li>
              <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="column left">
                <div className="text-1">Hi, my name is</div>
                <div className="text-2">Sodiq Mohammed</div>
                <div className="text-3">And I'm a <span className="typing"></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* about section start  */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
                <img src={frontendEngineer} alt="Sodiq Mohammed Portrait" />
            </div>
            <div className="column right">
                <div className="text">I'm Sodiq and I'm a <span className="typing-2"></span></div>
                <p>I am a FullStack Developer, and Cybersecurity Engineer (Pentester)</p>
            </div>
          </div>
        </div>
      </section>

      {/* services section start */}
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Web Design</div>
                <p>I design website for small and medium sized business.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                {/* <i className="fas fa-user-secret"></i> */}
                <i className="fas fa-bug"></i>
                <div className="text">Penetration Testing</div>
                <p>I perform vulnerability assessment and penetration testing to secure systems.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-gamepad"></i>
                <div className="text">Game Design</div>
                <p>I design game of your choice either for schools or businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills section start */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>I am an expert in HTML, CSS, Bootstrap, while intermediate in Tailwind, React, MySQL, Python, and Node</p>
            </div>
            <div className="column right">
              {skills.map(skill => (
                <div className="bars" key={skill.name}>
                  <div className="info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={`line ${skill.name.toLowerCase()}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* contact section start */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>Below are the details to get in touch with me</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Sodiq Mohammed</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Samonda, Ibadan</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">mohammedsodiq98@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form onSubmit={handleSubmit}>
                <div className="fields">
                  <div className="field name">
                    <input type="text" name="name" placeholder="Name" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="field email">
                    <input type="email" name="email" placeholder="Email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="field">
                  <input type="text" name="subject" placeholder="Subject" required />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                <div className="field textarea">
                  <textarea rows={5} name="message" placeholder="Message.." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="button-area">
                  <button type="submit" disabled={state.submitting}>Send message</button>
                </div>
                {state.succeeded && (
                  <p className="success-message">✅ Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer section start */}
      <footer>
        <span>Created By Moh | <span className="far fa-copyright"></span> {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </>
  )
}

export default App

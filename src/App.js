import React from "react";
import { Link } from "react-scroll";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">My Portfolio</div>
        <nav className="nav">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="section home">
          <h1>Hi, I'm Your Srinisha</h1>
          <p>Frontend Developer | React Enthusiast</p>
          <a
            href="https://drive.google.com/file/d/1bOIOJUObS07q8XgqdrasuJsDeHzEHtzB/view?usp=drive_link"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </section>

        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with experience in building
            responsive web apps using React.js. I enjoy transforming creative
            ideas into functional, visually appealing websites. My journey in
            web development started with curiosity and grew into a full-fledged
            passion.
          </p>
          <p>
            I have worked on multiple personal and collaborative projects where
            I honed my skills in JavaScript, React, and modern CSS frameworks. I
            love solving problems, learning new technologies, and pushing myself
            to write better, cleaner code.
          </p>
        </section>

        <section className="section education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.Tech in Information Technology</strong>
              <br />K S R Institute for Engineering and Technology, Anna
              University (2024) – CGPA: 8.18
            </li>
            <li>
              <strong>HSC (Higher Secondary)</strong>
              <br />
              Sri Vijay Vidyalaya Matric Higher Secondary School (2019) – 66%
            </li>
            <li>
              <strong>SSLC (Secondary School Certificate)</strong>
              <br />
              Government High School (2017) – 88%
            </li>
          </ul>
        </section>

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <ul>
            <li className="project-item">
              <strong>JOB TRACKER App</strong> - Developed an app to track jobs
              for daily workers using Android Studio.
            </li>
            <li className="project-item">
              <strong>Weather App</strong> - Displays real-time weather data
              using React.js and API integration.
            </li>
            <li className="project-item">
              <strong>ToDo List</strong> - A responsive React.js-based task
              manager with CRUD functionality.
            </li>
            <li className="project-item">
              <strong>E-Commerce Website</strong> - Built using React.js with
              dynamic product listing and API integration.
            </li>
            <li className="project-item">
              <strong>Portfolio Website</strong> - This site itself, created
              using React.js to showcase my skills and work.
            </li>
            <li className="project-item">
              <strong>HODOPHILE</strong> - A tourism project: "Tourism at your
              doorstep" —{" "}
              <a
                href="https://hodophile06-9d13a.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hodophile
              </a>
            </li>
          </ul>
        </section>

        <section className="section certifications">
          <h2>Certifications</h2>
          <ul>
            <li>
              Completed <strong>“REACT JS”</strong> course at{" "}
              <strong>G-TEC</strong>
            </li>
            <li>
              Attended <strong>“WEB DEVELOPMENT”</strong> inplant training at{" "}
              <strong>BRAINERY SPOT TECHNOLOGIES</strong> -
              <a
                href="https://drive.google.com/file/d/1GunzbjgCyTxEUnXFrM8hlzSQev7hKFfP/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> Certificate</span>
              </a>
            </li>
            <li>
              Completed <strong>"PROGRAMMING ESSENTIALS IN PYTHON"</strong> from
              Cisco Networking Academy -
              <a
                href="https://drive.google.com/file/d/1GxAGEsimHy6vrbaz-QRFXBwDr0x5paf5/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> Certificate</span>
              </a>
            </li>
            <li>
              Completed <strong>“ANDROID APPLICATION DEVELOPMENT”</strong>{" "}
              course from <strong>GREAT LEARNING - </strong>
              <a
                href="https://drive.google.com/file/d/1H-vq6iH8AXkUqQqnKGpNeTW69_hOnw59/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate
              </a>
            </li>
          </ul>
        </section>

        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React.js"
                width="30"
              />{" "}
              React.js
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width="30"
              />{" "}
              JavaScript
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                width="30"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                width="30"
                style={{ marginLeft: "8px" }}
              />{" "}
              HTML & CSS
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="SQL"
                width="30"
              />{" "}
              SQL
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                width="30"
              />{" "}
              Java
            </li>
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          Srinisha Pachiyappan
          <br />
          <a href="mailto:srinishapachiyappan2003@gmail.com">
            srinishapachiyappan2003@gmail.com
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

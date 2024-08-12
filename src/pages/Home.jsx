import { Children, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./home.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profileImg from "../assets/andrew-memoji.png";
import projects from "../data.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="intro-section">
          <section className="name-section">
            <img
              className="prof-pic"
              src={profileImg}
              alt="Profile picture"
            ></img>
            <h2 id="full-name">Andrew Ward-Jones</h2>
            <h3 id="job-title-intro">Junior Full Stack Engineer</h3>

            <a
              href="https://github.com/Koalaphant"
              target="_blank"
              className="icon-links"
            >
              <FontAwesomeIcon className="social-links" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewwardjones/"
              target="_blank"
              className="icon-links"
            >
              <FontAwesomeIcon className="social-links" icon={faLinkedin} />
            </a>
            <a
              href="mailto:andrew.wardjones@icloud.com?subject=Portfolio Inquiry"
              className="icon-links"
            >
              <FontAwesomeIcon className="social-links" icon={faEnvelope} />
            </a>

            <section className="skills-list">
              <ul>
                <li className="skills">HTML</li>
                <li className="skills">CSS</li>
                <li className="skills">JavaScript</li>
                <li className="skills">TypeScript</li>
                <li className="skills">Jest</li>
                <li className="skills">Node.js</li>
                <li className="skills">React</li>
                <li className="skills">Next.js</li>
                <li className="skills">React Native</li>
                <li className="skills">Express.js</li>
                <li className="skills">PSQL</li>
                <li className="skills">Supabase</li>
                <li className="skills">Firebase</li>
                <li className="skills">Tailwind</li>
              </ul>
            </section>
          </section>
          <section className="about-text">
            <h2 className="section-titles">About</h2>

            <p id="about-info">
              Hello and welcome to my portfolio! I have recently graduated from
              the Northcoders Full Stack Coding Bootcamp and with it I have
              gained a vast amount of knowledge to take my coding journey to the
              next level.
            </p>
            <h2 className="section-titles">Professional Experience</h2>

            <h3 className="job-title">Ticket Support, Ascend Agency</h3>
            <p className="job-date">05/2024 — 07/2024</p>
            <div className="professional-experience-desc">
              <p className="paragraph-style">
                During my work experience at Ascend, I actively engaged in both
                independent and collaborative tasks, handling a variety of
                real-world support tickets that honed my technical abilities and
                prepared me for a professional environment.
              </p>
              <p className="paragraph-style">
                My role centered around addressing support tickets, where I
                gained practical experience in troubleshooting and resolving
                issues using <strong>Laravel</strong> and <strong>PHP</strong>.
                This work involved maintaining and enhancing back-end systems,
                ensuring smooth functionality and integrating new features as
                required.
              </p>

              <p className="paragraph-style">
                In addition to back-end development, I also contributed to
                front-end tasks using <strong>Vue.js</strong>. This allowed me
                to develop dynamic, user-friendly interfaces, effectively
                bridging the gap between the server-side logic and the user
                experience.
              </p>

              <p className="paragraph-style">
                This experience provided me with a well-rounded skill set in
                full-stack development, as well as the ability to work
                efficiently both independently and as part of a team.
              </p>
            </div>

            <h3 className="job-title" style={{ marginTop: "40px" }}>
              Trainee Software Developer, Northcoders
            </h3>
            <p className="job-date">01/2023 — 04/2024</p>
            <div className="professional-experience-desc">
              <p className="paragraph-style">
                Through a combination of solo and paired programming, I
                completed numerous real-world projects during my time at
                Northcoders, equipping me with the skills necessary to thrive in
                a professional environment.
              </p>

              <p className="paragraph-style">
                The course comprised four phases. In the first phase, I focused
                on mastering the fundamentals of programming practices using
                JavaScript. This phase also included comprehensive coverage of
                test-driven development and pair programming techniques.
              </p>

              <p className="paragraph-style">
                Moving forward, I delved into backend development, employing
                asynchronous programming concepts with Node.js. During this
                phase, I created my own API using Express and SQL to manage
                data.
              </p>

              <p className="paragraph-style">
                Transitioning to the next phase, I utilized the React framework
                to visually present the data on the frontend, enabling access to
                the API.
              </p>

              <p className="paragraph-style">
                Finally, in the concluding three weeks, we collaborated in
                groups to develop an application of our choice.
              </p>
            </div>

            <div className="projects">
              <div className="project-grid">
                <h2 className="section-titles">Projects</h2>
                {projects.map((project, index) => (
                  <ProjectCard project={project} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

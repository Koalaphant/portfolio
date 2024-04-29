import { Children, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./home.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//components
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select();

      if (error) {
        setFetchError("Could not fetch the projects");
        setProjects(null);
        console.log(error);
      }

      if (data) {
        setProjects(data);
        setFetchError(null);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="container">
        <div className="intro-section">
          <section className="name-section">
            <img
              className="prof-pic"
              src="../src/assets/profile-img.jpg"
              alt=""
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
            <a href="" className="icon-links">
              <FontAwesomeIcon className="social-links" icon={faLinkedin} />
            </a>
            <a href="" className="icon-links">
              <FontAwesomeIcon className="social-links" icon={faEnvelope} />
            </a>

            <section className="skills-list">
              <ul>
                <li className="skills">HTML</li>
                <li className="skills">CSS</li>
                <li className="skills">JavaScript</li>
                <li className="skills">Node.js</li>
                <li className="skills">React.js</li>
                <li className="skills">React Native</li>
                <li className="skills">Express.js</li>
                <li className="skills">PSQL</li>
                <li className="skills">Supabase</li>
                <li className="skills">Firebase</li>
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
            <p className="job-date">01/2023 — 04/2024</p>
            <h3 className="job-title">
              Trainee Software Developer, Northcoders
            </h3>
            <p className="professional-experience-desc">
              Through a combination of solo and paired programming, I completed
              numerous real-world projects during my time at Northcoders,
              equipping me with the skills necessary to thrive in a professional
              environment.
              <br></br>
              <br></br>
              The course comprised four phases. In the first phase, I focused on
              mastering the fundamentals of programming practices using
              JavaScript. This phase also included comprehensive coverage of
              test-driven development and pair programming techniques.
              <br></br>
              <br></br>
              Moving forward, I delved into backend development, employing
              asynchronous programming concepts with Node.js. During this phase,
              I created my own API using Express and SQL to manage data.
              <br></br>
              <br></br>
              Transitioning to the next phase, I utilised the React framework to
              visually present the data on the frontend, enabling access to the
              API.
              <br></br>
              <br></br>
              Finally, in the concluding three weeks, we collaborated in groups
              to develop an application of our choice.
            </p>

            {fetchError && <p>{fetchError}</p>}
            {projects && (
              <div className="projects">
                <div className="project-grid">
                  <h2 className="section-titles">Projects</h2>
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

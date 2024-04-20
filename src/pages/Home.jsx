import { Children, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./home.css";

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
            <h2 id="full-name">Andrew Ward-Jones</h2>
            <h3 id="job-title">Junior Full Stack Engineer</h3>
            <p id="profile-blurb">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
            <FontAwesomeIcon className="social-links" icon={faGithub} />
            <FontAwesomeIcon className="social-links" icon={faLinkedin} />
          </section>
          <section className="about-text">
            <h2 className="section-titles">About</h2>
            <p id="about-info">
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio. My main focus these
              days is building accessible user interfaces for our customers at
              Klaviyo.<br></br> <br></br>I most enjoy building software in the
              sweet spot where design and engineering meet — things that look
              good but are also built well under the hood. In my free time, I've
              also released an online video course that covers everything you
              need to know to build a web app with the Spotify API.<br></br>
              <br></br>When I’m not at the computer, I’m usually rock climbing,
              reading, hanging out with my wife and two cats, or running around
              Hyrule searching for Korok seeds.
            </p>
          </section>
        </div>
        <div className="col-2">
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
        </div>
      </div>
    </>
  );
};

export default Home;

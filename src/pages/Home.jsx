import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

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

    fetchProjects(); // Call fetchProjects here
  }, []); // Make sure to add an empty dependency array here

  return (
    <>
      <div className="container">
        <div className="col-1">
          <h2>Andrew Ward-Jones</h2>
          <h3>Junior Full Stack Engineer</h3>
          <p>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <nav>
            <a href="">About</a>
            <a href="">Experience</a>
            <a href="">Projects</a>
          </nav>
          <section className="socials">
            <img src="" alt="LinkedIn" />
            <img src="" alt="GitHub" />
          </section>
        </div>
        <div className="col-2">
          {fetchError && <p>{fetchError}</p>}
          {projects && (
            <div className="projects">
              <div className="project-grid">
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

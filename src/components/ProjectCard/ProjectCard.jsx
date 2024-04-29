import parse from "html-react-parser";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a className="project-title" target="_blank" href={project.site_url}>
        <h4>
          {project.title} <span className="arrow-animation">↗</span>
        </h4>
      </a>
      <div id="project-description">{parse(project.description)}</div>
      <div className="skills-list">
        {project.languages_used.map((language) => {
          return (
            <p className="skills" key={language}>
              {language}
            </p>
          );
        })}
      </div>
      <a href={project.site_url}>
        <img
          className="project-image"
          target="_blank"
          src={project.img_url}
        ></img>
      </a>
    </div>
  );
};

export default ProjectCard;

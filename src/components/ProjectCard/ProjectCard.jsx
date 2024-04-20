const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a className="project-title" target="_blank" href={project.site_url}>
        <h4>{project.title}</h4>
      </a>

      <p id="project-description">{project.description}</p>
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

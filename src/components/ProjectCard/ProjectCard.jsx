const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.languages_used}</p>
    </div>
  );
};

export default ProjectCard;

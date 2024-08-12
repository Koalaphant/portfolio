import parse from "html-react-parser";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="title-container">
        <h3 className="project-title">{project.name}</h3>
        <div className="icons">
          <a href={project.git_url}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {project.site_url && (
            <a href={project.site_url}>
              <FontAwesomeIcon icon={faComputer} />
            </a>
          )}
        </div>
      </div>

      <div id="project-description">{project.description}</div>
      <div className="additional-info">
        {project.additional_info && project.additional_info}
      </div>
      <div className="skills-list">
        {project.languages_used.map((language) => {
          return (
            <p className="skills" key={language}>
              {language}
            </p>
          );
        })}
      </div>
      <a href={project.git_url} className="project-image-container">
        <img
          className="project-image"
          target="_blank"
          src={project.img_url}
          alt="Project screenshot"
        />
        <FontAwesomeIcon className="svg-overlay" icon={faMousePointer} />
      </a>
    </div>
  );
};

export default ProjectCard;

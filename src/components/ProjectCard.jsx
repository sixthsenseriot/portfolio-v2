import { Link } from "react-router-dom";

import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    const { title, slug, builtWith, image, alt, demoUrl } = project;

    return (
        <div className="ProjectCard col-md-6 text-center">
            {project.slug ? (
                <Link
                    to={`/projects/${slug}`}
                    title={title}
                    className="d-block"
                >
                    <img
                        src={image}
                        alt={alt}
                        className="project-img enhance-img img-fluid rounded p-2 mb-2 mx-auto d-block"
                    />
                </Link>
            ) : (
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={title}
                    className="d-block"
                >
                    <img
                        src={image}
                        alt={alt}
                        className="project-img enhance-img img-fluid rounded p-2 mb-2 mx-auto d-block"
                    />
                </a>
            )}

            <h2 className="text-center">{title}</h2>
            <p className="text-center">{builtWith}</p>
        </div>
    );
};

export default ProjectCard;

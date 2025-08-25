import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { title, slug, builtWith, image, alt, demoUrl } = project;

    if (project.slug) {
        return (
            <div className="ProjectCard col-md-6">
                <Link to={`/projects/${slug}`} title={title}>
                    <img
                        src={image}
                        alt={alt}
                        className="project-img enhance-img img-fluid rounded p-2 mb-2"
                    />
                </Link>
                <h2 className="text-center">{title}</h2>
                <p className="text-center">{builtWith}</p>
            </div>
        );
    }

    return (
        <div className="ProjectCard col-md-6">
            <a href={demoUrl} target="_blank" rel="noreferrer" title={title}>
                <img
                    src={image}
                    alt={alt}
                    className="project-img enhance-img img-fluid rounded p-2 mb-2"
                />
            </a>
            <h2 className="text-center">{title}</h2>
            <p className="text-center">{builtWith}</p>
        </div>
    );
};

export default ProjectCard;

import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

function slugify(str) {
    return String(str)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = projects.find(
        (p) => p.slug === slug || slugify(p.title) === slug
    );

    if (!project) {
        return (
            <div className="ProjectDetail container py-5">
                <p>Project not found.</p>
                <button onClick={() => navigate(-1)} className="back-button">
                    <i className="fa-solid fa-arrow-left"></i> Back
                </button>
            </div>
        );
    }

    return (
        <div className="ProjectDetail container py-5">
            <button onClick={() => navigate(-1)} className="back-button mb-4">
                <i className="fa-solid fa-arrow-left"></i> Back
            </button>

            <div className="row align-items-start">
                <div className="col-md-6 mb-4">
                    <img
                        src={project.image}
                        alt={project.imageAlt}
                        title={project.imageTitle}
                        className="img-fluid rounded project-img"
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="mb-3">{project.title}</h1>
                    <p className="mb-3">{project.description}</p>
                    <p className="mb-3">
                        <strong>{project.builtWith}</strong>
                    </p>

                    {project.stack?.length > 0 && (
                        <p className="mb-3">
                            {project.stack.map((tech) => (
                                <span
                                    key={`${project.title}-${tech}`}
                                    className="stack-used font-weight-bold me-2"
                                >
                                    {tech}
                                </span>
                            ))}
                        </p>
                    )}

                    <div className="d-flex gap-3">
                        {project.codeUrl && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link me-3"
                                title="Code repository"
                            >
                                <i className="fa-brands fa-github me-2" />
                                Code
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                                title="Live demo"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square me-2" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

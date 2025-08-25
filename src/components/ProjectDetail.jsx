import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

import ModelViewer from "./ModelViewer";

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
                <i className="fa-solid fa-arrow-left" /> Back
            </button>

            <div className="row g-4 align-items-start">
                <div className="col-md-6">
                    {/* Only show 3D if modelUrl exists; else fall back to image */}
                    {project.modelUrl ? (
                        <ModelViewer url={project.modelUrl} height={420} />
                    ) : (
                        <img
                            src={project.image}
                            alt={project.imageAlt}
                            className="img-fluid rounded project-img"
                        />
                    )}
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
                                    className="stack-used me-2"
                                >
                                    {tech}
                                </span>
                            ))}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

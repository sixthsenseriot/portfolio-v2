import { useParams, useNavigate } from "react-router-dom";
import ModelViewer from "./ModelViewer";

import projects from "../data/projects.json";
import "./ProjectDetails.css";

function slugify(str) {
    return String(str)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = projects.find(
        (p) => p.slug === slug || slugify(p.title) === slug
    );

    if (!project) {
        return (
            <div className="ProjectDetails container py-5">
                <p>Project not found.</p>
                <button onClick={() => navigate(-1)} className="back-button">
                    <i className="fa-solid fa-arrow-left"></i> Back
                </button>
            </div>
        );
    }

    return (
        <div className="ProjectDetails container py-5">
            <button onClick={() => navigate(-1)} className="back-button mb-4">
                <i className="fa-solid fa-arrow-left" /> Back
            </button>

            <div className="row g-4 align-items-center">
                <div className="col-md-6">
                    {/* Only show 3D if modelUrl exists; else fall back to image */}
                    {project.modelUrl ? (
                        <>
                            <ModelViewer url={project.modelUrl} height={420} />
                            <div className="d-flex justify-content-center align-items-center mt-5">
                                <button className="onshape-link-btn">
                                    View Onshape Model
                                </button>
                            </div>
                        </>
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
                    {project.features && (
                        <>
                            <h2 className="mb-3">Features</h2>

                            {project.features.map((f) => (
                                <p key={f.title} className="mb-2">
                                    <strong>{f.title}</strong>
                                    {f.detail ? <>: {f.detail}</> : null}
                                    {Array.isArray(f.bullets) && (
                                        <ul>
                                            {f.bullets.map((b) => (
                                                <li key={b.label}>
                                                    {b.icon}{" "}
                                                    <strong>{b.label}</strong> –{" "}
                                                    {b.detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </p>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

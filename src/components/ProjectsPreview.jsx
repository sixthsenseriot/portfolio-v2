import { Link } from "react-router-dom";
import "./ProjectsPreview.css";
import projects from "../data/projects.json";

const ProjectsPreview = () => {
    return (
        <section className="ProjectsPreview projects-container m-5">
            <div className="container">
                {projects.slice(0, 4).map((project, index) => {
                    const hasCode = !!project.codeUrl;
                    const hasDemo = !!project.demoUrl;
                    const hasSlug = !!project.slug;

                    const codeLink = hasCode && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            title="Github repository link"
                            className="project-link me-3"
                        >
                            <i className="fa-brands fa-github me-2" />
                            Code
                        </a>
                    );

                    const liveDemoLink = hasDemo && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            title="Live demo link"
                            className="project-link"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square me-2" />
                            Live Demo
                        </a>
                    );

                    const projectDetail = hasSlug && (
                        <Link
                            to={`/projects/${project.slug}`}
                            title={project.title}
                            className="project-link"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square me-2" />
                            Project Details
                        </Link>
                    );

                    let links = null;
                    if (hasCode && hasDemo) {
                        links = (
                            <>
                                {codeLink}
                                {liveDemoLink}
                            </>
                        );
                    } else if (hasCode && !hasDemo) {
                        links = (
                            <>
                                {codeLink}
                                {hasSlug && <>{projectDetail}</>}
                            </>
                        );
                    } else if (!hasCode && !hasDemo) {
                        links = projectDetail || null;
                    } else {
                        links = (
                            <>
                                {liveDemoLink}
                                {hasSlug && <>{projectDetail}</>}
                            </>
                        );
                    }

                    const imageCol = (
                        <div className="col-sm-6">
                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                title={project.imageTitle}
                                className="project-img img-fluid rounded p-2 d-none d-sm-block"
                            />
                        </div>
                    );

                    const textCol = (
                        <div className="col-sm-6">
                            <h2 className="text-center mb-3">
                                {project.title}
                            </h2>
                            <p className="text-center project-description">
                                {project.description}
                            </p>

                            <p className="text-center">
                                {project.stack.map((tech) => (
                                    <span
                                        key={`${project.title}-${tech}`}
                                        className="stack-used font-weight-bold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </p>

                            <p className="text-center">{links}</p>
                        </div>
                    );

                    const isEvenRow = index % 2 === 0;

                    return (
                        <div
                            key={project.title}
                            className="row mb-5 align-items-center"
                        >
                            {isEvenRow ? (
                                <>
                                    {imageCol}
                                    {textCol}
                                </>
                            ) : (
                                <>
                                    <div className="col-sm-6 order-sm-2">
                                        {imageCol.props.children}
                                    </div>
                                    <div className="col-sm-6 order-sm-1">
                                        {textCol.props.children}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsPreview;

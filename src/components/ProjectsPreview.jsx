import projects from "../data/projects.json";
import "./ProjectsPreview.css";

const ProjectsPreview = () => {
    return (
        <section className="ProjectsPreview projects-container m-5">
            <div className="container">
                {projects.slice(0, 4).map((project, index) => {
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
                                        key={tech}
                                        className="stack-used font-weight-bold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </p>

                            <p className="text-center">
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
                            </p>
                        </div>
                    );

                    // Alternate image/text per row
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
                                    {/* swap order on sm+ only */}
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

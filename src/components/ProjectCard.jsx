const ProjectCard = ({ project }) => {
    const { title, builtWith, image, alt, demoUrl } = project;

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

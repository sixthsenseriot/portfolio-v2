import projects from "../data/projects.json";
import "./ProjectsGrid.css";
import ProjectCard from "./ProjectCard";

const chunk = (arr, size) =>
    arr.reduce((rows, item, i) => {
        if (i % size === 0) rows.push([item]);
        else rows[rows.length - 1].push(item);
        return rows;
    }, []);

const ProjectsGrid = () => {
    const rows = chunk(projects, 2);

    return (
        <section className="ProjectsGrid content-container d-flex justify-content-center m-5">
            <div className="content">
                <h1 className="projects-header text-center mb-5">
                    What I've Worked On 🛠
                </h1>

                <div className="container">
                    {rows.map((row, idx) => (
                        <div className="row mb-4" key={idx}>
                            {row.map((p) => (
                                <ProjectCard key={p.title} project={p} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;

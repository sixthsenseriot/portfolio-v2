import "./ResumePage.css";

const ResumePage = () => {
    return (
        <section className="ResumePage">
            <div className="resume-container text-center m-5">
                <h1 className="projects-header text-center mb-4">My Resume</h1>

                <a
                    href="https://drive.google.com/file/d/1QFj-b20hmTRMaqFL-Qe6QL92ZV_lrhht/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    title="Khanh Nguyen's Resume"
                >
                    <img
                        src="/images/resume2025.png"
                        alt="Khanh Nguyen's Resume"
                        className="resume-img enhance-img project-img img-fluid"
                    />
                </a>
            </div>
        </section>
    );
};

export default ResumePage;

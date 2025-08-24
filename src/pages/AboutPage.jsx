import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <div className="about-container d-flex justify-content-center m-5">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="about-description">
                        Developer based in Houston, Texas
                    </p>
                    <p className="mb-4 about-summary">
                        Hi, I'm Khanh — a passionate developer specializing in
                        full-stack web development, embedded systems, IT, and
                        robotics. I'm currently studying Computer Science at the
                        University of Houston. I love building practical tools
                        that make a difference and improve people's lives.
                    </p>
                    <a
                        href="/projects"
                        title="See Khanh's projects"
                        className="see-proj-link"
                    >
                        <button className="see-proj-btn">
                            See my projects
                        </button>
                    </a>
                </div>

                <div className="about-picture">
                    <img
                        src="/images/pfp_01.jpg"
                        alt="Khanh Nguyen's picture"
                        title="Khanh Nguyen's picture"
                        className="pfp-about avatar-wobble d-none d-md-block"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

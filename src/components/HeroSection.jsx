import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="HeroSection intro-container d-flex justify-content-center m-5">
            <div className="intro-content m-5">
                <h1>Hi, I'm Khanh 👋</h1>
                <p className="intro-description">
                    a driven developer based in Houston, Texas.
                </p>
                <div className="mb-5">
                    <span>
                        <a
                            href="mailto:khanh@starchdev.com"
                            className="in-link"
                            title="Email link"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://www.linkedin.com/in/khanh-dev/"
                            target="_blank"
                            rel="noreferrer"
                            className="in-link"
                            title="LinkedIn link"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://github.com/sixthsenseriot"
                            target="_blank"
                            rel="noreferrer"
                            className="in-link"
                            title="GitHub link"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </span>
                </div>
                <div className="skillset-container">
                    <p>Skills:</p>
                    <span className="d-flex align-items-center">
                        <img
                            className="dev-logo cpp-svg"
                            src="/icons/cpp-logo.svg"
                            title="CPP"
                        />
                        <i
                            className="dev-logo fa-brands fa-react rotate"
                            title="React"
                        ></i>
                        <i
                            className="dev-logo fa-brands fa-html5"
                            title="HTML"
                        ></i>
                        <i
                            className="dev-logo fa-brands fa-css3-alt"
                            title="CSS"
                        ></i>
                        <i
                            className="dev-logo fa-brands fa-square-js"
                            title="JavaScript"
                        ></i>
                        <i
                            className="dev-logo fa-solid fa-database"
                            title="SQL Databases"
                        ></i>
                        <i
                            className="dev-logo fa-brands fa-bootstrap"
                            title="Bootstrap"
                        ></i>
                        <i
                            className="dev-logo fa-brands fa-python"
                            title="Python"
                        />
                        <i
                            className="dev-logo fa-brands fa-linux"
                            title="Linux"
                        ></i>
                    </span>
                </div>
            </div>
            <div className="intro-picture">
                <a href="/about" title="Go to About Page">
                    <img
                        src="/images/pfp-pro.jpg"
                        alt="Khanh Nguyen's picture"
                        className="pfp avatar-wobble d-none d-md-block mt-4"
                    />
                </a>
            </div>
        </div>
    );
};

export default HeroSection;

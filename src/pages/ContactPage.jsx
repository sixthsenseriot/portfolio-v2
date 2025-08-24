import "./ContactPage.css";

const ContactPage = () => {
    return (
        <section className="ContactPage">
            <div className="contact-container mt-5">
                <h1 className="projects-header text-center mb-5">
                    Let's get in touch!
                </h1>

                <div className="container d-flex justify-content-center align-items-center">
                    <div className="card" style={{ width: "30rem" }}>
                        <div className="card-body">
                            <h2 className="card-title">Khanh Nguyen</h2>
                            <h5 className="card-subtitle mb-2">
                                Developer & Current Student at UH
                            </h5>
                            <p className="card-text">Houston, Texas</p>

                            <div className="contact-container d-flex">
                                <div className="contact-icons text-center">
                                    <p>
                                        <i className="contact-logo fa-solid fa-envelope me-2"></i>
                                    </p>
                                    <p>
                                        <i className="contact-logo fa-solid fa-laptop me-2"></i>
                                    </p>
                                    <p>
                                        <i className="contact-logo fa-brands fa-linkedin me-2"></i>
                                    </p>
                                    <p>
                                        <i className="contact-logo fa-brands fa-github me-2"></i>
                                    </p>
                                </div>

                                <div className="contact-links">
                                    <p>
                                        <a
                                            href="mailto:khanh@starchdev.com"
                                            title="Email link"
                                            className="contact"
                                        >
                                            khanh@starchdev.com
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://starchdev.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Portfolio link"
                                            className="contact"
                                        >
                                            starchdev.com
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://www.linkedin.com/in/khanh-dev/"
                                            target="_blank"
                                            rel="noreferrer"
                                            title="LinkedIn link"
                                            className="contact"
                                        >
                                            linkedin.com/in/khanh-dev
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://github.com/sixthsenseriot"
                                            target="_blank"
                                            rel="noreferrer"
                                            title="GitHub link"
                                            className="contact"
                                        >
                                            github.com/sixthsenseriot
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;

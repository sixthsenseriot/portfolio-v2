import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer container footer-container">
            <footer>
                <div className="contact-box d-flex justify-content-between align-items-center">
                    <div>
                        <h3>Work Inquiry</h3>
                        <p className="text-muted">Let's work together</p>
                    </div>
                    <div>
                        <a href="/contact" title="Contact Khanh">
                            <button className="contact-btn">Contact me</button>
                        </a>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <a
                        href="mailto:khanh@starchdev.com"
                        title="Email link"
                        className="email-link"
                    >
                        khanh@starchdev.com
                    </a>
                </div>

                <div className="social-links text-center d-flex justify-content-center">
                    <div className="me-3">
                        <a
                            href="https://www.linkedin.com/in/khanh-dev/"
                            target="_blank"
                            rel="noreferrer"
                            className="social"
                            title="LinkedIn link"
                        >
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </div>
                    <div className="ms-3">
                        <a
                            href="https://github.com/sixthsenseriot"
                            target="_blank"
                            rel="noreferrer"
                            className="social"
                            title="GitHub link"
                        >
                            <i className="fa-brands fa-github" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

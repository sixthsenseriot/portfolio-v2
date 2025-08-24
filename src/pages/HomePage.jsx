import HeroSection from "../components/HeroSection";
import ProjectsPreview from "../components/ProjectsPreview";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="HomePage">
            <HeroSection />
            <ProjectsPreview />
            <Footer />
        </div>
    );
};

export default HomePage;

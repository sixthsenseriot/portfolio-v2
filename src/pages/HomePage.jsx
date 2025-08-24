import TopNavbar from "../components/TopNavbar";
import HeroSection from "../components/HeroSection";
import ProjectsPreview from "../components/ProjectsPreview";

const HomePage = () => {
    return (
        <div className="HomePage">
            <TopNavbar />
            <HeroSection />
            <ProjectsPreview />
        </div>
    );
};

export default HomePage;

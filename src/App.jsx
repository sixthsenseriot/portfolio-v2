import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/project" element={<ProjectPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;

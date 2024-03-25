import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobList from "../components/JobList.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <HomeCards />
            <JobList isHome={true} />
            <ViewAllJobs />
        </div>
    );
};

export default HomePage;

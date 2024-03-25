
import { useState, useEffect } from "react";
import JobItem from "./JobItem.jsx";
import Spinner from "./Spinner.jsx";

const JobList = ({isHome = false}) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
                setLoading(false);
            }catch (error) {
                console.log('Error fetching jobs', error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Jobs" : "Browse Jobs"}
                    </h2>
                    { loading ? (<Spinner loading={loading} />) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobItem key={job.id} job={job}/>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default JobList;

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import JobPage, {jobLoader} from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";



const App = () => {

    // Add new Job
    const addJob = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        });
        return;
    };

    // Delete Job

    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        return;
    }

    const updateJob = async (job) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job),
        });
        return;
    }

    const tokenLoader = () => {
        return localStorage.getItem('token');
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={ <MainLayout /> } loader={tokenLoader} id='root'>
                <Route index element={ <HomePage /> } />,
                <Route path='/jobs' element={ <JobsPage /> } />,
                <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />,
                <Route path='/jobs/:id/edit' element={ <EditJobPage updateJobSubmit={updateJob} /> } loader={jobLoader} />,
                <Route path='/jobs/:id' element={ <JobPage deleteJob={ deleteJob } /> } loader={jobLoader} />,
                <Route path='/login' element={ <AuthPage /> }  />,
                <Route path='*' element={ <NotFoundPage /> } />,
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};

export default App;

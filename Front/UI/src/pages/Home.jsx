import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "../Component/JobCard";

function Home() {

  const [jobs, setJobs] = useState([]);

  // MOVE OUTSIDE useEffect
  const fetchJobs = async () => {

    try {

      const response = await getJobs();

      setJobs(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    void fetchJobs();

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Available Jobs</h1>

      {jobs.map((job) => (

        <JobCard
          key={job.id}
          job={job}
          fetchJobs={fetchJobs}
        />

      ))}

    </div>
  );
}

export default Home;
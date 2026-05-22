import { useEffect, useState, useCallback } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "../Component/JobCard";
import "./home.scss";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getJobs();

      setJobs(response.data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <section className="home">
      <div className="home__overlay"></div>

      <div className="home__container">
        <div className="home__header">
          <span className="home__tag">Career Portal</span>

          <h1 className="home__title">
            Discover Your <span>Dream Job</span>
          </h1>

          <p className="home__subtitle">
            Explore the latest opportunities and build your future with top
            companies.
          </p>
        </div>

        {loading ? (
          <div className="loader">
            <div className="loader__circle"></div>
            <p>Loading jobs...</p>
          </div>
        ) : (
          <div className="jobs__grid">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  fetchJobs={fetchJobs}
                />
              ))
            ) : (
              <div className="empty__state">
                <h2>No Jobs Available</h2>
                <p>Please check back later.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
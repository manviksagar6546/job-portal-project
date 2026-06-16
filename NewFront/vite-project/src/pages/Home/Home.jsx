import { useEffect, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import api from "../../api/api";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const response = await api.get("/jobs");

      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      if (!keyword.trim()) {
        fetchJobs();
        return;
      }

      setLoading(true);

      const response = await api.get(
        `/jobs/search?keyword=${keyword}`
      );

      setJobs(response.data);
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      {/* Hero Section */}
<div className="bg-dark text-white rounded p-5 mb-5 shadow">

  <h1 className="display-4 fw-bold">
    Find Your Dream Job
  </h1>

  <p className="lead">
    Explore opportunities from top companies.
  </p>

  <div className="row mt-4">

    <div className="col-md-4">
      <div className="bg-light text-dark p-3 rounded text-center">
        <h3>{jobs.length}</h3>
        <p>Available Jobs</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-light text-dark p-3 rounded text-center">
        <h3>50+</h3>
        <p>Companies</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-light text-dark p-3 rounded text-center">
        <h3>100+</h3>
        <p>Applications</p>
      </div>
    </div>

  </div>

</div>

      {/* Search Section */}

      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">

          <h3 className="mb-3">
            Search Jobs
          </h3>

          <div className="row">

            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title, company, location..."
                value={keyword}
                onChange={(e) =>
                  setKeyword(e.target.value)
                }
              />
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-primary w-100"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Job Section */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Latest Jobs</h2>

        <span className="badge bg-primary fs-6">
          {jobs.length} Jobs Found
        </span>

      </div>

      {loading ? (
        <div className="text-center py-5">
          <div
            className="spinner-border"
            role="status"
          ></div>
        </div>
      ) : jobs.length === 0 ? (
        <div className="alert alert-warning text-center">
          No Jobs Found
        </div>
      ) : (
        <div className="row">

          {jobs.map((job) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={job.id}
            >
              <JobCard job={job} />
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Home;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await api.get(`/jobs/${id}`);
      setJob(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="alert alert-danger">
        Job not found
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <div className="card shadow border-0">

        <div className="card-body p-4">

          <h2>{job.title}</h2>

          <hr />

          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          {job.salary && (
            <p>
              <strong>Salary:</strong> ₹{job.salary}
            </p>
          )}

          <h5 className="mt-4">
            Job Description
          </h5>

          <p>
            {job.description}
          </p>

          <div className="mt-4">

            <Link
              to={`/apply/${job.id}`}
              className="btn btn-success me-2"
            >
              Apply Now
            </Link>

            <Link
              to="/"
              className="btn btn-secondary"
            >
              Back
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;
import { deleteJob } from "../services/jobService";
import { Link } from "react-router-dom";
import "./jobcard.scss";

function JobCard({ job, fetchJobs }) {
  const handleDelete = async () => {
    try {
      await deleteJob(job.id);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="job__card">
      <div className="job__top">
        <h2>{job.title}</h2>

        <span className="job__badge">
          {job.company}
        </span>
      </div>

      <div className="job__details">
        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Salary:</strong> ₹{job.salary}
        </p>
      </div>

      <p className="job__description">
        {job.description}
      </p>

      <div className="job__actions">
        <button
          className="delete__btn"
          onClick={handleDelete}
        >
          Delete Job
        </button>

        <Link to={`/apply/${job.id}`}>
          <button className="apply__btn">
            Apply
          </button>
        </Link>

        <Link to={`/applications/${job.id}`}>
          <button className="view__btn">
            View Applicants
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
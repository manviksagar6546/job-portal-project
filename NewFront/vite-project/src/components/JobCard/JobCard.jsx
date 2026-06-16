import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="card h-100 shadow border-0">

      <div className="card-body">

        <h5 className="fw-bold">
          {job.title}
        </h5>

        <span className="badge bg-primary mb-2">
          {job.location}
        </span>

        <p className="mt-3">
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          {job.description?.substring(0, 120)}
        </p>

        <Link
          to={`/jobs/${job.id}`}
          className="btn btn-outline-primary"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default JobCard;
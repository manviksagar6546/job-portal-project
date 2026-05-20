import { deleteJob } from "../services/jobService";
import { Link } from "react-router-dom";
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
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>{job.title}</h2>

      <p>
        <b>Company:</b> {job.company}
      </p>

      <p>
        <b>Location:</b> {job.location}
      </p>

      <p>
        <b>Salary:</b> ₹{job.salary}
      </p>

      <p>{job.description}</p>

      <button onClick={handleDelete}>Delete Job</button>

      <br />
      <br />

      <Link to={`/apply/${job.id}`}>
        <button>Apply</button>
      </Link>

      <br />
      <br />

      <Link to={`/applications/${job.id}`}>
        <button>View Applicants</button>
      </Link>
    </div>
  );
}

export default JobCard;

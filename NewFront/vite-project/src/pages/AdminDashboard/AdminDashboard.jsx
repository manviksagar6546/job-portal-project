import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications");
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/jobs/${id}`);

      setJobs(jobs.filter((job) => job.id !== id));

      alert("Job Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to Delete Job");
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Statistics Cards */}

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h5>Total Jobs</h5>
              <h2>{jobs.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h5>Total Applications</h5>
              <h2>{applications.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h5>Active Jobs</h5>
              <h2>{jobs.length}</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="mb-4">

        <Link
          to="/add-job"
          className="btn btn-success me-2"
        >
          Add New Job
        </Link>

        <Link
          to="/applications"
          className="btn btn-primary"
        >
          View Applications
        </Link>

      </div>

      {/* Jobs Table */}

      <div className="card shadow border-0">

        <div className="card-body">

          <h3 className="mb-3">Manage Jobs</h3>

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.company}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteJob(job.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center"
                  >
                    No Jobs Available
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
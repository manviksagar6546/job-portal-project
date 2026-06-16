import { useEffect, useState } from "react";
import api from "../../api/api";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications");
      setApplications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Applications</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Applied At</th>
            <th>Resume</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>

              <td>
                <span
                  className={
                    app.status === "Selected"
                      ? "badge bg-success"
                      : app.status === "Rejected"
                        ? "badge bg-danger"
                        : app.status === "Reviewed"
                          ? "badge bg-warning"
                          : "badge bg-primary"
                  }
                >
                  {app.status}
                </span>
              </td>

              <td>
                {app.appliedAt
                  ? new Date(app.appliedAt).toLocaleString()
                  : "N/A"}
              </td>

              <td>
                {app.resumeUrl ? (
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Resume
                  </a>
                ) : (
                  <span className="text-muted">No Resume</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;

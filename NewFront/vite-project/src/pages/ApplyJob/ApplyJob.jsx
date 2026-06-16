import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function ApplyJob() {

  const { id } = useParams();

  const [application, setApplication] =
    useState({
      applicantName: "",
      applicantEmail: "",
      resumeLink: ""
    });

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        `/applications/${id}`,
        application
      );

      alert("Application Submitted");

      setApplication({
        applicantName: "",
        applicantEmail: "",
        resumeLink: ""
      });

    } catch (error) {
      console.error(error);
      alert("Submission Failed");
    }
  };

  return (
    <div
      className="card p-4 mx-auto"
      style={{ maxWidth: "600px" }}
    >
      <h2>Apply Job</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          name="applicantName"
          placeholder="Name"
          value={application.applicantName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="applicantEmail"
          placeholder="Email"
          value={application.applicantEmail}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="resumeLink"
          placeholder="Resume Link"
          value={application.resumeLink}
          onChange={handleChange}
        />

        <button
          className="btn btn-success w-100"
        >
          Submit Application
        </button>

      </form>
    </div>
  );
}

export default ApplyJob;
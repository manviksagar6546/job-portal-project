import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./applyjob.scss";

function ApplyJob() {
  const { jobId } = useParams();

  const [application, setApplication] = useState({
    applicantName: "",
    applicantEmail: "",
  });

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:8080/api/applications/${jobId}`,
        application
      );

      alert("Application Submitted");

      setApplication({
        applicantName: "",
        applicantEmail: "",
      });
    } catch (error) {
      console.log(error);

      alert("Error");
    }
  };

  return (
    <section className="applyjob">
      <div className="applyjob__container">

        <div className="applyjob__header">
          <span>Career Portal</span>

          <h1>Apply For Job</h1>

          <p>
            Submit your application and connect with top companies.
          </p>
        </div>

        <form
          className="applyjob__form"
          onSubmit={handleSubmit}
        >
          <div className="form__group">
            <label>Full Name</label>

            <input
              type="text"
              name="applicantName"
              placeholder="Enter your name"
              value={application.applicantName}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label>Email Address</label>

            <input
              type="email"
              name="applicantEmail"
              placeholder="Enter your email"
              value={application.applicantEmail}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplyJob;
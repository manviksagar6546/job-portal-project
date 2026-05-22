import { useState } from "react";
import axios from "axios";
import "./addjob.scss";

function AddJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/jobs",
        job
      );

      alert("Job Added");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="addjob">
      <div className="addjob__container">

        <div className="addjob__header">
          <span>Add Opportunity</span>

          <h1>Create New Job</h1>

          <p>
            Publish jobs and connect with talented developers.
          </p>
        </div>

        <form
          className="addjob__form"
          onSubmit={handleSubmit}
        >
          <div className="form__group">
            <label>Job Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter job title"
              value={job.title}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label>Company</label>

            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={job.company}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={job.location}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label>Salary</label>

            <input
              type="number"
              name="salary"
              placeholder="Enter salary"
              value={job.salary}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Write job description..."
              value={job.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Add Job
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddJob;
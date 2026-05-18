import { useState } from "react";
import axios from "axios";

function AddJob() {

    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: ""
    });

    const handleChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
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
                description: ""
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Add Job</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={job.title}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={job.company}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={job.location}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={job.salary}
                    onChange={handleChange}
                />

                <br /><br />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={job.description}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Add Job
                </button>
            </form>
        </div>
    );
}

export default AddJob;
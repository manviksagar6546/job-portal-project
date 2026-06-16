import { useState } from "react";
import api from "../../api/api.js";

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

            await api.post("/jobs", job);

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
        <div className="container">
            <h1>Add Job</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={job.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={job.company}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={job.location}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={job.salary}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={job.description}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Job
                </button>

            </form>
        </div>
    );
}

export default AddJob;
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ApplyJob() {

    const { jobId } = useParams();

    const [application, setApplication] = useState({
        applicantName: "",
        applicantEmail: ""
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

            await axios.post(
                `http://localhost:8080/api/applications/${jobId}`,
                application
            );

            alert("Application Submitted");

            setApplication({
                applicantName: "",
                applicantEmail: ""
            });

        } catch (error) {

            console.log(error);

            alert("Error");
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h1>Apply Job</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="applicantName"
                    placeholder="Enter Name"
                    value={application.applicantName}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="applicantEmail"
                    placeholder="Enter Email"
                    value={application.applicantEmail}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Apply
                </button>

            </form>

        </div>
    );
}

export default ApplyJob;
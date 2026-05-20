import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewApplicants() {

    const { jobId } = useParams();

    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {

        try {

            const response = await axios.get(
                `http://localhost:8080/api/applications/job/${jobId}`
            );

            setApplications(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        void fetchApplications();

    }, []);

    return (
        <div style={{ padding: "20px" }}>

            <h1>Applicants</h1>

            {applications.map((application) => (

                <div
                    key={application.id}
                    style={{
                        border: "1px solid gray",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "10px"
                    }}
                >

                    <h3>
                        {application.applicantName}
                    </h3>

                    <p>
                        {application.applicantEmail}
                    </p>

                </div>
            ))}

        </div>
    );
}

export default ViewApplicants;
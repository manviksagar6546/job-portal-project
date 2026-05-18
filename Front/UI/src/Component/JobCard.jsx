function JobCard({ job }) {

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px"
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
        </div>
    );
}

export default JobCard;
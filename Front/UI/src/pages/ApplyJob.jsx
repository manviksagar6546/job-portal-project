import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./applyjob.scss";

function ApplyJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role !== "ROLE_USER") {
      navigate("/");
    }
  }, [navigate, user]);

  const handleApply = async () => {
    try {
      await axios.post(
        `http://localhost:8080/api/applications/${jobId}/${user.id}`,
      );

      alert("Application Submitted Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Failed To Apply");
    }
  };

  return (
    <section className="applyjob">
      <div className="applyjob__container">
        <div className="applyjob__header">
          <span>Career Portal</span>

          <h1>Apply For Job</h1>

          <p>Submit your application for this opportunity.</p>
        </div>

        <div className="applyjob__form">
          <div className="form__group">
            <label>Name</label>

            <input type="text" value={user?.name || ""} disabled />
          </div>

          <div className="form__group">
            <label>Email</label>

            <input type="email" value={user?.email || ""} disabled />
          </div>

          <button onClick={handleApply}>Apply Now</button>
        </div>
      </div>
    </section>
  );
}

export default ApplyJob;

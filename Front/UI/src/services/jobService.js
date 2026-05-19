import axios from "axios";

const API_URL = "http://localhost:8080/api/jobs";

// GET ALL JOBS
export const getJobs = async () => {
    return await axios.get(API_URL);
};

// ADD JOB
export const addJob = async (jobData) => {
    return await axios.post(API_URL, jobData);
};

// DELETE JOB
export const deleteJob = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
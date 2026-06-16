import api from "../api/api";

export const getJobs = () => api.get("/jobs");

export const getJobById = (id) =>
  api.get(`/jobs/${id}`);

export const searchJobs = (keyword) =>
  api.get(`/jobs/search?keyword=${keyword}`);
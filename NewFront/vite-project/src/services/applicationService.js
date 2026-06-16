import api from "../api/api";

export const applyJob = (jobId, data) => {
  return api.post(
    `/applications/${jobId}`,
    data
  );
};
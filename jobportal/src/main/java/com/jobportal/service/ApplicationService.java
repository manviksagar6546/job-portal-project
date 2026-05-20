package com.jobportal.service;

import com.jobportal.model.Application;
import com.jobportal.model.Job;
import com.jobportal.repository.ApplicationRepository;
import com.jobportal.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final JobRepository jobRepository;

    public ApplicationService(
            ApplicationRepository applicationRepository,
            JobRepository jobRepository
    ) {
        this.applicationRepository = applicationRepository;
        this.jobRepository = jobRepository;
    }

    public Application applyJob(
            Application application,
            Long jobId
    ) {

        Job job = jobRepository
                .findById(jobId)
                .orElseThrow();

        application.setJob(job);

        return applicationRepository.save(application);
    }

    public List<Application> getApplicationsByJobId(
            Long jobId
    ) {

        return applicationRepository
                .findByJobId(jobId);
    }
}

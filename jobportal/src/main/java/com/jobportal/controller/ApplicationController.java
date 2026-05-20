package com.jobportal.controller;

import com.jobportal.model.Application;
import com.jobportal.service.ApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin("*")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(
            ApplicationService applicationService
    ) {
        this.applicationService = applicationService;
    }

    @PostMapping("/{jobId}")
    public Application applyJob(
            @RequestBody Application application,
            @PathVariable Long jobId
    ) {

        return applicationService
                .applyJob(application, jobId);
    }

    @GetMapping("/job/{jobId}")
    public List<Application> getApplicationsByJobId(
            @PathVariable Long jobId
    ) {

        return applicationService
                .getApplicationsByJobId(jobId);
    }

}

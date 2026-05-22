package com.jobportal.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    private String location;
    private double salary;

    @Column(length = 2000)
    private String description;

    @OneToMany(mappedBy = "job", cascade = CascadeType.ALL,  orphanRemoval = true)
    private List<Application> applications;
}

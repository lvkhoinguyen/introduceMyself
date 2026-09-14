package com.example.introduce.controller;

import com.example.introduce.domain.Experience;
import com.example.introduce.domain.Project;
import com.example.introduce.domain.SkillGroup;
import com.example.introduce.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(portfolioService.getAllProjects());
    }

    @GetMapping("/skills")
    public ResponseEntity<List<SkillGroup>> getSkills() {
        return ResponseEntity.ok(portfolioService.getAllSkills());
    }

    @GetMapping("/experiences")
    public ResponseEntity<List<Experience>> getExperiences() {
        return ResponseEntity.ok(portfolioService.getAllExperiences());
    }
}

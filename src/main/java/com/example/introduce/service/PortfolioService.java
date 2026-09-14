package com.example.introduce.service;

import com.example.introduce.domain.Experience;
import com.example.introduce.domain.Project;
import com.example.introduce.domain.SkillGroup;
import com.example.introduce.repository.ExperienceRepository;
import com.example.introduce.repository.ProjectRepository;
import com.example.introduce.repository.SkillGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private SkillGroupRepository skillGroupRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderBySortOrderAsc();
    }

    public List<Experience> getAllExperiences() {
        return experienceRepository.findAllByOrderBySortOrderAsc();
    }

    public List<SkillGroup> getAllSkills() {
        return skillGroupRepository.findAllByOrderBySortOrderAsc();
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public Experience saveExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    public SkillGroup saveSkillGroup(SkillGroup skillGroup) {
        return skillGroupRepository.save(skillGroup);
    }
}

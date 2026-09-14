package com.example.introduce.domain;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "skill_groups")
public class SkillGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String iconType; // "database" | "layout" | "settings"
    private String description;
    private Integer sortOrder;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "skill_group_items", joinColumns = @JoinColumn(name = "skill_group_id"))
    private List<SkillItem> skills = new ArrayList<>();

    public SkillGroup() {
    }

    public SkillGroup(Long id, String title, String iconType, String description, Integer sortOrder, List<SkillItem> skills) {
        this.id = id;
        this.title = title;
        this.iconType = iconType;
        this.description = description;
        this.sortOrder = sortOrder;
        this.skills = skills;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIconType() {
        return iconType;
    }

    public void setIconType(String iconType) {
        this.iconType = iconType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public List<SkillItem> getSkills() {
        return skills;
    }

    public void setSkills(List<SkillItem> skills) {
        this.skills = skills;
    }
}

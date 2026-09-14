package com.example.introduce.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    private String role;

    private String avatarUrl;
    private String githubUrl;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "profile_points", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "point")
    private java.util.List<String> points = new java.util.ArrayList<>();

    public Profile() {
    }

    public Profile(Long id, String fullName, String role, String avatarUrl, String githubUrl, String bio, java.util.List<String> points) {
        this.id = id;
        this.fullName = fullName;
        this.role = role;
        this.avatarUrl = avatarUrl;
        this.githubUrl = githubUrl;
        this.bio = bio;
        this.points = points;
    }

    // 3. Các hàm Getter và Setter cho từng thuộc tính
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public java.util.List<String> getPoints() {
        return points;
    }

    public void setPoints(java.util.List<String> points) {
        this.points = points;
    }
}
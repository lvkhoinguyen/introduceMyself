package com.example.introduce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.introduce.domain.Profile;
import com.example.introduce.service.ProfileService;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public ResponseEntity<Profile> getProfile() {
        Profile myProfile = profileService.getProfileDetail();
        return ResponseEntity.ok(myProfile);
    }
}

package com.example.introduce.service;

import com.example.introduce.domain.Profile;
import com.example.introduce.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfileDetail() {
        return profileRepository.findById(1L).orElseGet(() -> {
            Profile defaultProfile = new Profile(
                    1L,
                    "Lê Võ Khôi Nguyên",
                    "Backend Developer",
                    "https://link-to-your-avatar.jpg",
                    "https://github.com/your-github");
            return profileRepository.save(defaultProfile);
        });
    }
}
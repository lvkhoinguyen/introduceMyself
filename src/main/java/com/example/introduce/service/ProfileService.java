package com.example.introduce.service;

import com.example.introduce.domain.Profile;
import com.example.introduce.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public synchronized Profile getProfileDetail() {
        java.util.List<Profile> all = profileRepository.findAll();
        if (!all.isEmpty()) {
            return all.get(0);
        }
        Profile defaultProfile = new Profile(
                null,
                "Lê Võ Khôi Nguyên",
                "Backend Developer",
                "/avatar.jpg",
                "https://github.com/lvkhoinguyen");
        return profileRepository.save(defaultProfile);
    }
}
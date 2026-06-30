package com.example.introduce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.introduce.domain.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
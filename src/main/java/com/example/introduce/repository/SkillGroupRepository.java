package com.example.introduce.repository;

import com.example.introduce.domain.SkillGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillGroupRepository extends JpaRepository<SkillGroup, Long> {
    List<SkillGroup> findAllByOrderBySortOrderAsc();
}

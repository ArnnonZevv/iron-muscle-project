package com.example.project.repository;

import com.example.project.model.GymClass;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<GymClass, Long> {
}

package com.example.project.repository;

import com.example.project.model.CancellationRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CancellationRepository extends JpaRepository<CancellationRequest, Long> {
}

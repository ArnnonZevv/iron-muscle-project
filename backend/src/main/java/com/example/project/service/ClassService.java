package com.example.project.service;

import com.example.project.model.GymClass;
import com.example.project.model.Trainer;
import com.example.project.repository.ClassRepository;
import com.example.project.repository.TrainerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClassService {

    private final ClassRepository repo;
    private final TrainerRepository trainerRepo;

    public ClassService(ClassRepository repo, TrainerRepository trainerRepo) {
        this.repo = repo;
        this.trainerRepo = trainerRepo;
    }

    public List<GymClass> getAll() {
        return repo.findAll();
    }

    @Transactional
    public GymClass create(GymClass c, Long trainerId) {
        // Ensure title (class_name) is not null or empty
        if (c.getTitle() == null || c.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Class name (title) cannot be null or empty");
        }

        // Ensure scheduleDatetime is set
        if (c.getScheduleDatetime() == null) {
            throw new IllegalArgumentException("Schedule datetime cannot be null");
        }

        // Find and set trainer
        Trainer t = trainerRepo.findById(trainerId)
                .orElseThrow(() -> new IllegalArgumentException("Trainer not found with id " + trainerId));
        c.setTrainer(t);

        // Save and return
        return repo.save(c);
    }
}

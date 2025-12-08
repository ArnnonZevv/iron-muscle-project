package com.example.project.service;

import com.example.project.model.GymClass;
import com.example.project.model.Trainer;
import com.example.project.repository.ClassRepository;
import com.example.project.repository.TrainerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassService {

    private final ClassRepository repo;
    private final TrainerRepository trainerRepo;

    public ClassService(ClassRepository repo, TrainerRepository trainerRepo) {
        this.repo = repo;
        this.trainerRepo = trainerRepo;
    }

    public List<GymClass> getAll() { return repo.findAll(); }

    public GymClass create(GymClass c, Long trainerId) {
        Trainer t = trainerRepo.findById(trainerId).orElseThrow();
        c.setTrainer(t);
        return repo.save(c);
    }
}

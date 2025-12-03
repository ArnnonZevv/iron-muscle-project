package com.example.project.service;

import com.example.project.model.Trainer;
import com.example.project.repository.TrainerRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TrainerService {
    private final TrainerRepository repo;
    public TrainerService(TrainerRepository repo){ this.repo = repo; }
    public Trainer save(Trainer t){ return repo.save(t); }
    public List<Trainer> getAll(){ return repo.findAll(); }
    public Trainer get(Long id){ return repo.findById(id).orElse(null); }
    public void delete(Long id){ repo.deleteById(id); }
}

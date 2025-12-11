package com.example.project.controller;

import com.example.project.model.Trainer;
import com.example.project.service.TrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trainers")
@CrossOrigin(origins = "http://localhost:5173") // Add this line for React frontend
public class TrainerController {
    private final TrainerService service;
    public TrainerController(TrainerService service){ this.service = service; }

    @PostMapping
    public ResponseEntity<Trainer> create(@RequestBody Trainer t){ return ResponseEntity.ok(service.save(t)); }

    @GetMapping
    public List<Trainer> all(){ return service.getAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Trainer> get(@PathVariable Long id){
        Trainer t = service.get(id);
        return t != null ? ResponseEntity.ok(t) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Trainer> update(@PathVariable Long id, @RequestBody Trainer req) {
        Trainer existing = service.get(id);
        if (existing == null) return ResponseEntity.notFound().build();
        existing.setFirstName(req.getFirstName());
        existing.setLastName(req.getLastName());
        existing.setSpecialization(req.getSpecialization());
        existing.setEmail(req.getEmail());
        existing.setPhone(req.getPhone());
        return ResponseEntity.ok(service.save(existing));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
package com.example.project.service;

import com.example.project.model.Equipment;
import com.example.project.repository.EquipmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EquipmentService {
    private final EquipmentRepository repo;
    public EquipmentService(EquipmentRepository repo){ this.repo = repo; }
    public Equipment save(Equipment e){ return repo.save(e); }
    public List<Equipment> getAll(){ return repo.findAll(); }
    public Equipment get(Long id){ return repo.findById(id).orElse(null); }
    public void delete(Long id){ repo.deleteById(id); }
}

package com.example.project.controller;

import com.example.project.model.GymClass;
import com.example.project.service.ClassService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
public class ClassController {

    private final ClassService service;

    public ClassController(ClassService service) {
        this.service = service;
    }

    @GetMapping
    public List<GymClass> all() {
        return service.getAll();
    }

    // Class data comes from request body
    @PostMapping
    public GymClass create(@RequestParam Long trainerId,
                           @RequestBody GymClass c) {
        return service.create(c, trainerId);
    }
}
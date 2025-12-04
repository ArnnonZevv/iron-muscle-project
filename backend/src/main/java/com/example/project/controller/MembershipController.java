package com.example.project.controller;

import com.example.project.model.Membership;
import com.example.project.repository.MembershipRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/memberships")
public class MembershipController {
    private final MembershipRepository repo;
    public MembershipController(MembershipRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Membership> all() { return repo.findAll(); }

    @PostMapping
    public Membership create(@RequestBody Membership m) { return repo.save(m); }
}

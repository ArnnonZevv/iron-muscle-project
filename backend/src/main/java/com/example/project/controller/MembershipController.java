package com.example.project.controller;

import com.example.project.model.Membership;
import com.example.project.service.MembershipService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/memberships")
@CrossOrigin(origins = "http://localhost:5173")
public class MembershipController {
    private final MembershipService service;
    
    public MembershipController(MembershipService service) { 
        this.service = service; 
    }

    @GetMapping
    public List<Membership> getAllMemberships() { 
        return service.getAll(); 
    }

    @GetMapping("/{id}")
    public ResponseEntity<Membership> getMembership(@PathVariable Long id) {
        Membership membership = service.get(id);
        return membership != null ? ResponseEntity.ok(membership) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Membership> createMembership(@RequestBody Membership membership) { 
        return ResponseEntity.ok(service.save(membership)); 
    }

    @PutMapping("/{id}")
    public ResponseEntity<Membership> updateMembership(@PathVariable Long id, @RequestBody Membership req) {
        Membership existing = service.get(id);
        if (existing == null) return ResponseEntity.notFound().build();
        
        existing.setName(req.getName());
        existing.setPrice(req.getPrice());
        existing.setDescription(req.getDescription());
        
        return ResponseEntity.ok(service.save(existing));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMembership(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
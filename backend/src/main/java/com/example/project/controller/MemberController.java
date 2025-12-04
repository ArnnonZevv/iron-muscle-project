package com.example.project.controller;

import com.example.project.model.Member;
import com.example.project.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService service;

    public MemberController(MemberService service) {
        this.service = service;
    }

    @GetMapping
    public List<Member> all() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> get(@PathVariable Long id) {
        return service.get(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Member create(@RequestBody Member m) {
        return service.create(m);
    }

    @PutMapping("/{id}")
    public Member update(@PathVariable Long id, @RequestBody Member m) {
        return service.update(id, m);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

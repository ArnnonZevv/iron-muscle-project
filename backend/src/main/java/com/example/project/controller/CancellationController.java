package com.example.project.controller;

import com.example.project.model.CancellationRequest;
import com.example.project.service.CancellationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cancellations")
public class CancellationController {

    private final CancellationService service;

    public CancellationController(CancellationService service) {
        this.service = service;
    }

    @GetMapping
    public List<CancellationRequest> all() {
        return service.all();
    }

    @PostMapping
    public CancellationRequest create(@RequestParam Long memberId,
                                      @RequestParam String reason) {
        return service.request(memberId, reason);
    }

    @PutMapping("/{id}")
    public CancellationRequest update(@PathVariable Long id,
                                      @RequestParam String status) {
        return service.update(id, status);
    }
}

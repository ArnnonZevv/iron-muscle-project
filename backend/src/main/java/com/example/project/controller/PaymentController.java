package com.example.project.controller;

import com.example.project.model.Payment;
import com.example.project.service.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService service;

    public PaymentController(PaymentService service){
        this.service = service;
    }

    @GetMapping
    public List<Payment> all() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> get(@PathVariable Long id) {
        Payment p = service.get(id);
        return p != null ? ResponseEntity.ok(p) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Payment create(@RequestParam Long memberId,
                          @RequestParam Long membershipId,
                          @RequestBody Payment p) {
        return service.create(memberId, membershipId, p);
    }

    @PutMapping("/{id}/refund")
    public Payment refund(@PathVariable Long id) {
        return service.refund(id);
    }
}

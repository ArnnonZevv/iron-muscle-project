package com.example.project.controller;

import com.example.project.model.Appointment;
import com.example.project.service.AppointmentService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Appointment> all() { return service.all(); }

    @PostMapping
    public Appointment book(@RequestParam Long memberId,
                            @RequestParam Long trainerId,
                            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
                                    LocalDateTime date) {
        return service.book(memberId, trainerId, date);
    }

    @PutMapping("/{id}/status")
    public Appointment update(@PathVariable Long id,
                              @RequestParam String status) {
        return service.updateStatus(id, status);
    }
}

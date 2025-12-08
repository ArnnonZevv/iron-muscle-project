package com.example.project.service;

import com.example.project.model.Appointment;
import com.example.project.model.Member;
import com.example.project.model.Trainer;
import com.example.project.repository.AppointmentRepository;
import com.example.project.repository.MemberRepository;
import com.example.project.repository.TrainerRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository repo;
    private final MemberRepository memberRepo;
    private final TrainerRepository trainerRepo;

    public AppointmentService(AppointmentRepository repo,
                              MemberRepository memberRepo,
                              TrainerRepository trainerRepo) {
        this.repo = repo;
        this.memberRepo = memberRepo;
        this.trainerRepo = trainerRepo;
    }

    public Appointment book(Long memberId, Long trainerId, LocalDateTime date) {
        Member m = memberRepo.findById(memberId).orElseThrow();
        Trainer t = trainerRepo.findById(trainerId).orElseThrow();

        Appointment a = new Appointment();
        a.setMember(m);
        a.setTrainer(t);
        a.setAppointmentAt(date);
        a.setStatus("PENDING");

        return repo.save(a);
    }

    public List<Appointment> all() {
        return repo.findAll();
    }

    public Appointment updateStatus(Long id, String status) {
        Appointment a = repo.findById(id).orElseThrow();
        a.setStatus(status);
        return repo.save(a);
    }
}

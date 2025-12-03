package com.example.project.service;

import com.example.project.model.Member;
import com.example.project.model.Membership;
import com.example.project.model.Payment;
import com.example.project.repository.MemberRepository;
import com.example.project.repository.MembershipRepository;
import com.example.project.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    private final PaymentRepository repo;
    private final MemberRepository memberRepo;
    private final MembershipRepository membershipRepo;

    public PaymentService(PaymentRepository repo,
                          MemberRepository memberRepo,
                          MembershipRepository membershipRepo) {
        this.repo = repo;
        this.memberRepo = memberRepo;
        this.membershipRepo = membershipRepo;
    }

    public Payment create(Long memberId, Long membershipId, Payment data) {
        Member member = memberRepo.findById(memberId).orElseThrow();
        Membership membership = membershipRepo.findById(membershipId).orElseThrow();

        data.setMember(member);
        data.setMembership(membership);
        data.setStatus("PAID");
        return repo.save(data);
    }

    public List<Payment> getAll() {
        return repo.findAll();
    }

    public Payment get(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Payment refund(Long id) {
        Payment p = repo.findById(id).orElseThrow();
        p.setStatus("REFUNDED");
        return repo.save(p);
    }
}

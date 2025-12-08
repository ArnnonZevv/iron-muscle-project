package com.example.project.service;

import com.example.project.model.CancellationRequest;
import com.example.project.model.Member;
import com.example.project.repository.CancellationRepository;
import com.example.project.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CancellationService {

    private final CancellationRepository repo;
    private final MemberRepository memberRepo;

    public CancellationService(CancellationRepository repo, MemberRepository memberRepo) {
        this.repo = repo;
        this.memberRepo = memberRepo;
    }

    public CancellationRequest request(Long memberId, String reason) {
        Member m = memberRepo.findById(memberId).orElseThrow();

        CancellationRequest r = new CancellationRequest();
        r.setMember(m);
        r.setReason(reason);
        r.setStatus("PENDING");

        return repo.save(r);
    }

    public List<CancellationRequest> all() {
        return repo.findAll();
    }

    public CancellationRequest update(Long id, String status) {
        CancellationRequest r = repo.findById(id).orElseThrow();
        r.setStatus(status);
        return repo.save(r);
    }
}

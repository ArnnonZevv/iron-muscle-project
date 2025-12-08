package com.example.project.service;

import com.example.project.model.Member;
import com.example.project.model.Membership;
import com.example.project.repository.MemberRepository;
import com.example.project.repository.MembershipRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository repo;
    private final MembershipRepository membershipRepo;

    public MemberService(MemberRepository repo, MembershipRepository membershipRepo) {
        this.repo = repo;
        this.membershipRepo = membershipRepo;
    }

    public Member create(Member m) {
        return repo.save(m);
    }

    public List<Member> getAll() {
        return repo.findAll();
    }

    public Optional<Member> get(Long id) {
        return repo.findById(id);
    }

    public Member update(Long id, Member data) {
        Member m = repo.findById(id).orElseThrow();
        m.setFullName(data.getFullName());
        m.setEmail(data.getEmail());
        m.setContactNumber(data.getContactNumber());

        if (data.getMembership() != null) {
            Membership membership = membershipRepo.findById(
                    data.getMembership().getId()
            ).orElseThrow();
            m.setMembership(membership);
        }

        return repo.save(m);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}

package com.example.project.service;

import com.example.project.model.Membership;
import com.example.project.repository.MembershipRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MembershipService {
    private final MembershipRepository repo;
    public MembershipService(MembershipRepository repo){ this.repo = repo; }
    public Membership save(Membership m){ return repo.save(m); }
    public List<Membership> getAll(){ return repo.findAll(); }
    public Membership get(Long id){ return repo.findById(id).orElse(null); }
    public void delete(Long id){ repo.deleteById(id); }
}

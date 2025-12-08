package com.example.project;

import com.example.project.model.*;
import com.example.project.repository.*;
import com.example.project.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserService userService;
    private final MembershipRepository membershipRepo;
    private final TrainerRepository trainerRepo;
    private final ClassRepository classRepo;

    public DataLoader(UserService userService,
                      MembershipRepository membershipRepo,
                      TrainerRepository trainerRepo,
                      ClassRepository classRepo) {
        this.userService = userService;
        this.membershipRepo = membershipRepo;
        this.trainerRepo = trainerRepo;
        this.classRepo = classRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        // create admin if missing
        try {
            userService.register("admin", "admin", "ROLE_ADMIN", "admin@example.com");
        } catch (Exception ignored) {}

        // sample memberships
        membershipRepo.save(new Membership("Standard", 1500.0, "Monthly gym access"));
        membershipRepo.save(new Membership("Premium", 3500.0, "Everything included"));

        // sample trainers
        Trainer t1 = new Trainer();
        t1.setFirstName("Alan"); t1.setLastName("Smith"); t1.setSpecialization("Strength");
        trainerRepo.save(t1);

        Trainer t2 = new Trainer();
        t2.setFirstName("Hailey"); t2.setLastName("Rey"); t2.setSpecialization("Cardio");
        trainerRepo.save(t2);

        // sample classes
        GymClass c1 = new GymClass();
        c1.setTitle("Morning Yoga");
        c1.setSchedule("Mon 06:00-07:00");
        c1.setCapacity(20);
        c1.setTrainer(t1);
        c1.setScheduleDatetime(LocalDateTime.of(2025, 11, 25, 6, 0)); // set datetime
        classRepo.save(c1);

        GymClass c2 = new GymClass();
        c2.setTitle("HIIT Blast");
        c2.setSchedule("Tue 18:00-19:00");
        c2.setCapacity(18);
        c2.setTrainer(t2);
        c2.setScheduleDatetime(LocalDateTime.of(2025, 11, 26, 18, 0)); // set datetime
        classRepo.save(c2);
    }
}

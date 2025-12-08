package com.example.project.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "classes")
public class GymClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id")
    private Long id;

    @Column(name = "class_name", nullable = false)
    private String title;

    @Column(nullable = false)
    private String schedule;

    @Column(nullable = false)
    private int capacity;

    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;

    @Column(name = "schedule_datetime", nullable = false)
    private LocalDateTime scheduleDatetime;

    // optional: map the 'title' column in DB if you need it
    // @Column(name = "title")
    // private String altTitle;

    public GymClass() {}

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSchedule() { return schedule; }
    public void setSchedule(String schedule) { this.schedule = schedule; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }

    public Trainer getTrainer() { return trainer; }
    public void setTrainer(Trainer trainer) { this.trainer = trainer; }

    public LocalDateTime getScheduleDatetime() { return scheduleDatetime; }
    public void setScheduleDatetime(LocalDateTime scheduleDatetime) { this.scheduleDatetime = scheduleDatetime; }
}

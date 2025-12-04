package com.example.project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "classes")
public class GymClass {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String schedule; // e.g., "Mon 18:00-19:00"
    private int capacity;
    @ManyToOne
    private Trainer trainer;
    public GymClass(){}
    // getters/setters...
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
}

package com.example.project.dto;

import lombok.Data;

@Data
public class AppointmentResponse {
    private Long id;
    private String memberName;
    private String trainerName;
    private String appointmentAt;
    private String status;
}


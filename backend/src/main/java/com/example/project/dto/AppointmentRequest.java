package com.example.project.dto;

import lombok.Data;

@Data
public class AppointmentRequest {
    private Long memberId;
    private Long trainerId;
    private String datetime; // ISO String
}

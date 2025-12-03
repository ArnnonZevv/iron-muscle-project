package com.example.project.dto;

import lombok.Data;

@Data
public class PaymentResponse {
    private Long id;
    private String memberName;
    private String membershipType;
    private double amount;
    private String paymentDate;
    private String paymentMethod;
    private String status;
}

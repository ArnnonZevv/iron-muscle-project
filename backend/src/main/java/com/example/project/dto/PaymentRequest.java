package com.example.project.dto;

import lombok.Data;

@Data
public class PaymentRequest {
    private double amount;
    private String paymentMethod;
    private String reference;
}

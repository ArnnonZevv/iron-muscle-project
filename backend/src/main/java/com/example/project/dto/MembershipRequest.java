package com.example.project.dto;

import lombok.Data;

@Data
public class MembershipRequest {
    private String type;
    private String startDate;
    private String endDate;
    private double price;
}

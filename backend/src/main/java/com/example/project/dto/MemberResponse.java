package com.example.project.dto;

import lombok.Data;

@Data
public class MemberResponse {
    private Long id;
    private String fullName;
    private String email;
    private String contactNumber;

    private String membershipName;
    private Double membershipPrice;
}

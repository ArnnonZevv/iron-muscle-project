package com.example.project.dto;

import lombok.Data;

@Data
public class MemberRequest {
    private String fullName;
    private String email;
    private String contactNumber;
    private Long membershipId; 
}

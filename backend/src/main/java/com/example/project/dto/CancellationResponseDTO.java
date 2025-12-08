package com.example.project.dto;

import lombok.Data;

@Data
public class CancellationResponseDTO {
    private Long id;
    private String memberName;
    private String reason;
    private String status;
}

package com.example.project.dto;

import lombok.Data;

@Data
public class CancellationRequestDTO {
    private Long memberId;
    private String reason;
}

package com.example.productintro.dto;

public record ContactRequest(
        String name,
        String email,
        String company,
        String inquiryType,
        String message) {
}

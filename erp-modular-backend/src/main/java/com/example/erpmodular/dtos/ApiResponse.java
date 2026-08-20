package com.example.erpmodular.dtos;

public record ApiResponse<T>(
        String message,
        T data) {
}
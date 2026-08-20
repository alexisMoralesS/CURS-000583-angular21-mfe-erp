package com.example.erpmodular.features.sales.dtos.request;

public record ProductListResponse(
        Integer id,
        String code,
        String name,
        String description,
        Integer minStock,
        String imageUrl,
        Float price) {

}

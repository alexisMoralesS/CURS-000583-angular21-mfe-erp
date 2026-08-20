package com.example.erpmodular.features.sales.dtos.response;

import java.time.LocalDateTime;
import java.util.List;

public record SaleShowResponse(
        Integer id,
        Float subtotal,
        Float ivg,
        Float total,
        LocalDateTime createdAt,
        String customerName,
        PaymentMethod paymentMethod,
        Serie serie,
        TypeReceipt typeReceipt,
        List<Porduct> products) {
    public record PaymentMethod(Integer id, String name) {
    }

    public record Serie(
            Integer id,
            String number) {
    }

    public record TypeReceipt(
            String id,
            String name) {
    }

    public record Porduct(
            Integer id,
            String code,
            String name,
            Integer quantity,
            Float price,
            Float subtotal

    ) {
    }
}

package com.example.erpmodular.features.sales.dtos.response;

import java.time.LocalDateTime;

public record SaleListResponse(
                Integer id,
                Float subtotal,
                Float ivg,
                Float total,
                LocalDateTime createdAt,
                String customerName,
                Serie serie,
                TypeReceipt typeReceipt) {

        public record Serie(
                        Integer id,
                        String number) {
        }
            public record TypeReceipt(
            String id,
            String name) {
    }

}
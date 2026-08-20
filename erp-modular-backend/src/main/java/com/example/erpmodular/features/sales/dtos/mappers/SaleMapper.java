package com.example.erpmodular.features.sales.dtos.mappers;

import org.springframework.stereotype.Component;

import com.example.erpmodular.features.sales.dtos.response.SaleListResponse;
import com.example.erpmodular.features.sales.entities.Sale;

@Component
public class SaleMapper {
    public SaleListResponse toResponse(Sale sale) {
        SaleListResponse.Serie serie = new SaleListResponse.Serie(sale.getSerie().getId(),
                sale.getSerie().getNumber());

        SaleListResponse.TypeReceipt typeReceipt = new SaleListResponse.TypeReceipt(
                sale.getSerie().getTypeReceipt().getId(),
                sale.getSerie().getTypeReceipt().getName());

        return new SaleListResponse(
                sale.getId(),
                sale.getSubtotal(),
                sale.getIvg(),
                sale.getTotal(),
                sale.getCreatedAt(),
                sale.getCustomer().getName(),
                serie,
                typeReceipt);
    }
}

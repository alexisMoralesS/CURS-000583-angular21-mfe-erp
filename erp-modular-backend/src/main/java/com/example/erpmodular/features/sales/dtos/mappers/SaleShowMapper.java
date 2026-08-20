package com.example.erpmodular.features.sales.dtos.mappers;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.erpmodular.features.sales.dtos.response.SaleShowResponse;
import com.example.erpmodular.features.sales.entities.Sale;

@Component
public class SaleShowMapper {
    public SaleShowResponse toResponse(Sale sale) {
        List<SaleShowResponse.Porduct> products = sale.getDetalles()
                .stream()
                .map(detail -> new SaleShowResponse.Porduct(
                        detail.getProduct().getId(),
                        detail.getProduct().getCode(),
                        detail.getProduct().getName(),
                        detail.getQuantity(),
                        detail.getPrice(),
                        detail.getSubtotal()))
                .toList();
        SaleShowResponse.Serie serie = new SaleShowResponse.Serie(
                sale.getSerie().getId(),
                sale.getSerie().getNumber());

        SaleShowResponse.TypeReceipt typeReceipt = new SaleShowResponse.TypeReceipt(
                sale.getSerie().getTypeReceipt().getId(),
                sale.getSerie().getTypeReceipt().getName());
        SaleShowResponse.PaymentMethod paymentMethod = new SaleShowResponse.PaymentMethod(
                sale.getPaymentMethod().getId(),
                sale.getPaymentMethod().getName());
        return new SaleShowResponse(
                sale.getId(),
                sale.getSubtotal(),
                sale.getIvg(),
                sale.getTotal(),
                sale.getCreatedAt(),
                sale.getCustomer().getName(),
                paymentMethod,
                serie,
                typeReceipt,
                products

        );
    }
}

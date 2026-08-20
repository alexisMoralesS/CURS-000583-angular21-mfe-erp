package com.example.erpmodular.features.sales.dtos.request;

import java.util.List;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleCreateRequest {
    Integer serieId;
    Integer paymentMethodId;
    Integer customerId;
    Float subtotal;
    Float igv;
    Float total;
    List<ProductCreateRequest> products;

}

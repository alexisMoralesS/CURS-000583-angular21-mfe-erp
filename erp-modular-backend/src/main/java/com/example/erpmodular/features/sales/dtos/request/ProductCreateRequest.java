package com.example.erpmodular.features.sales.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductCreateRequest {
    Integer id;
    Integer quantity;
    Float price;
    Float subtotal;

}

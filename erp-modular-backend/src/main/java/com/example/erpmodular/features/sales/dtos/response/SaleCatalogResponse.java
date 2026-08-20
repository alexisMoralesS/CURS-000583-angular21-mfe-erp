package com.example.erpmodular.features.sales.dtos.response;

import java.util.List;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaleCatalogResponse {
    private List<TypeReceiptResponse> typeReceipts;
    private List<PaymentMethodResponse> paymentMethod;
}

package com.example.erpmodular.features.sales.services.mapper;

import org.springframework.stereotype.Component;

import com.example.erpmodular.features.sales.dtos.response.PaymentMethodResponse;
import com.example.erpmodular.features.sales.entities.PaymentMethod;

@Component
public class PaymentMethodMapper {
    public PaymentMethodResponse toResponse(PaymentMethod entity) {

        PaymentMethodResponse response = new PaymentMethodResponse();
        response.setId(entity.getId());
        response.setName(entity.getName());
        return response;
    }
}

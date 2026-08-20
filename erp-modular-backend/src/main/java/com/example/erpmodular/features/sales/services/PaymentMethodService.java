package com.example.erpmodular.features.sales.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.sales.dtos.response.PaymentMethodResponse;
import com.example.erpmodular.features.sales.repositories.PaymentMethodRepository;
import com.example.erpmodular.features.sales.services.mapper.PaymentMethodMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentMethodService {
        private final PaymentMethodRepository repository;
        private final PaymentMethodMapper PaymentMethodMapper;

        public List<PaymentMethodResponse> findAll() {
                return repository.findAll().stream()
                                .map(PaymentMethodMapper::toResponse)
                                .toList();
        }
}

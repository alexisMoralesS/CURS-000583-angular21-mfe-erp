package com.example.erpmodular.features.sales.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.sales.dtos.response.TypeReceiptResponse;
import com.example.erpmodular.features.sales.repositories.TypeReceiptRepository;
import com.example.erpmodular.features.sales.services.mapper.TypeReceiptMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TypeReceiptService {
    private final TypeReceiptRepository repository;
    private final TypeReceiptMapper typeReceiptMapper;

    public List<TypeReceiptResponse> findAll() {
        return repository.findAllWithSeries().stream()
                .map(typeReceiptMapper::toResponse)
                .toList();
    }
}

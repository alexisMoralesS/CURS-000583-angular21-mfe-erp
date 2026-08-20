package com.example.erpmodular.features.customers.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.customers.entities.DocumentType;
import com.example.erpmodular.features.customers.repositories.DocumentTypeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DocumentTypeService {
    private final DocumentTypeRepository repository;

    public List<DocumentType> findAll() {
        return repository.findAll();
    }
}

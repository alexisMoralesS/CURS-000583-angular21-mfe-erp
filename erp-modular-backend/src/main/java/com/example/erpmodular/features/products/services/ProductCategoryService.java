package com.example.erpmodular.features.products.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.products.entities.ProductCategory;
import com.example.erpmodular.features.products.repositories.ProductCategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductCategoryService {
    private final ProductCategoryRepository repository;

    public List<ProductCategory> findAll() {
        return repository.findAll();
    }
}

package com.example.erpmodular.features.products.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.products.entities.ProductBrand;
import com.example.erpmodular.features.products.repositories.ProductBrandRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductBrandService {

    private final ProductBrandRepository repository;

    public List<ProductBrand> findAll() {
        return repository.findAll();
    }
}

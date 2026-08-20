package com.example.erpmodular.features.products.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.erpmodular.features.products.entities.ProductBrand;
import com.example.erpmodular.features.products.services.ProductBrandService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/product-brands")
@RequiredArgsConstructor
public class ProductBrandController {
    private final ProductBrandService service;

    @GetMapping
    public List<ProductBrand> getAll() {
        return service.findAll();
    }
}

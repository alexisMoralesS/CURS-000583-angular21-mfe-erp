package com.example.erpmodular.features.products.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.erpmodular.features.products.entities.ProductCategory;
import com.example.erpmodular.features.products.services.ProductCategoryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/product-categories")
@RequiredArgsConstructor
public class ProductCategoryController {
    private final ProductCategoryService service;

    @GetMapping
    public List<ProductCategory> getAll() {
        return service.findAll();
    }
}

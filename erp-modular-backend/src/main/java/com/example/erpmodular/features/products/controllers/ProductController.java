package com.example.erpmodular.features.products.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.erpmodular.features.products.dtos.ProductCreateRequest;
import com.example.erpmodular.features.products.entities.Product;
import com.example.erpmodular.features.products.services.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    
    private final ProductService service;

    @GetMapping
    public List<Product> getAll() {
        return service.findAll();
    }

    @GetMapping("/search")
    public List<Product> findAllBySearch(
            @RequestParam(required = true) String search) {
        return service.findAllBySearch(search);
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Integer id) {
        return service.findById(id)
                .orElseThrow();
    }

    @PostMapping
    public Product create(@RequestBody ProductCreateRequest product) {
        return service.save(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Integer id,
            @RequestBody Product product) {
        return service.update(id, product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}

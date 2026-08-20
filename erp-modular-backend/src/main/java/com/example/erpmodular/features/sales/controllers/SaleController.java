package com.example.erpmodular.features.sales.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.erpmodular.dtos.ApiResponse;
import com.example.erpmodular.features.sales.dtos.request.SaleCreateRequest;
import com.example.erpmodular.features.sales.dtos.response.SaleCatalogResponse;
import com.example.erpmodular.features.sales.dtos.response.SaleListResponse;
import com.example.erpmodular.features.sales.dtos.response.SaleShowResponse;
import com.example.erpmodular.features.sales.services.SaleService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/sales")
@RequiredArgsConstructor
public class SaleController {
    private final SaleService service;

    @GetMapping
    public List<SaleListResponse> getAll() {
        return service.findAll();
    }

    @GetMapping("/catalogs")
    public SaleCatalogResponse catalogs() {
        return service.catalogs();
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> create(@RequestBody SaleCreateRequest request) {

        service.save(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new ApiResponse<>(
                        "Venta creada correctamente", null));
    }

    @GetMapping("/{saleId}")
    public Optional<SaleShowResponse> getById(@PathVariable Integer saleId) {
        return service.findById(saleId);
    }

}

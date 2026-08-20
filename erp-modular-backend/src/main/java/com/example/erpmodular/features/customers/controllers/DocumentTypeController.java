package com.example.erpmodular.features.customers.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.erpmodular.features.customers.entities.DocumentType;
import com.example.erpmodular.features.customers.services.DocumentTypeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/document-types")
@RequiredArgsConstructor
public class DocumentTypeController {
    private final DocumentTypeService service;

    @GetMapping
    public List<DocumentType> getAll() {
        return service.findAll();
    }
}

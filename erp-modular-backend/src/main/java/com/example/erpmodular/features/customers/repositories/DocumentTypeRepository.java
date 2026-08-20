package com.example.erpmodular.features.customers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.erpmodular.features.customers.entities.DocumentType;

public interface DocumentTypeRepository extends JpaRepository<DocumentType, String> {

}

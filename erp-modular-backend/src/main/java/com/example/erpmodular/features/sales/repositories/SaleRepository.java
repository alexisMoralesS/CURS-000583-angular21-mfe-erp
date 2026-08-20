package com.example.erpmodular.features.sales.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.erpmodular.features.sales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Integer> {
    List<Sale> findAllByOrderByCreatedAtDesc();
}

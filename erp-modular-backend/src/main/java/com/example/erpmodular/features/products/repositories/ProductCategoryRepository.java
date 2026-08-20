package com.example.erpmodular.features.products.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.erpmodular.features.products.entities.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {

}

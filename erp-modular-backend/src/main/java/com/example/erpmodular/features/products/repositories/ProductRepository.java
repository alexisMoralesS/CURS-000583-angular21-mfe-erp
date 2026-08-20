package com.example.erpmodular.features.products.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.erpmodular.features.products.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("""
            SELECT c
            FROM Product c
            WHERE (:search IS NULL OR :search = ''
                   OR LOWER(c.name) LIKE LOWER(CONCAT('%', :search, '%'))
                   OR LOWER(c.code) LIKE LOWER(CONCAT('%', :search, '%'))
                   OR LOWER(c.description) LIKE LOWER(CONCAT('%', :search, '%'))
                )
            """)
    List<Product> findAllBySearch(@Param("search") String search);
}

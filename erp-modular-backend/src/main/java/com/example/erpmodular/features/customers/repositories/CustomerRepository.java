package com.example.erpmodular.features.customers.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.erpmodular.features.customers.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query("""
            SELECT c
            FROM Customer c
            WHERE (:search IS NULL OR :search = ''
                   OR LOWER(c.name) LIKE LOWER(CONCAT('%', :search, '%'))
                   OR c.numberDocument LIKE CONCAT('%', :search, '%'))
            """)
    List<Customer> findAllBySearch(@Param("search") String search);
}
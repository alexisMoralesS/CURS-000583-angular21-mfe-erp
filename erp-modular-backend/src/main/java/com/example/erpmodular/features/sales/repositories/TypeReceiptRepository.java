package com.example.erpmodular.features.sales.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.erpmodular.features.sales.entities.TypeReceipt;

public interface TypeReceiptRepository extends JpaRepository<TypeReceipt, String> {
    @Query("""
            SELECT DISTINCT t
            FROM TypeReceipt t
            LEFT JOIN FETCH t.series
            """)
    List<TypeReceipt> findAllWithSeries();
}

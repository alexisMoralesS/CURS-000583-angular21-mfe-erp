package com.example.erpmodular.features.sales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.erpmodular.features.sales.entities.PaymentMethod;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Integer> {

}

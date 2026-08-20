package com.example.erpmodular.features.customers.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.erpmodular.features.customers.dtos.CustomerCreateRequest;
import com.example.erpmodular.features.customers.entities.Customer;
import com.example.erpmodular.features.customers.services.CustomerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService service;

    @GetMapping
    public List<Customer> getAll(
            @RequestParam(required = false) String search) {
        return service.findAllBySearch(search);
    }

    @GetMapping("/search")
    public List<Customer> findAllBySearch(
            @RequestParam(required = true) String search) {
        return service.findAllBySearch(search);
    }

    @GetMapping("/{id}")
    public Customer getById(@PathVariable Integer id) {
        return service.findById(id)
                .orElseThrow();
    }

    @PostMapping
    public Customer create(@RequestBody CustomerCreateRequest customer) {
        return service.save(customer);
    }

    @PutMapping("/{id}")
    public Customer update(@PathVariable Integer id,
            @RequestBody Customer customer) {
        return service.update(id, customer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}

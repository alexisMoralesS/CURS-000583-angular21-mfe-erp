package com.example.erpmodular.features.customers.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.customers.dtos.CustomerCreateRequest;
import com.example.erpmodular.features.customers.entities.Customer;
import com.example.erpmodular.features.customers.entities.DocumentType;
import com.example.erpmodular.features.customers.repositories.CustomerRepository;
import com.example.erpmodular.features.customers.repositories.DocumentTypeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository repository;
    private final DocumentTypeRepository documentTypeRepository;


    public List<Customer> findAllBySearch(String search) {
        return repository.findAllBySearch(search);
    }

    public List<Customer> findAll() {
        return repository.findAll();
    }

    public Optional<Customer> findById(Integer id) {
        return repository.findById(id);
    }

    public Customer save(CustomerCreateRequest request) {
        DocumentType documentType = documentTypeRepository.findById(request.getDocumentTypeId())
                .orElseThrow(() -> new RuntimeException("Tipo de documento no encontrado"));

        Customer customer = new Customer();
        customer.setNumberDocument(request.getNumberDocument());
        customer.setName(request.getName());
        customer.setEmail(request.getEmail());
        customer.setPhone(request.getPhone());
        customer.setAddress(request.getAddress());
        customer.setDocumentType(documentType);

        return repository.save(customer);
    }

    public Customer update(Integer id, Customer customer) {
        Customer existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        existing.setEmail(customer.getEmail());
        existing.setDocumentType(customer.getDocumentType());

        return repository.save(existing);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }
}

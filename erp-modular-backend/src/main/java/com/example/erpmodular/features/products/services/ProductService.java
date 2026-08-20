package com.example.erpmodular.features.products.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.erpmodular.features.products.dtos.ProductCreateRequest;
import com.example.erpmodular.features.products.entities.Product;
import com.example.erpmodular.features.products.entities.ProductBrand;
import com.example.erpmodular.features.products.entities.ProductCategory;
import com.example.erpmodular.features.products.repositories.ProductBrandRepository;
import com.example.erpmodular.features.products.repositories.ProductCategoryRepository;
import com.example.erpmodular.features.products.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository repository;
    private final ProductBrandRepository productBrandRepository;
    private final ProductCategoryRepository productCategoryRepository;

    public List<Product> findAllBySearch(String search) {
        return repository.findAllBySearch(search);
    }

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Optional<Product> findById(Integer id) {
        return repository.findById(id);
    }

    public Product save(ProductCreateRequest request) {
        ProductBrand productBrand = productBrandRepository.findById(request.getBrandId())
                .orElseThrow(() -> new RuntimeException("Marca no encontrado"));

        ProductCategory productCategory = productCategoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Categoría no encontrado"));

        Product product = new Product();
        product.setCode(request.getCode());
        product.setName(request.getName());
        product.setProductBrand(productBrand);
        product.setProductCategory(productCategory);
        product.setPrice(request.getPrice());
        product.setMinStock(request.getMinStock());
        
        return repository.save(product);
    }

    public Product update(Integer id, Product product) {
        Product existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        existing.setName(product.getName());
        existing.setDescription(product.getDescription());
        existing.setMinStock(product.getMinStock());
        existing.setPrice(product.getPrice());
        existing.setProductCategory(product.getProductCategory());
        existing.setProductBrand(product.getProductBrand());

        return repository.save(existing);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }
}

package com.example.erpmodular.features.sales.services;

import java.util.List;
import java.util.Optional;

import org.springframework.boot.data.autoconfigure.web.DataWebProperties.Sort;
import org.springframework.stereotype.Service;

import com.example.erpmodular.features.customers.entities.Customer;
import com.example.erpmodular.features.customers.repositories.CustomerRepository;
import com.example.erpmodular.features.products.entities.Product;
import com.example.erpmodular.features.products.repositories.ProductRepository;
import com.example.erpmodular.features.sales.dtos.mappers.SaleMapper;
import com.example.erpmodular.features.sales.dtos.mappers.SaleShowMapper;
import com.example.erpmodular.features.sales.dtos.request.SaleCreateRequest;
import com.example.erpmodular.features.sales.dtos.response.SaleCatalogResponse;
import com.example.erpmodular.features.sales.dtos.response.SaleListResponse;
import com.example.erpmodular.features.sales.dtos.response.SaleShowResponse;
import com.example.erpmodular.features.sales.entities.PaymentMethod;
import com.example.erpmodular.features.sales.entities.Sale;
import com.example.erpmodular.features.sales.entities.SaleDetail;
import com.example.erpmodular.features.sales.entities.Serie;
import com.example.erpmodular.features.sales.repositories.PaymentMethodRepository;
import com.example.erpmodular.features.sales.repositories.SaleRepository;
import com.example.erpmodular.features.sales.repositories.SerieRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SaleService {
    private final SaleRepository repository;
    private final CustomerRepository customerRepository;
    private final PaymentMethodRepository paymentMethodRepository;
    private final ProductRepository productRepository;
    private final SerieRepository serieRepository;

    private final TypeReceiptService typeReceiptService;
    private final PaymentMethodService paymentMethodService;

    private final SaleMapper saleMapper;
    private final SaleShowMapper saleShowMapper;

    public List<SaleListResponse> findAll() {
        return repository.findAllByOrderByCreatedAtDesc().stream()
                .map(saleMapper::toResponse)
                .toList();
    }

    public Optional<SaleShowResponse> findById(Integer id) {
        return repository.findById(id).stream()
                .map(saleShowMapper::toResponse).findFirst();

    }

    public void save(SaleCreateRequest request) {
        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        PaymentMethod paymentMethod = paymentMethodRepository.findById(request.getPaymentMethodId())
                .orElseThrow(() -> new RuntimeException("Tipo de pago no encontrado"));

        Serie serie = serieRepository.findById(request.getSerieId())
                .orElseThrow(() -> new RuntimeException("Serie no encontrada"));

        Sale sale = new Sale();
        sale.setIvg(request.getIgv());
        sale.setSubtotal(request.getSubtotal());
        sale.setTotal(request.getTotal());
        sale.setCustomer(customer);
        sale.setPaymentMethod(paymentMethod);
        sale.setSerie(serie);

        List<SaleDetail> detalles = request.getProducts()
                .stream()
                .map(productRequest -> {

                    SaleDetail detail = new SaleDetail();

                    Product product = productRepository
                            .findById(productRequest.getId())
                            .orElseThrow(() -> new RuntimeException(
                                    "Producto no encontrado: "
                                            + productRequest.getId()));

                    detail.setProduct(product);
                    detail.setQuantity(productRequest.getQuantity());
                    detail.setPrice(productRequest.getPrice());
                    detail.setSubtotal(productRequest.getSubtotal());
                    detail.setSale(sale);
                    return detail;
                })
                .toList();
        sale.setDetalles(detalles);

        repository.save(sale);
    }

    public SaleCatalogResponse catalogs() {
        SaleCatalogResponse response = new SaleCatalogResponse();

        response.setTypeReceipts(typeReceiptService.findAll());
        response.setPaymentMethod(paymentMethodService.findAll());

        return response;
    }
}

package com.example.erpmodular.features.customers.entities;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, columnDefinition = "INT")
    private Integer id;

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    @Column(name = "number_document", unique = true, nullable = false, length = 150)
    private String numberDocument;

    @Column(unique = true, nullable = false, length = 150)
    private String email;

    @Column(nullable = false, length = 50)
    private String phone;

    @Column(length = 255)
    private String address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_type_id", nullable = false)
    private DocumentType documentType;
}

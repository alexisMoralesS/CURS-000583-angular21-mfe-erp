package com.example.erpmodular.features.customers.entities;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "document_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DocumentType {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

}
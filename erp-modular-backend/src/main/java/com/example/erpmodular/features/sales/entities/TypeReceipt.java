package com.example.erpmodular.features.sales.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "type_receipts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "series")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class TypeReceipt {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @OneToMany(mappedBy = "typeReceipt", fetch = FetchType.LAZY)
    private List<Serie> series = new ArrayList<>();

}

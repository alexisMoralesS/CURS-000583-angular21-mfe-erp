package com.example.erpmodular.features.sales.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "series")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "typeReceipt")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Serie {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "number", nullable = false, length = 50)
    private String number;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_receipt_id   ", nullable = false)
    @JsonIgnore
    private TypeReceipt typeReceipt;

}

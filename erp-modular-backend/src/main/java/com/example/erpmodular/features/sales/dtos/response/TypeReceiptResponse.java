package com.example.erpmodular.features.sales.dtos.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TypeReceiptResponse {
        private String id;
        private String name;
        private List<SeriesResponse> series;
}

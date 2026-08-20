package com.example.erpmodular.features.sales.services.mapper;

import org.springframework.stereotype.Component;

import com.example.erpmodular.features.sales.dtos.response.SeriesResponse;
import com.example.erpmodular.features.sales.dtos.response.TypeReceiptResponse;
import com.example.erpmodular.features.sales.entities.Serie;
import com.example.erpmodular.features.sales.entities.TypeReceipt;

@Component
public class TypeReceiptMapper {
    public TypeReceiptResponse toResponse(TypeReceipt entity) {

        TypeReceiptResponse response = new TypeReceiptResponse();
        response.setId(entity.getId());
        response.setName(entity.getName());

        response.setSeries(
                entity.getSeries()
                        .stream()
                        .map(this::toSeriesResponse)
                        .toList());

        return response;
    }

    private SeriesResponse toSeriesResponse(Serie entity) {

        SeriesResponse response = new SeriesResponse();
        response.setId(entity.getId());
        response.setNumber(entity.getNumber());

        return response;
    }
}

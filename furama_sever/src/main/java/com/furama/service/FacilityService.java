package com.furama.service;

import com.furama.model.Facility;

import java.util.List;

public interface FacilityService {
    List<Facility> findAll();

    Facility findById(String id);

    void save(Facility facility);
}

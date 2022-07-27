package com.furama.service;

import com.furama.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FacilityService {
    List<Facility> findAll();

    Facility findById(String id);

    void delete(String id);

    void save(Facility service);
}

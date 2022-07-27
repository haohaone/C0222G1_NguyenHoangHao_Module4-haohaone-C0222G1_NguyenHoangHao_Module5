package com.furama.service.imp;

import com.furama.model.Facility;
import com.furama.repository.FacilityRepository;
import com.furama.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FacilityServiceImp implements FacilityService {
    @Autowired
    private FacilityRepository facilityRepository;

    @Override
    public List<Facility> findAll() {
        return facilityRepository.findAll();
    }

    @Override
    public Facility findById(String id) {
        return null;
    }

    @Override
    public void delete(String id) {

    }

    @Override
    public void save(Facility service) {

    }
}

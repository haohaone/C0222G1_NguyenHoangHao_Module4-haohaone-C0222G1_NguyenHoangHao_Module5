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
        return facilityRepository.findAllFacility();
    }

    @Override
    public Facility findById(String id) {
        return facilityRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Facility facility) {
        facilityRepository.save(facility);
    }
}

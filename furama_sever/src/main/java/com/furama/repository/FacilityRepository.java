package com.furama.repository;

import com.furama.model.Customer;
import com.furama.model.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FacilityRepository extends JpaRepository<Facility, String> {
    @Query(value = "SELECT * FROM facility WHERE status_delete = 0", nativeQuery = true)
    List<Facility> findAllFacility();
}

package com.furama.controller;

import com.furama.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FacilityController {
    @Autowired
    private FacilityService facilityService;

    @GetMapping("/facility")
    private ResponseEntity<?> showFacility() {
        return new ResponseEntity<>(facilityService.findAll(), HttpStatus.OK);
    }
}

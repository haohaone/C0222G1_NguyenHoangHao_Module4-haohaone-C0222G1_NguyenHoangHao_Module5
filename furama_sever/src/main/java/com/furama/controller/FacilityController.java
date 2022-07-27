package com.furama.controller;

import com.furama.model.Facility;
import com.furama.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@ RequestMapping("/facility")
public class FacilityController {
    @Autowired
    private FacilityService facilityService;

    @GetMapping("")
    private ResponseEntity<?> showFacility() {
        return new ResponseEntity<>(facilityService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> findFacility(@PathVariable("id") String id){
        return new ResponseEntity<>(facilityService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable("id") String id){
        Facility facility = facilityService.findById(id);
        facility.setStatusDelete(1);
        facilityService.save(facility);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Facility facility){
        facilityService.save(facility);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/edit")
    private ResponseEntity<?> edit(@RequestBody Facility facility){
        facilityService.save(facility);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

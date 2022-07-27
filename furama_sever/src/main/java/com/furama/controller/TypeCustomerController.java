package com.furama.controller;

import com.furama.service.TypeCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TypeCustomerController {
    @Autowired
    private TypeCustomerService typeCustomerService;

    @GetMapping("/type-customer")
    private ResponseEntity<?> showTypeCustomerList() {
        return new ResponseEntity<>(typeCustomerService.findAll(), HttpStatus.OK);
    }
}

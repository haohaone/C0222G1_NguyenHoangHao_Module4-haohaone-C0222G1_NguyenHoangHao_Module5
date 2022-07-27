package com.furama.controller;

import com.furama.model.Customer;
import com.furama.model.TypeCustomer;
import com.furama.model.dto.CustomerDto;
import com.furama.service.CustomerService;
import com.furama.service.TypeCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private TypeCustomerService typeCustomerService;

    @GetMapping("")
    private ResponseEntity<?> showCustomerList() {
        List<CustomerDto> customerDtoList = new ArrayList<>();
        for (Customer customer : customerService.findAll()) {
            customerDtoList.add(new CustomerDto(customer.getId(),
                    customer.getName(),
                    customer.getDayOfBirth(),
                    customer.getIdCard(),
                    customer.getAddress(),
                    customer.getTypeCustomer().getId()));
        }
        return new ResponseEntity<>(customerDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> findCustomer(@PathVariable("id") String id) {
        return new ResponseEntity<>(customerService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable("id") String id) {
        Customer customer = customerService.findById(id);
        customer.setStatusDelete(1);
        customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody CustomerDto customerDto) {
        TypeCustomer typeCustomer = typeCustomerService.findById(customerDto.getType());
        customerService.save(new Customer(customerDto.getId(),
                customerDto.getName(),
                customerDto.getDayOfBirth(),
                customerDto.getIdCard(),
                customerDto.getAddress(),
                typeCustomer, 0));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/edit")
    private ResponseEntity<?> edit(@RequestBody CustomerDto customerDto) {
        TypeCustomer typeCustomer = typeCustomerService.findById(customerDto.getType());
        customerService.save(new Customer(customerDto.getId(),
                customerDto.getName(),
                customerDto.getDayOfBirth(),
                customerDto.getIdCard(),
                customerDto.getAddress(),
                typeCustomer, 0));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

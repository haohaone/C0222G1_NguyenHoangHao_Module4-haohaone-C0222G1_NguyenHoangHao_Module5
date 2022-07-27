package com.furama.service;

import com.furama.model.Customer;
import com.furama.model.Facility;

import java.util.List;

public interface CustomerService {
    List<Customer> findAll();

    Customer findById(String id);

    void save(Customer customer);
}

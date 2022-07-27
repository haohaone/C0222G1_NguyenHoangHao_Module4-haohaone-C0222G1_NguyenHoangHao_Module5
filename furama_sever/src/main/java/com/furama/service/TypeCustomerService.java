package com.furama.service;

import com.furama.model.TypeCustomer;

import java.util.List;

public interface TypeCustomerService {
    List<TypeCustomer> findAll();

    TypeCustomer findById(int id);
}

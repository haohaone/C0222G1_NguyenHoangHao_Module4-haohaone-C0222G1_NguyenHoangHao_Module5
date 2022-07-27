package com.furama.service.imp;

import com.furama.model.TypeCustomer;
import com.furama.repository.TypeCustomerRepository;
import com.furama.service.TypeCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeCustomerServiceImp implements TypeCustomerService {
    @Autowired
    private TypeCustomerRepository typeCustomerRepository;


    @Override
    public List<TypeCustomer> findAll() {
        return typeCustomerRepository.findAll();
    }

    @Override
    public TypeCustomer findById(int id) {
        return typeCustomerRepository.findById(id).orElse(null);
    }
}

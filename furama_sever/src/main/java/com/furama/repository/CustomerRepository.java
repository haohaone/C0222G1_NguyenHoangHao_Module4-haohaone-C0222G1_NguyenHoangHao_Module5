package com.furama.repository;

import com.furama.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, String> {
    @Query(value = "SELECT * FROM customer WHERE status_delete = 0", nativeQuery = true)
    List<Customer> findAllCustomer();
}

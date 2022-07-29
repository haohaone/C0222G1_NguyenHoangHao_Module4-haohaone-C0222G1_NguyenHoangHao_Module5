package com.exam.service;

import com.exam.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface TicketService {
    Page<Ticket> findAll(String startPlace, String endPlace, String startDate, String endDate, Pageable pageable);

    Ticket findById(Integer id);

    void save(Ticket ticket);

    List<Ticket> findAll();
}

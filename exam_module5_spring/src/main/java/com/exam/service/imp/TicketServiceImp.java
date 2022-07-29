package com.exam.service.imp;

import com.exam.model.Ticket;
import com.exam.repository.TicketRepository;
import com.exam.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImp implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Page<Ticket> findAll(String startPlace, String endPlace, String startDate, String endDate, Pageable pageable) {
        return ticketRepository.findAllTicket("%"+startPlace+"%", "%"+endPlace+"%", startDate, endDate, pageable);
    }

    @Override
    public Ticket findById(Integer id) {
        return ticketRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }
}

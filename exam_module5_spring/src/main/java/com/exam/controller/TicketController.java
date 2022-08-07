package com.exam.controller;

import com.exam.model.Ticket;
import com.exam.service.HomeBusService;
import com.exam.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {
    @Autowired
    private TicketService ticketService;
    @Autowired
    private HomeBusService homeBusService;

    @GetMapping("/ticket/{startPlace}/{endPlace}/{startDate}/{endDate}/{page}")
    private ResponseEntity<?> findAll(@PathVariable("startPlace") String startPlace,
                                      @PathVariable("endPlace") String endPlace,
                                      @PathVariable("startDate") String startDate,
                                      @PathVariable("endDate") String endDate,
                                      @PathVariable("page") Integer page) {
        if (startPlace.equals(" ")){
            startPlace = "";
        }
        if (endPlace.equals(" ")){
            endPlace = "";
        }
        return new ResponseEntity<>(ticketService.findAll(startPlace,
                endPlace,
                startDate,
                endDate,
                PageRequest.of(page, 4)), HttpStatus.OK);
    }

    @GetMapping("/homeBus")
    private ResponseEntity<?> findAllHomeBus(){
        return new ResponseEntity<>(homeBusService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/ticket")
    private ResponseEntity<?> findAllTicket(){
        return new ResponseEntity<>(ticketService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/ticket/{id}")
    private ResponseEntity<?> findAllHomeBus(@PathVariable("id") Integer id){
        return new ResponseEntity<>(ticketService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/ticket")
    private ResponseEntity<?> save(@RequestBody Ticket ticket){
        ticketService.save(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/ticket")
    private ResponseEntity<?> update(@RequestBody Ticket ticket){
        ticketService.save(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

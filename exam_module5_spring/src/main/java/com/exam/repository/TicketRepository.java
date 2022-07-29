package com.exam.repository;

import com.exam.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    @Query(value = "select * from ticket where start_place like :startPlace and end_place like :endPlace " +
            "and start_date >= :startDate and start_date <= :endDate", nativeQuery=true )
    Page<Ticket> findAllTicket(@Param("startPlace") String startPlace,
                               @Param("endPlace") String endPlace,
                               @Param("startDate") String startDate,
                               @Param("endDate") String endDate,
                               Pageable pageable);
}

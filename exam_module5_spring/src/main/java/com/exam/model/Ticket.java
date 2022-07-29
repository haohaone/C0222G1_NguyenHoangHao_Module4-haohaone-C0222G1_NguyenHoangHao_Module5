package com.exam.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Double price;

    @Column(name = "start_place")
    private String startPlace;

    @Column(name = "end_place")
    private String endPlace;

    @Column(name = "start_date", columnDefinition = "DATE")
    private String startDate;

    @Column(name = "time_start")
    private String timeStart;

    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "home_bus", referencedColumnName = "id")
    private HomeBus homeBus;

    public Ticket() {
    }

    public Ticket(Integer id,
                  Double price,
                  String startPlace,
                  String endPlace,
                  String startDate,
                  String timeStart,
                  Integer quantity,
                  HomeBus homeBus) {
        this.id = id;
        this.price = price;
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.startDate = startDate;
        this.timeStart = timeStart;
        this.quantity = quantity;
        this.homeBus = homeBus;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStartPlace() {
        return startPlace;
    }

    public void setStartPlace(String startPlace) {
        this.startPlace = startPlace;
    }

    public String getEndPlace() {
        return endPlace;
    }

    public void setEndPlace(String endPlace) {
        this.endPlace = endPlace;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public HomeBus getHomeBus() {
        return homeBus;
    }

    public void setHomeBus(HomeBus homeBus) {
        this.homeBus = homeBus;
    }
}

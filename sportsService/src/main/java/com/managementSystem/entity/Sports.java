package com.managementSystem.entity;

import com.managementSystem.request.CreateSport;

import javax.persistence.*;

@Entity
@Table(name = "sports")
public class Sports
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sportsid")
    private Long sportsId;

    @Column(name = "noOfPlayers")
    private String noOfPlayers;
    @Column(name = "sportsName")
    private String sportsName;
    @Column(name = "sportsType")
    private String sportsType;

    public Sports() {
    }

    public Sports(CreateSport createSport) {
        this.noOfPlayers = createSport.getNoOfPlayers();
        this.sportsName = createSport.getSportsName();
        this.sportsType = createSport.getSportsType();
    }

    public Long getSportsId() {
        return sportsId;
    }

    public void setSportsId(Long sportsId) {
        this.sportsId = sportsId;
    }

    public String getNoOfPlayers() {
        return noOfPlayers;
    }

    public void setNoOfPlayers(String noOfPlayers) {
        this.noOfPlayers = noOfPlayers;
    }

    public String getSportsName() {
        return sportsName;
    }

    public void setSportsName(String sportsName) {
        this.sportsName = sportsName;
    }

    public String getSportsType() {
        return sportsType;
    }

    public void setSportsType(String sportsType) {
        this.sportsType = sportsType;
    }
}


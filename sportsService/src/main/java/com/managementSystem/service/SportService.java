package com.managementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.managementSystem.entity.Sports;
import com.managementSystem.exception.ResourceNotFoundException;
import com.managementSystem.repository.SportsRepo;
import com.managementSystem.request.CreateSport;

@Service

public class SportService {

    @Autowired
    SportsRepo sportsRepo;
    public List<Sports> getAll() {
        return sportsRepo.findAll();
    }

    public Sports getSportsByName(String sportsName) {
        if(sportsRepo.getSportByName(sportsName)==null){
            throw new ResourceNotFoundException("Sport with given name is not present");
        }
        return sportsRepo.getSportByName(sportsName);
    }
   
    public Sports getSportsById(Long sportsId) {
        if (sportsRepo.findById(sportsId).isPresent()) {
            return sportsRepo.findById(sportsId).get();
        }
        return null;
    }

    public Sports saveSport(CreateSport createSport) {
        return sportsRepo.save(new Sports(createSport));
    }
    
   
    
}

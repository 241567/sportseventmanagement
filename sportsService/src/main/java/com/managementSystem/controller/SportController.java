package com.managementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.managementSystem.Response.SportResponse;
import com.managementSystem.entity.Sports;
import com.managementSystem.exception.ResourceNotFoundException;
import com.managementSystem.request.CreateSport;
import com.managementSystem.service.SportService;


@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping(value = "/sport")
public class SportController {

    @Autowired
    private SportService service;
    @GetMapping("/sports")
    public ResponseEntity<List<Sports>> getAllSportsDetail(){
        List<Sports> list =service.getAll();
        if(list.size()<=0){
            throw new ResourceNotFoundException("Empty");
        }
        return ResponseEntity.ok(list);
    }


    @PostMapping("/addSports")
    @ResponseBody
    public String addSport(@RequestBody CreateSport createSport){
        Sports sports =service.saveSport(createSport);
        return "Sport "+sports.getSportsName() +" add successfully";
    }
    
  /* @CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")*/
   @GetMapping("/getSportsByName/{name}")
    public SportResponse getSportsByName(@PathVariable("name") String sportsName){
        Sports sport = service.getSportsByName(sportsName);
        return new SportResponse(sport);
    }
    
  @GetMapping("/getSportsById/{id}")
    public SportResponse getSportsById(@PathVariable("id") Long sportsId){
        Sports sport = service.getSportsById(sportsId);
        return new SportResponse(sport);
    }

   
     
    
}

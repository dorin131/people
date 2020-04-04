package org.fodor.peoplebackendjava.controllers;

import org.fodor.peoplebackendjava.models.People;
import org.fodor.peoplebackendjava.repositories.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/people")
public class PeopleController {
    @Autowired
    private PeopleRepository repository;

    @GetMapping
    public List<People> getPeople() {
        System.out.println(String.format("Getting %d people: ", repository.count()));
        return repository.findAll();
    };

    @PutMapping
    public void setPerson(@RequestBody People newPerson) {
        System.out.println("Adding person: " + newPerson.toString());
        repository.insert(newPerson);
    }
};

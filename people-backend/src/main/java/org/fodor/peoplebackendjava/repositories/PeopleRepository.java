package org.fodor.peoplebackendjava.repositories;

import org.fodor.peoplebackendjava.models.People;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PeopleRepository extends MongoRepository<People, String> {

}

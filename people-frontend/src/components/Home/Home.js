import React, { useState, useEffect } from 'react';
import './Home.css';
import { AddPerson } from '../AddPerson/AddPerson';
import { ListPersons } from '../ListPersons/ListPersons';
import { PeopleGraph } from '../PeopleGraph/PeopleGraph';
import { API } from '../../services/API/API';

function getPeople(setPeople) {
  (async () => {
    const result = await API().getPeople();
    setPeople(result.people);
  })();
}

function addPerson(person, setPeople) {
  (async () => {
    await API().addPerson(person);
    getPeople(setPeople);
  })();
}

export function Home() {
  const [people, setPeople] = useState([]);
  useEffect(() => getPeople(setPeople), []);

  function onNewPerson(person) {
    addPerson(person, setPeople);
  }

  return (
    <div className="Home">
      <ListPersons people={people}></ListPersons>
      <AddPerson onNewPerson={onNewPerson}></AddPerson>
      <PeopleGraph people={people}></PeopleGraph>
    </div>
  )
}
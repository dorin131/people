import React, { useState, useEffect } from 'react';
import './Home.css';
import AddPerson from '../AddPerson/AddPerson';
import ListPersons from '../ListPersons/ListPersons';
import PeopleGraph from '../PeopleGraph/PeopleGraph';
import API from '../../services/API/API';

function getPeople(setPeople) {
  (async () => {
    const people = await API().getPeople();
    setPeople(people);
  })();
}

function addPerson(person, setPeople) {
  (async () => {
    await API().addPerson(person);
    getPeople(setPeople);
  })();
}

export default function Home() {
  const [people, setPeople] = useState([]);
  useEffect(() => getPeople(setPeople), []);

  function onNewPerson(person) {
    addPerson(person, setPeople);
  }

  return (
    <div className="Home">
      <ListPersons people={people} />
      <AddPerson onNewPerson={onNewPerson} />
      <PeopleGraph people={people} />
    </div>
  );
}

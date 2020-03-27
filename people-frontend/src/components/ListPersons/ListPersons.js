import React from 'react';
import './ListPerson.css';

function list(people) {
  return people
    .map((person) => (
      <li key={person._id}>{person.name}</li>
    ));
}

export function ListPersons(props) {
  return (
    <div className="list-persons">
      <h1>People</h1>
      <ul>
        {list(props.people.filter(person => !person.isGroup))}
      </ul>
      <h1>Groups</h1>
      <ul>
        {list(props.people.filter(person => person.isGroup))}
      </ul>
    </div>
  )
}
import React from 'react';
import PropTypes from 'prop-types';
import './ListPerson.css';

function list(people) {
  return people
    .map((person) => (
      <li key={person.id}>{person.name}</li>
    ));
}

export default function ListPersons(props) {
  const { people } = props;
  return (
    <div className="list-persons">
      <h1>People</h1>
      <ul>
        {list(people.filter((person) => !person.isGroup))}
      </ul>
      <h1>Groups</h1>
      <ul>
        {list(people.filter((person) => person.isGroup))}
      </ul>
    </div>
  );
}

ListPersons.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

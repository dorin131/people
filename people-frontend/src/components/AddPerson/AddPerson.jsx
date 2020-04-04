import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddPerson.css';

export default function AddPerson(props) {
  const initialState = {
    name: '',
    linkedin: '',
    twitter: '',
    website: '',
    phone: '',
    birthday: '',
    location: '',
    hometown: '',
    education: '',
    company: '',
    title: '',
    facts: '',
    assummptions: '',
    likes: '',
    dislikes: '',
    interactionCount: 0,
    relationshipScore: 0,
    liaison: '',
  };
  const [person, setPerson] = useState(initialState);

  const handleNameChange = (field) => (event) => {
    setPerson({
      ...person,
      [field]: event.target.value,
    });
  };

  const fields = Object.keys(initialState).map((field) => (
    <div key={field}>
      <label htmlFor={field}>
        {field}
        :
        <br />
      </label>
      <input value={person[field] || ''} onChange={handleNameChange(field)} name={field} />
    </div>
  ));

  const handleSubmit = (event) => {
    props.onNewPerson(person);
    event.preventDefault();
  };

  return (
    <div className="add-person">
      <h1>Add Person</h1>
      <form onSubmit={handleSubmit}>
        {fields}
        <input type="submit" value="Add person" />
      </form>
    </div>
  );
}

AddPerson.propTypes = {
  onNewPerson: PropTypes.func.isRequired,
};

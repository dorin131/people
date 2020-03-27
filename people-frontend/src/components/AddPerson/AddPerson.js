import React, { useState } from 'react';
import './AddPerson.css';

export function AddPerson(props) {
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
    liaison: ''
  };
  const [person, setPerson] = useState(initialState);

  const handleNameChange = (field) => (event) => {
    setPerson({
      [field]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    props.onNewPerson(person);
    event.preventDefault();
  }

  const populateForm = (state) => {
    return Object.keys(state).map((field) => (
      <div key={field}>
        <label>
          {field}:<br />
          <input value={person[field] || ''} onChange={handleNameChange(field)}/>
        </label>
      </div>
    ));
  }

  return (
    <div className="add-person">
      <h1>Add Person</h1>
      <form onSubmit={handleSubmit}>
        {populateForm(initialState)}
        <input type="submit" value="Add person" />
      </form>
    </div>
  )
}
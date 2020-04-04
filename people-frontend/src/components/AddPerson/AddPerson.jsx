import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddPerson.css';

export default function AddPerson(props) {
  const { people, onNewPerson } = props;
  const initialState = {
    name: '',
    group: '',
    title: '',
    liaison: '',
    hasPhoto: false,
    isGroup: false,
  };
  const [person, setPerson] = useState(initialState);

  const handleStringChange = (event) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  const handleBooleanChange = (event) => {
    setPerson({
      ...person,
      [event.target.name]: Boolean(Number(event.target.value)),
    });
  };

  const handleSubmit = (event) => {
    onNewPerson(person);
    event.preventDefault();
  };

  return (
    <div className="add-person">
      <h1>Add Person</h1>
      <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label htmlFor="name">
            Name:
            <br />
            <input value={person.name || ''} onChange={handleStringChange} name="name" />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="title">
            Title:
            <br />
            <input value={person.title || ''} onChange={handleStringChange} name="title" />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="liaison">
            Liaison:
            <br />
            <select name="liaison" defaultValue={person.liaison} onChange={handleStringChange}>
              <option value="">Please choose</option>
              {people.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="isGroup">
            Is group:
            <br />
            <select name="isGroup" value={person.isGroup ? '1' : '0'} onChange={handleBooleanChange}>
              <option value="1">True</option>
              <option value="0">False</option>
            </select>
          </label>
        </div>

        <div className="submit-button">
          <input type="submit" value="Add person" />
        </div>

      </form>
    </div>
  );
}

AddPerson.propTypes = {
  onNewPerson: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

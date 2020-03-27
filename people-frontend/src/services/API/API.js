export function API() {
  const addPerson = (person) => {
    return fetch('http://localhost:4000/person', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    });
  }

  const getPeople = async () => {
    const result = await fetch('http://localhost:4000/people');
    return result.json();
  }

  return {
    addPerson,
    getPeople
  }
}
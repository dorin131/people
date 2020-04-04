export default function API() {
  const addPerson = (person) => fetch('http://localhost:8080/people', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  });

  const getPeople = async () => {
    const result = await fetch('http://localhost:8080/people');
    return result.json();
  };

  return {
    addPerson,
    getPeople,
  };
}

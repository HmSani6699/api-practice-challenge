const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};

const displayData = () => {
  const container = document.getElementById('container');
  const persons = person.result;
  persons.forEach(person => {
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'p-3', 'border', 'rounded-lg');
    div.innerHTML = `
    <h1 class="mb-2">Name : ${person.name.fullName[0]} ${person.name.fullName[1]}</h1>
      <hr>
      <p >Age : ${person.age}</p>
      <p >Street: ${person.address.street} House no ${person.address.house}</p>   
    `;
    container.appendChild(div)
  })
}
displayData()
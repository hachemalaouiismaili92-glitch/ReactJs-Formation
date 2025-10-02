import './Conditional-Rendring.css'


const customers = [
  { name: 'Mekki', isOld: false, age: 1 },
  { name: 'Samir', isOld: false, age: 2 },
  { name: 'Dawedi', isOld: true, age: 88 },
];

export default function PersonList() {
  const listItems = customers.map(person =>
    <li
      key={person.age}
      style={{
        color: person.isOld ? 'magenta' : 'darkgreen'
      }}
    >
      {person.name}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

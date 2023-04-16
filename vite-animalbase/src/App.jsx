import { useState } from "react";

import "./App.css";
import data from "./animals.json";

function cleanUpData() {
  /*{
    "fullname": "Mandu the amazing cat",
    "age": 10
} */

  return data.map((animal) => {
    const [name, , trait, type] = animal.fullname.split(" ");
    return {
      name: name,
      trait: trait,
      type: type,
      age: animal.age,
    };
  });
}

function App() {
  const animals = cleanUpData();
  //Fitler time
  const [filter, setFilter] = useState(" ");

  let filteredAnimals = [...animals];
  if (filter) {
    filteredAnimals = filteredAnimals.filter((ani) => ani.type === filter);
  }
  return (
    <div className="App">
      <h1>Mini animal base</h1>
      <button onClick={() => setFilter("cat")}>Only Cats</button>
      <button onClick={() => setFilter("dog")}>Only Dogs</button>
      <button onClick={() => setFilter("")}>All</button>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Trait</td>
            <td>Type</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.map((animal) => (
            <tr>
              <td>{animal.name}</td>
              <td>{animal.trait}</td>
              <td>{animal.type}</td>
              <td>{animal.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

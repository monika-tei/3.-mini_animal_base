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
  console.log(animals);
  return (
    <div className="App">
      <h1>Mini animal base</h1>
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
          {animals.map((animal) => (
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

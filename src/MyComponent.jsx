// updater function - aloows update based on previous data
// c- previous count represent

import React, {useState} from 'react'

function MyComponent () {

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar () {
    const newCar = {year: carYear,make: carMake ,model: carModel}
    setCars(c=>[...c, newCar])

    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }

  function handleRemoveCar (index) {
    setCars(c => c.filter((_,i) => i!== index));
  }

  function handleMakeYearChange (e) {
    setCarYear(e.target.value);
  }

  function handleMakeChange (e) {
    setCarMake(e.target.value);
  }

  function handleModelChange (e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car,index) =>
        <li key={index} onClick={() =>handleRemoveCar (index)}>
          {car.year} {car.make} {car.model}
        </li>)}
      </ul>
      <input type='number' value={carYear} onChange={handleMakeYearChange}/> <br/>
      <input type='text' placeholder='enter the car make' value={carMake} onChange={handleMakeChange}/> <br/>
      <input type='text' placeholder='enter the car model' value={carModel} onChange={handleModelChange}/> <br/>
      <button onClick={handleAddCar}>Add car</button>
    </div>
  )

}

export default MyComponent;
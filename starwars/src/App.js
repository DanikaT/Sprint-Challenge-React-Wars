import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import CharacterList from "./components/CharacterList";
import Starships from "./components/Starships";



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [ship, setShips] = useState([]);
  

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
       setCharacters(response.data.results);
      console.log(response.data);
    })

  .catch(error => {
    console.log("Uh ohhh! Where's my data??!!", error);
});

}, []);

useEffect(() => {
  axios.get("https://swapi.co/api/starships/")
  .then(response => {
    setShips(response.data.results);
    console.log(response.data);
  })

  .catch(error => {
    console.log("Where are my ships?", error);
  })

}, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <section className="name-info">
      {   
        (characters.map((person, index) => (
          <CharacterList 
          key={index} 
          name={person.name} 
          gender={person.gender}/>
        ))
        )
        }
      </section>

    <section>
      {ship.map((whip, index) => (
        <Starships 
         key={index}

         model={whip.model}
         manufacturer={whip.manufacturer}
        />
    ))}
      </section>
     
     
       
      }

       

        
      
    </div>
  );
}

export default App;

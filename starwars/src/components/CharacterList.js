import React from 'react';
import CharacterCard from './CharacterCard';



const CharacterList = (props) => {


 

   return (
      <div className="App">
        <h1 className="character-list">STARWARS CREW MEMBER</h1>
         <section className="character-list">
           <CharacterCard name={props.name} gender={props.gender} /> 
         </section>
         
           
        
        
        
      </div>
    );
  }
  
  export default CharacterList;
  
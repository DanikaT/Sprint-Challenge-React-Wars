import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    console.log(props);
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
   return (
      <div className="App">
        <h1 className="character-list">LIST BOX</h1>
        {   
          <CharacterCard key={props.index} name={props.name}/>
    
          }
        
      </div>
    );
  }
  
  export default CharacterList;
  
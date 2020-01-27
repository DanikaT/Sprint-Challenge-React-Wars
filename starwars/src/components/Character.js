import React from 'react';

const Character = (props) => {
    console.log(props);
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
   return (
      <div className="Character">
          <h2 className="ships"> Name: {props.name}</h2>
        <h3 className="info"> Gender: {props.gender}</h3>
        
      </div>
    );
   }
  
  export default Character;
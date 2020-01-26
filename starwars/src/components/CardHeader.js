import React from 'react';

const CardHeader = (props) => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
   return (
      <div className="Card-header">
        <h1 className="header"> Holaaaa! Yo soy {props.user}</h1>
        
        { 
          
    
          }
        
      </div>
    );
  }
  
  export default CardHeader
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ;
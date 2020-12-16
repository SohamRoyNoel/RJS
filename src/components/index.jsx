import React, { useState } from 'react';
import ButtonElement from './button';
import GridRect from './rectangle';

function Index() {  
  // Use state to handle button event
  // REC-1: Clicking the “Press” button will change the colour of the red rectangle to green
  const [rectColor, setReactColor] = useState('red');

  return (
    <div>
      <GridRect colorReactParam= {rectColor} />
      <ButtonElement rectRefsToButton= { u=> setReactColor(u) } />
    </div>
  );

}

export default Index;

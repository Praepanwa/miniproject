import React from 'react';

import Home from './Components/Home'

const test=<span> Hello ph </span>
export default class App extends React.Component{
render(){
  return(
  <div>
    
<Home />
<span>
  
    <img src="/images/logo512.png" alt="logo 512"/>
    {test}
</span>

  </div>
  
  )
}
}


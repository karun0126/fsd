import React from 'react'
import ChildComponent from './ChildComponent';
const App = () => {
  const user = [{
    userName:"rohini",
    email:"rohini@gmail.com",
    section:"cse-19"
  },
  {
    userName:"xyz",
    email:"xyz@gmail.com",
    section:"cse-19"
  }]
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{backgroundColor:"black",color:"white"}}>Props</h1>
      <ChildComponent {...user[0]} isStudent={false}/>
      <ChildComponent {...user[1]} section="cse-17" isStudent={true}/>
    </div>
  )
}

export default App
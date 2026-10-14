import React from 'react'

const ChildComponent = (props) => {
    // console.log(userName);  
    console.log(props.userName);
     
  return (
    <div style={{border:"2px solid black"}}>
        <h1>Name: {props.userName}</h1>
        <h2>Email: {props.email}</h2>
        <h2>Section: {props.section}</h2>
        {props.isStudent ? <h2>Student</h2>:<h2>Not a Student</h2>}
    </div>
  )
}

export default ChildComponent
import React, { useState } from 'react'

const ImageRotator = () => {
    const[degree,setDegree] = useState(0);
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "black", color: "white" }}>
                Image Rotator
            </h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERoZHdMmWo4jgNRN6jO8JYfDNOBAOtUREzw99Hh1c3g&s=10"
                alt="img-here"
                style={{ height: "200px", width: "200px" ,
                    transform:`rotate(${degree}deg)`
                }}>
            </img>
            <br></br>
            <button onClick={()=>setDegree(degree-90)}>Left</button>
            <button onClick={()=>setDegree(degree+90)}>Right</button>
        </div>
    )
}

export default ImageRotator
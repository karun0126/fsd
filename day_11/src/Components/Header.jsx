import React from 'react'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav style={{
                display: "flex",
                backgroundColor: "navy",
                color: "white",
                fontSize: "40px",
                justifyContent: "space-evenly"
            }}>
                <div>MyApp</div>
                <div style={{ display: "flex", gap: "25px" }}>
                    <div>Home</div>
                    <div>Product</div>
                    <div>About</div>
                    <div>Cart</div>
                </div>
            </nav>
        </div>
    )
}

export default Header
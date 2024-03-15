import React from "react";
import Button from 'react-bootstrap/Button';



function BasicExample() {
    return (
        <div className="containerHome">
            <div className="row">
                <div className="col">
                    <h1 style={{ color: "antiquewhite" }} >Portfolio De Paolis Luigi</h1>
                    
                    <Button link rel="stylesheet" href="About" variant="About" style={{ color: "antiquewhite" }} >More About Me</Button>
                </div>
            </div>
            
        </div>
    )
        
    
}

export default BasicExample;
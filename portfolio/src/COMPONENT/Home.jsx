import React from "react";
import Button from 'react-bootstrap/Button';
import img from '../immagini/Foto.JPG'



function BasicExample() {
    return (
        <div className="containerHome">
            <div className="row">
                <div className="col-6">
                    <h1 style={{ color: "antiquewhite" }} >Portfolio De Paolis Luigi</h1>
                    
                    <Button link rel="stylesheet" href="About" variant="About" style={{ color: "antiquewhite" }} >More About Me</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img className="FOTOPROFILO"  src={img} alt="" />
                </div>
            </div>
            
        </div>
    )
        
    
}

export default BasicExample;
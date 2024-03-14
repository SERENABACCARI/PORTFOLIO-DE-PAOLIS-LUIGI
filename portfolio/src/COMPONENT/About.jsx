import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../immagini/img.jpg";


function BasicExample() {
    return (
        <Card style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div className="container">
                <div className="row">
                    <div className="col 6">
                        <img className="imgHome" alt="immagine home" src={img} />
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col 6">
                        <Card.Body>
                            <Card.Title>De Paolis Luigi</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </div></div>

            </div>


        </Card>
    );
}

export default BasicExample;
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
    return (
        <Card style={{  }}>
            <div className="row">
                <div className="col 6">
                    <Card.Img  src="portfolio/src/immagini/VR-2248.jpg" />
                    </div>
            </div>
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
                </div>
            </div>
            
        </Card>
    );
}

export default BasicExample;
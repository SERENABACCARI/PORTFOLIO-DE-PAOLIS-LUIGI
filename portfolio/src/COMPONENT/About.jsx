import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../immagini/img.jpg";


function BasicExample() {
    return (
        <Card style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",backgroundColor:"transparent" }}>
            <div className="container" >
                <div className="row">
                    <div className="col 6">
                        <img className="imgHome" alt="immagine home" src={img} />
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col 6">
                        <Card.Body style={{ color: "white" }}>
                            <Card.Title >Benvenuti!!</Card.Title>
                            <Card.Text>
                                Benvenuti nel mio sito portfolio! Sono un esperto nel campo del fitness e del bodybuilding naturale, 
                                con oltre 9 anni di esperienza nel settore. Il mio percorso di formazione e le mie qualifiche includono:
                                <ul>
                                    <li>Diploma di Preparatore Natural Body Building SBB</li>
                                    <li>Diploma Tecnico Fitness - Personal Coach MSP Italia</li>
                                    <li>Diploma in Pesistica e Cultura Fisica, specializzazione Preparatore Natural Body Building</li>
                                    <li>Attestato di Qualifica Tecnica di Promotore Sportivo della Disciplina Sportiva Fitness (Personal Trainer), riconosciuto da CONI, CIP, Ministero degli Interni, FAC e Servizio Nazionale</li>
                                    <li>Master in Salute e Nutrizione</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </div></div>

            </div>


        </Card>
    );
}

export default BasicExample;
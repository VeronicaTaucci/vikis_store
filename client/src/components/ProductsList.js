import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
const ProductsList = () => {
  return (
    
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mobila</Accordion.Header>
            <Accordion.Body>
             <ListGroup>
            <ListGroup.Item>Canapele</ListGroup.Item>
            <ListGroup.Item>fotolii</ListGroup.Item>
            <ListGroup.Item>mese</ListGroup.Item>
            <ListGroup.Item>scaune</ListGroup.Item>
            <ListGroup.Item>dulapuri</ListGroup.Item>
            <ListGroup.Item>biblioteci</ListGroup.Item>
            <ListGroup.Item>comode</ListGroup.Item>
            <ListGroup.Item>corpuri de iluminat</ListGroup.Item>
       
            </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Draperii</Accordion.Header>
            <Accordion.Body>
             <ListGroup>
            <ListGroup.Item>Perdele pentru ferestre</ListGroup.Item>
            <ListGroup.Item>perdele de duș</ListGroup.Item>
            <ListGroup.Item>draperii pentru uși</ListGroup.Item>
            </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Mobila Tare</Accordion.Header>
            <Accordion.Body>
             <ListGroup>
            <ListGroup.Item>Canapele</ListGroup.Item>
            <ListGroup.Item>fotolii</ListGroup.Item>
            <ListGroup.Item>mese</ListGroup.Item>
            <ListGroup.Item>scaune</ListGroup.Item>
            <ListGroup.Item>dulapuri</ListGroup.Item>
            <ListGroup.Item>biblioteci</ListGroup.Item>
            <ListGroup.Item>comode</ListGroup.Item>
            <ListGroup.Item>corpuri de iluminat</ListGroup.Item>
            </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Electrocasnice</Accordion.Header>
            <Accordion.Body>
             <ListGroup>
            <ListGroup.Item>Mașini de spălat rufe</ListGroup.Item>
            <ListGroup.Item>uscătoare de rufe</ListGroup.Item>
            <ListGroup.Item>mașini de spălat vase</ListGroup.Item>
            <ListGroup.Item>frigidere</ListGroup.Item>
            <ListGroup.Item>congelatoare</ListGroup.Item>
            <ListGroup.Item>cuptoare</ListGroup.Item>
            <ListGroup.Item>aragazuri</ListGroup.Item>
            <ListGroup.Item>mixere</ListGroup.Item>
            </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default ProductsList
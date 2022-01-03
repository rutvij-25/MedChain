import React from "react";
import Card from 'react-bootstrap/Card';

function PatientCard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.patientname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.gender == "M"?"Male":"Female"},{props.age}
          </Card.Subtitle>
          <Card.Text>
           {props.desc}
          </Card.Text>
          <Card.Link to={props.reportaddr}>{props.reportname}</Card.Link>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default PatientCard;

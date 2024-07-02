import React from "react";
import Card from 'react-bootstrap/Card';

const DistributorCard = ({ distributor }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{distributor.name}</Card.Title>
        <Card.Text>
          Quantity Shipped Last Month: {distributor.shippedLastMonth}
        </Card.Text>
        <Card.Text>
          Forecast for Next Month: {distributor.forecastNextMonth}
        </Card.Text>
        <Card.Text>
          Year-to-Date Average: {distributor.yearToDateAvg}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DistributorCard;

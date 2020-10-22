import React from "react";
import Card from 'react-bootstrap/Card';
import "./List.css";
const List = (props) => (
  <div className="displayListBox">
    <h1>Grocery List Items</h1>
    <ul className="unorderGrocery-list">
      {props.items.map((item, index) => (
        <Card key={index}>
          <Card.Body key={index}>
            <a className="remove">x</a>
            <Card.Title>Item Name: <span>{item}</span></Card.Title>
          </Card.Body>
        </Card>        
      ))}
    </ul>    
  </div>
);

export default List;

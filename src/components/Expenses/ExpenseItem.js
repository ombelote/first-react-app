import React from "react";
// import { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from "react";

function ExpenseItem(props) {

  const [title, settitle]= useState(props.title);

  const clickEventHandler = ()=>{
    settitle('updated!!!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date= {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <Card>
      <button onClick={clickEventHandler}>click me!</button>
      </Card>
    </Card>
  );
}

export default ExpenseItem;

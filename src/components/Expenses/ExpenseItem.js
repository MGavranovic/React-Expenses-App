import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = props => {
  // use oznacava HOOK u React-u i uvijek se moraju pisati unutar komponent funkcije
  // useState uvijek vrati array sa 2 elementa gdje prvi
  // [0] trenutna vrijednost state-a > title
  // [1] funkcija za update-ovanje state-a > setTitle
  // svaki component ima svoj state

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

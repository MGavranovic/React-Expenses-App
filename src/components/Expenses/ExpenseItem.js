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
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

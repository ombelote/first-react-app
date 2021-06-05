import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState(0)
    const [enteredDate, setDate] = useState('')

    const titleChangeHandler=(event)=>{

        setTitle(event.target.value);
        // console.log(enteredTitle);
    }

    const amountChangeHandler=(event)=>{

        setAmount(event.target.value);
        // console.log(enteredAmount);
    }

    const dateChangeHandler=(event)=>{

        setDate(event.target.value);
        // console.log(enteredDate);
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const expenseData= {
            title: enteredTitle,
            amount:enteredAmount,
            date: enteredDate
        }
        console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

  return (
    <form onSubmit= {formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value ={enteredTitle} onChange= {titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value ={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value ={enteredDate} onChange={dateChangeHandler}/>
        </div>
        <div className="new_expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

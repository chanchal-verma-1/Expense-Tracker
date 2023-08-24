import './Expense.css';
import Expensedate from './Expensedate';
import Card from '../UI/Card';
import React from 'react';
function Expense(props){

   
    return(
       <Card className='expense-item'>
        <Expensedate date={new Date(props.date)}/>
         <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
         </div>
       
       </Card>


    );

}
export default Expense;
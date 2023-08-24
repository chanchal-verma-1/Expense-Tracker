import './Combinedexpenses.css';
import Expense from './Expense';
import Card from '../UI/Card';
import React from 'react';



 function Combinedexpenses(props) {
  return (
    <Card className='expenses'>
      {
        props.item.map(
          expense => (
            <Expense
             key={expense.id}
             date={expense.date} 
            title={expense.title} 
            amount={expense.amount}/>
          )
        )
        
      }
   

    </Card>
  );
}
export default Combinedexpenses;
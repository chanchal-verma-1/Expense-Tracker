import React,{useState } from 'react';
import Combinedexpenses from './component/Expenses/Combinedexpenses';
import NewExpense from './component/NewExpense/NewExpense';
 
let DUMMY_EXPENSE = [
 
];
function App() {
  const[expenses,setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense,...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Combinedexpenses item={expenses}/>
    </div>
  );
}

export default App;

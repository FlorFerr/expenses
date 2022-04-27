import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState('2021')

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter(expense => expense.date.getFullYear().toString() === filteredYear)


  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter = {filterHandler} />

      {filteredExpenses.length > 0 ?

    filteredExpenses.map(i =><ExpenseItem key={i.id}title={i.title} amount={i.amount} date={i.date}/>) 
    : <h2 className='expenses-fallback'>No hay gastos en el año {filteredYear}</h2>
    
      }
    </Card>
   
  )
}

export default Expenses
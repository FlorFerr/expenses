import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {

    const [formVisible, setFormVisible] = useState(false)

    const formHandler = () =>{
      setFormVisible(true)
    }

    const cancelHandler = () => {
      setFormVisible(false)
    }

    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }


  return (
    <div className='new-expense'>

      {
        formVisible ? <ExpenseForm onSave={saveHandler} onCancel={cancelHandler}/> :
        <button onClick={formHandler}>Agregar nuevo gasto</button>
      }
      

        
    </div>
  )
}

export default NewExpense
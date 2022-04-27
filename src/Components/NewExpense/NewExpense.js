import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //console.log(expenseData)
        props.onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSave={saveHandler}/>
    </div>
  )
}

export default NewExpense
import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)}

  const amountChangeHandler = (e) => {
      setEnteredAmount(e.target.value)}

  const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)}
  
  const submitHandler = (e) =>{
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSave(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

    props.onCancel()
  }

  const cancelForm = () => {
    props.onCancel()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Titulo</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Gasto</label>
          <input type="text" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Fecha</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
    </div>
    <div className='new-expense__actions'>
      <button onClick={cancelForm}>Cancelar</button>
      <button type='submit'>Agregar</button>

    </div>
    </form>
  )
}

export default ExpenseForm
import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {

    const chartDataPoints = [
        {label: 'ene', value: 0},
        {label: 'feb', value: 0},
        {label: 'mar', value: 0},
        {label: 'abr', value: 0},
        {label: 'may', value: 0},
        {label: 'jun', value: 0},
        {label: 'jul', value: 0},
        {label: 'ago', value: 0},
        {label: 'sep', value: 0},
        {label: 'oct', value: 0},
        {label: 'nov', value: 0},
        {label: 'dic', value: 0},
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth()
        const prueba = chartDataPoints[expenseMonth].value += expense.amount
        console.log(prueba)
       
    }

  return (
    <Chart />
  )
}

export default ExpensesChart
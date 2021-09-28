import React, { useState } from 'react';

// components
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

// css
import './Expenses.css';
const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // 針對日期來塞選
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filterYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

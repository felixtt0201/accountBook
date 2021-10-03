import React, { useState } from 'react';

// components
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

// css
import './Expenses.css';
const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState('2021');

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

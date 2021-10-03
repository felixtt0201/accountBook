import React, { useState } from 'react';

// components
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const INITIAL_EXPENSES = [
  {
    id: 'el1',
    title: 'lesson1',
    amount: 300,
    date: new Date(2020, 9, 1),
  },
  {
    id: 'el2',
    title: 'lesson2',
    amount: 700,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'el3',
    title: 'lesson3',
    amount: 500,
    date: new Date(2019, 1, 21),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // 以前用 react 的寫法 和下面用JSX的寫法，結果是一樣的，但JSX的可讀性更高·
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { item: expenses }),
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

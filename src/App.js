// components
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'lesson1',
      amount: 300,
      date: new Date(2021, 9, 1),
    },
    {
      id: 'el2',
      title: 'lesson2',
      amount: 700,
      date: new Date(2021, 9, 12),
    },
    {
      id: 'el3',
      title: 'lesson3',
      amount: 500,
      date: new Date(2021, 9, 21),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;

// React
import React from 'react';

// component
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// css
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // 和react說 哪個變數是需要被重新給值的
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('updated');
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;

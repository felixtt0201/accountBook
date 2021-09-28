// css
import './Card.css';
const Card = (props) => {
  // 要將這個元件的樣式和子元件的樣式一起吃 要用這樣的寫法
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

import './RenderExpenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const RenderExpenses = props => {
  return (
    <Card className="expenses">
      {props.items.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default RenderExpenses;

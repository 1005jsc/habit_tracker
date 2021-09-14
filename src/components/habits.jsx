import React, { PureComponent } from 'react';
import Habit from './habit';
import Input from './input';

class Habits extends PureComponent {

  handleIncrement= (habit) => {
    this.props.onIncrement(habit)
  }
  
  handleDecrement= (habit) => {
    this.props.onDecrement(habit)
  }
  
  handleDelete= (habit) => {
    this.props.onDelete(habit)
  }
  

  handleOnAdd = (habit) => {
    this.props.onAdd(habit);
  }

  handleReset = () => {
    this.props.onReset()
  }


  render() {
    console.log('habits')
    return <>
    <Input onAdd={this.handleOnAdd}/>
    {this.props.habits.map((habit)=> (
      //  해결방법 1 : 변화하는 값을 따로 빼서 리엑트에게 보여준다 
      <Habit
      key={habit.id}
      // 이렇게 따로 빼서 리엑트한테 habit의 count가 바뀌었다고 확인하라고 보여준다 
      // count={habit.count}
      habit={habit}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      />
      
    ))}
    <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
    </>
  }
}

export default Habits;
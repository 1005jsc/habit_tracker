import React, { PureComponent } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

import './app.css';



class App extends PureComponent {

  // 새로운 컴포넌트가 만들어지고(add누르는거같은거 )
  // 브라우저위에 표기가 될때 
  // 새로운 데이터를 네트워크 통신을 통해서 받아오거나 
  // 타이머를 시작하게 하는일은 어떻게 할까?
  
  // 그것을 가능하게 하는것이 lifecycle함수이다 

  // class를 이용하게되면 lifecycle함수를 이용할 수 있게 돤다 
  // 이런것들: 
  // componentDidCatch
  // componentDidMount
  // componentWillUnmount
  // componentDidUpdate
  // componentWillMount


  state = {
    habits : [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ],
  }
  
  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...item, count: item.count + 1}
      }
      return item

    })
    

    this.setState({habits:habits})
  }
  
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = item.count -1;

        return {...item, count: count < 0? 0: count}
      }
      return item

    })
    this.setState({habits:habits})

    
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => {
      if(item.id === habit.id ){
        return ;
      }
      return item;
    })



    this.setState({habits:habits})
  }


  handleOnAdd = (inputValue) => {
    const newHabits = [...this.state.habits, {id:Date.now(), name: inputValue, count:0}]
    this.setState({habits:newHabits})
  }
  
  handleReset = () => {
    const newHabits = this.state.habits.map((habit)=> 
    {
      if(habit.count !== 0){
        return {...habit, count: 0};
      }
      return habit
    }
    )
    this.setState({habits:newHabits})
  }




  render() {
    console.log('app')
    return <>
    <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
    <Habits
    habits={this.state.habits}
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}
    onAdd={this.handleOnAdd}
    onReset={this.handleReset}
    />
    </>
  }
}


export default App;





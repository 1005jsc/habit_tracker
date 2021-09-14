import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  
  // purecomponent는 state를 shallowcomparison를 해서 변했으면 리렌더링을 하고 안변했으면 가만히 놔둔다 
  
  // 그런데 말 그대로 shallowComparison라서 props가 변하는게 표면적으로 보여지지 않으면 안변했다고 판단해버린다 
  // 안에있는 데이터를 수정하기만 하면 rerender가 안되버린다 

// 그래서 앞에 this.state.habits를 직접 바꿔서 함수를 만드는 방법을 피하라고 했는데 
// 직접 바꿔 버리면 purecomponent를 사용할 경우 react는 state에 변화가 없다고 판단해버리기때문에
// rerender가 안돼버리는 문제가 있을것이다고 한것이다 

  // 아래의 this.props.habit같은 
  // 어떻게 해결해야 될까?
  handleIncrement= () => {
    this.props.onIncrement(this.props.habit)
  }
  
  handleDecrement= () => {
    this.props.onDecrement(this.props.habit)
  }
  
  handleDelete= () => {
    this.props.onDelete(this.props.habit)
  }
  
  
  
  render() {
    const {name, count} = this.props.habit
    // const {name} = this.props.habit
    // const {count} = this.props
    console.log(`habit: ${name}`)
    return <li className="habit">    
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
      
    </li>
  }
}

export default Habit;
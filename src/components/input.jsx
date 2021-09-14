import React, { PureComponent } from 'react';





class Input extends PureComponent {
  inputRef = React.createRef(); 
  handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = this.inputRef.current.value;
    
    inputValue && this.props.onAdd(inputValue)
    this.inputRef.current.value=''
  }
  



  render() {
    console.log('input')
    
    return <> 
    
    <form className="add-form" onSubmit={this.handleSubmit}>
        <input ref={this.inputRef}  type="text" className="add-input" placeholder="Habit"/>
        <button className="add-button">Add</button>
    </form>
    
    </>
  }
}

export default Input;
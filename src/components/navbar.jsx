import React, { PureComponent } from 'react';

class Navbar extends PureComponent {



  render() {
    console.log('Nabvar')
    return <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      {// props값을 navbar의 render에서 바로 수정해주는 경우
      
      }
      {/* <span className="navbar-count">{
      this.props.habits.filter((habit) => 
      habit.count > 0).length}</span> */}
      <span className="navbar-count">{this.props.totalCount}</span>
    </nav>
  }
}

export default Navbar;
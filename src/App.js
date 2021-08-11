import React from 'react';
import {incrementActionGenerator, decrementActionGenerator} from './actions/counterActions'
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return <>
      count : {this.props.counter?.count}
      <button onClick={() => this.props.dispatch(decrementActionGenerator())}>-</button>
      <button onClick={() => this.props.dispatch(incrementActionGenerator())}>+</button>
    </>
  }
}

export default connect((state, ownProps) => {
  return {
    counter: state.counter
  }
})(App);

import React from 'react';
import store from './store'
import {incrementActionGenerator, decrementActionGenerator} from './actions/counterActions'
import {saveDetailsActionGenerator} from './actions/profileActions'

class App extends React.Component {
  componentDidMount(){
    
    // can see when anything changes in store
    store.subscribe(() => {
      console.log(store.getState())
    })

    // dispatch actions
    // we can pass an action obj or an action generator method
    store.dispatch(incrementActionGenerator({
      incrementBy: 6
    }))

    store.dispatch(decrementActionGenerator({
      decrementBy: 2
    }))

    store.dispatch(saveDetailsActionGenerator({
      name: 'Tarun',
      email: 'email@abc.com',
      mobile: '7485968574'
    }))
  }

  render(){
    return <>
      Hey
    </>
  }
}

export default App;

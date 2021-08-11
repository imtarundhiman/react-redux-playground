const counterReducer = (state = {count: 0}, action) => {

    switch(action.type){
      case 'INCREMENT': {
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
        
        return {
          count: state.count + incrementBy
        }
      }

      case 'DECREMENT': {
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
        
        return {
          count: state.count - decrementBy
        }
      }

      default: 
        return state
    }
}

export default counterReducer
const profileReducerInitState = {
    name: '',
    email: '',
    mobile: ''
}

const profileReducer = (state = profileReducerInitState, action) => {
    switch(action.type){
      case 'SAVE_PROFILE_DETAILS': {
        return {
          ...state, 
          name: action.name,
          email: action.email,
          mobile: action.mobile,
        }
      }
      default: 
        return state
    }    
}

export default profileReducer
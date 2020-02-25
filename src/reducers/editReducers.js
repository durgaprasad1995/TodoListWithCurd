const editReducers = (state = {result:""}, action)  => {
    switch (action.type) {
     case 'EDIT_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }

export default editReducers;
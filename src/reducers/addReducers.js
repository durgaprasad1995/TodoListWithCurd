const addReducers = (state = {result:""}, action)  => {
    switch (action.type) {
     case 'ADD_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }

export default addReducers;
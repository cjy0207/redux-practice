import store from "../store";

let initialState={
    count : 0
}

function reducer(state=initialState, action){
    switch (action.type) {
        case "INCREMENT":
          return { ...state, count: state.count + action.payload.num };
        case "DECREMENT" : 
            return {...state, count : state.count - 1}
          default:
          return state;
      }
    }

export default reducer;
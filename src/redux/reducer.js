const initialState = {
  count: 0,
  users: []
};

export default function reducer(state = initialState, actions) {
  if (actions.type === "INCREMENT") {
    return {...state, count: state.count + 1 };
  } else if (actions.type === "DECREMENT" ) {
    return {...state, count: state.count - 1 };
  } else if (actions.type === "VALUE"){
    return{users: [...state.users, actions.payload]}
  }
  return state;
}

// Takes the current state and an action as an argument
const reducer = (state = 0, action) => {
  // Checking the type property of the incoming action
  switch (action.type) {
    case "deposit":
      // Returns a new state based on the action
      // Does not mutate the original state
      return state + action.payload;
    case "withdraw":
      // Returns a new state based on the action
      // Does not mutate the original state
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;

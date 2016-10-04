const newsReducer = (state={}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {...state, loading: action.loading}
    case "RECEIVE_NEWS":
      return {...state, loading: action.loading, done: action.done, news: action.news}
    default:
      return state;
  }
}

export default newsReducer;

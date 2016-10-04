const sessionsReducer = (state={
  loading: false,
  done: false,
  sessions: [],
  edit: false
}, action) => {
  switch (action.type) {
    case 'GET_SESSIONS':
      return {...state, loading: action.loading};
    case 'RECEIVE_SESSIONS':
      return {...state, loading: action.loading, sessions: action.sessions, done: action.done}
    case 'GET_SESSION':
      return {...state, loading: action.loading};
    case 'RECEIVE_SESSION':
      return {...state, loading: action.loading, session: action.session, done: action.done}
    case 'EDIT_SESSION':
      return {...state, edit: !state.edit}
    default:
      return state;
  }
}

export default sessionsReducer;

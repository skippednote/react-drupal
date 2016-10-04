import { browserHistory } from 'react-router';

// Sync
const getSessions = () => ({
  type: 'GET_SESSIONS',
  loading: true,
  done: false
});

const receiveSessions = (sessions)  => ({
  type: 'RECEIVE_SESSIONS',
  loading: false,
  done: true,
  sessions: sessions
});

const getSession = () => ({
  type: 'GET_SESSION',
  loading: true,
  done: false
});

export const receiveSession = (session)  => ({
  type: 'RECEIVE_SESSION',
  loading: false,
  done: true,
  session: session
});

export const addingSession = () => ({
  type: 'ADD_SESSION',
  done: false
});

export const addedSession = () => ({
  type: 'ADDED_SESSION',
  done: true
});

export const updatingSession = () => ({
  type: 'UPDATE_SESSION',
  done: false
});

export const updatedSession = (session) => ({
  type: 'UPDATED_SESSION',
  done: true,
  session: session
});

export const toggleEditing = () => ({
  type: 'EDIT_SESSION'
});


// Async
export const fetchSessions = () => {
  return dispatch => {
    dispatch(getSessions());
    return fetch('http://app.dd/api/node/session?_format=api_json')
      .then(res => res.json())
      .then(sessions => {
        dispatch(receiveSessions(sessions))
      })
  }
}

export const fetchSession = (id) => {
  return dispatch => {
    dispatch(getSession())
    return fetch(`http://app.dd/api/node/session/${id}?_format=api_json`)
      .then(res => res.json())
      .then(session => dispatch(receiveSession(session.data)));
  }
}

export const deleteSession = (id) => {
  return dispatch => {
    return fetch(`http://app.dd/api/node/session/${id}?_format=api_json`, {
      method: 'delete',
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4=',
        "Content-Type": "application/vnd.api+json"
      }
    })
    .then(() => {
      browserHistory.push('/sessions')
    })
  }
}

export const addSession = (session) => {
  var post = {
    data: {
      type: 'session',
      attributes: session
    }
  }
  return dispatch => {
    dispatch(addingSession())
    return fetch(`http://app.dd/api/node/session?_format=api_json`, {
      method: 'post',
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4=',
        "Content-Type": 'application/vnd.api+json'
      },
      body: JSON.stringify(post)
    })
    .then(res => {
      browserHistory.push('/sessions')
    })
  }
}

export const patchSession = (session, id, nid) => {
  var post = {
    data: {
      id: parseInt(nid, 10),
      attributes: session
    }
  };

  return dispatch => {
    dispatch(updatingSession());
    return fetch(`http://app.dd/api/node/session/${id}?_format=api_json`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4=',
        "Content-Type": 'application/vnd.api+json'
      },
      body: JSON.stringify(post)
    })
    .then(session => {
      dispatch(updatedSession(session))
      browserHistory.push(`/sessions`)
      dispatch(toggleEditing(session))
    })
    .catch(err => console.log(err));
  }
}

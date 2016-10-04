import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSessions } from '../../actions/sessions';
import SessionItem from '../SessionItem';

class SessionList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSessions());
  }

  render() {
    let sessions;
    if(this.props.done === true && this.props.sessions.data && this.props.sessions.data.length > 0) {
      sessions = this.props.sessions.data.map(session => {
        return (
          <SessionItem
            key={session.id}
            id={session.id}
            title={session.attributes.title}
            speaker={session.attributes.field_speakers.value}
            experience={session.attributes.field_experience}
            description={session.attributes.field_description.value}
            about={session.attributes.field_abou.value}
          />
        )
      });
    }

    return (
      <div className="session-box">
        <div className="meta">
          <h1 className="session-title">Sessions</h1>
          <Link to='/sessions/new' className="btn-new">Add New Session</Link>
        </div>
        <div className="session-list">
          {sessions}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.sessions;

export default connect(mapStateToProps)(SessionList);

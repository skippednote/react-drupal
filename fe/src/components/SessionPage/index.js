import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSession, receiveSession,
         deleteSession, toggleEditing,
         patchSession }
         from '../../actions/sessions';

class SessionPage extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    const { sessions, dispatch, routeParams } = this.props;

    if(sessions.length > 0) {
      let session = sessions.filter(session => {
        return session.id === routeParams.id
      });
      dispatch(receiveSession(session[0]));
    } else {
      dispatch(fetchSession(routeParams.id));
    }
  }

  delete(e) {
    e.preventDefault();
    let id = this.props.routeParams.id
    this.props.dispatch(deleteSession(id));
  }

  edit() {
    this.props.dispatch(toggleEditing());
  }

  cancel(e) {
    e.preventDefault();
    this.props.dispatch(toggleEditing());
  }

  update(e) {
    e.preventDefault();
    var session = {
      title: this.refs.title.value,
      field_speakers: this.refs.speaker.value,
      field_experience: this.refs.experience.value,
      field_description: this.refs.description.value,
      field_abou: this.refs.about.value
    }
    let id = this.props.params.id;
    let nid = this.props.session.attributes.nid;
    this.props.dispatch(patchSession(session, id, nid));
  }

  render() {
    const { done, session, edit } = this.props;

    let content = "LOADING";
    let form;
    if(done && session) {
      if(edit)  {
        content = (
          <div className="session-form">
            <h3 className="session-form-heading">Update Session</h3>
            <form onSubmit={this.update}>
              <input ref="title" type="text" placeholder="Title" defaultValue={session.attributes.title} required />
              <input ref="speaker" type="text" placeholder="Speaker" defaultValue={session.attributes.field_speakers.value} required  />
              <input ref="experience" type="text" placeholder="Experience" defaultValue={session.attributes.field_experience} required  />
              <textarea ref="description" placeholder="Description" defaultValue={session.attributes.field_description.value} required ></textarea>
              <textarea ref="about" placeholder="About Speaker" defaultValue={session.attributes.field_abou.value} required ></textarea>
              <button type="submit" className="btn-new">Update</button>
              <button onClick={this.cancel} className="btn-danger">Cancel</button>
            </form>
          </div>
        )
      }
      else {
        content = (
            <div onDoubleClick={this.edit}>
            <h1 className="session-title">{session.attributes.title}</h1>
            <div className="session-meta">
              <span className="session-speaker">
                {session.attributes.field_speakers.value}
              </span>
              <span className="session-separator">&bull;</span>
              <span className="session-experience">
                {session.attributes.field_experience}
              </span>
            </div>

            <div
              className="session-description"
              dangerouslySetInnerHTML={{__html: session.attributes.field_description.value}}
            />


            <div className="session-actions">
              <button
                onClick={this.edit}
                className="btn-info"
              >
                Edit
              </button>

              <button
                onClick={this.delete}
                className="btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
      )
    }
  }

    return (
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => state.sessions

export default connect(mapStateToProps)(SessionPage);

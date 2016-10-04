import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addSession}  from '../../actions/sessions';

class NewSession extends Component {
  constructor(props)  {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    var session = {
      title: this.refs.title.value,
      field_speakers: this.refs.speaker.value,
      field_experience: this.refs.experience.value,
      field_description: this.refs.description.value,
      field_about_speaker: this.refs.about.value
    }
    this.props.dispatch(addSession(session))
  }

  render() {
    return (
      <div className="session-form">
        <h3 className="session-form-heading">New Session</h3>
        <form onSubmit={this.submit}>
          <input ref="title" type="text" placeholder="Title" required />
          <input ref="speaker" type="text" placeholder="Speaker" required  />
          <input ref="experience" type="text" placeholder="Experience" required  />
          <textarea ref="description" placeholder="Description" required ></textarea>
          <textarea ref="about" placeholder="About Speaker" required ></textarea>
          <button type="submit" className="btn-new">Post</button
        </form>
      </div>
    )
  }
}

export default connect(state => state)(NewSession);

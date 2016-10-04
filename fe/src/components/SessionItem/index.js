import React from 'react';
import { Link } from 'react-router';

const SessionItem = ({title, speaker, experience, id}) => {
  return (
    <li className="session-item">
      <Link to={`sessions/${id}`} className="sessions-link">
        <h3 className="sessions-title">{title}</h3>
        <span className="sessions-experience">{experience}</span>
        <span className="sessions-speaker">{speaker}</span>
      </Link>
    </li>
  )
}

export default SessionItem;

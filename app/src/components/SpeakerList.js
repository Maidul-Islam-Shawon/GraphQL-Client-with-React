import React from "react";
import { Link } from "react-router-dom";

const SpeakerList = ({ speakers }) => {
  const { id, name, bio, sessions } = speakers;

  return (
    <div className="col col-md-4">
      <div className="card border-info mb-3">
        <div className="card-header bg-info border-info">
          <Link to={`/speaker/${id}`} className="speakerName">
            <h4>{"Speaker: " + name}</h4>
          </Link>
        </div>
        <div className="card-body text-dark">
          <p className="card-text">{"Bio: " + bio}</p>
        </div>
        <div className="card-footer bg-transparent border-info">
          <div className="text text-danger">
            Sessions List:
            <ul>
              {sessions.map((session) => (
                <li key={session.id}>{session.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerList;

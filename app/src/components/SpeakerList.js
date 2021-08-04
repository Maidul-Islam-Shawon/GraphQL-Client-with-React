import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";

//To update cache after mutation need to return back id and mutated field
const FEATURED_SPEAKER = gql`
  mutation markFeatured($speakerId: ID!, $featured: Boolean!) {
    markFeatured(speakerId: $speakerId, featured: $featured) {
      id
      featured
    }
  }
`;

const SpeakerList = ({ speakers }) => {
  const { id, name, bio, sessions, featured } = speakers;

  const [markFeatured] = useMutation(FEATURED_SPEAKER);

  const handleSubmit = (e) => {
    e.preventDefault();
    markFeatured({
      variables: {
        speakerId: id,
        featured: true,
      },
    });
  };

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
        <div className="card-footer bg-transparent border-info">
          <div className="text text-danger">
            <button
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: featured ? "violet" : undefined }}
              onClick={handleSubmit}
            >
              Featured Speaker
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerList;

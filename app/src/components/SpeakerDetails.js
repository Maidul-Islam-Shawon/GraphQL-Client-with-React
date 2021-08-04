import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SPEAKER_BY_ID } from "../queries/Queries";

// const SPEAKER_BY_ID = gql`
//   query SpeakerById($id: ID!) {
//     speakerById(id: $id) {
//       id
//       bio
//       name
//       sessions {
//         id
//         title
//       }
//     }
//   }
// `;

const SpeakerDetails = () => {
  const { speaker_id } = useParams();

  const { data, loading, error } = useQuery(SPEAKER_BY_ID, {
    variables: { id: speaker_id },
  });

  if (loading) return <div>Sessions are loading...</div>;
  if (error) return <div>Speakers could not load, some error occured!...</div>;

  const speaker = data.speakerById;
  const { id, name, bio, sessions } = speaker;

  return (
    <div className="container">
      <div className="col col-md-10" key={id} style={{ marginTop: "4.5rem" }}>
        <div className="card border-info mb-3">
          <div className="card-header bg-info border-info">
            <h4>{"Speaker: " + name}</h4>
          </div>
          <div className="card-body text-dark">
            <p className="card-text">{"Bio: " + bio}</p>
          </div>
          <div className="card-footer bg-transparent border-info">
            <div className="text text-danger">
              Sessions List:
              {
                <ul>
                  {sessions.map((session) => (
                    <li key={session.id}>{session.title}</li>
                  ))}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;

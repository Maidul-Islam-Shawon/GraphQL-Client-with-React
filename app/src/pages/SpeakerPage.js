import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import SpeakerList from "../components/SpeakerList";
import { ALL_SPEAKERS } from "../queries/Queries";

// const ALL_SPEAKERS = gql`
//   query AllSpeakers {
//     speakers {
//       id
//       name
//       bio
//       sessions {
//         id
//         title
//       }
//     }
//   }
// `;

const SpeakerPage = () => {
  const { data, loading, error } = useQuery(ALL_SPEAKERS);

  console.log(data);

  function loadSpeakerData() {
    if (loading) return <div>Speakres are loading...</div>;
    if (error)
      return <div>Speakers could not load, some error occured!...</div>;

    return data.speakers.map((speaker) => (
      <SpeakerList key={speaker.id} speakers={speaker} />
    ));
  }

  return (
    <div className="container">
      <h2>Session Speakers</h2>
      <div className="row">{loadSpeakerData()}</div>
    </div>
  );
};

export default SpeakerPage;

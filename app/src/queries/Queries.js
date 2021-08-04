import { gql } from "@apollo/client";

//................. Speaker Queries...............//
//Fragment for ALL_SPEAKERS and SPEAKER_BY_ID
const SPEAKER_ATTRIBUTES = gql`
  fragment SpeakerInfo on Speaker {
    id
    bio
    name
    sessions {
      id
      title
    }
  }
`;

//.....query to get all speakers.....//
export const ALL_SPEAKERS = gql`
  query AllSpeakers {
    speakers {
      ...SpeakerInfo
    }
  }
  ${SPEAKER_ATTRIBUTES}
`;

/*
    ...SpeakerInfo - is the name of the fragment
    ${SPEAKER_ATTRIBUTES} - defines where the fragment came from
*/

//.....query to get a speaker by Id.....//
export const SPEAKER_BY_ID = gql`
  query SpeakerById($id: ID!) {
    speakerById(id: $id) {
      ...SpeakerInfo
    }
  }
  ${SPEAKER_ATTRIBUTES}
`;

//................. Session Queries...............//

//Fragment for Session
/*
  Drectives added with @include(if:"")
  this directieve can be use for the purpose of include/exclude 
  or skip or mark deprecated any fields
*/
const SessionInfo = gql`
  fragment SessionInfo on Session {
    id
    title
    day
    room
    level
    startsAt
    description @include(if: $isDescription)
    speakers {
      id
      name
    }
  }
`;

// get all sessions //
export const ALL_SESSIONS = gql`
  query SESSION {
    sessions {
      id
      title
      day
      room
      level
    }
  }
`;

//...define Session query with argument...//
// Introduction,Intermediate and Advanced are Aliases //
export const SESSIONS_BY_DAY = gql`
  query SessionsByDay($day: String!, $isDescription: Boolean!) {
    Introduction: sessions(day: $day, level: "Introductory and overview") {
      ...SessionInfo
    }
    Intermediate: sessions(day: $day, level: "Intermediate") {
      ...SessionInfo
    }
    Advanced: sessions(day: $day, level: "Advanced") {
      ...SessionInfo
    }
  }
  ${SessionInfo}
`;

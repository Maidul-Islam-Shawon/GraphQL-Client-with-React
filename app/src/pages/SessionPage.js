import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import SessionList from "../components/SessionList";
import { SESSIONS_BY_DAY } from "../queries/Queries";
import { Link } from "react-router-dom";

// const ALL_SESSIONS = gql`
//   query SESSION {
//     sessions {
//       id
//       title
//       day
//       room
//       level
//       speakers {
//         id
//         name
//       }
//     }
//   }
// `;

//...define Session query with argument...//
// const SESSIONS_BY_DAY = gql`
//   query SessionsByDay($day: String) {
//     sessions(day: $day) {
//       id
//       title
//       day
//       room
//       level
//       speakers {
//         id
//         name
//       }
//     }
//   }
// `;

const SessionPage = () => {
  const [day, setDay] = useState("");
  //console.log(day);
  if (day === "") {
    setDay("Wednesday");
  }

  let isDescription = false;

  //const { data, loading, error } = useQuery(ALL_SESSIONS);

  const { data, loading, error } = useQuery(SESSIONS_BY_DAY, {
    variables: { day, isDescription },
  });

  //console.log("data:", data);

  function loadSessionData() {
    if (loading) return <div>Sessions are loading...</div>;
    if (error)
      return <div>Sessions could not load, some error occured!...</div>;
    else
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Day</th>
              <th>Number</th>
              <th>Level</th>
              <th>Start</th>
              <th>Description</th>
              <th>Speakers</th>
            </tr>
          </thead>
          {data.Introduction.map((session) => (
            <SessionList key={session.id} session={{ ...session }} />
          ))}
          {data.Intermediate.map((session) => (
            <SessionList key={session.id} session={{ ...session }} />
          ))}
          {data.Advanced.map((session) => (
            <SessionList key={session.id} session={{ ...session }} />
          ))}
        </table>
      );
  }

  return (
    <div className="container">
      <h2>All Sesssion</h2>
      <Link type="button" className="btn btn-primary" to="/sessions/addsession">
        Create
      </Link>
      <div className="dayButtons">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => setDay("Wednesday")}
        >
          Wednesday
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setDay("Thursday")}
        >
          Thursday
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setDay("Friday")}
        >
          Friday
        </button>
      </div>

      {loadSessionData()}
    </div>
  );
};

export default SessionPage;

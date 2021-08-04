import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SessionList = ({ session }) => {
  const { id, title, day, room, level, startsAt, description, speakers } =
    session;

  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (description !== undefined) {
      // data = ;
      setDesc(description.slice(0, 50));
    }
  }, [description]);

  //console.log(session);
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{day}</td>
        <td>{room}</td>
        <td>{level}</td>
        <td>{startsAt}</td>
        <td>{description && { desc }}</td>
        <td>
          {speakers.map(({ id, name }) => (
            <Link to={`/speaker/${id}`} key={id}>
              <div>{name}</div>
            </Link>
          ))}
        </td>
      </tr>
    </tbody>
  );
};

export default SessionList;

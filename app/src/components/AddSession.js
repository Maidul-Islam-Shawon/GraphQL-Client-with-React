import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

//mutation to create a new session
const CREATE_SESSION = gql`
  mutation CreateSession($session: SessionInput) {
    createSession(session: $session) {
      id
      title
      day
    }
  }
`;

const AddSession = () => {
  const history = useHistory();
  const [state, setState] = useState({
    title: "",
    description: "",
    day: "",
    level: "",
  });

  // Pass mutation to useMutation
  const [create, read] = useMutation(CREATE_SESSION);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };
  //console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    //passing variables for mutation
    create({ variables: { session: state } });
    history.push("/sessions");
  };

  //console.log("created data", read.data);

  return (
    <div className="container">
      <div className="AddSessionForm">
        <h3>
          <span class="badge badge-pill badge-info">Create a Session</span>
        </h3>

        <form onSubmit={handleSubmit} className="SessionForm">
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={state.title}
              />
            </div>
            <div className="form-group col-md-12">
              <label>Description</label>
              <textarea
                cols="40"
                rows="5"
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={state.description}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Day</label>
              <input
                type="text"
                className="form-control"
                id="day"
                name="day"
                placeholder="Day"
                onChange={handleChange}
                value={state.day}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Level</label>
              <input
                type="text"
                className="form-control"
                id="level"
                name="level"
                placeholder="level"
                onChange={handleChange}
                value={state.level}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSession;

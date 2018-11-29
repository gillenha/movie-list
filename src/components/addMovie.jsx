import React from "react";

const AddMovie = ({ match, history }) => {
  return (
    <div>
      <h1>Add Movie {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Add
      </button>
    </div>
  );
};

export default AddMovie;

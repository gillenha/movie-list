import React from "react";

const AddMovie = ({ match, history }) => {
  return (
    <div>
      <h1>Add Movie</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Movie Title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Genre</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Action</option>
            <option>Comedy</option>
            <option>Thriller</option>
            <option>Drama</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Number in Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            placeholder="Max: 100"
            min="1"
            max="100"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Rate</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            placeholder="Rate this movie 1-5"
            min="1"
            max="5"
          />
        </div>
      </form>
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

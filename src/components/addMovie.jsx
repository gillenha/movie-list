import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class AddMovie extends Form {
  state = {
    data: { title: "", genre: "", inStock: 0, rate: 0 },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    inStock: Joi.number()
      .required()
      .min(1)
      .max(100)
      .label("Number in stock"),
    rate: Joi.number()
      .required()
      .min(1)
      .max(5)
      .label("Rate")
  };

  render() {
    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("inStock", "In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default AddMovie;

import React, { Component } from "react";

class GenreSort extends Component {
  // state = {};
  render() {
    return (
      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action active"
        >
          Action
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Thriller
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Comedy
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Documentary
        </button>
      </div>
    );
  }
}

export default GenreSort;

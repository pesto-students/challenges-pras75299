import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  onChange = (event) => {
    if (event.target.value) {
      this.setState({ term: event.target.value });
    } else {
      this.setState({ term: "" });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.term !== "") {
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term],
      });
    } else {
      alert(`Please add grocery name`);
    }
  };
  clearAllItem = (event) => {
    event.preventDefault();
    if (this.state.items.length !== 0) {
      this.setState({
        term: "",
        items: [],
      });
    } else {
      alert("There are no items in Grocery list");
    }
  };

  render() {
    return (
      <>
        <form className="App" onSubmit={this.onSubmit}>
          <label className="form-lebel">Add a new Grocery Item</label>
          <input
            className="form-input"
            value={this.state.term}
            onChange={this.onChange}
            placeholder="Enter grocery name"
          />
          <button type="submit" className="form-submit-btn">
            Add Item
          </button>
          <button
            type="button"
            className="form-clear-button"
            onClick={this.clearAllItem}
          >
            Clear All Item
          </button>
        </form>
        <List items={this.state.items} />
      </>
    );
  }
}

export default App;

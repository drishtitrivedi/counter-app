import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-info btn-lg m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            Item #{counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;

// Object destructring (after render() method)
// const { onReset, onDelete, onIncrement } = this.props;
// and replace all this.props.

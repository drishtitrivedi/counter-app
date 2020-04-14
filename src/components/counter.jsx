import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  styles = {
    fontSize: 16,
  };

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  fotmatCount() {
    const { value } = this.props.counter;
    const x = "Zero";
    return value === 0 ? x : value;
  }

  // handleIncrement = product => {
  //   this.setState({ count: this.props.count + 1 });
  // };

  // handleDecrement = product => {
  //   this.setState({
  //     count:
  //       this.props.counter.count > 0
  //         ? this.props.counter.count - 1
  //         : this.props.counter.count
  //   });
  // };

  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>No tags. </p>;

    return (
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //React.createElement("div");
    //console.log(this.props);

    return (
      <div>
        <h4>{this.props.children}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.fotmatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          +
        </button>

        <span style={{ padding: 10, fontWeight: "bold" }}></span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-sm btn-secondary m-2"
        >
          -
        </button>

        <span style={{ padding: 10, fontWeight: "bold" }}></span>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>

        {/* {this.props.counter.tags.length === 0 && "Please Create New Tags!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;

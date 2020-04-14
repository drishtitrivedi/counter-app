import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Counters from "./components/counters";

function App() {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };
  
  render() {
  return (
    <React.Fragment>
      <NavBar
        totalCounters={this.state.counters.filter(c => c.value > 0).length}
      />
      <main className="container">
        <Counters
        // counters={this.state.counters}
        // onDelete={this.props.handleDelete}
        // onIncrement={this.props.handleIncrement}
        // onDecrement={this.props.handleDecrement}
        />
      </main>
    </React.Fragment>
  );
  }
}

export default App;

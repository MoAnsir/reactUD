import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Lenny", age: 36 },
      { name: "Eszter", age: 35 },
      { name: "MiniMe", age: 2 }
    ],
    otherState: "Some other value"
  };

  switchNameHandler = newName => {
    console.log("Was clicked");
    // DONT DO THIS: this.state.persons[0].name = "Lenny Ansir";
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: "Eszter", age: 35 },
        { name: "MiniMe", age: "1 3/4" }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Lenny", age: 36 },
        { name: event.target.value, age: 35 },
        { name: "MiniMe", age: "1 3/4" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React app test</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Lenny Ansir!!!!!!")}>
          {/*This was can cause problems with react. Can update more than what is
          needed can be inefficient*/}
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(
            this,
            "Lenny!!!!"
          )} /*Using bind is better, allows React to manage the state better*/
        >
          Hoobies include running around like a maniac
        </Person>
      </div>
    );
  }
}

export default App;

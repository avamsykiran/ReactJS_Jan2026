import { Component } from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ShoppingCounter from "./components/ShoppingCounter";

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header appTitle="My First React App" />
        <main className="container">
          <Welcome />
          <Counter />
          <ShoppingCounter />
        </main>
      </>
    );
  }
}

export default App;
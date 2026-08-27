import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ShoppingCounter from "./components/ShoppingCounter";

function App() {
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

export default App;
import "./App.css";
import DaisyNav from "./components/daisyNav/daisyNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;

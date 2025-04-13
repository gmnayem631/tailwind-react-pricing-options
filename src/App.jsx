import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/daisyNav/daisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch("pricingData.json").then((response) =>
  response.json()
);

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

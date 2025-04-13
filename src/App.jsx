import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/daisyNav/daisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((response) =>
  response.json()
);

const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultsChart></ResultsChart>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

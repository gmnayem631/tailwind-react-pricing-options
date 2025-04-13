import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "A", physics: 78, chemistry: 85, math: 92 },
  { id: 2, name: "B", physics: 82, chemistry: 79, math: 88 },
  { id: 3, name: "C", physics: 69, chemistry: 74, math: 70 },
  { id: 4, name: "D", physics: 91, chemistry: 89, math: 95 },
  { id: 5, name: "E", physics: 75, chemistry: 68, math: 72 },
  { id: 6, name: "F", physics: 84, chemistry: 81, math: 87 },
  { id: 7, name: "G", physics: 90, chemistry: 93, math: 96 },
  { id: 8, name: "H", physics: 67, chemistry: 70, math: 65 },
  { id: 9, name: "I", physics: 95, chemistry: 92, math: 98 },
  { id: 10, name: "J", physics: 80, chemistry: 77, math: 83 },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={900} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;

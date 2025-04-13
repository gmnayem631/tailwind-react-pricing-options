import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataResponse = use(marksPromise);
  const marksData = marksDataResponse.data;
  //   Data processing for the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.physics,
      chemistry: studentData.chemistry,
      math: studentData.math,
    };

    return student;
  });
  console.log(marksChartData);

  return (
    <div>
      <BarChart width={700} height={500} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="physics" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="salmon"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;

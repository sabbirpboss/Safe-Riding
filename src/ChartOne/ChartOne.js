import React from "react";
import './ChartOne.css';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartOne = () => {
  const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 24112,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 42133,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 7267,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 52439,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 30000,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 48765,
        "revenue": 61000
    }
];
  return (
    <div>
        <h3>This is Bar Chart</h3>
      <BarChart
        width={1200}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="revenue" />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
        <Bar dataKey="sell" fill="	#D3AA00" />
      </BarChart>
    </div>
  );
};

export default ChartOne;
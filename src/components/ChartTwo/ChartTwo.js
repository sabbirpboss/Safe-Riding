import React from "react";
import './ChartTwo.css';
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const ChartTwo = () => {
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

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="chart-two">
        <h3>This is Pie Chart</h3>
      <PieChart width={400} height={400}>
      <Tooltip />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="revenue"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default ChartTwo;
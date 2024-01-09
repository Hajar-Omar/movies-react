import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import apiService from "../../services/apiService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Accounts Debits",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

function BankChart() {
  const [bankData, setBankData] = useState({ datasets: [] });

  const datasets = [
    {
      backgroundColor: "rgb(255, 99, 12)",
      stack: "Stack 0",
    },
    {
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    },
    {
      backgroundColor: "rgb(53, 255, 25)",
      stack: "Stack 0",
    },
    {
      backgroundColor: "rgb(53, 200, 235)",
      stack: "Stack 0",
    },
  ];
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    const data = await apiService(`fakebank/accounts`);
    let first10 = data.slice(70, 80);
    let labels = first10.map((e) => e.transactionDate);
    let debites = first10.map((e) => e.debit);

    // update data in sets
    for (let i = 0; i < 10; i++) {
      if (i < 5) datasets[i].data = debites;
      else
        datasets[i] = { ...datasets[i - 5], stack: "Stack 1", data: debites };
      datasets[i].label = first10[i].description;
    }

    setBankData({ labels, datasets });
  };

  return <Bar options={options} data={bankData} />;
}

export default BankChart;

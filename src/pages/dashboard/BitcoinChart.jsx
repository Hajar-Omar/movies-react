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
      text: "Bitcoin Prices",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

function BitcoinChart() {
  const [bitcoinData, setBitcoinData] = useState({ datasets: [] });

  const datasets = [
    {
      label: "Price",
      data: [],
      backgroundColor: "rgb(255, 10, 132)",
    },
    {
      label: "Open",
      data: [],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "High",
      data: [],
      backgroundColor: "rgb(255, 200, 132)",
    },
  ];

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    const data = await apiService(`bitcoin/historical_prices`);
    let first15 = data.slice(0, 15);
    let labels = first15.map((e) => e.Date);
    let prcies = first15.map((e) => e.Price);
    let openPrices = first15.map((e) => e.Open);
    let highPrice = first15.map((e) => e.High);

    // update data in sets
    datasets[0].data = prcies;
    datasets[1].data = openPrices;
    datasets[2].data = highPrice;
    setBitcoinData({ labels, datasets });
  };

  return (
    <>
      <Bar options={options} data={bitcoinData} />
    </>
  );
}

export default BitcoinChart;

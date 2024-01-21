import React from "react";
import BitcoinChart from "./BitcoinChart";
import BankChart from "./BankChart";
import TicTacToe from "./TicTacToe";

function Dashboard() {
  return (
    <>
      <div className="d-flex row mx-0 mt-5">
        <div className="d-flex flex-column col-12 col-lg-6">
          <BitcoinChart />
        </div>
        <div className="d-flex flex-column col-12 col-lg-6">
          <BankChart />
        </div>
      </div>
      <TicTacToe />
    </>
  );
}

export default Dashboard;

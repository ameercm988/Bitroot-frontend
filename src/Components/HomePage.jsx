import React, { useState } from "react";
import CardContainer from "./CardContainer";
import "./HomePage.css";
import Modal from "./Modal";

const HomePage = () => {
  const [data, setData] = useState("");

  const dataFetched = (modalData) => {
    setData(modalData);
  };

  const shutdown = (shut) => {
    setData(shut);
  };

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardContainer fetchData={dataFetched} />
            {data ? <Modal data={data} modalShut={shutdown} /> : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

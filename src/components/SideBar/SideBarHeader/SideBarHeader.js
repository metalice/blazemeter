import React from "react";

import "./SideBarHeader.scss";

const SideBarHeader = ({ reportsQuantity, fetchData, setSideBarOpen }) => {
  return (
    <div className="SideBarHeader-main">
      <div className="title">Reports {reportsQuantity}</div>
      <div>
        <i className="icono-reset refresh" onClick={() => fetchData()} />
        <i className="icono-cross" onClick={() => setSideBarOpen(false)} />
      </div>
    </div>
  );
};

export default SideBarHeader;

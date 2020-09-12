import React from "react";
import moment from "moment";

import "./SideBarReport.scss";

const SideBarReport = ({ report }) => {
  const date = moment(report.updated * 1000);
  return (
    <div className="SideBarReport">
      <div className="name_location">
        <div className="name">{report.name}</div>
        <div className="location">
          {report.type} {report.location}
        </div>
      </div>
      <div className="date">
        <div className="month_day">{date.format("MMM DD")}</div>
        <div className="hour_ampm">{date.format("h:mm a")}</div>
      </div>
    </div>
  );
};

export default SideBarReport;

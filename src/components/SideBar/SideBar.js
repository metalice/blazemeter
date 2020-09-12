import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import SideBarHeader from "./SideBarHeader/SideBarHeader";
import SideBarReport from "./SideBarMenuItem/SideBarReport";
import SideBarSearch from "./SideBarSearch/SideBarSearch";

import { sorting } from "utils/side-bar";
import { useMenuItemsData } from "utils/hooks/side-bar/useMenuItemsData";

import "./SideBar.scss";

const SideBar = () => {
  const { data, fetchData } = useMenuItemsData();
  const [reports, setReports] = useState();
  const [sortingDirection, setSortingDirection] = useState("desc");
  const [searchValue, setSearchValue] = useState("");
  const [sideBarOpen, setSideBarOpen] = useState(true);

  useEffect(() => {
    setReports(data.filter(({ name }) => name.includes(searchValue)).sort(sorting(sortingDirection)));
  }, [searchValue, sortingDirection, data]);

  return (
    <div className="SideBar">
      {sideBarOpen ? (
        <>
          <SideBarHeader reportsQuantity={reports?.length} fetchData={fetchData} setSideBarOpen={setSideBarOpen} />
          <SideBarSearch setSearchValue={setSearchValue} searchValue={searchValue} setSortingDirection={setSortingDirection} />
          <div className="SideBarReports-container">{!isEmpty(reports) && reports.map((report) => <SideBarReport key={report.id} report={report} />)}</div>
        </>
      ) : (
        <div className="open-menu" onClick={() => setSideBarOpen(true)}>
          <i className="icono-hamburger" />
        </div>
      )}
    </div>
  );
};

export default SideBar;

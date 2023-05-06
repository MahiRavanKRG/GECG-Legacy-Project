import React, { useRef, useState } from "react";
import "./sidebar.css";

function Sidebar({ profileActive, setProfileActive, activeToggle, filteredData,setFilteredData, setBranchValue, sidebarClose, setSidebarClose, setActiveToggle }) {
  const branchEl = useRef();
  const batchEl = useRef();  
  const domainEl = useRef();
  return (
    <>
      <aside className={`sidebar ${activeToggle ? "active-toggle" : ""} ${sidebarClose ? "close-sidebar" : ""}`}>
        {profileActive ? (
          <>
            <div className="profile-heading">
              <h1>Profile</h1>
            </div>
            <div className="profile-group">
              <div className="profile-button">
                <button
                  onClick={() => {
                    setProfileActive(!profileActive);
                  }}
                >
                  Exit
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="sidebar-heading">
              <h1>Filter</h1>
            </div>
            <div className="sidebar-filter-group">
              <span>Branch</span>
              <select name="filter-branch" id="filter-branch" ref={branchEl}>
                <option value="IT">IT</option>
                <option value="CE">CE</option>
                <option value="IC">IC</option>
                <option value="EC">EC</option>
                <option value="BM">BM</option>
                <option value="Robotics">Robotics</option>
                <option value="Civil">Civil</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </div>
            <div className="sidebar-filter-group">
              <span>Batch</span>
              <select name="filter-batch" id="filter-year" ref={batchEl}>
                <option value="2020-2024">2020-2024</option>
                <option value="2021-2025">2021-2025</option>
                <option value="2022-2026">2022-2026</option>
              </select>
            </div>
            <div className="sidebar-filter-group">
              <span>Domain</span>
              <select name="filter-domain" id="filter-domain" ref={domainEl}>
                <option value="Web Developer">Web Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Java Developer">Java Developer</option>
                <option value="Software Developer">Software Developer</option>
              </select>
            </div>
            <div className="sidebar-filter-group">
              <button className={`${profileActive ? "profileIsActive" : ""}`} onClick={()=> {
                setBranchValue(branchEl.current.value);
                setFilteredData(!filteredData)
                console.log("Ha dabay to 6")
                console.log(branchEl.current.value)
              }}>
                {filteredData ? "Clear" : "Submit"}
              </button>
              <button style={{marginTop: "1rem"}} onClick={() => {
                setActiveToggle(!activeToggle)
              }}>Close</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Sidebar;

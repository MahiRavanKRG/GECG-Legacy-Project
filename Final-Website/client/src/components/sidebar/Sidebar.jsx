import React from "react";
import "./sidebar.css";

function Sidebar({ profileActive, setProfileActive, activeToggle }) {
  return (
    <>
      <aside className={`sidebar ${activeToggle ? "active-toggle" : ""}`}>
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
              <select name="filter-branch" id="filter-branch">
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
              <select name="filter-batch" id="filter-year">
                <option value="2020-2024">2020-2024</option>
                <option value="2021-2025">2021-2025</option>
                <option value="2022-2026">2022-2026</option>
              </select>
            </div>
            <div className="sidebar-filter-group">
              <span>Domain</span>
              <select name="filter-domain" id="filter-domain">
                <option value="Web Developer">Web Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Java Developer">Java Developer</option>
                <option value="Software Developer">Software Developer</option>
              </select>
            </div>
            <div className="sidebar-filter-group">
              <button className={`${profileActive ? "profileIsActive" : ""}`}>
                Submit
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Sidebar;

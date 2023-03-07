import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-heading">
          <h1>Filter</h1>
        </div>
        <div className="sidebar-filter-group">
          <select name="filter-branch" id="filter-branch">
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
          </select>
        </div>
        <div className="sidebar-filter-group">
          <select name="filter-branch" id="filter-year">
            <option value="Information Technology">2023</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
          </select>
        </div>
        <div className="sidebar-filter-group">
          <select name="filter-branch" id="filter-domain">
            <option value="Information Technology">Web Developer</option>
            <option value="Information Technology">Android Developer</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
          </select>
        </div>
        <div className="sidebar-filter-group">
          <select name="filter-branch" id="filter-branch">
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Information Technology">Information Technology</option>
          </select>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
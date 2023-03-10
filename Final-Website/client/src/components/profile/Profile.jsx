import React from "react";
import "./profile.css";

function Profile({ cards }) {
  return (
    <>
      <div className="setting-section">
        <div className="setting-heading">
          <h1>Your Profile</h1>
        </div>
        <div className="setting-container">
          <div className="setting-group">
            <label htmlFor="changeName">Name</label>
            <input type="text" name="changeName" id="changeName" />
          </div>
          <div className="setting-group">
            <label htmlFor="changeEmail">Email</label>
            <input type="email" name="changeEmail" id="changeEmail" />
          </div>

          <div className="setting-group">
            <label htmlFor="changeBranch">Branch</label>
            <select name="changeBranch" id="changeBranch">
              <option value="IT">IT</option>
              <option value="CE">CE</option>
            </select>
          </div>
          <div className="setting-group">
            <label htmlFor="changeBatch">Batch</label>
            <select name="changeBatch" id="changeBatch">
              <option value="2020-2024">2020-2024</option>
              <option value="2020-2024">2020-2024</option>
              <option value="2020-2024">2020-2024</option>
              <option value="2020-2024">2020-2024</option>
            </select>
          </div>
          <div className="setting-group">
            <label htmlFor="changeAbout">About You</label>
            <textarea name="changeAbout" id="changeAbout" cols="30" rows="5"></textarea>
          </div>
          <div className="setting-group"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;

import React, { useState } from "react";
import "./Tilevarint1.css";
import { data } from "./Apidata.js";

const Tilevarint1 = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [view, setView] = useState("grid"); // 'grid' or 'tile'
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  const switchView = (viewType) => {
    setView(viewType);
  };

  

  return (
    <div className="app">
      {/* Combined Menu */}
      <div className="menu-container">
        <button className="hamburger-button" onClick={toggleHamburger}>
          ☰
        </button>
        {isHamburgerOpen && (
          <div className="hamburger-menu">
            <a href="#item1">Menu Item 1</a>
            <a href="#item2">Menu Item 2</a>
            <a href="#item3">Menu Item 3</a>
            <div className="submenu">
              <a href="#submenu1">Submenu Item 1</a>
              <a href="#submenu2">Submenu Item 2</a>
            </div>
          </div>
        )}
        <nav className="horizontal-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* View Toggle Buttons */}
      <div className="view-toggle">
        <button className="view-button" onClick={() => switchView("grid")}>Grid View</button>
        <button className="view-button" onClick={() => switchView("tile")}>Tile View</button>
      </div>

      {/* Main Content */}
      <div className="content">
        {view === "grid" ? (
          <div className="grid-view1">
            <div className="grid-header">
              <p>ID</p>
              <p>Name</p>
              <p>Age</p>
              <p>Grade</p>
              <p>Email</p>
              <p>Address</p>
              <p>City</p>
              <p>State</p>
              <p>Country</p>
              <p>Phone</p>
              <p>Gender</p>
            </div>
            {data.map((item) => (
              <div className="grid-item" key={item.id}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <p>{item.grade}</p>
                <p>{item.email}</p>
                <p>{item.address}</p>
                <p>{item.city}</p>
                <p>{item.state}</p>
                <p>{item.country}</p>
                <p>{item.phone}</p>
                <p>{item.gender}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="tile-view">
            {data.map((item) => (
              <div
                className="tile"
                key={item.id}
                onClick={() => setSelectedItem(item)}
              >
                <p>{item.name}</p>
                <p>{item.grade}</p>
                <div className="tile-actions">
                  <button>Edit</button>
                  <button>Flag</button>
                  <button>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detailed View */}
      {selectedItem && (
        <div className="detail-view">
          <div className="detail-content">
            <h2>{selectedItem.name}</h2>
            <p>Age: {selectedItem.age}</p>
            <p>Grade: {selectedItem.grade}</p>
            <p>Email: {selectedItem.email}</p>
            <p>Address: {selectedItem.address}</p>
            <p>City: {selectedItem.city}</p>
            <p>State: {selectedItem.state}</p>
            <p>Country: {selectedItem.country}</p>
            <p>Phone: {selectedItem.phone}</p>
            <p>Gender: {selectedItem.gender}</p>
            <button onClick={() => setSelectedItem(null)}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tilevarint1;

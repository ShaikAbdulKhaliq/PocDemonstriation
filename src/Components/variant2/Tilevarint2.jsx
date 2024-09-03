import React, { useState } from "react";

import "./Tilevarints2.css";

import { data } from "../Variant1/Apidata";

import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaArrowRight, FaBars } from "react-icons/fa";

const TileviewVariation2 = () => {
    
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [view, setView] = useState("grid"); 
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
          <FaBars />
        </button>
        {isHamburgerOpen && (
          <div className="hamburger-menu">
            <a href="#item1"><FaHome /> Home</a>
            <a href="#item2"><FaInfoCircle /> About</a>
            <a href="#item3"><FaServicestack /> Services</a>
            <div className="submenu">
              <a href="#submenu1"><FaArrowRight /> Submenu Item 1</a>
              <a href="#submenu2"><FaArrowRight /> Submenu Item 2</a>
            </div>
          </div>
        )}
        <nav className="horizontal-menu">
          <a href="#home"><FaHome /> Home</a>
          <a href="#about"><FaInfoCircle /> About</a>
          <a href="#services"><FaServicestack /> Services</a>
          <a href="#contact"><FaPhone /> Contact</a>
        </nav>
      </div>

      {/* View Toggle Buttons */}
      <div className="view-toggle">
        <button onClick={() => switchView("grid")}>Grid View</button>
        <button onClick={() => switchView("tile")}>Tile View</button>
      </div>

      {/* Main Content */}
      <div className="content">
        {view === "grid" ? (
          <div className="grid-view">
            {data.map((item) => (
              <div className="grid-item" key={item.id}>
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
            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TileviewVariation2;

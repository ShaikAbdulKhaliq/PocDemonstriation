import React, { useState } from "react";
import "./Tilevariant3.css";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Tileview = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [view, setView] = useState("grid");
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  const switchView = (viewType) => {
    setView(viewType);
  };

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
      grade: "A",
      email: "john.doe@example.com",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      phone: "555-1234",
      gender: "Male",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      grade: "B",
      email: "jane.smith@example.com",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      phone: "555-5678",
      gender: "Female",
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 19,
      grade: "A",
      email: "michael.brown@example.com",
      address: "789 Oak St",
      city: "Chicago",
      state: "IL",
      country: "USA",
      phone: "555-9101",
      gender: "Male",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 21,
      grade: "A",
      email: "emily.davis@example.com",
      address: "101 Maple St",
      city: "Houston",
      state: "TX",
      country: "USA",
      phone: "555-1123",
      gender: "Female",
    },
    {
      id: 5,
      name: "Chris Johnson",
      age: 23,
      grade: "B",
      email: "chris.johnson@example.com",
      address: "202 Birch St",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      phone: "555-3145",
      gender: "Male",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      age: 20,
      grade: "A",
      email: "sarah.wilson@example.com",
      address: "303 Cedar St",
      city: "Philadelphia",
      state: "PA",
      country: "USA",
      phone: "555-5167",
      gender: "Female",
    },
    {
      id: 7,
      name: "David Martinez",
      age: 21,
      grade: "C",
      email: "david.martinez@example.com",
      address: "404 Pine St",
      city: "San Antonio",
      state: "TX",
      country: "USA",
      phone: "555-7189",
      gender: "Male",
    },
    {
      id: 8,
      name: "Laura Clark",
      age: 22,
      grade: "B",
      email: "laura.clark@example.com",
      address: "505 Walnut St",
      city: "San Diego",
      state: "CA",
      country: "USA",
      phone: "555-9201",
      gender: "Female",
    },
    {
      id: 9,
      name: "James Lewis",
      age: 19,
      grade: "A",
      email: "james.lewis@example.com",
      address: "606 Elm St",
      city: "Dallas",
      state: "TX",
      country: "USA",
      phone: "555-1223",
      gender: "Male",
    },
    {
      id: 10,
      name: "Olivia Harris",
      age: 23,
      grade: "A",
      email: "olivia.harris@example.com",
      address: "707 Aspen St",
      city: "San Jose",
      state: "CA",
      country: "USA",
      phone: "555-3245",
      gender: "Female",
    },
  ];

  return (
    <div className="app">
      {/* Combined Menu */}
      <div className="menu-container">
        <button className="hamburger-button" onClick={toggleHamburger}>
          <FaBars />
        </button>
        {isHamburgerOpen && (
          <div className="hamburger-menu-overlay">
            <div className="hamburger-menu-content">
              <button className="close-button" onClick={toggleHamburger}>
                <FaTimes />
              </button>
              <a href="#item1">
                <FaHome /> Home
              </a>
              <a href="#item2">
                <FaInfoCircle /> About
              </a>
              <a href="#item3">
                <FaServicestack /> Services
              </a>
              <div className="submenu">
                <a href="#submenu1">
                  <FaArrowRight /> Submenu Item 1
                </a>
                <a href="#submenu2">
                  <FaArrowRight /> Submenu Item 2
                </a>
              </div>
            </div>
          </div>
        )}
        <nav className="horizontal-menu">
          <a href="#home">
            <FaHome /> Home
          </a>
          <a href="#about">
            <FaInfoCircle /> About
          </a>
          <a href="#services">
            <FaServicestack /> Services
          </a>
          <a href="#contact">
            <FaPhone /> Contact
          </a>
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
          <div className="grid-view3">
            {data.map((item) => (
              <div
                className="grid-item3"
                key={item.id}
                onClick={() => setSelectedItem(item)}
              >
                <h3>{item.name}</h3>
                <p>{item.email}</p>
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
                <h3>{item.name}</h3>
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

export default Tileview;

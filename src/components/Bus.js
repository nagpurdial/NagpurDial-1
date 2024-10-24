import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
function Bus() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/flight">
                <b>Flight</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/hotel">
                <b>Hotel</b>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/bus">
                <b>Bus</b>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/train">
                <b>Train</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cab">
                <b>Cab</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/visa">
                <b>Visa Assistance</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Internationalsim">
                <b>International Sim Card</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="banner">
        <div style={{ padding: "10px" }}></div>
        {/* <div className="container99 mt-3">
          <form className="row">
            <div className="mb-3 col-lg-4">
              <label htmlFor="fullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="your full name"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="phone" className="form-label">
                Mob No:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder=" phone number"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="departureDate" className="form-label">
                Date Of Journy:
              </label>
              <input type="date" className="form-control" id="departureDate" />
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="departureDate" className="form-label">
                Date Of Return:
              </label>
              <input type="date" className="form-control" id="departureDate" />
            </div>
            <div className="mb-3 col-lg-4">
              <button type="submit" className="btn btn-primary mt-3">
                Confirm Booking
              </button>
            </div>
            <div className="mb-3 col-lg-4">
              <button type="submit" className="btn btn-primary mt-3">
                Cancel - Booking
              </button>
            </div>
          </form>
        </div> */}
      </div>

      <div style={{ padding: "10px" }}></div>
      <div>
        <h5>
          <strong>
            Book Bus Online with{" "}
            <span
              style={{
                color: "#FF3F07",
                fontSize: "20px",
                fontFamily: "Arial Black",
              }}
            >
              Nagpur{" "}
            </span>
            Dial{" "}
          </strong>
        </h5>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Welcome to Nagpur Dial, your premier destination for booking bus
          tickets online with ease and convenience. Say goodbye to long queues
          and the hassle of last-minute ticket purchases. With Nagpur Dial, you
          can plan your journey, select your preferred seats, and secure your
          tickets—all from the comfort of your own home or on the go.
        </p>
      </div>

      <hr />
      <h5>
        <strong>
          Popular Bus Agency in <span style={{ color: "#FF3F07" }}>Nagpur</span>
        </strong>
      </h5>
      <p style={{ color: "grey" }}>
        T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL
        SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels
        agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND
        TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA
        TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and
        Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS
        AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur |
        GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS |{" "}
      </p>

      <hr />
    </div>
  );
}

export default Bus;

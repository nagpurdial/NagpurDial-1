import React, { useState } from "react";
import "../App.css";
import Businesschat from "../Businesschat/Businesschatmodel"; 
import Otp2 from "../Otp2";
const whatsappContacts = [
  { id: 1, phone: "917122998728", text1: "Amit English High School" },
  // { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 2, phone: "919975288300", text2: "Nagpurdial" },
  // Add more contacts as needed
];

const whatsappContacts2 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 3, phone: "919975288300", text3: "Nagpurdial" },
  // Add more contacts as needed
];

function School() {
  const [showOTPModal, setShowOTPModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // To store the selected contact information

  const handleContactButtonClick = (contact) => {
    setSelectedContact(contact); // Store the selected contact
    setShowOTPModal(true); // Show the OTP modal
  };

  const handleOtpVerified = () => {
    setShowContactForm(true); // Show contact form after OTP verification
    setShowOTPModal(false); // Close OTP modal after verification
  };

  const handleCloseModal = () => {
    setShowOTPModal(false); // Close both OTP and Contact modals
    setShowContactForm(false);
    setSelectedContact(null); // Clear the selected contact
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner35">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <h5>
          <strong>Schools in Nagpur</strong>
        </h5>
        <div style={{ padding: "2px" }}></div>
        {/* <!-- client-1 --> */}
        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>Amit English High School</b>
              </h5>
              <p>444M+7GP, Dighori, Nagpur, Maharashtra 440034</p>

              <p>
                AMIT ENGLISH HIGH SCHOOL, NARSADA ROAD was established in 2003
                and it is managed by the Pvt. Unaided. It is located in Urban
                area.
              </p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>

              {whatsappContacts.map((contact) => (
                <div key={contact.id1} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text1}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*    
    <!-- client-2 --> */}
        <div style={{ padding: "5px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly1"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>Prime Exotica Salon Nagpur</b>
              </h5>
              <p>ETERNITY MALL, Sitabuldi, Nagpur, Maharashtra 440010</p>

              <p>
                Get pampered by professionals beauty services, also Get Complete
                Hair Services From Haircut, Hair Color To Hair Treatment
              </p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>

              {whatsappContacts1.map((contact) => (
                <div key={contact.id2} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text2}</b>
                    </button>
                  </div>
                </div>
              
              ))}

              {/* <!-- client-3 --> */}
              <div style={{ padding: "5px" }}></div>
              
            </div>
          </div>
        </div>
        
        <div style={{ padding: "5px" }}></div>
        {/* Modal for OTP and Contact1 */}
             {showOTPModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">OTP Verification</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <Otp2
                  onClose={handleCloseModal}
                  onOtpVerified={handleOtpVerified}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showContactForm && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <Businesschat
                  contact={selectedContact}
                  onClose={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}

        {/* <!-- *****************************footer************************************** --> */}
      </div>
    </div>
  );
}

export default School;
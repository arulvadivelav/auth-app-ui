import React, { useState } from "react";
import "../styles/ProfileCard.css";

/**
 * Creative Profile Card Component - Matching the screenshot theme
 * Reusable component with image, details, and verified badge
 */
const CreativeProfileCard = ({
  firstName,
  lastName,
  dateOfBirth,
  gender,
  profileImage ,
  profession,
  email,
  phone,
  maritalStatus,
  isVerified,

}) => {
  const [imageError, setImageError] = useState(false);

  const defaultImage =
    "https://ui-avatars.com/api/?background=6366f1&color=fff&bold=true&size=120&name=" +
    firstName +
    "+" +
    lastName;
  const displayImage = imageError ? defaultImage : profileImage;

  return (
    <div className="creative-profile-card">
      <div className="card-content">
        {/* Left Column - Image & Verification */}
        <div className="profile-left">
          <div className="image-wrapper">
            <img
              src={displayImage}
              alt={`${firstName} ${lastName}`}
              className="profile-avatar"
              onError={() => setImageError(true)}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="image-overlay" />
            <div
              className={`verification-ring ${isVerified ? "verified" : "not-verified"}`}
            >
              {isVerified ? (
                <span style={{ fontSize: "14px", color: "#fff" }}>✔</span>
              ) : (
                <span style={{ fontSize: "14px", color: "#fff" }}>✖</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Details matching screenshot structure */}
        <div className="profile-right">
          {/* Name Section */}
          <div className="info-section">
            <div className="section-header">
              <h3 className="section-title">Basic Info</h3>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <label>First Name</label>
                <div className="info-value">{firstName}</div>
              </div>
              <div className="info-item">
                <label>Last Name</label>
                <div className="info-value">{lastName}</div>
              </div>
              <div className="info-item">
                <label>Date of Birth</label>
                <div className="info-value">{dateOfBirth}</div>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <div className="info-value">{gender}</div>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="info-section">
            <div className="section-header">
              <h3 className="section-title">Profile Details</h3>
            </div>
            <div className="info-grid">
              <div className="info-item full-width">
                <label>Profession</label>
                <div className="info-value profession-value">{profession}</div>
              </div>
              <div className="info-item">
                <label>Email</label>
                <div className="info-value">{email}</div>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <div className="info-value">{phone}</div>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="info-section">
            <div className="section-header">
              <h3 className="section-title">Preferences & Expectations</h3>
            </div>
            <div className="info-grid">
              <div className="info-item full-width">
                <label>Marital Status</label>
                <div className="info-value">
                  <span className="marital-badge">{maritalStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeProfileCard;

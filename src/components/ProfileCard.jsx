import React from "react";

const ProfileCard = ({ profile, onClick }) => {
  return (
    <div className="profile-card-details" onClick={() => onClick(profile)}>
      <div className="profile-card-image">
        <img src={profile.images[0]} alt={profile.name} />
      </div>
      
      <div className="card-content">
        <h3>{profile.name}</h3>
        
        <div className="profile-details-container">
          {/* Section 1: Basic Info - Vertical Layout */}
          <div className="card-section-container">
            <div className="card-section">
              <p className="section-label">Basic Information</p>
              <div className="card-details-vertical">
                <div className="detail-row">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{profile.age}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{profile.location}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Height:</span>
                  <span className="detail-value">{profile.height}</span>
                </div>
              </div>
            </div>

            {/* Section 2: Professional Info - Vertical Layout */}
            <div className="card-section">
              <p className="section-label">Professional Details</p>
              <div className="card-details-vertical">
                <div className="detail-row">
                  <span className="detail-label">Profession:</span>
                  <span className="detail-value">{profile.profession}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Education:</span>
                  <span className="detail-value">{profile.education}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
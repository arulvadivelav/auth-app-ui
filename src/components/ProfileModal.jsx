import React, { useState } from "react";

const ProfileModal = ({
  profile,
  onClose,
  onLike,
  onConnect,
  onFavorite,
  likedStatus,
  connectedStatus,
  favoriteStatus,
}) => {
  const [imgIndex, setImgIndex] = useState(0);

  if (!profile) return null;

  const nextImg = () => {
    setImgIndex((prev) =>
      prev === profile.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImg = () => {
    setImgIndex((prev) =>
      prev === 0 ? profile.images.length - 1 : prev - 1
    );
  };

  const isLiked = likedStatus[profile.id] || false;
  const isConnected = connectedStatus[profile.id] || false;
  const isFavorited = favoriteStatus[profile.id] || false;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* Fixed Header Actions */}
        <div className="modal-actions">
          <button
            className={`action-btn like-btn ${isLiked ? "active" : ""}`}
            onClick={() => onLike(profile.id)}
            disabled={isLiked}
          >
            {isLiked ? "Liked" : "Like"}
          </button>

          <button
            className={`action-btn connect-btn ${isConnected ? "active" : ""}`}
            onClick={() => onConnect(profile.id)}
            disabled={isConnected}
          >
            {isConnected ? "Connected" : "Connect"}
          </button>

          <button
            className={`action-btn favorite-btn ${isFavorited ? "active" : ""}`}
            onClick={() => onFavorite(profile.id)}
            disabled={isFavorited}
          >
            {isFavorited ? "Favorited" : "Add to Favorite"}
          </button>
          {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
            ✖
        </button>
        </div>

        {/* Image Slider */}
        <div className="slider">
          <button onClick={prevImg} className="slider-btn">◀</button>
          <img src={profile.images[imgIndex]} alt={profile.name} />
          <button onClick={nextImg} className="slider-btn">▶</button>
        </div>

        {/* Scrollable Content Area */}
        <div className="modal-content">

          <h2>{profile.name}</h2>

          {/* Basic Details */}
          <div className="details-section">
            <h3 className="section-title">Basic Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Age:</span>
                <span className="detail-value">{profile.age}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender:</span>
                <span className="detail-value">
                  {profile.gender || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date of Birth:</span>
                <span className="detail-value">
                  {profile.dob || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="details-section">
            <h3 className="section-title">Professional Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Profession:</span>
                <span className="detail-value">{profile.profession}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">{profile.education}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Company:</span>
                <span className="detail-value">
                  {profile.company || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">
                  {profile.experience || "Not specified"}
                </span>
              </div>
            </div>
          </div>

          {/* Horoscope */}
          <div className="details-section">
            <h3 className="section-title">Horoscope Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Zodiac Sign:</span>
                <span className="detail-value">
                  {profile.zodiac || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Birth Place:</span>
                <span className="detail-value">
                  {profile.birthPlace || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Birth Time:</span>
                <span className="detail-value">
                  {profile.birthTime || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Rashi:</span>
                <span className="detail-value">
                  {profile.rashi || "Not specified"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Nakshatra:</span>
                <span className="detail-value">
                  {profile.nakshatra || "Not specified"}
                </span>
              </div>
            </div>
          </div>

          {/* About */}
          {profile.about && (
            <div className="details-section">
              <h3 className="section-title">About</h3>
              <p className="about-text">{profile.about}</p>
            </div>
          )}

          <button
            className="view-profile-btn"
            onClick={() => window.open(`/profile/${profile.id}`, "_blank")}
          >
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
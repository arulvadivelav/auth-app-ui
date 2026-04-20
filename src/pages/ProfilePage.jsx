import React, { useState } from "react";
import SearchSection from '../components/SearchSection';
import profiles from "../mock/profiles";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";
import "../styles/Profile.css";

const ProfilePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [likedProfiles, setLikedProfiles] = useState({});
  const [connectedProfiles, setConnectedProfiles] = useState({});
  const [favoriteProfiles, setFavoriteProfiles] = useState({});

  const handleSearch = (filters) => {
    console.log('Searching with filters:', filters);
    alert(`Searching for: ${filters.keyword || 'all profiles'} with filters applied!`);
  };
  
  const handleLike = (profileId) => {
    setLikedProfiles(prev => ({
      ...prev,
      [profileId]: !prev[profileId]
    }));
  };

  const handleConnect = (profileId) => {
    setConnectedProfiles(prev => ({
      ...prev,
      [profileId]: !prev[profileId]
    }));
  };

  const handleFavorite = (profileId) => {
    setFavoriteProfiles(prev => ({
      ...prev,
      [profileId]: !prev[profileId]
    }));
  };

  return (
    <div className="contact-container">
      <SearchSection onSearch={handleSearch} />
      <div className="profile-card-grid">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onClick={setSelectedProfile}
          />
        ))}
      </div>

      {/* Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onLike={handleLike}
        onConnect={handleConnect}
        onFavorite={handleFavorite}
        likedStatus={likedProfiles}
        connectedStatus={connectedProfiles}
        favoriteStatus={favoriteProfiles}
      />
    </div>
  );
};

export default ProfilePage;
import React, { useEffect, useState } from 'react';
import CreativeProfileCard from '../components/Cards';
import profilesData from "../mock/profiles.json";

const ProfileCardView = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // fetchProfiles
    // simulate API call
    setProfiles(profilesData);
  }, []);

//   const fetchProfiles = async () => {
//     try {
//       const response = await fetch("https://your-api.com/profiles"); // 🔥 replace
//       const data = await response.json();
//       setProfiles(data);
//     } catch (error) {
//       console.error("Error fetching profiles:", error);
//     }
//   };

  return (
    <div
      style={{
        padding: '40px',
        background: '#f8fafc',
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}
    >
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <CreativeProfileCard
            key={profile.id}
            firstName={profile.firstName}
            lastName={profile.lastName}
            dateOfBirth={profile.dateOfBirth}
            gender={profile.gender}
            profileImage={profile.profileImage}
            profession={profile.profession}
            email={profile.email}
            phone={profile.phone}
            maritalStatus={profile.maritalStatus}
            isVerified={profile.isVerified}
            onEdit={() => handleEdit(profile)}
          />
        ))
      ) : (
        <p>No profiles found</p>
      )}
    </div>
  );
};

const handleEdit = (profile) => {
  console.log("Edit clicked:", profile);
};

export default ProfileCardView;
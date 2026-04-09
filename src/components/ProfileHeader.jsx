import React from "react";

const ProfileHeader = ({ image, name, username, bio }) => {
  return (
    <div className="bg-green-400 text-white shadow-md rounded-2xl p-6 flex items-center gap-6 w-[600px] mx-auto">
      
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
      />

      {/* Profile Info */}
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-blue-600">{username}</p>
        <p className="mt-2 text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
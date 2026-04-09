import React from "react";

const ProfileSidebar = ({ followers, following, location, website }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Profile Info</h2>

      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Followers:</span> {followers}
        </p>

        <p>
          <span className="font-semibold">Following:</span> {following}
        </p>

        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>

        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
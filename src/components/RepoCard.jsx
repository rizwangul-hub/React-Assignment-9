import React from "react";

const RepoCard = ({ repoName, description, language, stars, children }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-80 hover:scale-105 transition">
      
      <h2 className="text-xl font-bold mb-2">{repoName}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="text-sm text-gray-700 mb-4">
        <p>Language: <span className="font-medium">{language}</span></p>

        <p>⭐ Stars: <span className="font-medium">{stars}</span></p>
      </div>
      <div className="border-t pt-3 text-blue-600 font-medium">
        {children}
      </div>

    </div>
  );
};

export default RepoCard;
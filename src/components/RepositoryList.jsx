import React from "react";
import RepoCard from "./RepoCard";
import { repositories } from "./refpositry";

const Repositories = () => {
  return (
    <div className="grid grid-cols-3 p-6 items-center gap-6 justify-center mt-10">
      
      {repositories.map((repo, index) => (
        <RepoCard
          key={index}
          repoName={repo.repoName}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
        >
          🚀 Open Source Project
        </RepoCard>
      ))}

    </div>
  );
};

export default Repositories;
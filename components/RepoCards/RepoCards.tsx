import React from "react";
import { Item } from "../../types";
import RepoCard from "../RepoCard/RepoCard";
import { RepoCardsCover } from "./styles";

const RepoCards = ({ repoCards }: { repoCards: Item[] }) => {
  return (
    <RepoCardsCover>
      {repoCards.map(
        ({
          stargazers_count: numOfstars,
          name: name,
          forks: numOfForks,
          html_url: link,
          language,
        }) => (
          <RepoCard
            numOfstars={numOfstars}
            name={name}
            numOfForks={numOfForks}
            link={link}
            language={language}
            key={name}
          />
        )
      )}
    </RepoCardsCover>
  );
};

export default RepoCards;

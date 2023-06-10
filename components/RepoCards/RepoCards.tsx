import React, { useMemo } from "react";
import { Item } from "../../types";
import RepoCard, { RepoCardData } from "../RepoCard/RepoCard";
import { RepoCardsCover } from "./styles";
import useLocalStorage from "../../hooks/useLocalStorage";

const RepoCards = ({ repoCards }: { repoCards: Item[] }) => {
  const { storedData, setValue } = useLocalStorage<RepoCardData, []>(
    "RepoData",
    []
  );

  const favouritesArray = useMemo(
    () =>
      repoCards?.filter(({ name: repoCardName }) =>
        storedData.some(({ name }) => name === repoCardName)
      ),
    [repoCards, storedData]
  );
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
            key={link}
            setValue={setValue}
            isFavourite={
              favouritesArray.find(({ html_url }) => html_url === link)
                ? true
                : false
            }
          />
        )
      )}
    </RepoCardsCover>
  );
};

export default RepoCards;

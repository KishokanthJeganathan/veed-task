import React from "react";
import RepoCard, { RepoCardData } from "../RepoCard/RepoCard";
import { FavouriteCardsCover } from "./styles";

const FavouriteCards = ({
  favouriteCardData,
}: {
  favouriteCardData: RepoCardData[];
}) => {
  if (!favouriteCardData.length)
    return <p>Hmm, you don&apos;t seem to have any favourite repos yet</p>;
  return (
    <FavouriteCardsCover>
      {favouriteCardData?.map(
        ({ name, link, language, numOfForks, numOfstars }) => (
          <RepoCard
            numOfstars={numOfstars}
            name={name}
            numOfForks={numOfForks}
            link={link}
            language={language}
            key={name}
            isFavourite
          />
        )
      )}
    </FavouriteCardsCover>
  );
};

export default FavouriteCards;

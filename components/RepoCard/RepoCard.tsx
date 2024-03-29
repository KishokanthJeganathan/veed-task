import React from "react";
import { RepoCardCover } from "./styles";
import { SetValueData } from "../../hooks/useLocalStorage";
import { Nullable } from "../../types";

export type RepoCardData = {
  numOfstars: number;
  name: string;
  numOfForks: number;
  link: string;
  language: Nullable<string>;
};

export type RepoCardProps = RepoCardData & {
  isFavourite: boolean;
  setValue?: (data: SetValueData<RepoCardData>) => void;
};

const RepoCard = ({
  numOfstars,
  name,
  numOfForks,
  link,
  language,
  setValue,
  isFavourite,
}: RepoCardProps) => {
  const handleButtonClick = () => {
    if (setValue) {
      setValue({
        data: {
          numOfstars,
          name,
          numOfForks,
          link,
          language,
        },
        action: "Add",
      });
    }
  };
  return (
    <RepoCardCover data-cy="RepoCard">
      <h3>Name: {name}</h3>
      <p>Stars: {numOfstars}</p>
      <p>Forks: {numOfForks}</p>
      <p>Language: {language || "Unspecified"}</p>
      <a href={link} target="_blank" rel="noopener">
        Visit Repo
      </a>
      <button onClick={handleButtonClick} disabled={isFavourite ? true : false}>
        {!isFavourite ? "Favourite" : "Added to Favourites"}
      </button>
    </RepoCardCover>
  );
};

export default RepoCard;

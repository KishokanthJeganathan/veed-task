import React from "react";
import { RepoCardCover } from "./styles";

export type RepoCardData = {
  numOfstars: number;
  name: string;
  numOfForks: number;
  link: string;
  language: string | null;
};
const RepoCard = ({
  numOfstars,
  name,
  numOfForks,
  link,
  language,
}: RepoCardData) => {
  return (
    <RepoCardCover data-cy="RepoCard">
      <h3>Name: {name}</h3>
      <p>Stars: {numOfstars}</p>
      <p>Forks: {numOfForks}</p>
      <p>Language: {language || "Unspecified"}</p>
      <a href={link} target="_blank" rel="noopener">
        Visit Repo
      </a>
    </RepoCardCover>
  );
};

export default RepoCard;

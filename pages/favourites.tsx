import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { RepoCardData } from "../components/RepoCard/RepoCard";
import FavouriteCards from "../components/Favourites/FavouriteCards";

const Favourites = () => {
  const { storedData } = useLocalStorage<RepoCardData, []>("RepoData", []);

  return (
    <>{storedData ? <FavouriteCards favouriteCardData={storedData} /> : null}</>
  );
};

export default Favourites;

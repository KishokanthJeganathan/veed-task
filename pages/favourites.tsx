import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import FavouriteCards from "../components/Favourites/FavouriteCards";
import NavBar from "../components/NavBar/NavBar";
import useLanguageFilter from "../hooks/useLanguageFilter";
import { RepoCardData } from "../components/RepoCard/RepoCard";

const Favourites = () => {
  const { storedData } = useLocalStorage<RepoCardData, []>("RepoData", []);
  const {
    repoData,
    allLanguageFilters,
    appliedLanguageFilter,
    setAppliedLanguageFilter,
  } = useLanguageFilter(storedData);

  return (
    <>
      <NavBar
        allLanguageFilters={allLanguageFilters}
        appliedLanguageFilter={appliedLanguageFilter}
        setAppliedLanguageFilter={setAppliedLanguageFilter}
        href="/"
        destination="Click here to go to the home page"
      />
      {repoData ? <FavouriteCards favouriteCardData={repoData} /> : null}
    </>
  );
};

export default Favourites;

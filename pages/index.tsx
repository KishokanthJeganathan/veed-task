import React, { useState } from "react";
import { Item, SearchResponse } from "../types";
import RepoCards from "../components/RepoCards/RepoCards";
import useLanguageFilter from "../hooks/useLanguageFilter";
import { getLastWeekDate } from "../helpers/helpers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";

const Index = () => {
  const [initialData, setInitialData] = useState<Item[]>([]);
  const { isLoading, error } = useQuery<SearchResponse>({
    queryKey: ["github"],
    queryFn: async () => {
      const response = await axios.get(
        `/search/repositories?q=created:%3E${getLastWeekDate()}&sort=stars&order=desc`,
        {
          //usually the baseURL would be in envs but i've added it openly here to make it easier to run the project
          baseURL: "https://api.github.com",
        }
      );
      return response.data;
    },
    onSuccess: (data) => setInitialData(data.items),
  });

  const {
    repoData,
    allLanguageFilters,
    appliedLanguageFilter,
    setAppliedLanguageFilter,
  } = useLanguageFilter(initialData);

  if (error) {
    throw new Error();
  }

  if (isLoading) return <p>Loading those repos as fast as we can....</p>;

  return (
    <>
      <NavBar
        allLanguageFilters={allLanguageFilters}
        appliedLanguageFilter={appliedLanguageFilter}
        setAppliedLanguageFilter={setAppliedLanguageFilter}
        href="favourites"
        destination="Click here to visit Favourite Repos"
      />
      {repoData ? <RepoCards repoCards={repoData} /> : null}
    </>
  );
};

export default Index;

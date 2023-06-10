import React, { useState } from "react";
import { Item, SearchResponse } from "../types";
import { getLastWeekDate } from "../helpers/helpers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RepoCards from "../components/RepoCards/RepoCards";

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

  if (error) {
    throw new Error();
  }

  if (isLoading) return <p>Loading those repos as fast as we can....</p>;

  return <>{initialData ? <RepoCards repoCards={initialData} /> : null}</>;
};

export default Index;

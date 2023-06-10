import { useEffect, useMemo, useState } from "react";
import { Item } from "../types";
import { RepoCardData } from "../components/RepoCard/RepoCard";

export const CLEAR_FILTERS = "clear-filters";

const useLanguageFilter = <T extends Item | RepoCardData>(data: T[]) => {
  const [repoData, setRepoData] = useState<T[] | null | undefined>(null);
  const [allLanguageFilters, setAllLanguageFilters] = useState<
    (string | null)[]
  >([]);
  const [appliedLanguageFilter, setAppliedLanguageFilter] = useState<
    string | null
  >(CLEAR_FILTERS);

  useEffect(() => {
    const allFilters = [...new Set(data.map(({ language }) => language))];
    setAllLanguageFilters(allFilters);
  }, [data]);

  const filteredData = useMemo(() => {
    if (appliedLanguageFilter !== CLEAR_FILTERS) {
      return data.filter(({ language }) => language === appliedLanguageFilter);
    } else {
      return data;
    }
  }, [appliedLanguageFilter, data]);

  useEffect(() => {
    setRepoData(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  return {
    repoData,
    setAppliedLanguageFilter,
    allLanguageFilters,
    appliedLanguageFilter,
  };
};

export default useLanguageFilter;

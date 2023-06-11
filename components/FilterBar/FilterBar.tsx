import React from "react";
import { FilterButtonsCover } from "./styles";
import { CLEAR_FILTERS } from "../../hooks/useLanguageFilter";
import { Nullable } from "../../types";

export interface FilterBarProps {
  allLanguageFilters: Nullable<string>[];
  appliedLanguageFilter: Nullable<string>;
  setAppliedLanguageFilter: (language: Nullable<string>) => void;
}

const FilterBar = ({
  allLanguageFilters,
  appliedLanguageFilter,
  setAppliedLanguageFilter,
}: FilterBarProps) => {
  return (
    <FilterButtonsCover>
      {allLanguageFilters.map((filter) => (
        <button
          data-cy="filterButton"
          key={filter}
          onClick={() => setAppliedLanguageFilter(filter)}
          aria-label={`Filter by ${filter}`}
          {...(appliedLanguageFilter === filter && { className: "active" })}
        >
          {filter ?? "Unspecified"}
        </button>
      ))}
      <button
        onClick={() => setAppliedLanguageFilter(CLEAR_FILTERS)}
        key={CLEAR_FILTERS}
        aria-label="clear filters"
      >
        Clear filters
      </button>
    </FilterButtonsCover>
  );
};

export default FilterBar;

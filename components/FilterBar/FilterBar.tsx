import React from "react";
import { FilterButtonsCover } from "./styles";
import { CLEAR_FILTERS } from "../../hooks/useLanguageFilter";

export interface FilterBarProps {
  allLanguageFilters: (string | null)[];
  appliedLanguageFilter: string | null;
  setAppliedLanguageFilter: (language: string | null) => void;
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

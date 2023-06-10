import React from "react";
import Link from "next/link";
import { NavBarCover } from "./styles";
import FilterBar from "../FilterBar/FilterBar";

interface NavBarProps {
  allLanguageFilters: (string | null)[];
  appliedLanguageFilter: string | null;
  setAppliedLanguageFilter: (language: string | null) => void;
  href: string;
  destination: string;
}

const NavBar = ({
  allLanguageFilters,
  appliedLanguageFilter,
  setAppliedLanguageFilter,
  href,
  destination,
}: NavBarProps) => {
  return (
    <NavBarCover>
      <Link href={href} aria-label={`Link to ${destination}`}>
        {destination}
      </Link>
      {allLanguageFilters?.length ? (
        <FilterBar
          allLanguageFilters={allLanguageFilters}
          appliedLanguageFilter={appliedLanguageFilter}
          setAppliedLanguageFilter={setAppliedLanguageFilter}
        />
      ) : null}
    </NavBarCover>
  );
};

export default NavBar;

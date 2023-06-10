import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterBar from "./FilterBar";
import { CLEAR_FILTERS } from "../../hooks/useLanguageFilter";

describe("FilterBar", () => {
  const setLanguageFilterMock = jest.fn();
  const filters = ["JavaScript", "Python", "Java"];

  it("renders filters correctly", () => {
    const { getByText } = render(
      <FilterBar
        allLanguageFilters={filters}
        appliedLanguageFilter={null}
        setAppliedLanguageFilter={setLanguageFilterMock}
      />
    );

    filters.forEach((filter) => {
      expect(getByText(filter)).toBeInTheDocument();
    });

    expect(getByText("Clear filters")).toBeInTheDocument();
  });

  it("applies active class to currently selected filter", () => {
    const { getByText } = render(
      <FilterBar
        allLanguageFilters={filters}
        appliedLanguageFilter={"Python"}
        setAppliedLanguageFilter={setLanguageFilterMock}
      />
    );

    expect(getByText("Python")).toHaveClass("active");
  });

  it("handles button click correctly", () => {
    const { getByText } = render(
      <FilterBar
        allLanguageFilters={filters}
        appliedLanguageFilter={null}
        setAppliedLanguageFilter={setLanguageFilterMock}
      />
    );

    fireEvent.click(getByText("Python"));

    expect(setLanguageFilterMock).toHaveBeenCalledWith("Python");
  });

  it("handles clear filters button click correctly", () => {
    const { getByLabelText } = render(
      <FilterBar
        allLanguageFilters={filters}
        appliedLanguageFilter={null}
        setAppliedLanguageFilter={setLanguageFilterMock}
      />
    );

    fireEvent.click(getByLabelText("clear filters"));

    expect(setLanguageFilterMock).toHaveBeenCalledWith(CLEAR_FILTERS);
  });
});

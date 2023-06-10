import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  const mockSetAppliedLanguageFilter = jest.fn();
  const props = {
    allLanguageFilters: ["JavaScript", "Python", "Java"],
    appliedLanguageFilter: "JavaScript",
    setAppliedLanguageFilter: mockSetAppliedLanguageFilter,
    href: "/test",
    destination: "Test destination",
  };

  it("renders destination link correctly", () => {
    const { getByText } = render(<NavBar {...props} />);
    const linkElement = getByText(props.destination);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", props.href);
    expect(linkElement.closest("a")).toHaveAttribute(
      "aria-label",
      `Link to ${props.destination}`
    );
  });

  it("renders FilterBar when there are language filters", () => {
    const { getByText } = render(<NavBar {...props} />);
    const filterElement = getByText(props.appliedLanguageFilter);

    expect(filterElement).toBeInTheDocument();
  });

  it("does not render FilterBar when there are no language filters", () => {
    const { queryByText } = render(
      <NavBar {...props} allLanguageFilters={[]} />
    );

    expect(queryByText(props.appliedLanguageFilter)).not.toBeInTheDocument();
  });
});

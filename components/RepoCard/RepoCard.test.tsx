import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RepoCard from "./RepoCard";

describe("RepoCard", () => {
  const setValueMock = jest.fn();

  const defaultProperties = {
    numOfstars: 10,
    name: "Test Repo",
    numOfForks: 5,
    link: "https://github.com/testrepo",
    language: "JavaScript",
    isFavourite: false,
    setValue: setValueMock,
  };

  it("renders correctly", () => {
    const { getByText, getByRole } = render(
      <RepoCard {...defaultProperties} />
    );

    expect(getByText("Name: Test Repo")).toBeInTheDocument();
    expect(getByText("Stars: 10")).toBeInTheDocument();
    expect(getByText("Forks: 5")).toBeInTheDocument();
    expect(getByText("Language: JavaScript")).toBeInTheDocument();
    expect(getByRole("link", { name: "Visit Repo" })).toHaveAttribute(
      "href",
      "https://github.com/testrepo"
    );
    expect(getByText("Favourite")).toBeInTheDocument();
  });

  it("handles favourite button click correctly", async () => {
    const { getByText } = render(<RepoCard {...defaultProperties} />);

    await userEvent.click(getByText("Favourite"));

    expect(setValueMock).toHaveBeenCalled();
    expect(setValueMock).toHaveBeenCalledWith({
      action: "Add",
      data: {
        language: "JavaScript",
        link: "https://github.com/testrepo",
        name: "Test Repo",
        numOfForks: 5,
        numOfstars: 10,
      },
    });
  });

  it("checks the disabling of favourite button when it has been marked as a favourite", async () => {
    const { getByText } = render(
      <RepoCard {...defaultProperties} isFavourite={true} />
    );

    expect(getByText("Added to Favourites")).toBeDisabled();
  });
});

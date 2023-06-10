import React from "react";
import { render } from "@testing-library/react";
import FavouriteCards from "./FavouriteCards";
import RepoCard from "../RepoCard/RepoCard";

jest.mock("../RepoCard/RepoCard", () => jest.fn());

describe("FavouriteCards", () => {
  const favouriteCardData = [
    {
      numOfstars: 10,
      name: "Test Repo",
      numOfForks: 5,
      link: "https://github.com/testrepo",
      language: "JavaScript",
      isFavourite: true,
    },
    {
      numOfstars: 15,
      name: "Another Test Repo",
      numOfForks: 10,
      link: "https://github.com/anotherTestrepo",
      language: "Python",
      isFavourite: true,
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders no favourite message correctly", () => {
    const { getByText } = render(<FavouriteCards favouriteCardData={[]} />);

    expect(
      getByText("Hmm, you don't seem to have any favourite repos yet")
    ).toBeInTheDocument();
  });

  it("renders RepoCard components correctly", () => {
    render(<FavouriteCards favouriteCardData={favouriteCardData} />);

    // not testing the actual render of RepoCards here as its already been tested in RepoCards.test.js

    expect(RepoCard).toHaveBeenCalledTimes(2);

    favouriteCardData.forEach((props, index) => {
      expect(RepoCard).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          numOfstars: props.numOfstars,
          name: props.name,
          numOfForks: props.numOfForks,
          link: props.link,
          language: props.language,
          isFavourite: true,
        }),
        {}
      );
    });
  });
});

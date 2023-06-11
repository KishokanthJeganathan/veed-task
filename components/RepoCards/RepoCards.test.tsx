import React from "react";
import { render } from "@testing-library/react";
import RepoCards from "./RepoCards";
import RepoCard from "../RepoCard/RepoCard";
import useLocalStorage from "../../hooks/useLocalStorage";

// mocking the RepoCard component here as we dont need to query its actual content (its already done in RepoCard.test.tsx)
jest.mock("../RepoCard/RepoCard", () => jest.fn());
jest.mock("../../hooks/useLocalStorage");

describe("RepoCards", () => {
  const repoCards = [
    {
      stargazers_count: 10,
      name: "Test Repo",
      forks: 5,
      html_url: "https://github.com/testrepo",
      language: "JavaScript",
    },
    {
      stargazers_count: 15,
      name: "Another Test Repo",
      forks: 10,
      html_url: "https://github.com/anotherTestrepo",
      language: "Python",
    },
  ];

  const storedData = [
    {
      numOfstars: 10,
      name: "Test Repo",
      numOfForks: 5,
      link: "https://github.com/testrepo",
      language: "JavaScript",
    },
  ];

  const setValueMock = jest.fn();

  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockImplementation(() => ({
      storedData,
      setValue: setValueMock,
    }));
    (RepoCard as jest.Mock).mockImplementation(({ name }) => <div>{name}</div>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders RepoCard components correctly", () => {
    const { getAllByText } = render(<RepoCards repoCards={repoCards} />);

    expect(getAllByText(/Test Repo|Another Test Repo/)).toHaveLength(2);
  });

  it("passes correct props to RepoCard", () => {
    render(<RepoCards repoCards={repoCards} />);
    expect(RepoCard).toHaveBeenCalledTimes(2);

    repoCards.forEach((repo, index) => {
      expect(RepoCard).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          numOfstars: repo.stargazers_count,
          name: repo.name,
          numOfForks: repo.forks,
          link: repo.html_url,
          language: repo.language,
          setValue: setValueMock,
          isFavourite: repo.name === "Test Repo",
        }),
        {}
      );
    });
  });
});

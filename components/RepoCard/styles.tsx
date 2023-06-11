import styled from "styled-components";

const RepoCardCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.5rem;

  a {
    color: #7badeb;
    text-decoration: underline;
  }

  button {
    margin-top: 1rem;
    border-radius: 1px solid 0.2rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { RepoCardCover };

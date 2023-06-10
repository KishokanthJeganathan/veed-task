import styled from "styled-components";

const FilterButtonsCover = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100vw;

  button {
    font-size: 1rem;
    margin: 0.5rem;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 0.3rem;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      background-color: #7badeb;
      color: white;
    }
  }

  .active {
    cursor: pointer;
    background-color: #7badeb;
    color: white;
  }
`;

export { FilterButtonsCover };

import styled from "styled-components";

const NavBarCover = styled.nav`
  padding: 10px 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7badeb;
  }
`;

export { NavBarCover };

import styled from "styled-components";


export const H1 = styled.h1`
  font-size: 3.2rem;
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.blueMarine};

  @media screen and (max-width: 1000px) {
    font-size: 2.4rem;
  }
`

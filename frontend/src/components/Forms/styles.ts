import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: .5rem;
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`

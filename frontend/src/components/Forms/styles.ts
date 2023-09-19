import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.blueMarine};
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`

export const Form = styled.form`
  margin-top: 4rem;
`


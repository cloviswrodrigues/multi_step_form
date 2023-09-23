import styled from "styled-components"

export const ButtonContainer = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 2.5rem;
  border-radius: .8rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.blueMarine};
`

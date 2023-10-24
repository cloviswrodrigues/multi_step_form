import styled from "styled-components"

export const ButtonContainer = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 2.5rem;
  border-radius: .8rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.blueMarine};
  cursor: pointer;

  &:hover {
    opacity: ${({ type }) => type == 'submit' ? '.5' : '.9'};
  }

  @media screen and (max-width: 1000px) {
    border-radius: .4rem;
  }
`

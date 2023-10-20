import styled from "styled-components"

export const ButtonContainer = styled.button<{ visible: string }>`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  visibility: ${({ visible }) => visible == "true" ? "visible" : "hidden"};

  &:hover {
    color: ${({ theme }) => theme.colors.blueMarine};
  }
`

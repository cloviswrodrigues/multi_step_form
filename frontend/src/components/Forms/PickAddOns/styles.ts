import styled from "styled-components"

export const Fields = styled.div`
  margin-top: 4rem;
`

export const DescriptionCheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueMarine};
    margin-bottom: .4rem;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  small {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.bluePurplish};
  }
`

import styled from "styled-components"

export const Fields = styled.div`
  margin-top: 4rem;

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
  }
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

  @media screen and (max-width: 1000px) {
    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.3rem;
    }

    small {
      font-size: 1.2rem;
    }
  }
`

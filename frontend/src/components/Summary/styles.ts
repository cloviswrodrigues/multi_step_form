import styled from "styled-components"

export const CheckList = styled.div`
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.colors.grayAlabaster};
  padding: 2rem;
  border-radius: 1rem;

  hr {
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    opacity: .5;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
  }
`

export const PlanCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }

  button {
    margin-top: .5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.bluePurplish};
    }
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blueMarine};
  }
`

export const CheckServices = styled.div`
  margin-top: 2rem;

  div {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.blueMarine};
    }
  }
`

export const Total = styled.div`
  margin-top: 2.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.bluePurplish};
  }

  @media screen and (max-width: 1000px) {

    span {
      font-size: 1.6rem;
    }
  }

`

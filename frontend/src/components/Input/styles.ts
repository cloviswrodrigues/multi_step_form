import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.ubuntu};
  color: ${({ theme }) => theme.colors.blueMarine};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font: inherit;
  }

  label, span {
    font: inherit;
  }

  span {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.redStrawberry}
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;

    label {
      margin-bottom: .5rem;
    }

    div {
      margin-bottom: 0;
    }
  }
`

export const InputContainer = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 1.5rem 1.8rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: .8rem;
  font: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.colors.bluePurplish};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ hasError }) => {
    if (hasError) {
      return css`
          border-color: ${({ theme }) => theme.colors.redStrawberry} !important;
          `
    }
  }}

  @media screen and (max-width: 1000px) {
      border-radius: .4rem;
  }
`

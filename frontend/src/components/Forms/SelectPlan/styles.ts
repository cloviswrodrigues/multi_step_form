import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`

export const Fields = styled.div`
  margin-top: 4rem;

  @media screen and (max-width: 1000px) {
    margin-top: 2.5rem;
  }
`

export const RadioButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const LabelRadio = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueMarine};
  }

  span {
    display: inline-block;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
    margin-top: .4rem;
  }

  small {
    display: inline-block;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.blueMarine};
    margin-top: .4rem;
  }

  @media screen and (max-width: 1000px) {
    small {
      display: inherit;
    }
  }
`

export const CheckBoxGroup = styled.div`
  margin-top: 3rem;

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.ubuntu};
  color: ${({ theme }) => theme.colors.blueMarine};

  label {
    display: block;
    margin-bottom: 1rem;
    font: inherit;
  }

  input {
    width: 100%;
    padding: 1.5rem 1.8rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: .8rem;
    font: inherit;

    &:focus {
      border-color: ${({ theme }) => theme.colors.bluePurplish};
    }
  }
`

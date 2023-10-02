import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
    gap: 2.5rem;
    align-items: center;

  label {
    width: 100%;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: .8rem;
    cursor: pointer;

    & > div {
      width: 100%;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.bluePurplish};
    }
  }


  input {
    padding: 1rem;
  }
`

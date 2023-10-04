import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 2.5rem;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: .8rem;
    cursor: pointer;

    & > span {
      display: block;
      width: 2rem;
      height: 2rem;
      border: 1px solid ${({ theme }) => theme.colors.grayLight};
      border-radius: .4rem;
    }

    & > div {
      flex: 1;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.bluePurplish};
    }
  }

  input:checked + label {
    background-color: ${({ theme }) => theme.colors.grayAlabaster};
    border-color: ${({ theme }) => theme.colors.bluePurplish};

    & > span {
      background: ${({ theme }) => theme.colors.bluePurplish};
      border-color: ${({ theme }) => theme.colors.bluePurplish};
    }
  }
`

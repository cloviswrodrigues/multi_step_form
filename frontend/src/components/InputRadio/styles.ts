import styled from "styled-components";

export const CardOption = styled.div`
  width: 14rem;
  min-height: 18rem;

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 2rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: .8rem;
  }

  input:checked + label {
    border-color: ${({ theme }) => theme.colors.bluePurplish};
    background-color: ${({ theme }) => theme.colors.grayAlabaster};
  }
`

export const ImageTop = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    width: 100%;
    height: 100%;
  }
`

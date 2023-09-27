import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.grayAlabaster};
  border-radius: .5rem;

  & > span {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
  }


`

export const Slider = styled.label`
  position: relative;

  input {
    visibility: hidden;
    width: 0;
    height: 0;
  }

  span {
    display: inline-block;
    width: 4rem;
    height: 2.2rem;
    border-radius: 1.2rem;
    padding: .4rem;
    background-color: ${({ theme }) => theme.colors.blueMarine};

    &::before {
      content: '';
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      top: 3px;
      left: 3px;
    }
  }

`



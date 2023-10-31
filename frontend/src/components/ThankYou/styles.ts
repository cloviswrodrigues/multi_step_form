import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12rem;
  text-align: center;

  img {
    width: 8rem;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 5rem;

    img {
      width: 6rem;
      margin-bottom: 2rem;
    }
  }
`

export const ImgCheck = styled.div`
  background: url('../../../assets/images/icon-checkmark.svg') no-repeat center,
`

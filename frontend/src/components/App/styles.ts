import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayMagnolia};
`

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'pagination content';
  column-gap: 10rem;
  grid-template-rows: auto;
  grid-template-columns: 27.4rem auto;
  width: 100%;
  height: 100%;
  max-width: 94rem;
  max-height: 59.8rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 1.5rem;
  padding-right: 8rem;
  box-shadow: 14px 25px 40px -30px rgba(0,0,0,0.2);

  @media screen and (max-width: 1000px) {
    grid-template-areas:
    'pagination'
    'content';

    grid-template-rows: 172px auto;
    grid-template-columns: auto;
    max-width: inherit;
    max-height: inherit;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.grayMagnolia};
  }
`

export const Pagination = styled.div`
  grid-area: pagination;
  background: url('../../../assets/images/bg-sidebar-desktop.svg') no-repeat;
  height: 100%;
  padding: 3rem;
  width: 274px;

  @media screen and (max-width: 1000px) {
    background: url('../../../assets/images/bg-sidebar-mobile.svg') no-repeat;
    background-size: cover;
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 2rem;
    position: relative;
    top: -7rem;

    > div {
      background-color: ${({ theme }) => theme.colors.white};
      padding: 3rem 2rem;
      border-radius: 1rem;
      box-shadow: 14px 25px 40px -30px rgba(0,0,0,0.2);
    }
  }
`


export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    justify-self: flex-end;
  }

  @media screen and (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
  }
`

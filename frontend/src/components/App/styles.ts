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
    'pagination content'
    'pagination navigation';
  column-gap: 10rem;
  grid-template-rows: auto 8rem;
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

  form {
    padding-top: 3rem;
  }

  @media screen and (max-width: 1000px) {
    grid-template-areas:
    'pagination'
    'content'
    'navigation';

    grid-template-rows: 172px auto 80px;
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

export const Navigation = styled.nav`
  grid-area: navigation;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    justify-self: flex-end;
  }

  @media screen and (max-width: 1000px) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
  }
`

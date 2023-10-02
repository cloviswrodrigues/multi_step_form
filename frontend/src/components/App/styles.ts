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
`

export const Pagination = styled.div`
  grid-area: pagination;
  background: url('../../../assets/images/bg-sidebar-desktop.svg') no-repeat;
  height: 100%;
  padding: 3rem;
  width: 274px;
`

export const Content = styled.div`
  grid-area: content;
  flex: 1;
  padding: 3rem 0 2rem 0;
  max-width: 65rem;
`
export const Navigation = styled.nav`
  grid-area: navigation;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

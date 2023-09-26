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
  display: flex;
  gap: 10rem;
  width: 100%;
  height: 100%;
  max-width: 94rem;
  max-height: 59.8rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 1.5rem;
`

export const Navigation = styled.nav`
  background: url('../../../assets/images/bg-sidebar-desktop.svg') no-repeat;
  height: 100%;
  padding: 3rem;
  width: 274px;
`

export const Content = styled.div`
  flex: 1;
  padding: 3rem 8rem 2rem 0;
  max-width: 65rem;
`

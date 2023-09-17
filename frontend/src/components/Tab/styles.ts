import styled, { css } from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`

export const Rounded = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-right: 1.5rem;
  font-family: ${({ theme }) => theme.font.ubuntu};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  ${({ active }) => {
    switch (active) {
      case true:
        return css`
        color: ${({ theme }) => theme.colors.blueMarine};
        background-color: ${({ theme }) => theme.colors.blueLight};
        border-color: ${({ theme }) => theme.colors.blueLight};
        `
      default:
        return null;
    }

  }}
`

export const Step = styled.div`

`

export const Title = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: .2rem;
`

export const SubTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`

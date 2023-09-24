import styled from "styled-components";


export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`

export const InputGroup = styled.div`
  margin-top: 4rem;

  button {
    margin-top: 6rem;
    float: right;
  }
`

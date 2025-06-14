import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65vw;
  margin: 2em auto;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 50px;
  }
`;

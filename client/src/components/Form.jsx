import styled from "styled-components";


const Form = styled.form`
  padding: ${props=> props.$signup || "1em"};
  max-width: 25em;
  width: 100%;
  margin-inline: auto;
  border-radius: .4em;
  grid-column: 2;
  grid-row: 2;
  align-self: center;
`;

export default Form;

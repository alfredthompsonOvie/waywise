/* eslint-disable react/prop-types */

import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8em .5em;
  display: inline-block;
  text-transform: capitalize;

  /* background-color: var(--background-card); */
  /* color: var(--text); */
  background-color: transparent;
  /* color: var(--background-card); */
  color: var(--accent);
  /* color: var(--secondary); */
  /* color: var(--primary); */
  display: flex;
  align-items: center;
  gap: 0.3em;
  border-radius: 0.4em;
  align-self: start;
  /* border: 1px solid white; */
`;
function BackButton() {
  const navigate = useNavigate()
  return (
    <StyledButton onClick={(e) => {
      e.preventDefault();
      // navigate(-1);
      navigate("/app/customers");
    }}>
      <FaLongArrowAltLeft />
      <span>back to list</span>
    </StyledButton>
  );
}

export default BackButton;

/* eslint-disable react/prop-types */

import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8em 1.9em;
  display: inline-block;
  text-transform: capitalize;

  background-color: transparent;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.3em;
  border: 1px solid white;
`;
function BackButton() {
  const navigate = useNavigate()
  return (
    <StyledButton onClick={(e) => {
      e.preventDefault();
      navigate(-1);
    }}>
      <FaLongArrowAltLeft />
      <span>back</span>
    </StyledButton>
  );
}

export default BackButton;

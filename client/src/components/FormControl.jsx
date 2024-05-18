/* eslint-disable react/prop-types */
// import { FaUser } from "react-icons/fa6";

import styled from "styled-components";
import Spinner from "./Spinner";
import { useEffect } from "react";

const FormGroup = styled.section`
width: 100%;

& + & {
  margin-top: 1em;
}
`

const StyledInput = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  border-radius: 0.4em;
  font-size: 1rem;
  border: 2px solid transparent;
  color: var(--background);

  ${({ hasError }) => hasError && `
    border: 2px solid red;

  `}

  &.error {
    border: 2px solid red;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5em;
`

function FormControl({
  label,
  type,
  placeholder,
  defaultValue,
  register,
  errors,
  rules,
  isLoading
})

{
  useEffect(() => {
    // console.log("FORM CONTROL", isLoading)
  }, [isLoading])

  if (isLoading) return <Spinner />
  return (
    <FormGroup>
      <label htmlFor={label}></label>
      <StyledInput
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        {...register(label)}
        defaultValue={defaultValue}
        className={errors[label] ? "error" : ""}
      />
      {errors[label] && <Error>{errors[label].message}</Error>}
    </FormGroup>
  );
}

export default FormControl;

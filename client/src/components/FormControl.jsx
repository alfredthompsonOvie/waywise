/* eslint-disable react/prop-types */

import styled from "styled-components";

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
  error,
  rules,
})
{
  // const hasError = errors[label] !== undefined;
  return (
    <FormGroup>
      <label htmlFor={label}></label>
      <StyledInput
        type={type}
        name={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(label, rules)}
        // hasError={hasError}
      />
      {errors[label] && <Error>{errors[label].message}</Error>}
      {error && <Error>{error}</Error>}
    </FormGroup>
  );
}

export default FormControl;

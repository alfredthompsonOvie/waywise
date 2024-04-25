
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";

import Spinner from "./Spinner";
import { useCustomer } from "../features/useCustomer";

const StyledCustomerDetail = styled.section`
  background-color: #fbe4d8;
  color: #190019;
  padding: 1em;
  border-radius: 0.5em;
`;
const StyledContent = styled.p`
  & + & {
    margin-top: 1em;
  }
  span:last-of-type {
    font-style: italic;
    font-weight: bold;
  }
`;
const StyledLink = styled(Link)`
  margin-top: 1em;
  display: inline-flex;
  align-items: center;
  gap: .3em;
  color: #384358;
`;

function CustomerDetails() {

  const { customer, isLoading } = useCustomer();
  
  console.log(customer);

  
  if (isLoading) return <Spinner />
  
  const { address, email, name, phoneNumber } = customer;

  return (
    <StyledCustomerDetail>
      <StyledContent>
        <span>Name: </span>
        <span>{ name }</span>
      </StyledContent>
      <StyledContent>
        <span>Email: </span>
        <span>{ email }</span>
      </StyledContent>
      <StyledContent>
        <span>Home Address: </span>
        <span>{ address }</span>
      </StyledContent>
      <StyledContent>
        <span>Tel: </span>
        <span>{ phoneNumber }</span>
      </StyledContent>
      <StyledLink to="/app/customers">
        <FaLongArrowAltLeft />
        <span>Back to list</span>
      </StyledLink>
    </StyledCustomerDetail>
  );
}

export default CustomerDetails;

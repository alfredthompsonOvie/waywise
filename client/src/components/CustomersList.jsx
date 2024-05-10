import styled from "styled-components";

import CustomerItem from "./CustomerItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCustomers } from "../features/useCustomers";

const StyledContainer = styled.section`
  max-width: 25em;
  width: 100%;
  margin-inline: auto;
`;

const StyledHeader = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* padding: 1em 0; */
  margin-bottom: 1em;
`;

const StyledTitle = styled.h1`
  font-size: 1em;
  text-transform: capitalize;
  font-style: italic;
  text-align: center;
`;

function CustomersList() {
  const { customers, isLoading, error } = useCustomers();


  // console.log("customers, isLoading, error");
  // console.log(customers, isLoading, error);
  
  if (isLoading) return <Spinner />;
  
  if(error) return <Message message="Sorry our Server is down" $mode="secondary" />
  if (!customers.length)
    return (
      <Message message="Add your first Customer by clicking on a city on the map" />
    );
  
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>list of customers</StyledTitle>
      </StyledHeader>

      <ul>
        {customers.map((customer) => (
          <CustomerItem key={customer._id} customer={customer} />
        ))}
      </ul>
    </StyledContainer>
  );
}

export default CustomersList;

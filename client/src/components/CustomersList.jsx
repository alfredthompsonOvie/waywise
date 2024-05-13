import styled from "styled-components";

import CustomerItem from "./CustomerItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCustomers } from "../features/useCustomers";
import { useState } from "react";

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

  const [currentCustomerId, setCurrentCustomerId] = useState(22);

  function handleActiveCustomer(id) {
    console.log("id: " + id);
    setCurrentCustomerId(id);
  }

  // console.log("customers, isLoading, error");
  // console.log(customers, isLoading, error);

  if (isLoading) return <Spinner />;

  if (error)
    return <Message message="Sorry our Server is down" mode="secondary" />;
  if (!customers.length)
    return (
      <Message message="Add your first Customer by clicking on a city on the map" mode="secondary"/>
    );

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>list of customers {currentCustomerId }</StyledTitle>
      </StyledHeader>

      <ul>
        {customers.map((customer) => (
          <CustomerItem
            key={customer._id}
            customer={customer}
            currentCustomerId={currentCustomerId}
            onActiveCustomer={handleActiveCustomer}
          />
        ))}
      </ul>
    </StyledContainer>
  );
}

export default CustomersList;

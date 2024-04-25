/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { useDeleteCustomer } from "../features/useDeleteCustomer"
import { useState } from "react";
import EditCustomerForm from "./EditCustomerForm";

const StyledItem = styled.li`
  & + & {
    margin-top: 0.5em;
  }
`;

const StyledLink = styled(Link)`
  background-color: #fbe4d8;
  color: #190019;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
`;

const StyledName = styled.h1`
  font-size: 1.15rem;
  text-transform: capitalize;
`;
const StyledAddress = styled.p`
  font-size: 0.95rem;
  text-transform: capitalize;
  font-style: italic;
`;

const ButtonsWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5em;

`;
const StyledButton = styled.button`
  font-size:  ${props => props.$size || "1.2rem"};
  color: ${props => props.$delete || "#190019"};

`;

const Modal = styled.section`
  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(8, 14, 32, 0.8);
  display: grid;
  place-items: center;
  z-index: 999;
`

function CustomerItem({ customer }) {
  const { name, address, _id, position} = customer;
  const { isDeleting, deleteCustomer } = useDeleteCustomer();
  const [isOpen, setIsOpen] = useState(false);

  function handleDelete(e) {
    e.preventDefault();

    deleteCustomer(_id);

  }
  function handleEdit(e) {
    e.preventDefault();

    setIsOpen(true)

  }
  
  return (
    <>
    <StyledItem>
      {/* <StyledLink className={_id === currentCustomer._id ? "active" : ""} to={`${_id}?lat=${position.lat}&lng=${position.lng}`}> */}
      <StyledLink  to={`${_id}?lat=${position.lat}&lng=${position.lng}`}>
        <section>
          <StyledName>{ name }</StyledName>
          <StyledAddress>{ address }</StyledAddress>
        </section>

        <ButtonsWrapper>
          <StyledButton onClick={handleEdit}>
            <FaEdit />
          </StyledButton>

          <StyledButton disabled={isDeleting} $delete="#BF4F74" $size="1.5rem" onClick={handleDelete}>
            <TiDelete />
          </StyledButton>
        </ButtonsWrapper>
      </StyledLink>
      </StyledItem>
      {isOpen && <Modal>
        <EditCustomerForm setIsOpen={ setIsOpen } customer={customer}/>
      </Modal>}
    </>
  );
}

export default CustomerItem;
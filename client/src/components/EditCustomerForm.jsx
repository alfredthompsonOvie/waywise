/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import styled from "styled-components";

import FormControl from "./FormControl";
import FormFooter from "./FormFooter";
import Button from "./Button";
import Form from "./Form";
import FormTitle from "./FormTitle";

import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEditCustomer } from "../features/useEditCustomer.js";

const StyledCustomerForm = styled.section`
  max-width: 25em;
  margin-inline: auto;
`;


function EditCustomerForm({setIsOpen, customer}) {
  const { isEditing, editCustomer } = useEditCustomer();
  const {_id, name, email, address, phoneNumber, position} = customer;
  console.log(customer);
  let userSchema = object({
    name: string().required("Name is required"),
    email: string().required("email is required").email(),
    address: string().required("address is required"),
    phoneNumber: string()
      .matches(/^\+?[1-9]\d{1,12}$/, "Invalid phone number +2348161234567")
      .required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    data = {id:_id, ...data};
    editCustomer(data);

    setIsOpen(false)
  };
  const handleClick = () => {
  setIsOpen(false)
}
  return (
    <StyledCustomerForm>
      <button onClick={handleClick}>
        back
        </button>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle title="Customer Details" />
        <FormControl
          type="text"
          placeholder="Name"
          label="name"
          name="name"
          register={register}
          errors={errors}
          defaultValue={name}
        />
        <FormControl
          type="email"
          placeholder="Email"
          label="email"
          name="email"
          register={register}
          errors={errors}
          defaultValue={email}
        />
        <FormControl
          type="text"
          placeholder="Address"
          label="address"
          name="address"
          register={register}
          errors={errors}
          defaultValue={address}
        />
        <FormControl
          type="tel"
          placeholder="+2348012345678"
          label="phoneNumber"
          name="phoneNumber"
          register={register}
          errors={errors}
          defaultValue={phoneNumber}
        />
        <FormControl
          type="number"
          placeholder="Latitude"
          label="lat"
          name="lat"
          register={register}
          errors={errors}
          defaultValue={position.lat}
        />
        <FormControl
          type="number"
          placeholder="Longitude"
          label="lng"
          name="lng"
          register={register}
          errors={errors}
          defaultValue={position.lng}
        />

        <FormFooter>
          <Button disabled={isEditing}>Submit</Button>
        </FormFooter>
      </Form>
    </StyledCustomerForm>
  );
}

export default EditCustomerForm;

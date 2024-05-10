import { useForm } from "react-hook-form";
import styled from "styled-components";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import BackButton from "./BackButton";
import FormControl from "./FormControl";
import FormFooter from "./FormFooter";
import Button from "./Button";
import Form from "./Form";
import FormTitle from "./FormTitle";

import { useUrlPosition } from "../hooks/useUrlPosition.js";
import { useCreateCustomer } from "../features/useCreateCustomer.js";
import { useEffect, useState } from "react";

const StyledCustomerForm = styled.section`
  max-width: 25em;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;


function CustomerForm() {
  const navigate = useNavigate();
  const [cords, setCords] = useState({});
  const location = useLocation();
  const { isCreating, createCustomer } = useCreateCustomer();

  useEffect(() => { 
    const position = location.search.split("&");

    // console.log("lat: " + position[0].split("=")[1]);
    // console.log("lng: " + position[1].split("=")[1]);
    
    setCords({lat: position[0].split("=")[1], lng: position[1].split("=")[1]})
  },[location]);

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
    createCustomer(data);

    navigate("/app/customers");
  };

  return (
    <StyledCustomerForm>
      <BackButton />
      <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle title="Customer Details" mode="customerDetails"/>
        <FormControl
          type="text"
          placeholder="Name"
          label="name"
          name="name"
          register={register}
          errors={errors}
        />
        <FormControl
          type="email"
          placeholder="Email"
          label="email"
          name="email"
          register={register}
          errors={errors}
        />
        <FormControl
          type="text"
          placeholder="Address"
          label="address"
          name="address"
          register={register}
          errors={errors}
        />
        <FormControl
          type="tel"
          placeholder="+2348012345678"
          label="phoneNumber"
          name="phoneNumber"
          register={register}
          errors={errors}
        />
        <FormControl
          type="number"
          placeholder="Latitude"
          label="lat"
          name="lat"
          register={register}
          errors={errors}
          defaultValue={cords.lat}
        />
        <FormControl
          type="number"
          placeholder="Longitude"
          label="lng"
          name="lng"
          register={register}
          errors={errors}
          defaultValue={cords.lng}
        />

        <FormFooter>
          <Button disabled={isCreating}>Submit</Button>
        </FormFooter>
      </Form>
    </StyledCustomerForm>
  );
}

export default CustomerForm;

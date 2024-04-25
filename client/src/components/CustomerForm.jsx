import { useForm } from "react-hook-form";
import styled from "styled-components";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import BackButton from "./BackButton";
import FormControl from "./FormControl";
import FormFooter from "./FormFooter";
import Button from "./Button";
import Form from "./Form";
import FormTitle from "./FormTitle";

import { useUrlPosition } from "../hooks/useUrlPosition.js";
import { useCreateCustomer } from "../features/useCreateCustomer.js";

const StyledCustomerForm = styled.section`
  max-width: 25em;
  margin-inline: auto;
`;


function CustomerForm() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const { isCreating, createCustomer } = useCreateCustomer();

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
          <FormTitle title="Customer Details" />
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
          defaultValue={lat}
        />
        <FormControl
          type="number"
          placeholder="Longitude"
          label="lng"
          name="lng"
          register={register}
          errors={errors}
          defaultValue={lng}
        />

        <FormFooter>
          <Button disabled={isCreating}>Submit</Button>
        </FormFooter>
      </Form>
    </StyledCustomerForm>
  );
}

export default CustomerForm;

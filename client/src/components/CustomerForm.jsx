import { useForm } from "react-hook-form";
import styled from "styled-components";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";

import BackButton from "./BackButton";
// import FormControl from "./FormControl";
import FormFooter from "./FormFooter";
import Button from "./Button";
import Form from "./Form";
import FormTitle from "./FormTitle";
import Spinner from "./Spinner";
import {forwardGeoCoding } from "../utils/geoCoding"

// import { useUrlPosition } from "../hooks/useUrlPosition.js";
import { useCreateCustomer } from "../features/useCreateCustomer.js";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

const StyledCustomerForm = styled.section`
  max-width: 25em;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FormGroup = styled.section`
  width: 100%;

  & + & {
    margin-top: 1em;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  border-radius: 0.4em;
  font-size: 1rem;
  border: 2px solid transparent;
  color: var(--background);

  ${({ hasError }) =>
    hasError &&
    `
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
`;

function CustomerForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCreating, createCustomer } = useCreateCustomer();
  const { user } = useAuth()
  const [coords, setCoords] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const position = location.search.split("&");
    const lat = Number(position[0].split("=")[1].trim());
    const lng = Number(position[1].split("=")[1].trim());
    console.log("lat and lng: " + lat + "," + lng);
    async function getAddress() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://us1.locationiq.com/v1/reverse?key=pk.e215fb2c3c6c6b6de944e8ded7d8949d&lat=${lat}&lon=${lng}&format=json&`,
        );

        const data = await res.json();

        console.log(data);
        setCustomerAddress(data.display_name);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    getAddress();

    setCoords({
      lat: Number(position[0].split("=")[1].trim()),
      lng: Number(position[1].split("=")[1].trim()),
    });
  }, [location]);

  let userSchema = object({
    name: string().required("Name is required"),
    email: string().required("email is required").email(),
    address: string(),

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

    const address = data.address || customerAddress;
    const lat = data.lat || coords.lat;
    const lng = data.lng || coords.lng;
    const userId = user._id;

    const customerData = { ...data, address, phoneNumber: Number(data.phoneNumber), position: {lat, lng}, userId};

    // console.log("customerData",customerData);
    createCustomer(customerData);

    navigate("/app/customers");
  };

  if (isLoading) return <Spinner customerForm="customerForm" />;

  return (
    <StyledCustomerForm>
      <BackButton />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle title="Customer Details" mode="customerDetails" />
        {/* <FormControl
          type="text"
          placeholder="Name"
          label="name"
          register={register}
          errors={errors}
        /> */}
                {/* <FormControl
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
          register={register}
          errors={errors}
          defaultValue={customerAddress}
          isLoading={isLoading}
        /> 
        <FormControl
          type="tel"
          placeholder="+2348012345678"
          label="phoneNumber"
          register={register}
          errors={errors}
        />
        <FormControl
          type="number"
          placeholder="Latitude"
          label="lat"
          defaultValue={coords.lat}
          register={register}
          errors={errors}
        />
        <FormControl
          type="text"
          placeholder="Longitude"
          label="lng"
          defaultValue={coords.lng}
          register={register}
          errors={errors}
        />
        
        */}


        <FormGroup>
          <label htmlFor="name"></label>
          <StyledInput
            type="text"
            name="name"
            id="name"
            placeholder="name"
            {...register("name")}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="email"></label>
          <StyledInput
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            {...register("email")}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="address"></label>
          <StyledInput
            type="text"
            name="address"
            id="address"
            placeholder="Customer Address"
            defaultValue={customerAddress}
            onBlur={async (e)=> await forwardGeoCoding(e.target.value)}
            // {...register("address", {
            //   setValueAs: () => customerAddress,
            // })}
            // className={errors.address ? "error" : ""}
          />
          {/* {errors.address && <Error>{errors.address.message}</Error>} */}
        </FormGroup>

        <FormGroup>
          <label htmlFor="phoneNumber"></label>
          <StyledInput
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="phoneNumber"
            {...register("phoneNumber")}
            
            className={errors.phoneNumber ? "error" : ""}
          />
          {errors.phoneNumber && <Error>{errors.phoneNumber.message}</Error>}
        </FormGroup>
      
        <FormGroup>
          <label htmlFor="lat"></label>
          <StyledInput
            type="number"
            name="lat"
            id="lat"
            placeholder="lat"
            defaultValue={coords.lat}
            // {...register("lat", {
            //   setValueAs: v => coords.lat,
            // })}
            // className={errors.lat ? "error" : ""}
          />
          {/* {errors.lat && <Error>{errors.lat.message}</Error>} */}
        </FormGroup>
        <FormGroup>
          <label htmlFor="lng"></label>
          <StyledInput
            type="number"
            name="lng"
            id="lng"
            placeholder="lng"
            defaultValue={coords.lng}
            // {...register("lng", {
            //   setValueAs: v => coords.lng,
            // })}
            // className={errors.lng ? "error" : ""}
          />
          {/* {errors.lng && <Error>{errors.lng.message}</Error>} */}
        </FormGroup>
        

        <FormFooter>
          <Button disabled={isCreating}>Submit</Button>
        </FormFooter>
      </Form>
    </StyledCustomerForm>
  );
}

export default CustomerForm;

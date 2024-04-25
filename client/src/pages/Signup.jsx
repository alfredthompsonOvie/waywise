// import { Link } from "react-router-dom";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import FormControl from "../components/FormControl";
import Form from "../components/Form";

import { useForm } from "react-hook-form";
import FormTitle from "../components/FormTitle";
import Button from "../components/Button";

import Cta from "../components/Cta";
import FormFooter from "../components/FormFooter";

import { object, string, ref } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledSignup = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5em auto;
  /* align-items: start; */

  min-height: 100vh;
  background-color: #190019;
`;

function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate();

  let userSchema = object({
    name: string().required("Name is required" ),
    email: string().required("email is required" ).email(),
    address: string().required("address is required"),
    password: string().required("Password is required").min(8).max(16),
    passwordConfirm: string().required('Confirm Password is required').oneOf([ref('password'), null], 'Passwords must match')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(userSchema),
  });



  const onSubmit = async (data) => {
    try {
      await signup(data)
      
      navigate("/app/customers");

    } catch (err) {
      console.log(err)
    }
    console.log(data)
  };

  return (
    <StyledSignup>
      <Navbar />
      <Form onSubmit={handleSubmit(onSubmit)} $signup="2em 0">
        <FormTitle title="Signup" />
        <FormControl
          name="name"
          label="name"
          register={register}
          errors={errors}
          type="text"
          placeholder="Name"
        />
        <FormControl
          name="email"
          label="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Email"
        />
        <FormControl
          name="address"
          label="address"
          register={register}
          errors={errors}
          type="text"
          placeholder="Address"
        />

        <FormControl
          name="password"
          label="password"
          register={register}
          errors={errors}
          type="password"
          placeholder="Password"
        />
        <FormControl
          name="passwordConfirm"
          label="passwordConfirm"
          register={register}
          errors={errors}
          type="password"
          placeholder="Confirm Password"
        />
        <FormFooter>
          <Button>Signup</Button>
          <p>
            Already have an account? <Cta href="/auth/login" content="Login" />
          </p>
        </FormFooter>
      </Form>
    </StyledSignup>
  );
}

export default Signup;

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";

import { useForm } from "react-hook-form";

import FormControl from "../components/FormControl";
import Form from "../components/Form";
import FormFooter from "../components/FormFooter";
import Button from "../components/Button";


import { object, string } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import FormTitle from "../components/FormTitle";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledLogin = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5em calc(100vh - 5em);
  align-items: start;

  min-height: 100vh;
  min-height: 100vh;
`;


function Login() {
  const navigate = useNavigate();
  const { login } = useAuth()
  let userSchema = object({
    email: string().required("email is required" ).email(),
    password: string().required("Password is required").min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(userSchema),
  });



  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await login(email, password)
      
      navigate("/app/customers");

    } catch (err) {
      console.log(err)
    }
  };
  return (
    <StyledLogin>
      <Navbar />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle title="Login" />

        <FormControl
          name="email"
          label="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Email"
        />
        <FormControl
          name="password"
          label="password"
          register={register}
          errors={errors}
          type="password"
          placeholder="Password"
        />

        <FormFooter>
          <Button>Login</Button>
          <p>
            Don&apos;t have an account?{" "}
            <Cta href="/auth/signup" content="Signup" />
          </p>
        </FormFooter>
      </Form>
    </StyledLogin>
  );
}

export default Login;

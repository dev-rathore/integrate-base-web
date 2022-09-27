import { styled } from "baseui";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { useState } from "react";

const FormBox = styled("div", {
  backgroundColor: "rgb(20, 20, 20)",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  padding: "15px 30px 25px",
  height: "100%",
  width: "300px",
  margin: "20px",
  color: "#f4f2ff",
});

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormBox>
      <div>
        <h2 style={{ textAlign: "center" }}>Sign In</h2>
        <FormControl label="Email" caption="User not found">
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </FormControl>
        <FormControl
          label={() => "Password"}
          caption={() => "Incorrect Password"}
        >
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </FormControl>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              console.log(formFields);
              resetFormFields();
            }}
          >
            Sign In
          </Button>
          <p>Don't have an account yet? Sign up</p>
          <p>Forgot your password?</p>
        </div>
      </div>
    </FormBox>
  );
};

export default SignIn;

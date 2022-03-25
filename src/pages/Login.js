import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import BasicContainer from "../components/BasicContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitted = (event) => {
    event.preventDefault();
    if (!(email === "admin@admin.com" && password === "test")) {
      alert("Username atau password salah");
      return;
    }
    const token = "token-dari-server";
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <BasicContainer>
      <Form onSubmit={onSubmitted}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            onChange={onEmailChanged}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            onChange={onPasswordChange}
          />
        </FormGroup>
        <div className="d-flex justify-content-center">
          <Button color="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </BasicContainer>
  );
}

export default Login;

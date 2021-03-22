import React from "react";
import { SignIn } from "./styles";
import { SubTitle } from "../MenuItem/styles";
import FormImputComponent from "../FormInputComponent/FormImputComponent";
import CustomButton from "../CustomButton/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.util";

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignIn>
        <SubTitle>I already have an account</SubTitle>
        <span>Sign in with your e-mail and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormImputComponent
            name="email"
            type="email"
            label="E mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormImputComponent
            name="password"
            type="password"
            label="Pasword"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <CustomButton type="submit" value="submit form">
            SIGN IN
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </span>
          </CustomButton>
        </form>
      </SignIn>
    );
  }
}
export default SignInComponent;

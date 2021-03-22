import React from "react";

import { SignInPage, Section } from "./styles";
import Tabs from "../../components/TabsLogin/TabsLogin";
import SignInComponent from "../../components/SignIn/SignIn";

const SignInPageComponent = () => (
  <SignInPage>
    <h1>SignInPage</h1>
    <Section>
      <Tabs>
        <div label="Log In">
          <SignInComponent></SignInComponent>
        </div>
        <div label="Register">
          <SignInComponent></SignInComponent>
        </div>
      </Tabs>
    </Section>
  </SignInPage>
);
export default SignInPageComponent;

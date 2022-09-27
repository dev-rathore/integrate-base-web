import "./App.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider, styled } from "baseui";

// import SignIn from "./components/sign-in.component";
// import SignUp from "./components/sign-up.component";
import Form from "./components/form.component";

const engine = new Styletron();

const Forms = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <div className="App">
          <h1 style={{ textAlign: "center" }}>Integrate Base Web Cloned</h1>
          {/* <Forms>
            <SignUp />
            <SignIn />
          </Forms> */}
          <Forms>
            <Form type="sign-up" />
            <Form type="sign-in" />
          </Forms>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;

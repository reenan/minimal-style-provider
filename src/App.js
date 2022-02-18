import { css } from "@emotion/css";

import StyleProvider from "./style/StyleProvider";

import Button from "./components/Button";

const App = () => {
  const theme1 = {
    color: "green",
    hover: "blue",
  };

  const theme2 = {
    color: "yellow",
    hover: "pink",
  };

  const overrides1 = {
    Button: css`
      border-radius: 50%;
    `,
  };

  return (
    <>
      <p>Default: </p>
      <StyleProvider>
        <Button />
      </StyleProvider>

      <hr style={{ margin: "15px 0" }} />

      <p>Changing theme: </p>
      <StyleProvider theme={theme1}>
        <Button />
      </StyleProvider>

      <hr style={{ margin: "15px 0" }} />

      <p>Changing overrides: </p>
      <StyleProvider overrides={overrides1}>
        <Button />
      </StyleProvider>

      <hr style={{ margin: "15px 0" }} />

      <p>Changing both: </p>
      <StyleProvider theme={theme2} overrides={overrides1}>
        <Button />
      </StyleProvider>
    </>
  );
};

export default App;

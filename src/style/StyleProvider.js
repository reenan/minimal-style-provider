import { createContext } from "react";

const defaultTheme = {
  color: "red",
  hover: "black",
};

const defaultOverrides = {};

export const StyleContext = createContext({
  theme: defaultTheme,
  overrides: defaultOverrides,
});

const StyleProvider = ({
  children,
  theme = defaultTheme,
  overrides = defaultOverrides,
}) => {
  return (
    <StyleContext.Provider value={{ theme, overrides }}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleProvider;

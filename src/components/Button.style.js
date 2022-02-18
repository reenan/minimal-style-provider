import { css } from "@emotion/css";

const ButtonStyles = ({ theme, overrides }) => ({
  Button: css`
    background-color: ${theme.color};

    &:hover {
      background-color: ${theme.hover};
    }

    ${overrides["Button"]};
  `,
});

export default ButtonStyles;

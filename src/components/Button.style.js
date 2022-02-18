import { css } from "@emotion/css";

const ButtonStyles = ({ theme, overrides }) => ({
  Button: css`
    background-color: ${theme.color};

    &:hover {
      background-color: ${theme.hover};
    }

    > p {
      font-size: 40px;
      ${overrides["Button"]?.paragraph}
    }

    ${overrides["Button"]?.root};
  `,
});

export default ButtonStyles;

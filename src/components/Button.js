import { useContext } from "react";
import { StyleContext } from "../style/StyleProvider";

import useStyles from "./Button.style";

const Button = () => {
  const style = useContext(StyleContext);
  const classes = useStyles(style);

  return <button className={classes.Button}>I'm a button</button>;
};

export default Button;

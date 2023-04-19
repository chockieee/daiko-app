import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

export const AppButton: React.FC<ButtonProps> = (props) => {
  const style = {
    borderRadius: "25px",
    height: "50px",
    fontWeight: "bold",
    fontSize: "1.3rem",
  };

  return (
    <Button {...props} variant="contained" style={style}>
      {props.children}
    </Button>
  );
};

import styled from "@emotion/styled";
import { Chip, ChipProps } from "@mui/material";

interface AppChipProps extends ChipProps {
  status: string;
}

export const AppChip = styled(Chip)((props) => ({
  //   width: "80%",
  //   textAlignLast: "justify",
  //   ...props,
  //   width: "80%",
  //   textAlignLast: "justify",
  //   ...props,
  variant: "outlined",
  size: "large",
}));

export const StatusChip: React.FC<AppChipProps> = (props) => {
  switch (props.status) {
    case "cancel":
      return <AppChip {...props} label="キャンセル" color="error" />;
    case "past":
      return <AppChip {...props} label="完了" color="success" />;
    case "active":
      return <AppChip {...props} label="予約" color="primary" />;
    default:
      return <></>;
  }
};

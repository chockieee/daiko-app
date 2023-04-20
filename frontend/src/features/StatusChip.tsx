import { Chip, ChipProps } from "@mui/material";

interface AppChipProps extends ChipProps {
  status: string;
}

export const StatusChip: React.FC<AppChipProps> = (props) => {
  switch (props.status) {
    case "cancel":
      return <Chip {...props} label="キャンセル" color="error" />;
    case "past":
      return <Chip {...props} label="完了" color="success" />;
    case "active":
      return <Chip {...props} label="予約" color="primary" />;
    default:
      return <></>;
  }
};

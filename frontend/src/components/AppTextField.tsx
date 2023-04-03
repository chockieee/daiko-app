import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const AppTextField: React.FC<{
  control: any;
  item: { [key: string]: any };
}> = ({ control, item }) => {
  if (!item.name) return <></>;
  return (
    <Controller
      name={item.name}
      control={control}
      rules={item.rules}
      render={({ field, fieldState }) => (
        <TextField
          label={item.label}
          {...field}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
          sx={{ my: 1 }}
        />
      )}
    />
  );
};

import { AppTextField } from "@/components/AppTextField";
import { Box, Button, Container, Paper, Tab, Tabs } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  from: string;
  to: string;
  name: string;
  tel: string;
  mail: string;
}

export default function Request() {
  const [tab, setTab] = useState("now");
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      from: "",
      to: "",
      name: "",
      tel: "",
      mail: "",
      date: null,
    },
  });

  const formItems = [
    { name: "name", label: "名前(かな)", rules: { required: true } },
    { name: "tel", label: "電話番号", rules: { required: true } },
    { name: "mail", label: "メールアドレス", rules: { required: true } },
    { name: "from", label: "出発地", rules: { required: true } },
    { name: "to", label: "到着地", rules: { required: true } },
  ];

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("data");
    console.log(data);
    // リクエストAPI呼び出し
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="sm" component={Paper}>
      <Box p={3}>
        <Tabs onChange={handleChange} value={tab}>
          <Tab label="今すぐ" value="now" />
          <Tab label="予約" value="book" />
        </Tabs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" mt={2}>
            {formItems.map((item) => (
              <AppTextField key={item.name} control={control} item={item} />
            ))}
            {tab === "book" && (
              <Controller
                name="date"
                control={control}
                rules={{
                  validate: (val: null | Dayjs) =>
                    val !== null && val.isValid(),
                }}
                render={({ field, fieldState }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      {...field}
                      label="予約日時"
                      ampm={false}
                      format="YYYY / MM / DD HH:mm"
                      slotProps={{
                        textField: {
                          error: fieldState.invalid,
                          helperText: fieldState.error?.message,
                        },
                      }}
                      sx={{ width: 1 / 2, my: 1 }}
                    />
                  </LocalizationProvider>
                )}
              />
            )}

            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button type="submit" variant="contained">
                送信
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

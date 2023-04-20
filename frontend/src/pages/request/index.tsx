import { AppTextField } from "@/components/AppTextField";
import { IShop } from "@/features/ShopMap";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  from: string;
  to: string;
  name: string;
  tel: string;
  mail: string;
  carNo: string;
  carModel: string;
}

export default function Request() {
  const router = useRouter();
  const [tab, setTab] = useState(router.query.tab || "now");
  const [open, setOpen] = useState(false);
  const [shop, setShop] = useState<IShop | undefined>(undefined);
  const shopId = router.query.shop;
  const label = tab === "now" ? "配車" : "予約";
  const {
    trigger,
    handleSubmit,
    formState: { isDirty },
    reset,
    control,
  } = useForm({
    defaultValues: {
      shopId,
      from: "",
      to: "",
      name: "",
      tel: "",
      mail: "",
      carNo: "",
      carModel: "",
      date: null,
    },
  });
  const formItems = [
    { name: "name", label: "名前(かな)", rules: { required: true } },
    { name: "tel", label: "電話番号", rules: { required: true } },
    { name: "mail", label: "メールアドレス", rules: { required: true } },
    { name: "from", label: "出発地", rules: { required: true } },
    { name: "to", label: "到着地", rules: { required: true } },
    { name: "carNo", label: "車のナンバー" },
    { name: "carModel", label: "車種" },
  ];

  useEffect(() => {
    if (!shopId) return;
    axios.get(`http://localhost:8080/api/shops/${shopId}`).then((res) => {
      setShop(res.data);
    });
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    axios
      .post(`http://localhost:8080/api/requests/`, data)
      .then((res) => {
        setOpen(false);
        //　予約履歴詳細ページへ遷移
        router.push(`/logs/${res.data}`);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    reset();
    setTab(newValue);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = async () => {
    const hasNoError = await trigger();
    if (hasNoError) setOpen(true);
  };

  return (
    <Container maxWidth="sm" component={Paper} sx={{ my: 5 }}>
      <Box pt={2}>
        <Tabs variant="fullWidth" onChange={handleChange} value={tab}>
          <Tab label="今すぐ" value="now" disabled={!shop?.isAvailable} />
          <Tab label="予約" value="book" />
        </Tabs>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={3}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" gap={1} my={2}>
              <Chip color="primary" variant="outlined" label={label + "先"} />
              <Typography variant="h6">{shop?.name}</Typography>
            </Box>
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
            <Box my={2} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                fullWidth
                style={{ fontSize: "1.2rem" }}
                onClick={handleOpen}
                disabled={!isDirty}
              >
                {label + "を注文する"}
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
      <Dialog
        onClose={handleClose}
        open={open}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            left: "auto",
            position: "fixed",
            m: "0 0 0 240px",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            mb: 3,
          }}
        >
          {label + "注文確認"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontSize: "1.2rem",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            入力した内容で配車を注文しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 3, gap: 1 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ width: "110px" }}
          >
            キャンセル
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ width: "110px" }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

import { StatusChip } from "@/features/StatusChip";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

type Log = {
  id: string;
  status: string;
  fare: {
    total: number;
    distance: number;
    time: number;
    pickup: number;
    additional: number;
  };
  startTime: string;
  payment: string;
  from: { place: string; time: string };
  to: { place: string; time: string };
  distance: number;
  company: { name: string; address: string; tel: string };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query;
  const res = await axios.get(`http://localhost:8080/api/logs/${id}`);
  return { props: res.data };
};

export default function LogDetail(props: Log) {
  const router = useRouter();
  console.log(props);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  // キャンセルのイベント
  const handleOk = () => {
    axios
      .put(`http://localhost:8080/api/requests/${props.id}/cancel`)
      .then((response) => {
        setOpen(false);
      });
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ my: 5 }}>
        <Box sx={{ p: 2 }} component={Paper}>
          <Box
            sx={{ px: 1, pt: 1, display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography variant="body1">注文番号: {props.id}</Typography>
            <StatusChip
              variant="outlined"
              size="small"
              sx={{ width: "70px" }}
              status={props.status}
            />
          </Box>
          <Box sx={{ py: 2, borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                ¥{props.fare.total}
              </Typography>
            </Box>
            <Box sx={{ px: 2 }}>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>距離料金</Typography>
                <Typography sx={{ width: "80%", textAlign: "right" }}>
                  ¥{props.fare.distance}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>時間料金</Typography>
                <Typography sx={{ width: "80%", textAlign: "right" }}>
                  ¥{props.fare.time}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>回送料金</Typography>
                <Typography sx={{ width: "80%", textAlign: "right" }}>
                  ¥{props.fare.pickup}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "20%" }}>追加料金</Typography>
                <Typography sx={{ width: "80%", textAlign: "right" }}>
                  ¥{props.fare.additional}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              py: 2,
              px: 1,
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            }}
          >
            <Box sx={{ px: 1 }}>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>利用日時</Typography>
                <Typography>{props.startTime}</Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>決済方法</Typography>
                <Typography>{props.payment}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              py: 2,
              px: 1,
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              乗車詳細
            </Typography>
            <Box sx={{ px: 1 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <FmdGoodIcon fontSize="large" />
                <Box>
                  <Typography>{props.from.time}</Typography>
                  <Typography>{props.from.place}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid",
                  height: "50px",
                  mx: 2,
                  pl: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ display: "inline-block" }}>
                  移動距離{props.distance}km
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <FmdGoodIcon fontSize="large" />
                <Box>
                  <Typography>{props.to.time}</Typography>
                  <Typography>{props.to.place}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ py: 2, px: 1 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              会社情報
            </Typography>
            <Box sx={{ px: 1 }}>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>会社名</Typography>
                <Typography>{props.company.name}</Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <Typography sx={{ width: "20%" }}>住所</Typography>
                <Typography>{props.company.address}</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "20%" }}>電話番号</Typography>
                <Typography>{props.company.tel}</Typography>
              </Box>
            </Box>
          </Box>
          {props.status === "active" && (
            <Box sx={{ textAlign: "center", p: 1 }}>
              <Button
                variant="contained"
                fullWidth
                style={{ fontSize: "1.2rem" }}
                onClick={handleOpen}
              >
                予約をキャンセルする
              </Button>
            </Box>
          )}
        </Box>
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
            確認
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                fontSize: "1.2rem",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              予約のキャンセルを実行しますか？
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
              onClick={handleOk}
              sx={{ width: "110px" }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

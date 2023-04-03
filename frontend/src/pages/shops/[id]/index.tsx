import { CurrencyYen, QueryBuilder } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/router";

const data = {
  id: "2",
  name: "テクノ代行",
  time: "１８時～４時　　　 (月は3時、日祝は2時)",
  fee: `初乗り：１kmまで1400円　(会員料金)\n追　加：1kmごとに200円\nその他：※年会費無料　ご利用時にドライバーにお申し付け下さい。当日から会員料金でご利用になれます。`,
};

export default function ShopDetail() {
  const router = useRouter();
  return (
    <>
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "rgba(0, 0, 0, 0.54)" }}>
              <TableRow>
                <TableCell colSpan={2}>
                  <Typography variant="h6" component="p" color="white">
                    {data.name}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" width="5%">
                  <QueryBuilder />
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{data.time}</Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <CurrencyYen />
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {data.fee}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          onClick={() => {
            router.push(`${data.id}/request`);
          }}
        >
          依頼する
        </Button>
      </Container>
    </>
  );
}

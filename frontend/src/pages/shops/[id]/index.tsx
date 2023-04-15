import { CurrencyYen, QueryBuilder } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type ShopDetail = {
  id: string;
  name: string;
  time: string;
  fee: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query;
  const res = await axios.get(`http://localhost:8080/api/shops/${id}`);
  return { props: res.data };
};

export default function ShopDetail(props: ShopDetail) {
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
                    {props.name}
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
                  <Typography variant="body1">{props.time}</Typography>
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
                    {props.fee}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          onClick={() => {
            router.push(`${props.id}/request`);
          }}
        >
          依頼する
        </Button>
      </Container>
    </>
  );
}

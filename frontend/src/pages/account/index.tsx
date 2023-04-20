import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type UserInfo = {
  id: number;
  name: string;
  mail: string;
  tel: string;
  address: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query;
  const res = await axios.get(`http://localhost:8080/api/users/1`);
  return { props: res.data };
};

export default function MyAccount(props: UserInfo) {
  const router = useRouter();
  return (
    <>
      <Container maxWidth="sm" sx={{ my: 5 }}>
        <TableContainer component={Paper} sx={{ p: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">名前</Typography>
                  <Typography variant="h6">{props.name}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">メールアドレス</Typography>
                  <Typography variant="h6">{props.mail}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">電話番号</Typography>
                  <Typography variant="h6">{props.tel}</Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography variant="body1">住所</Typography>
                  <Typography variant="h6">{props.address}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

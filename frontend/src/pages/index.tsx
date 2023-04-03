import { AppTableCell } from "@/components/AppCell";
import { CircleOutlined, Clear } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";

function createData2(id: string, name: string, bookable: boolean) {
  return { id, name, bookable };
}

const rows = [
  createData2("1", "Buddy代行", false),
  createData2("2", "テクノ代行　高松", true),
  createData2("3", "２４代行運転（にーよん）", true),
  createData2("4", "Bダッシュ代行", false),
  createData2("5", "アスター代行", true),
  createData2("6", "ハンドルサービス運転代行", true),
];

export default function Home() {
  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "rgba(0, 0, 0, 0.54)" }}>
            <TableRow>
              <TableCell>
                <Typography variant="h6" component="p" color="white">
                  運転代行一覧
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell sx={{ width: 1 / 6 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <AppTableCell link={`/shops/${row.id}`}>
                  <Typography variant="body1" component="p">
                    {row.name}
                  </Typography>
                </AppTableCell>
                <AppTableCell link={`/shops/${row.id}`}>
                  {row.bookable ? (
                    <CircleOutlined fontSize="small" />
                  ) : (
                    <Clear fontSize="small" />
                  )}
                </AppTableCell>
                <AppTableCell>
                  {row.bookable && (
                    <Link href={`/shops/${row.id}/request`} passHref>
                      <Button variant="contained">依頼する</Button>
                    </Link>
                  )}
                </AppTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

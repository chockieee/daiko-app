import { AppTableCell } from "@/components/AppTableCell";
import { StatusChip } from "@/features/StatusChip";
import { dateFormat } from "@/utils/dateUtils";
import { toCurrency } from "@/utils/numberUtils";
import {
  Container,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import axios from "axios";
import { GetServerSideProps } from "next";

type Log = {
  id: string;
  shopName: string;
  startTime: string;
  userName: string;
  from: string;
  to: string;
  totalFare: number;
  status: string;
};

type Props = { logs: Log[] };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`http://localhost:8080/api/requests?id=1`);
  return { props: { logs: res.data } };
};

export default function LogList(props: Props) {
  const format = "yyyy年MM月dd日";
  const headers = ["", "配車依頼日時", "利用者", "出発地", "到着地", "料金"];
  const getUrl = (logId: string) => {
    return `/logs/${logId}`;
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "rgba(0, 0, 0, 0.54)" }}>
              <TableRow>
                {headers.map((header, index) => (
                  <AppTableCell key={index} style={{ color: "white" }}>
                    {header}
                  </AppTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.logs.map((log, index) => (
                <TableRow key={index} hover>
                  <AppTableCell
                    link={getUrl(log.id)}
                    style={{ textAlign: "center", width: "13%" }}
                  >
                    <StatusChip
                      variant="outlined"
                      sx={{ width: "80%", textAlignLast: "justify" }}
                      status={log.status}
                    />
                  </AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>
                    {dateFormat(log.startTime, format)}
                  </AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>
                    {log.userName}
                  </AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>{log.from}</AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>{log.to}</AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>
                    {toCurrency(log.totalFare)}
                  </AppTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

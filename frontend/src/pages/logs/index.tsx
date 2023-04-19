import { AppTableCell } from "@/components/AppCell";
import { dateFormat } from "@/utils/dateUtils";
import { toCurrency } from "@/utils/numberUtils";
import {
  Chip,
  Container,
  styled,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Log = {
  id: string;
  company: string;
  startTime: string;
  name: string;
  from: string;
  to: string;
  fare: number;
  status: string;
};

type Props = { logs: Log[] };

export const AppChip = styled(Chip)(({ theme }) => ({
  width: "80%",
  textAlignLast: "justify",
}));

const StatusChip: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case "cancel":
      return <AppChip label="キャンセル" variant="outlined" color="error" />;
    case "past":
      return <AppChip label="完了" variant="outlined" color="success" />;
    case "active":
      return <AppChip label="予約" variant="outlined" color="primary" />;
    default:
      return <></>;
  }
};
const format = "YYYY年MM月DD日";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query;
  const res = await axios.get(`http://localhost:8080/api/logs?id=1`);
  return { props: { logs: res.data } };
};

const headers = ["", "配車依頼日時", "利用者", "出発地", "到着地", "料金"];

export default function LogList(props: Props) {
  const router = useRouter();
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
                    <StatusChip status={log.status} />
                  </AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>
                    {dateFormat(log.startTime, format)}
                  </AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>{log.name}</AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>{log.from}</AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>{log.to}</AppTableCell>
                  <AppTableCell link={getUrl(log.id)}>
                    {toCurrency(log.fare)}
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

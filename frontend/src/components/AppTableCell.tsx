import {
  styled,
  TableCell as MuiTableCell,
  TableCellProps,
} from "@mui/material";
import Link from "next/link";

interface Props extends TableCellProps {
  link?: string;
  children?: React.ReactNode;
}

export const TableCell = styled(MuiTableCell)(({ theme, style }) => ({
  ...style,
  fontSize: "1rem",
}));

export const AppTableCell: React.FC<Props> = (props) => {
  return (
    <TableCell {...props}>
      {props.link ? (
        <Link href={props.link} passHref style={{ display: "block" }}>
          {props.children}
        </Link>
      ) : (
        props.children
      )}
    </TableCell>
  );
};

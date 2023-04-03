import { TableCell } from "@mui/material";
import Link from "next/link";

type Props = {
  link?: string;
  children?: React.ReactNode;
};

export const AppTableCell: React.FC<Props> = ({ link, children }) => {
  return (
    <TableCell>
      {link ? (
        <Link href={link} passHref>
          {children}
        </Link>
      ) : (
        children
      )}
    </TableCell>
  );
};

import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const dateFormat = (
  date: string | number | Date,
  format2: string
): string => {
  return format(new Date(date), format2, { locale: ja });
};

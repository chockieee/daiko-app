import { formatToTimeZone } from "date-fns-timezone";

// 日本のタイムゾーンで変換する
export const dateFormat = (date: string, format: string): string => {
  const timeZone = "Asia/Tokyo";
  return formatToTimeZone(date, format, { timeZone });
};

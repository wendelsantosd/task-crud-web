import { parseISO, format as DateFNSFormat } from "date-fns";

export class DateProvider {
  public static format(date: string, format: "dd/MM/yyyy" | "yyyy-MM-dd") {
    const parseDate = parseISO(date);

    return DateFNSFormat(parseDate, format);
  }
}

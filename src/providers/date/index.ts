import { parseISO, format as DateFNSFormat } from "date-fns";

export class DateProvider {
  public static format(date: string | Date, format: "dd/MM/yyyy" | "yyyy-MM-dd") {
    const parseDate = typeof date === 'string' ? parseISO(date) : date;

    return DateFNSFormat(parseDate, format);
  }
}

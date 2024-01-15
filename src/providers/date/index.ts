import { parseISO, format as DateFNSFormat } from "date-fns";

export class DateProvider {
  public static format(date: string) {
    const parseDate = parseISO(date);

    return DateFNSFormat(parseDate, "dd/MM/yyyy");
  }
}

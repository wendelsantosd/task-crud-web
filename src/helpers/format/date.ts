import { DateProvider } from "@/providers/date";

export const formatDate = (date: string | Date, format: "dd/MM/yyyy" | "yyyy-MM-dd"): string => DateProvider.format(date, format);
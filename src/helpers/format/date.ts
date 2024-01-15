import { DateProvider } from "@/providers/date";

export const formatDate = (date: string, format: "dd/MM/yyyy" | "yyyy-MM-dd"): string => DateProvider.format(date, format);
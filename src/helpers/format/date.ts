import { DateProvider } from "@/providers/date";

export const formatDate = (date: string): string => DateProvider.format(date);
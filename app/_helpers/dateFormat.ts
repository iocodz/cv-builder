import { months } from "../_config";

export const dateMMMYYY = (date: Date) => {
  return months[date.getUTCMonth()] + " " + date.getFullYear();
};

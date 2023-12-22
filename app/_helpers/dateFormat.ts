import { months } from "../_config";

export const dateMMMYYY = (dt: string) => {
  const date = new Date(dt);
  return months[date.getUTCMonth()] + " " + date.getFullYear();
};

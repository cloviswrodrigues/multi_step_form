import { Period } from "../types";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatCurrencyPeriod(value: number, period?: Period) {
  const perPeriod = period === Period.Yearly ? 'yr' : 'mo'
  return `$${value}/${perPeriod}`;
}

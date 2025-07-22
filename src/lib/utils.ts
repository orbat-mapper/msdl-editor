import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type NumberFormatOptions = {
  maxDecimals: number;
  units: string;
  undefinedValue: string;
};

export function formatNumber(val?: number, options?: Partial<NumberFormatOptions>) {
  const opts = {
    ...{ units: "", maxDecimals: 3, undefinedValue: "-" },
    ...options,
  } as NumberFormatOptions;
  if (val == undefined) {
    return opts.undefinedValue;
  } else {
    return `${parseFloat(val.toFixed(opts.maxDecimals))}${opts.units}`;
  }
}

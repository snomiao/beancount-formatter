import { format as f } from "./vscode-beancount-formatter/src/format.ts";

export interface FormatOptions {
  prefixWidth?: number;
  numWidth?: number;
  currencyColumn?: number;
  fixedCJKWidth?: boolean;
}

/**
 * Format contents.
 *
 * @param contents Contents waiting to be formatted.
 * @param config format argument
 */
export function format(contents: string, opts?: FormatOptions): string {
  return f(contents, opts);
}

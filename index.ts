import { format as f } from "./vscode-beancount-formatter/src/format.ts";

export interface FormatOptions {
  prefixWidth?: number;
  numWidth?: number;
  currencyColumn?: number;
  fixedCJKWidth?: boolean;
}

/**
 * Format beancount file contents.
 */
export function format(contents: string, opts?: FormatOptions): string {
  return f(contents, opts);
}

/**
 * Read a beancount file, format it, and write it back in place.
 */
export async function formatFile(
  path: string,
  opts?: FormatOptions
): Promise<void> {
  const contents = await Bun.file(path).text();
  const formatted = format(contents, opts);
  await Bun.write(path, formatted);
}

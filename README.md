# beancount-formatter

A JavaScript/TypeScript library for formatting [Beancount](https://beancount.github.io/) files, wrapping [vscode-beancount-formatter](https://github.com/dongfg/vscode-beancount-formatter).

## Install

```bash
npm install @snomiao/beancount-formatter
# or
bun add @snomiao/beancount-formatter
```

## Usage

```typescript
import { format } from "@snomiao/beancount-formatter";

const input = `
2024-01-01 * "Grocery"
  Assets:Checking  -50 USD
  Expenses:Food  50 USD
`;

const output = format(input);
console.log(output);
```

### Options

```typescript
interface FormatOptions {
  prefixWidth?: number;    // indent width for postings
  numWidth?: number;       // numeric column width
  currencyColumn?: number; // column to align currencies
  fixedCJKWidth?: boolean; // treat CJK characters as double-width
}

format(contents: string, opts?: FormatOptions): string
```

## Development

```bash
bun install
bun test
bun run build
```

## License

MIT

## Links

- [npm](https://www.npmjs.com/package/@snomiao/beancount-formatter)
- [GitHub](https://github.com/snomiao/beancount-formatter)
- [Beancount](https://beancount.github.io/)

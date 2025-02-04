# googletag-writer

`googletag-writer` is a simple Node.js utility for writing Google Tag (`gtag.js`) script blocks dynamically.

## Features
- Lightweight – No dependencies, just pure JavaScript.
- Unopinionated – Generates a valid Google Tag script, leaving implementation up to you.
- Flexible – Works in any Node.js environment.
- TypeScript Support – Includes `.d.ts` for type definitions.

## Installation
Install via NPM:
```sh
npm install googletag-writer
```
Or via Yarn:
```sh
yarn add googletag-writer
```

## Usage
### Basic Example
```javascript
const { writeGoogleTagBlock } = require("googletag-writer");

const trackingId = "G-XXXXXXXXXX";
console.log(writeGoogleTagBlock(trackingId));
```
### Output:
```html
<!-- Google Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

## API Reference
### `writeGoogleTagBlock(trackingId: string) -> string`
Generates a Google Tag script block for the provided tracking ID.

| Parameter    | Type     | Description                                      |
|-------------|---------|--------------------------------------------------|
| `trackingId` | `string` | The Google Tag ID (e.g., "G-XXXXXXXXXX"). |

Throws an error if `trackingId` is missing or invalid.

## TypeScript Support
For TypeScript users, this package includes type definitions in `index.d.ts`:
```typescript
declare module "googletag-writer" {
    export function writeGoogleTagBlock(trackingId: string): string;
}
```
No extra setup is required.

## License
This package is open-source and available under the **MIT License**.

## Contributing
If you’d like to contribute, feel free to submit a pull request on GitHub.

## Issues and Support
If you encounter any issues, please report them on the GitHub repository.

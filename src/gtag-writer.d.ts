/**
 * gtag-writer
 * Generates the script tag for Google Tag Manager (gtag.js)
 */

export interface WriteOptions {
    /** Whether to generate a minified version (default: false) */
    minify?: boolean;
}

/**
 * Generates the Google Tag script block.
 * 
 * @param trackingId - Your Google Tag ID (e.g., "G-XXXXXXXXXX").
 * @param options - Configuration options.
 * @returns The complete Google Tag script block.
 * @throws If the tracking ID is missing or invalid.
 */
export declare function write(trackingId: string, options?: WriteOptions): string;

/**
 * Default export for both ESM and CJS compatibility.
 */
declare const _default: { write: typeof write };
export default _default;

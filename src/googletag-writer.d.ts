declare module "googletag-writer" {
    /**
     * Generates the Google Tag (gtag.js) script block.
     * @param trackingId - Your Google Tag ID (e.g., "G-XXXXXXXXXX").
     * @returns The full script block as a string.
     */
    export function writeGoogleTagBlock(trackingId: string): string;
}

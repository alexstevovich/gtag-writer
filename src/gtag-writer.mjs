/**
 * gtag-writer
 * Generates the script tag for Google Tag Manager (gtag.js)
 *
 * @param {string} trackingId - Your Google Tag ID (e.g., "G-XXXXXXXXXX")
 * @param {Object} [options] - Configuration options.
 * @param {boolean} [options.minify=false] - Whether to generate a minified version.
 * @returns {string} - The complete Google Tag script block.
 */
export function write(trackingId, { minify = false } = {}) {
    if (!trackingId || typeof trackingId !== "string") {
        throw new Error("❌ Missing or invalid tracking ID. Provide a valid Google Tag ID.");
    }

    const scriptBlock = `
<!-- Google Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}');
</script>`;

    return minify ? scriptBlock.replace(/\s+/g, " ") : scriptBlock.trim();
}

export default { write };

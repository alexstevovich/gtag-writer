/**
 * googletag-writer
 * Generates the script tag for Google Tag Manager (gtag.js)
 *
 * @param {string} trackingId - Your Google Tag ID (e.g., "G-XXXXXXXXXX")
 * @returns {string} - The complete Google Tag script block
 */
function writeGoogleTagBlock(trackingId) {
    if (!trackingId || typeof trackingId !== "string") {
        throw new Error("❌ Missing or invalid tracking ID. Provide a valid Google Tag ID.");
    }

    return `
<!-- Google Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}');
</script>`.trim();
}

module.exports = { writeGoogleTagBlock };

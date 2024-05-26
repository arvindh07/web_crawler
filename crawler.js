const normalizeUrl = (url) => {
    // strip protocol
    const urlObj = new URL(url);
    console.log("host:path", urlObj.hostname, urlObj.pathname);
    const newUrl = `${urlObj.hostname}${urlObj.pathname}`;
    return newUrl;
}

module.exports = {
    normalizeUrl
}
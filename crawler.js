const {JSDOM} = require("jsdom");

const normalizeUrl = (url) => {
    // strip protocol
    const urlObj = new URL(url);
    const newUrl = `${urlObj.hostname}${urlObj.pathname}`;
    return newUrl;
}

const getLinksFromHtml = (htmlbody, baseUrl) => {
    const urls = [];
    const dom = new JSDOM(htmlbody);
    const anchorTags = dom.window.document.getElementsByTagName("a");
    for (const tag of anchorTags) {
        const link = tag.href;
        if(link.charAt(0) === "/"){
            // relative url -> base url + path
            urls.push(`${baseUrl}${link}`);
        } else{
            // absolute url
            urls.push(link);
        }
    }
    return urls;
}

module.exports = {
    normalizeUrl,
    getLinksFromHtml
}
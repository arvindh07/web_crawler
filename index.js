const { getLinksFromHtml, normalizeUrl } = require("./crawler");

const crawlPage = async (baseUrl, url, pages) => {
    const baseUrlObj = new URL(baseUrl);
    const urlObj = new URL(url);
    if (baseUrlObj.hostname !== urlObj.hostname) {
        return pages;
    }
    const normalizedUrl = normalizeUrl(url);
    if (pages[normalizedUrl] > 0) {
        pages[normalizeUrl]++;
    }
    pages[normalizeUrl] = 1;

    try {
        const response = await fetch(url);
        if (response.status > 399) {
            return pages;
        }
        if (!response.headers.get("content-type").includes("text/html")) {
            return pages;
        }
        const htmlBody = await response.text();
        const links = getLinksFromHtml(htmlBody, urlObj.hostname);
        for (const link of links) {
            pages = await crawlPage(baseUrl, link, pages);
        }
    } catch (error) {
        console.log("error: ", error.message, error);
    }
    return pages;
}

function main() {
    if (process.argv.length < 3) {
        console.log("no url provided");
        console.log("So exiting...");
        process.exit(1);
    } else if (process.argv.length > 3) {
        console.log("cant process multiple urls");
        process.exit(1);
    }
    const pages = crawlPage(process.argv[2], process.argv[2], {});
    for (const page of Object.entries(pages)) {
        console.log("page ", page);
    }
}

main();
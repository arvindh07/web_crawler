const { normalizeUrl, getLinksFromHtml } = require("./crawler");

describe("normalize url testing", () => {
    it("should normalize a url", () => {
        const inputUrl = "http://wagslane.com";
        const expected = "wagslane.com/";
        const actual = normalizeUrl(inputUrl);
        expect(actual).toEqual(expected);
    })
    it("should strip protocol from url", () => {
        const inputUrl = "http://wagslane.com";
        const expected = "wagslane.com/";
        const actual = normalizeUrl(inputUrl);
        expect(actual).toEqual(expected);
    })
})

describe("get links from html body", () => {
    it("get links", () => {
        const htmlBody = `
            <html>
                <body>
                    <a href="http://wagslane.com/path">Link to home</a>
                </body>
            </html>
        `;
        const baseUrl = "http://wagslane.com";
        const expected = ["http://wagslane.com/path"];
        const actual = getLinksFromHtml(htmlBody, baseUrl);
        expect(actual).toEqual(expected);
    })
    it("get relative url", () => {
        const htmlBody = `
            <html>
                <body>
                    <button>
                        <a href="/about">Link to About</a>
                    </button>
                </body>
            </html>
        `;
        const baseUrl = "http://wagslane.com";
        const expected = ["http://wagslane.com/about"];
        const actual = getLinksFromHtml(htmlBody, baseUrl);
        expect(actual).toEqual(expected);
    })
    it("get multiple urls", () => {
        const htmlBody = `
            <html>
                <body>
                    <a href="http://wagslane.com/path">Link to home</a>
                    <button>
                        <a href="/about">Link to About</a>
                    </button>
                </body>
            </html>
        `;
        const baseUrl = "http://wagslane.com";
        const expected = ["http://wagslane.com/path", "http://wagslane.com/about"];
        const actual = getLinksFromHtml(htmlBody, baseUrl);
        expect(actual).toEqual(expected);
    })
})
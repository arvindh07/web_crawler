const {normalizeUrl} = require("./crawler");
// const {describe, it} = require("jest");

describe("normalize url testing", () => {
    it("should normalize a url", () => {
        const inputUrl = "http://wagslane.com";
        const expected = "wagslane.com/";
        const actual = normalizeUrl(inputUrl);
        expect(actual).toBe(expected);
    })
    it("should strip protocol from url", () => {
        const inputUrl = "http://wagslane.com";
        const expected = "wagslane.com/";
        const actual = normalizeUrl(inputUrl);
        expect(actual).toBe(expected);
    })
})
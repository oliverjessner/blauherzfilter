"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _YouTube_blauherzpath;
class YouTube extends SocialMedia {
    constructor(filter, query1, query2) {
        super('youtube', filter, query1, query2);
        _YouTube_blauherzpath.set(this, 'https://www.youtube.com/s/gaming/emoji/7ff574f2/emoji_u1f499.png');
    }
    setDisplay(comments, display) {
        comments.forEach(comment => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const hasString = comment.src === __classPrivateFieldGet(this, _YouTube_blauherzpath, "f");
            if (hasString) {
                // 10 x .parentNode bruh
                const commentContainer = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = comment.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode) === null || _h === void 0 ? void 0 : _h.parentNode;
                if (commentContainer) {
                    commentContainer.style.display = display;
                }
            }
        });
    }
}
_YouTube_blauherzpath = new WeakMap();

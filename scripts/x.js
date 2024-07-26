"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _X_blauherzpath;
class X extends SocialMedia {
    constructor(filter, query1) {
        super('x', filter, query1, undefined);
        _X_blauherzpath.set(this, 'https://abs-0.twimg.com/emoji/v2/svg/1f499.svg');
    }
    setDisplay(comments, display) {
        comments.forEach(comment => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const hasImage = comment.src === __classPrivateFieldGet(this, _X_blauherzpath, "f");
            console.log(comment.src, hasImage);
            if (hasImage) {
                const commentContainer = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode) === null || _h === void 0 ? void 0 : _h.parentNode) === null || _j === void 0 ? void 0 : _j.parentNode;
                commentContainer.style.display = display;
            }
        });
    }
}
_X_blauherzpath = new WeakMap();

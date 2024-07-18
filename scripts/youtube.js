"use strict";
const blauherzpath = 'https://www.youtube.com/s/gaming/emoji/7ff574f2/emoji_u1f499.png';
class YouTube extends SocialMedia {
    constructor(filter, query1, query2) {
        super('youtube', filter, query1, query2);
    }
    setDisplay(comments, display) {
        comments.forEach(comment => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const hasString = comment.src === blauherzpath;
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

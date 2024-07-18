"use strict";
class Instagram extends SocialMedia {
    constructor(filter, query1, query2) {
        super('instagram', filter, query1, query2);
    }
    setDisplay(comments, display) {
        comments.forEach(comment => {
            var _a, _b, _c, _d, _e, _f, _g;
            const hasString = comment.innerText.includes(this.filter);
            if (hasString) {
                // 8 x .parentNode bruh
                const commentContainer = (_g = (_f = (_e = (_d = (_c = (_b = (_a = comment.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode;
                if (commentContainer) {
                    commentContainer.style.display = display;
                }
            }
        });
    }
}

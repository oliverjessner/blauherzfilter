"use strict";
const body = document.querySelector('body');
class TikTok extends SocialMedia {
    constructor(filter, query1, query2) {
        super('tiktok', filter, query1, query2);
    }
    setDisplay(comments, display) {
        comments.forEach(comment => {
            var _a, _b;
            const hasString = comment.innerText.includes(this.filter);
            if (hasString) {
                const commentContainer = (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
                commentContainer.style.display = display;
            }
        });
    }
}

"use strict";
const embeddedCommentsQuery = '.x1lliihq.x1plvlek.xryxfnj';
const lightboxCommentsQuery = '._ap3a._aaco._aacu._aacx._aad7._aade';
class Instagram extends SocialMedia {
    constructor(filter) {
        super('instagram', filter);
    }
    start() {
        const observer = new MutationObserver(() => this.findComments());
        const body = document.querySelector('body');
        observer.observe(body, { attributes: true, childList: true, subtree: true });
        return this.findComments();
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
    toogleComments(comments) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }
        return this.setDisplay(comments, 'block');
    }
    findComments() {
        const comments = [...document.querySelectorAll(embeddedCommentsQuery)];
        const lightboxComments = [...document.querySelectorAll(lightboxCommentsQuery)];
        if (lightboxComments && lightboxComments.length !== 0) {
            return this.toogleComments(lightboxComments);
        }
        if (comments && comments.length !== 0) {
            return this.toogleComments(comments);
        }
    }
}

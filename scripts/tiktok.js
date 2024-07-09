"use strict";
const commentsL1query = '[data-e2e="comment-level-1"]';
const commentsL2query = '[data-e2e="comment-level-2"]';
const body = document.querySelector('body');
class Tiktok extends SocialMedia {
    constructor(filter) {
        super('tiktok', filter);
    }
    start() {
        const initLoadObserver = new MutationObserver(() => {
            const firstComment = body.querySelector(commentsL1query);
            if (firstComment) {
                initLoadObserver.disconnect();
                this.findComments();
                this.setCommentContainerObserver();
            }
        });
        initLoadObserver.observe(body, { attributes: true, childList: true, subtree: true });
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
    toogleComments(comments) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }
        return this.setDisplay(comments, 'block');
    }
    findComments() {
        const commentsL1 = [...document.querySelectorAll(commentsL1query)];
        const commentsL2 = [...document.querySelectorAll(commentsL2query)];
        if (commentsL1 && commentsL1.length !== 0) {
            this.toogleComments(commentsL1);
        }
        if (commentsL2 && commentsL2.length !== 0) {
            return this.toogleComments(commentsL2);
        }
    }
    setCommentContainerObserver() {
        const observer = new MutationObserver(() => this.findComments());
        observer.observe(body, { attributes: true, childList: true, subtree: true });
    }
}

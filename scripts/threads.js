"use strict";
class Threads extends SocialMedia {
    constructor(query1) {
        super(query1, undefined);
    }
    setDisplay(comments, display) {
        comments.forEach(async (comment) => {
            const hasString = await this.findFilterWords(comment);
            if (hasString) {
                // 8 x .parentNode bruh
                const commentContainer = comment.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
                    ?.parentNode?.parentNode;
                if (commentContainer) {
                    commentContainer.style.display = display;
                    commentContainer.setAttribute('data-hidden', 'true');
                }
            }
        });
    }
    unsetDisplay() {
        const commentsContainer = [...document.querySelectorAll('[data-hidden="true"]')];
        commentsContainer.forEach(comment => {
            comment.style.display = 'block';
            comment.removeAttribute('data-hidden');
        });
    }
    toogleComments(comments) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }
        return this.unsetDisplay();
    }
}

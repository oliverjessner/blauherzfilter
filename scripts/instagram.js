"use strict";
class Instagram extends SocialMedia {
    constructor(query1, query2) {
        super(query1, query2);
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
                }
            }
        });
    }
}

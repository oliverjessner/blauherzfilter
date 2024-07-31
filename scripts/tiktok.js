"use strict";
class TikTok extends SocialMedia {
    constructor(query1, query2) {
        super(query1, query2);
    }
    setDisplay(comments, display) {
        comments.forEach(async (comment) => {
            const hasString = await this.findFilterWords(comment);
            if (hasString) {
                const commentContainer = comment?.parentNode?.parentNode?.parentNode;
                commentContainer.style.display = display;
            }
        });
    }
}

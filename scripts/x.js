"use strict";
class X extends SocialMedia {
    #blauherzpath = 'https://abs-0.twimg.com/emoji/v2/svg/1f499.svg';
    constructor(query1) {
        super(query1, undefined);
    }
    setDisplay(comments, display) {
        comments.forEach(async (comment) => {
            const imgs = [...comment.querySelectorAll('img')];
            const hasBlueHeartPicture = imgs.some(img => img.src === this.#blauherzpath);
            const textComment = comment.querySelector('span');
            const hasString = await this.findFilterWords(textComment);
            if (hasString || hasBlueHeartPicture) {
                const commentContainer = comment?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
                    ?.parentNode?.parentNode?.parentNode;
                commentContainer.style.display = display;
            }
        });
    }
}

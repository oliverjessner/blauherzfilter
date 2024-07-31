class YouTube extends SocialMedia {
    #blauherzpath = 'https://www.youtube.com/s/gaming/emoji/7ff574f2/emoji_u1f499.png';

    constructor(query1: string, query2: string | undefined) {
        super(query1, query2);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(async comment => {
            const imgs = [...comment.querySelectorAll('img')];
            const hasBlueHeartPicture = imgs.some(img => img.src === this.#blauherzpath);
            const hasString = await this.findFilterWords(comment);

            if (hasString || hasBlueHeartPicture) {
                const commentContainer = comment.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
                    ?.parentNode as HTMLElement;

                if (commentContainer) {
                    commentContainer.style.display = display;
                }
            }
        });
    }
}

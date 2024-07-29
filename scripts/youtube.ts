class YouTube extends SocialMedia {
    #blauherzpath = 'https://www.youtube.com/s/gaming/emoji/7ff574f2/emoji_u1f499.png';

    constructor(filter: string, query1: string, query2: string | undefined) {
        super(filter, query1, query2);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(comment => {
            const hasString = comment.src === this.#blauherzpath;

            if (hasString) {
                // 10 x .parentNode bruh
                const commentContainer = comment.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
                    ?.parentNode?.parentNode?.parentNode as HTMLElement;

                if (commentContainer) {
                    commentContainer.style.display = display;
                }
            }
        });
    }
}

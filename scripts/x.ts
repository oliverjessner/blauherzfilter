class X extends SocialMedia {
    #blauherzpath = 'https://abs-0.twimg.com/emoji/v2/svg/1f499.svg';

    constructor(filter: string, query1: string) {
        super('x', filter, query1, undefined);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(comment => {
            const hasImage = comment.src === this.#blauherzpath;
            console.log(comment.src, hasImage);
            if (hasImage) {
                const commentContainer = comment?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
                    ?.parentNode?.parentNode?.parentNode?.parentNode as HTMLElement;

                commentContainer.style.display = display;
            }
        });
    }
}

class TikTok extends SocialMedia {
    constructor(query1: string, query2: string) {
        super(query1, query2);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(async comment => {
            const hasString = await this.findFilterWords(comment);

            if (hasString) {
                const commentContainer = comment?.parentNode?.parentNode?.parentNode as HTMLElement;
                commentContainer.style.display = display;
            }
        });
    }
}

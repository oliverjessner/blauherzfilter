class TikTok extends SocialMedia {
    constructor(filter: string, query1: string, query2: string) {
        super('tiktok', filter, query1, query2);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(comment => {
            const hasString = comment.innerText.includes(this.filter);

            if (hasString) {
                const commentContainer = comment?.parentNode?.parentNode?.parentNode as HTMLElement;
                commentContainer.style.display = display;
            }
        });
    }
}

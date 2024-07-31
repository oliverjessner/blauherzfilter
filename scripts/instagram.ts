class Instagram extends SocialMedia {
    constructor(query1: string, query2: string) {
        super(query1, query2);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(async comment => {
            const hasString = await this.findFilterWords(comment);

            if (hasString) {
                // 8 x .parentNode bruh
                const commentContainer = comment.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
                    ?.parentNode?.parentNode as HTMLElement;

                if (commentContainer) {
                    commentContainer.style.display = display;
                }
            }
        });
    }
}

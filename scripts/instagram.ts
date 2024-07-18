class Instagram extends SocialMedia {
    constructor(filter: string, query1: string, query2: string) {
        super('instagram', filter, query1, query2);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string) {
        comments.forEach(comment => {
            const hasString = comment.innerText.includes(this.filter);

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

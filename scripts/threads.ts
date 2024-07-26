class Threads extends SocialMedia {
    constructor(filter: string, query1: string) {
        super('threads', filter, query1, undefined);
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
                    commentContainer.setAttribute('data-hidden', 'true');
                }
            }
        });
    }

    protected unsetDisplay() {
        const commentsContainer = [...document.querySelectorAll('[data-hidden="true"]')] as HTMLElement[];

        commentsContainer.forEach(comment => {
            comment.style.display = 'block';
            comment.removeAttribute('data-hidden');
        });
    }

    protected toogleComments(comments: HTMLInputElement[]) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }

        return this.unsetDisplay();
    }
}

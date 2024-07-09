const commentsL1query: string = '[data-e2e="comment-level-1"]';
const commentsL2query: string = '[data-e2e="comment-level-2"]';
const body = document.querySelector('body') as HTMLBodyElement;

class Tiktok extends SocialMedia {
    constructor(filter: string) {
        super('tiktok', filter);
    }

    start() {
        const initLoadObserver = new MutationObserver(() => {
            const firstComment = body.querySelector(commentsL1query);

            if (firstComment) {
                initLoadObserver.disconnect();
                this.findComments();
                this.setCommentContainerObserver();
            }
        });

        initLoadObserver.observe(body, { attributes: true, childList: true, subtree: true });
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

    protected toogleComments(comments: HTMLInputElement[]) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }

        return this.setDisplay(comments, 'block');
    }

    findComments() {
        const commentsL1 = [...document.querySelectorAll(commentsL1query)] as HTMLInputElement[];
        const commentsL2 = [...document.querySelectorAll(commentsL2query)] as HTMLInputElement[];

        if (commentsL1 && commentsL1.length !== 0) {
            this.toogleComments(commentsL1);
        }
        if (commentsL2 && commentsL2.length !== 0) {
            return this.toogleComments(commentsL2);
        }
    }

    private setCommentContainerObserver() {
        const observer = new MutationObserver(() => this.findComments());
        observer.observe(body, { attributes: true, childList: true, subtree: true });
    }
}

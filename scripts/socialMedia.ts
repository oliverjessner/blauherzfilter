class SocialMedia {
    #commentsQueryL1;
    #commentsQueryL2;
    filter = '';
    name = '';
    active = false;

    getCommentsQueryL1() {
        return this.#commentsQueryL1 || '';
    }

    getCommentsQueryL2() {
        return this.#commentsQueryL2 || '';
    }

    constructor(filter: string, commentsQueryL1: string, commentsQueryL2: string | undefined) {
        this.name = this.constructor.name.toLowerCase();
        this.filter = filter;
        this.#commentsQueryL1 = commentsQueryL1;
        this.#commentsQueryL2 = commentsQueryL2;
    }

    start() {
        setTimeout(() => {
            const observer = new MutationObserver(() => this.findComments());
            const body = document.querySelector('body') as HTMLBodyElement;

            observer.observe(body, { attributes: true, childList: true, subtree: true });
            debug(`[${this.name}]: started`);
            return this.findComments();
        }, 300);
    }

    protected setDisplay(comments: HTMLInputElement[], display: string): void {}

    protected toogleComments(comments: HTMLInputElement[]) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        } else {
            debug(`[this.name]: ${comments.length} comments found`);
        }

        return this.setDisplay(comments, 'block');
    }

    findComments() {
        const commentsL1 = [...document.querySelectorAll(this.getCommentsQueryL1())] as HTMLInputElement[];

        if (commentsL1 && commentsL1.length !== 0) {
            this.toogleComments(commentsL1);
        } else {
            debug(`[${this.name}]: no level1 comments found`);
        }

        if (this.getCommentsQueryL2()) {
            const commentsL2 = [...document.querySelectorAll(this.getCommentsQueryL2())] as HTMLInputElement[];

            if (this.#commentsQueryL2 && commentsL2 && commentsL2.length !== 0) {
                return this.toogleComments(commentsL2);
            } else {
                debug(`[${this.name}]: no level2 comments found`);
            }
        }
    }
}

(globalThis as any).SocialMedia = SocialMedia;

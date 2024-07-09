const embeddedCommentsQuery: string = '.x1lliihq.x1plvlek.xryxfnj';
const lightboxCommentsQuery: string = '._ap3a._aaco._aacu._aacx._aad7._aade';

class Instagram extends SocialMedia {
    constructor(filter: string) {
        super('instagram', filter);
    }

    start() {
        const observer = new MutationObserver(() => this.findComments());
        const body = document.querySelector('body') as HTMLBodyElement;

        observer.observe(body, { attributes: true, childList: true, subtree: true });

        return this.findComments();
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

    protected toogleComments(comments: HTMLInputElement[]) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }

        return this.setDisplay(comments, 'block');
    }

    findComments() {
        const comments = [...document.querySelectorAll(embeddedCommentsQuery)] as HTMLInputElement[];
        const lightboxComments = [...document.querySelectorAll(lightboxCommentsQuery)] as HTMLInputElement[];

        if (lightboxComments && lightboxComments.length !== 0) {
            return this.toogleComments(lightboxComments);
        }
        if (comments && comments.length !== 0) {
            return this.toogleComments(comments);
        }
    }
}

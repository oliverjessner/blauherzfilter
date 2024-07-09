class SocialMedia {
    filter = '';
    name = '';
    active = false;

    constructor(name: string, filter: string) {
        this.name = name;
        this.filter = filter;
    }

    protected setDisplay(comments: HTMLInputElement[], display: string): void {}

    protected toogleComments(comments: HTMLInputElement[]): void {}

    protected findComments(): void {}
}

(globalThis as any).SocialMedia = SocialMedia;

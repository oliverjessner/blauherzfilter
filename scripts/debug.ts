const isDevMode = !('update_url' in chrome.runtime.getManifest());

class Debug {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    log(text: string) {
        if (isDevMode) {
            console.log(`%c [${this.#name}] ${text}`, 'color: #029FE1');
        }
    }
}

"use strict";
const isDevMode = !('update_url' in chrome.runtime.getManifest());
class Debug {
    #name;
    constructor(name) {
        this.#name = name;
    }
    log(text) {
        if (isDevMode) {
            console.log(`%c [${this.#name}] ${text}`, 'color: #029FE1');
        }
    }
}

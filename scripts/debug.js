"use strict";
const isDevMode = !('updateUrl' in chrome.runtime.getManifest());
function debug(text) {
    if (isDevMode) {
        console.log(`%c ${text}`, 'color: #029FE1');
    }
}

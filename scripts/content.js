"use strict";
const emoji = '💙';
const smns = Object.freeze({
    tiktok: new Tiktok(emoji),
    instagram: new Instagram(emoji),
});
const socialMediasNames = Object.keys(smns);
const url = window.location.toString();
const activeSMN = socialMediasNames.find(smn => url.includes(smn));
function start() {
    chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
        smns[request.name].active = request.checked || false;
        smns[request.name].findComments();
        return sendResponse({ status: 'ok' });
    });
    chrome.storage.sync.get(activeSMN, items => {
        const obj = smns[activeSMN];
        obj.active = items[activeSMN] || false;
        if (obj.active) {
            return obj.start();
        }
    });
}
if (activeSMN) {
    start();
}

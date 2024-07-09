type SocialMediaName = 'tiktok' | 'instagram';
type Message = { name: SocialMediaName; checked: boolean };

const emoji: string = '💙';
const smns = Object.freeze({
    tiktok: new Tiktok(emoji),
    instagram: new Instagram(emoji),
});
const socialMediasNames = Object.keys(smns);
const url = window.location.toString();
const activeSMN: SocialMediaName = socialMediasNames.find(smn => url.includes(smn)) as SocialMediaName;

function start() {
    chrome.runtime.onMessage.addListener((request: Message, _, sendResponse) => {
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

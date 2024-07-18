const emoji: string = '💙';
const smns = Object.freeze({
    tiktok: new TikTok(emoji, '[data-e2e="comment-level-1"]', '[data-e2e="comment-level-2"]'),
    instagram: new Instagram(emoji, '.x1lliihq.x1plvlek.xryxfnj', '._ap3a._aaco._aacu._aacx._aad7._aade'),
    youtube: new YouTube(
        emoji,
        'ytd-comment-view-model .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap img',
        undefined,
    ),
});
const socialMediasNames: SocialMediaName[] = Object.keys(smns) as SocialMediaName[];
const url: string = window.location.toString();
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

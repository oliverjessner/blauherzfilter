"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _SocialMedia_commentsQueryL1, _SocialMedia_commentsQueryL2;
class SocialMedia {
    getCommentsQueryL1() {
        return __classPrivateFieldGet(this, _SocialMedia_commentsQueryL1, "f") || '';
    }
    getCommentsQueryL2() {
        return __classPrivateFieldGet(this, _SocialMedia_commentsQueryL2, "f") || '';
    }
    constructor(name, filter, commentsQueryL1, commentsQueryL2) {
        _SocialMedia_commentsQueryL1.set(this, void 0);
        _SocialMedia_commentsQueryL2.set(this, void 0);
        this.filter = '';
        this.name = '';
        this.active = false;
        this.name = name;
        this.filter = filter;
        __classPrivateFieldSet(this, _SocialMedia_commentsQueryL1, commentsQueryL1, "f");
        __classPrivateFieldSet(this, _SocialMedia_commentsQueryL2, commentsQueryL2, "f");
    }
    start() {
        setTimeout(() => {
            const observer = new MutationObserver(() => this.findComments());
            const body = document.querySelector('body');
            observer.observe(body, { attributes: true, childList: true, subtree: true });
            return this.findComments();
        }, 300);
    }
    setDisplay(comments, display) { }
    toogleComments(comments) {
        if (this.active) {
            return this.setDisplay(comments, 'none');
        }
        return this.setDisplay(comments, 'block');
    }
    findComments() {
        const commentsL1 = [...document.querySelectorAll(this.getCommentsQueryL1())];
        if (commentsL1 && commentsL1.length !== 0) {
            this.toogleComments(commentsL1);
        }
        if (this.getCommentsQueryL2()) {
            const commentsL2 = [...document.querySelectorAll(this.getCommentsQueryL2())];
            if (__classPrivateFieldGet(this, _SocialMedia_commentsQueryL2, "f") && commentsL2 && commentsL2.length !== 0) {
                return this.toogleComments(commentsL2);
            }
        }
    }
}
_SocialMedia_commentsQueryL1 = new WeakMap(), _SocialMedia_commentsQueryL2 = new WeakMap();
globalThis.SocialMedia = SocialMedia;

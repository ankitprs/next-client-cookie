"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieForClient = void 0;
const getCookieForClient = (key) => {
    if (!document)
        return undefined;
    const cookies = document.cookie.split('; ');
    const cookieMap = {};
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        cookieMap[name] = value;
    });
    if (!cookieMap[key]) {
        return undefined;
    }
    return { value: cookieMap[key], key: key };
};
exports.getCookieForClient = getCookieForClient;

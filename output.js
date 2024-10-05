//Sat Oct 05 2024 13:19:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function imgsrc(_0x56bf0b, _0x2cc5b2, _0x273bc7) {
  _0x2cc5b2 = "453$asd#4";
  const _0x237a71 = CryptoJS.enc.Utf8.parse(_0x2cc5b2.substring(0, 16));
  _0x2cc5b2 = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(_0x2cc5b2).toString());
  if (_0x273bc7) return CryptoJS.RC4.decrypt(_0x56bf0b, _0x2cc5b2, {
    "iv": _0x237a71,
    "padding": CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8);
  return CryptoJS.RC4.encrypt(_0x56bf0b, _0x2cc5b2, {
    "iv": _0x237a71,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  }).toString();
}
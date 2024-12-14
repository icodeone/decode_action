//Sat Dec 14 2024 03:39:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _hmt = _hmt || [];
var useDevModeDetect = false;
function __jsheckBrowser() {
  var _0x1a49f4 = navigator.userAgent.toLowerCase();
  _0x1a49f4.match(/quark/i) == "quark" && $("body").html("不支持的浏览器，请更换！");
}
function plantformIsComputer() {
  var _0x1f974b = window.navigator.platform;
  var _0x17fee8 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  var _0x18d6ec = ["Win32", "Win64", "Windows", "WinCE"];
  var _0x5941d7 = ["iPad"];
  var _0x22b2df = /ipad/gi.test(navigator.userAgent);
  if (_0x5941d7.indexOf(_0x1f974b) !== -1 || _0x22b2df) {
    return false;
  }
  if (_0x17fee8.indexOf(_0x1f974b) !== -1) {
    return true;
  } else {
    if (_0x18d6ec.indexOf(_0x1f974b) !== -1) {
      return true;
    }
  }
  return false;
}
function devmodedetect() {
  useDevModeDetect && plantformIsComputer() && (window.location.href = "https://www.google.com");
}
function isMobileAccessFun() {
  var _0x34688c = /AppleWebKit.*Mobile/i.test(navigator.userAgent) || /ios|iPad|MQQBrowser|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Opera Mini/.test(navigator.userAgent);
  return _0x34688c;
}
(function () {
  var _0xbc16cf = document.getElementsByTagName("script")[0];
  var _0x36add2 = document.createElement("script");
  _0x36add2.src = "https://www.googletagmanager.com/gtag/js?id=G-T0HJJCQMVV";
  _0x36add2.async = true;
  _0xbc16cf.parentNode.insertBefore(_0x36add2, _0xbc16cf);
  window.dataLayer = window.dataLayer || [];
  function _0x4de982() {
    dataLayer.push(arguments);
  }
  _0x4de982("js", new Date());
  _0x4de982("config", "G-T0HJJCQMVV");
})();
function js_counting() {
  var _0x54e5c2 = "";
  typeof mh_info != "undefined" && (_0x54e5c2 = mh_info.pageid);
  var _0x5e731a = {
    pageId: _0x54e5c2
  };
  var _0x5a905e = {
    url: "/counting",
    type: "post",
    data: _0x5e731a,
    success: function (_0x21bfe2) {},
    complete: function (_0x48787b, _0x725ccd) {
      _0x725ccd == "timeout";
    }
  };
  $.ajax(_0x5a905e);
}
(function () {
  __cad = {};
  __cad.cookie = function (_0xaa4897, _0x4381ef, _0x2a2a27) {
    _0x2a2a27 = _0x2a2a27 || {};
    if (typeof _0x4381ef != "undefined") {
      if (_0x4381ef === null) {
        _0x2a2a27.expires = -1;
      }
      var _0x55705d = new Date();
      if (_0x2a2a27.expires) {
        _0x55705d.setTime(_0x55705d.getTime() + _0x2a2a27.expires * 3600000);
      }
      var _0x249831 = _0xaa4897 + "=" + encodeURIComponent(_0x4381ef) + ";" + "expires=" + _0x55705d.toGMTString() + ";path=/;" + (_0x2a2a27.domain ? "domain=" + _0x2a2a27.domain + ";" : "");
      document.cookie = _0x249831;
    } else {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + _0xaa4897 + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }
  };
  __cad.localStorage = function (_0x140125, _0x318e7c) {
    if (typeof _0x318e7c != "undefined") {
      _0x318e7c === null ? localStorage.removeItem(_0x140125) : localStorage.setItem(_0x140125, _0x318e7c);
    } else {
      return localStorage.getItem(_0x140125);
    }
  };
  __cad.now = new Date();
  __cad.tomorrow = new Date(__cad.now.getFullYear(), __cad.now.getMonth(), __cad.now.getDate() + 1);
  __cad.uA = navigator.userAgent;
  __cad.isMobileAccess = /AppleWebKit.*Mobile/i.test(__cad.uA) || /ios|iPad|MQQBrowser|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Opera Mini/.test(__cad.uA);
  __cad.isIpad = /ipad/gi.test(__cad.uA);
  __cad.isComputer = function () {
    var _0x439260 = window.navigator.platform;
    var _0x20a860 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    var _0x3aacde = ["Win32", "Win64", "Windows", "WinCE"];
    if (_0x20a860.indexOf(_0x439260) !== -1) {
      return true;
    } else {
      if (_0x3aacde.indexOf(_0x439260) !== -1) {
        return true;
      }
    }
    return false;
  };
  __cad.getVType = function () {
    var _0x4ea13a = window.navigator.platform;
    var _0x5953fc = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    var _0x57be99 = ["Win32", "Win64", "Windows", "WinCE"];
    if (_0x5953fc.indexOf(_0x4ea13a) !== -1) {
      return true;
    } else {
      if (_0x57be99.indexOf(_0x4ea13a) !== -1) {
        return true;
      }
    }
    return false;
  };
  if (__cad.cookie("WEBSITE_COUNTRY_TYPE") == null || __cad.cookie("WEBSITE_COUNTRY_TYPE") == "") {
    var _0x531c84 = {
      url: "/getCountryType",
      type: "post",
      success: function (_0x45dfc3) {},
      complete: function (_0x4820e5, _0x7b984b) {}
    };
    $.ajax(_0x531c84);
  }
  __cad.getCountryCode = function () {
    var _0x384588 = __cad.cookie("WEBSITE_COUNTRY_TYPE");
    return _0x384588 == null || _0x384588 == "" ? "US" : _0x384588;
  };
  typeof __jsData != "undefined" && typeof __jsData.excludeCountry != "undefined" && __jsData.excludeCountry != "" && __jsData.excludeCountry.indexOf(__cad.getCountryCode()) != -1 && (window.location.href = "/");
  __cad.countryIsCN = function () {
    var _0x386340 = __cad.getCountryCode();
    return $.inArray(_0x386340, new Array("CN")) != -1 ? true : false;
  };
  __cad.countryIsMainland = function () {
    var _0x5ecd37 = __cad.getCountryCode();
    return $.inArray(_0x5ecd37, new Array("CN")) != -1 ? true : false;
  };
  __cad.isInReadPage = function () {
    return typeof window.C_DATA != "undefined" ? true : false;
  };
  __cad.isInSumPage = function () {
    return typeof window.__jsData != "undefined" && !__cad.isInReadPage() ? true : false;
  };
  if (__cad.isInReadPage()) {
    var _0x2adbeb = "PFP2L1Xxp0fI9l14";
    var _0x21abcc;
    __cad.useCodeIndex = 1;
    try {
      _0x21abcc = window.devtools.jsd(_0x2adbeb, window.devtools.jsc.enc.Base64.parse(window.C_DATA).toString(window.devtools.jsc.enc.Utf8));
      _0x21abcc == "" && (__cad.useCodeIndex = 2, _0x21abcc = window.devtools.jsd("35pRUnW9dUEqZIfP", window.devtools.jsc.enc.Base64.parse(window.C_DATA).toString(window.devtools.jsc.enc.Utf8)));
      window.devtools.jse(_0x21abcc);
    } catch (_0x1eb9d9) {
      __cad.useCodeIndex = 2;
      _0x21abcc = window.devtools.jsd("35pRUnW9dUEqZIfP", window.devtools.jsc.enc.Base64.parse(window.C_DATA).toString(window.devtools.jsc.enc.Utf8));
    }
    window.devtools.jse(_0x21abcc);
    var _0x401f83 = window.devtools.jsc.enc.Base64.parse(window.image_info.urls__direct).toString(window.devtools.jsc.enc.Utf8);
    window.__images_yy = _0x401f83.split("|SEPARATER|");
    window.__specialDisplay = 1;
    !window.image_info.img_type && (window.__specialDisplay = 0);
  }
  __cad.getCookieValue = function () {
    return ["_tka_", "_tkb_"];
  };
  __cad.setCookieValue = function () {
    if (__cad.isInReadPage()) {
      var _0x2542d1 = __cad.getCookieValue();
      var _0x459e3d = mh_info.pageid;
      var _0x117fb8 = _0x2542d1[0] + _0x459e3d.toString();
      var _0x2c3985 = _0x2542d1[1] + _0x459e3d.toString();
      var _0x56cbc2 = "beQkadbtNnH8sP4C";
      var _0x26e35e;
      try {
        _0x26e35e = window.devtools.jsd(_0x56cbc2, window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8));
        _0x26e35e == "" && (_0x26e35e = window.devtools.jsd("mCWBEAgVAd43e3VC", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8)));
        !_0x26e35e.startsWith(mh_info.mhid + "/") && (_0x26e35e = window.devtools.jsd("mCWBEAgVAd43e3VC", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8)));
      } catch (_0x3f616e) {
        _0x26e35e = window.devtools.jsd("mCWBEAgVAd43e3VC", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8));
      }
      var _0x27dfd4 = {
        expires: 0.005
      };
      __cad.cookie(_0x117fb8, _0x26e35e, _0x27dfd4);
      var _0x168950;
      _0x56cbc2 = "ro9Gm57qznsDCncc";
      try {
        _0x26e35e = window.devtools.jsd(_0x56cbc2, window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8));
        _0x26e35e == "" && (_0x26e35e = window.devtools.jsd("UnNNcBjJzhXb5OWa", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8)));
        _0x168950 = parseInt(_0x26e35e);
        String(_0x168950) == "NaN" && (_0x26e35e = window.devtools.jsd("UnNNcBjJzhXb5OWa", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8)));
      } catch (_0x293fbc) {
        _0x26e35e = window.devtools.jsd("UnNNcBjJzhXb5OWa", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8));
      }
      var _0x4679b0 = {
        expires: 0.005
      };
      __cad.cookie(_0x2c3985, _0x26e35e, _0x4679b0);
    }
  };
  __cad.displayAdd = function (_0x30d412, _0x195390, _0x2df746, _0x5cd430, _0x117dd1) {
    var _0x1cc80b = _0x30d412;
    var _0x3dd468 = new Array();
    var _0x783a5f = new Array();
    var _0x3b36b1 = _0x1cc80b.length;
    var _0x5d309c = _0x195390;
    var _0x53eaa3 = _0x2df746;
    var _0x32daaa = -1;
    for (var _0xf1ef6 = 0; _0xf1ef6 < _0x3b36b1; _0xf1ef6++) {
      var _0x2d1ec6 = _0x5d309c + _0x117dd1[_0xf1ef6];
      var _0x1c5e72 = __cad.cookie(_0x2d1ec6);
      if (_0x1c5e72) {
        _0x1c5e72 <= _0x1cc80b[_0xf1ef6] && (_0x3dd468.push(_0x117dd1[_0xf1ef6]), _0x783a5f.push(_0x5cd430[_0xf1ef6]));
      } else {
        _0x3dd468 = new Array();
        _0x3dd468.push(_0x117dd1[_0xf1ef6]);
        _0x783a5f = new Array();
        _0x783a5f.push(_0x5cd430[_0xf1ef6]);
        break;
      }
    }
    if (_0x3dd468.length > 0) {
      var _0x3eed9a = Math.floor(Math.random() * _0x3dd468.length);
      _0x32daaa = _0x3eed9a;
      var _0x2d1ec6 = _0x5d309c + _0x3dd468[_0x3eed9a];
      var _0x4d36b3 = __cad.cookie(_0x2d1ec6);
      if (_0x4d36b3) {
        var _0x936593 = {
          expires: _0x53eaa3
        };
        __cad.cookie(_0x2d1ec6, "" + (parseInt(_0x4d36b3) + 1), _0x936593);
      } else {
        var _0x3c0e62 = {
          expires: _0x53eaa3
        };
        __cad.cookie(_0x2d1ec6, "1", _0x3c0e62);
      }
      document.write(_0x783a5f[_0x32daaa]);
    }
  };
  if (typeof image_info != "undefined") {
    var _0x53211e = mh_info.readmode || 3;
    _0x53211e == 3 && __cad.localStorage("urecord", null);
  }
  if (__cad.cookie("__na") == null) {
    var _0x1c5771 = {
      expires: 24
    };
    __cad.cookie("__na", "N", _0x1c5771);
  }
})();
function showImg(_0x48bb0a, _0x4788f5) {
  var _0x123a59 = "";
  var _0x55e495 = 1;
  while (_0x123a59 == "" || document.getElementById(_0x123a59)) {
    _0x55e495 = Math.floor(Math.random() * 1000000);
    _0x123a59 = "frameimg" + _0x55e495;
  }
  var _0xa0ac48 = "'<img id=\"img" + _0x55e495 + "\" " + (_0x48bb0a == "" ? "" : "src=\\'" + _0x48bb0a + "\\'") + "  style=\"max-width:100%;min-width:150px;cursor:pointer;vertical-align:top;text-align=center;\"/>" + "<style>body{margin:0px; padding:0px;text-align:center;}</style>" + "<script>document.oncontextmenu = function(){return false;}; parent.window.__cr.frameImagebind(\\'img" + _0x55e495 + "\\',\\'" + _0x123a59 + "\\'); window.onload = function() {" + " " + " parent.document.getElementById(\\'frameimg" + _0x55e495 + "\\').height = document.getElementById(\\'img" + _0x55e495 + "\\').height+\\'px\\'; }; window.onresize = function() { parent.document.getElementById(\\'frameimg" + _0x55e495 + "\\').height = document.getElementById(\\'img" + _0x55e495 + "\\').height+\\'px\\'; }</script>'";
  var _0x3108b5 = "window.img" + _0x55e495 + " = " + _0xa0ac48 + ";";
  eval(_0x3108b5);
  document.write("<iframe " + _0x4788f5 + " id=\"" + _0x123a59 + "\" src=\"javascript:parent.img" + _0x55e495 + ";\" frameborder=\"no\" scrolling=\"no\" margin=\"0\" border=\"0\" padding=\"0px\" style=\"max-width: 100%;width:100%;display:block;\" class=\"imageFrameSpecial\"></iframe>");
}
(function () {
  __js = {};
  __js.share = function () {
    $(".fed-play-share,.fed-goto-share").click(function () {
      var _0x7f1d76 = document.title + " 太好看了，快来观赏吧！ " + location.href;
      var _0x4ee6a6 = {
        formType: 2,
        title: "分享链接",
        offset: "45%",
        shadeClose: 1,
        btn: "复制"
      };
      layer.alert(_0x7f1d76, _0x4ee6a6, function () {
        if ($("body").append("<div id=\"fed-link-share\" style=\"position: absolute;left:-200px; color: rgba(0,0,0,0);background-color: transparent\">" + _0x7f1d76 + "</div>"), navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
          window.getSelection().removeAllRanges();
          var _0x2ba1bf = document.getElementById("fed-link-share");
          var _0x4fc56d = document.createRange();
          _0x4fc56d.selectNode(_0x2ba1bf);
          window.getSelection().addRange(_0x4fc56d);
          var _0xb998b7 = document.execCommand("Copy");
          window.getSelection().removeAllRanges();
        } else {
          var _0x1b2f69 = document.getElementById("fed-link-share").innerText;
          var _0x2ba1bf = document.createElement("input");
          _0x2ba1bf.value = _0x1b2f69;
          document.body.appendChild(_0x2ba1bf);
          _0x2ba1bf.select();
          var _0xb998b7 = document.execCommand("Copy");
          _0x2ba1bf.className = "input";
          _0x2ba1bf.style.display = "none";
        }
        _0xb998b7 ? layer.msg("短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友") : layer.msg("短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友");
      });
    });
  };
  __js.errorCommentAdd = function (_0x5b4030) {
    if ($(_0x5b4030).parents("form").find("textarea").val().length == 0) {
      layer.msg("请输入内容！");
      return;
    }
    $.ajax({
      url: "/addComment",
      method: "POST",
      data: $(_0x5b4030).parents("form").serialize() + "&dataPageId=" + __jsData.dataPageId + "&dataId=" + __jsData.dataId,
      success: function (_0x4752e9) {
        $(".fed-comm-tips").text(_0x4752e9.message);
        _0x4752e9.status == "S" && $(_0x5b4030).addClass("fed-btns-disad");
        layer.closeAll("page");
        layer.msg("错误上报成功，我们会尽快查看，谢谢！");
      },
      error: function (_0x2ff3a6, _0x2fc2b3, _0x780527) {
        $(".fed-comm-tips").text("失败，请稍后再试");
      }
    });
  };
  __js.reportReadErrorBack = function () {
    $.get("/reportError", function (_0xc83e2b) {
      layer.open({
        type: 1,
        btn: false,
        id: "report",
        title: "报错",
        content: _0xc83e2b,
        shadeClose: true,
        success: function () {
          $(".fed-play-iframe").addClass("fed-part-left");
          $(".fed-comm-fork .fed-comm-text").val(mh_info.mhname + " " + mh_info.pagename + " 存在问题请检查修复。页面地址：" + location.href);
        },
        cancel: function () {
          $(".fed-play-iframe").removeClass("fed-part-left");
        }
      });
    });
  };
  __js.reportReadError = function () {
    if (typeof image_info != "undefined") {
      if (image_info.line_id == 2 && image_info.local_watch_url != "") {
        var _0x5de6a0 = {
          btn: ["走起，带我飞", "报错，闪开"],
          title: "路线提示"
        };
        layer.confirm("这一集有稳定路线哦，快去看吧！！！", _0x5de6a0, function () {
          window.location.href = image_info.local_watch_url;
        }, function () {
          __js.reportReadErrorBack();
        });
      } else {
        __js.reportReadErrorBack();
      }
    } else {
      __js.reportReadErrorBack();
    }
  };
  __js.reportError = function () {
    layer.msg("如有此页面有问题，您可进入评论页回复。 如果具体漫画集加载不出来，您可以在图片加载失败处点击进行具体报错。");
  };
  __js.changeToDirectLine = function (_0x312890) {
    var _0x3626cb = {
      expires: 1
    };
    __cad.cookie("CN_LINE_CONTROL", "CN_DIRECT" + _0x312890, _0x3626cb);
    layer.msg("已将稳定路线源切换为直连，效果持续 1 小时 ，请手动刷新页面继续观看，谢谢！");
  };
  __js.changeToCNLine = function (_0x40f89f) {
    var _0xa323f5 = {
      expires: 1
    };
    __cad.cookie("CN_LINE_CONTROL", "CN_BASIC", _0xa323f5);
    layer.msg("已将稳定路线源切换为 极速路线，效果持续 1 小时 ，请手动刷新页面继续观看，谢谢！");
  };
  __js.showIndexComment = function (_0x28366d) {
    window.location.href = "/messages?page=" + _0x28366d;
    $(".fed-comm-gbooks").text("提交成功").addClass("fed-btns-disad");
  };
  __js.showComment = function (_0x2d1c81) {
    if (vfed.aid == 4) {
      return;
    }
    $.ajax({
      url: "/getcomment",
      data: {
        dataId: $(".fed-comm-info").attr("data-id"),
        page: _0x2d1c81
      },
      success: function (_0x4ecfca) {
        $(".fed-comm-info").html(_0x4ecfca);
        fed.comment.count(".fed-comm-fort");
        $(".fed-comm-code").attr("src", $(".fed-comm-code").attr("data-role"));
      },
      error: function (_0x119406, _0x5377ac, _0x44b332) {
        $(".fed-comm-info").html("<p class=\"fed-padding\">评论加载失败，<a href=\"javascript:;\" onclick=\"fed.comment.show(1)\">点我刷新</a>...</p>");
      }
    });
  };
  __js.show = function (_0x312719) {
    if (typeof __commentPageing != "undefined" && __commentPageing == "Y") {
      __js.showComment(_0x312719);
    } else {
      var _0x34acfe = __pageBaseUrl.indexOf("?") == -1 ? "?" : "&";
      window.location.href = __pageBaseUrl + _0x34acfe + "page=" + _0x312719;
    }
  };
  __js.addComment = function (_0x34eac7) {
    if ($(_0x34eac7).parents("form").find("textarea").val().length == 0) {
      layer.msg("请输入内容！");
      return;
    }
    var _0xcc633d = $(".fed-comm-info").attr("data-mid");
    var _0x4b2516 = $(".fed-comm-info").attr("data-id");
    var _0x14a1b5 = $(_0x34eac7.parents("form")).serialize();
    typeof __commentPageing != "undefined" && __commentPageing == "Y" && (_0x14a1b5 = _0x14a1b5 + "&dataPageId=" + _0xcc633d + "&dataId=" + _0x4b2516);
    $(_0x34eac7).addClass("fed-btns-disad");
    $.ajax({
      url: "/addComment",
      type: "POST",
      data: _0x14a1b5,
      success: function (_0x54c1bb) {
        $(".fed-comm-tips").text(_0x54c1bb.message);
        layer.msg(_0x54c1bb.message);
        if (_0x54c1bb.status == "S") {
          if (typeof __commentPageing != "undefined" && __commentPageing == "Y") {
            layer.closeAll("page");
            layer.msg("已成功记录，显示有延迟，请稍后查看，谢谢！");
            if (_0xcc633d == null || _0xcc633d == "") {
              typeof __globalPageingCurrentPage != "undefined";
            }
          } else {
            layer.closeAll("page");
            layer.msg("已成功记录，显示有延迟，请稍后查看，谢谢！");
          }
        }
      },
      error: function (_0x4be4c2, _0x5b1074, _0x294fb9) {
        $(".fed-comm-tips").text("失败，请稍后再试");
        $(_0x34eac7).removeClass("fed-btns-disad");
      },
      complete: function (_0xd54ccd, _0x3566fa) {}
    });
  };
  __js.ajaxBindJump = function () {
    $(".show-page-jump").click(function () {
      var _0x4fc873 = parseInt($(".fed-page-info input").val());
      __js.show(_0x4fc873);
    });
  };
  __js.initTab = function (_0x5b5c04, _0x5bb1be) {
    $(_0x5b5c04).click(function () {
      $(_0x5b5c04).removeClass("fed-back-green");
      $(this).addClass("fed-back-green");
      $(_0x5bb1be).removeClass("fed-visible");
      $(_0x5bb1be).addClass("fed-hidden").hide();
      $(_0x5bb1be).eq($(this).parent().index()).fadeIn().addClass("fed-visible").removeClass("fed-hidden");
    });
  };
  __js.isopenorclose = 0;
  __js.displayByAll = function () {
    __js.isopenorclose == 0 ? (__js.isopenorclose = $(".all_data_list").css("height"), $(".all_data_list").css("height", "auto"), $(".website-display-all").html("收 缩")) : ($(".all_data_list").css("height", __js.isopenorclose), __js.isopenorclose = 0, $(".website-display-all").html("展 开"));
  };
  __js.watch_his = {};
  __js.watch_his.clear = function () {
    __cad.localStorage("site_urecord", null);
    $(".fed-pops-record ul").html("<li class=\"fed-part-rows fed-line-bottom\"><a class=\"fed-part-eone\" href=\"javascript:;\">已清空观看记录</a></li>");
  };
  __js.watch_his.add = function () {
    var _0xf17e2e = __cr.thispage;
    var _0x4da009 = "[['" + mh_info.webPath + "','" + mh_info.mhname.replace("'", "\\'") + "','" + mh_info.pageurl + "','" + mh_info.pagename.replace("'", "\\'") + "','" + new Date().getTime() + "','" + _0xf17e2e + "']";
    var _0x49cb72 = __cad.localStorage("site_urecord") || [];
    $.each(eval(_0x49cb72), function (_0x1ea153, _0xbcd396) {
      if (_0x1ea153 >= 10) {
        return false;
      }
      _0xbcd396[0] != mh_info.webPath && (_0x4da009 += ",['" + _0xbcd396.join("','") + "']");
    });
    _0x4da009 += "]";
    __cad.localStorage("site_urecord", _0x4da009);
  };
  __js.watch_his.show = function (_0x1e4daf) {
    try {
      var _0x11fd92 = __cad.localStorage("site_urecord");
      var _0x2f09d9 = "";
      !_0x11fd92 || _0x11fd92 == "null" ? _0x2f09d9 += "<li class=\"fed-part-rows fed-line-bottom\"><a class=\"fed-part-rows\" href=\"javascript:;\">暂无观看记录</a></li>" : $.each(eval(_0x11fd92), function (_0x594629, _0x32dc01) {
        _0x2f09d9 += "<li class='fed-part-rows fed-line-bottom'>\n    <div class='fed-part-rows'>\n        <span class='fed-part-eone fed-col-xs9'><a href='" + _0x32dc01[0] + "'>" + _0x32dc01[1] + "</a>" + "<span class='fed-text-muted'>" + "<a href='" + _0x32dc01[0] + "" + _0x32dc01[2] + "' title='" + _0x32dc01[3] + "'>[" + _0x32dc01[3] + "]</a>" + "</span></span>\n" + "        <span class='fed-part-eone fed-text-muted fed-text-right fed-col-xs3'>" + date2str(_0x32dc01[4], "MM.dd") + "</span>\n" + "    </div>\n" + "</li>\n";
      });
      $(_0x1e4daf).append(_0x2f09d9);
    } catch (_0x213c38) {
      __js.watch_his.clear();
    }
  };
  __js.user = {};
  __js.user.userHaveLogin = function () {
    return __cad.cookie("login_cookie") == null || __cad.cookie("login_cookie") == "" ? false : true;
  };
  __js.user.addToFav = function () {
    if (!__js.user.userHaveLogin()) {
      layer.msg("请先登录！");
      return;
    }
    var _0x576f25 = __jsData.dataId;
    var _0x3f154a = {
      dataId: _0x576f25
    };
    $.ajax({
      url: "/dynamic/user/addToFav",
      method: "POST",
      data: _0x3f154a,
      success: function (_0x953ddb) {
        "S" == _0x953ddb.status ? layer.msg("添加成功，可进入用户界面查看") : layer.msg(_0x953ddb.message);
      },
      error: function (_0x3f73e5, _0x1b14b4, _0x33e368) {
        layer.msg("网络连接错误，请稍后重试！");
      }
    });
  };
  __js.user.binding = function (_0x424aa6, _0x254ed8) {
    $(_0x424aa6).click(function () {
      if ($(this).hasClass("website-email-validate")) {
        var _0x23cafc = "";
        _0x23cafc = _0x23cafc + __js.user.getEmailInputError("emailAddress");
        if (_0x23cafc != "") {
          $(".fed-user-tips").text(_0x23cafc);
          return;
        }
      }
      $(this).addClass(_0x254ed8).text("loading...");
      $.ajax({
        url: $(".fed-user-form").attr("data-role"),
        method: "POST",
        data: $(".fed-user-form").serialize(),
        success: function (_0x269a2f) {
          if ("S" == _0x269a2f.status) {
            var _0x507b0d = 60;
            var _0x3b58dd = setInterval(function () {
              0 == _0x507b0d ? ($(_0x424aa6).removeClass(_0x254ed8).text("获取验证码"), clearInterval(_0x3b58dd)) : $(_0x424aa6).addClass(_0x254ed8).text("重新获取(" + _0x507b0d-- + ")");
            }, 1000);
          } else {
            $(_0x424aa6).removeClass(_0x254ed8).text("获取验证码");
            $(".fed-user-tips").text(_0x269a2f.message);
          }
        },
        error: function (_0x2aabb1, _0x30d900, _0x1fb859) {
          $(".fed-user-tips").text("失败，请稍后再试");
          $(_0x424aa6).removeClass(_0x254ed8).text("获取验证码");
        }
      });
    });
  };
  __js.user.getEmailInputError = function (_0x2dcafd) {
    var _0x431ef8 = "";
    var _0x2aa906 = /^[\w]+@[\w]+\.[a-zA-Z]{2,6}$/;
    var _0x5b70f4 = $("input[name='" + _0x2dcafd + "']").val();
    !_0x2aa906.test(_0x5b70f4) && (_0x431ef8 = _0x431ef8 + "email录入错误，请检查");
    return _0x431ef8;
  };
  __js.user.getVerfyCodeInputError = function (_0x24b3d8) {
    var _0x5bfecf = "";
    !$("input[name='" + _0x24b3d8 + "']").val() && (_0x5bfecf = _0x5bfecf + "请输入验证码");
    return _0x5bfecf;
  };
  __js.user.getUserNameInputError = function (_0x983120) {
    var _0x2954ed = "";
    var _0x77ba1f = $("input[name='" + _0x983120 + "']").val();
    !/^\w+$/i.test(_0x77ba1f) && (_0x2954ed = _0x2954ed + "账号请使用字母、数字或下划线！");
    return _0x2954ed;
  };
  __js.user.passwordMustInputError = function (_0x28104a) {
    var _0x24ff13 = "";
    var _0x5a7efc = $("input[name='" + _0x28104a + "']").val();
    !_0x5a7efc && (_0x24ff13 = _0x24ff13 + "请输入密码！");
    return _0x24ff13;
  };
  __js.user.doublePasswordInputError = function (_0x47535d, _0x396aee) {
    var _0x4fc32f = "";
    var _0x21dca2 = $("input[name='" + _0x47535d + "']").val();
    var _0xc7ffa4 = $("input[name='" + _0x396aee + "']").val();
    _0x21dca2 != _0xc7ffa4 && (_0x4fc32f = _0x4fc32f + "两次密码输入不一致！");
    return _0x4fc32f;
  };
  __js.user.handle_click = function (_0x5d70a9) {
    var _0x5e6bb4 = $(".fed-user-form").attr("data-jump") == undefined ? location.href : $(".fed-user-form").attr("data-jump");
    $(_0x5d70a9).click(function () {
      var _0x12a142 = "";
      if (_0x5d70a9 == ".fed-subm-regis") {
        _0x12a142 = _0x12a142 + __js.user.getUserNameInputError("user_name");
        _0x12a142 = _0x12a142 + __js.user.passwordMustInputError("user_pwd");
        _0x12a142 = _0x12a142 + __js.user.doublePasswordInputError("user_pwd", "user_pwd2");
        _0x12a142 = _0x12a142 + __js.user.getVerfyCodeInputError("verifyCode");
        if (_0x12a142 != "") {
          $(".fed-user-tips").text(_0x12a142);
          return;
        }
      }
      if (_0x5d70a9 == ".fed-subm-login") {
        !$("input[name='user_name']").val() && (_0x12a142 = _0x12a142 + "请录入用户名!");
        _0x12a142 = _0x12a142 + __js.user.passwordMustInputError("user_pwd");
        _0x12a142 = _0x12a142 + __js.user.getVerfyCodeInputError("verifyCode");
        if (_0x12a142 != "") {
          $(".fed-user-tips").text(_0x12a142);
          return;
        }
      }
      if (_0x5d70a9 == ".fed-subm-finds") {
        _0x12a142 = _0x12a142 + __js.user.getEmailInputError("emailAddress");
        _0x12a142 = _0x12a142 + __js.user.passwordMustInputError("user_pwd");
        _0x12a142 = _0x12a142 + __js.user.doublePasswordInputError("user_pwd", "user_pwd2");
        _0x12a142 = _0x12a142 + __js.user.getVerfyCodeInputError("verifyCode");
        _0x12a142 = _0x12a142 + __js.user.getVerfyCodeInputError("emailCode");
        if (_0x12a142 != "") {
          $(".fed-user-tips").text(_0x12a142);
          return;
        }
      }
      if (_0x5d70a9 == ".fed-subm-infos") {
        _0x12a142 = _0x12a142 + __js.user.doublePasswordInputError("user_pwd", "user_pwd2");
        var _0x1526bc = $("input[name='secureQuestion']").val();
        var _0x1a4782 = $("input[name='secureAnswer']").val();
        (_0x1526bc || _0x1a4782) && (!_0x1526bc || !_0x1a4782) && (_0x12a142 = _0x12a142 + "请补充密保信息！");
        if (_0x12a142 != "") {
          $(".fed-user-tips").text(_0x12a142);
          return;
        }
      }
      if (_0x5d70a9 == ".fed-subm-binds") {
        _0x12a142 = _0x12a142 + __js.user.getEmailInputError("emailAddress");
        _0x12a142 = _0x12a142 + __js.user.getVerfyCodeInputError("verifyCode");
        if (_0x12a142 != "") {
          $(".fed-user-tips").text(_0x12a142);
          return;
        }
      }
      var _0x52e3a6 = $(".fed-user-form").serialize();
      _0x5d70a9 == ".website-make-order" && (_0x52e3a6 = {
        orderType: $("#orderType").val(),
        payType: payType
      });
      $.post($(".fed-user-form").attr("action"), _0x52e3a6, function (_0x29a93a) {
        _0x29a93a.status == "S" ? ($(".fed-user-tips").text(_0x29a93a.message), layer.msg(_0x29a93a.message), _0x5d70a9 == ".website-make-order" && payType == "Alipay" && (_0x5e6bb4 = "/dynamic/user/alipay/" + _0x29a93a.data.orderId), _0x5d70a9 == ".fed-subm-regis" || _0x5d70a9 == ".fed-subm-finds" ? ($(".fed-user-tips").text(_0x29a93a.message + " 将转至登录界面"), layer.msg(_0x29a93a.message + " 将转至登录界面"), setInterval(function () {
          window.location.href = _0x5e6bb4;
        }, 2000)) : window.location.href = _0x5e6bb4) : ($(".fed-user-tips").text(_0x29a93a.message), $(".fed-user-code").click());
      }).fail(function (_0xea87a0, _0x42cad6, _0x497124) {
        $(".fed-user-tips").text("网络连接失败，请稍后再试！");
      });
    });
  };
  __js.user.userLoginValidation = function () {
    !__js.user.userHaveLogin() && (window.location.href = "/user/login");
  };
  __js.user.clearAllUserCookie = function () {
    __cad.cookie("user_name", null);
    __cad.cookie("user_id", null);
    __cad.cookie("login_cookie", null);
    __cad.cookie("display_name", null);
    __cad.cookie("USER_GLOBAL_FLAG", null);
    __cad.cookie("last_login_check", null);
  };
  __js.user.logout = function () {
    $.post("dynamic/user/logout");
    __js.user.clearAllUserCookie();
    window.location.href = "/user/login";
  };
  __js.upload = {
    selectImg: function (_0x522207) {
      if (!_0x522207.files || !_0x522207.files[0]) {
        return;
      }
      var _0x2e4ce1 = new FileReader();
      _0x2e4ce1.onload = function (_0x3042bf) {
        var _0x5dab95 = _0x3042bf.target.result;
        $("#tailoringImg").cropper("replace", _0x5dab95, false);
      };
      _0x2e4ce1.readAsDataURL(_0x522207.files[0]);
    },
    closeTailor: function () {
      $(".tailoring-container").toggle();
    }
  };
  __js.read = {};
  __js.read.imageLoadError = function () {};
  __js.mask = {};
  __js.mask.show = function () {
    if (!$(".WEBSITE_LOADING_MASK").length) {
      var _0x4b67df = "<div class=\"WEBSITE_LOADING_MASK\" >\n        <img src=\"/common/mask_loading.gif\" alt=\"图片加载中···\" />\n</div>";
      $("body").append(_0x4b67df);
    }
    var _0x154045 = $(".WEBSITE_LOADING_MASK");
    _0x154045.css("width", "100%");
    _0x154045.css("display", "block");
    _0x154045.css("height", $(window).height() + $(window).scrollTop());
    $(".WEBSITE_LOADING_MASK img").css("display", "block");
    $(".WEBSITE_LOADING_MASK img").css("left", ($(window).width() - 88) / 2);
    $(".WEBSITE_LOADING_MASK img").css("top", ($(window).height() + $(window).scrollTop()) / 2);
  };
  __js.mask.hide = function () {
    var _0x5a9657 = $(".WEBSITE_LOADING_MASK");
    _0x5a9657.css("width", "0");
    _0x5a9657.css("display", "none");
    _0x5a9657.css("height", "0");
    $(".WEBSITE_LOADING_MASK img").css("display", "none");
  };
  __js.upload.init = function () {
    if (typeof FileReader === "undefined") {
      alert("您的浏览器不支持图片上传，请升级您的浏览器");
      return false;
    }
    (window.onresize = function () {
      var _0x2af7c4 = $(window).height();
      var _0x24e402 = $(window).width();
      _0x24e402 <= 768 ? $(".tailoring-content").css({
        top: (_0x2af7c4 - $(".tailoring-content").outerHeight()) / 2,
        left: 0
      }) : $(".tailoring-content").css({
        top: (_0x2af7c4 - $(".tailoring-content").outerHeight()) / 2,
        left: (_0x24e402 - $(".tailoring-content").outerWidth()) / 2
      });
    })();
    $(".user-image-change").on("click", function () {
      $(".tailoring-container").toggle();
    });
    var _0x14ad23 = {
      aspectRatio: 1,
      viewMode: 1,
      preview: ".previewImg",
      dragMode: "move",
      movable: true,
      dragCrop: true
    };
    _0x14ad23.aspectRatio = 1;
    _0x14ad23.viewMode = 1;
    _0x14ad23.preview = ".previewImg";
    _0x14ad23.dragMode = "move";
    _0x14ad23.movable = true;
    _0x14ad23.dragCrop = true;
    _0x14ad23.movable = true;
    _0x14ad23.resizable = true;
    _0x14ad23.zoomable = true;
    _0x14ad23.mouseWheelZoom = false;
    _0x14ad23.touchDragZoom = true;
    _0x14ad23.rotatable = true;
    _0x14ad23.crop = function (_0xc796b0) {};
    $("#tailoringImg").cropper(_0x14ad23);
    $(".cropper-rotate-btn").on("click", function () {
      $("#tailoringImg").cropper("rotate", 45);
    });
    $(".cropper-reset-btn").on("click", function () {
      $("#tailoringImg").cropper("reset");
    });
    var _0x40ea0a = true;
    $(".cropper-scaleX-btn").on("click", function () {
      _0x40ea0a ? ($("#tailoringImg").cropper("scaleX", -1), _0x40ea0a = false) : ($("#tailoringImg").cropper("scaleX", 1), _0x40ea0a = true);
      _0x40ea0a != _0x40ea0a;
    });
    $("#sureCut").on("click", function () {
      if ($("#tailoringImg").attr("src") == null) {
        return false;
      } else {
        var _0x3fe6e5 = {
          width: 200,
          height: 200
        };
        var _0x55e935 = $("#tailoringImg").cropper("getCroppedCanvas", _0x3fe6e5);
        _0x55e935.toBlob ? _0x55e935.toBlob(function (_0x555ff9) {
          var _0x80f25d = new FormData();
          _0x80f25d.append("file", _0x555ff9, "userimage");
          $.ajax({
            url: "/dynamic/user/upload",
            method: "POST",
            data: _0x80f25d,
            processData: false,
            contentType: false,
            beforeSend: function () {
              __js.mask.show();
            },
            success: function (_0x421697) {
              _0x421697.status == "S" ? (layer.msg("头像上传成功！"), $(".fed-user-avat").attr("src", $(".fed-user-avat").attr("src") + "?v=" + new Date() * 1), __js.upload.closeTailor()) : alert(_0x421697.message);
            },
            error: function (_0x2abf00, _0x49ea20, _0x3218e6) {
              alert("失败，请稍后再试");
              __js.upload.closeTailor();
            }
          }).done(function () {
            __js.mask.hide();
          });
        }, "image/jpeg") : alert("浏览器阻止了上传头像，请联系管理员！");
      }
    });
  };
  __js.user.loginCookieInit = function () {
    $.ajax({
      url: "/dynamic/user/getUserMessage",
      type: "post",
      success: function (_0x595992) {
        _0x595992.data.refreshPage == "Y" && location.reload();
      },
      complete: function (_0x142ad8, _0x6ff393) {}
    });
  };
  __js.user.checkSiteVisit = function () {
    if (__cad.cookie("__cf__bkm") == null || __cad.cookie("__cf__bkm") == "") {
      var _0x3d7de8 = {
        url: "/dynamic/gernateCFBkm",
        type: "post",
        success: function (_0x3e5af2) {},
        complete: function (_0x1217b1, _0x51c887) {}
      };
      $.ajax(_0x3d7de8);
    }
  };
  (function () {
    if (__js.user.userHaveLogin()) {
      if (__cad.cookie("user_name") == null || __cad.cookie("user_name") == "" || __cad.cookie("user_id") == null || __cad.cookie("user_id") == "" || __cad.cookie("display_name") == null || __cad.cookie("display_name") == "") {
        __js.user.clearAllUserCookie();
        return;
      }
      if (__cad.cookie("USER_GLOBAL_FLAG") == null || __cad.cookie("USER_GLOBAL_FLAG") == "") {
        __js.user.loginCookieInit();
        return;
      } else {
        if (__cad.cookie("USER_GLOBAL_FLAG") != "Y" && __cad.cookie("USER_GLOBAL_FLAG") != "N") {
          __js.user.loginCookieInit();
          return;
        }
        if (__cad.cookie("last_login_check") == null || __cad.cookie("last_login_check") == "") {
          __cad.cookie("USER_GLOBAL_FLAG", null);
          __cad.cookie("last_login_check", null);
          __js.user.loginCookieInit();
          return;
        } else {
          try {
            var _0x592f6a = __cad.cookie("last_login_check");
            var _0x31572d = string2date(_0x592f6a);
            var _0x46e24a = new Date(new Date().getTime() + 86400000);
            if (_0x46e24a < _0x31572d) {
              __cad.cookie("USER_GLOBAL_FLAG", null);
              __cad.cookie("last_login_check", null);
              __js.user.loginCookieInit();
              return;
            }
          } catch (_0x1865e) {
            __js.user.loginCookieInit();
          }
        }
      }
    } else {
      __js.user.clearAllUserCookie();
    }
    __js.user.checkSiteVisit();
  })();
  __js.getQueryString = function (_0x369e95) {
    var _0x5eeebd = new RegExp("(^|&)" + _0x369e95 + "=([^&]*)(&|$)", "i");
    var _0x2485d3 = window.location.search.substr(1).match(_0x5eeebd);
    if (_0x2485d3 != null) {
      return decodeURIComponent(_0x2485d3[2]);
    }
    return null;
  };
  __js.searchpageRecord = function () {
    var _0x375fcc = __js.getQueryString("searchString");
    var _0x370cdf = window.location.pathname;
    if (_0x375fcc == null || _0x375fcc == "") {
      return;
    }
    var _0x380a16 = {
      message: _0x375fcc,
      uri: _0x370cdf
    };
    var _0x1e2310 = {
      url: "/pagelogajax",
      type: "post",
      data: _0x380a16,
      success: function (_0x224d2c) {},
      complete: function (_0x51ac04, _0x4e0865) {}
    };
    $.ajax(_0x1e2310);
  };
  __js.subscript = {};
  __js.subscript.handle = function (_0x57aea2) {
    var _0xacec7a = $(".fed-user-form").attr("action");
    var _0x22e790 = [];
    $("input[name=\"ids[]\"]").each(function () {
      this.checked && _0x22e790.push(this.value);
    });
    if (_0x22e790.length == 0) {
      layer.msg("请选择");
      return;
    }
    $.ajax({
      url: _0xacec7a,
      method: "POST",
      data: {
        dataIds: _0x22e790.join(","),
        type: _0x57aea2
      },
      success: function (_0x30357a) {
        if (_0x30357a.status == "S") {
          layer.msg(_0x30357a.message);
          var _0x394eeb = setInterval(function () {
            location.reload();
            clearInterval(_0x394eeb);
          }, 1000);
        } else {
          layer.msg(_0x30357a.message);
        }
      },
      error: function (_0x959400, _0x295c97, _0x5ab8c8) {
        layer.msg("错误，请稍后重试！");
      }
    });
  };
  __js.stringToHex = function (_0x240e48) {
    return _0x240e48.split("").map(function (_0x44ed10) {
      return ("0" + _0x44ed10.charCodeAt(0).toString(16)).slice(-2);
    }).join("");
  };
  __js.hexToBytes = function (_0x1b9edd) {
    for (var _0x1563ce = [], _0x286337 = 0; _0x286337 < _0x1b9edd.length; _0x286337 += 2) {
      _0x1563ce.push(parseInt(_0x1b9edd.substr(_0x286337, 2), 16));
    }
    return _0x1563ce;
  };
  __js.stringToBytes = function (_0x3e1478) {
    return new Uint8Array(__js.hexToBytes(__js.stringToHex(_0x3e1478)));
  };
  __js.stringToByte = function (_0x301ba5) {
    var _0x593c65 = new TextEncoder();
    return _0x593c65.encode(_0x301ba5);
  };
  __js.imageLoaded = [];
  __js.loadImageData = function (_0x213948) {
    if (__js.imageLoaded.includes(_0x213948)) {
      return;
    } else {
      __js.imageLoaded.push(_0x213948);
    }
    var _0x17a533 = {
      withCredentials: true,
      responseType: "arraybuffer"
    };
    $.ajax({
      type: "GET",
      url: __cr.getPicUrl(_0x213948),
      xhrFields: _0x17a533,
      crossDomain: true,
      success: function (_0x23ea39) {
        var _0x5974e5 = {
          data: _0x23ea39,
          src: ""
        };
        __cr.preloader[_0x213948] = _0x5974e5;
        clearTimeout(__cr.st_showerr[_0x213948]);
        __cr.isloading = 0;
        __cr.preLoadImg(_0x213948 + 1);
      },
      error: function (_0x485814, _0x319202, _0xf96181) {
        __cr.isloading = 0;
      }
    });
  };
  __js.getDataParse = function () {
    if (__cr.isfromMangaRead === undefined || __cr.isfromMangaRead == null) {
      return "";
    }
    __cr.isfromMangaRead = null;
    var _0x11215f = "PFP2L1Xxp0fI9l14";
    __cad.useCodeIndex == 2 && (_0x11215f = "35pRUnW9dUEqZIfP");
    var _0x2c6927 = window.CryptoJS.enc.Utf8.parse(window.devtools.jsd(_0x11215f, window.image_info.imgKey));
    return _0x2c6927;
  };
  $(function () {
    typeof __jsData != "undefined" && (__cad.isInReadPage() ? $(".mh_headpager").append("<div id=\"hidetArea\">\n\t<div class=\"mlad\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n</div>") : $(".fed-deta-info").append("<div id=\"hidetArea\">\n\t<div class=\"mlad\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n</div>"));
    __js.initTab(".fed-part-rows .fed-drop-btns .fed-btns-info", ".fed-tabs-item .fed-play-item");
    $(".fed-casc-info a.change-css-type").each(function () {
      $(this).click(function () {
        var _0x4f12dd = $(this).parent().parent().attr("style");
        _0x4f12dd == "white-space:normal" ? $(this).parent().parent().attr("style", "white-space:nowrap") : $(this).parent().parent().attr("style", "white-space:normal");
      });
    });
    $(".show-page-jump").click(function () {
      var _0x4e1204 = parseInt($(".fed-page-info input").val());
      __js.show(_0x4e1204);
    });
    if (__cad.cookie("USER_GLOBAL_FLAG") == "N") {
      if (typeof __recheck_user_flag != "undefined") {
        if (__recheck_user_flag == "Y") {
          __js.user.loginCookieInit();
          return;
        }
      }
    }
    vfed.aid == 6 && ($(".website-delete").click(function () {
      __js.subscript.handle(1);
    }), $(".website-enable").click(function () {
      __js.subscript.handle(2);
    }), $(".website-cancel").click(function () {
      __js.subscript.handle(3);
    }));
    vfed.aid == 4 && (fed.comment.init(), fed.player.tabs(".fed-tabs-btns", ".fed-tabs-item", "fed-text-green", 0), fed.player.drop(".fed-play-btns", ".fed-play-item", "fed-back-green", 200), fed.player.drop(".fed-down-btns", ".fed-down-item", "fed-back-green", 200), fed.player.sort(".fed-drop-sort", ".fed-drop-head"));
  });
})();
window.__cr_getpice = function (_0x269812) {
  var _0x387233 = "";
  if (!window.image_info.img_type) {
    var _0x206c7c = window.lines[chapter_id].use_line;
    var _0x5ee37c = parseInt(window.mh_info.startimg) + _0x269812 - 1;
    var _0x1defd3 = __cr.PrefixInteger(_0x5ee37c, 4) + ".jpg";
    window.image_info.imgKey != undefined && window.image_info.imgKey != "" && (_0x1defd3 = __cr.PrefixInteger(_0x5ee37c, 4) + ".enc.webp");
    var _0x45a5e0;
    var _0x56ca22 = _0x206c7c.replace("img.", "");
    _0x56ca22 = document.domain.replace("www.", "");
    var _0x500646 = Math.floor(Math.random() * 100);
    var _0x5b3ffc;
    var _0x1e4f46 = __cad.getCookieValue();
    var _0x9c4520 = mh_info.pageid;
    var _0x400ed0 = Number(mh_info.mhid);
    var _0x5229ea = _0x1e4f46[0] + _0x9c4520.toString();
    var _0x16b950 = _0x1e4f46[1] + _0x9c4520.toString();
    _0x5b3ffc = __cad.cookie(_0x5229ea);
    _0x5b3ffc == null && (__cad.setCookieValue(), _0x5b3ffc = __cad.cookie(_0x5229ea));
    mh_info.use_server == "" ? _0x45a5e0 = "//img." + _0x56ca22 + "/comic/" + encodeURI(_0x5b3ffc) + _0x1defd3 : _0x45a5e0 = "//img" + mh_info.use_server + "." + _0x56ca22 + "/comic/" + encodeURI(_0x5b3ffc) + _0x1defd3;
    _0x387233 = _0x45a5e0;
  } else {
    var _0x2134d4 = window.__images_yy[_0x269812 - 1];
    window.image_info.img_type == "1" ? _0x387233 = __cr.switchWebp(_0x2134d4, window.mh_info.manga_size) : _0x387233 = _0x2134d4;
  }
  return _0x387233;
};
window.loadErrorTip = function () {
  var _0x39fcdd = {
    type: 1,
    title: false,
    closeBtn: 0,
    scrollbar: false,
    shade: 0.9,
    content: "<div style=\"font-size:2.4em;line-height:normal;text-align:center;\"><h1 style=\"font-weight: bold;\">恳请您允许本站展示广告</h1></div><div style=\"font-size:1.2em;text-align:center;\"><p>这对于保持网站的良好运营、网站内容的持续更新有及其重要的激励作用。</p></div><div style=\"font-size:1.2em;line-height:normal;text-align:center;\"><br/><p>请打开广告展示后重新进入，感谢</p><p>不知如何操作请用chrome即可</p></div>"
  };
  layer.open(_0x39fcdd);
};
window.getData = function (_0x1b4ea5) {
  if (typeof window.__jsData == "undefined") {
    return;
  }
  if (!__cad.isInReadPage()) {
    return;
  }
  var _0x1773bd = false;
  typeof window.__cad.top_banner == "undefined" && (_0x1773bd = true);
  _0x1b4ea5 >= 2;
  if (_0x1b4ea5 >= 3) {
    if (window.__cad.isMobileAccess && !window.__cad.getVType() && window.__cad.isInReadPage()) {
      if (!($("#imgvalidation2022").height() > 0)) {
        _0x1773bd = true;
      }
      var _0x1f9276 = Number(window.__cad.cookie("cpcv_top_counter_15"));
      var _0x1c3fe1 = Number(window.__cad.cookie("cpcv_bottom_counter_15"));
      if (_0x1f9276 >= 4 || _0x1c3fe1 >= 4) {
        if (!($("#wrapfabtest").height() > 0)) {
          window.errorExists = true;
        }
      }
    }
  }
  (_0x1773bd || window.errorExists) && window.setTimeout("window.loadErrorTip()", 1000);
};
window.vcCheckFuntion = function () {
  if (typeof window.__jsData != "undefined") {
    var _0xbac87e = "";
    $("#hidetArea").height() > 0 ? _0xbac87e = "N" : _0xbac87e = "Y";
    _0xbac87e == "N" && (__cad.isInReadPage() ? typeof window.__jssuccess == "undefined" && (_0xbac87e = "Y") : typeof window.loadsuccess == "undefined" && (_0xbac87e = "Y"));
    if (window.__cad.cookie("__na") != _0xbac87e) {
      var _0x50c9d5 = {
        expires: 24
      };
      window.__cad.cookie("__na", _0xbac87e, _0x50c9d5);
    }
  }
  __cad.isInReadPage() && __cad.cookie("_va") == null && location.reload();
  __js.user.checkSiteVisit();
  window.setTimeout("window.vcCheckFuntion()", 5000);
};
function checkSiteNormallyLoaded() {
  if (!__cad.isInReadPage()) {
    return;
  }
  var _0xc735d = "Y";
  var _0x27160d = ["ADFooter", "ADInfo", "ADLeader", "AcceptCookie-Fixed"];
  var _0x3654dd = 0;
  for (var _0x319085 of _0x27160d) {
    $("body").append("<div id=\"classidadblocktest\">\n\t<div class=\"" + _0x319085 + "\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n" + "</div>");
    var _0x5c86bb = $("#classidadblocktest");
    if (_0x5c86bb.height() > 0) {
      _0x3654dd = _0x3654dd + 1;
    } else {
      _0xc735d = "N";
      break;
    }
    _0x5c86bb.remove();
  }
  _0xc735d != "Y" && window.loadErrorTip();
}
window.checkNormallyLoaded_2 = function () {
  if (!($.inArray(__cad.getCountryCode(), new Array("HK", "TW", "MY")) != -1 && !__cad.isComputer())) {
    return;
  }
  jQuery.cachedScript = function (_0x33d506, _0x208947) {
    var _0x3b7cbc = {
      dataType: "script",
      cache: true,
      url: _0x33d506
    };
    _0x208947 = $.extend(_0x208947 || {}, _0x3b7cbc);
    return jQuery.ajax(_0x208947);
  };
  $.cachedScript("/js/ad_/load.js").done(function () {
    typeof dongcidaci == "undefined" && window.loadErrorTip();
  }).fail(function () {
    typeof dongcidaci == "undefined" && window.loadErrorTip();
  });
};
$(document).ready(function () {
  window.setTimeout("window.vcCheckFuntion()", 5000);
  window.setTimeout("window.checkNormallyLoaded_2()", 2000);
  __cad.isInReadPage() && ($("body").append("<script src=\"/logo/ad.js\"></script>"), __cad.isMobileAccess && !__cad.getVType() && ($("body").prepend("<div id=\"imgvalidation2022\"><image src=\"/js/a_d/pic1.png\"></image></div>"), $("body").append("<div id=\"wrapfabtest\">\n\t<div class=\"gg_950\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n</div>")), checkSiteNormallyLoaded());
  !__cad.isInReadPage() && typeof window.__jsData != "undefined" && $("body").append("<script src=\"/js/dyguosj/load.js\"></script>");
  typeof __jsData != "undefined" && typeof __jsData.excludeCountry != "undefined" && __jsData.excludeCountry != "" && __jsData.excludeCountry.indexOf(__cad.getCountryCode()) != -1 && (window.location.href = "/");
  typeof __jsData != "undefined" && typeof __jsData.linePreferCloud != "undefined" && __jsData.linePreferCloud == "Y" && $("li.fed-drop-btns a[lineId=2]").click();
  typeof window.getData == "undefined" && window.setTimeout("window.loadErrorTip()", 1000);
  window.getData(1);
  window.setTimeout("window.checkSiteNormallyLoaded()", 2000);
  window.setTimeout("window.checkSiteNormallyLoaded()", 4000);
  window.setTimeout("window.getData(2)", 2000);
  window.setTimeout("window.getData(3)", 5000);
});
//Wed Dec 11 2024 16:11:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _hmt = _hmt || [];
var useDevModeDetect = false;
function __jsheckBrowser() {
  var _0xab242a = navigator.userAgent.toLowerCase();
  _0xab242a.match(/quark/i) == "quark" && $("body").html("不支持的浏览器，请更换！");
}
function plantformIsComputer() {
  var _0x51cdc5 = window.navigator.platform;
  var _0x1825d2 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  var _0x3b2c32 = ["Win32", "Win64", "Windows", "WinCE"];
  var _0x1d3695 = ["iPad"];
  var _0x62f283 = /ipad/gi.test(navigator.userAgent);
  if (_0x1d3695.indexOf(_0x51cdc5) !== -1 || _0x62f283) {
    return false;
  }
  if (_0x1825d2.indexOf(_0x51cdc5) !== -1) {
    return true;
  } else {
    if (_0x3b2c32.indexOf(_0x51cdc5) !== -1) {
      return true;
    }
  }
  return false;
}
function devmodedetect() {
  useDevModeDetect && plantformIsComputer() && (window.location.href = "https://www.google.com");
}
function isMobileAccessFun() {
  var _0x184d08 = /AppleWebKit.*Mobile/i.test(navigator.userAgent) || /ios|iPad|MQQBrowser|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Opera Mini/.test(navigator.userAgent);
  return _0x184d08;
}
(function () {
  var _0x35078d = document.getElementsByTagName("script")[0];
  var _0x16db9b = document.createElement("script");
  _0x16db9b.src = "https://www.googletagmanager.com/gtag/js?id=G-T0HJJCQMVV";
  _0x16db9b.async = true;
  _0x35078d.parentNode.insertBefore(_0x16db9b, _0x35078d);
  window.dataLayer = window.dataLayer || [];
  function _0x34c0a2() {
    dataLayer.push(arguments);
  }
  _0x34c0a2("js", new Date());
  _0x34c0a2("config", "G-T0HJJCQMVV");
})();
function js_counting() {
  var _0x443183 = "";
  typeof mh_info != "undefined" && (_0x443183 = mh_info.pageid);
  var _0x5b832e = {
    pageId: _0x443183
  };
  var _0x102b21 = {
    url: "/counting",
    type: "post",
    data: _0x5b832e,
    success: function (_0x583d36) {},
    complete: function (_0x58c88a, _0x1158b5) {
      _0x1158b5 == "timeout";
    }
  };
  $.ajax(_0x102b21);
}
(function () {
  __cad = {};
  __cad.cookie = function (_0x1bec49, _0x20924f, _0x597d53) {
    _0x597d53 = _0x597d53 || {};
    if (typeof _0x20924f != "undefined") {
      if (_0x20924f === null) {
        _0x597d53.expires = -1;
      }
      var _0x3f0474 = new Date();
      if (_0x597d53.expires) {
        _0x3f0474.setTime(_0x3f0474.getTime() + _0x597d53.expires * 3600000);
      }
      var _0x360f99 = _0x1bec49 + "=" + encodeURIComponent(_0x20924f) + ";" + "expires=" + _0x3f0474.toGMTString() + ";path=/;" + (_0x597d53.domain ? "domain=" + _0x597d53.domain + ";" : "");
      document.cookie = _0x360f99;
    } else {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + _0x1bec49 + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }
  };
  __cad.localStorage = function (_0x5d4b34, _0x11383d) {
    if (typeof _0x11383d != "undefined") {
      _0x11383d === null ? localStorage.removeItem(_0x5d4b34) : localStorage.setItem(_0x5d4b34, _0x11383d);
    } else {
      return localStorage.getItem(_0x5d4b34);
    }
  };
  __cad.now = new Date();
  __cad.tomorrow = new Date(__cad.now.getFullYear(), __cad.now.getMonth(), __cad.now.getDate() + 1);
  __cad.uA = navigator.userAgent;
  __cad.isMobileAccess = /AppleWebKit.*Mobile/i.test(__cad.uA) || /ios|iPad|MQQBrowser|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Opera Mini/.test(__cad.uA);
  __cad.isIpad = /ipad/gi.test(__cad.uA);
  __cad.isComputer = function () {
    var _0x1fe580 = window.navigator.platform;
    var _0x44d561 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    var _0x5cf9f5 = ["Win32", "Win64", "Windows", "WinCE"];
    if (_0x44d561.indexOf(_0x1fe580) !== -1) {
      return true;
    } else {
      if (_0x5cf9f5.indexOf(_0x1fe580) !== -1) {
        return true;
      }
    }
    return false;
  };
  __cad.getVType = function () {
    var _0x2daa02 = window.navigator.platform;
    var _0x4193d9 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    var _0x292ece = ["Win32", "Win64", "Windows", "WinCE"];
    if (_0x4193d9.indexOf(_0x2daa02) !== -1) {
      return true;
    } else {
      if (_0x292ece.indexOf(_0x2daa02) !== -1) {
        return true;
      }
    }
    return false;
  };
  if (__cad.cookie("WEBSITE_COUNTRY_TYPE") == null || __cad.cookie("WEBSITE_COUNTRY_TYPE") == "") {
    var _0x2e1066 = {
      url: "/getCountryType",
      type: "post",
      success: function (_0x353e20) {},
      complete: function (_0x11502e, _0x1a8707) {}
    };
    $.ajax(_0x2e1066);
  }
  __cad.getCountryCode = function () {
    var _0x343b70 = __cad.cookie("WEBSITE_COUNTRY_TYPE");
    return _0x343b70 == null || _0x343b70 == "" ? "US" : _0x343b70;
  };
  typeof __jsData != "undefined" && typeof __jsData.excludeCountry != "undefined" && __jsData.excludeCountry != "" && __jsData.excludeCountry.indexOf(__cad.getCountryCode()) != -1 && (window.location.href = "/");
  __cad.countryIsCN = function () {
    var _0x3f651e = __cad.getCountryCode();
    return $.inArray(_0x3f651e, new Array("CN")) != -1 ? true : false;
  };
  __cad.countryIsMainland = function () {
    var _0x448fd4 = __cad.getCountryCode();
    return $.inArray(_0x448fd4, new Array("CN")) != -1 ? true : false;
  };
  __cad.isInReadPage = function () {
    return typeof window.C_DATA != "undefined" ? true : false;
  };
  __cad.isInSumPage = function () {
    return typeof window.__jsData != "undefined" && !__cad.isInReadPage() ? true : false;
  };
  if (__cad.isInReadPage()) {
    var _0x53d6a5 = "a6WN6xjRZZZLPgHh";
    var _0x47393c;
    __cad.useCodeIndex = 1;
    try {
      _0x47393c = window.devtools.jsd(_0x53d6a5, window.devtools.jsc.enc.Base64.parse(window.C_DATA).toString(window.devtools.jsc.enc.Utf8));
      _0x47393c == "" && (__cad.useCodeIndex = 2, _0x47393c = window.devtools.jsd("9HG4RdDO6Z8joxzO", window.devtools.jsc.enc.Base64.parse(window.C_DATA).toString(window.devtools.jsc.enc.Utf8)));
      window.devtools.jse(_0x47393c);
    } catch (_0x2916bf) {
      __cad.useCodeIndex = 2;
      _0x47393c = window.devtools.jsd("9HG4RdDO6Z8joxzO", window.devtools.jsc.enc.Base64.parse(window.C_DATA).toString(window.devtools.jsc.enc.Utf8));
    }
    window.devtools.jse(_0x47393c);
    var _0x4b2c43 = window.devtools.jsc.enc.Base64.parse(window.image_info.urls__direct).toString(window.devtools.jsc.enc.Utf8);
    window.__images_yy = _0x4b2c43.split("|SEPARATER|");
    window.__specialDisplay = 1;
    !window.image_info.img_type && (window.__specialDisplay = 0);
  }
  __cad.getCookieValue = function () {
    return ["_tka_", "_tkb_"];
  };
  __cad.setCookieValue = function () {
    if (__cad.isInReadPage()) {
      var _0x4a3b1c = __cad.getCookieValue();
      var _0x3184f7 = mh_info.pageid;
      var _0x184412 = _0x4a3b1c[0] + _0x3184f7.toString();
      var _0x5becc5 = _0x4a3b1c[1] + _0x3184f7.toString();
      var _0x5639ad = "l7N3m9bkR64W0MRs";
      var _0x38f806;
      try {
        _0x38f806 = window.devtools.jsd(_0x5639ad, window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8));
        _0x38f806 == "" && (_0x38f806 = window.devtools.jsd("8tCdkRy6UhYoRlgz", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8)));
        !_0x38f806.startsWith(mh_info.mhid + "/") && (_0x38f806 = window.devtools.jsd("8tCdkRy6UhYoRlgz", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8)));
      } catch (_0x37c98a) {
        _0x38f806 = window.devtools.jsd("8tCdkRy6UhYoRlgz", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code2).toString(window.devtools.jsc.enc.Utf8));
      }
      var _0x5a907a = {
        expires: 0.005
      };
      __cad.cookie(_0x184412, _0x38f806, _0x5a907a);
      var _0x481f4d;
      _0x5639ad = "ICs1wjqXVEXupvWe";
      try {
        _0x38f806 = window.devtools.jsd(_0x5639ad, window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8));
        _0x38f806 == "" && (_0x38f806 = window.devtools.jsd("OkWV8nprMfWNPL50", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8)));
        _0x481f4d = parseInt(_0x38f806);
        String(_0x481f4d) == "NaN" && (_0x38f806 = window.devtools.jsd("OkWV8nprMfWNPL50", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8)));
      } catch (_0x19f772) {
        _0x38f806 = window.devtools.jsd("OkWV8nprMfWNPL50", window.devtools.jsc.enc.Base64.parse(window.mh_info.enc_code1).toString(window.devtools.jsc.enc.Utf8));
      }
      var _0x287901 = {
        expires: 0.005
      };
      __cad.cookie(_0x5becc5, _0x38f806, _0x287901);
    }
  };
  __cad.displayAdd = function (_0x23f7c3, _0x3cc188, _0x485ff3, _0x4a9d7f, _0x2a9d1a) {
    var _0x28a1c8 = _0x23f7c3;
    var _0x53e366 = new Array();
    var _0x5b13e4 = new Array();
    var _0x55eb6c = _0x28a1c8.length;
    var _0x149a72 = _0x3cc188;
    var _0x488468 = _0x485ff3;
    var _0x21de8a = -1;
    for (var _0x40306d = 0; _0x40306d < _0x55eb6c; _0x40306d++) {
      var _0x41903f = _0x149a72 + _0x2a9d1a[_0x40306d];
      var _0x5764c0 = __cad.cookie(_0x41903f);
      if (_0x5764c0) {
        _0x5764c0 <= _0x28a1c8[_0x40306d] && (_0x53e366.push(_0x2a9d1a[_0x40306d]), _0x5b13e4.push(_0x4a9d7f[_0x40306d]));
      } else {
        _0x53e366 = new Array();
        _0x53e366.push(_0x2a9d1a[_0x40306d]);
        _0x5b13e4 = new Array();
        _0x5b13e4.push(_0x4a9d7f[_0x40306d]);
        break;
      }
    }
    if (_0x53e366.length > 0) {
      var _0x5289a1 = Math.floor(Math.random() * _0x53e366.length);
      _0x21de8a = _0x5289a1;
      var _0x41903f = _0x149a72 + _0x53e366[_0x5289a1];
      var _0x1f37ba = __cad.cookie(_0x41903f);
      if (_0x1f37ba) {
        var _0x324995 = {
          expires: _0x488468
        };
        __cad.cookie(_0x41903f, "" + (parseInt(_0x1f37ba) + 1), _0x324995);
      } else {
        var _0x301a47 = {
          expires: _0x488468
        };
        __cad.cookie(_0x41903f, "1", _0x301a47);
      }
      document.write(_0x5b13e4[_0x21de8a]);
    }
  };
  if (typeof image_info != "undefined") {
    var _0x30e513 = mh_info.readmode || 3;
    _0x30e513 == 3 && __cad.localStorage("urecord", null);
  }
  if (__cad.cookie("__na") == null) {
    var _0x5612e6 = {
      expires: 24
    };
    __cad.cookie("__na", "N", _0x5612e6);
  }
})();
function showImg(_0x57c150, _0x32defb) {
  var _0x5b0ac7 = "";
  var _0x444830 = 1;
  while (_0x5b0ac7 == "" || document.getElementById(_0x5b0ac7)) {
    _0x444830 = Math.floor(Math.random() * 1000000);
    _0x5b0ac7 = "frameimg" + _0x444830;
  }
  var _0x5af55e = "'<img id=\"img" + _0x444830 + "\" " + (_0x57c150 == "" ? "" : "src=\\'" + _0x57c150 + "\\'") + "  style=\"max-width:100%;min-width:150px;cursor:pointer;vertical-align:top;text-align=center;\"/>" + "<style>body{margin:0px; padding:0px;text-align:center;}</style>" + "<script>document.oncontextmenu = function(){return false;}; parent.window.__cr.frameImagebind(\\'img" + _0x444830 + "\\',\\'" + _0x5b0ac7 + "\\'); window.onload = function() {" + " " + " parent.document.getElementById(\\'frameimg" + _0x444830 + "\\').height = document.getElementById(\\'img" + _0x444830 + "\\').height+\\'px\\'; }; window.onresize = function() { parent.document.getElementById(\\'frameimg" + _0x444830 + "\\').height = document.getElementById(\\'img" + _0x444830 + "\\').height+\\'px\\'; }</script>'";
  var _0x2f47be = "window.img" + _0x444830 + " = " + _0x5af55e + ";";
  eval(_0x2f47be);
  document.write("<iframe " + _0x32defb + " id=\"" + _0x5b0ac7 + "\" src=\"javascript:parent.img" + _0x444830 + ";\" frameborder=\"no\" scrolling=\"no\" margin=\"0\" border=\"0\" padding=\"0px\" style=\"max-width: 100%;width:100%;display:block;\" class=\"imageFrameSpecial\"></iframe>");
}
(function () {
  __js = {};
  __js.share = function () {
    $(".fed-play-share,.fed-goto-share").click(function () {
      var _0x145091 = document.title + " 太好看了，快来观赏吧！ " + location.href;
      var _0x549fa7 = {
        formType: 2,
        title: "分享链接",
        offset: "45%",
        shadeClose: 1,
        btn: "复制"
      };
      layer.alert(_0x145091, _0x549fa7, function () {
        if ($("body").append("<div id=\"fed-link-share\" style=\"position: absolute;left:-200px; color: rgba(0,0,0,0);background-color: transparent\">" + _0x145091 + "</div>"), navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
          window.getSelection().removeAllRanges();
          var _0x35023e = document.getElementById("fed-link-share");
          var _0x5a5280 = document.createRange();
          _0x5a5280.selectNode(_0x35023e);
          window.getSelection().addRange(_0x5a5280);
          var _0x245b8d = document.execCommand("Copy");
          window.getSelection().removeAllRanges();
        } else {
          var _0x5aba54 = document.getElementById("fed-link-share").innerText;
          var _0x35023e = document.createElement("input");
          _0x35023e.value = _0x5aba54;
          document.body.appendChild(_0x35023e);
          _0x35023e.select();
          var _0x245b8d = document.execCommand("Copy");
          _0x35023e.className = "input";
          _0x35023e.style.display = "none";
        }
        _0x245b8d ? layer.msg("短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友") : layer.msg("短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友");
      });
    });
  };
  __js.errorCommentAdd = function (_0x216c30) {
    if ($(_0x216c30).parents("form").find("textarea").val().length == 0) {
      layer.msg("请输入内容！");
      return;
    }
    $.ajax({
      url: "/addComment",
      method: "POST",
      data: $(_0x216c30).parents("form").serialize() + "&dataPageId=" + __jsData.dataPageId + "&dataId=" + __jsData.dataId,
      success: function (_0x3b19ff) {
        $(".fed-comm-tips").text(_0x3b19ff.message);
        _0x3b19ff.status == "S" && $(_0x216c30).addClass("fed-btns-disad");
        layer.closeAll("page");
        layer.msg("错误上报成功，我们会尽快查看，谢谢！");
      },
      error: function (_0x579efa, _0x113d6e, _0x3e27aa) {
        $(".fed-comm-tips").text("失败，请稍后再试");
      }
    });
  };
  __js.reportReadErrorBack = function () {
    $.get("/reportError", function (_0x72b79c) {
      layer.open({
        type: 1,
        btn: false,
        id: "report",
        title: "报错",
        content: _0x72b79c,
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
        var _0x5c7332 = {
          btn: ["走起，带我飞", "报错，闪开"],
          title: "路线提示"
        };
        layer.confirm("这一集有稳定路线哦，快去看吧！！！", _0x5c7332, function () {
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
  __js.changeToDirectLine = function (_0xd9f458) {
    var _0x1322ff = {
      expires: 1
    };
    __cad.cookie("CN_LINE_CONTROL", "CN_DIRECT" + _0xd9f458, _0x1322ff);
    layer.msg("已将稳定路线源切换为直连，效果持续 1 小时 ，请手动刷新页面继续观看，谢谢！");
  };
  __js.changeToCNLine = function (_0x338a5a) {
    var _0x16ff53 = {
      expires: 1
    };
    __cad.cookie("CN_LINE_CONTROL", "CN_BASIC", _0x16ff53);
    layer.msg("已将稳定路线源切换为 极速路线，效果持续 1 小时 ，请手动刷新页面继续观看，谢谢！");
  };
  __js.showIndexComment = function (_0x4a1f6e) {
    window.location.href = "/messages?page=" + _0x4a1f6e;
    $(".fed-comm-gbooks").text("提交成功").addClass("fed-btns-disad");
  };
  __js.showComment = function (_0x1ff309) {
    if (vfed.aid == 4) {
      return;
    }
    $.ajax({
      url: "/getcomment",
      data: {
        dataId: $(".fed-comm-info").attr("data-id"),
        page: _0x1ff309
      },
      success: function (_0x2d473d) {
        $(".fed-comm-info").html(_0x2d473d);
        fed.comment.count(".fed-comm-fort");
        $(".fed-comm-code").attr("src", $(".fed-comm-code").attr("data-role"));
      },
      error: function (_0x31d43e, _0x4ef77b, _0x1012fd) {
        $(".fed-comm-info").html("<p class=\"fed-padding\">评论加载失败，<a href=\"javascript:;\" onclick=\"fed.comment.show(1)\">点我刷新</a>...</p>");
      }
    });
  };
  __js.show = function (_0x2bda73) {
    if (typeof __commentPageing != "undefined" && __commentPageing == "Y") {
      __js.showComment(_0x2bda73);
    } else {
      var _0x50867c = __pageBaseUrl.indexOf("?") == -1 ? "?" : "&";
      window.location.href = __pageBaseUrl + _0x50867c + "page=" + _0x2bda73;
    }
  };
  __js.addComment = function (_0x568791) {
    if ($(_0x568791).parents("form").find("textarea").val().length == 0) {
      layer.msg("请输入内容！");
      return;
    }
    var _0x18c746 = $(".fed-comm-info").attr("data-mid");
    var _0x38c616 = $(".fed-comm-info").attr("data-id");
    var _0x3faaf5 = $(_0x568791.parents("form")).serialize();
    typeof __commentPageing != "undefined" && __commentPageing == "Y" && (_0x3faaf5 = _0x3faaf5 + "&dataPageId=" + _0x18c746 + "&dataId=" + _0x38c616);
    $(_0x568791).addClass("fed-btns-disad");
    $.ajax({
      url: "/addComment",
      type: "POST",
      data: _0x3faaf5,
      success: function (_0x9c3c37) {
        $(".fed-comm-tips").text(_0x9c3c37.message);
        layer.msg(_0x9c3c37.message);
        if (_0x9c3c37.status == "S") {
          if (typeof __commentPageing != "undefined" && __commentPageing == "Y") {
            layer.closeAll("page");
            layer.msg("已成功记录，显示有延迟，请稍后查看，谢谢！");
            if (_0x18c746 == null || _0x18c746 == "") {
              typeof __globalPageingCurrentPage != "undefined";
            }
          } else {
            layer.closeAll("page");
            layer.msg("已成功记录，显示有延迟，请稍后查看，谢谢！");
          }
        }
      },
      error: function (_0x3624fd, _0xb43583, _0x4b1749) {
        $(".fed-comm-tips").text("失败，请稍后再试");
        $(_0x568791).removeClass("fed-btns-disad");
      },
      complete: function (_0x5ba0ff, _0x470626) {}
    });
  };
  __js.ajaxBindJump = function () {
    $(".show-page-jump").click(function () {
      var _0x396ffb = parseInt($(".fed-page-info input").val());
      __js.show(_0x396ffb);
    });
  };
  __js.initTab = function (_0x4f18ff, _0x148e64) {
    $(_0x4f18ff).click(function () {
      $(_0x4f18ff).removeClass("fed-back-green");
      $(this).addClass("fed-back-green");
      $(_0x148e64).removeClass("fed-visible");
      $(_0x148e64).addClass("fed-hidden").hide();
      $(_0x148e64).eq($(this).parent().index()).fadeIn().addClass("fed-visible").removeClass("fed-hidden");
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
    var _0x4a1bfa = __cr.thispage;
    var _0x2d8671 = "[['" + mh_info.webPath + "','" + mh_info.mhname.replace("'", "\\'") + "','" + mh_info.pageurl + "','" + mh_info.pagename.replace("'", "\\'") + "','" + new Date().getTime() + "','" + _0x4a1bfa + "']";
    var _0x50b02a = __cad.localStorage("site_urecord") || [];
    $.each(eval(_0x50b02a), function (_0x50567e, _0x3d943b) {
      if (_0x50567e >= 10) {
        return false;
      }
      _0x3d943b[0] != mh_info.webPath && (_0x2d8671 += ",['" + _0x3d943b.join("','") + "']");
    });
    _0x2d8671 += "]";
    __cad.localStorage("site_urecord", _0x2d8671);
  };
  __js.watch_his.show = function (_0x3e7d45) {
    try {
      var _0x2fd7c9 = __cad.localStorage("site_urecord");
      var _0x6a25d = "";
      !_0x2fd7c9 || _0x2fd7c9 == "null" ? _0x6a25d += "<li class=\"fed-part-rows fed-line-bottom\"><a class=\"fed-part-rows\" href=\"javascript:;\">暂无观看记录</a></li>" : $.each(eval(_0x2fd7c9), function (_0x43a0d2, _0x22ef8e) {
        _0x6a25d += "<li class='fed-part-rows fed-line-bottom'>\n    <div class='fed-part-rows'>\n        <span class='fed-part-eone fed-col-xs9'><a href='" + _0x22ef8e[0] + "'>" + _0x22ef8e[1] + "</a>" + "<span class='fed-text-muted'>" + "<a href='" + _0x22ef8e[0] + "" + _0x22ef8e[2] + "' title='" + _0x22ef8e[3] + "'>[" + _0x22ef8e[3] + "]</a>" + "</span></span>\n" + "        <span class='fed-part-eone fed-text-muted fed-text-right fed-col-xs3'>" + date2str(_0x22ef8e[4], "MM.dd") + "</span>\n" + "    </div>\n" + "</li>\n";
      });
      $(_0x3e7d45).append(_0x6a25d);
    } catch (_0x2fc1a9) {
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
    var _0x46b2fc = __jsData.dataId;
    var _0x168a61 = {
      dataId: _0x46b2fc
    };
    $.ajax({
      url: "/dynamic/user/addToFav",
      method: "POST",
      data: _0x168a61,
      success: function (_0x5ded0d) {
        "S" == _0x5ded0d.status ? layer.msg("添加成功，可进入用户界面查看") : layer.msg(_0x5ded0d.message);
      },
      error: function (_0x290466, _0x3ad9bd, _0x351f69) {
        layer.msg("网络连接错误，请稍后重试！");
      }
    });
  };
  __js.user.binding = function (_0x5b53cf, _0x1a82c8) {
    $(_0x5b53cf).click(function () {
      if ($(this).hasClass("website-email-validate")) {
        var _0x3bf313 = "";
        _0x3bf313 = _0x3bf313 + __js.user.getEmailInputError("emailAddress");
        if (_0x3bf313 != "") {
          $(".fed-user-tips").text(_0x3bf313);
          return;
        }
      }
      $(this).addClass(_0x1a82c8).text("loading...");
      $.ajax({
        url: $(".fed-user-form").attr("data-role"),
        method: "POST",
        data: $(".fed-user-form").serialize(),
        success: function (_0x3f6590) {
          if ("S" == _0x3f6590.status) {
            var _0x34d9e8 = 60;
            var _0x52c1db = setInterval(function () {
              0 == _0x34d9e8 ? ($(_0x5b53cf).removeClass(_0x1a82c8).text("获取验证码"), clearInterval(_0x52c1db)) : $(_0x5b53cf).addClass(_0x1a82c8).text("重新获取(" + _0x34d9e8-- + ")");
            }, 1000);
          } else {
            $(_0x5b53cf).removeClass(_0x1a82c8).text("获取验证码");
            $(".fed-user-tips").text(_0x3f6590.message);
          }
        },
        error: function (_0x436f40, _0x5b91b1, _0x5f47e9) {
          $(".fed-user-tips").text("失败，请稍后再试");
          $(_0x5b53cf).removeClass(_0x1a82c8).text("获取验证码");
        }
      });
    });
  };
  __js.user.getEmailInputError = function (_0x2e2109) {
    var _0x5fd882 = "";
    var _0x5712d9 = /^[\w]+@[\w]+\.[a-zA-Z]{2,6}$/;
    var _0x4e88d2 = $("input[name='" + _0x2e2109 + "']").val();
    !_0x5712d9.test(_0x4e88d2) && (_0x5fd882 = _0x5fd882 + "email录入错误，请检查");
    return _0x5fd882;
  };
  __js.user.getVerfyCodeInputError = function (_0x25dafc) {
    var _0x5b8fe4 = "";
    !$("input[name='" + _0x25dafc + "']").val() && (_0x5b8fe4 = _0x5b8fe4 + "请输入验证码");
    return _0x5b8fe4;
  };
  __js.user.getUserNameInputError = function (_0x4a9b27) {
    var _0x1a42e5 = "";
    var _0x52f726 = $("input[name='" + _0x4a9b27 + "']").val();
    !/^\w+$/i.test(_0x52f726) && (_0x1a42e5 = _0x1a42e5 + "账号请使用字母、数字或下划线！");
    return _0x1a42e5;
  };
  __js.user.passwordMustInputError = function (_0x42a579) {
    var _0x3ae834 = "";
    var _0x383c7d = $("input[name='" + _0x42a579 + "']").val();
    !_0x383c7d && (_0x3ae834 = _0x3ae834 + "请输入密码！");
    return _0x3ae834;
  };
  __js.user.doublePasswordInputError = function (_0x2bf5a4, _0x38ff5b) {
    var _0x5f1e5d = "";
    var _0x26354f = $("input[name='" + _0x2bf5a4 + "']").val();
    var _0x43f6c9 = $("input[name='" + _0x38ff5b + "']").val();
    _0x26354f != _0x43f6c9 && (_0x5f1e5d = _0x5f1e5d + "两次密码输入不一致！");
    return _0x5f1e5d;
  };
  __js.user.handle_click = function (_0x4fb2c1) {
    var _0x540d62 = $(".fed-user-form").attr("data-jump") == undefined ? location.href : $(".fed-user-form").attr("data-jump");
    $(_0x4fb2c1).click(function () {
      var _0x1d2992 = "";
      if (_0x4fb2c1 == ".fed-subm-regis") {
        _0x1d2992 = _0x1d2992 + __js.user.getUserNameInputError("user_name");
        _0x1d2992 = _0x1d2992 + __js.user.passwordMustInputError("user_pwd");
        _0x1d2992 = _0x1d2992 + __js.user.doublePasswordInputError("user_pwd", "user_pwd2");
        _0x1d2992 = _0x1d2992 + __js.user.getVerfyCodeInputError("verifyCode");
        if (_0x1d2992 != "") {
          $(".fed-user-tips").text(_0x1d2992);
          return;
        }
      }
      if (_0x4fb2c1 == ".fed-subm-login") {
        !$("input[name='user_name']").val() && (_0x1d2992 = _0x1d2992 + "请录入用户名!");
        _0x1d2992 = _0x1d2992 + __js.user.passwordMustInputError("user_pwd");
        _0x1d2992 = _0x1d2992 + __js.user.getVerfyCodeInputError("verifyCode");
        if (_0x1d2992 != "") {
          $(".fed-user-tips").text(_0x1d2992);
          return;
        }
      }
      if (_0x4fb2c1 == ".fed-subm-finds") {
        _0x1d2992 = _0x1d2992 + __js.user.getEmailInputError("emailAddress");
        _0x1d2992 = _0x1d2992 + __js.user.passwordMustInputError("user_pwd");
        _0x1d2992 = _0x1d2992 + __js.user.doublePasswordInputError("user_pwd", "user_pwd2");
        _0x1d2992 = _0x1d2992 + __js.user.getVerfyCodeInputError("verifyCode");
        _0x1d2992 = _0x1d2992 + __js.user.getVerfyCodeInputError("emailCode");
        if (_0x1d2992 != "") {
          $(".fed-user-tips").text(_0x1d2992);
          return;
        }
      }
      if (_0x4fb2c1 == ".fed-subm-infos") {
        _0x1d2992 = _0x1d2992 + __js.user.doublePasswordInputError("user_pwd", "user_pwd2");
        var _0x752859 = $("input[name='secureQuestion']").val();
        var _0x30f4c8 = $("input[name='secureAnswer']").val();
        (_0x752859 || _0x30f4c8) && (!_0x752859 || !_0x30f4c8) && (_0x1d2992 = _0x1d2992 + "请补充密保信息！");
        if (_0x1d2992 != "") {
          $(".fed-user-tips").text(_0x1d2992);
          return;
        }
      }
      if (_0x4fb2c1 == ".fed-subm-binds") {
        _0x1d2992 = _0x1d2992 + __js.user.getEmailInputError("emailAddress");
        _0x1d2992 = _0x1d2992 + __js.user.getVerfyCodeInputError("verifyCode");
        if (_0x1d2992 != "") {
          $(".fed-user-tips").text(_0x1d2992);
          return;
        }
      }
      var _0x2e855d = $(".fed-user-form").serialize();
      _0x4fb2c1 == ".website-make-order" && (_0x2e855d = {
        orderType: $("#orderType").val(),
        payType: payType
      });
      $.post($(".fed-user-form").attr("action"), _0x2e855d, function (_0x4ad266) {
        _0x4ad266.status == "S" ? ($(".fed-user-tips").text(_0x4ad266.message), layer.msg(_0x4ad266.message), _0x4fb2c1 == ".website-make-order" && payType == "Alipay" && (_0x540d62 = "/dynamic/user/alipay/" + _0x4ad266.data.orderId), _0x4fb2c1 == ".fed-subm-regis" || _0x4fb2c1 == ".fed-subm-finds" ? ($(".fed-user-tips").text(_0x4ad266.message + " 将转至登录界面"), layer.msg(_0x4ad266.message + " 将转至登录界面"), setInterval(function () {
          window.location.href = _0x540d62;
        }, 2000)) : window.location.href = _0x540d62) : ($(".fed-user-tips").text(_0x4ad266.message), $(".fed-user-code").click());
      }).fail(function (_0x19fa74, _0x214851, _0x4551e7) {
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
    selectImg: function (_0x3fc2af) {
      if (!_0x3fc2af.files || !_0x3fc2af.files[0]) {
        return;
      }
      var _0x365fb9 = new FileReader();
      _0x365fb9.onload = function (_0x1176d6) {
        var _0x54eb76 = _0x1176d6.target.result;
        $("#tailoringImg").cropper("replace", _0x54eb76, false);
      };
      _0x365fb9.readAsDataURL(_0x3fc2af.files[0]);
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
      var _0x52d842 = "<div class=\"WEBSITE_LOADING_MASK\" >\n        <img src=\"/common/mask_loading.gif\" alt=\"图片加载中···\" />\n</div>";
      $("body").append(_0x52d842);
    }
    var _0x26f3d2 = $(".WEBSITE_LOADING_MASK");
    _0x26f3d2.css("width", "100%");
    _0x26f3d2.css("display", "block");
    _0x26f3d2.css("height", $(window).height() + $(window).scrollTop());
    $(".WEBSITE_LOADING_MASK img").css("display", "block");
    $(".WEBSITE_LOADING_MASK img").css("left", ($(window).width() - 88) / 2);
    $(".WEBSITE_LOADING_MASK img").css("top", ($(window).height() + $(window).scrollTop()) / 2);
  };
  __js.mask.hide = function () {
    var _0x357438 = $(".WEBSITE_LOADING_MASK");
    _0x357438.css("width", "0");
    _0x357438.css("display", "none");
    _0x357438.css("height", "0");
    $(".WEBSITE_LOADING_MASK img").css("display", "none");
  };
  __js.upload.init = function () {
    if (typeof FileReader === "undefined") {
      alert("您的浏览器不支持图片上传，请升级您的浏览器");
      return false;
    }
    (window.onresize = function () {
      var _0x59dbab = $(window).height();
      var _0x54b299 = $(window).width();
      _0x54b299 <= 768 ? $(".tailoring-content").css({
        top: (_0x59dbab - $(".tailoring-content").outerHeight()) / 2,
        left: 0
      }) : $(".tailoring-content").css({
        top: (_0x59dbab - $(".tailoring-content").outerHeight()) / 2,
        left: (_0x54b299 - $(".tailoring-content").outerWidth()) / 2
      });
    })();
    $(".user-image-change").on("click", function () {
      $(".tailoring-container").toggle();
    });
    var _0x1c141c = {
      aspectRatio: 1,
      viewMode: 1,
      preview: ".previewImg",
      dragMode: "move",
      movable: true,
      dragCrop: true
    };
    _0x1c141c.aspectRatio = 1;
    _0x1c141c.viewMode = 1;
    _0x1c141c.preview = ".previewImg";
    _0x1c141c.dragMode = "move";
    _0x1c141c.movable = true;
    _0x1c141c.dragCrop = true;
    _0x1c141c.movable = true;
    _0x1c141c.resizable = true;
    _0x1c141c.zoomable = true;
    _0x1c141c.mouseWheelZoom = false;
    _0x1c141c.touchDragZoom = true;
    _0x1c141c.rotatable = true;
    _0x1c141c.crop = function (_0x569fd8) {};
    $("#tailoringImg").cropper(_0x1c141c);
    $(".cropper-rotate-btn").on("click", function () {
      $("#tailoringImg").cropper("rotate", 45);
    });
    $(".cropper-reset-btn").on("click", function () {
      $("#tailoringImg").cropper("reset");
    });
    var _0x3aec22 = true;
    $(".cropper-scaleX-btn").on("click", function () {
      _0x3aec22 ? ($("#tailoringImg").cropper("scaleX", -1), _0x3aec22 = false) : ($("#tailoringImg").cropper("scaleX", 1), _0x3aec22 = true);
      _0x3aec22 != _0x3aec22;
    });
    $("#sureCut").on("click", function () {
      if ($("#tailoringImg").attr("src") == null) {
        return false;
      } else {
        var _0x5b7575 = {
          width: 200,
          height: 200
        };
        var _0x7a2b76 = $("#tailoringImg").cropper("getCroppedCanvas", _0x5b7575);
        _0x7a2b76.toBlob ? _0x7a2b76.toBlob(function (_0x2c3739) {
          var _0x112413 = new FormData();
          _0x112413.append("file", _0x2c3739, "userimage");
          $.ajax({
            url: "/dynamic/user/upload",
            method: "POST",
            data: _0x112413,
            processData: false,
            contentType: false,
            beforeSend: function () {
              __js.mask.show();
            },
            success: function (_0x40117c) {
              _0x40117c.status == "S" ? (layer.msg("头像上传成功！"), $(".fed-user-avat").attr("src", $(".fed-user-avat").attr("src") + "?v=" + new Date() * 1), __js.upload.closeTailor()) : alert(_0x40117c.message);
            },
            error: function (_0x47f1fb, _0x37d14a, _0x2f5d7c) {
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
      success: function (_0x1b369f) {
        _0x1b369f.data.refreshPage == "Y" && location.reload();
      },
      complete: function (_0x5565ef, _0x131bf4) {}
    });
  };
  __js.user.checkSiteVisit = function () {
    if (__cad.cookie("__cf__bkm") == null || __cad.cookie("__cf__bkm") == "") {
      var _0x623617 = {
        url: "/dynamic/gernateCFBkm",
        type: "post",
        success: function (_0x1a959d) {},
        complete: function (_0x5b3b64, _0x2fb0d2) {}
      };
      $.ajax(_0x623617);
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
            var _0x16af3d = __cad.cookie("last_login_check");
            var _0xc8c008 = string2date(_0x16af3d);
            var _0xa9e790 = new Date(new Date().getTime() + 86400000);
            if (_0xa9e790 < _0xc8c008) {
              __cad.cookie("USER_GLOBAL_FLAG", null);
              __cad.cookie("last_login_check", null);
              __js.user.loginCookieInit();
              return;
            }
          } catch (_0x5d649e) {
            __js.user.loginCookieInit();
          }
        }
      }
    } else {
      __js.user.clearAllUserCookie();
    }
    __js.user.checkSiteVisit();
  })();
  __js.getQueryString = function (_0x4af83f) {
    var _0xf71cde = new RegExp("(^|&)" + _0x4af83f + "=([^&]*)(&|$)", "i");
    var _0x1bf428 = window.location.search.substr(1).match(_0xf71cde);
    if (_0x1bf428 != null) {
      return decodeURIComponent(_0x1bf428[2]);
    }
    return null;
  };
  __js.searchpageRecord = function () {
    var _0x27196b = __js.getQueryString("searchString");
    var _0x307864 = window.location.pathname;
    if (_0x27196b == null || _0x27196b == "") {
      return;
    }
    var _0x35b5ce = {
      message: _0x27196b,
      uri: _0x307864
    };
    var _0x4b2620 = {
      url: "/pagelogajax",
      type: "post",
      data: _0x35b5ce,
      success: function (_0x30d6cd) {},
      complete: function (_0x4cce88, _0x5d5a8e) {}
    };
    $.ajax(_0x4b2620);
  };
  __js.subscript = {};
  __js.subscript.handle = function (_0x452745) {
    var _0x4f571d = $(".fed-user-form").attr("action");
    var _0x2a73ed = [];
    $("input[name=\"ids[]\"]").each(function () {
      this.checked && _0x2a73ed.push(this.value);
    });
    if (_0x2a73ed.length == 0) {
      layer.msg("请选择");
      return;
    }
    $.ajax({
      url: _0x4f571d,
      method: "POST",
      data: {
        dataIds: _0x2a73ed.join(","),
        type: _0x452745
      },
      success: function (_0xe34686) {
        if (_0xe34686.status == "S") {
          layer.msg(_0xe34686.message);
          var _0x5e2aa5 = setInterval(function () {
            location.reload();
            clearInterval(_0x5e2aa5);
          }, 1000);
        } else {
          layer.msg(_0xe34686.message);
        }
      },
      error: function (_0x12429f, _0x35c1a3, _0x575921) {
        layer.msg("错误，请稍后重试！");
      }
    });
  };
  __js.stringToHex = function (_0x4920c8) {
    return _0x4920c8.split("").map(function (_0x1c535d) {
      return ("0" + _0x1c535d.charCodeAt(0).toString(16)).slice(-2);
    }).join("");
  };
  __js.hexToBytes = function (_0x5c5af7) {
    for (var _0x49a1a7 = [], _0x53ee0f = 0; _0x53ee0f < _0x5c5af7.length; _0x53ee0f += 2) {
      _0x49a1a7.push(parseInt(_0x5c5af7.substr(_0x53ee0f, 2), 16));
    }
    return _0x49a1a7;
  };
  __js.stringToBytes = function (_0x3a78d4) {
    return new Uint8Array(__js.hexToBytes(__js.stringToHex(_0x3a78d4)));
  };
  __js.stringToByte = function (_0x4e2456) {
    var _0x550445 = new TextEncoder();
    return _0x550445.encode(_0x4e2456);
  };
  __js.imageLoaded = [];
  __js.loadImageData = function (_0x1dab07) {
    if (__js.imageLoaded.includes(_0x1dab07)) {
      return;
    } else {
      __js.imageLoaded.push(_0x1dab07);
    }
    var _0x5b2fd2 = {
      withCredentials: true,
      responseType: "arraybuffer"
    };
    $.ajax({
      type: "GET",
      url: __cr.getPicUrl(_0x1dab07),
      xhrFields: _0x5b2fd2,
      crossDomain: true,
      success: function (_0x5db3f9) {
        var _0x17469f = {
          data: _0x5db3f9,
          src: ""
        };
        __cr.preloader[_0x1dab07] = _0x17469f;
        clearTimeout(__cr.st_showerr[_0x1dab07]);
        __cr.isloading = 0;
        __cr.preLoadImg(_0x1dab07 + 1);
      },
      error: function (_0x188eb5, _0x5647ce, _0x3f1a85) {
        __cr.isloading = 0;
      }
    });
  };
  __js.getDataParse = function () {
    if (__cr.isfromMangaRead === undefined || __cr.isfromMangaRead == null) {
      return "";
    }
    __cr.isfromMangaRead = null;
    var _0x32656e = "a6WN6xjRZZZLPgHh";
    __cad.useCodeIndex == 2 && (_0x32656e = "9HG4RdDO6Z8joxzO");
    var _0x52a616 = window.CryptoJS.enc.Utf8.parse(window.devtools.jsd(_0x32656e, window.image_info.imgKey));
    return _0x52a616;
  };
  $(function () {
    typeof __jsData != "undefined" && (__cad.isInReadPage() ? $(".mh_headpager").append("<div id=\"hidetArea\">\n\t<div class=\"mlad\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n</div>") : $(".fed-deta-info").append("<div id=\"hidetArea\">\n\t<div class=\"mlad\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n</div>"));
    __js.initTab(".fed-part-rows .fed-drop-btns .fed-btns-info", ".fed-tabs-item .fed-play-item");
    $(".fed-casc-info a.change-css-type").each(function () {
      $(this).click(function () {
        var _0x4ba1bf = $(this).parent().parent().attr("style");
        _0x4ba1bf == "white-space:normal" ? $(this).parent().parent().attr("style", "white-space:nowrap") : $(this).parent().parent().attr("style", "white-space:normal");
      });
    });
    $(".show-page-jump").click(function () {
      var _0x521496 = parseInt($(".fed-page-info input").val());
      __js.show(_0x521496);
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
window.__cr_getpice = function (_0x141cf4) {
  var _0x33e8ef = "";
  if (!window.image_info.img_type) {
    var _0x3f3a6b = window.lines[chapter_id].use_line;
    var _0x212e91 = parseInt(window.mh_info.startimg) + _0x141cf4 - 1;
    var _0x2c232b = __cr.PrefixInteger(_0x212e91, 4) + ".jpg";
    window.image_info.imgKey != undefined && window.image_info.imgKey != "" && (_0x2c232b = __cr.PrefixInteger(_0x212e91, 4) + ".enc.webp");
    var _0x514af5;
    var _0x383809 = _0x3f3a6b.replace("img.", "");
    _0x383809 = document.domain.replace("www.", "");
    var _0x579b79 = Math.floor(Math.random() * 100);
    var _0x28279c;
    var _0x566fc3 = __cad.getCookieValue();
    var _0x511018 = mh_info.pageid;
    var _0x30f828 = Number(mh_info.mhid);
    var _0x2abb38 = _0x566fc3[0] + _0x511018.toString();
    var _0x40b08f = _0x566fc3[1] + _0x511018.toString();
    _0x28279c = __cad.cookie(_0x2abb38);
    _0x28279c == null && (__cad.setCookieValue(), _0x28279c = __cad.cookie(_0x2abb38));
    mh_info.use_server == "" ? _0x514af5 = "//img." + _0x383809 + "/comic/" + encodeURI(_0x28279c) + _0x2c232b : _0x514af5 = "//img" + mh_info.use_server + "." + _0x383809 + "/comic/" + encodeURI(_0x28279c) + _0x2c232b;
    _0x33e8ef = _0x514af5;
  } else {
    var _0x4b92c5 = window.__images_yy[_0x141cf4 - 1];
    window.image_info.img_type == "1" ? _0x33e8ef = __cr.switchWebp(_0x4b92c5, window.mh_info.manga_size) : _0x33e8ef = _0x4b92c5;
  }
  return _0x33e8ef;
};
window.loadErrorTip = function () {
  var _0x16b377 = {
    type: 1,
    title: false,
    closeBtn: 0,
    scrollbar: false,
    shade: 0.9,
    content: "<div style=\"font-size:2.4em;line-height:normal;text-align:center;\"><h1 style=\"font-weight: bold;\">恳请您允许本站展示广告</h1></div><div style=\"font-size:1.2em;text-align:center;\"><p>这对于保持网站的良好运营、网站内容的持续更新有及其重要的激励作用。</p></div><div style=\"font-size:1.2em;line-height:normal;text-align:center;\"><br/><p>请打开广告展示后重新进入，感谢</p><p>不知如何操作请用chrome即可</p></div>"
  };
  layer.open(_0x16b377);
};
window.getData = function (_0xc2f936) {
  if (typeof window.__jsData == "undefined") {
    return;
  }
  if (!__cad.isInReadPage()) {
    return;
  }
  var _0x37a722 = false;
  typeof window.__cad.top_banner == "undefined" && (_0x37a722 = true);
  _0xc2f936 >= 2;
  if (_0xc2f936 >= 3) {
    if (window.__cad.isMobileAccess && !window.__cad.getVType() && window.__cad.isInReadPage()) {
      if (!($("#imgvalidation2022").height() > 0)) {
        _0x37a722 = true;
      }
      var _0xa8a941 = Number(window.__cad.cookie("cpcv_top_counter_15"));
      var _0x2fde00 = Number(window.__cad.cookie("cpcv_bottom_counter_15"));
      if (_0xa8a941 >= 4 || _0x2fde00 >= 4) {
        if (!($("#wrapfabtest").height() > 0)) {
          window.errorExists = true;
        }
      }
    }
  }
  (_0x37a722 || window.errorExists) && window.setTimeout("window.loadErrorTip()", 1000);
};
window.vcCheckFuntion = function () {
  if (typeof window.__jsData != "undefined") {
    var _0x1060de = "";
    $("#hidetArea").height() > 0 ? _0x1060de = "N" : _0x1060de = "Y";
    _0x1060de == "N" && (__cad.isInReadPage() ? typeof window.__jssuccess == "undefined" && (_0x1060de = "Y") : typeof window.loadsuccess == "undefined" && (_0x1060de = "Y"));
    if (window.__cad.cookie("__na") != _0x1060de) {
      var _0x23751a = {
        expires: 24
      };
      window.__cad.cookie("__na", _0x1060de, _0x23751a);
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
  var _0x30b1bd = "Y";
  var _0x486537 = ["ADFooter", "ADInfo", "ADLeader", "AcceptCookie-Fixed"];
  var _0x570689 = 0;
  for (var _0x277b7c of _0x486537) {
    $("body").append("<div id=\"classidadblocktest\">\n\t<div class=\"" + _0x277b7c + "\" style=\"background-color: transparent;height: 1px;width: 1px;\"></div>\n" + "</div>");
    var _0xa59c57 = $("#classidadblocktest");
    if (_0xa59c57.height() > 0) {
      _0x570689 = _0x570689 + 1;
    } else {
      _0x30b1bd = "N";
      break;
    }
    _0xa59c57.remove();
  }
  _0x30b1bd != "Y" && window.loadErrorTip();
}
window.checkNormallyLoaded_2 = function () {
  if (!($.inArray(__cad.getCountryCode(), new Array("HK", "TW", "MY")) != -1 && !__cad.isComputer())) {
    return;
  }
  jQuery.cachedScript = function (_0x18d75b, _0x2f2ec5) {
    var _0x92f293 = {
      dataType: "script",
      cache: true,
      url: _0x18d75b
    };
    _0x2f2ec5 = $.extend(_0x2f2ec5 || {}, _0x92f293);
    return jQuery.ajax(_0x2f2ec5);
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
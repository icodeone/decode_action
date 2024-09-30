//Mon Sep 30 2024 11:23:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(function () {
  var _0x4f58ed = dr_get_http_host(),
    _0x5d2d3a = ["cache.baiducontent.com", "webcache.googleusercontent.com", "cncc.bingj.com", "c.360webcache.com"];
  if ($.inArray(_0x4f58ed, _0x5d2d3a) < 0) {
    {
      var _0x233ab6 = dr_get_http_host(tin.home_url),
        _0x4a6538 = "5.2.0",
        _0x567afd = "202407102140",
        _0x3118c8 = "dianyingyizhan.com,yuzhaibuluo.com,acgbuluo.com,tyyubo.com,buluocos.com,zhainanlianmeng.com",
        _0x891b20 = _0x3118c8.split(","),
        _0x360d81 = "w5nDuHnCoA";
      for (var _0x290e73 = 0, _0x1b80c8 = _0x891b20.length; _0x290e73 < _0x1b80c8; _0x290e73++) {
        var _0x1484e8 = _0x891b20[_0x290e73],
          _0x59e4a6 = _0x233ab6.indexOf("." + _0x1484e8);
        if (_0x1484e8 == _0x233ab6 || _0x59e4a6 != -1 && _0x233ab6.substring(_0x59e4a6) == "." + _0x1484e8) {
          _0x360d81 = "PcO4EMOXwrI";
          break;
        }
      }
      if (_0x360d81 != "PcO4EMOXwrI") {
        var _0x105478 = "https://www.ilxtx.com/dragon.html";
        var _0x3c0bfa = {};
        _0x3c0bfa.dr_fake_from = _0x4f58ed;
        _0x3c0bfa.loc = _0x3118c8;
        _0x3c0bfa.n = tin.n;
        _0x3c0bfa.ver = _0x4a6538;
        _0x3c0bfa.date = _0x567afd;
        _0x3c0bfa.loc = dr_base64_encode(_0x3118c8, 1);
        _0x3c0bfa.spm = dr_getSignStr(_0x3c0bfa, "_0x32de96,_0x844240");
        window.location.href = _0x105478 + "?" + $.param(_0x3c0bfa);
      }
    }
  }
});
function update_tin_traffic(_0x516e1e, _0x24f4f6) {
  var _0x2ae217 = dr_get_http_host(),
    _0x112c30 = ["cache.baiducontent.com", "webcache.googleusercontent.com", "cncc.bingj.com", "c.360webcache.com"];
  if ($.inArray(_0x2ae217, _0x112c30) < 0) {
    {
      var _0x3c693e = dr_get_http_host(tin.home_url),
        _0x19ac64 = "5.2.0",
        _0x48d2f4 = "202407102140",
        _0x2eb464 = "dianyingyizhan.com,yuzhaibuluo.com,acgbuluo.com,tyyubo.com,buluocos.com,zhainanlianmeng.com",
        _0x3945e8 = _0x2eb464.split(","),
        _0xe9a6b7 = "_0xd07508";
      for (var _0x429bd5 = 0, _0x215b9c = _0x3945e8.length; _0x429bd5 < _0x215b9c; _0x429bd5++) {
        var _0x32d7af = _0x3945e8[_0x429bd5],
          _0x1f2f99 = _0x3c693e.indexOf("." + _0x32d7af);
        if (_0x32d7af == _0x3c693e || _0x1f2f99 != -1 && _0x3c693e.substring(_0x1f2f99) == "." + _0x32d7af) {
          _0xe9a6b7 = "_0x23a0b7";
          break;
        }
      }
      if (_0xe9a6b7 != "_0x23a0b7") {
        var _0x1bc55c = "https://www.ilxtx.com/dragon.html";
        var _0x5c63ca = {};
        _0x5c63ca.dr_fake_from = _0x2ae217;
        _0x5c63ca.loc = _0x2eb464;
        _0x5c63ca.n = tin.n;
        _0x5c63ca.ver = _0x19ac64;
        _0x5c63ca.date = _0x48d2f4;
        _0x5c63ca.loc = dr_base64_encode(_0x2eb464, 1);
        _0x5c63ca.spm = dr_getSignStr(_0x5c63ca, "_0x32de96,_0x844240");
        window.location.href = _0x1bc55c + "?" + $.param(_0x5c63ca);
      }
    }
  }
  if (dr_is_spider() || dr_isEmpty(_0x24f4f6)) return;
  var _0x77f298 = 1,
    _0x14e715 = tin.dragon_opt.views_cache_time,
    _0x203e26 = _0x14e715 > 0 && window.localStorage ? true : false,
    _0x521224 = drGetDrNonce(1);
  if (dr_isEmpty(_0x521224) || dr_isEmpty(_0x521224["0"])) {
    _0x203e26 = false;
  }
  if (_0x203e26) {
    var _0x32707a = "p_" + _0x516e1e + "_" + _0x24f4f6,
      _0x33a0de = Date.parse(new Date()) / 1000,
      _0xa37d72 = 50,
      _0x4012ec = localStorage.getItem("dr_ajax_views") ? JSON.parse(localStorage.getItem("dr_ajax_views")) : {};
    _0x4012ec instanceof Array && (_0x4012ec = {});
    var _0x21f026 = Object.keys(_0x4012ec).length;
    (_0x21f026 == 0 || _0x21f026 > _0xa37d72) && (_0x4012ec = {}, _0x21f026 = 0);
    if (_0x21f026 > 0 && _0x4012ec.hasOwnProperty(_0x32707a)) {
      {
        if (_0x4012ec[_0x32707a] < _0x33a0de - _0x14e715) {
          _0x4012ec[_0x32707a] = _0x33a0de;
          var _0x77f298 = 2;
        } else var _0x77f298 = 0;
      }
    }
    if (_0x77f298 == 1) {
      _0x4012ec[_0x32707a] = _0x33a0de;
    }
  }
  if (_0x77f298 < 1) {
    return;
  }
  var _0x4940e5 = parseInt($("body").attr("data-resetnonce"));
  isNaN(_0x4940e5) && (_0x4940e5 = 0);
  if (_0x4940e5 >= 3) return;
  $.ajax({
    "type": "POST",
    "url": tin.ajax_url,
    "data": {
      "action": "dr_tracker_ajax",
      "type": _0x516e1e,
      "pid": _0x24f4f6,
      "nonce": _0x521224["0"]
    },
    "success": function (_0x1df0c0) {
      {
        if (window.localStorage) {
          {
            var _0x203d10 = Date.parse(new Date()) / 1000 - _0x1df0c0.time;
            localStorage.setItem("dr_cs_time", _0x203d10);
          }
        }
        if (_0x1df0c0.code == 0) {
          {
            $("body").attr("data-resetnonce", _0x4940e5 + 1);
            if (_0x1df0c0.type == 1) {
              var _0x978cca = _0x1df0c0.nonce_time;
              drSetDrNonce(_0x978cca);
            }
            update_tin_traffic(_0x516e1e, _0x24f4f6);
          }
        } else {
          if (_0x516e1e == "single" && "views_nf" in _0x1df0c0) {
            {
              var _0xfffc7a = $("#dr-showviews"),
                _0x13c65d = _0xfffc7a.attr("data-views");
              _0xfffc7a.length > 0 && typeof _0x13c65d !== typeof undefined && _0x13c65d !== false && (_0x13c65d = parseInt(_0x13c65d), !isNaN(_0x13c65d) && _0x1df0c0.views - _0x13c65d > 1 && _0xfffc7a.text(_0x1df0c0.views_nf));
            }
          }
          dr_update_ref_cookie();
          _0x203e26 && localStorage.setItem("dr_ajax_views", JSON.stringify(_0x4012ec));
        }
      }
    },
    "error": function () {
      $("body").attr("data-resetnonce", _0x4940e5 + 1);
      update_tin_traffic(_0x516e1e, _0x24f4f6);
    }
  });
}
function drSetDrNonce(_0x5de236) {
  tinSetCookie("dr_check_nonce", _0x5de236, 14400, tin.home);
}
function drGetDrNonce(_0xef142) {
  var _0x4b207a = "",
    _0x593172,
    _0x521d1c,
    _0x4abb5a = Date.parse(new Date()) / 1000,
    _0x521d1c = tinGetCookie("dr_check_nonce"),
    _0x42a3fb = dr_isEmpty(_0xef142) ? 0 : 1;
  if (!dr_isEmpty(_0x521d1c)) {
    var _0x593172 = _0x521d1c.split("|");
    if (_0x42a3fb) {
      if (_0x593172["0"] && _0x593172["1"] && parseInt(_0x593172["1"]) > _0x4abb5a) return _0x593172;
    } else return !dr_isEmpty(_0x593172["0"]) ? _0x593172["0"] : "";
  }
  return _0x4b207a;
}
function drGetDrUUID() {
  var _0x57bffd = tinGetCookie("dr_client_uuid");
  if (!dr_isEmpty(_0x57bffd)) return _0x57bffd;
  return "";
}
function dr_get_TNTCheck_sign(_0x43d0e1, _0x7ff0c2, _0x101cc2) {
  return $.md5("D" + _0x43d0e1 + "" + _0x7ff0c2 + "" + _0x101cc2 + "N");
}
function dr_crypt_userpass(_0x388ab4) {
  if (tin.dragon_opt.encrypt_pass == "1") {
    {
      var _0x2e4b84 = {
        "pw": _0x388ab4
      };
      _0x2e4b84.time = dr_get_time();
      return dr_rsa_encrypt(JSON.stringify(_0x2e4b84), dr_getPubkey());
    }
  }
  return _0x388ab4;
}
typeof JSEncrypt === "function" && (JSEncrypt.prototype.getkeylength = function () {
  return this.key.n.bitLength() + 7 >> 3;
}, JSEncrypt.prototype.encryptLong = function (_0xe0b48a) {
  var _0x2e2f41 = this.getKey(),
    _0x2a6104 = (_0x2e2f41.n.bitLength() + 7 >> 3) - 11,
    _0x25023e = ".",
    _0x55960b = dr_getStringBytes(_0xe0b48a),
    _0x18f2d5 = "";
  if (_0x55960b > _0x2a6104) {
    {
      var _0xa819f8 = 0;
      escape(_0xe0b48a).indexOf("%u") != -1 && (_0xa819f8 = 1, _0xe0b48a = dr_base64_encode(_0xe0b48a), _0x55960b = dr_getStringBytes(_0xe0b48a));
      var _0x312f15 = _0xe0b48a.StrCut2Arr(_0x2a6104),
        _0x34ec19 = [];
      for (var _0x5005aa = 0, _0x5da986 = _0x312f15.length; _0x5005aa < _0x5da986; _0x5005aa++) {
        _0x34ec19.push(hexToBase64(_0x2e2f41.encrypt(_0x312f15[_0x5005aa])));
      }
      _0x18f2d5 = _0x34ec19.join(_0x25023e);
      _0xa819f8 == 1 && (_0x18f2d5 = "LXTX." + _0x18f2d5);
    }
  } else _0x18f2d5 = hexToBase64(_0x2e2f41.encrypt(_0xe0b48a));
  return _0x18f2d5;
}, JSEncrypt.prototype.decryptLong = function (_0x1d3f68) {
  var _0x1caaaa = this.getKey(),
    _0x501983 = ".",
    _0x546ef9 = "",
    _0x586d2f = 0;
  _0x1d3f68.substring(0, 5) == "LXTX." && (_0x586d2f = 1, _0x1d3f68 = _0x1d3f68.substring(5, _0x1d3f68.length));
  var _0x3b94d9 = _0x1d3f68.split(_0x501983);
  if (_0x3b94d9.length > 1) {
    {
      for (var _0x172e0a = 0, _0x3dd637 = _0x3b94d9.length; _0x172e0a < _0x3dd637; _0x172e0a++) {
        _0x546ef9 += _0x1caaaa.decrypt(base64ToHex(_0x3b94d9[_0x172e0a]));
      }
      if (_0x586d2f == 1) {
        _0x546ef9 = dr_base64_decode(_0x546ef9);
      }
    }
  } else _0x546ef9 = _0x1caaaa.decrypt(base64ToHex(_0x1d3f68));
  return _0x546ef9;
});
function dr_get_ua() {
  return window.navigator.userAgent.toLowerCase();
}
function dr_get_refreshIcon(a) {
  var a = a || "";
  return "<i class=\"fa fa-spinner fa-spin " + a + "\"></i>";
}
function dr_get_time() {
  var a = 0,
    b = 0;
  window.localStorage && (b = localStorage.getItem("dr_cs_time"), null != b && (b = parseInt(b)));
  isNaN(b) || (a = b);
  return Date.parse(new Date()) / 1000 - a;
}
function dr_get_http_host(a) {
  if (dr_isEmpty(a)) return window.location.hostname;
  var b = "";
  b = a.indexOf("//") > -1 ? a.split("/")[2] : a.split("/")[0];
  b = b.split(":")[0];
  return b = b.split("?")[0];
}
function dr_base64_encode(a, b) {
  var d,
    c = encodeURIComponent(a);
  c = unescape(c);
  c = window.btoa(c);
  d = undefined === b ? 0 : b;
  d && (c = c.drReplaceAll("+", "-").drReplaceAll("/", "_").drReplaceAll("=", ""));
  return c;
}
function dr_base64_decode(a, b) {
  var d,
    e,
    c = undefined === b ? 0 : b;
  c && (a = a.drReplaceAll("-", "+").drReplaceAll("_", "/"), d = a.length % 4, d && (a += "====".substring(d)));
  e = window.atob(a);
  e = escape(e);
  return e = decodeURIComponent(e);
}
function dr_getPubkey() {
  return tin.dragon_opt.rsa_key;
}
function dr_rsa_encrypt(a, b) {
  var c, d;
  return dr_isEmpty(b) ? null : (c = new JSEncrypt(), c.setKey(b), d = c.encryptLong(a));
}
function dr_rsa_decrypt(a, b) {
  var c, d;
  return dr_isEmpty(b) ? null : (c = new JSEncrypt(), c.setKey(b), d = c.decryptLong(a));
}
function dr_getStringBytes(a) {
  var e,
    b = a.length,
    d = 0;
  for (e = 0; b > e; e++) c = a.charCodeAt(e), d += c >= 65536 && 1114111 >= c ? 4 : c >= 2048 && 65535 >= c ? 3 : c >= 128 && 2047 >= c ? 2 : 1;
  return d;
}
function hexToBase64(a) {
  return btoa(String.fromCharCode.apply(null, a.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}
function base64ToHex(a) {
  var b, c, d, e;
  for (b = 0, c = atob(a.replace(/[ \r\n]+$/, "")), d = []; b < c.length; ++b) e = c.charCodeAt(b).toString(16), 1 === e.length && (e = "0" + e), d[d.length] = e;
  return d.join(" ");
}
function drDelayURL(a, b) {
  var c = document.getElementById(a).innerHTML,
    d = setTimeout("drDelayURL('" + a + "','" + b + "')", 1000);
  c > 0 ? (c--, document.getElementById(a).innerHTML = c) : (clearTimeout(d), window.location.href = b);
}
function dr_leftTimer(a, b, c, d) {
  var e, f;
  c || (c = "0");
  e = {
    onTimeout: function () {},
    onInterval: function () {}
  };
  e = $.extend({}, e, d);
  f = setInterval(function () {
    new Date(b.replace(/-/g, "/")) / 1000 - Date.parse(new Date()) / 1000 <= 0 && (clearInterval(f), e.onTimeout(a));
    dr_getleftTimer(a, b, c);
    e.onInterval(f);
  }, 1000);
}
function dr_getleftTimer(a, b, c) {
  c || (c = "0");
  var j,
    d = new Date(b.replace(/-/g, "/")) - new Date(),
    e = parseInt(d / 1000 / 60 / 60 / 24, 10),
    f = parseInt(d / 1000 / 60 / 60 % 24, 10),
    g = parseInt(d / 1000 / 60 % 60, 10),
    h = parseInt(d / 1000 % 60, 10),
    i = "";
  isNaN(e) && (e = 0);
  isNaN(f) && (f = 0);
  isNaN(g) && (g = 0);
  isNaN(h) && (h = 0);
  0 >= e && (e = 0);
  j = 24 * e + f;
  "0" == c && 100 > j && (e = 0, f = j);
  0 >= f ? f = "00" : 10 > f && (f = "0" + f);
  0 >= g ? g = "00" : 10 > g && (g = "0" + g);
  0 >= h ? h = "00" : 10 > h && (h = "0" + h);
  0 >= d && (e = 0, f = g = h = "00");
  i = "<span class=\"timer_djs\">";
  "0" == c ? (e > 0 && (i += e + "天"), i += "<span class=\"djs_num num_h\">" + f + "</span>:<span class=\"djs_num num_m\">" + g + "</span>:<span class=\"djs_num num_s\">" + h + "</span>") : (e > 0 && (i += "<span class=\"djs_num_suf djs_d\"><span class=\"djs_num num_d\">" + e + "</span><span class=\"djs_suf suf_d\">天</span></span>"), i += "<span class=\"djs_num_suf djs_h\"><span class=\"djs_num num_h\">" + f + "</span><span class=\"djs_suf suf_h\">时</span></span><span class=\"djs_num_suf djs_m\"><span class=\"djs_num num_m\">" + g + "</span><span class=\"djs_suf suf_m\">分</span></span><span class=\"djs_num_suf djs_s\"><span class=\"djs_num num_s\">" + h + "</span><span class=\"djs_suf suf_s\">秒</span></span>");
  i += "</span>";
  document.getElementById(a).innerHTML = i;
}
function dr_check_order_status(a, b) {
  var d,
    c = {
      gateway_type: "",
      order_id: "",
      out_order_id: "",
      trade_no: "",
      signature: "",
      time: "",
      nonce: "",
      onSuccess: function () {},
      onError: function () {}
    };
  dr_isEmpty(b) || dr_isEmpty(b.gateway_type) || (c = $.extend({}, c, b), dr_isEmpty(c.extra) && "payjsali" == c.gateway_type && (c.extra = "payjs_alqr"));
  dr_isEmpty(c.gateway_type) || (d = {
    action: "dr_check_order_status",
    gateway_type: c.gateway_type,
    order_id: c.order_id,
    out_order_id: c.out_order_id,
    trade_no: c.trade_no,
    signature: c.signature,
    time: c.time,
    extra: c.extra,
    nonce: c.nonce
  }, (d.order_id || d.out_order_id) && $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    timeout: 10000,
    data: d,
    success: function (b) {
      1 == b.code ? (clearInterval(a), c.onSuccess(b)) : "error" == b.type && (clearInterval(a), c.onError(b));
    }
  }));
}
function tin_check_login(a) {
  return "0" != tin.uuid ? true : (dr_isEmpty(a) || dr_isEmpty(a.close_fcbox) || !a.close_fcbox || $.fancybox.close(true), "1" == $("form#loginform").attr("data-hideon") && $("form#loginform .login-help .typeTag.on").hide(), $("#login-box-btn").trigger("click"), false);
}
function dr_isEmpty(a) {
  return "undefined" == typeof a || null === a || "" === a ? true : false;
}
function dr_isMobile() {
  return dr_get_ua().match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) ? true : false;
}
function dr_check_email(a) {
  return a.length >= 6 && a.match(/(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/) ? true : false;
}
function dr_check_phone(a) {
  if (!a || 11 != a.length) return false;
  var b = a.substring(0, 3),
    c = ["170", "171", "162", "167", "165"];
  return $.inArray(b, c) >= 0 ? false : (reg = /^[1][3-9][0-9]{9}$/, a.match(reg) ? true : false);
}
function dr_is_spider() {
  return dr_get_ua().match(/(Googlebot|Baiduspider|spider)/i) ? true : false;
}
function dr_objKeySort(a) {
  var d,
    b = Object.keys(a).sort(),
    c = {};
  for (d = 0; d < b.length; d++) c[b[d]] = a[b[d]];
  return c;
}
function dr_getSignStr(a, b) {
  dr_isEmpty(b) && (b = "Dragon");
  var d,
    e,
    c = "";
  d = dr_objKeySort(a);
  $.each(d, function (a, b) {
    dr_isEmpty(b) || (b === true ? b = 1 : b === false && (b = 0), c += a + "=" + b + "&");
  });
  c = c.substring(0, c.length - 1);
  e = c + "&key=" + b;
  return $.md5(e);
}
function dr_format_input_amount(a) {
  var b, c, d, e;
  a.value = a.value.replace(/[^\d.]/g, "");
  a.value = a.value.replace(/^\./g, "");
  a.value = a.value.replace(/\.{2,}/g, ".");
  a.value = a.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  a.value = a.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
  "" != a.value && (a.value.indexOf(".") < 0 ? a.value = parseFloat(a.value) : (b = a.value, c = b.split("."), c[1].length > 0 && (d = parseInt(c[0]), e = c[1], isNaN(d) && (d = "0"), e = e.length < 1 ? "" : "." + e.substr(0, 2), b = d + e, a.value = b)));
}
function dr_accMul(a, b) {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {}
  try {
    c += e.split(".")[1].length;
  } catch (f) {}
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
function tinSetCookie(a, b, c, d) {
  var e = new Date();
  e.setTime(e.getTime() + 1000 * c);
  document.cookie = a + "=" + escape(b) + (null == c ? "" : ";expires=" + e.toGMTString()) + (null == d ? "" : ";path=" + d) + (dr_isIE() ? "" : ";SameSite=Lax");
}
function tinGetCookie(a) {
  return document.cookie.length > 0 && (c_start = document.cookie.indexOf(a + "="), -1 != c_start) ? (c_start = c_start + a.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "";
}
function dr_get_redirect_uri() {
  var a = tinGetQueryString("redirect_to");
  return a ? a : document.location.href;
}
function dr_redirect_cookie_name() {
  return "dr_login_redirect_url";
}
function dr_set_redirect_cookie(a) {
  dr_isEmpty(a) && (a = dr_get_redirect_uri());
  tinSetCookie(dr_redirect_cookie_name(), encodeURIComponent(a), 3600, tin.home);
}
function dr_isIE() {
  return window.ActiveXObject || "ActiveXObject" in window ? true : false;
}
function dr_bdSearch(a) {
  var c,
    b = "";
  switch ($(a).attr("data-stype")) {
    case "btn":
      b = $(a).prev().val();
      break;
    case "ipt":
      b = $(a).val();
      break;
    default:
      b = $(a).attr("data-kw");
  }
  dr_isEmpty(b) || (c = "www", dr_isMobile() && (c = "m"), c = "https://" + c + ".baidu.com/s?wd=" + encodeURIComponent(b) + "&tn=ilx" + "tx.com&ie=utf-8", "1" == $(a).attr("data-szn") && (c += "&si=" + dr_get_http_host() + "&ct=2097152"), window.open(c, "_blank"));
  return false;
}
function dr_changeURLPar(a, b, c) {
  var d, e;
  return dr_isEmpty(c) ? a : (d = new RegExp("([?&])" + b + "=.*?(&|$)", "i"), e = -1 !== a.indexOf("?") ? "&" : "?", a.match(d) ? a.replace(d, "$1" + b + "=" + c + "$2") : a + e + b + "=" + c);
}
function dr_addRefresh(a) {
  a.addClass("disabled").prepend(dr_get_refreshIcon("mg-r3"));
}
function dr_removeRefresh(a) {
  a.removeClass("disabled").find("i.fa-spinner").remove();
}
function dr_Alert(a, b, c) {
  dr_isEmpty(b) && (b = function () {});
  dr_isEmpty(c) && (c = function () {});
  return dr_isEmpty(a) ? (c(), b(), false) : ($.fancybox.open("<div class=\"pay-box\"><div class=\"pay-box-title\"><div class=\"pay-box-left\">提示：</div><i class=\"close\" data-fancybox-close>×</i></div><div class=\"pay-box-content\"><div class=\"pay-box-desc mg-t20i\">" + a + "</div></div><div class=\"pay-button\"><div><div class=\"button\" data-fancybox-close>确定</div></div></div></div>", {
    modal: true,
    afterShow: c,
    afterClose: b
  }), undefined);
}
function dr_Message(a, b, c, d, e) {
  dr_isEmpty(a) && (a = "info");
  dr_isEmpty(b) && (b = "EMPTY");
  dr_isEmpty(c) && (c = 3);
  dr_isEmpty(d) && (d = false);
  dr_isEmpty(e) && (e = function () {});
  var f = {
    msg: b,
    time: c,
    type: a,
    showClose: d,
    onClose: e
  };
  return $.drmessage(f);
}
function dr_form_do_ajax_post(a, b, c, d, e) {
  var f = "object" == typeof a ? a : $(a),
    g = dr_isEmpty(d) ? ".content" : d,
    h = dr_isEmpty(e) || dr_isEmpty(e.scroll_to) ? "" : e.scroll_to;
  f.find("[type=\"submit\"]").addClass("disabled").prepend(dr_get_refreshIcon("mg-r3"));
  $.ajax({
    type: "POST",
    url: b,
    data: c,
    success: function (a) {
      $(g).html($(a).find(g).html());
      h && $("html,body").animate({
        scrollTop: $(h).offset().top
      }, 500);
    },
    error: function () {
      dr_Message("error", "Aaja Error");
    }
  });
}
function tinGetQueryString(a) {
  var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
    c = window.location.search.substr(1).match(b);
  return null != c ? unescape(c[2]) : null;
}
function dr_insert_smilie(a) {
  $("#comt-smilie").hide();
  addEditors($("#comment")[0], a, "");
}
function dr_show_qrcodepay_btn_box(a) {
  var b = a.attr("id"),
    c = {
      modal: true
    };
  c.afterClose = function () {
    $("#dr-qrcodepay-pay-button-box .item").attr("data-btnid", "");
  };
  c.beforeShow = function () {
    $("#dr-qrcodepay-pay-button-box .item").attr("data-btnid", "#" + b);
  };
  $.fancybox.open({
    src: "#dr-qrcodepay-pay-button-box",
    type: "inline",
    opts: c
  });
}
function dr_qrcode_pay_fill_box(a) {
  $("#dr-qrcodepay-box .cont").html(a);
}
function dr_qrcode_pay_box_ajax_check_order(a, b) {
  var c = b;
  c.onSuccess = function (a) {
    $.fancybox.close(true);
    dr_Message(a.type, a.msg, 2, false, function () {
      location.reload();
    });
  };
  c.onError = function (a) {
    $.fancybox.close(true);
    dr_Message(a.type, a.msg, 2, false, function () {
      location.reload();
    });
  };
  dr_check_order_status(a, c);
}
function dr_qrcode_pay_box_timer(a) {
  dr_qrcode_pay_fill_box(a.box_data.timer_html);
  $.fancybox.close(true);
  var b = {
    modal: true
  };
  b.afterClose = function () {
    location.reload();
  };
  b.afterShow = function () {
    var e,
      b = 0,
      c = tin.dragon_opt.timeout.tm,
      d = dr_dateFormat("yyyy-mm-dd hh:ii:ss", 1000 * (Date.parse(new Date()) / 1000 + c + 1));
    dr_leftTimer("timer-dr-qrcodepay-box", d, "1", {
      onTimeout: function () {
        var b = $("#dr-qrcodepay-box");
        b.find(".qrcode .qr").hide();
        b.find(".qrcode .timeout").show();
      },
      onInterval: function () {
        b++;
        0 == b % (tin.dragon_opt.timeout.lxs / 1000) && dr_qrcode_pay_box_ajax_check_order(0, a.box_data.check_order);
      }
    });
    e = new ClipboardJS(".dr-clipboard", {
      container: $("#dr-qrcodepay-box")[0]
    });
    e.on("success", function () {
      dr_Message("success", "复制成功");
    });
    e.on("error", function () {
      dr_Message("error", "复制失败，请手动复制");
    });
  };
  $.fancybox.open({
    src: "#dr-qrcodepay-box",
    type: "inline",
    opts: b
  });
  return false;
}
function dr_lazyload_init() {
  $(".box-hide").lazyload({
    placeholder: tin.cdn_tin_url + "/assets/images/image-pending.gif",
    effect: "fadeIn",
    threshold: 100,
    failure_limit: 100,
    skip_invisible: false
  });
}
function dr_prismjs_init() {
  "object" == typeof Prism && Prism.highlightAll();
}
function dr_comment_show_morebtn_init() {
  $(".quote-detail-cont>.cont").each(function () {
    var a = 0,
      b = $(this);
    a = Math.round(b.height() / parseFloat(b.css("line-height")));
    a > 2 && b.parent().parent().parent().next(".toggle-quote").show();
  });
}
function dr_cache_tip_init() {
  $(".cache_tip.hide").each(function () {
    var c,
      a = $(this),
      b = a.attr("data-cname");
    b.length > 0 && (c = tinGetCookie(b), c.length > 0 && a.show());
  });
}
function dr_antiad_init() {}
function dr_auto_minheight_init() {
  var a, b;
  1 === tin.dragon_opt.auto_minheight && (a = document.documentElement.clientHeight, a > document.body.clientHeight && (b = a - $(".footer-area").outerHeight() - $("#nav-scroll").outerHeight() - parseInt($(".footer-area").css("margin-top"), 10), $(".dr-sitetips3").length > 0 && "1" != tinGetCookie("dr_sitetips3_cookie") && (b -= $(".dr-sitetips3").outerHeight()), $("#main-wrap").animate({
    "min-height": b
  })));
}
function startmarquee(a, b, c, d) {
  function i() {
    e = setInterval(j, b);
    g || (h.scrollTop += 1);
    clearTimeout(f);
  }
  function j() {
    0 != h.scrollTop % a ? (h.scrollTop += 1, h.scrollTop >= h.scrollHeight / 2 && (h.scrollTop = 0)) : (clearInterval(e), f = setTimeout(i, c));
  }
  var e,
    f,
    g = false,
    h = document.getElementById(d);
  h.innerHTML += h.innerHTML;
  h.onmouseover = function () {
    g = true;
  };
  h.onmouseout = function () {
    g = false;
  };
  h.scrollTop = 0;
  f = setTimeout(i, c);
}
function dr_must_login_init() {
  "0" == tin.uuid && tin.must_login > 0 && (window.location.href = tin.login_url);
}
function dr_set_ref_cookie_init() {
  var a = tinGetQueryString(tin.dragon_opt.ref_name);
  dr_isEmpty(a) || (tinSetCookie("dr_aff", a, 2592000, tin.home), tinSetCookie("dr_aff2", a, 86400, tin.home));
}
function dr_update_ref_cookie() {
  var b,
    a = tinGetCookie("dr_aff2");
  dr_isEmpty(a) || (b = a.split("|"), !dr_isEmpty(b["0"]) && dr_isEmpty(b["1"]) && (b["1"] = dr_get_time(), tinSetCookie("dr_aff2", b.join("|"), 86400, tin.home)));
}
function dr_ajax_bd_ptsl() {
  var a, b, c, d, e, f, g, h;
  if (!dr_isEmpty(tin.share) && 1 === tin.share.toBdts) {
    if (a = tin.Tracker.pid, window.localStorage) {
      if (b = Date.parse(new Date()) / 1000, c = 14400, d = 50, e = localStorage.getItem("dr_ajax_bdts_time"), f = localStorage.getItem("dr_ajax_bdts"), (dr_isEmpty(e) || b - e > c) && (f = "", localStorage.setItem("dr_ajax_bdts_time", b)), dr_isEmpty(f) || (g = f.split(","), g.length > d && (f = "", localStorage.setItem("dr_ajax_bdts_time", b))), !dr_isEmpty(f) && -1 !== f.indexOf("," + a)) return;
      localStorage.setItem("dr_ajax_bdts", f + "," + a);
    }
    h = $.ajax({
      type: "POST",
      url: tin.ajax_url,
      dataType: "json",
      timeout: 10000,
      data: {
        action: "dr_bd_ptsl",
        pid: a,
        nonce: drGetDrNonce()
      },
      success: function () {},
      complete: function (a, b) {
        "timeout" == b && h.abort();
      }
    });
  }
}
function QR8bitByte(a) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = a;
}
function QRCode(a, b) {
  this.typeNumber = a;
  this.errorCorrectLevel = b;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = new Array();
}
function QRPolynomial(a, b) {
  var c, d;
  if (undefined == a.length) throw new Error(a.length + "/" + b);
  for (c = 0; c < a.length && 0 == a[c];) c++;
  for (this.num = new Array(a.length - c + b), d = 0; d < a.length - c; d++) this.num[d] = a[d + c];
}
function QRRSBlock(a, b) {
  this.totalCount = a;
  this.dataCount = b;
}
function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}
function utf16to8(a) {
  var b, c, d, e;
  for (b = "", d = a.length, c = 0; d > c; c++) e = a.charCodeAt(c), e >= 1 && 127 >= e ? b += a.charAt(c) : e > 2047 ? (b += String.fromCharCode(224 | 15 & e >> 12), b += String.fromCharCode(128 | 63 & e >> 6), b += String.fromCharCode(128 | 63 & e >> 0)) : (b += String.fromCharCode(192 | 31 & e >> 6), b += String.fromCharCode(128 | 63 & e >> 0));
  return b;
}
function utf8to16(a) {
  for (var e, f, g, b = "", d = a.length, c = 0; d > c;) switch (e = a.charCodeAt(c++), e >> 4) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      b += a.charAt(c - 1);
      break;
    case 12:
    case 13:
      f = a.charCodeAt(c++);
      b += String.fromCharCode((31 & e) << 6 | 63 & f);
      break;
    case 14:
      f = a.charCodeAt(c++);
      g = a.charCodeAt(c++);
      b += String.fromCharCode((15 & e) << 12 | (63 & f) << 6 | (63 & g) << 0);
  }
  return b;
}
function dr_make_qrcode(a, b) {
  var d,
    c = b || window.location.href;
  "0" != tin.uuid && (c = dr_changeURLPar(c, tin.dragon_opt.ref_name, tin.uuid));
  d = {
    render: "canvas",
    text: c,
    width: "110",
    height: "110",
    background: "#ffffff",
    foreground: "#000000"
  };
  "www.ilxtx.com" == dr_get_http_host() && (d.src = tin.cdn_tin_url + "/assets/images/favicon-qrlogo.png");
  $(a).html("").qrcode(d);
}
function commentUploadPics(a) {
  var b, c;
  return a.files && a.files[0] ? ($(".comment-pic-upload-btn").html("<i class=\"fa fa-cloud-upload\"></i> 本地上传"), b = a.files[0], 0 !== b.type.indexOf("image") ? $(".comment-pic-upload-btn").html("<span style=\"color: #c50808\">请选择图片文件</span>") : (c = new FormData(), c.append("file", b), c.append("from", "comment"), c.append("post_id", tin.Tracker.pid), lxtxUpload(c, function (a) {
    upPicsrcname = b.name.replace(/(.*\/)*([^.]+).*/gi, "$2");
    $(".comment-pic-input form")[0].url.value = a;
    $(".comment-pic-input form")[0].url.alt = upPicsrcname;
    commentExtraPicSubmit($(".comment-pic-input form")[0]);
  }, function (a) {
    $(".comment-pic-upload-btn").html("<span style=\"color: #c50808\">图片上传出错：" + a + "</span>");
  }, function (a) {
    upprogress = 100 * a;
    upprogress = upprogress.toFixed(2);
    $(".comment-pic-upload-btn").html("努力上传中，进度：<span style=\"color: #367C0D\">" + upprogress + "%</span>");
  }), false)) : undefined;
}
function commentExtraPicSubmit(a) {
  a.url.alt ? addEditors($("#comment")[0], "<img src=\"" + a.url.value + "\" alt=\"" + a.url.alt + "\" />", "") : (link = a.url.value, name = link.replace(/(.*\/)*([^.]+).*/gi, "$2"), addEditors($("#comment")[0], "<img src=\"" + a.url.value + "\" alt=\"" + name + "\" />", ""));
  $.fancybox.close(true);
  return false;
}
function commentExtraUrlSubmit(a) {
  a.name.value || (a.name.value = a.url.value);
  addEditors($("#comment")[0], "<a href=\"" + a.url.value + "\">" + a.name.value + "</a>", "");
  $.fancybox.close(true);
  return false;
}
function commentExtraPmsgSubmit(a) {
  a.private.value;
  addEditors($("#comment")[0], "[private]" + a.private.value + "[/private]", "");
  $.fancybox.close(true);
  return false;
}
function commentExtraCodesSubmit(a) {
  a.private.value;
  addEditors($("#comment")[0], "<pre>" + dr_esc_html_convert(a.private.value) + "</pre>", "");
  $.fancybox.close(true);
  return false;
}
function dr_esc_html_convert(a) {
  var b = {
      "<": "&lt;",
      ">": "&gt;"
    },
    c = new RegExp("[" + Object.keys(b).join("") + "]", "g");
  return a.replace(c, function (a) {
    return b[a];
  });
}
function commentExtraSubmit(a) {
  var b, c;
  switch (a) {
    case "strong":
      addEditors($("#comment")[0], "<strong>", "</strong>");
      break;
    case "em":
      addEditors($("#comment")[0], "<em>", "</em>");
      break;
    case "underline":
      addEditors($("#comment")[0], "<u>", "</u>");
      break;
    case "center":
      addEditors($("#comment")[0], "<center>", "</center>");
      break;
    case "del":
      addEditors($("#comment")[0], "<del>", "</del>");
      break;
    case "quote":
      addEditors($("#comment")[0], "<blockquote>", "</blockquote>");
      break;
    case "daka":
      b = dr_dateFormat("yyyy-mm-dd hh:ii:ss");
      c = b.toLocaleString();
      addEditors($("#comment")[0], "<code>签到成功！签到时间：" + c + "，每日打卡，生活更精彩~</code>", "");
  }
  return false;
}
function addEditors(a, b, c) {
  if (document.selection) a.focus(), sel = document.selection.createRange(), sel.text = c ? b + sel.text + c : b, a.focus();else if (a.selectionStart || "0" == a.selectionStart) {
    var d = a.selectionStart,
      e = a.selectionEnd,
      f = e;
    a.value = c ? a.value.substring(0, d) + b + a.value.substring(d, e) + c + a.value.substring(e, a.value.length) : a.value.substring(0, d) + b + a.value.substring(e, a.value.length);
    f += c ? b.length + c.length : b.length - e + d;
    d == e && c && (f -= c.length);
    a.focus();
    a.selectionStart = f;
    a.selectionEnd = f;
  } else a.value += b + c, a.focus();
}
function dr_dateFormat(a, b) {
  var c, d;
  date = b ? new Date(b) : new Date();
  c = {
    "m+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "i+": date.getMinutes(),
    "s+": date.getSeconds(),
    S: date.getMilliseconds()
  };
  a.match(/(y+)/) && (a = a.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)));
  for (d in c) a.match(new RegExp("(" + d + ")")) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? c[d] : ("00" + c[d]).substr(("" + c[d]).length)));
  return a;
}
function secondToDate(a) {
  if (!a) return 0;
  var b = new Array(0, 0, 0, 0, 0);
  a >= 31536000 && (b[0] = parseInt(a / 31536000), a %= 31536000);
  a >= 86400 && (b[1] = parseInt(a / 86400), a %= 86400);
  a >= 3600 && (b[2] = parseInt(a / 3600), a %= 3600);
  a >= 60 && (b[3] = parseInt(a / 60), a %= 60);
  a > 0 && (b[4] = a);
  return b;
}
function CheckIFView(a) {
  var b = $(a).offset().top;
  return b >= $(window).scrollTop() && b < $(window).scrollTop() + $(window).height() ? true : false;
}
function dr_load_yiyan_shici() {
  var a = $.ajax({
    url: "https://v2.jinrishici.com/one.json",
    timeout: 5000,
    xhrFields: {
      withCredentials: true
    },
    success: function (a) {
      if ("success" == a.status && a.data.content.length > 0 && a.data.origin.title.length > 0) {
        var b = a.data.content + "----";
        a.data.origin.dynasty.length > 0 && (b += " " + a.data.origin.dynasty);
        a.data.origin.author.length > 0 && (b += "·" + a.data.origin.author);
        b += "《" + a.data.origin.title + "》";
        $("#comment").attr({
          placeholder: b,
          title: b
        });
      }
    },
    complete: function (b, c) {
      "timeout" == c && a.abort();
    }
  });
}
function dr_ajax_wx_mplogin(a) {
  var b = parseInt($("#mp-box").attr("data-mptimes")),
    c = $("#mp-box").attr("data-tk"),
    d = drGetDrNonce();
  isNaN(b) || dr_isEmpty(c) || dr_isEmpty(d) || ($("#mp-box").attr("data-mptimes", b + 1), b >= 60 && (clearInterval(a), $("#mp-box").attr("data-mptimes", "")), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    timeout: 10000,
    data: {
      action: "dr_wxmplogin_ajcheck",
      ticket: c,
      nonce: d
    },
    success: function (b) {
      1 == b.code ? (clearInterval(a), dr_Message(b.type, b.msg), $("#mp-box").attr("data-mptimes", ""), b.url ? window.location.href = b.url : location.reload()) : -2 == b.code ? (clearInterval(a), dr_Message(b.type, b.msg, 5), $("#mp-box").attr("data-mptimes", "")) : -1 == b.code && dr_Message(b.type, b.msg, 5);
    }
  }));
}
function dr_dplayer_video_init() {
  $(".dr-post-dp-video").each(function () {
    "use strict";

    var h,
      i,
      j,
      a = $(this),
      b = a.attr("data-vid"),
      c = dr_base64_decode(a.attr("data-vurl"), 1),
      d = a.attr("data-vpic"),
      e = a.attr("data-vmask"),
      f = a.attr("data-vlogo");
    const g = new DPlayer({
      container: document.getElementById(b),
      theme: "#fd7e14",
      screenshot: false,
      logo: f,
      video: {
        url: c,
        type: "auto",
        pic: d
      }
    });
    "" == c ? (h = a.find(".dplayer-mask"), h.show(), h.hasClass("content-do-video") || (h.append(dr_base64_decode(e)), a.find(".dplayer-video-wrap").addClass("video-filter"))) : (j = a.find(".dplayer-notice"), j.hasClass("dplayer-notice") && (j.css("opacity", "0.8"), j.html("<i class=\"fa fa-unlock-alt\"></i> 您已获得播放权限"), i = setTimeout(function () {
      clearTimeout(i);
      j.css("opacity", "0");
    }, 2000)), dr_dplayer_events_bind(g, "all"));
  });
}
function dr_dplayer_events(a, b) {
  switch (a) {
    case "loadedmetadata":
      b.notice("<i class=\"fa fa-check\"></i> 加载成功", 2000);
      break;
    case "webfullscreen_cancel":
      $(".floatbtn").show();
      $(".dr-dplayer-video .dplayer").css({
        "padding-bottom": "56.25%"
      });
      break;
    case "webfullscreen":
      $(".floatbtn").hide();
      $(".dr-dplayer-video .dplayer").css({
        "padding-bottom": "0"
      });
  }
}
function dr_dplayer_events_bind(a, b) {
  var b = b || "all",
    c = b.split(" ");
  ("all" == b || -1 != $.inArray("loadedmetadata", c)) && a.on("loadedmetadata", function () {
    dr_dplayer_events("loadedmetadata", a);
  });
  ("all" == b || -1 != $.inArray("webfullscreen", c)) && a.on("webfullscreen", function () {
    dr_dplayer_events("webfullscreen", a);
  });
  ("all" == b || -1 != $.inArray("webfullscreen_cancel", c)) && a.on("webfullscreen_cancel", function () {
    dr_dplayer_events("webfullscreen_cancel", a);
  });
}
function dr_goto_load_ajax_comments() {
  var a, b, c, d;
  if ("1" == tin.dragon_opt.cmt_ajaxload && (a = $("#comment-content-wrap"), a.length > 0)) {
    if (-1 != window.location.href.indexOf("#comment-") && $("html,body").animate({
      scrollTop: a.offset().top
    }, 800), CheckIFView(a) && (a.addClass("dr_ajaxcomment_loaded"), dr_load_ajax_comments()), a.hasClass("dr_ajaxcomment_loaded")) return;
    b = $(window).height();
    $(window).scroll(function () {
      a.hasClass("dr_ajaxcomment_loaded") || (c = $(this).scrollTop(), d = a.offset().top, b + c > d && (a.addClass("dr_ajaxcomment_loaded"), dr_load_ajax_comments()));
    });
  }
}
function dr_load_ajax_comments() {
  var a = url = window.location.href,
    b = window.location.hash;
  drGetDrNonce();
  dr_isEmpty(b) || (url = url.drReplaceAll(b, ""));
  url = dr_changeURLPar(url, "dr_post_action", "dr_ajaxload_comments");
  $.ajax({
    type: "GET",
    dataType: "html",
    url: url,
    success: function (c) {
      var g,
        d = $(c).find("#normal_comments").html(),
        e = $(c).find("#hot_comments").html(),
        f = dr_isEmpty(e) ? 0 : 1;
      dr_isEmpty(d) || (f && $("#hot_comments").html(e), $("#normal_comments").html(d), dr_lazyload_init(), dr_prismjs_init(), $("#comment-content-wrap .loading").hide(), f && $("#comment-content-wrap .hot-cmt-wrap").fadeIn(), $("#comment-content-wrap .normal-cmt-wrap").fadeIn(), dr_comment_show_morebtn_init(), -1 != a.indexOf("#comment-") ? (g = $(b), g.length > 0 ? ($(b + ">.comment-body>.comment-avatar>.avatar" + "," + b + ">.comment-body>.comment-avatar>.avatarspan").css({
        border: "2px solid #ff3636"
      }), $("html,body").animate({
        scrollTop: g.offset().top
      }, 800)) : $(".commentbtn").trigger("click")) : dr_isEmpty(b) || "#comments" != b || $(".commentbtn").trigger("click"));
    }
  });
}
function dr_is_formipt_allFilled(a, b) {
  var c, d;
  for (d in b) if (c = a.find("[name=\"" + b[d] + "\"]").val(), dr_isEmpty(c)) return false;
  return true;
}
function dr_load_formVCaptcha(a, b, c) {
  var b = b || "qq",
    d = "object" == typeof a ? a : $(a),
    e = "object" == typeof c ? c : $(c);
  "qq" == b ? show_ajax_qqcaptcha("form", e, d) : "geetest" == b ? show_ajax_geetestcaptcha("form", e, d) : show_ajax_slidercaptcha("form", e, d);
}
function dr_load_btnVCaptcha(a, b, c) {
  var d = "object" == typeof a ? a : $(a),
    b = b || "qq",
    c = c || "";
  "qq" == b ? show_ajax_qqcaptcha("btn", d, c) : "geetest" == b ? show_ajax_geetestcaptcha("btn", d, c) : show_ajax_slidercaptcha("btn", d, c);
  return false;
}
function dr_get_captcha_inputs(a) {
  switch (a) {
    case "qq":
      return "<div class=\"dr-cmt-norobot qq hide\"><input type=\"hidden\" name=\"tcpt_appid\" value=\"" + dr_base64_decode(tin.dragon_opt.cpt_qq_appid, 1) + "\" /><input type=\"hidden\" name=\"tcpt_ticket\" value=\"\" /><input type=\"hidden\" name=\"tcpt_randstr\" value=\"\" /></div>";
    case "geetest":
      return "<div class=\"dr-cmt-norobot gt hide\"><input type=\"hidden\" name=\"geetest_dr_userid\" value=\"\"><input type=\"hidden\" name=\"geetest_dr_status\" value=\"\"><input type=\"hidden\" name=\"geetest_challenge\" value=\"\"><input type=\"hidden\" name=\"geetest_validate\" value=\"\"><input type=\"hidden\" name=\"geetest_seccode\" value=\"\"></div>";
    case "slider":
      return "<div class=\"dr-cmt-norobot slider hide\"><input type=\"hidden\" name=\"slider_cpt_timestamp\" value=\"\" /><input type=\"hidden\" name=\"slider_cpt_nonce\" value=\"\" /><input type=\"hidden\" name=\"slider_cpt_sign\" value=\"\" /></div>";
  }
  return "";
}
function dr_add_captcha_datas(a, b) {
  var c = a,
    d = c.attr("data-cpt-type");
  switch (d) {
    case "qq":
      b.tcpt_ticket = c.attr("data-cpt-qq-ticket");
      b.tcpt_randstr = c.attr("data-cpt-qq-randstr");
      break;
    case "geetest":
      b.geetest_dr_userid = c.attr("data-cpt-gt-userid");
      b.geetest_dr_status = c.attr("data-cpt-gt-status");
      b.geetest_challenge = c.attr("data-cpt-gt-challenge");
      b.geetest_validate = c.attr("data-cpt-gt-validate");
      b.geetest_seccode = c.attr("data-cpt-gt-seccode");
      break;
    case "slider":
      b.slider_cpt_timestamp = c.attr("data-cpt-slider-timestamp");
      b.slider_cpt_nonce = c.attr("data-cpt-slider-nonce");
      b.slider_cpt_sign = c.attr("data-cpt-slider-sign");
  }
  return b;
}
function dr_add_captcha_formdatas(a, b, c) {
  switch (b) {
    case "qq":
      c.tcpt_ticket = dr_form_val(a, "tcpt_ticket");
      c.tcpt_randstr = dr_form_val(a, "tcpt_randstr");
      break;
    case "geetest":
      c.geetest_dr_userid = dr_form_val(a, "geetest_dr_userid");
      c.geetest_dr_status = dr_form_val(a, "geetest_dr_status");
      c.geetest_challenge = dr_form_val(a, "geetest_challenge");
      c.geetest_validate = dr_form_val(a, "geetest_validate");
      c.geetest_seccode = dr_form_val(a, "geetest_seccode");
      break;
    case "slider":
      c.slider_cpt_timestamp = dr_form_val(a, "slider_cpt_timestamp");
      c.slider_cpt_nonce = dr_form_val(a, "slider_cpt_nonce");
      c.slider_cpt_sign = dr_form_val(a, "slider_cpt_sign");
  }
  return c;
}
function dr_clear_captchaStr(a, b) {
  var d,
    e,
    f,
    c = "object" == typeof a ? a : $(a);
  b = b || "form";
  "form" == b ? (d = c.find("input[name=\"tcpt_ticket\"]"), e = c.find("input[name=\"geetest_challenge\"]"), f = c.find("input[name=\"slider_cpt_sign\"]"), d.length > 0 && d.val(""), e.length > 0 && e.val(""), f.length > 0 && f.val("")) : c.attr("data-cpt-qq-ticket", "").attr("data-cpt-gt-challenge", "").attr("data-cpt-slider-sign", "");
}
function show_ajax_qqcaptcha(a, b, c) {
  var d, f, g, h;
  "form" == a ? (d = "object" == typeof c ? c : $(c), "object" == typeof b ? b : $(b)) : (d = "object" == typeof b ? b : $(b), f = c);
  "form" == a && d.find("input[name=\"tcpt_appid\"]").length <= 0 && d.append(dr_get_captcha_inputs("qq"));
  g = tin.dragon_opt.cpt_qq_appid;
  ticket = "form" == a ? dr_form_val(d, "tcpt_ticket") : d.attr("data-cpt-qq-ticket");
  !dr_isEmpty(g) && dr_isEmpty(ticket) && (g = dr_base64_decode(g, 1), h = new TencentCaptcha(g, function (b) {
    0 == b.ret ? "form" == a ? (dr_form_val(d, "tcpt_ticket", b.ticket), dr_form_val(d, "tcpt_randstr", b.randstr), d.submit()) : (d.attr("data-cpt-qq-ticket", b.ticket), d.attr("data-cpt-qq-randstr", b.randstr), d.removeClass("dr_clkbtn_load_captcha").addClass(f).click().removeClass(f).addClass("dr_clkbtn_load_captcha")) : dr_clear_captchaStr(d, a);
  }), h.show());
}
function dr_sketchpad_reset() {
  if ("1" == tin.dragon_opt.cmt_draw && $("#dr-sketchpad").length > 0) {
    var a = $("#dr-sketchpad");
    a.length > 0 && (a.get(0).width = $("#commentform .comt-drawwrap").width() - 20, "object" == typeof dr_sketchpad && dr_sketchpad.clearALL());
  }
}
function dr_mail_inputList(a) {
  $(a).bind("input propertychange", function () {
    var e,
      g,
      f,
      h,
      i,
      j,
      l,
      k,
      m,
      n,
      a = $(this),
      b = a.attr("data-emails"),
      c = a.attr("list"),
      d = a.next("datalist");
    if ("undefined" == typeof b || b.length < 1) return false;
    if (d.length < 1 && a.after("<datalist id=\"" + c + "\"></datalist>"), e = b.split(","), f = a.val(), h = "", i = "", f = f.replace(/\s*/g, ""), a.val(f), f.length < 1) return false;
    if (-1 == f.indexOf("@")) return d.html(""), false;
    for (g = f.split("@"), h = g["0"], i = g["1"], j = e.length, k = "", m = 0; j > m; m++) l = e[m], ("" == i || -1 != l.indexOf("@" + i)) && (k += "<option value=\"" + h + l + "\"></option>");
    d.html(k);
    n = d.find("option").length;
    1 == n && f == d.find("option:first-child").val() && d.html("");
  });
}
function dr_lightbox_loading(a, b) {
  return "<div class=\"comment-extra-input " + a + "\"" + (dr_isEmpty(b) ? "" : " id=\"" + b + "\"") + "><div class=\"cont\"><div class=\"t-c fc-box-loading\">" + dr_get_refreshIcon() + "</div></div></div>";
}
function dr_pager_ajax_load(a, b) {
  b = b || "a";
  var c = a,
    d = c.attr("data-paginationId"),
    e = $(d).attr("data-loadwrapId"),
    f = "";
  f = "select" == b ? c.val() : c.attr("href");
  return c.hasClass("ajaxing") ? undefined : (c.addClass("ajaxing"), "select" != b && dr_addRefresh(c), $.ajax({
    type: "GET",
    dataType: "html",
    url: f,
    success: function (a) {
      var b = $(a).find(e).html();
      $(e).html(b);
      c.removeClass("ajaxing");
      b = "";
      dr_lazyload_init();
      window.history.pushState("", "", f);
    }
  }), false);
}
var opened, QRMode, QRErrorCorrectLevel, QRMaskPattern, QRUtil, QRMath, i, lxtxUpload;
for (String.prototype.drReplaceAll = function (a, b) {
  return this.split(a).join(b);
}, String.prototype.StrCut2Arr = function (a) {
  var e,
    f,
    b = this,
    c = [],
    d = Math.ceil(b.length / a);
  for (e = 0; d > e; e++) b.length >= a ? (f = b.substring(0, a), c.push(f), b = b.substring(a)) : (b = b, c.push(b));
  return c;
}, Math.uuid = function () {
  var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  return function (b, c) {
    var f,
      g,
      d = a,
      e = [];
    if (c = c || d.length, b) for (f = 0; b > f; f++) e[f] = d[0 | Math.random() * c];else for (e[8] = e[13] = e[18] = e[23] = "-", e[14] = "4", f = 0; 36 > f; f++) e[f] || (g = 0 | 16 * Math.random(), e[f] = d[19 == f ? 8 | 3 & g : g]);
    return e.join("");
  };
}(), $(function () {
  $(".dr-timer-days").each(function () {
    var a = $(this),
      b = a.attr("data-endtime"),
      c = a.attr("data-status"),
      d = a.attr("data-id"),
      e = a.attr("data-type");
    "1" != c || dr_isEmpty(b) || d.length <= 0 || dr_leftTimer(d, b, e);
  });
}), $(function () {
  $("input.disable-enter").keypress(function (a) {
    var b = window.event ? a.keyCode : a.which;
    return 13 == b ? (a.preventDefault(), false) : undefined;
  });
}), $(document).on("mouseover mouseout", ".tooltip-trigger", function (a) {
  var b, c, d, e, f, g, h, i;
  if ("mouseover" == a.type) {
    if (b = $(this), c = b.attr("data-tooltip-title"), d = b.offset().top, e = b.offset().left, f = b.width(), dr_isEmpty(c) && (c = b.attr("title"), b.attr("data-tooltip-title", c)), dr_isEmpty(c)) return;
    b.attr("title", "");
    $("body").append("<div class=\"tooltip top\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\">" + c + "</div></div>");
    g = $(".tooltip");
    h = g.width();
    i = g.height();
    g.css({
      left: e + (f - h) / 2 + "px",
      top: d - i - 8 + "px"
    }).addClass("in").fadeIn(250);
  } else $(".tooltip").remove();
}), $(function () {
  var b,
    a = new ClipboardJS(".dr-clipboard");
  a.on("success", function (a) {
    dr_Message("success", "复制成功");
    a.clearSelection();
  });
  a.on("error", function () {
    dr_Message("error", "复制失败，请手动复制");
  });
  b = new ClipboardJS(".dr-clipboard2", {
    text: function (a) {
      return "parent2children" == $(a).attr("data-type") ? $(a).parent().children($(a).attr("data-drid")).text() : undefined;
    }
  });
  b.on("success", function (a) {
    dr_Message("success", "复制成功");
    a.clearSelection();
  });
  b.on("error", function () {
    dr_Message("error", "复制失败，请手动复制");
  });
}), $(function () {
  function a() {
    $(window).scroll(function () {
      var a = $(window).scrollTop();
      a > 200 ? $("span[id=back-to-top]").fadeIn("slow") : $("span[id=back-to-top]").fadeOut("slow");
    });
    $("#back-to-top").click(function () {
      $("html,body").animate({
        scrollTop: 0
      }, 1000);
    });
  }
  a();
}), $(".like-btn").click(function () {
  var a = $(this),
    b = a.attr("pid"),
    c = "tin_post_like_" + b;
  a.hasClass("disabled") || a.hasClass("love-yes") || 1 == tinGetCookie(c) || (a.addClass("disabled"), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: {
      action: "like",
      pid: b,
      nonce: drGetDrNonce()
    },
    success: function (b) {
      if (dr_Message(b.type, b.msg), 1 == b.code) {
        a.children("span").text(b.num);
        a.addClass("love-animate").attr("title", b.title);
        tinSetCookie(c, 1, 3600, tin.home);
        var d = setTimeout(function () {
          clearTimeout(d);
          a.removeClass("love-animate").addClass("love-yes");
        }, 500);
      }
    }
  }));
}), $(".collect").click(function () {
  var a = $(this),
    b = parseInt(a.attr("pid"));
  act = "";
  return isNaN(b) || !tin_check_login() || a.hasClass("disabled") || (a.addClass("disabled"), a.hasClass("collect-no") ? act = "add" : a.hasClass("remove-collect") && (act = "remove"), "add" != act && "remove" != act) ? undefined : (dr_Message("loading", "请求中...", 0), $.ajax({
    type: "POST",
    url: tin.ajax_url,
    data: {
      action: "collect",
      pid: b,
      act: act
    },
    cache: false,
    success: function (b) {
      var c, d, e;
      1 == b.code ? (dr_Message(b.type, b.msg), c = a.children(".num"), c.length > 0 && c.text(b.num), d = a.children("i.fa"), "add" == act ? (d.length > 0 && d.removeClass("fa-star-o").addClass("fa-star"), a.children("span").text("已收藏"), a.addClass("collect-animate").attr("title", "已收藏"), e = setTimeout(function () {
        clearTimeout(e);
        a.removeClass("collect-animate").removeClass("collect-no").addClass("collect-yes");
      }, 500)) : (d.length > 0 && d.removeClass("fa-star").addClass("fa-star-o"), a.children("span").text("收藏"), a.addClass("collect-animate").attr("title", "收藏"), e = setTimeout(function () {
        clearTimeout(e);
        a.removeClass("collect-animate").removeClass("remove-collect").removeClass("collect-yes").addClass("collect-no");
      }, 500))) : dr_Message(b.type, b.msg, 3, false, function () {
        a.removeClass("disabled");
      });
    }
  }), false);
}), $(document).on("click", ".cmt-vote i", function (a) {
  a.preventDefault();
  var b = $(this),
    c = b.attr("data"),
    d = b.attr("data-type"),
    e = "tin_comment_vote_" + c;
  if (!(b.hasClass("disabled") || b.parent(".cmt-vote").hasClass("voted") || tinGetCookie(e).length > 0)) return b.addClass("disabled"), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: "action=commentvote&cid=" + c + "&type=" + d + "&nonce=" + drGetDrNonce(),
    success: function (a) {
      dr_Message(a.type, a.msg);
      1 == a.code && (tinSetCookie(e, d, 3600, tin.home), b.text(" " + a.num).addClass("voted"), b.parent(".cmt-vote").addClass("voted"));
    }
  }), false;
}), $(".dr-hover2show-wrap").hover(function () {
  var a = $(this),
    b = a.attr("data-hv-action"),
    c = a.attr("data-hv-qrid");
  !dr_isEmpty(c) && $(c).find("canvas").length <= 0 && dr_make_qrcode(c);
  a.css("opacity", "1");
  "slideDown" == b ? a.children(".dr-hover2show").stop().slideDown() : a.children(".dr-hover2show").stop().fadeIn();
}, function () {
  var a = $(this),
    b = a.attr("data-hv-action");
  a.css("opacity", "");
  "slideDown" == b ? a.children(".dr-hover2show").stop().slideUp() : a.children(".dr-hover2show").stop().fadeOut();
}), $("#layoutswt").click(function () {
  window.location.href = $("#layoutswt i").hasClass("is_blog") ? $("#layoutswt i").attr("src") + "?layout=cms" : $("#layoutswt i").hasClass("is_cms") ? $("#layoutswt i").attr("src") + "?layout=blocks" : $("#layoutswt i").attr("src") + "?layout=blog";
}), $(".stars").mouseover(function () {
  $(".rates").hasClass("rated") || ($(".stars").children("i").removeClass("fa-star").addClass("fa-star-o"), $(this).prevAll().children("i").removeClass("fa-star-o").addClass("fa-star"), $(this).children("i").removeClass("fa-star-o").addClass("fa-star"));
}), $(".stars").click(function () {
  function k(a) {
    allt = $(".ratingCount").html();
    allt = Number(allt) + 1;
    $(".ratingCount").html(allt);
    $(".ratingValue").html(a);
  }
  var a, b, c, d, e, f, g, h, i, j;
  $(".rates").hasClass("rated") || ($(".rates").addClass("rated"), a = $(this).attr("id"), b = $(".rates").attr("pid"), c = $(this).attr("times"), c = Number(c) + 1, $(this).attr("times", c), d = $("#starone").attr("times"), e = $("#startwo").attr("times"), f = $("#starthree").attr("times"), g = $("#starfour").attr("times"), h = $("#starfive").attr("times"), i = Number(d) + Number(e) + Number(f) + Number(g) + Number(h), j = 1 * Number(d) + 2 * Number(e) + 3 * Number(f) + 4 * Number(g) + 5 * Number(h), ra = j / i, ra = ra.toFixed(1), jQuery.ajax({
    type: "POST",
    xhrFields: {
      withCredentials: true
    },
    dataType: "html",
    url: tin.ajax_url,
    data: "action=rating&sid=" + a + "&pid=" + b,
    cache: false,
    success: k(ra)
  }));
}), $(".stars").mouseout(function () {
  function a(a) {
    "y" == $(a).attr("solid") ? $(a).children().attr("class", "fa fa-star") : $(a).children().attr("class", "fa fa-star-o");
  }
  $(".rates").hasClass("rated") || (a("#starone"), a("#startwo"), a("#starthree"), a("#starfour"), a("#starfive"));
}), $("#mailmessage-form").submit(function () {
  var g,
    a = $(this),
    b = a.find(".submit"),
    c = dr_form_val(a, "name"),
    d = dr_form_val(a, "mail"),
    e = a.find("textarea").val(),
    f = drGetDrNonce();
  if (!b.hasClass("disabled")) return g = {
    action: "dr_widget_mailmsg",
    tn: c,
    tm: d,
    tc: e,
    wp_nonce: f
  }, g = dr_add_captcha_formdatas(a, b.attr("data-cpt-type"), g), b.addClass("disabled"), dr_Message("loading", "发送中...", 0), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: g,
    success: function (c) {
      dr_Message(c.type, c.msg, 3, false, function () {
        b.removeClass("disabled");
        dr_clear_captchaStr(a, "form");
      });
      1 == c.code && $("#mailmessage").html(c.data);
    }
  }), false;
}), $(document).on("click", ".downldlink", function () {
  var c,
    d,
    e,
    b = $(this);
  b.hasClass("ajaxed") || (b.addClass("ajaxed"), c = b.attr("id"), d = b.attr("data-pid"), e = drGetDrNonce(), c && d && e && $.ajax({
    type: "POST",
    xhrFields: {
      withCredentials: true
    },
    dataType: "html",
    url: tin.ajax_url,
    data: "action=downldtimes&key=" + c + "&pid=" + d + "&nonce=" + e,
    cache: false
  }));
}), $(document).on("click", ".feedback-box-btn", function (a) {
  a.preventDefault();
  var b = $(this),
    c = b.attr("data-feedback-type"),
    d = b.attr("data-feedback-id");
  if (!dr_isEmpty(c) && !dr_isEmpty(d)) return $.fancybox.open("<div class=\"comment-extra-input fb-feedback-box\"><div class=\"cont\"><div class=\"t-c fc-box-loading\">" + dr_get_refreshIcon() + "</div></div></div>", {
    touch: false,
    clickSlide: false,
    afterShow: function (a, b) {
      $.ajax({
        type: "POST",
        dataType: "json",
        url: tin.ajax_url,
        data: {
          action: "dr_get_feedback_form",
          type: c,
          id: d,
          nonce: drGetDrNonce()
        },
        success: function (a) {
          1 == a.code ? b.$content.find(".cont").html(a.data.html) : ($.fancybox.close(true), dr_Message(a.type, a.msg));
        }
      });
      $(".comment-pic-input input[name=\"url\"]").focus();
    }
  }), false;
}), $(document).on("submit", "#fb-feedback-form", function (a) {
  a.preventDefault();
  var b = $(this),
    c = b.find(".submit");
  if (!c.hasClass("not2sub")) return dr_form_val(b, "reason", b.find(".reason.active").attr("data-value")), $.fancybox.close(true), c.addClass("not2sub"), dr_Message("loading", "请求中...", 0), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: b.serialize(),
    success: function (a) {
      dr_Message(a.type, a.msg);
    }
  }), false;
}), $(document).on("click", ".switch-active", function () {
  var b = $(this);
  b.parent().children().removeClass("active");
  b.addClass("active");
}), $.extend({
  drmessage: function (a) {
    var d,
      e,
      g,
      h,
      i,
      j,
      k,
      b = {
        msg: "操作成功",
        time: 3,
        type: "info",
        showClose: false,
        onClose: function () {}
      },
      c = new Array();
    c.success = "check-circle color-52c41a";
    c.error = "times-circle color-ff4d4f";
    c.info = "info-circle color-1890ff";
    c.warning = "info-circle color-faad14";
    c.warn = "info-circle color-faad14";
    c.loading = "spinner fa-spin color-1890ff";
    "string" == typeof a && (b.msg = a);
    "object" == typeof a && (b = $.extend({}, b, a));
    b.time = 1000 * Math.abs(Number(b.time));
    d = b.showClose ? "<i class=\"dr-c-message--close fa fa-close\"></i>" : "";
    e = "<div class=\"dr-c-message messageFadeInDown\"><div class=\"dr-c-message--cont\"><div class=\"dr-c-message--tip\"><i class=\"dr-c-message--icon fa fa-" + c[b.type] + "\"></i>" + b.msg + d + "</div></div>" + "</div>";
    g = $("body");
    h = $(e);
    j = function () {
      h.addClass("messageFadeOutUp");
      h.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        k();
      });
    };
    k = function () {
      h.remove();
      b.onClose(b);
      clearTimeout(i);
    };
    $(".dr-c-message").remove();
    g.append(h);
    h.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
      h.removeClass("messageFadeInDown");
    });
    g.on("click", ".dr-c-message--close", function () {
      j();
    });
    0 != b.time && (i = setTimeout(function () {
      j();
    }, b.time));
  }
}), $(document).on("submit", "form.dr_form_do_ajax_post", function (a) {
  var b, c, d;
  a.preventDefault();
  b = $(this);
  c = {};
  contentid = b.attr("data-contentid");
  c.scroll_to = b.attr("data-scrollto");
  d = b.serializeArray();
  d = $.param(d);
  dr_form_do_ajax_post(b, location.href, d, contentid, c);
  return false;
}), $(document).on("click", ".delete_promotecode", function () {
  var b,
    c,
    d,
    a = $(this);
  if (!a.hasClass("disabled")) return 1 == confirm("确认删除吗?") && (dr_addRefresh(a), b = a.parent("tr").children("input[name=promote_id]"), c = b.val(), d = $(".promote-table input[name=dpromoteNonce]").val(), $.ajax({
    type: "POST",
    url: location.href,
    data: {
      promote_id: c,
      dpromoteNonce: d
    },
    success: function () {
      a.parent("tr").remove();
      dr_Message("success", "删除成功");
    },
    error: function () {
      dr_Message("error", "删除失败，请重新再试", 2, false, function () {
        dr_removeRefresh(a);
      });
    }
  })), false;
}), $(".search-btn-click").bind("click", function () {
  "none" == $(".header-search-slide").css("display") ? ($(".search-btn-click i").attr("class", "fa fa-remove"), $(".header-search-slide").slideDown(), $(".header-search-slide .search-form").first().children("input").focus()) : "block" == $(".header-search-slide").css("display") && ($(".search-btn-click i").attr("class", "fa fa-search"), $(".header-search-slide").slideUp());
}), $("#nav-scroll form.search-form").submit(function () {
  $(".search-btn-click").trigger("click");
}), $("#nav-scroll .search-form.baidu").submit(function () {
  dr_isMobile() && $(this).attr("action", $(this).attr("data-url"));
}), opened = false, $(".toggle-menu").bind("click", function () {
  var b = $(this);
  screen.width > 640 && ($("#content-container").hasClass("show-tips3") && $("#pri-nav ul").css("position", "absolute"), $("#pri-nav ul.nav-menu").slideToggle());
  $("#content-container").toggleClass("push");
  $("#navmenu-mobile-wraper").toggleClass("push");
  opened ? (opened = false, $("#navmenu-mobile").removeClass("push"), $("#mobile-footer-menu").removeClass("push")) : (b.hasClass("mb-nav-loaded") || $.ajax({
    type: "GET",
    dataType: "html",
    url: tin.ajax_url,
    data: {
      action: "dr_get_mobilenav"
    },
    success: function (a) {
      b.addClass("mb-nav-loaded");
      $("#navmenu-mobile-wraper .mb-nav-loading").remove();
      $("#navmenu-mobile-wraper").append(a);
      $("#menu-mobile li.menu-item-has-children").prepend("<span class=\"child-menu-block\"></span>");
    }
  }), $("#navmenu-mobile").addClass("push"), $("#mobile-footer-menu").addClass("push"), opened = true);
}), $(document).on("click", ".child-menu-block", function () {
  $(this).parent().children(".sub-menu").slideToggle();
  $(this).parent().hasClass("expand") ? $(this).parent().removeClass("expand") : $(this).parent().addClass("expand");
}), $("#page-sort-menu-btn a").click(function () {
  $(".pagesidebar ul").slideToggle();
}), $(".menu-item-has-children").bind("mouseover", function () {
  document.body.offsetWidth > 640 && $(this).children("ul").stop().slideDown();
}).bind("mouseleave", function () {
  document.body.offsetWidth > 640 && $(this).children("ul").stop().slideUp();
}), $(document).on("click", ".comt-clk-btn", function () {
  var e,
    b = $(this),
    c = b.attr("data-act"),
    d = b.attr("data-tid");
  "none" == $(d).css("display") ? ("smilie" == c && (e = $("#comt-smilie"), e.data("loaded") || (e.load(tin.tin_url + "/includes/smiley.php"), e.data("loaded", true))), $(".comt-clk-wrap").hide(), $(d).show()) : $(d).hide();
}), $(function () {
  $(".comt-clk-wrap-hide").on("click", function () {
    $(".comt-clk-wrap").hide();
  });
}), $(document).on("click", "#comt-commonwords .words", function () {
  $("#comt-commonwords").hide();
  addEditors($("#comment")[0], $(this).find(".word").text(), "");
}), $(document).on("click", "#comt-smilie .smilie-tab-btn", function () {
  var e,
    f,
    b = $(this),
    c = b.attr("data-type"),
    d = b.attr("data-name");
  b.hasClass("on") || (e = $("#comt-smilie .smilie-content"), f = e.find(".smilie-content-" + c), $("#comt-smilie .smilie-title").text(d), b.parent().children().removeClass("on"), b.addClass("on"), e.find(".smilie-content-type").addClass("hide"), f.removeClass("hide"), f.hasClass("loaded") || (f.addClass("loaded"), f.find("img").each(function () {
    var a = $(this).attr("data-original");
    dr_isEmpty(a) || $(this).attr("src", a);
  })));
}), $(".author-upimg .edit").click(function () {
  var a = $(this);
  $(".author-upimg " + a.attr("data-ipt")).slideToggle();
}), $(".author-upimg .up.c").click(function () {
  var c,
    d,
    e,
    f,
    g,
    a = $(this),
    b = $(".author-upimg " + a.attr("data-ipt"));
  if (!(b.length < 1)) if (c = b.find(".imgipt").val(), 0 == c.length) b.find(".msg").html("请选择一张图片").slideDown(), d = setTimeout(function () {
    clearTimeout(d);
    b.find(".msg").html("").slideUp();
  }, 2000);else if (e = c.lastIndexOf("."), f = c.substring(e, c.length).toUpperCase(), ".PNG" !== f && ".JPG" !== f && ".JPEG" !== f && ".GIF" !== f && ".BMP" !== f && ".WEBP" !== f) b.find(".msg").html("图片格式不对").slideDown(), d = setTimeout(function () {
    clearTimeout(d);
    b.find(".msg").html("").slideUp();
  }, 2000);else {
    if (a.hasClass("disabled")) return;
    a.addClass("disabled");
    g = $(a.attr("data-formid"));
    g.attr("enctype", "multipart/form-data");
    g.submit();
  }
}), $(document).on("click", ".dr-continue-pay", function (a) {
  var b, c, d, e;
  a.preventDefault();
  return tin_check_login() && (b = $(this), !b.hasClass("disabled")) ? (dr_addRefresh(b), c = b.attr("data-id"), d = b.attr("data-signature"), e = b.attr("data-nonce"), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: {
      action: "continue_order",
      id: c,
      signature: d,
      wp_nonce: e
    },
    success: function (a) {
      0 == a.success ? dr_Alert(a.msg, function () {
        dr_removeRefresh(b);
      }) : location.href = a.redirect_url;
    }
  }), false) : undefined;
}), $("div.amount-number a").on("click", function (a) {
  a.preventDefault();
  var b = "input[name=" + $(this).attr("data-id") + "]",
    c = $(this).attr("data-act"),
    d = parseInt($(b).attr("data-perprice")),
    e = $(b).attr("data-max"),
    f = parseInt($(b).val()),
    g = 1,
    h = 0;
  g = isNaN(f) ? 1 : "plus" == c ? f + 1 : f - 1;
  1 > g && (g = 1);
  g > e && (g = e);
  h = g * d;
  $(b).val(g);
  $(".buygroup .dra-create-order.buyAct-a").attr("data-quantity", g).attr("data-price", h);
  $(".buygroup .ds-current-money.buyAct-m .amount").html(h / 100);
}), $("input[name=amountquantity]").keyup(function () {
  var e,
    a = $(this),
    b = parseInt(a.val()),
    c = parseInt(a.attr("data-perprice")),
    d = a.attr("data-max");
  isNaN(b) || 1 > b ? b = 1 : b > d && (b = d);
  e = b * c;
  a.val(b);
  $(".buygroup .dra-create-order.buyAct-a").attr("data-quantity", b).attr("data-price", e);
  $(".buygroup .ds-current-money.buyAct-m .amount").html(e / 100);
}), $(document).on("click", ".dra-box-pay", function (a) {
  var b, c;
  a.preventDefault();
  b = $(this);
  return "1" != b.attr("data-login") || tin_check_login() ? b.hasClass("drshowed") ? false : (b.addClass("drshowed"), c = {
    modal: true
  }, "0" == b.attr("data-modal") && (c.modal = false, "0" == b.attr("data-smallBtn") && (c.smallBtn = false), "1" != b.attr("data-touch") && (c.touch = false), "0" == b.attr("data-clickSlide") && (c.clickSlide = false), c.toolbar = false), c.afterClose = function () {
    b.removeClass("drshowed");
  }, !b.attr("data-modal"), "0" != b.attr("data-goto") && $.fancybox.open({
    src: b.attr("data-fbsrc"),
    type: "inline",
    opts: c
  }), false) : undefined;
}), $(document).on("click", ".dra-create-order", function (a) {
  var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
  a.preventDefault();
  b = $(this);
  return b.hasClass("disabled") ? undefined : (c = b.attr("data-pid"), d = Number(b.attr("data-price")), e = Number(b.attr("data-quantity")), f = b.attr("data-currency"), g = b.attr("data-note"), h = b.attr("data-signature"), i = b.attr("data-ordertype"), j = "", k = "0", l = "", m = drGetDrNonce(), n = dr_get_time(), o = Math.uuid(32), p = dr_get_TNTCheck_sign(n, o, "dr-create-order"), "dashang" == i ? j = $("#ds-addinfo").val() : "store" == i && (q = $("#shop-extra-price .dt-ext-price.on"), j = q.length > 0 ? q.attr("data-num") : "0", r = $("#shop-team-mode"), s = r.find(".dt-ext-price.on"), s.length > 0 && (k = s.attr("data-num"), l = r.attr("data-teamid"))), t = b.attr("data-has-paytype"), u = b.attr("data-paytype"), v = b.attr("data-paytype-box"), w = b.attr("id"), "1" == t && dr_isEmpty(u) && (dr_isEmpty(w) || (x = $("#" + w).attr("data-paytype"), dr_isEmpty(x) || (u = x)), dr_isEmpty(u)) ? (dr_Message("info", "请选择支付方式", 2, false, function () {
    dr_clear_captchaStr(b, "btn");
  }), false) : (y = b, dr_addRefresh(y), z = {
    action: "dr_create_order",
    product_id: c,
    order_price: d,
    order_quantity: e,
    order_currency: f,
    order_note: g,
    signature: h,
    ordertype: i,
    addinfo: j,
    order_team: k,
    order_team_id: l,
    nonce: m,
    wp_timestamp: n,
    wp_nonce: o,
    wp_signature: p,
    pay_type: u
  }, z = dr_add_captcha_datas(b, z), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: z,
    success: function (a) {
      0 == a.code ? dr_Message(a.type, a.msg, 2, false, function () {
        dr_removeRefresh(y);
        dr_clear_captchaStr(b, "btn");
        "2" != v || dr_isEmpty(y.attr("data-clkbtn-clbclass")) || y.removeClass("dra-create-order").addClass("dr_clkbtn_load_paytypebtns");
      }) : 0 == a.redirect ? (dr_Message(a.type, a.msg, 0), location.reload()) : 1 == a.redirect ? (dr_Message(a.type, a.msg, 0), location.href = a.redirect_url) : 2 == a.redirect ? dr_isEmpty(a.box_code) ? dr_Message(a.type, a.msg, 2, false, function () {
        dr_removeRefresh(y);
        dr_clear_captchaStr(b, "btn");
      }) : 1 == a.box_code ? dr_isEmpty(a.box_redirect_url) ? dr_qrcode_pay_box_timer(a) : (dr_Message(a.box_type, a.box_msg, 0), location.href = a.box_redirect_url) : dr_Message(a.box_type, a.box_msg, 2, false, function () {
        dr_removeRefresh(y);
        dr_clear_captchaStr(b, "btn");
      }) : (dr_removeRefresh(y), dr_clear_captchaStr(b, "btn"));
    }
  }), false));
}), $(document).on("click", ".pay-box .pay-type button", function (a) {
  a.preventDefault();
  var b = $(this),
    c = b.attr("data-btnid"),
    d = b.attr("data-type");
  b.hasClass("picked") || ($(c).attr("data-paytype", d), b.parent().parent("ul").find("button").removeClass("picked"), b.addClass("picked"));
}), $(document).on("click", "#dr-qrcodepay-pay-button-box .item", function (a) {
  var b, c, d, e;
  a.preventDefault();
  b = $(this);
  c = b.attr("data-btnid");
  d = b.attr("data-type");
  b.hasClass("disabled") || (b.addClass("disabled"), e = $(c).attr("data-clkbtn-clbclass"), $(c).attr("data-paytype", d).removeClass("dr_clkbtn_load_paytypebtns").addClass(e), b.removeClass("disabled"), $.fancybox.close(true), $(c).click());
}), $("body").on("click", ".dr_clkbtn_load_paytypebtns", function () {
  var b = $(this),
    c = b.attr("data-clkbtn-clbclass"),
    d = b.attr("data-paytype-box"),
    e = b.attr("data-has-paytype");
  dr_isEmpty(d) || "2" != d || dr_isEmpty(e) || "1" != e ? b.removeClass("dr_clkbtn_load_paytypebtns").addClass(c).click() : dr_show_qrcodepay_btn_box(b);
  return false;
}), $(document).on("click", "#shop-single-property .dt-ext-price", function () {
  var h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    a = $(this),
    b = $("#shop-single-property"),
    c = a.attr("data-type"),
    d = a.attr("data-num"),
    e = dr_shop_single_price,
    f = 0,
    g = 0;
  if (!dr_isEmpty(d)) return "attr" == c ? (f = d, g = parseInt(b.find("#shop-team-mode .dt-ext-price.on").attr("data-num")), isNaN(g) && (g = 0)) : (f = b.find("#shop-extra-price .dt-ext-price.on").attr("data-num"), g = d), a.hasClass("on") || (a.addClass("on").siblings().removeClass("on"), h = e.price[f], i = h.last, j = h.org, k = h.promote, l = h.vip, m = h.vip3, n = h.vip2, o = h.vip1, p = h.vip_title, q = h.bonus_amount_last, r = parseInt(h.amount), s = h.btn_text, t = h.sales, 1 == g && (i = h.team_last, k = h.team_promote, l = h.team_vip, m = h.team_vip3, n = h.team_vip2, o = h.team_vip1, p = h.team_vip_title, q = h.team_bonus_amount_last), 1 > r ? b.find(".buy-btn.clickAct").addClass("drshowed disabled sold-out") : b.find(".buy-btn.clickAct").removeClass("drshowed disabled sold-out"), b.find(".data_price_pay").text(i), b.find(".data_price_org").text(j), j == i ? b.find(".data_price_org").parent("del.org").addClass("hide-imp") : b.find(".data_price_org").parent("del.org").removeClass("hide-imp"), b.find(".data_price_period").text(k), b.find(".data_price_vip").text(l), b.find(".data_price_vip3").text(m), b.find(".data_price_vip2").text(n), b.find(".data_price_vip1").text(o), b.find(".data_price_viptitle").attr("title", p), b.find(".data_price_amount").text(r), b.find(".data_price_sales").text(t), b.find(".data_price_btntext").text(s), b.find(".data_bonus_amount").text(q), u = parseInt(dr_accMul(i, 100)), b.find(".dra-create-order").attr("data-perprice", u).attr("data-quantity", 1).attr("data-price", u), b.find(".ds-current-money.buyAct-m .amount").text(i), b.find("input[name=\"amountquantity\"]").val("1").attr("data-perprice", u).attr("data-max", r)), v = window.location.href, w = v, v = "attr" == c ? dr_changeURLPar(v, "sku_id", f) : dr_changeURLPar(v, "team", g), v != w && window.history.pushState("", "", v), false;
}), $("#shop-team-ower .cancel").on("click", function (a) {
  a.preventDefault();
  var b = $(this).attr("data-text");
  $("#shop-team-mode").attr("data-teamid", "");
  $("#shop-team-ower").hide();
  dr_isEmpty(b) || dr_Message("success", b);
}), $("#shop-team-list .add-team").on("click", function (a) {
  a.preventDefault();
  var b = $(this),
    c = $("#shop-team-ower"),
    d = $("#shop-team-mode"),
    e = b.attr("data-text");
  d.attr("data-teamid", b.attr("data-teamid")).find(".dt-ext-price[data-num=\"1\"]").click();
  c.find(".avatar-wrap").html(b.find(".avatar-wrap").html());
  c.find(".avatar-name").html(b.find(".avatar-name").html());
  c.show();
  dr_isEmpty(e) || dr_Message("success", e);
}), $("#dra-pay-order").on("click", function (a) {
  var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
  a.preventDefault();
  b = $(this);
  return b.hasClass("disabled") ? undefined : $("#checkout-address .addressItem").length < 1 ? (dr_Alert("请添加一个收货地址"), false) : (c = $("#checkout-address .addressItem.active"), d = c.attr("data-id"), dr_isEmpty(d) ? (dr_Alert("请选择收货地址"), false) : (e = c.attr("data-name"), f = c.attr("data-email"), g = c.attr("data-address"), h = c.attr("data-mobile"), i = c.attr("data-zip"), j = paymentInfo.productId, k = paymentInfo.orderId, l = paymentInfo.orderQuantity, m = $("input[name=\"gateway_type\"]:checked").val(), n = $("textarea[name=\"order-memo\"]").val(), o = paymentInfo.nonce, p = paymentInfo.signature, m.length <= 0 ? false : (b.addClass("disabled"), dr_Message("loading", "请求中...", 0), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: {
      action: "dr_pay_order",
      order_id: k,
      product_id: j,
      order_quantity: l,
      receive_name: e,
      receive_address: g,
      receive_zip: i,
      receive_email: f,
      receive_addrid: d,
      receive_mobile: h,
      gateway_type: m,
      order_msg: n,
      signature: p,
      wp_nonce: o
    },
    success: function (a) {
      var c, d;
      0 == a.success ? (dr_Message(a.type, $.trim(a.msg)), 1 == a.show_addr_box && (c = $("#checkout-address").find(".addressItem.active"), c.length > 0 && c.find(".action.edit").click()), d = setTimeout(function () {
        clearTimeout(d);
        b.removeClass("disabled");
      }, 2000)) : 0 == a.redirect ? (dr_Message(a.type, $.trim(a.msg), 0), d = setTimeout(function () {
        clearTimeout(d);
        location.reload();
      }, 2000)) : 1 == a.redirect ? (dr_Message(a.type, $.trim(a.msg), 0), location.href = a.redirect_url) : 2 == a.redirect ? (dr_Message(a.type, $.trim(a.msg), 0), $("form#dr-formtopay").attr("action", a.redirect_url), $("form#dr-formtopay").submit()) : (dr_Message("info", "Unknow"), d = setTimeout(function () {
        clearTimeout(d);
        b.removeClass("disabled");
      }, 2000));
    }
  }), false)));
}), $("#promote_code_apply").click(function (a) {
  a.preventDefault();
  var b = $(this),
    c = $("input[name=\"coupon\"]").val(),
    d = b.attr("data-order-id"),
    e = b.attr("data-signature"),
    f = b.attr("data-nonce");
  if (!(c.length <= 0 || b.hasClass("disabled"))) return dr_addRefresh(b), $.ajax({
    type: "POST",
    dataType: "json",
    url: tin.ajax_url,
    data: {
      action: "use_promote_code",
      promote_code: c,
      order_id: d,
      signature: e,
      wp_nonce: f
    },
    success: function (a) {
      1 == a.success ? ($("#promote_code span,#promote_code input").css("display", "none"), $("#promote_code").append(a.msg), $(".order-realPay .real-price, .order-items .total_price").text(a.total_price)) : dr_Alert(a.msg, function () {
        dr_removeRefresh(b);
      });
    }
  }), false;
}), $("#daily_sign").bind("click", function () {
  var a = $(this);
  a.hasClass("disabled") || (a.addClass("disabled"), dr_Message("loading", "请求中...", 0), $.ajax({
    type: "POST",
    dataType: "json",
    async: false,
    url: tin.ajax_url,
    data: {
      action: "daily_sign",
      nonce: drGetDrNonce()
    },
    success: function (b) {
      1 == b.code && (a.attr({
        id: "daily_signed",
        title: "今日已签到"
      }).text("已签到"), $(".ajax_dailysign_data").length > 0 && $(".ajax_dailysign_data").text(b.credit));
      dr_Message(b.type, b.msg, 3, false, function () {
        a.removeClass("disabled");
      });
    }
  }));
}), $(document).ready(function () {
  if (dr_must_login_init(), dr_lazyload_init(), dr_antiad_init(), dr_os_type_init(), dr_cache_tip_init(), dr_dplayer_video_init(), dr_auto_minheight_init(), $(".toggle-click-btn").click(function () {
    $(this).next(".toggle-content").slideToggle("slow");
    $(this).hasClass("yes") ? ($(this).removeClass("yes"), $(this).addClass("no")) : ($(this).removeClass("no"), $(this).addClass("yes"));
  }), $(".click-show-btn").click(function () {
    var e,
      f,
      g,
      a = $(this),
      b = a.attr("data-type"),
      c = a.attr("data-showid"),
      d = a.attr("data-effect");
    if (!dr_isEmpty(b) && !dr_isEmpty(c)) return e = "children" == b ? a.parent().find(c) : $(c), ("children" == b || e.length > 0) && (".dropdown-item" == c ? (f = a.hasClass("on"), g = a.parent().parent(), g.find(".btn").removeClass("on"), g.find(".dropdown-item").fadeOut(100), f || (a.addClass("on"), e.fadeIn())) : (a.toggleClass("on"), "slide" == d ? e.slideToggle() : e.fadeToggle())), false;
  }), $(".filter-item-box .filter-tag.height-hide").each(function () {
    var a = $(this);
    a.find(".name-val").height() > 56 && a.find(".actbtn").removeClass("hide-imp");
  }), $(".filter-tag > .actbtn").click(function () {
    var a = $(this);
    a.children("span").toggleClass("hide-imp");
    a.parent().toggleClass("height-hide");
  }), function () {
    $("#archives span.al_mon").each(function () {
      var a = $(this).next().children("li").size(),
        b = $(this).text();
      $(this).html(b + "<em> ( " + a + " 篇文章 )</em>");
    });
    var a = $("#archives ul.al_post_list"),
      b = $("#archives ul.al_post_list:first");
    a.hide(1, function () {
      b.show();
    });
    $("#archives span.al_mon").click(function () {
      $(this).next().slideToggle("slow");
      return false;
    });
    $("#al_expand_collapse").toggle(function () {
      a.show();
    }, function () {
      a.hide();
    });
  }(), $("h3 a").click(function () {
    var c,
      a = $(this),
      b = $(this).text();
    a.hasClass("btn") || a.hasClass("no-loading-text") || (a.text("请稍等，正在努力加载中..."), c = setTimeout(function () {
      clearTimeout(c);
      a.text(b);
    }, 2000));
  }), $(document).on("click", ".js-closebtn", function () {
    var a = $(this),
      b = a.attr("data-close-type"),
      c = a.attr("data-close-id");
    dr_isEmpty(b) || ("parent" == b ? dr_isEmpty(c) ? $(this).parent().fadeOut() : $(this).parent(c).fadeOut() : $(c).fadeOut());
  }), $("#news-scroll-zone").length > 0 && startmarquee(20, 30, 5000, "news-scroll-zone"), $(".tin_aff_url,.trackback-url,input[name=rss]").click(function () {
    $(this).select();
  }), $(".quick-copy-btn").click(function () {
    $(this).parent().children("input").select();
    alert("请用CTRL+C复制");
  }), dr_set_ref_cookie_init(), "undefined" != typeof tin.Tracker && update_tin_traffic(tin.Tracker.type, tin.Tracker.pid), $(".commentbtn").click(function (a) {
    a.preventDefault();
    $("html,body").animate({
      scrollTop: $("#comments_main").offset().top
    }, 800);
  }), $(".authorbtn").click(function () {
    $("html,body").animate({
      scrollTop: $("#sg-author-i").offset().top - 10
    }, 800);
  }), $(".site_loading").fadeOut(), tin.dragon_opt.loading) var a = setTimeout(function () {
    clearTimeout(a);
    $("#loading_icon").fadeOut("slow").remove();
    $("#loading_icon_css").remove();
  }, 500);
  $(function () {
    $(".dr-tabs-hnav").on("mouseover", function (a) {
      var b = $(this),
        c = b.attr("data-num"),
        d = b.attr("data-tid");
      b.hasClass("active") || c.length < 1 || d.length < 1 || ($(".dr-tabs-hnav[data-num=\"" + c + "\"]").removeClass("active").end(), b.addClass("active"), $(".dr-tabs-container[data-num=\"" + c + "\"]").stop(true, true).hide(), $(d).fadeIn(), a.preventDefault());
    });
    $(".dr-tabs-hnav").on("click", function (a) {
      a.preventDefault();
    });
    $(".dr-tabs-nav").on("click", function (a) {
      a.preventDefault();
      var b = $(this),
        c = b.attr("data-num"),
        d = b.attr("data-tid");
      b.hasClass("active") || c.length < 1 || d.length < 1 || ($(".dr-tabs-nav[data-num=\"" + c + "\"]").removeClass("active").end(), b.addClass("active"), $(".dr-tabs-container[data-num=\"" + c + "\"]").stop(true, true).hide(), $(d).fadeIn());
    });
  });
  $(".sociallogin-btn-act").click(function () {
    var a = $(this),
      b = a.attr("data-act"),
      c = a.attr("data-type"),
      d = encodeURIComponent(window.location.href),
      e = "";
    "logout" != b && (b = "login");
    dr_isEmpty(c) || (e = tin.home_url + "/oauth/" + c + "?action=" + b, "login" == b && (e += "&redirect=" + d), window.location.href = e);
  });
  "micromessenger" != dr_get_ua().match(/MicroMessenger/i) && $(".sociallogin-btn-act.wc").removeAttr("data-type").attr("data-fbsrc", "#mp-box").addClass("show-mp-box");
  $(function () {
    dr_ajax_bd_ptsl();
  });
}), $(document).on("click", ".nocache_refresh", function (a) {
  a.preventDefault();
  var b = window.location.href;
  b = dr_changeURLPar(b, "_nocache", drGetDrNonce() + "-" + Date.parse(new Date()) / 1000);
  window.location.href = b;
}), $(document).on("click", "img.dr_img_captcha", function () {
  var a = $(this);
  a.attr("src", a.attr("data-cpt") + Math.random());
}), $(document).on("click", ".dr_aimg_captcha", function () {
  var a = $(this);
  a.find("img").attr("src", a.attr("data-cpt") + Math.random());
}), function (a) {
  a.fn.qrcode = function (b) {
    var c, d;
    "string" == typeof b && (b = {
      text: b
    });
    b = a.extend({}, {
      render: "canvas",
      width: 256,
      height: 256,
      imgWidth: b.width / 4.7,
      imgHeight: b.height / 4,
      typeNumber: -1,
      correctLevel: QRErrorCorrectLevel.H,
      background: "#ffffff",
      foreground: "#000000"
    }, b);
    c = function () {
      var a,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = new QRCode(b.typeNumber, b.correctLevel);
      for (k.addData(utf16to8(b.text)), k.make(), a = document.createElement("canvas"), a.width = b.width, a.height = b.height, c = a.getContext("2d"), b.src && (d = new Image(), d.src = b.src, d.onload = function () {
        c.drawImage(d, (b.width - b.imgWidth) / 2, (b.height - b.imgHeight) / 2, b.imgWidth, b.imgHeight);
      }), e = b.width / k.getModuleCount(), f = b.height / k.getModuleCount(), g = 0; g < k.getModuleCount(); g++) for (h = 0; h < k.getModuleCount(); h++) c.fillStyle = k.isDark(g, h) ? b.foreground : b.background, i = Math.ceil((h + 1) * e) - Math.floor(h * e), j = Math.ceil((g + 1) * e) - Math.floor(g * e), c.fillRect(Math.round(h * e), Math.round(g * f), i, j);
      return a;
    };
    d = function () {
      var c,
        d,
        e,
        f,
        g,
        h,
        i = new QRCode(b.typeNumber, b.correctLevel);
      for (i.addData(utf16to8(b.text)), i.make(), c = a("<table></table>").css("width", b.width + "px").css("height", b.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", b.background), d = b.width / i.getModuleCount(), e = b.height / i.getModuleCount(), f = 0; f < i.getModuleCount(); f++) for (g = a("<tr></tr>").css("height", e + "px").appendTo(c), h = 0; h < i.getModuleCount(); h++) a("<td></td>").css("width", d + "px").css("background-color", i.isDark(f, h) ? b.foreground : b.background).appendTo(g);
      return c;
    };
    return this.each(function () {
      var e = "canvas" == b.render ? c() : d();
      a(e).appendTo(this);
    });
  };
}(jQuery), QR8bitByte.prototype = {
  getLength: function () {
    return this.data.length;
  },
  write: function (a) {
    for (var b = 0; b < this.data.length; b++) a.put(this.data.charCodeAt(b), 8);
  }
}, QRCode.prototype = {
  addData: function (a) {
    var b = new QR8bitByte(a);
    this.dataList.push(b);
    this.dataCache = null;
  },
  isDark: function (a, b) {
    if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
    return this.modules[a][b];
  },
  getModuleCount: function () {
    return this.moduleCount;
  },
  make: function () {
    var a, b, c, d, e, f;
    if (this.typeNumber < 1) {
      for (a = 1, a = 1; 40 > a; a++) {
        for (b = QRRSBlock.getRSBlocks(a, this.errorCorrectLevel), c = new QRBitBuffer(), d = 0, e = 0; e < b.length; e++) d += b[e].dataCount;
        for (e = 0; e < this.dataList.length; e++) f = this.dataList[e], c.put(f.mode, 4), c.put(f.getLength(), QRUtil.getLengthInBits(f.mode, a)), f.write(c);
        if (c.getLengthInBits() <= 8 * d) break;
      }
      this.typeNumber = a;
    }
    this.makeImpl(false, this.getBestMaskPattern());
  },
  makeImpl: function (a, b) {
    var c, d;
    for (this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount), c = 0; c < this.moduleCount; c++) for (this.modules[c] = new Array(this.moduleCount), d = 0; d < this.moduleCount; d++) this.modules[c][d] = null;
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(a, b);
    this.typeNumber >= 7 && this.setupTypeNumber(a);
    null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
    this.mapData(this.dataCache, b);
  },
  setupPositionProbePattern: function (a, b) {
    var c, d;
    for (c = -1; 7 >= c; c++) if (!(-1 >= a + c || this.moduleCount <= a + c)) for (d = -1; 7 >= d; d++) -1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? true : false);
  },
  getBestMaskPattern: function () {
    var a,
      b,
      c = 0,
      d = 0;
    for (a = 0; 8 > a; a++) this.makeImpl(true, a), b = QRUtil.getLostPoint(this), (0 == a || c > b) && (c = b, d = a);
    return d;
  },
  createMovieClip: function (a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i = a.createEmptyMovieClip(b, c),
      j = 1;
    for (this.make(), d = 0; d < this.modules.length; d++) for (e = d * j, f = 0; f < this.modules[d].length; f++) g = f * j, h = this.modules[d][f], h && (i.beginFill(0, 100), i.moveTo(g, e), i.lineTo(g + j, e), i.lineTo(g + j, e + j), i.lineTo(g, e + j), i.endFill());
    return i;
  },
  setupTimingPattern: function () {
    var a, b;
    for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
    for (b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2);
  },
  setupPositionAdjustPattern: function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g = QRUtil.getPatternPosition(this.typeNumber);
    for (a = 0; a < g.length; a++) for (b = 0; b < g.length; b++) if (c = g[a], d = g[b], null == this.modules[c][d]) for (e = -2; 2 >= e; e++) for (f = -2; 2 >= f; f++) this.modules[c + e][d + f] = -2 == e || 2 == e || -2 == f || 2 == f || 0 == e && 0 == f ? true : false;
  },
  setupTypeNumber: function (a) {
    var b,
      c,
      d = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (b = 0; 18 > b; b++) c = !a && 1 == (1 & d >> b), this.modules[Math.floor(b / 3)][b % 3 + this.moduleCount - 8 - 3] = c;
    for (b = 0; 18 > b; b++) c = !a && 1 == (1 & d >> b), this.modules[b % 3 + this.moduleCount - 8 - 3][Math.floor(b / 3)] = c;
  },
  setupTypeInfo: function (a, b) {
    var c,
      d,
      e = this.errorCorrectLevel << 3 | b,
      f = QRUtil.getBCHTypeInfo(e);
    for (c = 0; 15 > c; c++) d = !a && 1 == (1 & f >> c), 6 > c ? this.modules[c][8] = d : 8 > c ? this.modules[c + 1][8] = d : this.modules[this.moduleCount - 15 + c][8] = d;
    for (c = 0; 15 > c; c++) d = !a && 1 == (1 & f >> c), 8 > c ? this.modules[8][this.moduleCount - c - 1] = d : 9 > c ? this.modules[8][15 - c - 1 + 1] = d : this.modules[8][15 - c - 1] = d;
    this.modules[this.moduleCount - 8][8] = !a;
  },
  mapData: function (a, b) {
    var c,
      d,
      e,
      f,
      g = -1,
      h = this.moduleCount - 1,
      i = 7,
      j = 0;
    for (c = this.moduleCount - 1; c > 0; c -= 2) for (6 == c && c--;;) {
      for (d = 0; 2 > d; d++) null == this.modules[h][c - d] && (e = false, j < a.length && (e = 1 == (1 & a[j] >>> i)), f = QRUtil.getMask(b, h, c - d), f && (e = !e), this.modules[h][c - d] = e, i--, -1 == i && (j++, i = 7));
      if (h += g, 0 > h || this.moduleCount <= h) {
        h -= g;
        g = -g;
        break;
      }
    }
  }
}, QRCode.PAD0 = 236, QRCode.PAD1 = 17, QRCode.createData = function (a, b, c) {
  var d,
    e,
    f,
    g = QRRSBlock.getRSBlocks(a, b),
    h = new QRBitBuffer();
  for (d = 0; d < c.length; d++) e = c[d], h.put(e.mode, 4), h.put(e.getLength(), QRUtil.getLengthInBits(e.mode, a)), e.write(h);
  for (f = 0, d = 0; d < g.length; d++) f += g[d].dataCount;
  if (h.getLengthInBits() > 8 * f) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * f + ")");
  for (h.getLengthInBits() + 4 <= 8 * f && h.put(0, 4); 0 != h.getLengthInBits() % 8;) h.putBit(false);
  for (; !(h.getLengthInBits() >= 8 * f) && (h.put(QRCode.PAD0, 8), !(h.getLengthInBits() >= 8 * f));) h.put(QRCode.PAD1, 8);
  return QRCode.createBytes(h, g);
}, QRCode.createBytes = function (a, b) {
  var c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n = 0,
    o = 0,
    p = 0,
    q = new Array(b.length),
    r = new Array(b.length);
  for (c = 0; c < b.length; c++) {
    for (d = b[c].dataCount, e = b[c].totalCount - d, o = Math.max(o, d), p = Math.max(p, e), q[c] = new Array(d), f = 0; f < q[c].length; f++) q[c][f] = 255 & a.buffer[f + n];
    for (n += d, g = QRUtil.getErrorCorrectPolynomial(e), h = new QRPolynomial(q[c], g.getLength() - 1), i = h.mod(g), r[c] = new Array(g.getLength() - 1), f = 0; f < r[c].length; f++) j = f + i.getLength() - r[c].length, r[c][f] = j >= 0 ? i.get(j) : 0;
  }
  for (k = 0, f = 0; f < b.length; f++) k += b[f].totalCount;
  for (l = new Array(k), m = 0, f = 0; o > f; f++) for (c = 0; c < b.length; c++) f < q[c].length && (l[m++] = q[c][f]);
  for (f = 0; p > f; f++) for (c = 0; c < b.length; c++) f < r[c].length && (l[m++] = r[c][f]);
  return l;
}, QRMode = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, QRUtil = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1335,
  G18: 7973,
  G15_MASK: 21522,
  getBCHTypeInfo: function (a) {
    for (var b = a << 10; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;) b ^= QRUtil.G15 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15);
    return (a << 10 | b) ^ QRUtil.G15_MASK;
  },
  getBCHTypeNumber: function (a) {
    for (var b = a << 12; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;) b ^= QRUtil.G18 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18);
    return a << 12 | b;
  },
  getBCHDigit: function (a) {
    for (var b = 0; 0 != a;) b++, a >>>= 1;
    return b;
  },
  getPatternPosition: function (a) {
    return QRUtil.PATTERN_POSITION_TABLE[a - 1];
  },
  getMask: function (a, b, c) {
    switch (a) {
      case QRMaskPattern.PATTERN000:
        return 0 == (b + c) % 2;
      case QRMaskPattern.PATTERN001:
        return 0 == b % 2;
      case QRMaskPattern.PATTERN010:
        return 0 == c % 3;
      case QRMaskPattern.PATTERN011:
        return 0 == (b + c) % 3;
      case QRMaskPattern.PATTERN100:
        return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
      case QRMaskPattern.PATTERN101:
        return 0 == b * c % 2 + b * c % 3;
      case QRMaskPattern.PATTERN110:
        return 0 == (b * c % 2 + b * c % 3) % 2;
      case QRMaskPattern.PATTERN111:
        return 0 == (b * c % 3 + (b + c) % 2) % 2;
      default:
        throw new Error("bad maskPattern:" + a);
    }
  },
  getErrorCorrectPolynomial: function (a) {
    var b,
      c = new QRPolynomial([1], 0);
    for (b = 0; a > b; b++) c = c.multiply(new QRPolynomial([1, QRMath.gexp(b)], 0));
    return c;
  },
  getLengthInBits: function (a, b) {
    if (b >= 1 && 10 > b) switch (a) {
      case QRMode.MODE_NUMBER:
        return 10;
      case QRMode.MODE_ALPHA_NUM:
        return 9;
      case QRMode.MODE_8BIT_BYTE:
        return 8;
      case QRMode.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + a);
    } else if (27 > b) switch (a) {
      case QRMode.MODE_NUMBER:
        return 12;
      case QRMode.MODE_ALPHA_NUM:
        return 11;
      case QRMode.MODE_8BIT_BYTE:
        return 16;
      case QRMode.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + a);
    } else {
      if (!(41 > b)) throw new Error("type:" + b);
      switch (a) {
        case QRMode.MODE_NUMBER:
          return 14;
        case QRMode.MODE_ALPHA_NUM:
          return 13;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + a);
      }
    }
  },
  getLostPoint: function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = a.getModuleCount(),
      l = 0;
    for (b = 0; k > b; b++) for (c = 0; k > c; c++) {
      for (d = 0, e = a.isDark(b, c), f = -1; 1 >= f; f++) if (!(0 > b + f || b + f >= k)) for (g = -1; 1 >= g; g++) 0 > c + g || c + g >= k || (0 != f || 0 != g) && e == a.isDark(b + f, c + g) && d++;
      d > 5 && (l += 3 + d - 5);
    }
    for (b = 0; k - 1 > b; b++) for (c = 0; k - 1 > c; c++) h = 0, a.isDark(b, c) && h++, a.isDark(b + 1, c) && h++, a.isDark(b, c + 1) && h++, a.isDark(b + 1, c + 1) && h++, (0 == h || 4 == h) && (l += 3);
    for (b = 0; k > b; b++) for (c = 0; k - 6 > c; c++) a.isDark(b, c) && !a.isDark(b, c + 1) && a.isDark(b, c + 2) && a.isDark(b, c + 3) && a.isDark(b, c + 4) && !a.isDark(b, c + 5) && a.isDark(b, c + 6) && (l += 40);
    for (c = 0; k > c; c++) for (b = 0; k - 6 > b; b++) a.isDark(b, c) && !a.isDark(b + 1, c) && a.isDark(b + 2, c) && a.isDark(b + 3, c) && a.isDark(b + 4, c) && !a.isDark(b + 5, c) && a.isDark(b + 6, c) && (l += 40);
    for (i = 0, c = 0; k > c; c++) for (b = 0; k > b; b++) a.isDark(b, c) && i++;
    j = Math.abs(100 * i / k / k - 50) / 5;
    return l += 10 * j;
  }
}, QRMath = {
  glog: function (a) {
    if (1 > a) throw new Error("glog(" + a + ")");
    return QRMath.LOG_TABLE[a];
  },
  gexp: function (a) {
    for (; 0 > a;) a += 255;
    for (; a >= 256;) a -= 255;
    return QRMath.EXP_TABLE[a];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
}, i = 0; 8 > i; i++) QRMath.EXP_TABLE[i] = 1 << i;
for (i = 8; 256 > i; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (i = 0; 255 > i; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
  get: function (a) {
    return this.num[a];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (a) {
    var b,
      c,
      d = new Array(this.getLength() + a.getLength() - 1);
    for (b = 0; b < this.getLength(); b++) for (c = 0; c < a.getLength(); c++) d[b + c] ^= QRMath.gexp(QRMath.glog(this.get(b)) + QRMath.glog(a.get(c)));
    return new QRPolynomial(d, 0);
  },
  mod: function (a) {
    var b, c, d;
    if (this.getLength() - a.getLength() < 0) return this;
    for (b = QRMath.glog(this.get(0)) - QRMath.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d);
    for (d = 0; d < a.getLength(); d++) c[d] ^= QRMath.gexp(QRMath.glog(a.get(d)) + b);
    return new QRPolynomial(c, 0).mod(a);
  }
};
QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
QRRSBlock.getRSBlocks = function (a, b) {
  var c,
    d,
    e,
    f,
    g,
    h,
    i,
    j = QRRSBlock.getRsBlockTable(a, b);
  if (undefined == j) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
  for (c = j.length / 3, d = new Array(), e = 0; c > e; e++) for (f = j[3 * e + 0], g = j[3 * e + 1], h = j[3 * e + 2], i = 0; f > i; i++) d.push(new QRRSBlock(g, h));
  return d;
};
QRRSBlock.getRsBlockTable = function (a, b) {
  switch (b) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 0];
    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 1];
    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 2];
    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 3];
    default:
      return undefined;
  }
};
QRBitBuffer.prototype = {
  get: function (a) {
    var b = Math.floor(a / 8);
    return 1 == (1 & this.buffer[b] >>> 7 - a % 8);
  },
  put: function (a, b) {
    for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1));
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (a) {
    var b = Math.floor(this.length / 8);
    this.buffer.length <= b && this.buffer.push(0);
    a && (this.buffer[b] |= 128 >>> this.length % 8);
    this.length++;
  }
};
$(function () {
  $("#lxtx-index").click(function () {
    $(".post_nav").fadeToggle();
  });
});
$(function () {
  $(".dashang_pay_item").bind("click", function () {
    var a, b;
    $(this).addClass("checked").siblings(".dashang_pay_item").removeClass("checked");
    a = $(this).attr("data-id");
    b = $(".dashang_payimgs");
    b.find(".dashang_payimg").hide();
    b.find(".qrCode_" + a).show();
    $("#shang_pay_txt").text("alipay" == a ? "支付宝" : "微信");
  });
});
$(document).ready(function () {
  $("#post_nav ul").onePageNav({
    currentClass: "active",
    changeHash: false,
    easing: "easeInOutExpo",
    filter: ":not(.external)",
    scrollSpeed: 800,
    scrollOffset: 0,
    scrollThreshold: 0.1,
    begin: false,
    end: function () {
      var a = $("#post_nav li.active"),
        b = a.children("a").attr("href");
      dr_isEmpty(b) || $("body").hasClass("slideUp") && ($(".dr-sitetips3").length <= 0 || "1" == tinGetCookie("dr_sitetips3_cookie")) && $(b).animatescroll({
        padding: 65
      });
    },
    scrollChange: function (a) {
      var f,
        b = a.position().top,
        c = $("#post_nav ul"),
        d = c.height(),
        e = c.scrollTop();
      0 > b ? (f = b - d / 2, c.animate({
        scrollTop: "-=" + Math.abs(f)
      }, 1000)) : b > d - 22 && (f = b - d + 22 + e + d / 2, c.animate({
        scrollTop: f
      }, 1000));
    }
  });
});
$(function () {
  var d,
    e,
    f,
    g,
    a = $(window),
    c = ($("body"), $(".home-header-banner"));
  c.length > 0 && (d = c.find("span.point"), e = c.offset().top, f = d.outerWidth(), g = c.find(".header-pendant").width() || 0, c.hover(function () {
    d.css("display", "block");
  }, function () {
    d.css("display", "none");
  }).mousemove(function (b) {
    var h = b.pageX + 20,
      i = b.pageY - e - 10,
      j = c.height() - 28;
    a.width() - h < g ? d.css("display", "none") : d.css("display", "block");
    a.width() - h < f ? (d.addClass("left"), h = b.pageX - f - 20) : d.removeClass("left");
    d.css({
      left: h,
      top: i > j ? j : 0 >= i ? 0 : i
    });
  }));
});
try {
  window.console && window.console.log && console.log("\n%c © Dragon V" + tin.ver + " %c https://" + "www." + "ilxtx.com/dragon.html \n", "color:#FFFFFB;background:#1abc9c;padding:3px 0;border-radius:.5rem 0 0 .5rem;", "color:#FFFFFB;background:#080808;padding:3px 0;border-radius:0 .5rem .5rem 0;");
} catch (e) {}
$(function () {
  !function (a) {
    a.fn.extend({
      insertContent: function (b, c) {
        var e,
          f,
          g,
          h,
          i,
          j,
          d = a(this)[0];
        document.selection ? (this.focus(), e = document.selection.createRange(), e.text = b, this.focus(), e.moveStart("character", -g), f = e.text.length, 2 == arguments.length && (g = d.value.length, e.moveEnd("character", f + c), 0 >= c ? e.moveStart("character", f - 2 * c - b.length) : e.moveStart("character", f - c - b.length), e.select())) : d.selectionStart || "0" == d.selectionStart ? (h = d.selectionStart, i = d.selectionEnd, j = d.scrollTop, d.value = d.value.substring(0, h) + b + d.value.substring(i, d.value.length), this.focus(), d.selectionStart = h + b.length, d.selectionEnd = h + b.length, d.scrollTop = j, 2 == arguments.length && (d.setSelectionRange(h - c, d.selectionEnd + c), this.focus())) : (this.value += b, this.focus());
      }
    });
  }(jQuery);
});
(function () {
  var a = {
    offset: 5,
    tolerance: 5,
    classes: {
      initial: "dr-headroom",
      pinned: "slideUp",
      unpinned: "slideDown"
    }
  };
  new Headroom(document.querySelector("body"), a).init();
})();
$(function () {
  $(".lxtxsy1 .prev,.lxtxsy1 .next").on("click", function () {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      a = $(this);
    return "lock" == $("body").data("confirmReceive") ? false : ($("body").data("confirmReceive", "lock"), b = drGetDrNonce(), c = a.parent().attr("data-page"), d = a.parent().attr("data-cat"), e = a.parent().attr("data-post"), f = a.parent().attr("data-orderby"), g = a.parent().attr("data-module"), h = a.parent().attr("data-number"), i = a.parent().attr("data-metakey"), j = 1, "prev" == a.attr("class") ? k = 1 * c - 1 * j : "next" == a.attr("class") && (k = 1 * c + 1 * j), $.ajax({
      dataType: "json",
      url: tin.ajax_url,
      type: "POST",
      data: {
        action: "ajaxnewpostsinfo",
        page: k,
        cat: d,
        module: g,
        post: e,
        orderby: f,
        metakey: i,
        number: h,
        wp_nonce: b
      },
      beforeSend: function () {
        a.parent().parent().parent().find(".homeposts-content").css("opacity", ".2");
        a.parent().parent().parent().find(".homeposts-contents .loading").show();
      },
      error: function () {
        a.parent().parent().parent().find(".homeposts-contents .loading").hide();
        a.parent().parent().parent().find(".homeposts-content").css("opacity", "1");
        $("body").data("confirmReceive", "unlock");
      },
      success: function (b) {
        b.posts ? (a.parent().parent().parent().find(".homeposts-contents .loading").hide(), a.parent().parent().parent().find(".homeposts-content").css("opacity", "1").html(b.posts), a.parent().attr("data-page", k), "prev" == a.attr("class") ? 1 == k && a.hide() : "next" == a.attr("class") && a.parent().find(".prev").show()) : (a.parent().parent().parent().find(".homeposts-contents .loading").hide(), a.parent().parent().parent().find(".homeposts-content").css("opacity", "1"));
        $("body").data("confirmReceive", "unlock");
      }
    }), undefined);
  });
  $(".lxtxsy1 .ajaxposts").on("click", function () {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      a = $(this);
    return "lock" == $("body").data("confirmReceive") ? false : ($("body").data("confirmReceive", "lock"), b = drGetDrNonce(), c = a.attr("data-page"), d = a.attr("data-cat"), e = a.attr("data-post"), f = a.attr("data-orderby"), g = a.attr("data-module"), h = a.attr("data-number"), i = a.attr("data-metakey"), $.ajax({
      dataType: "json",
      url: tin.ajax_url,
      type: "POST",
      data: {
        action: "ajaxnewpostsinfo",
        page: c,
        cat: d,
        module: g,
        post: e,
        orderby: f,
        metakey: i,
        number: h,
        wp_nonce: b
      },
      beforeSend: function () {
        a.parent().parent().parent().find(".homeposts-content").css("opacity", ".2");
        a.parent().parent().parent().find(".homeposts-contents .loading").show();
      },
      error: function () {
        a.parent().parent().parent().find(".homeposts-contents .loading").hide();
        a.parent().parent().parent().find(".homeposts-content").css("opacity", "1");
        $("body").data("confirmReceive", "unlock");
      },
      success: function (b) {
        b.posts ? (a.addClass("on").siblings("a").removeClass("on"), a.parent().parent().parent().find(".homeposts-contents .loading").hide(), a.parent().parent().parent().find(".homeposts-content").css("opacity", "1").html(b.posts)) : (a.parent().parent().parent().find(".homeposts-contents .loading").hide(), a.parent().parent().parent().find(".homeposts-content").css("opacity", "1"));
        $("body").data("confirmReceive", "unlock");
      }
    }), undefined);
  });
  $(".dr_ajax_posts").on("click", function (a) {
    a.preventDefault();
    var b = $(this),
      c = b.attr("data-tplid"),
      d = b.attr("data-page"),
      e = b.attr("data-number"),
      f = b.attr("data-posttype"),
      g = b.attr("data-cat"),
      h = b.attr("data-metakey"),
      i = b.attr("data-orderby"),
      j = b.attr("data-hidecat"),
      k = b.attr("data-tplconf"),
      l = b.attr("data-ajaxid"),
      m = b.attr("data-act"),
      n = b.attr("data-other"),
      o = b.attr("data-setlink"),
      p = b.attr("href");
    if (!(b.hasClass("disabled") || d.length < 1 || l.length < 1)) return "cat" == m ? dr_addRefresh(b) : b.addClass("disabled").html(dr_get_refreshIcon("mg-r3") + "加载中..."), $.ajax({
      type: "POST",
      dataType: "json",
      url: tin.ajax_url,
      data: {
        action: "dr_ajax_posts",
        tpl_id: c,
        page: d,
        number: e,
        post_type: f,
        cat: g,
        meta_key: h,
        orderby: i,
        hidecat: j,
        tpl_conf: k,
        click_act: m,
        other: n,
        wp_nonce: drGetDrNonce()
      },
      success: function (a) {
        1 == a.code ? (a.data.posts ? ("more" == m ? ($(l).append(a.data.posts), b.attr("data-page", parseInt(d) + 1)) : $(l).html(a.data.posts), $(l).find(".aload_img").each(function () {
          var a = $(this);
          a.hasClass("aload_yes") || (a.addClass("aload_yes"), a.prepend("<img class=\"ajax hide\" src=\"" + a.children(".pic").attr("data-ajaximg") + "\" />"), a.children(".ajax").on("load", function () {
            a.children(".pic").hide();
            $(this).removeClass("hide");
          }));
        }), $(l).find(".aload_imgbg").each(function () {
          var a = $(this);
          a.hasClass("aload_yes") || (a.addClass("aload_yes"), a.css({
            "background-image": "url(" + a.attr("data-ajaximg") + ")"
          }));
        }), "cat" != m || "m15" != c || dr_isEmpty(a.data.m15) || dr_isEmpty(a.data.m15.id) || $(a.data.m15.id).css("background-image", "url(\"" + a.data.m15.img + "\")").attr("data-ft-original", a.data.m15.img)) : "more" == m && b.attr("data-page", ""), "cat" == m ? ($(l + "_more").html(a.data.btn).attr("data-page", "2").attr("data-cat", g), "1" == o && $(l + "_more").attr("href", p), a.data.count < parseInt(e) && $(l + "_more").attr("data-page", ""), a.data.count > 0 ? (b.parent().parent().children("li").siblings().removeClass("active"), b.parent().addClass("active")) : dr_Message("info", "No Posts"), b.removeClass("disabled").find("i").remove()) : (a.data.count < parseInt(e) && b.attr("data-page", ""), b.removeClass("disabled").html(a.data.btn))) : (dr_Message(a.type, a.msg), "cat" == m ? b.removeClass("disabled").find("i").remove() : b.removeClass("disabled").html(b.attr("data-text")));
      }
    }), false;
  });
});
jQuery(document).ready(function () {
  var a = {
    additionalMarginBottom: 10,
    minWidth: 860
  };
  a.additionalMarginTop = $(".dr-sitetips3").length <= 0 || "1" == tinGetCookie("dr_sitetips3_cookie") ? 70 : 10;
  jQuery("#sidebar,.dr-StickySidebar").theiaStickySidebar(a);
});
jQuery(document).ready(function (a) {
  a(".lxtxxsycbl").click(function () {
    a(".lxtxxsycbl a").is("#stb_btn_kuan") ? (a("#sidebar").hide(), a("#main-wrap-left").attr("id", "main-wrap-fulltp"), a("#single-blog-wrap").removeClass("two-col-container container"), a(".lxtxxsycbl a").attr("id", "stb_btn_zhai").text("显示边栏")) : a(".lxtxxsycbl a").is("#stb_btn_zhai") && (a("#sidebar").show(), a("#main-wrap-fulltp").attr("id", "main-wrap-left"), a("#single-blog-wrap").addClass("two-col-container container"), a(".lxtxxsycbl a").attr("id", "stb_btn_kuan").text("隐藏边栏"));
  });
  a("#stb_btn_zhan").click(function () {
    a("#stb_btn_zhan").hide();
    a("#stb_btn_suo,#archives ul.al_post_list").show();
  });
  a("#stb_btn_suo").click(function () {
    a("#stb_btn_suo,#archives ul.al_post_list").hide();
    a("#stb_btn_zhan").show();
  });
});
lxtxUpload = function (a, b, c, d) {
  var e = new XMLHttpRequest();
  e.open("POST", tin.tin_url + "/functions/up.php", true);
  d && (e.upload.onprogress = function (a) {
    d(a.loaded / a.total);
  });
  e.onload = function (a) {
    try {
      if (a = JSON.parse(e.responseText), 0 == a.code && c) return c(a.msg);
      if (1 == a.code && b) return b(a.data.url);
    } catch (d) {
      if (c) return c("发生意外错误~");
    }
  };
  e.send(a);
};
$(document).ready(function () {
  $(document).on("click", ".comt-ctrl span", function (a) {
    switch ($(this).data("action")) {
      case "pics":
        var b = "hide";
        "1" == $(this).data("third") && (b = "");
        $.fancybox.open("<div class=\"comment-extra-input comment-pic-input\"><h5>插入图片</h5><form onsubmit=\"return commentExtraPicSubmit(this);\"><input class=\"" + b + "\" placeholder=\"请输入图片地址（https://）\" title=\"请输入图片链接\" type=\"url\" name=\"url\" required><h5 class=\"or " + b + "\">或</h5><div class=\"comment-pic-upload\"><input type=\"file\" id=\"comment-pic-upload\" multiple=\"true\" onchange=\"commentUploadPics(this)\" title=\"点击选择或拖曳图片到这里上传\" accept=\"image/png,image/gif,image/jpg,image/jpeg\"><button class=\"comment-pic-upload-btn\" onclick=\"return false;\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> 本地上传</button></div><button type=\"submit\" class=\"" + b + "\">确认</button></form></div>", {
          touch: false,
          clickSlide: false,
          afterShow: function () {
            $(".comment-pic-input input[name=\"url\"]").focus();
          }
        });
        $("#comment-pic-upload").on("dragover", function () {
          $(this).parent().addClass("ondrag");
        });
        $("#comment-pic-upload").on("dragleave", function () {
          $(this).parent().removeClass("ondrag");
        });
        $("#comment-pic-upload").on("drop", function () {
          $(this).parent().removeClass("ondrag");
        });
        break;
      case "url":
        $.fancybox.open("<div class=\"comment-extra-input comment-link-input\"><h5>插入链接</h5><form onsubmit=\"return commentExtraUrlSubmit(this);\"><input placeholder=\"请输入链接地址（http://）\" type=\"url\" name=\"url\" required><input placeholder=\"请输入链接名称（选填）\" type=\"text\" name=\"name\"><button type=\"submit\">确认</button></form></div>", {
          touch: false,
          clickSlide: false,
          afterShow: function () {
            $(".comment-link-input input[name=\"url\"]").focus();
          }
        });
        break;
      case "pmsg":
        $.fancybox.open("<div class=\"comment-extra-input comment-pmsg-textaera\"><h5>插入私信</h5><form onsubmit=\"return commentExtraPmsgSubmit(this);\"><textarea name=\"private\" tabindex=\"1\" rows=\"5\" placeholder=\"请填入私密内容...\" title=\"私密内容，坏淫看不见~\" required=\"\"></textarea><button type=\"submit\" tabindex=\"2\">确认</button></form></div>", {
          touch: false,
          clickSlide: false,
          afterShow: function () {
            $(".comment-pmsg-textaera textarea").focus();
          }
        });
        break;
      case "close":
        $(".comment-form-tools").slideUp();
    }
    a.preventDefault();
  });
  $(document).on("click", ".comt-tools span", function (a) {
    switch ($(this).data("action")) {
      case "codes":
        $.fancybox.open("<div class=\"comment-extra-input comment-pmsg-textaera\"><h5>插入代码</h5><form onsubmit=\"return commentExtraCodesSubmit(this);\"><textarea name=\"private\" tabindex=\"1\" rows=\"8\" placeholder=\"请贴入代码...\" title=\"插入代码\" required=\"\"></textarea><button type=\"submit\" tabindex=\"2\">确认</button></form></div>", {
          touch: false,
          clickSlide: false,
          afterShow: function () {
            $(".comment-pmsg-textaera textarea").focus();
          }
        });
    }
    a.preventDefault();
  });
});
$(".follow-btn").click(function () {
  var a, b, c;
  if (tin_check_login()) {
    if (a = $(this), b = a.data("uid"), c = a.data("act"), nonce = a.data("nonce"), a.hasClass("disabled")) return;
    a.addClass("disabled");
    dr_Message("loading", "请求中...", 0);
    $.ajax({
      type: "POST",
      url: tin.ajax_url,
      dataType: "json",
      data: {
        action: "ajaxfollow",
        followed: b,
        act: c,
        nonce: nonce
      },
      success: function (b) {
        if (1 === b.code) switch (b.fl_type) {
          case 1:
            a.data("act", "unfollow");
            a.removeClass("unfollowed").addClass("followed");
            a.html("<i class=\"fa fa-check\"></i> <span>已关注</span>");
            a.attr("title", "取消关注");
            break;
          case 2:
            a.data("act", "unfollow");
            a.removeClass("unfollowed").addClass("followed");
            a.html("<i class=\"fa fa-exchange\"></i> <span>互相关注</span>");
            a.attr("title", "取消关注");
            break;
          default:
            a.data("act", "follow");
            a.removeClass("followed").addClass("current unfollowed");
            a.html("<i class=\"fa fa-user-plus\"></i> <span>关 注</span>");
            a.attr("title", "关注该用户");
        }
        dr_Message(b.type, b.msg, 3, false, function () {
          a.removeClass("disabled");
        });
      }
    });
    return false;
  }
});
$(".sg-act .post-cover-btn").click(function () {
  var a = $(this);
  $.fancybox.open({
    src: "#post-cover",
    type: "inline",
    opts: {
      touch: false,
      afterShow: function () {
        if (a.hasClass("loadcover")) {
          var d = a.attr("data-pid"),
            e = a.attr("data-nonce");
          $.ajax({
            url: tin.ajax_url,
            type: "POST",
            dataType: "json",
            data: {
              action: "dr_get_post_cover",
              pid: d,
              nonce: e
            },
            success: function (b) {
              var c, d, e;
              1 == b.code ? (c = $("#post-cover"), d = c.find(".fancybox-img"), d.attr("href", b.data.src).append("<img class=\"hide\" src=\"" + b.data.src + "\" />"), d.attr("data-fancybox", ""), c.find(".cover_down").attr("href", b.data.src).attr("download", b.data.download), c.find(".cover_share").attr("href", b.data.share).attr("target", "_blank"), c.find(".cover_shareqq").attr("href", b.data.shareqq).attr("target", "_blank"), c.find(".cover_sharelink").attr("data-clipboard-text", b.data.link), e = new ClipboardJS(".dr-clipboard_coverurl", {
                container: c[0]
              }), e.on("success", function () {
                dr_Message("success", "复制成功");
              }), e.on("error", function () {
                dr_Message("error", "复制失败，请手动复制");
              }), a.removeAttr("data-pid data-nonce").removeClass("loadcover"), $("#post-cover .fancybox-img img").on("load", function () {
                $("#post-cover .fancybox-img i").remove();
                $(this).removeClass("hide");
                $("#post-cover").removeClass("loadingcover");
              })) : (dr_Message(b.type, b.msg), $.fancybox.close(true));
            },
            error: function () {
              $.fancybox.close(true);
              dr_Message("error", "Unknow Error");
            }
          });
        }
      }
    }
  });
  return false;
});
$(".accordion-container-c1 .accordion").click(function () {
  $(this).toggleClass("yes").siblings().removeClass("yes");
  $(this).parent().find(".accordion-desc").not($(this).next()).slideUp("fast");
  $(this).next().slideToggle(400);
});
$(".accordion-container-c2 .tab-title span").mouseover(function () {
  $(this).hasClass("current") || ($(this).addClass("current").siblings("span").removeClass("current"), id = $(this).data("content"), $(this).parent().next(".tab-content").find(".accordion-desc[data-content=\"" + id + "\"]").fadeIn().siblings(".accordion-desc").hide());
});
$(function () {
  $(".slider-single").each(function () {
    var b = $(this).attr("data-auto"),
      c = $(this).attr("data-loop"),
      d = $(this).attr("data-nav"),
      e = $(this).attr("data-dots");
    b = 0 == b ? false : true;
    c = 0 == c ? false : true;
    d = 0 == d ? false : true;
    e = 0 == e ? false : true;
    $(this).owlCarousel({
      items: 1,
      lazyLoadEager: 1,
      margin: 10,
      autoplay: b,
      autoplayHoverPause: true,
      loop: c,
      nav: d,
      dots: e,
      lazyLoad: true,
      navElement: "div",
      animateOut: "fadeOut",
      autoplayTimeout: 5000
    });
  });
  $(".dr-thumbnail-slider").each(function () {
    var b = $(this).attr("data-auto"),
      c = $(this).attr("data-loop");
    b = 0 == b ? false : true;
    c = 0 == c ? false : true;
    $(this).children(".dr-thumbslider-thumb").flexslider({
      prevText: " ‹ ",
      nextText: " › ",
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 100,
      itemMargin: 5,
      asNavFor: $(this).children(".dr-thumbslider-main")
    });
    $(this).children(".dr-thumbslider-main").flexslider({
      prevText: " ‹ ",
      nextText: " › ",
      animation: "slide",
      controlNav: false,
      animationLoop: c,
      slideshow: b,
      slideshowSpeed: 5000,
      pauseOnHover: true,
      sync: $(this).children(".dr-thumbslider-thumb"),
      allowOneSlide: false,
      start: function () {
        $("body").removeClass("loading");
      }
    });
  });
});
$(function () {
  $(".expire-to-hide").each(function () {
    var a = parseInt(new Date().getTime() / 1000),
      b = parseInt($(this).attr("data-start")),
      c = parseInt($(this).attr("data-expire")),
      d = false;
    !isNaN(b) && !dr_isEmpty(b) && b > 0 && 0 > a - b && (d = true);
    isNaN(c) || dr_isEmpty(c) || !(0 > c || a - c > 0) || (d = true);
    d && $(this).hide();
  });
});
$(function () {
  $(document).on("mouseover", ".feature-posts-wrap .fp-item", function () {
    var c,
      a = $(this).attr("data-ft-original"),
      b = $(this).attr("data-id");
    b = "#" + b;
    c = $(b).attr("data-ft-original");
    return dr_isEmpty(a) || a.length <= 0 || dr_isEmpty(c) || c.length <= 0 ? false : (a != c && $(b).css("background-image", "url(\"" + a + "\")").attr("data-ft-original", a), undefined);
  });
});
$(function () {
  $(".show-mp-box").on("click", function (a) {
    var b, c, d, e;
    a.preventDefault();
    b = $(this);
    return b.hasClass("drshowed") ? false : (b.addClass("drshowed"), dr_set_redirect_cookie(document.location.href), c = setInterval(function () {
      dr_ajax_wx_mplogin(c);
    }, 3000), d = {
      modal: true
    }, e = $("#login-box-btn").hasClass("drshowed"), d.afterShow = function () {
      e && $("#login-box").fadeOut();
      var a = drGetDrNonce();
      return b.hasClass("disabled") ? false : (b.addClass("disabled"), $.ajax({
        type: "POST",
        url: tin.ajax_url,
        dataType: "json",
        data: {
          action: "dr_wxmplogin_getqr",
          nonce: a
        },
        success: function (a) {
          1 == a.code ? ($("#dr-mp-img").find("img").remove(), $("#dr-mp-img i").show(), $("#dr-mp-img").append("<img class=\"show-img\" src=\"" + a.qr + "\" style=\"display:none;\">"), $("#dr-mp-img img").on("load", function () {
            $("#dr-mp-img i").hide();
            $("#dr-mp-img img").show();
          }), $("#mp-box").attr("data-tk", a.tk), $("#mp-box").attr("data-mptimes", 0), b.removeClass("disabled")) : dr_Message(a.type, a.msg, 3, false, function () {
            b.removeClass("disabled");
          });
        },
        error: function () {
          dr_Message("error", "Unknow Error");
          b.removeClass("disabled");
        }
      }), undefined);
    }, d.afterClose = function () {
      e && $("#login-box").fadeIn();
      b.removeClass("drshowed");
      clearInterval(c);
      $("#mp-box").attr("data-mptimes", "");
    }, e && (d.animationDuration = 0, d.transitionDuration = 0), $.fancybox.open({
      src: b.attr("data-fbsrc"),
      type: "inline",
      opts: d
    }), false);
  });
});
$(function () {
  $("#bdshare a.cmd").on("click", function () {
    var b,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      a = $(this);
    if ("javascript:;" == a.attr("href")) switch (b = a.attr("data-type"), a.attr("data-api"), d = tin.share.name, e = tin.share.title, f = tin.dragon_opt.sep, g = encodeURIComponent(e + f + d), h = encodeURIComponent(tin.share.url), i = encodeURIComponent(tin.share.img), j = encodeURIComponent(d), k = encodeURIComponent(tin.share.expert), l = "", b) {
      case "sina":
        g = encodeURIComponent("【" + e + f + "#" + d + "#】" + tin.share.expert);
        l = "http://service.weibo.com/share/share.php?url=" + h + "&title=" + g + "&pic=" + i + "&appkey=" + tin.share.sina + "&count=1";
        a.attr("href", l);
        break;
      case "qq":
        l = "https://connect.qq.com/widget/shareqq/index.html?url=" + h + "&title=" + g + "&summary=" + k + "&pics=" + i + "&site=" + j + "&source=" + g;
        a.attr("href", l);
        break;
      case "qzone":
        l = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + h + "&title=" + g + "&summary=" + k + "&pics=" + i + "&site=" + j;
        a.attr("href", l);
        break;
      case "doban":
        l = "https://www.douban.com/share/service?href=" + h + "&name=" + g + "&text=" + k + "&image=" + i + "&starid=0&aid=0&style=11";
        a.attr("href", l);
    }
  });
});
$(document).on("click", "#comment-content-wrap.ajaxload .pagination li a", function (a) {
  a.preventDefault();
  var c,
    b = $(this),
    d = ourl = b.attr("href"),
    e = 5,
    f = $("#normal_comments");
  if (!f.hasClass("ajaxing") && !dr_isEmpty(ourl) && -1 != ourl.indexOf("comment-page-")) return $("#cancel-comment-reply-link").trigger("click"), -1 == ourl.indexOf("dr_post_action=") ? (d = ourl.drReplaceAll("/#comments", "/").drReplaceAll("&#comments", "").drReplaceAll("#comments", ""), d = dr_changeURLPar(d, "dr_post_action", "dr_ajaxload_comments")) : d = ourl.drReplaceAll("/#comments", "/").drReplaceAll("#comments", ""), c = d.drReplaceAll("&dr_post_action=dr_ajaxload_comments", "").drReplaceAll("?dr_post_action=dr_ajaxload_comments", "") + "#comments", f.addClass("ajaxing"), b.html(dr_get_refreshIcon()), $.ajax({
    type: "GET",
    dataType: "html",
    url: d,
    success: function (a) {
      var b = $(a).find("#normal_comments").html();
      b = b.drReplaceAll("dr_post_action=dr_ajaxload_comments", "").drReplaceAll("/?#comments", "/#comments");
      ($(".dr-sitetips3").length <= 0 || "1" == tinGetCookie("dr_sitetips3_cookie")) && (e = 65);
      $("html,body").animate({
        scrollTop: $("#comment-content-wrap .normal-cmt-wrap").offset().top - e
      }, 800);
      f.html(b).removeClass("ajaxing");
      dr_lazyload_init();
      dr_prismjs_init();
      dr_comment_show_morebtn_init();
      window.history.pushState("", "", c);
    }
  }), false;
});
$("body").on("click", ".comment-reply-link", function (a) {
  a.preventDefault();
  var b = $(this),
    c = b.attr("data-commentid"),
    d = b.attr("data-belowelement");
  dr_isEmpty(d) && (d = "div-comment-" + c);
  addComment.moveForm(d, c, "respond", b.attr("data-postid"));
  return false;
});
$(function () {
  $("#dr-ds-box .ds-money li").click(function () {
    var b,
      a = $(this);
    a.siblings().removeClass("picked");
    a.hasClass("custom") ? ($("#dr-ds-box li.custom1").css("display", "none"), $("#dr-ds-box li.custom2").css("display", "inline-block").addClass("picked"), $("#dr-ds-box .dashang-ipt").focus()) : (a.addClass("picked"), a.siblings(".custom1").css("display", "inline-block"), a.siblings(".custom2").css("display", "none"), b = a.find(".ds-item span").text(), $("#dr-ds-box .ds-current-money .amount").text(b), $("#dr-ds-box .create-button").attr("data-price", parseInt(dr_accMul(b, 100))));
  });
  $("#dr-ds-box .dashang-ipt").bind("input propertychange focus", function () {
    dr_format_input_amount(this);
    var a = $(this).val();
    a = parseFloat(a);
    isNaN(a) && (a = 0, $(this).val(""));
    a > 10000 && (a = 10000, $(this).val(a));
    $("#dr-ds-box .ds-current-money .amount").text(a);
    $("#dr-ds-box .create-button").attr("data-price", parseInt(dr_accMul(a, 100)));
  });
});
$("body").on("click", ".toggle-quote .toggle-quote-act", function (a) {
  a.preventDefault();
  var b = $(this),
    c = b.attr("data-text1"),
    d = b.attr("data-text2"),
    e = b.parent().prev().children(".quote-detail");
  c == b.text() ? (e.css({
    "max-height": "none"
  }), b.text(d)) : (e.css({
    "max-height": "50px"
  }), b.text(c));
});
$("body").on("click", ".dr_clkbtn_load_captcha", function () {
  var b = $(this),
    c = b.attr("data-cpt-addclass"),
    d = b.attr("data-cpt-type");
  return "disable" != d && "math" != d ? (dr_load_btnVCaptcha(b, d, c), false) : (b.removeClass("dr_clkbtn_load_captcha").addClass(c).click(), false);
});
$("body").on("click", ".dr_clkform_load_captcha", function () {
  var k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    b = $(this),
    c = b.attr("data-cpt-formid"),
    d = b.attr("data-cpt-type"),
    e = b.attr("data-cpt-tact"),
    f = b.attr("data-cpt-tname"),
    g = b.attr("data-cpt-tsubid"),
    h = $(c),
    i = 0,
    j = [];
  if ("disable" != d && "math" != d) switch (e) {
    case "comment":
      if (j = "0" == tin.uuid ? ["author", "email", "comment"] : ["comment"], k = dr_form_val(h, "cmt_draw_status"), l = 0, "1" == k && (j = "0" == tin.uuid ? ["author", "email"] : [], j.length > 0 && (dr_is_formipt_allFilled(h, j) || (l = 1)), !l)) {
        if (m = $("#dr-sketchpad")[0], dr_isCanvasBlank(m)) return dr_Message("info", "请画图先"), false;
        n = "";
        o = {};
        p = dr_get_time();
        q = Math.uuid(32);
        r = dr_get_TNTCheck_sign(p, q, "dr-cmt-draw");
        o.timestamp = p;
        o.nonce = q;
        o.signature = r;
        n = dr_rsa_encrypt(JSON.stringify(o), dr_getPubkey());
        dr_form_val(h, "cmt_draw_sign", n);
        i = 1;
      }
      break;
    default:
      dr_isEmpty(f) || (j = f.split(","));
  }
  1 != i && j.length > 0 && dr_is_formipt_allFilled(h, j) && (i = 1);
  return i ? (dr_load_formVCaptcha(h, d, g), false) : undefined;
});
$("body").on("click", ".dr_clk_to_alipay", function () {
  var e,
    b = $(this),
    c = b.attr("data-url"),
    d = "";
  dr_isEmpty(c) || (window.location.href = "alipays://platformapi/startapp?saId=10000007&qrcode=" + encodeURIComponent(c), e = setTimeout(function () {
    clearTimeout(e);
    d = dr_get_ua().match(/(iPhone|iPod|iPad);?/i) ? "https://itunes.apple.com/cn/app/id333206289" : "https://ds.alipay.com/";
    window.location.href = d;
  }, 2000));
});
$(function () {
  tin.dragon_opt.nolog_pay && $(".dr_pay2view").each(function () {
    var b = $(this),
      c = b.attr("data-id"),
      d = "." + c,
      e = ".video_" + c,
      f = args = "";
    b.hasClass("p2v_showed") || dr_isEmpty(c) || $(d).length <= 0 || (f = tinGetCookie(c), dr_isEmpty(f) || $.ajax({
      type: "GET",
      dataType: "html",
      url: tin.canonical_url + "?dr_action=pay2v&dr_token=" + f,
      success: function (a) {
        var b;
        $(e).length > 0 ? (b = $(a).find(e).html(), $(e).html(b)) : (b = $(a).find(d).html(), $(d).html(b));
        dr_lazyload_init();
        dr_prismjs_init();
        dr_dplayer_video_init();
        dr_cache_tip_init();
      }
    }));
  });
});
$(function () {
  var a, b, c, d;
  for (a = 1; 6 > a; a++) if (b = "dr_sitetips" + a + "_cookie", c = "#dr-sitetips" + a, !($(c).length <= 0 || 5 == a && (d = (navigator.language || navigator.browserLanguage).toLowerCase(), /^zh/.test(d)))) if ("1" != tinGetCookie(b)) switch (a) {
    case 2:
      $.fancybox.open({
        src: c,
        type: "inline",
        opts: {
          modal: true,
          afterClose: function () {
            tinSetCookie("dr_sitetips2_cookie", "1", 86400, tin.home);
          }
        }
      });
      break;
    case 3:
      $(c).slideDown().fadeIn();
      break;
    case 5:
      $(c).fadeIn();
      break;
    default:
      $(c).show();
  } else 3 == a && $("#content-container").removeClass("show-tips3");
});
$(".dr-sitetips .close").on("click", function () {
  var a = $(this),
    b = a.attr("data-cname"),
    c = parseInt(a.attr("data-ctime"));
  dr_isEmpty(b) || ("dr_sitetips3_cookie" == b && $("#dr-sitetips3").slideUp().fadeOut(), isNaN(c) && (c = 86400), tinSetCookie(b, "1", c, tin.home));
});
$(".floatbtn .ref-btn").click(function () {
  var a = $(this),
    b = "fb-aff-box",
    c = "#" + b;
  $(c).length <= 0 && a.after(dr_lightbox_loading(b, b));
  $.fancybox.open({
    src: c,
    type: "inline",
    opts: {
      touch: false,
      afterShow: function () {
        a.hasClass("loaded") || $.ajax({
          url: tin.ajax_url,
          type: "POST",
          dataType: "json",
          data: {
            action: "dr_get_aff_box",
            url: window.location.href,
            nonce: drGetDrNonce()
          },
          success: function (b) {
            var d, e;
            1 == b.code ? (d = $(c), d.find(".cont").html(b.html), a.addClass("loaded"), e = new ClipboardJS(".dr-clipboard_affurl", {
              container: d[0]
            }), e.on("success", function () {
              dr_Message("success", "复制成功");
            }), e.on("error", function () {
              dr_Message("error", "复制失败，请手动复制");
            })) : ($.fancybox.close(true), dr_Message(b.type, b.msg));
          },
          error: function () {
            $.fancybox.close(true);
            dr_Message("error", "Unknow Error");
          }
        });
      }
    }
  });
  return false;
});
$(document).ready(function () {
  dr_mail_inputList("#loginform .dr-maillist-ipt");
  dr_goto_load_ajax_comments();
  $(".quote-detail-cont>.cont").each(function () {
    var a = 0,
      b = $(this);
    a = Math.round(b.height() / parseFloat(b.css("line-height")));
    a > 2 && b.parent().parent().parent().next(".toggle-quote").show();
  });
});
$(document).on("click", ".ajax-pagination a", function (a) {
  a.preventDefault();
  dr_pager_ajax_load($(this), "a");
  return false;
});
$(document).on("change", ".ajax-pagination select", function (a) {
  a.preventDefault();
  dr_pager_ajax_load($(this), "select");
  return false;
});
function dr_os_type_init() {
  if (navigator.userAgentData != undefined) {
    if (navigator.userAgentData.getHighEntropyValues != undefined) {
      navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(ua => {
        if (navigator.userAgentData.platform === "Windows") {
          const majorPlatformVersion = parseInt(ua.platformVersion.split(".")[0]);
          if (majorPlatformVersion >= 13) {
            var cname = "dr_os_type";
            if (!tinGetCookie(cname)) {
              tinSetCookie(cname, "win11", 86400, tin.home);
            }
          }
        }
      });
    }
  }
}
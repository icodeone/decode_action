//Sat Dec 14 2024 06:44:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x72fcxf) {
    return typeof _0x72fcxf;
  } : function (_0x72fcxf) {
    return _0x72fcxf && "function" == typeof Symbol && _0x72fcxf.constructor === Symbol && _0x72fcxf !== Symbol.prototype ? "symbol" : typeof _0x72fcxf;
  },
  _ref2,
  _ref3,
  _ref4,
  _ref5,
  _ref6,
  _ref7,
  _ref8,
  _ref9,
  _ref10,
  _ref11,
  _ref12,
  _ref13,
  _fed;
function _defineProperty(_0x72fcxf, _0x72fcx11, _0x72fcx12) {
  _0x72fcx11 in _0x72fcxf ? Object.defineProperty(_0x72fcxf, _0x72fcx11, {
    value: _0x72fcx12,
    enumerable: true,
    configurable: true,
    writable: true
  }) : _0x72fcxf[_0x72fcx11] = _0x72fcx12;
  return _0x72fcxf;
}
_fed = {};
_defineProperty(_fed, "global", (_ref2 = {}, _defineProperty(_ref2, "init", function () {
  fed.global.draws();
  fed.record.init();
  0 != vfed.mob && vfed.wap != location.host && fed.global.mobile() && (location.href = location.href.replace(location.host, vfed.wap));
  $(document).on("click", ".fed-part-advs", function () {
    $(this).parent().remove();
  });
  $(".fed-week-brns").click(function () {
    $(".fed-week-brns").removeClass("fed-text-green");
    $(this).addClass("fed-text-green");
    $.get($(".fed-week-href").attr("data-week") + "?week=" + $(this).text().replace("周", "") + "&nums=" + $(".fed-week-href").attr("data-nums"), function (_0x72fcx14) {
      $(".fed-week-boxs").html(_0x72fcx14);
    });
  });
  $(".fed-page-jump").click(function () {
    var _0x72fcx14 = $(this).attr("data-sp"),
      _0x72fcx15 = parseInt($(".fed-page-info input").val());
    __js.showIndexComment(_0x72fcx15);
  });
}), _defineProperty(_ref2, "adds", function (_0x72fcxf) {
  $(".fed-part-mask").remove();
  $(_0x72fcxf).append("<div class=\"fed-part-mask fed-back-ashen fed-hide-sm fed-show\"></div>");
  $(".fed-play-iframe").addClass("fed-part-left");
}), _defineProperty(_ref2, "dels", function (_0x72fcxf) {
  $(_0x72fcxf).remove();
  $(".fed-play-iframe").removeClass("fed-part-left");
}), _defineProperty(_ref2, "user", function (_0x72fcxf) {
  $(".fed-part-height").height($(".fed-part-height").height());
  fed.cookie.get("user_id") != undefined && fed.cookie.get("user_id") != "" && ($(".fed-navs-login").addClass("fed-navs-user fed-event").removeClass("fed-navs-login").html("我的<span class=\"fed-part-move fed-edge-info fed-edge-bottom\"></span>"), $(_0x72fcxf).text(fed.cookie.get("user_name")));
  $(".fed-navs-user").attr("href", "javascript:;");
}), _defineProperty(_ref2, "login", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    fed.module.login();
  });
}), _defineProperty(_ref2, "gotop", function (_0x72fcxf, _0x72fcx11) {
  $(window).scroll(function () {
    500 < $(window).scrollTop() ? $(_0x72fcxf).addClass("fed-visible") : $(_0x72fcxf).removeClass("fed-visible");
  });
  $(document).on("click", _0x72fcx11, function () {
    $("html,body").animate(_defineProperty({}, "scrollTop", 0), 200);
  });
}), _defineProperty(_ref2, "submit", function (_0x72fcxf, _0x72fcx11) {
  $(document).on("keyup", _0x72fcx11, function (_0x72fcx16) {
    var _0x72fcx17 = window.event ? _0x72fcx16.keyCode : _0x72fcx16.which;
    13 == _0x72fcx17 && $(_0x72fcxf).click();
  });
}), _defineProperty(_ref2, "swiper", function () {
  var _0x72fcxf;
  $(".fed-list-pics.fed-lazy, img.fed-lazy").lazyload(_defineProperty({}, "effect", "fadeIn"));
  new Swiper(".fed-swip-container", (_0x72fcxf = {}, _defineProperty(_0x72fcxf, "wrapperClass", "fed-swip-wrapper"), _defineProperty(_0x72fcxf, "slideClass", "fed-swip-slide"), _defineProperty(_0x72fcxf, "pagination", ".fed-swip-pagin"), _defineProperty(_0x72fcxf, "bulletClass", "fed-swip-bullet"), _defineProperty(_0x72fcxf, "bulletActiveClass", "fed-swip-this"), _defineProperty(_0x72fcxf, "nextButton", ".fed-swip-next"), _defineProperty(_0x72fcxf, "prevButton", ".fed-swip-prev"), _defineProperty(_0x72fcxf, "paginationClickable", true), _defineProperty(_0x72fcxf, "lazyLoading", true), _defineProperty(_0x72fcxf, "lazyLoadingClass", "fed-swip-lazy"), _defineProperty(_0x72fcxf, "lazyLoadingInPrevNext", true), _defineProperty(_0x72fcxf, "autoplay", 5000), _defineProperty(_0x72fcxf, "loop", true), _0x72fcxf));
}), _defineProperty(_ref2, "click", function () {
  $(document).on("focus", "input,textarea", function () {
    $(this).attr("type") != "radio" && $(this).attr("type") != "submit" && $(".fed-tabr-info,.fed-goto-info").hide();
  });
  $(document).on("blur", "input,textarea", function () {
    $(".fed-tabr-info").fadeIn(500);
  });
  $(document).on("click", ".fed-event", function (_0x72fcx18) {
    _0x72fcx18.stopPropagation();
  });
  $(document).click(function () {
    $(".fed-navs-input").removeClass("fed-rims-reds");
    $(".fed-pops-btns").removeClass("fed-pops-tops");
    $(".fed-pops-channel").removeClass("fed-show");
    $(".fed-navs-search,.fed-navs-close").removeClass("fed-show");
    $(".fed-pops-navbar ul li").removeClass("fed-line-top fed-line-right");
    fed.global.dels(".fed-part-mask,.fed-mode-info");
    $(".fed-goto-info").show();
    $(".fed-conceal").hide();
    fed.navbar.closes();
    fed.navbar.trigon();
  });
}), _defineProperty(_ref2, "finish", function () {
  fed.global.click();
  fed.global.swiper();
  fed.global.user(".fed-pops-user li:first a");
  fed.global.gotop(".fed-goto-toper", ".fed-goto-toper");
  fed.module.share();
  fed.module.color();
  fed.myuser.center(".fed-subm-login");
}), _defineProperty(_ref2, "draws", function () {
  /MSIE/i.test(navigator.userAgent);
}), _defineProperty(_ref2, "mobile", function () {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  }
}), _defineProperty(_ref2, "vers", "vfed 3.1(苹果CMSv10)"), _defineProperty(_ref2, "jump", "http://vfed.cc"), _defineProperty(_ref2, "tips", function (_0x72fcxf) {
  alert(_0x72fcxf);
}), _defineProperty(_ref2, "ajax", function (_0x72fcxf) {
  $.get(_0x72fcxf);
}), _defineProperty(_ref2, "loca", function (_0x72fcxf) {
  location.href = _0x72fcxf;
}), _ref2));
_defineProperty(_fed, "module", (_ref3 = {}, _defineProperty(_ref3, "login", function () {
  return undefined != fed.cookie.get("user_id") && fed.cookie.get("user_id") != "" || void ($(".fed-comm-text").blur(), $(".fed-play-iframe").addClass("fed-part-left"), fed.global.submit(".fed-user-submit", ".fed-user-form"), $.get(vfed.path + "index.php/user/ajax_login", function (_0x72fcx18) {
    var _0x72fcx19;
    layer.open((_0x72fcx19 = {}, _defineProperty(_0x72fcx19, "type", 1), _defineProperty(_0x72fcx19, "id", "login"), _defineProperty(_0x72fcx19, "area", "auto;"), _defineProperty(_0x72fcx19, "title", false), _defineProperty(_0x72fcx19, "content", _0x72fcx18), _defineProperty(_0x72fcx19, "closeBtn", false), _defineProperty(_0x72fcx19, "shadeClose", true), _defineProperty(_0x72fcx19, "success", function () {
      $("input[name=\"user_name\"]").val(fed.cookie.get("fed_username"));
      $("input[name=\"user_pwd\"]").val(fed.cookie.get("fed_password"));
      $(document).on("click", ".fed-mode-close", function () {
        $(".fed-play-iframe").removeClass("fed-part-left");
        layer.closeAll();
      });
    }), _defineProperty(_0x72fcx19, "cancel", function () {
      $(".fed-play-iframe").removeClass("fed-part-left");
    }), _0x72fcx19));
  }));
}), _defineProperty(_ref3, "trace", function () {
  $.get("/cdn-cgi/trace", function (_0x72fcx18) {
    var _0x72fcx15 = _0x72fcx18.match(/(colo=?)(\S*)/)[2],
      _0x72fcx1a = [["HKG", "香港"], ["YVR", "加拿大"], ["TPE", "台北"], ["NRT", "东京"], ["ICN", "仁川"], ["LHR", "伦敦"], ["CDG", "巴黎"], ["FRA", "法兰克福"], ["KUL", "马来西亚"], ["LAX", "洛杉矶"], ["SIN", "新加坡"], ["SJC", "圣塞何"], ["KBP", "乌克兰"], ["PRG", "布拉格"]];
    $(".fed-navs-route").html("节点：" + _0x72fcx15).show();
    for (var _0x72fcx17 = 0; _0x72fcx17 < _0x72fcx1a.length; _0x72fcx17++) {
      _0x72fcx15 == _0x72fcx1a[_0x72fcx17][0] && $(".fed-navs-route").html("节点：" + _0x72fcx1a[_0x72fcx17][1]).show();
    }
  });
}), _defineProperty(_ref3, "color", function () {
  $(".fed-goto-color").click(function () {
    for (var _0x72fcx18, _0x72fcx15 = [["black", "黑色"], ["golds", "黑金"], ["colou", "彩色"], ["glass", "透明"], ["green", "绿色"], ["blues", "蓝色"], ["white", "橙色"], ["pinks", "粉色"], ["gules", "红色"]], _0x72fcx1a = "<ul class=\"fed-colo-info fed-part-rows fed-padding fed-back-whits fed-event\">", _0x72fcx17 = 0; _0x72fcx17 < _0x72fcx15.length; _0x72fcx17++) {
      _0x72fcx1a += "<li class=\"fed-col-xs4 fed-padding\"><a class=\"fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-" + _0x72fcx15[_0x72fcx17][0] + "\" data-type=\"" + _0x72fcx15[_0x72fcx17][0] + "\" href=\"javascript:;\">" + _0x72fcx15[_0x72fcx17][1] + "</a>";
    }
    _0x72fcx1a += "</ul>";
    layer.open((_0x72fcx18 = {}, _defineProperty(_0x72fcx18, "type", 1), _defineProperty(_0x72fcx18, "btn", false), _defineProperty(_0x72fcx18, "id", "color"), _defineProperty(_0x72fcx18, "title", "主题颜色"), _defineProperty(_0x72fcx18, "content", _0x72fcx1a), _defineProperty(_0x72fcx18, "shadeClose", true), _defineProperty(_0x72fcx18, "success", function () {
      $(".fed-play-iframe").addClass("fed-part-left");
      $(".fed-colo-btns").click(function () {
        fed.cookie.set("fed_color", $(this).attr("data-type"), 7);
        $(this).attr("data-type") == "white" ? $("#fed-colo-color").remove() : 0 < $("#fed-colo-color").length ? $("#fed-colo-color").attr("href", vfed.tpl + "asset/css/" + $(this).attr("data-type") + ".css?v=" + vfed.ver) : $("head").append("<link href=\"" + vfed.tpl + "asset/css/" + $(this).attr("data-type") + ".css?v=" + vfed.ver + "\" rel=\"stylesheet\" type=\"text/css\" id=\"fed-colo-color\" />");
      });
    }), _defineProperty(_0x72fcx18, "cancel", function () {
      $(".fed-play-iframe").removeClass("fed-part-left");
    }), _0x72fcx18));
  });
}), _defineProperty(_ref3, "notice", function () {
  var _0x72fcx18 = parseInt(fed.cookie.get("fed_notice"));
  if (_0x72fcx18 >= vfed.not) {
    return false;
  }
  $.get(vfed.path + "index.php/label/notice", function (_0x72fcx19) {
    var _0x72fcx16;
    layer.open((_0x72fcx16 = {}, _defineProperty(_0x72fcx16, "type", 1), _defineProperty(_0x72fcx16, "id", "notice"), _defineProperty(_0x72fcx16, "area", "auto;"), _defineProperty(_0x72fcx16, "title", false), _defineProperty(_0x72fcx16, "content", _0x72fcx19), _defineProperty(_0x72fcx16, "closeBtn", false), _defineProperty(_0x72fcx16, "shadeClose", true), _defineProperty(_0x72fcx16, "success", function () {
      $(".fed-play-iframe").addClass("fed-part-left");
      $(document).on("click", ".fed-tips-btns", function () {
        _0x72fcx18 ? fed.cookie.set("fed_notice", +(_0x72fcx18 + 1), 1) : fed.cookie.set("fed_notice", 1, 1);
        $(this).attr("data-href") && (location.href = $(this).attr("data-href"));
        $(".fed-play-iframe").removeClass("fed-part-left");
        layer.closeAll();
      });
      $(document).on("click", ".fed-tips-close", function () {
        $(".fed-play-iframe").removeClass("fed-part-left");
        layer.closeAll();
      });
    }), _defineProperty(_0x72fcx16, "cancel", function () {
      $(".fed-play-iframe").removeClass("fed-part-left");
    }), _0x72fcx16));
  });
}), _defineProperty(_ref3, "taoke", function () {
  $.get(vfed.tpl + "asset/fed/create.php?id=tao", function (_0x72fcx18) {
    if (null == _0x72fcx18 || 0 == _0x72fcx18.length) {
      return false;
    }
    for (var _0x72fcx17, _0x72fcx15 = "", _0x72fcx1a = 0; _0x72fcx1a < _0x72fcx18.length; _0x72fcx1a++) {
      _0x72fcx17 = 6 == _0x72fcx18.length && 3 < _0x72fcx1a ? " fed-hide-sm fed-show-md-block" : "";
      _0x72fcx15 += "<li class=\"fed-list-item fed-padding fed-col-xs4 fed-col-sm3 fed-col-md2" + _0x72fcx17 + "\">";
      _0x72fcx15 += "<a target=\"_blank\" class=\"fed-list-pics fed-lazy fed-part-2by3\" href=\"" + _0x72fcx18[_0x72fcx1a].ali_click + "\" style=\"background-image: url(" + _0x72fcx18[_0x72fcx1a].Pic + ")\"><span class=\"fed-list-play fed-list-arts fed-hide-xs\"></span><span class=\"fed-list-score fed-font-xii fed-back-green\">券后价￥" + _0x72fcx18[_0x72fcx1a].Price + "</span><span class=\"fed-list-remarks fed-font-xii fed-text-white fed-text-center\">领券￥" + _0x72fcx18[_0x72fcx1a].Quan_price + "</span></a>";
      _0x72fcx15 += "<a target=\"_blank\" class=\"fed-list-title fed-font-xiv fed-text-center fed-text-sm-left fed-visible fed-part-eone\" href=\"" + _0x72fcx18[_0x72fcx1a].ali_click + "\">" + _0x72fcx18[_0x72fcx1a].D_title + "</a>";
      _0x72fcx15 += "<span class=\"fed-list-desc fed-font-xii fed-visible fed-part-eone fed-text-muted fed-hide-xs fed-show-sm-block\">销量" + _0x72fcx18[_0x72fcx1a].Sales_num + "</span>";
      _0x72fcx15 += "</li>";
    }
    $(".fed-taor-info").html(_0x72fcx15);
  });
}), _defineProperty(_ref3, "share", function () {
  __js.share();
}), _defineProperty(_ref3, "qrcode", function (_0x72fcxf) {
  var _0x72fcx11;
  $(".fed-side-code").qrcode((_0x72fcx11 = {}, _defineProperty(_0x72fcx11, "image", $(".fed-side-image")[0]), _defineProperty(_0x72fcx11, "background", "#fff"), _defineProperty(_0x72fcx11, "render", "image"), _defineProperty(_0x72fcx11, "ecLevel", "Q"), _defineProperty(_0x72fcx11, "fill", "#333"), _defineProperty(_0x72fcx11, "mSize", 0.2), _defineProperty(_0x72fcx11, "size", 170), _defineProperty(_0x72fcx11, "text", _0x72fcxf), _defineProperty(_0x72fcx11, "quiet", 2), _defineProperty(_0x72fcx11, "mode", 4), _0x72fcx11));
}), _ref3));
_defineProperty(_fed, "navbar", (_ref4 = {}, _defineProperty(_ref4, "init", function () {
  fed.navbar.scroll(".fed-this", ".fed-pops-navbar ul");
  fed.navbar.toggle(".fed-navs-navbar", ".fed-pops-navbar", false);
  fed.navbar.toggle(".fed-navs-record", ".fed-pops-record", true);
  fed.navbar.toggle(".fed-navs-btns", ".fed-pops-cuts", true);
  fed.navbar.toggle(".fed-navs-code", ".fed-pops-code", true);
  fed.navbar.toggle(".fed-navs-user", ".fed-pops-user", false);
  fed.navbar.button(".fed-pops-btns");
}), _defineProperty(_ref4, "toggle", function (_0x72fcxf, _0x72fcx11, _0x72fcx12) {
  $(document).on("click", _0x72fcxf, function () {
    $(".fed-pops-btns").removeClass("fed-pops-tops");
    $(".fed-pops-channel").removeClass("fed-show");
    $(".fed-pops-navbar ul li").removeClass(" fed-line-top fed-line-right");
    $(".fed-pops-navbar ul").removeClass("fed-pops-open");
    $(_0x72fcx11).is(":hidden") ? (true == _0x72fcx12 && fed.global.adds("body"), fed.navbar.closes(), fed.navbar.trigon(), $(this).find(".fed-edge-info").removeClass("fed-edge-bottom").addClass("fed-edge-top"), $(".fed-conceal").hide(), $(_0x72fcx11).show()) : (fed.global.dels(".fed-part-mask"), fed.navbar.trigon(), $(_0x72fcx11).hide());
  });
}), _defineProperty(_ref4, "trigon", function () {
  $(".fed-edge-info").removeClass("fed-edge-top").addClass("fed-edge-bottom");
}), _defineProperty(_ref4, "button", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    0 < $(".fed-part-mask").length ? fed.global.dels(".fed-part-mask") : fed.global.adds("body");
    $(".fed-pops-btns").toggleClass("fed-pops-tops");
    $(".fed-pops-channel").toggleClass("fed-show");
    $(".fed-pops-navbar ul li").toggleClass(" fed-line-top fed-line-right");
    $(".fed-pops-navbar ul").toggleClass("fed-pops-open");
    fed.navbar.scroll(".fed-this", ".fed-pops-navbar ul");
  });
}), _defineProperty(_ref4, "closes", function () {
  $(".fed-pops-navbar ul").removeClass("fed-pops-open");
}), _defineProperty(_ref4, "waffle", function () {
  return Math.floor(10000000000 * Math.random());
}), _defineProperty(_ref4, "scroll", function (_0x72fcxf, _0x72fcx11) {
  if ($(_0x72fcxf).offset()) {
    var _0x72fcx16 = $(_0x72fcxf).offset().left + $(_0x72fcx11).scrollLeft(),
      _0x72fcx1b = ($(_0x72fcx11).width() - $(_0x72fcxf).width()) / 2;
    $(_0x72fcx11).scrollLeft(_0x72fcx16 - _0x72fcx1b);
  }
}), _ref4));
_defineProperty(_fed, "search", (_ref5 = {}, _defineProperty(_ref5, "init", function () {
  fed.search.focus(".fed-navs-input");
  fed.search.button(".fed-navs-button");
  fed.search.submit(".fed-navs-submit");
}), _defineProperty(_ref5, "jump", function (_0x72fcxf) {
  var _0x72fcx1c = $(".fed-navs-name").attr("data-type");
  if (_0x72fcx1c == undefined) {
    _0x72fcx1c = "";
  }
  return "/search?type=" + _0x72fcx1c + "&searchString=" + encodeURIComponent(_0x72fcxf);
}), _defineProperty(_ref5, "submit", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    $(this).prev().val() && fed.global.loca(fed.search.jump($(this).prev().val()));
  });
}), _defineProperty(_ref5, "button", function (_0x72fcxf) {
  $(".fed-navs-btns").click(function () {
    $(".fed-navs-search,.fed-navs-close").addClass("fed-show");
  });
  $(".fed-pops-cuts li").click(function () {
    $(".fed-navs-name").attr("data-type", $(this).attr("data-type")).attr("data-href", $(this).attr("data-href")).text($(this).text());
    $(".fed-pops-cuts li").removeClass("fed-text-green");
    $(this).addClass("fed-text-green");
    $(".fed-navs-search,.fed-pops-search,.fed-navs-close").show();
    $(".fed-navs-search .fed-navs-input").val("").focus();
    $(".fed-navs-search,.fed-navs-close").removeClass("fed-show");
    $(".fed-pops-key").hide();
    $(".fed-pops-box").show();
  });
  $(_0x72fcxf).click(function () {
    fed.global.adds("body");
    $(".fed-pops-search").is(":hidden") && ($(".fed-conceal").hide(), $(".fed-navs-search,.fed-pops-search,.fed-navs-close").show(), $(".fed-navs-search .fed-navs-input").focus(), $(".fed-pops-navbar").removeClass("fed-pops-hight"), $(".fed-pops-navbar ul").removeClass("fed-pops-open"));
  });
}), _defineProperty(_ref5, "focus", function (_0x72fcxf) {
  $(_0x72fcxf).focus(function () {
    $(".fed-conceal").hide();
    fed.global.submit(".fed-navs-submit", _0x72fcxf);
    $(".fed-navs-search,.fed-pops-search,.fed-navs-close").show();
    $(".fed-edge-info").removeClass("fed-edge-top").addClass("fed-edge-bottom");
    $(_0x72fcxf).val($(_0x72fcxf).val());
  });
}), _defineProperty(_ref5, "create", function () {
  _typeof(fed.history.output) !== "function" || _typeof(fed.record.list) !== "function" || _typeof(fed.navbar.waffle) !== "function";
}), _defineProperty(_ref5, "assn", function (_0x72fcxf) {
  $(document).on("keyup", _0x72fcxf, function (_0x72fcx19) {
    var _0x72fcx1a = window.event ? _0x72fcx19.keyCode : _0x72fcx19.which,
      _0x72fcx17 = $(this).val();
    _0x72fcx17 ? fed.search.list(_0x72fcx17, _0x72fcx1a) : ($(".fed-pops-key").hide(), $(".fed-pops-box").show());
  });
}), _defineProperty(_ref5, "tracks", function () {
  fed.search.init();
  fed.navbar.init();
  fed.player.init();
  fed.myuser.init();
  fed.history.init();
  fed.message.init();
  fed.global.finish();
}), _defineProperty(_ref5, "list", function (_0x72fcxf, _0x72fcx11) {
  $.getJSON(vfed.path + "index.php/ajax/suggest.html?mid=" + $(".fed-navs-name").attr("data-type") + "&wd=" + encodeURIComponent(_0x72fcxf), function (_0x72fcx16) {
    if (0 < _0x72fcx16.list.length) {
      for (var _0x72fcx17 = "<ul class=\"fed-pops-list fed-back-whits\">", _0x72fcx1d = 10 < _0x72fcx16.list.length ? 10 : _0x72fcx16.list.length, _0x72fcx1e = 0; _0x72fcx1e < _0x72fcx1d; _0x72fcx1e++) {
        _0x72fcx17 += "<li class=\"fed-pops-item fed-part-rows fed-line-bottom\"><a class=\"fed-part-eone\" href=\"" + $(".fed-navs-name").attr("data-href") + "?wd=" + _0x72fcx16.list[_0x72fcx1e].name + "\"><span class=\"fed-name fed-part-eone\">" + _0x72fcx16.list[_0x72fcx1e].name.replace(_0x72fcxf, "<span class=\"fed-text-green\">" + _0x72fcxf + "</span>") + "</span></a></li>";
      }
      _0x72fcx17 += "</ul>";
    }
    var _0x72fcx1f = $(".fed-pops-back").prevAll().length;
    if (40 == _0x72fcx11) {
      $(".fed-pops-item").hasClass("fed-pops-back") ? _0x72fcx1f == $(".fed-pops-item").length - 1 ? ($(".fed-navs-input").val($(".fed-pops-item").eq(0).find(".fed-name").text()), $(".fed-pops-item").removeClass("fed-pops-back").eq(0).addClass("fed-pops-back")) : ($(".fed-navs-input").val($(".fed-pops-item").eq(_0x72fcx1f + 1).find(".fed-name").text()), $(".fed-pops-item").removeClass("fed-pops-back").eq(_0x72fcx1f + 1).addClass("fed-pops-back")) : ($(".fed-navs-input").val($(".fed-pops-item").eq(0).find(".fed-name").text()), $(".fed-pops-item").removeClass("fed-pops-back").eq(0).addClass("fed-pops-back"));
    } else {
      if (38 == _0x72fcx11) {
        0 == _0x72fcx1f ? ($(".fed-navs-input").val($(".fed-pops-item").eq($(".fed-pops-item").length - 1).find(".fed-name").text()), $(".fed-pops-item").removeClass("fed-pops-back").eq($(".fed-pops-item").length - 1).addClass("fed-pops-back")) : ($(".fed-navs-input").val($(".fed-pops-item").eq(_0x72fcx1f - 1).find(".fed-name").text()), $(".fed-pops-item").removeClass("fed-pops-back").eq(_0x72fcx1f - 1).addClass("fed-pops-back"));
      } else {
        if (0 < _0x72fcx16.list.length) {
          $(".fed-pops-box").hide();
          $(".fed-pops-key").show().html(_0x72fcx17);
        } else {
          var _0x72fcx17 = "<ul class=\"fed-pops-list fed-back-whits\">";
          _0x72fcx17 += "<li class=\"fed-pops-item fed-part-rows fed-line-bottom fed-margin-bottom\"><a class=\"fed-part-eone\" href=\"" + fed.search.jump(_0x72fcxf) + "\"><span class=\"fed-name fed-part-eone fed-col-xs9\">" + _0x72fcxf + "</span><span class=\"fed-part-eone fed-text-muted fed-text-right fed-col-xs3\">查看更多</span></a></li>";
          _0x72fcx17 += "</ul>";
          $(".fed-pops-box").show();
          $(".fed-pops-key").show().html(_0x72fcx17);
        }
      }
    }
  }, "json");
}), _ref5));
_defineProperty(_fed, "player", (_ref6 = {}, _defineProperty(_ref6, "init", function () {
  $(".fed-tabs-errs").click(function () {
    __js.reportError();
  });
  15 == vfed.aid && (fed.player.favo(2), fed.player.postmu(), fed.player.iframe(".fed-play-iframe"), fed.player.parse(".fed-play-parse a"), fed.player.errbtn(".fed-play-erro", ".fed-play-error", ".fed-play-parse"), fed.player.errbtn(".fed-play-cuts", ".fed-play-parse", ".fed-play-error"), fed.global.ajax(vfed.path + "index.php/ajax/hits?mid=" + vfed.mid + "&id=" + vfed.did + "&type=update"), fed.global.ajax(vfed.path + "index.php/user/ajax_ulog/?ac=set&mid=" + vfed.mid + "&id=" + vfed.did + "&sid=" + vfed.sid + "&nid=" + vfed.nid + "&type=4"), fed.history.insert($(".fed-play-data").attr("data-name"), $(".fed-play-data").attr("data-show"), "", $(".fed-play-data").attr("data-nums")));
  24 == vfed.aid ? (fed.comment.init(), fed.global.ajax(vfed.path + "index.php/ajax/hits?mid=" + vfed.mid + "&id=" + vfed.did + "&type=update")) : (14 == vfed.aid || 15 == vfed.aid || 16 == vfed.aid) && (fed.comment.init(), fed.player.tabs(".fed-tabs-btns", ".fed-tabs-item", "fed-text-green", 0), fed.player.drop(".fed-play-btns", ".fed-play-item", "fed-back-green", 200), fed.player.drop(".fed-down-btns", ".fed-down-item", "fed-back-green", 200), fed.player.sort(".fed-drop-sort", ".fed-drop-head"));
}), _defineProperty(_ref6, "tabs", function (_0x72fcxf, _0x72fcx11, _0x72fcx12, _0x72fcx20) {
  $(document).on("click", _0x72fcxf, function () {
    $(_0x72fcxf).removeClass(_0x72fcx12);
    $(this).addClass(_0x72fcx12);
    $(_0x72fcx11).removeClass("fed-show").hide();
    $(_0x72fcx11).eq($(this).index()).fadeIn(_0x72fcx20).addClass("fed-show");
  });
}), _defineProperty(_ref6, "drop", function (_0x72fcxf, _0x72fcx11, _0x72fcx12, _0x72fcx20) {
  $(document).on("click", _0x72fcxf, function () {
    $(_0x72fcxf).find("a").removeClass(_0x72fcx12);
    $(this).find("a").addClass(_0x72fcx12);
    $(_0x72fcx11).removeClass("fed-show").hide();
    $(_0x72fcx11).eq($(this).index()).fadeIn(_0x72fcx20).addClass("fed-show");
  });
}), _defineProperty(_ref6, "sort", function (_0x72fcxf, _0x72fcx11) {
  $(document).on("click", _0x72fcxf, function () {
    $(this).text() == "排序：正序" ? $(this).text("排序：倒序") : $(this).text("排序：正序");
    for (var _0x72fcx1a = "", _0x72fcx17 = $(this).parents(_0x72fcx11).next().find("li").length - 1; 0 <= _0x72fcx17; _0x72fcx17--) {
      _0x72fcx1a += $(this).parents(_0x72fcx11).next().find("li").eq(_0x72fcx17).prop("outerHTML");
    }
    $(this).parents(_0x72fcx11).next().html(_0x72fcx1a);
  });
}), _defineProperty(_ref6, "favo", function (_0x72fcxf) {
  $(".fed-play-favo").click(function () {
    $.get(vfed.path + "index.php/user/ajax_ulog/?ac=set&mid=" + vfed.mid + "&id=" + vfed.did + "&sid=" + vfed.sid + "&nid=" + vfed.nid + "&type=" + _0x72fcxf, function (_0x72fcx15) {
      1 == _0x72fcx15.code ? $(".fed-play-favo").text("已收藏") : fed.module.login();
    });
  });
}), _defineProperty(_ref6, "errbtn", function (_0x72fcxf, _0x72fcx11, _0x72fcx12) {
  $(_0x72fcxf).click(function () {
    $(_0x72fcx11).is(":hidden") ? ($(_0x72fcx12).hide().removeClass("fed-show"), $(_0x72fcx11).addClass("fed-show"), $(".fed-play-iframe").addClass("fed-part-left")) : ($(_0x72fcx11).removeClass("fed-show"), $(".fed-play-iframe").removeClass("fed-part-left"));
  });
}), _defineProperty(_ref6, "parse", function (_0x72fcxf) {
  $(document).on("click", _0x72fcxf, function () {
    var _0x72fcx15 = $(this).attr("data-api"),
      _0x72fcx1a = $(".fed-play-iframe").attr("data-play");
    if (0 != $(".fed-play-iframe").attr("data-pass")) {
      var _0x72fcx1a = fed.base64.decode(_0x72fcx1a);
    }
    alert(_0x72fcx1a);
    $(_0x72fcxf).removeClass("fed-btns-green");
    $(this).addClass("fed-btns-green");
    $(".fed-play-parse").removeClass("fed-show");
    $(".fed-play-iframe").attr("src", "/play_iframe1.html");
    $(".fed-play-loader").show();
    var _0x72fcx17 = document.getElementById("fed-play-iframe");
    _0x72fcx17.src = _0x72fcx15 + _0x72fcx1a;
  });
}), _defineProperty(_ref6, "iframe", function (_0x72fcxf) {
  if (1 == $(_0x72fcxf).attr("data-lock") || 1 != $(_0x72fcxf).attr("data-code")) {
    return false;
  }
  var _0x72fcx19 = 0 == $(_0x72fcxf).attr("data-pass") ? $(_0x72fcxf).attr("data-play") : fed.base64.decode($(_0x72fcxf).attr("data-play")),
    _0x72fcx16 = 0 == $(_0x72fcxf).attr("data-stat") && -1 < _0x72fcx19.indexOf(".m3u8") ? vfed.tpl + "asset/fed/player.php?url=" : $(_0x72fcxf).attr("data-pars"),
    _0x72fcx1b = 0 != $(_0x72fcxf).attr("data-stat") && -1 < _0x72fcx19.indexOf("&") ? encodeURIComponent(_0x72fcx19) : _0x72fcx19,
    _0x72fcx21 = 0 == $(_0x72fcxf).attr("data-auto") ? "&auto=" + $(_0x72fcxf).attr("data-auto") : "",
    _0x72fcx22 = 0 == $(_0x72fcxf).attr("data-trys") ? "" : "&trys=" + $(_0x72fcxf).attr("data-trys"),
    _0x72fcx23 = 0 == $(_0x72fcxf).attr("data-seek") ? "" : "&seek=" + $(_0x72fcxf).attr("data-seek"),
    _0x72fcx24 = $(_0x72fcxf).attr("data-next") ? "&jump=" + $(_0x72fcxf).attr("data-next") : "",
    _0x72fcx25 = "/play_iframe1.html",
    _0x72fcx26 = document.getElementById("fed-play-iframe");
  if (1 == $(_0x72fcxf).attr("data-chat")) {
    fed.cookie.get("fed_wechat") ? _0x72fcx26.src = _0x72fcx25 : $(".fed-chat-info").show();
    $(document).on("click", ".fed-chat-submit", function () {
      return fed.base64.decode($(_0x72fcxf).attr("data-word")) == $(".fed-chat-input").val() ? void (fed.cookie.set("fed_wechat", $(_0x72fcxf).attr("data-word"), 1), $(".fed-chat-info").hide(), _0x72fcx26.src = _0x72fcx25) : ($(".fed-chat-input").val("").attr("placeholder", "口令错误！请重新输入").focus(), false);
    });
  } else {
    if (1 == $(_0x72fcxf).attr("data-advs") || 2 == $(_0x72fcxf).attr("data-advs") && !fed.cookie.get("user_id")) {
      var _0x72fcx14 = true;
      if ($(_0x72fcxf).attr("src", $(_0x72fcxf).attr("data-link")), $(_0x72fcxf).load(function () {
        _0x72fcx14 = false;
      }), _0x72fcx14) {
        var _0x72fcx15 = $(_0x72fcxf).attr("data-time"),
          _0x72fcx1a = setInterval(function () {
            0 == _0x72fcx15 ? ($(".fed-play-tips").hide(), $(_0x72fcxf).attr("src", _0x72fcx25), clearInterval(_0x72fcx1a)) : ($(".fed-play-tips span").html(_0x72fcx15--), $(".fed-play-tips").show());
          }, 1000);
      }
    } else {
      _0x72fcx26.src = _0x72fcx25;
    }
  }
  0 != $(_0x72fcxf).attr("data-trys") && setTimeout(function () {
    $(".fed-play-confirm").show();
    _0x72fcx26.src = "";
  }, 60000 * $(_0x72fcxf).attr("data-trys"));
  _0x72fcx26.attachEvent ? _0x72fcx26.attachEvent("onload", function () {
    $(".fed-play-loader").hide();
  }) : _0x72fcx26.onload = function () {
    $(".fed-play-loader").hide();
  };
}), _defineProperty(_ref6, "postmu", function () {
  fed.global.submit(".fed-rage-submit", ".fed-play-boxs");
  $(document).on("click", ".fed-rage-submit", function () {
    if (fed.cookie.get("fed_danmu")) {
      return false;
    }
    if (-1 == escape($(".fed-rage-input").val()).indexOf("%u")) {
      $(".fed-rage-input").val("").attr("placeholder", "内容必须包含中文").focus();
      return false;
    }
    $.post(vfed.tpl + "asset/fed/create.php?id=dan", "id=" + vfed.did + "&user=" + $(".fed-rage-input").attr("data-user") + "&name=" + $(".fed-rage-input").attr("data-name") + "&info=" + $(".fed-rage-input").val() + "&time=" + Date.parse(new Date()) / 1000, function (_0x72fcx14) {
      if (1 == _0x72fcx14.msg) {
        $(/MQQ|UCB/i.test(navigator.userAgent) ? ".fed-rage-foot" : ".fed-rage-head").barrager(_defineProperty({}, "info", $(".fed-rage-input").val()));
        var _0x72fcx27 = 9;
        $(".fed-rage-input").val("").attr("placeholder", "发送成功");
        $(".fed-rage-common").text(0 >= _0x72fcx27 ? "发送" : "骚等10").addClass("fed-btns-disad");
        var _0x72fcx28 = setInterval(function () {
          return 0 >= _0x72fcx27 ? (clearInterval(_0x72fcx28), $(".fed-rage-common").removeClass("fed-btns-disad").addClass("fed-rage-submit").text("发送"), false) : void $(".fed-rage-common").removeClass("fed-rage-submit").addClass("fed-btns-disad").text("骚等" + _0x72fcx27--);
        }, 1000);
      }
    });
  });
  fed.cookie.get("fed_danmu") && $(".fed-rage-switch").text("关");
  $(document).on("click", ".fed-rage-switch", function () {
    $(this).text() == "开" ? ($(".fed-play-player").removeClass("fed-rage-head"), $(".fed-tabs-info").removeClass("fed-rage-foot"), fed.cookie.set("fed_danmu", "ok", 7), $.fn.barrager.removeAll(), $(this).text("关")) : ($(".fed-play-player").addClass("fed-rage-head"), $(".fed-tabs-info").addClass("fed-rage-foot"), fed.cookie.del("fed_danmu"), fed.player.getdan(), $(this).text("开"));
  });
}), _defineProperty(_ref6, "getdan", function () {
  $.post(vfed.tpl + "asset/fed/create.php?id=dan", "id=" + vfed.did + "&time=" + Date.parse(new Date()) / 1000, function (_0x72fcx18) {
    var _0x72fcx15 = 0,
      _0x72fcx1a = setInterval(function () {
        return _0x72fcx15 == _0x72fcx18.length ? (clearInterval(_0x72fcx1a), false) : void $(/MQQ|UCB/i.test(navigator.userAgent) ? ".fed-rage-foot" : ".fed-rage-head").barrager(_0x72fcx18[_0x72fcx15++]);
      }, 3000);
  });
}), _ref6));
_defineProperty(_fed, "record", (_ref7 = {}, _defineProperty(_ref7, "init", function () {
  fed.record.show(".fed-pops-box");
  fed.record.clear(".fed-pops-rec .fed-clear");
  fed.record.list(fed.navbar.waffle());
  (13 == vfed.aid || 23 == vfed.aid || 83 == vfed.aid) && $(".fed-list-keys").text() != "" && fed.record.insert($(".fed-list-keys").text());
}), _defineProperty(_ref7, "list", function (_0x72fcxf) {
  fed.search.tracks();
}), _defineProperty(_ref7, "insert", function (_0x72fcx29) {
  var _0x72fcx2a = fed.cookie.get("fed_record");
  if (_0x72fcx2a != undefined) {
    for (var _0x72fcx2b = eval(_0x72fcx2a), _0x72fcx2c = "{record:[{\"name\":\"" + _0x72fcx29 + "\"},", _0x72fcx2d = 0; _0x72fcx2d < _0x72fcx2b.length && (_0x72fcx2b[_0x72fcx2d].name != _0x72fcx29 && (_0x72fcx2c += "{\"name\":\"" + _0x72fcx2b[_0x72fcx2d].name + "\"},"), !(3 < _0x72fcx2d)); _0x72fcx2d++) {}
    var _0x72fcx2c = _0x72fcx2c.substring(0, _0x72fcx2c.lastIndexOf(","));
    _0x72fcx2c += "]}";
  } else {
    var _0x72fcx2c = "{record:[{\"name\":\"" + _0x72fcx29 + "\"}]}";
  }
  fed.cookie.set("fed_record", _0x72fcx2c, 7);
}), _defineProperty(_ref7, "show", function (_0x72fcx2e) {
  var _0x72fcx2a = [],
    _0x72fcx2c = fed.cookie.get("fed_record");
  if (_0x72fcx2c != undefined) {
    var _0x72fcx2a = eval(_0x72fcx2c);
  }
  if (0 < _0x72fcx2a.length) {
    for (var _0x72fcx2f = "<div class=\"fed-pops-rec fed-margin-bottom\"><div class=\"fed-pops-title fed-back-whits fed-part-rows fed-line-bottom\">搜索历史<a class=\"fed-clear fed-part-tips fed-event\" href=\"javascript:;\">清空</a></div><ul class=\"fed-pops-list fed-padding-xo fed-back-whits fed-part-rows\">", _0x72fcx2d = 0; _0x72fcx2d < _0x72fcx2a.length; _0x72fcx2d++) {
      _0x72fcx2f += "<li class=\"fed-col-xs6\"><a class=\"fed-part-eone\" href=\"" + fed.search.jump(_0x72fcx2a[_0x72fcx2d].name) + "\"><span class=\"fed-name\">" + _0x72fcx2a[_0x72fcx2d].name + "</span></a></li>";
    }
    _0x72fcx2f += "</ul></div>";
    $(_0x72fcx2e).prepend(_0x72fcx2f);
  }
}), _defineProperty(_ref7, "clear", function (_0x72fcxf) {
  $(document).on("click", _0x72fcxf, function () {
    fed.cookie.del("fed_record");
    $(".fed-pops-rec").remove();
  });
}), _ref7));
_defineProperty(_fed, "history", (_ref8 = {}, _defineProperty(_ref8, "init", function () {
  fed.history.show(".fed-pops-record ul");
  fed.history.clear(".fed-pops-record .fed-clear");
  fed.history.output();
}), _defineProperty(_ref8, "insert", function (_0x72fcx29, _0x72fcx30, _0x72fcx31, _0x72fcx32) {
  __js.watch_his.add();
}), _defineProperty(_ref8, "output", function () {
  _typeof(fed.search.create) !== "function" || _typeof(fed.record.list) !== "function" || _typeof(fed.navbar.waffle) !== "function";
}), _defineProperty(_ref8, "show", function (_0x72fcx2e) {
  __js.watch_his.show(_0x72fcx2e);
}), _defineProperty(_ref8, "clear", function (_0x72fcxf) {
  $(document).on("click", _0x72fcxf, function () {
    __js.watch_his.clear();
  });
}), _ref8));
_defineProperty(_fed, "comment", (_ref9 = {}, _defineProperty(_ref9, "init", function () {
  fed.comment.show(1);
  fed.global.submit(".fed-comm-submit", ".fed-comm-fort");
  $(document).on("click", ".fed-comm-rbtn", function () {
    fed.comment.form($(this));
  });
  $(document).on("click", ".fed-comm-fort .fed-comm-submit", function () {
    fed.comment.firm($(this));
  });
  $(document).on("click", ".fed-comm-repo", function () {
    fed.comment.repo($(this));
  });
  $(document).on("click", ".fed-comm-digg", function () {
    fed.comment.digg($(this));
  });
  $(document).on("click", ".fed-comm-text,.fed-comm-rbtn", function () {
    1 == $(".fed-comm-fort").attr("data-role") && fed.module.login();
  });
  $(document).on("click", ".fed-page-info .fed-btns-info,.fed-play-comm", function () {
    var _0x72fcx14 = 767 < document.documentElement.clientWidth ? 100 : 90;
    $("html,body").animate(_defineProperty({}, "scrollTop", $(".fed-conv-info").offset().top - _0x72fcx14), 200);
  });
}), _defineProperty(_ref9, "form", function (_0x72fcxf) {
  if ($(".fed-comm-fory").remove(), _0x72fcxf.text() == "取消") {
    $(".fed-comm-fort").show();
    _0x72fcxf.text("回复");
    return false;
  }
  _0x72fcxf.text() == "回复" && ($(".fed-comm-rbtn").text("回复"), _0x72fcxf.text("取消"));
  var _0x72fcx19 = $($(".fed-comm-fort").prop("outerHTML"));
  _0x72fcx19.addClass("fed-comm-fory");
  _0x72fcx19.find("input[name=\"comment_pid\"]").val(_0x72fcxf.attr("data-id"));
  _0x72fcxf.parent().after(_0x72fcx19);
  $(".fed-comm-fort").hide();
  $(".fed-comm-fory").show();
  $(".fed-comm-fory .fed-comm-text").focus().val("@" + _0x72fcxf.parent().parent().prev(".fed-comm-head").find("strong").text() + "：");
  fed.comment.count(".fed-comm-fory");
}), _defineProperty(_ref9, "show", function (_0x72fcxf) {
  __js.showComment(_0x72fcxf);
}), _defineProperty(_ref9, "firm", function (_0x72fcxf) {
  __js.addComment(_0x72fcxf);
}), _defineProperty(_ref9, "repo", function (_0x72fcxf) {
  $.get(vfed.path + "index.php/comment/report?id=" + _0x72fcxf.attr("data-id"), function () {
    _0x72fcxf.html("已举报");
  });
}), _defineProperty(_ref9, "digg", function (_0x72fcxf) {
  $.get(vfed.path + "index.php/ajax/digg.html?mid=" + _0x72fcxf.attr("data-mid") + "&id=" + _0x72fcxf.attr("data-id") + "&type=" + _0x72fcxf.attr("data-type"), function (_0x72fcx19) {
    if (1 != _0x72fcx19.code) {
      return false;
    }
    _0x72fcxf.attr("data-type") == "up" ? _0x72fcxf.html("已支持(" + _0x72fcx19.data.up + ")") : _0x72fcxf.html("已反对(" + _0x72fcx19.data.down + ")");
  });
}), _defineProperty(_ref9, "count", function (_0x72fcxf) {}), _ref9));
_defineProperty(_fed, "message", (_ref10 = {}, _defineProperty(_ref10, "init", function () {
  fed.comment.count(".fed-comm-fork");
  fed.global.submit(".fed-comm-gbooks", ".fed-comm-fork");
  $(document).on("click", ".fed-comm-text", function () {
    1 == $(".fed-comm-fork").attr("data-role") && fed.module.login();
  });
  $(document).on("click", ".fed-comm-fork .fed-comm-gbooks", function () {
    fed.message.firm();
  });
}), _defineProperty(_ref10, "firm", function () {}), _ref10));
_defineProperty(_fed, "myuser", (_ref11 = {}, _defineProperty(_ref11, "init", function () {
  6 == vfed.aid && (fed.myuser.radio(), fed.myuser.group(".fed-subm-group"), fed.myuser.price(".fed-subm-price"), fed.myuser.cards(".fed-subm-cards"), fed.myuser.cashs(".fed-subm-cashs"), fed.myuser.center(".fed-subm-regis"), fed.myuser.center(".fed-subm-finds"), fed.myuser.center(".fed-subm-infos"), fed.myuser.center(".fed-subm-binds"), fed.myuser.unnd(".fed-user-unnd"), fed.myuser.bind(".fed-user-bind", "fed-text-disad"), fed.myuser.dele(".fed-favs-clear", ".fed-favs-del", 2, 1), fed.myuser.dele(".fed-play-clear", ".fed-play-del", 4, 1), fed.myuser.dele(".fed-down-clear", ".fed-down-del", 5, 1), fed.myuser.dele(".fed-cash-clear", ".fed-cash-del", 0, 0), fed.global.submit(".fed-user-submit", ".fed-user-form"), $("input[name=\"user_name\"]").val(fed.cookie.get("fed_username")), $("input[name=\"user_pwd\"]").val(fed.cookie.get("fed_password")));
}), _defineProperty(_ref11, "ids", function (_0x72fcxf) {
  var _0x72fcx19 = [];
  $("input[name='" + _0x72fcxf + "']").each(function () {
    this.checked && _0x72fcx19.push(this.value);
  });
  return _0x72fcx19.join(",");
}), _defineProperty(_ref11, "all", function (_0x72fcxf) {
  $("input[name=\"" + _0x72fcxf + "\"]").each(function () {
    this.checked = true;
  });
}), _defineProperty(_ref11, "other", function (_0x72fcxf) {
  $("input[name=\"" + _0x72fcxf + "\"]").each(function () {
    this.checked = !this.checked;
  });
}), _defineProperty(_ref11, "data", function (_0x72fcxf, _0x72fcx11, _0x72fcx12, _0x72fcx20) {
  var _0x72fcx20 = 1 == _0x72fcx20 ? ".fed-user-form" : ".fed-user-rest";
  if (confirm("确定要" + (1 == _0x72fcx11 ? "清空" : "删除") + "记录吗")) {
    var _0x72fcx21;
    $.post($(_0x72fcx20).attr("action"), (_0x72fcx21 = {}, _defineProperty(_0x72fcx21, "ids", _0x72fcxf), _defineProperty(_0x72fcx21, "type", _0x72fcx12), _defineProperty(_0x72fcx21, "all", _0x72fcx11), _0x72fcx21), function (_0x72fcx22) {
      1 == _0x72fcx22.code ? (fed.global.tips((1 == _0x72fcx11 ? "清空" : "删除") + "成功"), location.reload()) : fed.global.tips(_0x72fcx22.msg);
    }, "json");
  }
}), _defineProperty(_ref11, "dele", function (_0x72fcxf, _0x72fcx11, _0x72fcx12, _0x72fcx20) {
  $(_0x72fcxf).click(function () {
    fed.myuser.data("", 1, _0x72fcx12, _0x72fcx20);
  });
  $(_0x72fcx11).click(function () {
    var _0x72fcx1d = fed.myuser.ids("ids[]");
    if (_0x72fcx1d == "") {
      fed.global.tips("请至少选择一个数据");
      return false;
    }
    fed.myuser.data(_0x72fcx1d, 0, _0x72fcx12, _0x72fcx20);
  });
}), _defineProperty(_ref11, "center", function (_0x72fcxf) {
  __js.user.handle_click(_0x72fcxf);
}), _defineProperty(_ref11, "group", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    if (confirm("确定要升级到【" + $(this).attr("data-name") + "】吗,需要花费【" + $(this).attr("data-points") + "】积分")) {
      var _0x72fcx15;
      $.post($(".fed-user-form").attr("action"), (_0x72fcx15 = {}, _defineProperty(_0x72fcx15, "group_id", $(this).attr("data-id")), _defineProperty(_0x72fcx15, "long", $(this).attr("data-long")), _0x72fcx15), function (_0x72fcx1a) {
        fed.global.tips(_0x72fcx1a.msg);
        1 == _0x72fcx1a.code && location.reload();
      }, "json");
    }
  });
}), _defineProperty(_ref11, "price", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    var _0x72fcx15 = $("input[name=\"price\"]").val();
    if (1 > +_0x72fcx15) {
      return false;
    }
    if (confirm("确定要在线充值吗")) {
      var _0x72fcx1a;
      $.post($(".fed-user-form").attr("action"), (_0x72fcx1a = {}, _defineProperty(_0x72fcx1a, "price", _0x72fcx15), _defineProperty(_0x72fcx1a, "flag", "pay"), _0x72fcx1a), function (_0x72fcx17) {
        1 == _0x72fcx17.code ? fed.global.loca($(".fed-user-form").attr("data-pay") + "?order_code=" + _0x72fcx17.data.order_code) : fed.global.tips(_0x72fcx17.msg);
      }, "json");
    }
  });
}), _defineProperty(_ref11, "upload", function (_0x72fcxf, _0x72fcx11) {
  var _0x72fcx12;
  $(_0x72fcxf).imageUpload((_0x72fcx12 = {}, _defineProperty(_0x72fcx12, "formAction", $(_0x72fcx11).attr("data-role")), _defineProperty(_0x72fcx12, "inputFileName", "file"), _defineProperty(_0x72fcx12, "browseButtonValue", ""), _defineProperty(_0x72fcx12, "browseButtonClass", "fed-user-alter fed-user-ring fed-part-roun fed-icon-font fed-icon-xiugai"), _defineProperty(_0x72fcx12, "automaticUpload", true), _defineProperty(_0x72fcx12, "hideDeleteButton", true), _defineProperty(_0x72fcx12, "hover", true), _0x72fcx12));
  $(_0x72fcxf).on("imageUpload.uploadFailed", function (_0x72fcx1b, _0x72fcx21) {
    fed.global.tips(_0x72fcx21);
  });
}), _defineProperty(_ref11, "cards", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    if (confirm("确定要使用充值卡充值吗")) {
      var _0x72fcx15;
      $.post($(".fed-user-form").attr("action"), (_0x72fcx15 = {}, _defineProperty(_0x72fcx15, "card_no", $("input[name=\"cardnum\"]").val()), _defineProperty(_0x72fcx15, "card_pwd", $("input[name=\"cardpwd\"]").val()), _defineProperty(_0x72fcx15, "flag", "card"), _0x72fcx15), function (_0x72fcx1a) {
        fed.global.tips(_0x72fcx1a.msg);
        location.reload();
      }, "json");
    }
  });
}), _defineProperty(_ref11, "cashs", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    $.post($(".fed-user-form").attr("action"), $(".fed-user-form").serialize(), function (_0x72fcx15) {
      fed.global.tips(_0x72fcx15.msg);
      location.reload();
    }, "json");
  });
}), _defineProperty(_ref11, "radio", function () {
  var _0x72fcx16 = $(".fed-user-pays input[type=\"radio\"]:checked").val();
  _0x72fcx16 == "codepay" ? $(".fed-user-mpay").addClass("fed-show") : _0x72fcx16 == "zhapay" && $(".fed-user-zpay").addClass("fed-show");
  $(".fed-user-pays input[type=\"radio\"]").click(function () {
    var _0x72fcx17 = $(this).val();
    _0x72fcx17 == "codepay" ? ($(".fed-user-mpay").addClass("fed-show"), $(".fed-user-zpay").removeClass("fed-show")) : _0x72fcx17 == "zhapay" ? ($(".fed-user-zpay").addClass("fed-show"), $(".fed-user-mpay").removeClass("fed-show")) : ($(".fed-user-zpay").removeClass("fed-show"), $(".fed-user-mpay").removeClass("fed-show"));
  });
}), _defineProperty(_ref11, "bind", function (_0x72fcxf, _0x72fcx11) {
  __js.user.binding(_0x72fcxf, _0x72fcx11);
}), _defineProperty(_ref11, "unnd", function (_0x72fcxf) {
  $(_0x72fcxf).click(function () {
    confirm("确认解除绑定吗？此操作不可恢复") && $.post($(".fed-user-form").attr("data-role"), _defineProperty({}, "ac", $(this).attr("data-role")), function (_0x72fcx15) {
      fed.global.tips(_0x72fcx15.msg);
      1 == _0x72fcx15.code && fed.global.loca($(".fed-user-form").attr("action"));
    }, "json");
  });
}), _defineProperty(_ref11, "power", function (_0x72fcxf, _0x72fcx11) {
  confirm("您确认购买此条数据" + _0x72fcx11 + "权限吗？") && $.get(vfed.path + "index.php/user/ajax_buy_popedom.html?id=" + vfed.did + "&mid=" + vfed.mid + "&sid=" + vfed.sid + "&nid=" + vfed.nid + "&type=" + $(_0x72fcxf).attr("data-type"), function (_0x72fcx16) {
    fed.global.tips(_0x72fcx16.msg);
    1 == _0x72fcx16.code && location.reload();
  });
}), _defineProperty(_ref11, "chat", function () {
  setInterval(function () {
    $.get($(this).attr("data-info") + "?order_id=" + $(this).attr("data-code"), function (_0x72fcx14) {
      1 == _0x72fcx14.info.order_status && (alert("支付完成，即将跳转到会员中心"), fed.global.loca($(this).attr("data-role")));
    });
  }, 5000);
}), _ref11));
_defineProperty(_fed, "cookie", (_ref12 = {}, _defineProperty(_ref12, "set", function (_0x72fcxf, _0x72fcx11, _0x72fcx12) {
  var _0x72fcx1b = new Date();
  _0x72fcx1b.setTime(_0x72fcx1b.getTime() + 1000 * (60 * (60 * (24 * _0x72fcx12))));
  document.cookie.match(new RegExp("(^| )" + _0x72fcxf + "=([^;]*)(;|$)"));
  document.cookie = _0x72fcxf + "=" + escape(_0x72fcx11) + ";path=/;expires=" + _0x72fcx1b.toUTCString();
}), _defineProperty(_ref12, "get", function (_0x72fcxf) {
  var _0x72fcx19 = document.cookie.match(new RegExp("(^| )" + _0x72fcxf + "=([^;]*)(;|$)"));
  if (null != _0x72fcx19) {
    return unescape(_0x72fcx19[2]);
  }
}), _defineProperty(_ref12, "del", function (_0x72fcxf) {
  var _0x72fcx19 = new Date();
  _0x72fcx19.setTime(_0x72fcx19.getTime() - 1);
  var _0x72fcx16 = this.get(_0x72fcxf);
  null != _0x72fcx16 && (document.cookie = _0x72fcxf + "=" + escape(_0x72fcx16) + ";path=/;expires=" + _0x72fcx19.toUTCString());
}), _ref12));
_defineProperty(_fed, "base64", (_ref13 = {}, _defineProperty(_ref13, "keystr", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), _defineProperty(_ref13, "decode", function (_0x72fcxf) {
  var _0x72fcx19 = 0,
    _0x72fcx16 = "",
    _0x72fcx1b,
    _0x72fcx21,
    _0x72fcx22,
    _0x72fcx23,
    _0x72fcx24,
    _0x72fcx25,
    _0x72fcx26;
  for (_0x72fcxf = _0x72fcxf.replace(/[^A-Za-z0-9\+\/\=]/g, ""), _0x72fcxf = _0x72fcxf.substring(3); _0x72fcx19 < _0x72fcxf.length;) {
    _0x72fcx23 = this.keystr.indexOf(_0x72fcxf.charAt(_0x72fcx19++));
    _0x72fcx24 = this.keystr.indexOf(_0x72fcxf.charAt(_0x72fcx19++));
    _0x72fcx25 = this.keystr.indexOf(_0x72fcxf.charAt(_0x72fcx19++));
    _0x72fcx26 = this.keystr.indexOf(_0x72fcxf.charAt(_0x72fcx19++));
    _0x72fcx1b = _0x72fcx23 << 2 | _0x72fcx24 >> 4;
    _0x72fcx21 = (15 & _0x72fcx24) << 4 | _0x72fcx25 >> 2;
    _0x72fcx22 = (3 & _0x72fcx25) << 6 | _0x72fcx26;
    _0x72fcx16 += String.fromCharCode(_0x72fcx1b);
    64 != _0x72fcx25 && (_0x72fcx16 += String.fromCharCode(_0x72fcx21));
    64 != _0x72fcx26 && (_0x72fcx16 += String.fromCharCode(_0x72fcx22));
  }
  return fed.base64.utf8(_0x72fcx16);
}), _defineProperty(_ref13, "utf8", function (_0x72fcxf) {
  for (var _0x72fcx16, _0x72fcx1b, _0x72fcx21, _0x72fcx22, _0x72fcx19 = "", _0x72fcx23 = 0; _0x72fcx23 < _0x72fcxf.length; _0x72fcx23++) {
    _0x72fcx16 = _0x72fcxf.charCodeAt(_0x72fcx23);
    128 > _0x72fcx16 ? _0x72fcx19 += String.fromCharCode(_0x72fcx16) : 224 > _0x72fcx16 ? (_0x72fcx1b = _0x72fcxf.charCodeAt(++_0x72fcx23), _0x72fcx19 += String.fromCharCode((31 & _0x72fcx16) << 6 | 63 & _0x72fcx1b)) : 240 > _0x72fcx16 ? (_0x72fcx1b = _0x72fcxf.charCodeAt(++_0x72fcx23), _0x72fcx21 = _0x72fcxf.charCodeAt(++_0x72fcx23), _0x72fcx19 += String.fromCharCode((15 & _0x72fcx16) << 12 | (63 & _0x72fcx1b) << 6 | 63 & _0x72fcx21)) : (_0x72fcx1b = _0x72fcxf.charCodeAt(++_0x72fcx23), _0x72fcx21 = _0x72fcxf.charCodeAt(++_0x72fcx23), _0x72fcx22 = _0x72fcxf.charCodeAt(++_0x72fcx23), _0x72fcx19 += String.fromCharCode((7 & _0x72fcx16) << 18 | (63 & _0x72fcx1b) << 12 | (63 & _0x72fcx21) << 6 | 63 & _0x72fcx1b));
  }
  return _0x72fcx19;
}), _ref13));
var fed = _fed;
fed.global.init();
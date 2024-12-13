//Fri Dec 13 2024 06:51:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function (jgg_W) {
  function jgg_y(jgg_K) {
    if (jgg_o[jgg_K]) {
      return jgg_o[jgg_K].exports;
    }
    jgg_o[jgg_K] = {
      exports: {},
      id: jgg_K,
      loaded: false
    };
    var jgg_C = jgg_o[jgg_K];
    jgg_W[jgg_K].call(jgg_C.exports, jgg_C, jgg_C.exports, jgg_y);
    jgg_C.loaded = true;
    return jgg_C.exports;
  }
  var jgg_o = {};
  jgg_y.m = jgg_W;
  jgg_y.c = jgg_o;
  jgg_y.p = "";
  return jgg_y(0);
}([function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    jgg_T(158);
    jgg_T(165);
    jgg_T(166);
    jgg_T(167);
    jgg_T(168);
    jgg_T(169);
    jgg_T(170);
    jgg_T(171);
    jgg_T(172);
    jgg_T(173);
    jgg_T(177);
    jgg_T(178);
    jgg_T(179);
    jgg_T(180);
    jgg_T(181);
    jgg_T(182);
    jgg_T(183);
    jgg_T(184);
    jgg_T(185);
    jgg_T(186);
    jgg_T(187);
    jgg_T(188);
    jgg_T(189);
    jgg_T(190);
    jgg_T(191);
    jgg_T(201);
    jgg_T(202);
    jgg_T(204);
    jgg_T(207);
    jgg_T(208);
    jgg_T(210);
    jgg_T(211);
    jgg_T(213);
    jgg_T(214);
    jgg_T(216);
    jgg_T(217);
    jgg_T(219);
    jgg_T(220);
    jgg_T(222);
    jgg_T(217);
    jgg_T(219);
    jgg_T(223);
    jgg_T(225);
    jgg_T(226);
    jgg_T(228);
    jgg_T(229);
    jgg_T(231);
    jgg_T(232);
    jgg_T(233);
    jgg_T(234);
    jgg_T(235);
    QHPass.showControlPanel = function () {
      var jgg_y = new QHPass.utils.Panel({
        size: "large",
        type: "message"
      });
      var jgg_o = "showControlPanel setNickname setSecEmail setUsername signIn signUp setEmail fillProfile bindMobile modifyPassword";
      var jgg_K = jgg_T(236);
      var jgg_u = jgg_V.template(jgg_K);
      var jgg_r = jgg_u({
        methods: jgg_V.split(jgg_o, " ")
      });
      jgg_y.setTitle("控制面板").setContent($(jgg_r)).show();
      jgg_y.$el.on("click", ".quc-button", function () {
        jgg_y.hide();
      });
    };
  }).call(jgg_a, jgg_T(2));
},, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = jgg_T(3);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_V(jgg_o) {
      return this instanceof jgg_V ? (this.__value = jgg_o, void (this.__chain = false)) : new jgg_V(jgg_o);
    }
    var jgg_y = jgg_T(4);
    jgg_W.exports = jgg_y.extend(jgg_V, jgg_y);
    jgg_T(6)(jgg_V);
    jgg_T(7)(jgg_V);
    jgg_T(8)(jgg_V);
    jgg_T(9)(jgg_V);
    jgg_T(10)(jgg_V);
    jgg_T(12)(jgg_V);
    jgg_T(13)(jgg_V);
    jgg_V.mixin(jgg_V, jgg_V);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_I) {
    if (null != jgg_I) {
      return jgg_I.length;
    }
  }
  function jgg_h(jgg_I, jgg_Z) {
    var jgg_q = jgg_V(jgg_I);
    if (jgg_q && jgg_d.fn(jgg_Z)) {
      for (var jgg_G = 0; jgg_G < jgg_q && false !== jgg_Z(jgg_I[jgg_G], jgg_G, jgg_I); jgg_G++) {}
    }
    return jgg_I;
  }
  function jgg_y(jgg_I, jgg_Z) {
    var jgg_q = -1;
    jgg_h(jgg_I, function (jgg_G, jgg_Y, jgg_c) {
      if (jgg_Z(jgg_G, jgg_Y, jgg_c)) {
        jgg_q = jgg_Y;
        return false;
      }
    });
    return jgg_q;
  }
  function jgg_o(jgg_I) {
    var jgg_Z = [];
    jgg_h(jgg_I, function (jgg_q) {
      jgg_Z.push(jgg_q);
    });
    return jgg_Z;
  }
  function jgg_K(jgg_I) {
    if (jgg_I) {
      var jgg_Z = jgg_H.call(arguments, 1);
      jgg_h(jgg_Z, function (jgg_q) {
        jgg_O(jgg_q, function (jgg_G, jgg_Y) {
          jgg_d.undef(jgg_G) || (jgg_I[jgg_Y] = jgg_G);
        });
      });
    }
    return jgg_I;
  }
  function jgg_u(jgg_I) {
    return function () {
      return !jgg_I.apply(this, arguments);
    };
  }
  function jgg_r(jgg_I, jgg_Z) {
    return jgg_d.string(jgg_I) ? jgg_I.indexOf(jgg_Z) : jgg_y(jgg_I, function (jgg_q) {
      return jgg_Z === jgg_q;
    });
  }
  function jgg_C(jgg_I, jgg_Z, jgg_q) {
    jgg_h(jgg_I, function (jgg_G, jgg_Y) {
      jgg_q = jgg_Z(jgg_q, jgg_G, jgg_Y, jgg_I);
    });
    return jgg_q;
  }
  function jgg_O(jgg_I, jgg_Z) {
    if (jgg_I) {
      for (var jgg_q in jgg_I) if (jgg_d.owns(jgg_I, jgg_q) && false === jgg_Z(jgg_I[jgg_q], jgg_q, jgg_I)) {
        break;
      }
    }
    return jgg_I;
  }
  function jgg_z(jgg_I) {
    var jgg_Z = [];
    jgg_O(jgg_I, function (jgg_q, jgg_G) {
      jgg_Z.push(jgg_G);
    });
    return jgg_Z;
  }
  var jgg_d = jgg_T(5);
  var jgg_H = [].slice;
  var jgg_U = jgg_a;
  jgg_U.is = jgg_d;
  jgg_U.extend = jgg_U.assign = jgg_K;
  jgg_U.each = jgg_h;
  jgg_U.map = function (jgg_I, jgg_Z) {
    var jgg_G = [];
    jgg_h(jgg_I, function (jgg_Y, jgg_c, jgg_l) {
      jgg_G[jgg_c] = jgg_Z(jgg_Y, jgg_c, jgg_l);
    });
    return jgg_G;
  };
  jgg_U.filter = function (jgg_I, jgg_Z) {
    var jgg_q = [];
    jgg_h(jgg_I, function (jgg_G, jgg_Y, jgg_c) {
      var jgg_l = jgg_Z(jgg_G, jgg_Y, jgg_c);
      jgg_l && jgg_q.push(jgg_G);
    });
    return jgg_q;
  };
  jgg_U.some = function (jgg_I, jgg_Z) {
    return -1 != jgg_y(jgg_I, jgg_Z);
  };
  jgg_U.every = function (jgg_I, jgg_Z) {
    return -1 == jgg_y(jgg_I, jgg_u(jgg_Z));
  };
  jgg_U.reduce = jgg_C;
  jgg_U.findIndex = jgg_y;
  jgg_U.find = function (jgg_I, jgg_Z) {
    var jgg_q = jgg_U.findIndex(jgg_I, jgg_Z);
    if (-1 != jgg_q) {
      return jgg_I[jgg_q];
    }
  };
  jgg_U.indexOf = jgg_r;
  jgg_U.includes = function (jgg_I, jgg_Z) {
    return -1 != jgg_r(jgg_I, jgg_Z);
  };
  jgg_U.toArray = jgg_o;
  jgg_U.slice = function (jgg_I, jgg_Z, jgg_q) {
    var jgg_G = [];
    var jgg_Y = jgg_V(jgg_I);
    jgg_Y >= 0 && (jgg_Z = jgg_Z || 0, 0 !== jgg_q && (jgg_q = jgg_q || jgg_Y), jgg_d.fn(jgg_I.slice) || (jgg_I = jgg_o(jgg_I)), jgg_G = jgg_I.slice(jgg_Z, jgg_q));
    return jgg_G;
  };
  jgg_U.negate = jgg_u;
  jgg_U.forIn = jgg_O;
  jgg_U.keys = jgg_z;
  var jgg_i = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  jgg_U.trim = function (jgg_I) {
    return null == jgg_I ? "" : ("" + jgg_I).replace(jgg_i, "");
  };
  jgg_U.noop = function () {};
  jgg_U.len = jgg_V;
}, function (jgg_W, jgg_a) {
  (function (jgg_X) {
    function jgg_h(jgg_C) {
      var jgg_O = jgg_u.toString.call(jgg_C);
      return jgg_O.substring(8, jgg_O.length - 1).toLowerCase();
    }
    function jgg_y(jgg_C) {
      return typeof jgg_C;
    }
    function jgg_o(jgg_C, jgg_O) {
      return jgg_u.hasOwnProperty.call(jgg_C, jgg_O);
    }
    var jgg_K = jgg_a;
    var jgg_u = Object.prototype;
    jgg_X = jgg_X || {};
    var jgg_r = jgg_X.navigator;
    jgg_K.browser = function () {
      return !(jgg_K.wechatApp() || !jgg_r || jgg_X.window != jgg_X);
    };
    jgg_K.h5 = function () {
      return !(!jgg_K.browser() || !jgg_r.geolocation);
    };
    jgg_K.mobile = function () {
      return !(!jgg_K.browser() || !/mobile/i.test(jgg_r.userAgent));
    };
    jgg_K.wechatApp = function () {
      return !("object" != typeof wx || !wx || !jgg_K.fn(wx.createVideoContext));
    };
    jgg_K._class = jgg_h;
    jgg_K._type = jgg_y;
    jgg_K.owns = jgg_o;
    jgg_K.nan = function (jgg_C) {
      return jgg_C !== jgg_C;
    };
    jgg_K.bool = function (jgg_C) {
      return "boolean" == jgg_h(jgg_C);
    };
    jgg_K.infinite = function (jgg_C) {
      return jgg_C == Infinity || jgg_C == -Infinity;
    };
    jgg_K.number = function (jgg_C) {
      return !isNaN(jgg_C) && "number" == jgg_h(jgg_C);
    };
    jgg_K.iod = function (jgg_C) {
      return !(!jgg_K.number(jgg_C) || jgg_K.infinite(jgg_C));
    };
    jgg_K.decimal = function (jgg_C) {
      return !!jgg_K.iod(jgg_C) && 0 != jgg_C % 1;
    };
    jgg_K.integer = function (jgg_C) {
      return !!jgg_K.iod(jgg_C) && 0 == jgg_C % 1;
    };
    jgg_K.oof = function (jgg_C) {
      if (jgg_C) {
        var jgg_O = jgg_y(jgg_C);
        return "object" == jgg_O || "function" == jgg_O;
      }
      return false;
    };
    jgg_K.object = function (jgg_C) {
      return jgg_K.oof(jgg_C) && "function" != jgg_h(jgg_C);
    };
    jgg_K.hash = jgg_K.plainObject = function (jgg_C) {
      return !(!jgg_C || "object" != jgg_h(jgg_C)) && !jgg_C.nodeType && !jgg_C.setInterval;
    };
    jgg_K.undef = function (jgg_C) {
      return "undefined" == jgg_y(jgg_C);
    };
    jgg_K.fn = function (jgg_C) {
      return "function" == jgg_h(jgg_C);
    };
    jgg_K.string = function (jgg_C) {
      return "string" == jgg_h(jgg_C);
    };
    jgg_K.nos = function (jgg_C) {
      return jgg_K.iod(jgg_C) || jgg_K.string(jgg_C);
    };
    jgg_K.array = function (jgg_C) {
      return "array" == jgg_h(jgg_C);
    };
    jgg_K.arraylike = function (jgg_C) {
      if (!jgg_K.window(jgg_C) && jgg_K.object(jgg_C)) {
        var jgg_O = jgg_C.length;
        if (jgg_K.integer(jgg_O) && jgg_O >= 0) {
          return true;
        }
      }
      return false;
    };
    jgg_K.window = function (jgg_C) {
      return !(!jgg_C || jgg_C.window != jgg_C);
    };
    jgg_K.empty = function (jgg_C) {
      if (jgg_K.string(jgg_C) || jgg_K.arraylike(jgg_C)) {
        return 0 === jgg_C.length;
      }
      if (jgg_K.hash(jgg_C)) {
        for (var jgg_O in jgg_C) if (jgg_o(jgg_C, jgg_O)) {
          return false;
        }
      }
      return true;
    };
    jgg_K.element = function (jgg_C) {
      return !(!jgg_C || 1 !== jgg_C.nodeType);
    };
    jgg_K.regexp = function (jgg_C) {
      return "regexp" == jgg_h(jgg_C);
    };
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_T) {
    var jgg_X = jgg_T.is;
    jgg_T.isString = jgg_X.string;
    jgg_T.isArray = jgg_X.array;
    jgg_T.isArrayLike = jgg_X.arraylike;
    jgg_T.isBoolean = jgg_X.bool;
    jgg_T.isElement = jgg_X.element;
    jgg_T.isEmpty = jgg_X.empty;
    jgg_T.isFunction = jgg_X.fn;
    jgg_T.isInteger = jgg_X.integer;
    jgg_T.isNaN = jgg_X.nan;
    jgg_T.isNumber = jgg_X.number;
    jgg_T.isObject = jgg_X.object;
    jgg_T.isPlainObject = jgg_X.plainObject;
    jgg_T.isRegExp = jgg_X.regexp;
    jgg_T.isString = jgg_X.string;
    jgg_T.isUndefined = jgg_X.undef;
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    var jgg_h = jgg_X.is;
    jgg_X.now = function () {
      return +new Date();
    };
    jgg_X.constant = function (jgg_o) {
      return function () {
        return jgg_o;
      };
    };
    jgg_X.identity = function (jgg_o) {
      return jgg_o;
    };
    jgg_X.random = function (jgg_o, jgg_K) {
      return jgg_o + Math.floor(Math.random() * (jgg_K - jgg_o + 1));
    };
    jgg_X.mixin = function (jgg_o, jgg_K, jgg_u) {
      var jgg_r = jgg_X.functions(jgg_K);
      if (jgg_o) {
        if (jgg_h.fn(jgg_o)) {
          jgg_u = jgg_u || {};
          var jgg_C = jgg_o.prototype;
          jgg_X.each(jgg_r, function (jgg_O) {
            var jgg_z = jgg_K[jgg_O];
            jgg_C[jgg_O] = function () {
              var jgg_d = this;
              var jgg_H = [jgg_d.__value];
              jgg_H.push.apply(jgg_H, arguments);
              var jgg_U = jgg_z.apply(jgg_d, jgg_H);
              return jgg_d.__chain ? (jgg_d.__value = jgg_U, jgg_d) : jgg_U;
            };
          });
        } else {
          jgg_X.each(jgg_r, function (jgg_O) {
            jgg_o[jgg_O] = jgg_K[jgg_O];
          });
        }
      }
      return jgg_o;
    };
    jgg_X.chain = function (jgg_o) {
      var jgg_K = jgg_X(jgg_o);
      jgg_K.__chain = true;
      return jgg_K;
    };
    jgg_X.value = function () {
      this.__chain = false;
      return this.__value;
    };
    var jgg_y = 0;
    jgg_X.uniqueId = function (jgg_o) {
      jgg_y++;
      return jgg_X.toString(jgg_o) + jgg_y;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_C, jgg_O) {
      var jgg_z = jgg_X.size(jgg_O);
      jgg_C < 0 && (jgg_C += jgg_z);
      jgg_C < 0 && (jgg_C = 0);
      jgg_C > jgg_z && (jgg_C = jgg_z);
      return jgg_C || 0;
    }
    function jgg_y(jgg_C, jgg_O) {
      var jgg_z = [];
      var jgg_d = jgg_X.len(jgg_O);
      if (jgg_d) {
        for (jgg_O = jgg_O.sort(function (jgg_U, jgg_i) {
          return jgg_U - jgg_i;
        }); jgg_d--;) {
          var jgg_H = jgg_O[jgg_d];
          jgg_z.push(jgg_r.splice.call(jgg_C, jgg_H, 1)[0]);
        }
      }
      jgg_z.reverse();
      return jgg_z;
    }
    jgg_X.forEach = jgg_X.each;
    var jgg_o = jgg_X.forEach;
    var jgg_K = jgg_X.includes;
    var jgg_u = jgg_X.is;
    var jgg_r = Array.prototype;
    jgg_X.reject = function (jgg_C, jgg_O) {
      return jgg_X.filter(jgg_C, function (jgg_z, jgg_d, jgg_H) {
        return !jgg_O(jgg_z, jgg_d, jgg_H);
      });
    };
    jgg_X.without = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_X.difference(jgg_C, jgg_O);
    };
    jgg_X.difference = function (jgg_C, jgg_O) {
      var jgg_z = [];
      jgg_X.each(jgg_C, function (jgg_d) {
        jgg_K(jgg_O, jgg_d) || jgg_z.push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.pluck = function (jgg_C, jgg_O) {
      return jgg_X.map(jgg_C, function (jgg_z) {
        if (jgg_z) {
          return jgg_z[jgg_O];
        }
      });
    };
    jgg_X.nth = function (jgg_C, jgg_O) {
      jgg_O = jgg_h(jgg_O, jgg_C);
      jgg_O = jgg_O || 0;
      var jgg_z;
      return jgg_z = jgg_X.isString(jgg_C) ? jgg_C.charAt(jgg_O) : jgg_C[jgg_O];
    };
    jgg_X.first = function (jgg_C) {
      if (jgg_C) {
        return jgg_X.nth(jgg_C, 0);
      }
    };
    jgg_X.last = function (jgg_C) {
      var jgg_O = jgg_X.len(jgg_C);
      if (jgg_O) {
        return jgg_X.nth(jgg_C, jgg_O - 1);
      }
    };
    jgg_X.asyncMap = function (jgg_C, jgg_O, jgg_z) {
      var jgg_H;
      var jgg_U;
      var jgg_i = [];
      var jgg_I = 0;
      jgg_o(jgg_C, function (jgg_Z, jgg_q) {
        jgg_U = true;
        jgg_O(jgg_Z, function (jgg_G, jgg_Y) {
          if (!jgg_H) {
            if (jgg_I++, jgg_G) {
              jgg_H = true;
              return jgg_z(jgg_G);
            }
            jgg_i[jgg_q] = jgg_Y;
            jgg_I == jgg_C.length && (jgg_H = true, jgg_z(null, jgg_i));
          }
        });
      });
      jgg_U || jgg_z(null);
    };
    jgg_X.uniq = function (jgg_C) {
      return jgg_X.uniqBy(jgg_C);
    };
    jgg_X.uniqBy = function (jgg_C, jgg_O) {
      var jgg_d = [];
      var jgg_H = [];
      jgg_u.fn(jgg_O) || (jgg_O = null);
      jgg_o(jgg_C, function (jgg_U) {
        var jgg_i = jgg_U;
        jgg_O && (jgg_i = jgg_O(jgg_U));
        jgg_K(jgg_H, jgg_i) || (jgg_H.push(jgg_i), jgg_d.push(jgg_U));
      });
      return jgg_d;
    };
    jgg_X.flatten = function (jgg_C) {
      var jgg_O = [];
      jgg_o(jgg_C, function (jgg_z) {
        jgg_u.arraylike(jgg_z) ? jgg_o(jgg_z, function (jgg_d) {
          jgg_O.push(jgg_d);
        }) : jgg_O.push(jgg_z);
      });
      return jgg_O;
    };
    jgg_X.union = function () {
      return jgg_X.uniq(jgg_X.flatten(arguments));
    };
    jgg_X.sampleSize = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.toArray(jgg_C), jgg_d = jgg_z.length, jgg_H = Math.min(jgg_O || 1, jgg_d), jgg_U = 0; jgg_U < jgg_d; jgg_U++) {
        var jgg_i = jgg_X.random(jgg_U, jgg_d - 1);
        var jgg_I = jgg_z[jgg_i];
        jgg_z[jgg_i] = jgg_z[jgg_U];
        jgg_z[jgg_U] = jgg_I;
      }
      jgg_z.length = jgg_H;
      return jgg_z;
    };
    jgg_X.sample = function (jgg_C) {
      return jgg_X.first(jgg_X.sampleSize(jgg_C, 1));
    };
    jgg_X.shuffle = function (jgg_C) {
      return jgg_X.sampleSize(jgg_C, Infinity);
    };
    jgg_X.compact = function (jgg_C) {
      return jgg_X.filter(jgg_C, jgg_X.identity);
    };
    jgg_X.rest = function (jgg_C) {
      return jgg_X.slice(jgg_C, 1);
    };
    jgg_X.invoke = function () {
      var jgg_C = arguments;
      var jgg_O = jgg_C[0];
      var jgg_z = jgg_C[1];
      var jgg_d = jgg_u.fn(jgg_z);
      jgg_C = jgg_X.slice(jgg_C, 2);
      return jgg_X.map(jgg_O, function (jgg_H) {
        if (jgg_d) {
          return jgg_z.apply(jgg_H, jgg_C);
        }
        if (null != jgg_H) {
          var jgg_U = jgg_H[jgg_z];
          if (jgg_u.fn(jgg_U)) {
            return jgg_U.apply(jgg_H, jgg_C);
          }
        }
      });
    };
    jgg_X.partition = function (jgg_C, jgg_O) {
      var jgg_d = jgg_X.groupBy(jgg_C, function (jgg_H, jgg_U, jgg_i) {
        var jgg_I = jgg_O(jgg_H, jgg_U, jgg_i);
        return jgg_I ? 1 : 2;
      });
      return [jgg_d[1] || [], jgg_d[2] || []];
    };
    jgg_X.groupBy = function (jgg_C, jgg_O) {
      var jgg_d = {};
      jgg_X.each(jgg_C, function (jgg_H, jgg_U, jgg_i) {
        var jgg_I = jgg_O(jgg_H, jgg_U, jgg_i);
        jgg_d[jgg_I] = jgg_d[jgg_I] || [];
        jgg_d[jgg_I].push(jgg_H);
      });
      return jgg_d;
    };
    jgg_X.range = function () {
      var jgg_d = arguments;
      if (jgg_d.length < 2) {
        return jgg_X.range(jgg_d[1], jgg_d[0]);
      }
      var jgg_I = jgg_d[0] || 0;
      var jgg_Z = jgg_d[1] || 0;
      var jgg_q = jgg_d[2];
      jgg_u.number(jgg_q) || (jgg_q = 1);
      var jgg_z = jgg_Z - jgg_I;
      0 != jgg_q && (jgg_z /= jgg_q);
      for (var jgg_H = [], jgg_U = jgg_I, jgg_i = 0; jgg_i < jgg_z; jgg_i++) {
        jgg_H.push(jgg_U);
        jgg_U += jgg_q;
      }
      return jgg_H;
    };
    jgg_X.pullAt = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_y(jgg_C, jgg_O);
    };
    jgg_X.remove = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.len(jgg_C) || 0, jgg_d = []; jgg_z--;) {
        jgg_O(jgg_C[jgg_z], jgg_z, jgg_C) && jgg_d.push(jgg_z);
      }
      return jgg_y(jgg_C, jgg_d);
    };
    jgg_X.fill = function (jgg_C, jgg_O, jgg_z, jgg_d) {
      var jgg_H = jgg_X.size(jgg_C);
      jgg_z = jgg_h(jgg_z, jgg_C) || 0;
      jgg_d = jgg_h(jgg_d, jgg_C) || jgg_H;
      for (var jgg_U = jgg_z; jgg_U < jgg_d; jgg_U++) {
        jgg_C[jgg_U] = jgg_O;
      }
      return jgg_C;
    };
    jgg_X.size = function (jgg_C) {
      var jgg_O = 0;
      if (jgg_C) {
        var jgg_z = jgg_C.length;
        jgg_X.isInteger(jgg_z) && jgg_z >= 0 ? jgg_O = jgg_z : jgg_X.isObject(jgg_C) && (jgg_O = jgg_X.keys(jgg_C).length);
      }
      return jgg_O;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_r) {
      if (jgg_y.array(jgg_r)) {
        return jgg_r;
      }
      var jgg_O = [];
      jgg_X.toString(jgg_r).replace(jgg_K, function (jgg_z, jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_d || jgg_z;
        jgg_H && (jgg_i = jgg_U.replace(jgg_u, "$1"));
        jgg_O.push(jgg_i);
      });
      return jgg_O;
    }
    var jgg_y = jgg_X.is;
    var jgg_o = jgg_X.forIn;
    jgg_X.only = function (jgg_r, jgg_C) {
      jgg_r = jgg_r || {};
      jgg_y.string(jgg_C) && (jgg_C = jgg_C.split(/ +/));
      return jgg_X.reduce(jgg_C, function (jgg_z, jgg_d) {
        null != jgg_r[jgg_d] && (jgg_z[jgg_d] = jgg_r[jgg_d]);
        return jgg_z;
      }, {});
    };
    jgg_X.values = function (jgg_r) {
      return jgg_X.map(jgg_X.keys(jgg_r), function (jgg_C) {
        return jgg_r[jgg_C];
      });
    };
    jgg_X.pick = function (jgg_r, jgg_C) {
      if (!jgg_y.fn(jgg_C)) {
        return jgg_X.pick(jgg_r, function (jgg_d, jgg_H) {
          return jgg_H == jgg_C;
        });
      }
      var jgg_z = {};
      jgg_o(jgg_r, function (jgg_d, jgg_H, jgg_U) {
        jgg_C(jgg_d, jgg_H, jgg_U) && (jgg_z[jgg_H] = jgg_d);
      });
      return jgg_z;
    };
    jgg_X.functions = function (jgg_r) {
      return jgg_X.keys(jgg_X.pick(jgg_r, function (jgg_C) {
        return jgg_y.fn(jgg_C);
      }));
    };
    jgg_X.mapKeys = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_C(jgg_z, jgg_d, jgg_H);
        jgg_O[jgg_U] = jgg_z;
      });
      return jgg_O;
    };
    jgg_X.mapObject = jgg_X.mapValues = function (jgg_r, jgg_C) {
      var jgg_z = {};
      jgg_o(jgg_r, function (jgg_d, jgg_H, jgg_U) {
        jgg_z[jgg_H] = jgg_C(jgg_d, jgg_H, jgg_U);
      });
      return jgg_z;
    };
    jgg_X.get = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return jgg_r;
        }
      }
    };
    jgg_X.has = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r && jgg_y.owns(jgg_r, jgg_z)) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return true;
        }
      }
      return false;
    };
    jgg_X.set = function (jgg_r, jgg_C, jgg_O) {
      jgg_C = jgg_h(jgg_C);
      var jgg_z = jgg_r;
      jgg_X.every(jgg_C, function (jgg_d, jgg_H) {
        if (jgg_y.oof(jgg_z)) {
          if (jgg_H + 1 != jgg_C.length) {
            var jgg_U = jgg_z[jgg_d];
            if (null == jgg_U) {
              var jgg_U = {};
              ~~jgg_d == jgg_d && (jgg_U = []);
            }
            jgg_z = jgg_z[jgg_d] = jgg_U;
            return true;
          }
          jgg_z[jgg_d] = jgg_O;
        }
      });
      return jgg_r;
    };
    jgg_X.create = function () {
      function jgg_C() {}
      return function (jgg_O, jgg_z) {
        "object" != typeof jgg_O && (jgg_O = null);
        jgg_C.prototype = jgg_O;
        return jgg_X.extend(new jgg_C(), jgg_z);
      };
    }();
    jgg_X.defaults = function () {
      var jgg_r = arguments;
      var jgg_C = jgg_r[0];
      var jgg_O = jgg_X.slice(jgg_r, 1);
      jgg_C && jgg_X.each(jgg_O, function (jgg_z) {
        jgg_X.mapObject(jgg_z, function (jgg_d, jgg_H) {
          jgg_y.undef(jgg_C[jgg_H]) && (jgg_C[jgg_H] = jgg_d);
        });
      });
      return jgg_C;
    };
    jgg_X.isMatch = function (jgg_r, jgg_C) {
      var jgg_O = true;
      jgg_r = jgg_r || {};
      jgg_o(jgg_C, function (jgg_z, jgg_d) {
        if (jgg_z !== jgg_r[jgg_d]) {
          jgg_O = false;
          return false;
        }
      });
      return jgg_O;
    };
    jgg_X.toPlainObject = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_z] = jgg_O;
      });
      return jgg_C;
    };
    jgg_X.invert = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_O] = jgg_z;
      });
      return jgg_C;
    };
    var jgg_K = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var jgg_u = /\\(\\)?/g;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = function (jgg_V) {
    function jgg_y(jgg_u) {
      function jgg_r() {
        var jgg_O = arguments;
        var jgg_z = jgg_O[0];
        if (!jgg_C.has(jgg_z)) {
          var jgg_d = jgg_u.apply(this, jgg_O);
          jgg_C.set(jgg_z, jgg_d);
        }
        return jgg_C.get(jgg_z);
      }
      var jgg_C = new jgg_y.Cache();
      jgg_r.cache = jgg_C;
      return jgg_r;
    }
    var jgg_o = jgg_V.is;
    var jgg_K = jgg_V.slice;
    jgg_V.bind = function (jgg_u, jgg_r) {
      if (jgg_o.string(jgg_r)) {
        var jgg_C = jgg_u;
        jgg_u = jgg_C[jgg_r];
        jgg_r = jgg_C;
      }
      if (!jgg_o.fn(jgg_u)) {
        return jgg_u;
      }
      var jgg_O = jgg_K(arguments, 2);
      jgg_r = jgg_r || this;
      return function () {
        return jgg_u.apply(jgg_r, jgg_V.flatten([jgg_O, arguments]));
      };
    };
    jgg_V.inherits = function (jgg_u, jgg_r) {
      jgg_u.super_ = jgg_r;
      jgg_u.prototype = jgg_V.create(jgg_r.prototype, {
        constructor: jgg_u
      });
    };
    jgg_V.delay = function (jgg_u, jgg_r) {
      var jgg_C = jgg_V.slice(arguments, 2);
      return setTimeout(function () {
        jgg_u.apply(this, jgg_C);
      }, jgg_r);
    };
    jgg_V.before = function (jgg_u, jgg_r) {
      return function () {
        if (jgg_u > 1) {
          jgg_u--;
          return jgg_r.apply(this, arguments);
        }
      };
    };
    jgg_V.once = function (jgg_u) {
      return jgg_V.before(2, jgg_u);
    };
    jgg_V.after = function (jgg_u, jgg_r) {
      return function () {
        return jgg_u > 1 ? void jgg_u-- : jgg_r.apply(this, arguments);
      };
    };
    jgg_V.throttle = function (jgg_u, jgg_r, jgg_C) {
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: true,
        trailing: true,
        maxWait: jgg_r
      }, jgg_C);
      return jgg_V.debounce(jgg_u, jgg_r, jgg_C);
    };
    jgg_V.debounce = function (jgg_u, jgg_r, jgg_C) {
      function jgg_z() {
        return !(jgg_G - jgg_Z > jgg_r) && !(jgg_I && jgg_G - jgg_q > jgg_I);
      }
      function jgg_d(jgg_Y, jgg_c, jgg_l) {
        jgg_Z = jgg_V.now();
        return jgg_Y.apply(jgg_c, jgg_l);
      }
      function jgg_H() {
        jgg_i && (clearTimeout(jgg_i), jgg_i = null);
      }
      function jgg_U() {
        jgg_G = jgg_V.now();
        var jgg_c = jgg_z();
        jgg_q = jgg_G;
        var jgg_l = this;
        var jgg_w = arguments;
        jgg_H();
        jgg_c ? jgg_C.trailing && (jgg_i = jgg_V.delay(function () {
          jgg_d(jgg_u, jgg_l, jgg_w);
        }, jgg_r)) : jgg_d(jgg_u, jgg_l, jgg_w);
      }
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: false,
        trailing: true
      }, jgg_C);
      var jgg_i;
      var jgg_I = jgg_C.maxWait;
      var jgg_Z = 0;
      var jgg_q = 0;
      var jgg_G = jgg_V.now();
      jgg_C.leading || (jgg_Z = jgg_G);
      jgg_U.cancel = jgg_H;
      return jgg_U;
    };
    jgg_y.Cache = jgg_T(11);
    jgg_V.memoize = jgg_y;
    jgg_V.wrap = function (jgg_u, jgg_r) {
      return function () {
        var jgg_C = [jgg_u];
        jgg_C.push.apply(jgg_C, arguments);
        return jgg_r.apply(this, jgg_C);
      };
    };
    jgg_V.curry = function (jgg_u) {
      function jgg_C(jgg_z) {
        return function () {
          var jgg_H = jgg_z.concat(jgg_V.slice(arguments));
          return jgg_H.length >= jgg_O ? (jgg_H.length = jgg_O, jgg_u.apply(this, jgg_H)) : jgg_C(jgg_H);
        };
      }
      var jgg_O = jgg_u.length;
      return jgg_C([]);
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.data = {};
  }
  var jgg_h = jgg_T(4);
  var jgg_y = jgg_h.is;
  jgg_W.exports = jgg_V;
  var jgg_o = jgg_V.prototype;
  jgg_o.has = function (jgg_K) {
    return jgg_y.owns(this.data, jgg_K);
  };
  jgg_o.get = function (jgg_K) {
    return this.data[jgg_K];
  };
  jgg_o.set = function (jgg_K, jgg_u) {
    this.data[jgg_K] = jgg_u;
  };
  jgg_o.delete = function (jgg_K) {
    delete this.data[jgg_K];
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_u, jgg_r) {
      jgg_u = jgg_y(jgg_u) || " ";
      var jgg_C = Math.floor(jgg_r / jgg_u.length) + 1;
      return jgg_X.repeat(jgg_u, jgg_C).slice(0, jgg_r);
    }
    function jgg_y(jgg_u) {
      return jgg_u || 0 == jgg_u ? jgg_u + "" : "";
    }
    jgg_X.tostr = jgg_X.toString = jgg_y;
    var jgg_o = jgg_X.indexOf;
    jgg_X.split = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.split(jgg_r, jgg_C);
    };
    jgg_X.capitalize = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1).toLowerCase();
    };
    jgg_X.upperFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1);
    };
    jgg_X.lowerFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toLowerCase() + jgg_u.substr(1);
    };
    jgg_X.camelCase = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      var jgg_r = jgg_u.split(/[^\w]|_+/);
      jgg_r = jgg_X.map(jgg_r, function (jgg_C) {
        return jgg_X.capitalize(jgg_C);
      });
      return jgg_X.lowerFirst(jgg_r.join(""));
    };
    jgg_X.startsWith = function (jgg_u, jgg_r) {
      return 0 == jgg_o(jgg_u, jgg_r);
    };
    jgg_X.endsWith = function (jgg_u, jgg_r) {
      jgg_r += "";
      return jgg_r == jgg_X.slice(jgg_u, jgg_X.len(jgg_u) - jgg_X.len(jgg_r));
    };
    jgg_X.toLower = jgg_X.lower = function (jgg_u) {
      return jgg_y(jgg_u).toLowerCase();
    };
    jgg_X.toUpper = jgg_X.upper = function (jgg_u) {
      return jgg_y(jgg_u).toUpperCase();
    };
    jgg_X.repeat = function (jgg_u, jgg_r) {
      return jgg_X.map(jgg_X.range(jgg_r), function () {
        return jgg_u;
      }).join("");
    };
    jgg_X.padStart = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_h(jgg_C, jgg_O) + jgg_u;
    };
    jgg_X.padEnd = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_u + jgg_h(jgg_C, jgg_O);
    };
    var jgg_K = {
      "&": "&amp",
      "<": "&lt",
      ">": "&gt",
      "\"": "&quot",
      "'": "&#39"
    };
    jgg_X.escape = function (jgg_u) {
      return jgg_y(jgg_u).replace(/[&<>"']/g, function (jgg_r) {
        return jgg_K[jgg_r] || jgg_r;
      });
    };
    jgg_X.template = function (jgg_u) {
      function jgg_C(jgg_i) {
        var jgg_I = jgg_X.first(jgg_i);
        if ("=" === jgg_I || "-" === jgg_I) {
          var jgg_Z = jgg_X.slice(jgg_i, 1);
          "-" === jgg_I && (jgg_Z = "_.escape(" + jgg_Z + ")");
          jgg_z.push("ret += " + jgg_Z);
        } else {
          jgg_z.push(jgg_i);
        }
      }
      function jgg_O(jgg_i) {
        jgg_z.push("ret += \"" + jgg_i.replace(/('|"|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "\"");
      }
      var jgg_z = ["with(data) {var ret = \"\""];
      jgg_X.each(jgg_X.split(jgg_u, "<%"), function (jgg_i, jgg_I) {
        var jgg_Z = jgg_i.split("%>");
        return jgg_Z[1] ? (jgg_C(jgg_X.trim(jgg_Z[0])), jgg_O(jgg_Z[1])) : void jgg_O(jgg_Z[0]);
      });
      jgg_z.push("return ret}");
      var jgg_d = new Function("data", jgg_z.join("\n"));
      var jgg_H = {
        _: jgg_X
      };
      var jgg_U = function (jgg_i) {
        return jgg_d(jgg_X.extend({}, jgg_H, jgg_i));
      };
      return jgg_U;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    jgg_X.sum = function (jgg_h) {
      return jgg_X.reduce(jgg_h, function (jgg_y, jgg_o) {
        return jgg_y + jgg_o;
      }, 0);
    };
    jgg_X.max = function (jgg_h, jgg_y) {
      var jgg_K = -1;
      var jgg_u = -Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_r, jgg_C) {
        jgg_r = jgg_y(jgg_r);
        jgg_r > jgg_u && (jgg_u = jgg_r, jgg_K = jgg_C);
      });
      return jgg_K > -1 ? jgg_h[jgg_K] : jgg_u;
    };
    jgg_X.min = function (jgg_h, jgg_y) {
      var jgg_o = -1;
      var jgg_K = Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_u, jgg_r) {
        jgg_u = jgg_y(jgg_u);
        jgg_u < jgg_K && (jgg_K = jgg_u, jgg_o = jgg_r);
      });
      return jgg_o > -1 ? jgg_h[jgg_o] : jgg_K;
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(15);
  jgg_W.exports = jgg_a = jgg_V.getLogger();
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_U) {
    var jgg_i = this;
    jgg_o.string(jgg_U) && (jgg_U = {
      name: jgg_U
    });
    jgg_U = jgg_U || {};
    var jgg_I = jgg_U.name || "default";
    jgg_i.name = jgg_I;
    jgg_i.Level = jgg_K;
    jgg_i.sdk = jgg_O;
    jgg_i.enabled = jgg_O.isNameEnabled(jgg_I);
    jgg_i.color = jgg_U.color || jgg_i.sdk.getRandomColor(jgg_I);
    jgg_i.util = jgg_r;
    jgg_i._ = jgg_y;
    jgg_i.qs = jgg_C;
  }
  function jgg_h(jgg_U) {
    var jgg_i = jgg_O.loggers;
    var jgg_I = jgg_i[jgg_U];
    jgg_I || (jgg_I = jgg_i[jgg_U] = new jgg_V(jgg_U));
    return jgg_I;
  }
  var jgg_y = jgg_T(2);
  var jgg_o = jgg_y.is;
  var jgg_K = jgg_T(16);
  var jgg_u = jgg_T(17);
  var jgg_r = jgg_T(25);
  var jgg_C = jgg_T(26);
  var jgg_O = new jgg_u();
  jgg_W.exports = jgg_a = jgg_V;
  var jgg_z = jgg_y.map(jgg_y.keys(jgg_K), function (jgg_U) {
    return jgg_y.lower(jgg_U);
  });
  var jgg_d = jgg_V.prototype;
  jgg_d.getLogger = jgg_V.getLogger = jgg_h;
  jgg_d.output = function (jgg_U, jgg_i) {
    var jgg_I = this;
    var jgg_Z = {
      level: jgg_U,
      name: jgg_I.name,
      enabled: jgg_I.enabled,
      timestamp: jgg_y.now(),
      data: jgg_i,
      color: jgg_I.color,
      done: false
    };
    jgg_O.output(jgg_Z);
  };
  jgg_y.each(jgg_z, function (jgg_U) {
    var jgg_i = jgg_K.toCode(jgg_U);
    jgg_d[jgg_U] = function () {
      this.output(jgg_i, arguments);
    };
    var jgg_I = "is" + jgg_y.capitalize(jgg_U) + "Enabled";
    jgg_d[jgg_I] = function () {
      return this.sdk.isLevelEnabled(jgg_i);
    };
  });
  var jgg_H = "setOptions setOutputer setName setLevel setHistorySize getHistory disableHistory clear save setColors".split(" ");
  jgg_y.each(jgg_H, function (jgg_U) {
    jgg_d[jgg_U] = function () {
      return this.sdk[jgg_U].apply(this.sdk, arguments);
    };
  });
  jgg_d.getLevelFunction = function (jgg_U) {
    var jgg_i = this;
    var jgg_I = jgg_K.toCode(jgg_U) || jgg_K.DEBUG;
    return function () {
      jgg_i.output(jgg_I, arguments);
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(2);
  var jgg_h = "verbose debug log info warn error fatal off".split(" ");
  jgg_V.each(jgg_h, function (jgg_y, jgg_o) {
    jgg_a[jgg_V.upper(jgg_y)] = jgg_o + 1;
  });
  jgg_a.toCode = function (jgg_y) {
    return jgg_a[jgg_V.upper(jgg_y)] || jgg_y;
  };
  jgg_a.toName = function (jgg_y) {
    return jgg_V.find(jgg_h, function (jgg_o) {
      return jgg_a[jgg_V.upper(jgg_o)] === jgg_y;
    });
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    var jgg_z = this;
    jgg_z.history = [];
    jgg_z.pendingItems = [];
    jgg_z.Level = jgg_y;
    jgg_z.loggers = {};
    jgg_z.level = null;
    jgg_z.prefix = "";
    jgg_z.pattern = {};
    jgg_z.lastItem = null;
    jgg_z.outputers = jgg_o;
    jgg_z.colorMap = {};
    jgg_z.colors = "lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson".split(" ");
    jgg_z.colorIndex = 0;
    jgg_z.historySize = 3000;
    jgg_z.setOutputer(jgg_r.noop);
    jgg_z.autoInit();
  }
  function jgg_h(jgg_z) {
    var jgg_H = [];
    var jgg_U = [];
    jgg_z && jgg_C.string(jgg_z) && jgg_r.each(jgg_z.split(/[\s,]+/), function (jgg_i) {
      jgg_i = jgg_i.replace(/\*/g, ".*?");
      var jgg_I = jgg_i.charAt(0);
      "-" === jgg_I ? jgg_H.push(new RegExp("^" + jgg_r.slice(jgg_i, 1) + "$")) : jgg_U.push(new RegExp("^" + jgg_i + "$"));
    });
    return {
      skips: jgg_H,
      names: jgg_U
    };
  }
  var jgg_y = jgg_T(16);
  var jgg_o = jgg_T(18);
  var jgg_K = jgg_T(20);
  var jgg_u = jgg_T(25);
  var jgg_r = jgg_T(2);
  var jgg_C = jgg_r.is;
  jgg_W.exports = jgg_V;
  var jgg_O = jgg_V.prototype;
  jgg_O.autoInit = function () {
    var jgg_z = this;
    var jgg_d = jgg_z.getDefaultOptions();
    var jgg_H = jgg_z.getUserOptions();
    var jgg_U = jgg_r.extend({}, jgg_d, jgg_H);
    jgg_z.setOptions(jgg_U);
  };
  jgg_O.setOptions = function (jgg_z) {
    var jgg_d = this;
    jgg_d.setName(jgg_z.name);
    jgg_d.setLevel(jgg_z.level);
    jgg_d.setOutputer(jgg_z.outputer);
  };
  jgg_O.getDefaultOptions = function () {
    var jgg_z = this;
    var jgg_d = {
      level: jgg_y.INFO,
      outputer: jgg_z.autoChooseOutputer(),
      name: "*"
    };
    return jgg_d;
  };
  jgg_O.getUserOptions = function () {
    var jgg_z = jgg_u.getUserOptions("log_name log_level log_outputer".split(" "));
    return {
      name: jgg_z.log_name,
      level: jgg_z.log_level,
      outputer: jgg_z.log_outputer
    };
  };
  jgg_O.autoChooseOutputer = function () {
    var jgg_z = jgg_r.noop;
    jgg_K.hasConsole() && (jgg_z = jgg_u.supportBrowserColor() ? "browser_console" : "node_console");
    return jgg_z;
  };
  jgg_O.setOutputer = function (jgg_z) {
    var jgg_d = this;
    var jgg_H = null;
    jgg_C.string(jgg_z) ? jgg_H = jgg_d.outputers[jgg_z] : jgg_C.fn(jgg_z) && (jgg_H = {
      handler: jgg_z
    });
    jgg_H && (jgg_d.outputer = jgg_H, jgg_C.fn(jgg_H.init) && jgg_H.init(jgg_d), jgg_C.fn(jgg_H.ready) && jgg_H.ready(function () {
      jgg_r.each(jgg_d.pendingItems, function (jgg_i) {
        jgg_i.done === false && (jgg_H.handler(jgg_i), jgg_i.done = true);
      });
      jgg_d.pendingItems.length = 0;
    }));
  };
  jgg_O.output = function (jgg_z) {
    var jgg_d = this;
    if (jgg_z.enabled && jgg_d.isLevelEnabled(jgg_z.level)) {
      var jgg_H = jgg_d.outputer;
      jgg_H.isReady === false ? jgg_d.pendingItems.push(jgg_z) : (jgg_H.handler(jgg_z, jgg_d), jgg_z.done = true);
      jgg_d.lastItem = jgg_z;
    }
    jgg_d.appendHistory(jgg_z);
  };
  jgg_O.setPrefix = function (jgg_z) {
    var jgg_d = this;
    jgg_d.prefix = jgg_z;
  };
  jgg_O.isLevelEnabled = function (jgg_z) {
    var jgg_d = this;
    return jgg_z >= jgg_d.level;
  };
  jgg_O.getRandomColor = function (jgg_z) {
    var jgg_d = this;
    var jgg_H = jgg_d.colorMap[jgg_z];
    if (!jgg_H) {
      var jgg_U = jgg_d.colors;
      jgg_H = jgg_d.colorMap[jgg_z] = jgg_U[jgg_d.colorIndex++ % jgg_U.length];
    }
    return jgg_H;
  };
  jgg_O.setName = function (jgg_z) {
    return this.setNamePattern(jgg_z);
  };
  jgg_O.setColors = function (jgg_z) {
    this.colors = jgg_z;
  };
  jgg_O.setNamePattern = function (jgg_z) {
    var jgg_d = this;
    jgg_d.pattern = jgg_h(jgg_z);
    jgg_r.forIn(jgg_d.loggers, function (jgg_H) {
      jgg_H.enabled = jgg_d.isNameEnabled(jgg_H.name);
    });
  };
  jgg_O.isNameEnabled = function (jgg_z) {
    function jgg_d(jgg_i) {
      return jgg_i.test(jgg_z);
    }
    var jgg_H = this;
    var jgg_U = jgg_H.pattern;
    return !jgg_r.some(jgg_U.skips, jgg_d) && !!jgg_r.some(jgg_U.names, jgg_d);
  };
  jgg_O.setLevel = function (jgg_z) {
    this.level = jgg_y.toCode(jgg_z);
  };
  jgg_O.appendHistory = function (jgg_z) {
    var jgg_d = this;
    jgg_d.history.push(jgg_z);
    jgg_d.history.length > jgg_d.historySize && jgg_d.history.shift();
  };
  jgg_O.setHistorySize = function (jgg_z) {
    this.historySize = jgg_z;
  };
  jgg_O.getHistory = function () {
    return this.history;
  };
  jgg_O.disableHistory = function () {
    this.setHistorySize(0);
  };
  jgg_O.clear = function () {
    this.history.length = 0;
  };
  jgg_O.save = function () {
    var jgg_z = this;
    return jgg_r.map(jgg_z.history, function (jgg_d) {
      return jgg_r.map(jgg_d.data, function (jgg_H) {
        var jgg_U = jgg_u.safeStringify(jgg_H);
        return jgg_U;
      }).join(" ");
    }).join("\r\n");
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_a.console = jgg_T(19);
  jgg_a.browser_console = jgg_T(21);
  jgg_a.node_console = jgg_T(22);
  jgg_a.file = jgg_T(23);
  jgg_a.browser_html = jgg_T(24);
  jgg_a.vconsole = jgg_T(27);
  jgg_a.eruda = jgg_T(39);
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(16);
  var jgg_h = jgg_T(20);
  jgg_a.handler = function (jgg_y) {
    var jgg_o = jgg_y.level;
    jgg_o < jgg_V.DEBUG ? jgg_o = jgg_V.DEBUG : jgg_o > jgg_V.ERROR && (jgg_o = jgg_V.ERROR);
    var jgg_K = jgg_V.toName(jgg_o);
    jgg_h.console(jgg_K, jgg_y.data);
  };
}, function (jgg_W, jgg_a) {
  (function (jgg_X) {
    jgg_a.getConsole = function () {
      if ("undefined" != typeof jgg_X) {
        return jgg_X.console;
      }
    };
    jgg_a.globalConsole = jgg_a.getConsole();
    var jgg_V = jgg_a.globalConsole;
    jgg_a.hasConsole = function () {
      return !!jgg_a.globalConsole;
    };
    jgg_a.console = function (jgg_h, jgg_y) {
      var jgg_o = Function.prototype.apply || jgg_V[jgg_h].apply;
      jgg_o.call(jgg_V[jgg_h], jgg_V, jgg_y);
    };
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(2);
  var jgg_h = jgg_T(20);
  var jgg_y = "color:inherit";
  jgg_a.handler = function (jgg_o, jgg_K) {
    var jgg_u = jgg_K.lastItem || {};
    var jgg_r = jgg_u.timestamp || jgg_o.timestamp;
    var jgg_C = jgg_o.timestamp - jgg_r;
    var jgg_O = "color:" + jgg_o.color;
    var jgg_z = jgg_K.prefix + jgg_o.name;
    var jgg_d = "%c" + jgg_z + "%c";
    var jgg_H = [null, jgg_O, jgg_y];
    jgg_V.each(jgg_o.data, function (jgg_U) {
      jgg_H.push(jgg_U);
      jgg_d += " %o";
    });
    jgg_H.push(jgg_O);
    jgg_d += "%c +" + jgg_C + "ms";
    jgg_H[0] = jgg_d;
    jgg_h.console("log", jgg_H);
  };
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(20);
  jgg_a.handler = function (jgg_h) {
    jgg_V.console("log", jgg_h.data);
  };
}, function (jgg_W, jgg_a) {}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y() {
      this.inited = false;
      this.box = null;
    }
    var jgg_o = jgg_T(2);
    var jgg_K = jgg_T(25);
    var jgg_u = jgg_y.prototype;
    jgg_u.init = function (jgg_r) {
      if (!this.inited) {
        this.inited = true;
        var jgg_C = jgg_V.document;
        if (jgg_C) {
          this.box = jgg_C.createElement("div");
          this.box.style.cssText = "z-index:999;padding:16px;height:300px;overflow:auto;line-height:1.4;background:#242424;color:#fff;font-size:16px; font-family: monospace,consolas,\"Hiragino Sans GB\",\"Microsoft YaHei\",\"微软雅黑\",Arial,sans-serif;border:none;text-align:left";
          var jgg_O = jgg_C.body || jgg_C.documentElement;
          jgg_O.insertBefore(this.box, jgg_O.firstChild);
        }
      }
    };
    jgg_u.handler = function (jgg_r, jgg_C) {
      if (jgg_V.document) {
        var jgg_O = jgg_C.lastItem || {};
        var jgg_z = jgg_O.timestamp || jgg_r.timestamp;
        var jgg_d = jgg_r.timestamp - jgg_z;
        var jgg_H = jgg_C.prefix + jgg_r.name;
        var jgg_U = [jgg_H];
        jgg_o.each(jgg_r.data, function (jgg_I) {
          jgg_U.push(jgg_K.safeStringify(jgg_I));
        });
        jgg_U.push("+" + jgg_d + "ms");
        var jgg_i = document.createElement("div");
        jgg_K.text(jgg_i, jgg_U.join(" "));
        jgg_i.style.color = jgg_r.color;
        this.box.appendChild(jgg_i);
      }
    };
    jgg_W.exports = new jgg_y();
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y() {
      return !(!jgg_d.browser() || !/Trident/i.test(navigator.userAgent));
    }
    function jgg_o(jgg_U, jgg_i) {
      var jgg_I = false;
      var jgg_Z = jgg_z.now();
      jgg_U = jgg_U.replace("__now__", jgg_Z);
      var jgg_q = document.createElement("script");
      jgg_q.onload = jgg_q.onreadystatechange = function () {
        jgg_I || "complete" !== this.readyState && this.readyState || (jgg_I = true, jgg_i());
      };
      jgg_q.type = "text/javascript";
      jgg_q.src = jgg_U;
      jgg_q.async = 1;
      var jgg_G = document.getElementsByTagName("script")[0];
      jgg_G.parentNode.insertBefore(jgg_q, jgg_G);
    }
    function jgg_K() {
      return !!jgg_d.wechatApp() || !jgg_y() && !!jgg_d.browser();
    }
    function jgg_u(jgg_U, jgg_i) {
      var jgg_I = "textContent";
      jgg_d.owns(jgg_U, jgg_I) || (jgg_I = "innerText");
      jgg_U[jgg_I] = jgg_i;
    }
    function jgg_r(jgg_U) {
      try {
        jgg_U = JSON.stringify(jgg_U, 0, 4);
      } catch (jgg_i) {
        jgg_U += "";
      }
      return jgg_U;
    }
    function jgg_C(jgg_U) {
      var jgg_Y = [];
      if (jgg_V.location) {
        var jgg_c = jgg_H.parse(jgg_z.slice(location.search, 1));
        jgg_Y.push(jgg_c);
      }
      try {
        jgg_V.localStorage && jgg_Y.push(localStorage);
      } catch (jgg_l) {}
      var jgg_q = jgg_z.get(jgg_V, ["process", "env"]);
      jgg_q && jgg_Y.push(jgg_q);
      var jgg_G = jgg_z.find(jgg_Y, function (jgg_l) {
        var jgg_w;
        try {
          jgg_w = jgg_O(jgg_l, jgg_U);
        } catch (jgg_D) {
          jgg_w = null;
        }
        if (jgg_w) {
          return jgg_w;
        }
      });
      return jgg_G || {};
    }
    function jgg_O(jgg_U, jgg_i) {
      var jgg_I = {};
      var jgg_Z = false;
      if (jgg_z.each(jgg_i, function (jgg_q) {
        jgg_d.owns(jgg_U, jgg_q) && (jgg_Z = true, jgg_I[jgg_q] = jgg_U[jgg_q]);
      }), jgg_Z) {
        return jgg_I;
      }
    }
    var jgg_z = jgg_T(2);
    var jgg_d = jgg_z.is;
    var jgg_H = jgg_T(26);
    jgg_a.isIE = jgg_y;
    jgg_a.supportBrowserColor = jgg_K;
    jgg_a.safeStringify = jgg_r;
    jgg_a.text = jgg_u;
    jgg_a.getUserOptions = jgg_C;
    jgg_a.loadScript = jgg_o;
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_K, jgg_u, jgg_r) {
    jgg_r = jgg_h.find(arguments, function (jgg_C) {
      return jgg_y.object(jgg_C);
    });
    jgg_K = jgg_y.nos(jgg_K) ? jgg_K : undefined;
    jgg_u = jgg_y.nos(jgg_u) ? jgg_u : undefined;
    return jgg_r = jgg_h.extend({}, jgg_o, jgg_r, {
      sep: jgg_K,
      eq: jgg_u
    });
  }
  var jgg_h = jgg_T(2);
  var jgg_y = jgg_h.is;
  var jgg_o = {
    sep: "&",
    eq: "=",
    encode: encodeURIComponent,
    decode: decodeURIComponent,
    keepRaw: false,
    sort: null,
    ignoreValues: [undefined]
  };
  jgg_a.parse = function (jgg_K, jgg_u, jgg_r, jgg_C) {
    jgg_K += "";
    jgg_C = jgg_V(jgg_u, jgg_r, jgg_C);
    var jgg_O = jgg_C.decode;
    jgg_K = jgg_K.split(jgg_C.sep);
    return jgg_h.reduce(jgg_K, function (jgg_z, jgg_d) {
      if (jgg_d = jgg_d.split(jgg_C.eq), 2 == jgg_d.length) {
        var jgg_H = jgg_d[0];
        var jgg_U = jgg_d[1];
        if (!jgg_C.keepRaw) {
          try {
            jgg_H = jgg_O(jgg_H);
            jgg_U = jgg_O(jgg_U);
          } catch (jgg_i) {}
        }
        jgg_z[jgg_H] = jgg_U;
      }
      return jgg_z;
    }, {});
  };
  jgg_a.stringify = function (jgg_K, jgg_u, jgg_r, jgg_C) {
    jgg_C = jgg_V(jgg_u, jgg_r, jgg_C);
    var jgg_z = jgg_h.keys(jgg_K);
    var jgg_d = jgg_C.sort;
    jgg_d && (jgg_y.fn(jgg_d) ? jgg_z.sort(jgg_d) : jgg_z.sort());
    var jgg_H = jgg_C.encode;
    var jgg_U = [];
    jgg_h.each(jgg_z, function (jgg_i) {
      var jgg_I = jgg_K[jgg_i];
      jgg_h.includes(jgg_C.ignoreValues, jgg_I) || ((jgg_y.nan(jgg_I) || null == jgg_I) && (jgg_I = ""), jgg_C.keepRaw || (jgg_i = jgg_H(jgg_i), jgg_I = jgg_H(jgg_I)), jgg_U.push(jgg_i + jgg_C.eq + jgg_I));
    });
    return jgg_U.join(jgg_C.sep);
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.inited = false;
    this.isReady = false;
  }
  var jgg_h = jgg_T(19);
  var jgg_y = jgg_T(25);
  var jgg_o = jgg_T(28)();
  var jgg_K = jgg_V.prototype;
  jgg_K.init = function () {
    var jgg_u = this;
    if (!jgg_u.inited) {
      jgg_u.inited = true;
      var jgg_r = "//s.url.cn/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js";
      jgg_y.loadScript(jgg_r, function () {
        jgg_u.run();
        window.addEventListener("load", function () {
          jgg_u.run();
        });
      });
    }
  };
  jgg_K.ready = function (jgg_u) {
    jgg_o.queue(jgg_u);
  };
  jgg_K.run = function () {
    try {
      vConsole.show();
      this.isReady = true;
      jgg_o.open();
    } catch (jgg_u) {}
  };
  jgg_K.handler = jgg_h.handler;
  jgg_W.exports = new jgg_V();
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y(jgg_r) {
      var jgg_C = this;
      return jgg_C instanceof jgg_y ? (jgg_C.queueList = jgg_r || [], void jgg_C.close()) : new jgg_y(jgg_r);
    }
    var jgg_o = jgg_T(29);
    var jgg_K = jgg_o.is;
    jgg_W.exports = jgg_y;
    var jgg_u = jgg_y.prototype;
    jgg_u.queue = function () {
      var jgg_r = this;
      var jgg_C = arguments;
      jgg_r.isOpen ? jgg_r.exec(jgg_C) : jgg_r.queueList.push(jgg_C);
    };
    jgg_u.close = function () {
      this.isOpen = false;
    };
    jgg_u.open = function () {
      this.isOpen = true;
      this.execAll();
    };
    jgg_u.execAll = function () {
      var jgg_r = this;
      var jgg_C = jgg_r.queueList;
      jgg_o.each(jgg_C, function (jgg_O) {
        jgg_r.exec(jgg_O);
      });
      jgg_C.length = 0;
    };
    jgg_u.exec = function (jgg_r) {
      var jgg_C;
      var jgg_O = jgg_o.first(jgg_r);
      var jgg_z = this.ctx;
      if (jgg_C = jgg_K.fn(jgg_O) ? jgg_O : jgg_o.get(jgg_z, jgg_O), jgg_K.fn(jgg_C)) {
        try {
          jgg_C.apply(jgg_z, jgg_o.slice(jgg_r, 1));
        } catch (jgg_d) {}
      }
    };
    jgg_u.overwriteQueue = function (jgg_r) {
      var jgg_C = this;
      jgg_V[jgg_r] = function () {
        jgg_C.queue.apply(jgg_C, arguments);
      };
    };
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = jgg_T(30);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_V(jgg_o) {
      return this instanceof jgg_V ? (this.__value = jgg_o, void (this.__chain = false)) : new jgg_V(jgg_o);
    }
    var jgg_y = jgg_T(4);
    jgg_W.exports = jgg_y.extend(jgg_V, jgg_y);
    jgg_T(31)(jgg_V);
    jgg_T(32)(jgg_V);
    jgg_T(33)(jgg_V);
    jgg_T(34)(jgg_V);
    jgg_T(35)(jgg_V);
    jgg_T(37)(jgg_V);
    jgg_T(38)(jgg_V);
    jgg_V.mixin(jgg_V, jgg_V);
  }).call(jgg_a, jgg_T(29));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_T) {
    var jgg_X = jgg_T.is;
    jgg_T.isString = jgg_X.string;
    jgg_T.isArray = jgg_X.array;
    jgg_T.isArrayLike = jgg_X.arraylike;
    jgg_T.isBoolean = jgg_X.bool;
    jgg_T.isElement = jgg_X.element;
    jgg_T.isEmpty = jgg_X.empty;
    jgg_T.isFunction = jgg_X.fn;
    jgg_T.isInteger = jgg_X.integer;
    jgg_T.isNaN = jgg_X.nan;
    jgg_T.isNumber = jgg_X.number;
    jgg_T.isObject = jgg_X.object;
    jgg_T.isPlainObject = jgg_X.plainObject;
    jgg_T.isRegExp = jgg_X.regexp;
    jgg_T.isString = jgg_X.string;
    jgg_T.isUndefined = jgg_X.undef;
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    var jgg_o = jgg_X.is;
    jgg_X.now = function () {
      return +new Date();
    };
    jgg_X.constant = function (jgg_u) {
      return function () {
        return jgg_u;
      };
    };
    jgg_X.identity = function (jgg_u) {
      return jgg_u;
    };
    jgg_X.random = function (jgg_u, jgg_r) {
      return jgg_u + Math.floor(Math.random() * (jgg_r - jgg_u + 1));
    };
    jgg_X.mixin = function (jgg_u, jgg_r, jgg_C) {
      var jgg_O = jgg_X.functions(jgg_r);
      if (jgg_u) {
        if (jgg_o.fn(jgg_u)) {
          jgg_C = jgg_C || {};
          var jgg_z = jgg_u.prototype;
          jgg_X.each(jgg_O, function (jgg_d) {
            var jgg_H = jgg_r[jgg_d];
            jgg_z[jgg_d] = function () {
              var jgg_U = this;
              var jgg_i = [jgg_U.__value];
              jgg_i.push.apply(jgg_i, arguments);
              var jgg_I = jgg_H.apply(jgg_U, jgg_i);
              return jgg_U.__chain ? (jgg_U.__value = jgg_I, jgg_U) : jgg_I;
            };
          });
        } else {
          jgg_X.each(jgg_O, function (jgg_d) {
            jgg_u[jgg_d] = jgg_r[jgg_d];
          });
        }
      }
      return jgg_u;
    };
    jgg_X.chain = function (jgg_u) {
      var jgg_r = jgg_X(jgg_u);
      jgg_r.__chain = true;
      return jgg_r;
    };
    jgg_X.value = function () {
      this.__chain = false;
      return this.__value;
    };
    var jgg_K = 0;
    jgg_X.uniqueId = function (jgg_u) {
      jgg_K++;
      return jgg_X.toString(jgg_u) + jgg_K;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_C, jgg_O) {
      var jgg_z = jgg_X.size(jgg_O);
      jgg_C < 0 && (jgg_C += jgg_z);
      jgg_C < 0 && (jgg_C = 0);
      jgg_C > jgg_z && (jgg_C = jgg_z);
      return jgg_C || 0;
    }
    function jgg_y(jgg_C, jgg_O) {
      var jgg_z = [];
      var jgg_d = jgg_X.len(jgg_O);
      if (jgg_d) {
        for (jgg_O = jgg_O.sort(function (jgg_U, jgg_i) {
          return jgg_U - jgg_i;
        }); jgg_d--;) {
          var jgg_H = jgg_O[jgg_d];
          jgg_z.push(jgg_r.splice.call(jgg_C, jgg_H, 1)[0]);
        }
      }
      jgg_z.reverse();
      return jgg_z;
    }
    jgg_X.forEach = jgg_X.each;
    var jgg_o = jgg_X.forEach;
    var jgg_K = jgg_X.includes;
    var jgg_u = jgg_X.is;
    var jgg_r = Array.prototype;
    jgg_X.reject = function (jgg_C, jgg_O) {
      return jgg_X.filter(jgg_C, function (jgg_z, jgg_d, jgg_H) {
        return !jgg_O(jgg_z, jgg_d, jgg_H);
      });
    };
    jgg_X.without = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_X.difference(jgg_C, jgg_O);
    };
    jgg_X.difference = function (jgg_C, jgg_O) {
      var jgg_d = [];
      jgg_X.each(jgg_C, function (jgg_H) {
        jgg_K(jgg_O, jgg_H) || jgg_d.push(jgg_H);
      });
      return jgg_d;
    };
    jgg_X.pluck = function (jgg_C, jgg_O) {
      return jgg_X.map(jgg_C, function (jgg_z) {
        if (jgg_z) {
          return jgg_z[jgg_O];
        }
      });
    };
    jgg_X.nth = function (jgg_C, jgg_O) {
      jgg_O = jgg_h(jgg_O, jgg_C);
      jgg_O = jgg_O || 0;
      var jgg_z;
      return jgg_z = jgg_X.isString(jgg_C) ? jgg_C.charAt(jgg_O) : jgg_C[jgg_O];
    };
    jgg_X.first = function (jgg_C) {
      if (jgg_C) {
        return jgg_X.nth(jgg_C, 0);
      }
    };
    jgg_X.last = function (jgg_C) {
      var jgg_O = jgg_X.len(jgg_C);
      if (jgg_O) {
        return jgg_X.nth(jgg_C, jgg_O - 1);
      }
    };
    jgg_X.asyncMap = function (jgg_C, jgg_O, jgg_z) {
      var jgg_H;
      var jgg_U;
      var jgg_i = [];
      var jgg_I = 0;
      jgg_o(jgg_C, function (jgg_Z, jgg_q) {
        jgg_U = true;
        jgg_O(jgg_Z, function (jgg_Y, jgg_c) {
          if (!jgg_H) {
            if (jgg_I++, jgg_Y) {
              jgg_H = true;
              return jgg_z(jgg_Y);
            }
            jgg_i[jgg_q] = jgg_c;
            jgg_I == jgg_C.length && (jgg_H = true, jgg_z(null, jgg_i));
          }
        });
      });
      jgg_U || jgg_z(null);
    };
    jgg_X.uniq = function (jgg_C) {
      return jgg_X.uniqBy(jgg_C);
    };
    jgg_X.uniqBy = function (jgg_C, jgg_O) {
      var jgg_d = [];
      var jgg_H = [];
      jgg_u.fn(jgg_O) || (jgg_O = null);
      jgg_o(jgg_C, function (jgg_U) {
        var jgg_i = jgg_U;
        jgg_O && (jgg_i = jgg_O(jgg_U));
        jgg_K(jgg_H, jgg_i) || (jgg_H.push(jgg_i), jgg_d.push(jgg_U));
      });
      return jgg_d;
    };
    jgg_X.flatten = function (jgg_C) {
      var jgg_O = [];
      jgg_o(jgg_C, function (jgg_z) {
        jgg_u.arraylike(jgg_z) ? jgg_o(jgg_z, function (jgg_d) {
          jgg_O.push(jgg_d);
        }) : jgg_O.push(jgg_z);
      });
      return jgg_O;
    };
    jgg_X.union = function () {
      return jgg_X.uniq(jgg_X.flatten(arguments));
    };
    jgg_X.sampleSize = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.toArray(jgg_C), jgg_d = jgg_z.length, jgg_H = Math.min(jgg_O || 1, jgg_d), jgg_U = 0; jgg_U < jgg_d; jgg_U++) {
        var jgg_i = jgg_X.random(jgg_U, jgg_d - 1);
        var jgg_I = jgg_z[jgg_i];
        jgg_z[jgg_i] = jgg_z[jgg_U];
        jgg_z[jgg_U] = jgg_I;
      }
      jgg_z.length = jgg_H;
      return jgg_z;
    };
    jgg_X.sample = function (jgg_C) {
      return jgg_X.first(jgg_X.sampleSize(jgg_C, 1));
    };
    jgg_X.shuffle = function (jgg_C) {
      return jgg_X.sampleSize(jgg_C, Infinity);
    };
    jgg_X.compact = function (jgg_C) {
      return jgg_X.filter(jgg_C, jgg_X.identity);
    };
    jgg_X.rest = function (jgg_C) {
      return jgg_X.slice(jgg_C, 1);
    };
    jgg_X.invoke = function () {
      var jgg_C = arguments;
      var jgg_O = jgg_C[0];
      var jgg_z = jgg_C[1];
      var jgg_d = jgg_u.fn(jgg_z);
      jgg_C = jgg_X.slice(jgg_C, 2);
      return jgg_X.map(jgg_O, function (jgg_H) {
        if (jgg_d) {
          return jgg_z.apply(jgg_H, jgg_C);
        }
        if (null != jgg_H) {
          var jgg_U = jgg_H[jgg_z];
          if (jgg_u.fn(jgg_U)) {
            return jgg_U.apply(jgg_H, jgg_C);
          }
        }
      });
    };
    jgg_X.partition = function (jgg_C, jgg_O) {
      var jgg_z = jgg_X.groupBy(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        return jgg_i ? 1 : 2;
      });
      return [jgg_z[1] || [], jgg_z[2] || []];
    };
    jgg_X.groupBy = function (jgg_C, jgg_O) {
      var jgg_z = {};
      jgg_X.each(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        jgg_z[jgg_i] = jgg_z[jgg_i] || [];
        jgg_z[jgg_i].push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.range = function () {
      var jgg_C = arguments;
      if (jgg_C.length < 2) {
        return jgg_X.range(jgg_C[1], jgg_C[0]);
      }
      var jgg_O = jgg_C[0] || 0;
      var jgg_z = jgg_C[1] || 0;
      var jgg_d = jgg_C[2];
      jgg_u.number(jgg_d) || (jgg_d = 1);
      var jgg_H = jgg_z - jgg_O;
      0 != jgg_d && (jgg_H /= jgg_d);
      for (var jgg_U = [], jgg_i = jgg_O, jgg_I = 0; jgg_I < jgg_H; jgg_I++) {
        jgg_U.push(jgg_i);
        jgg_i += jgg_d;
      }
      return jgg_U;
    };
    jgg_X.pullAt = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_y(jgg_C, jgg_O);
    };
    jgg_X.remove = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.len(jgg_C) || 0, jgg_d = []; jgg_z--;) {
        jgg_O(jgg_C[jgg_z], jgg_z, jgg_C) && jgg_d.push(jgg_z);
      }
      return jgg_y(jgg_C, jgg_d);
    };
    jgg_X.fill = function (jgg_C, jgg_O, jgg_z, jgg_d) {
      var jgg_H = jgg_X.size(jgg_C);
      jgg_z = jgg_h(jgg_z, jgg_C) || 0;
      jgg_d = jgg_h(jgg_d, jgg_C) || jgg_H;
      for (var jgg_U = jgg_z; jgg_U < jgg_d; jgg_U++) {
        jgg_C[jgg_U] = jgg_O;
      }
      return jgg_C;
    };
    jgg_X.size = function (jgg_C) {
      var jgg_O = 0;
      if (jgg_C) {
        var jgg_z = jgg_C.length;
        jgg_X.isInteger(jgg_z) && jgg_z >= 0 ? jgg_O = jgg_z : jgg_X.isObject(jgg_C) && (jgg_O = jgg_X.keys(jgg_C).length);
      }
      return jgg_O;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_r) {
      if (jgg_y.array(jgg_r)) {
        return jgg_r;
      }
      var jgg_C = [];
      jgg_X.toString(jgg_r).replace(jgg_K, function (jgg_O, jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_z || jgg_O;
        jgg_d && (jgg_U = jgg_H.replace(jgg_u, "$1"));
        jgg_C.push(jgg_U);
      });
      return jgg_C;
    }
    var jgg_y = jgg_X.is;
    var jgg_o = jgg_X.forIn;
    jgg_X.only = function (jgg_r, jgg_C) {
      jgg_r = jgg_r || {};
      jgg_y.string(jgg_C) && (jgg_C = jgg_C.split(/ +/));
      return jgg_X.reduce(jgg_C, function (jgg_O, jgg_z) {
        null != jgg_r[jgg_z] && (jgg_O[jgg_z] = jgg_r[jgg_z]);
        return jgg_O;
      }, {});
    };
    jgg_X.values = function (jgg_r) {
      return jgg_X.map(jgg_X.keys(jgg_r), function (jgg_C) {
        return jgg_r[jgg_C];
      });
    };
    jgg_X.pick = function (jgg_r, jgg_C) {
      if (!jgg_y.fn(jgg_C)) {
        return jgg_X.pick(jgg_r, function (jgg_z, jgg_d) {
          return jgg_d == jgg_C;
        });
      }
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_C(jgg_z, jgg_d, jgg_H) && (jgg_O[jgg_d] = jgg_z);
      });
      return jgg_O;
    };
    jgg_X.functions = function (jgg_r) {
      return jgg_X.keys(jgg_X.pick(jgg_r, function (jgg_C) {
        return jgg_y.fn(jgg_C);
      }));
    };
    jgg_X.mapKeys = function (jgg_r, jgg_C) {
      var jgg_z = {};
      jgg_o(jgg_r, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_C(jgg_d, jgg_H, jgg_U);
        jgg_z[jgg_i] = jgg_d;
      });
      return jgg_z;
    };
    jgg_X.mapObject = jgg_X.mapValues = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_O[jgg_d] = jgg_C(jgg_z, jgg_d, jgg_H);
      });
      return jgg_O;
    };
    jgg_X.get = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return jgg_r;
        }
      }
    };
    jgg_X.has = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r && jgg_y.owns(jgg_r, jgg_z)) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return true;
        }
      }
      return false;
    };
    jgg_X.set = function (jgg_r, jgg_C, jgg_O) {
      jgg_C = jgg_h(jgg_C);
      var jgg_z = jgg_r;
      jgg_X.every(jgg_C, function (jgg_d, jgg_H) {
        if (jgg_y.oof(jgg_z)) {
          if (jgg_H + 1 != jgg_C.length) {
            var jgg_U = jgg_z[jgg_d];
            if (null == jgg_U) {
              var jgg_U = {};
              ~~jgg_d == jgg_d && (jgg_U = []);
            }
            jgg_z = jgg_z[jgg_d] = jgg_U;
            return true;
          }
          jgg_z[jgg_d] = jgg_O;
        }
      });
      return jgg_r;
    };
    jgg_X.create = function () {
      function jgg_r() {}
      return function (jgg_C, jgg_O) {
        "object" != typeof jgg_C && (jgg_C = null);
        jgg_r.prototype = jgg_C;
        return jgg_X.extend(new jgg_r(), jgg_O);
      };
    }();
    jgg_X.defaults = function () {
      var jgg_r = arguments;
      var jgg_C = jgg_r[0];
      var jgg_O = jgg_X.slice(jgg_r, 1);
      jgg_C && jgg_X.each(jgg_O, function (jgg_z) {
        jgg_X.mapObject(jgg_z, function (jgg_d, jgg_H) {
          jgg_y.undef(jgg_C[jgg_H]) && (jgg_C[jgg_H] = jgg_d);
        });
      });
      return jgg_C;
    };
    jgg_X.isMatch = function (jgg_r, jgg_C) {
      var jgg_O = true;
      jgg_r = jgg_r || {};
      jgg_o(jgg_C, function (jgg_z, jgg_d) {
        if (jgg_z !== jgg_r[jgg_d]) {
          jgg_O = false;
          return false;
        }
      });
      return jgg_O;
    };
    jgg_X.toPlainObject = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_z] = jgg_O;
      });
      return jgg_C;
    };
    jgg_X.invert = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_O] = jgg_z;
      });
      return jgg_C;
    };
    var jgg_K = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var jgg_u = /\\(\\)?/g;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = function (jgg_V) {
    function jgg_y(jgg_u) {
      function jgg_r() {
        var jgg_O = arguments;
        var jgg_z = jgg_O[0];
        if (!jgg_C.has(jgg_z)) {
          var jgg_d = jgg_u.apply(this, jgg_O);
          jgg_C.set(jgg_z, jgg_d);
        }
        return jgg_C.get(jgg_z);
      }
      var jgg_C = new jgg_y.Cache();
      jgg_r.cache = jgg_C;
      return jgg_r;
    }
    var jgg_o = jgg_V.is;
    var jgg_K = jgg_V.slice;
    jgg_V.bind = function (jgg_u, jgg_r) {
      if (jgg_o.string(jgg_r)) {
        var jgg_C = jgg_u;
        jgg_u = jgg_C[jgg_r];
        jgg_r = jgg_C;
      }
      if (!jgg_o.fn(jgg_u)) {
        return jgg_u;
      }
      var jgg_O = jgg_K(arguments, 2);
      jgg_r = jgg_r || this;
      return function () {
        return jgg_u.apply(jgg_r, jgg_V.flatten([jgg_O, arguments]));
      };
    };
    jgg_V.inherits = function (jgg_u, jgg_r) {
      jgg_u.super_ = jgg_r;
      jgg_u.prototype = jgg_V.create(jgg_r.prototype, {
        constructor: jgg_u
      });
    };
    jgg_V.delay = function (jgg_u, jgg_r) {
      var jgg_C = jgg_V.slice(arguments, 2);
      return setTimeout(function () {
        jgg_u.apply(this, jgg_C);
      }, jgg_r);
    };
    jgg_V.before = function (jgg_u, jgg_r) {
      return function () {
        if (jgg_u > 1) {
          jgg_u--;
          return jgg_r.apply(this, arguments);
        }
      };
    };
    jgg_V.once = function (jgg_u) {
      return jgg_V.before(2, jgg_u);
    };
    jgg_V.after = function (jgg_u, jgg_r) {
      return function () {
        return jgg_u > 1 ? void jgg_u-- : jgg_r.apply(this, arguments);
      };
    };
    jgg_V.throttle = function (jgg_u, jgg_r, jgg_C) {
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: true,
        trailing: true,
        maxWait: jgg_r
      }, jgg_C);
      return jgg_V.debounce(jgg_u, jgg_r, jgg_C);
    };
    jgg_V.debounce = function (jgg_u, jgg_r, jgg_C) {
      function jgg_z() {
        return !(jgg_G - jgg_Z > jgg_r) && !(jgg_I && jgg_G - jgg_q > jgg_I);
      }
      function jgg_d(jgg_Y, jgg_c, jgg_l) {
        jgg_Z = jgg_V.now();
        return jgg_Y.apply(jgg_c, jgg_l);
      }
      function jgg_H() {
        jgg_i && (clearTimeout(jgg_i), jgg_i = null);
      }
      function jgg_U() {
        jgg_G = jgg_V.now();
        var jgg_l = jgg_z();
        jgg_q = jgg_G;
        var jgg_D = this;
        var jgg_m = arguments;
        jgg_H();
        jgg_l ? jgg_C.trailing && (jgg_i = jgg_V.delay(function () {
          jgg_d(jgg_u, jgg_D, jgg_m);
        }, jgg_r)) : jgg_d(jgg_u, jgg_D, jgg_m);
      }
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: false,
        trailing: true
      }, jgg_C);
      var jgg_i;
      var jgg_I = jgg_C.maxWait;
      var jgg_Z = 0;
      var jgg_q = 0;
      var jgg_G = jgg_V.now();
      jgg_C.leading || (jgg_Z = jgg_G);
      jgg_U.cancel = jgg_H;
      return jgg_U;
    };
    jgg_y.Cache = jgg_T(36);
    jgg_V.memoize = jgg_y;
    jgg_V.wrap = function (jgg_u, jgg_r) {
      return function () {
        var jgg_C = [jgg_u];
        jgg_C.push.apply(jgg_C, arguments);
        return jgg_r.apply(this, jgg_C);
      };
    };
    jgg_V.curry = function (jgg_u) {
      function jgg_r(jgg_O) {
        return function () {
          var jgg_d = jgg_O.concat(jgg_V.slice(arguments));
          return jgg_d.length >= jgg_C ? (jgg_d.length = jgg_C, jgg_u.apply(this, jgg_d)) : jgg_r(jgg_d);
        };
      }
      var jgg_C = jgg_u.length;
      return jgg_r([]);
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.data = {};
  }
  var jgg_h = jgg_T(4);
  var jgg_y = jgg_h.is;
  jgg_W.exports = jgg_V;
  var jgg_o = jgg_V.prototype;
  jgg_o.has = function (jgg_K) {
    return jgg_y.owns(this.data, jgg_K);
  };
  jgg_o.get = function (jgg_K) {
    return this.data[jgg_K];
  };
  jgg_o.set = function (jgg_K, jgg_u) {
    this.data[jgg_K] = jgg_u;
  };
  jgg_o.delete = function (jgg_K) {
    delete this.data[jgg_K];
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_u, jgg_r) {
      jgg_u = jgg_y(jgg_u) || " ";
      var jgg_C = Math.floor(jgg_r / jgg_u.length) + 1;
      return jgg_X.repeat(jgg_u, jgg_C).slice(0, jgg_r);
    }
    function jgg_y(jgg_u) {
      return jgg_u || 0 == jgg_u ? jgg_u + "" : "";
    }
    jgg_X.tostr = jgg_X.toString = jgg_y;
    var jgg_o = jgg_X.indexOf;
    jgg_X.split = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.split(jgg_r, jgg_C);
    };
    jgg_X.capitalize = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1).toLowerCase();
    };
    jgg_X.upperFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1);
    };
    jgg_X.lowerFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toLowerCase() + jgg_u.substr(1);
    };
    jgg_X.camelCase = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      var jgg_r = jgg_u.split(/[^\w]|_+/);
      jgg_r = jgg_X.map(jgg_r, function (jgg_C) {
        return jgg_X.capitalize(jgg_C);
      });
      return jgg_X.lowerFirst(jgg_r.join(""));
    };
    jgg_X.startsWith = function (jgg_u, jgg_r) {
      return 0 == jgg_o(jgg_u, jgg_r);
    };
    jgg_X.endsWith = function (jgg_u, jgg_r) {
      jgg_r += "";
      return jgg_r == jgg_X.slice(jgg_u, jgg_X.len(jgg_u) - jgg_X.len(jgg_r));
    };
    jgg_X.toLower = jgg_X.lower = function (jgg_u) {
      return jgg_y(jgg_u).toLowerCase();
    };
    jgg_X.toUpper = jgg_X.upper = function (jgg_u) {
      return jgg_y(jgg_u).toUpperCase();
    };
    jgg_X.repeat = function (jgg_u, jgg_r) {
      return jgg_X.map(jgg_X.range(jgg_r), function () {
        return jgg_u;
      }).join("");
    };
    jgg_X.padStart = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_h(jgg_C, jgg_O) + jgg_u;
    };
    jgg_X.padEnd = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_u + jgg_h(jgg_C, jgg_O);
    };
    var jgg_K = {
      "&": "&amp",
      "<": "&lt",
      ">": "&gt",
      "\"": "&quot",
      "'": "&#39"
    };
    jgg_X.escape = function (jgg_u) {
      return jgg_y(jgg_u).replace(/[&<>"']/g, function (jgg_r) {
        return jgg_K[jgg_r] || jgg_r;
      });
    };
    jgg_X.template = function (jgg_u) {
      function jgg_C(jgg_i) {
        var jgg_I = jgg_X.first(jgg_i);
        if ("=" === jgg_I || "-" === jgg_I) {
          var jgg_Z = jgg_X.slice(jgg_i, 1);
          "-" === jgg_I && (jgg_Z = "_.escape(" + jgg_Z + ")");
          jgg_z.push("ret += " + jgg_Z);
        } else {
          jgg_z.push(jgg_i);
        }
      }
      function jgg_O(jgg_i) {
        jgg_z.push("ret += \"" + jgg_i.replace(/('|"|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "\"");
      }
      var jgg_z = ["with(data) {var ret = \"\""];
      jgg_X.each(jgg_X.split(jgg_u, "<%"), function (jgg_i, jgg_I) {
        var jgg_Z = jgg_i.split("%>");
        return jgg_Z[1] ? (jgg_C(jgg_X.trim(jgg_Z[0])), jgg_O(jgg_Z[1])) : void jgg_O(jgg_Z[0]);
      });
      jgg_z.push("return ret}");
      var jgg_d = new Function("data", jgg_z.join("\n"));
      var jgg_H = {
        _: jgg_X
      };
      var jgg_U = function (jgg_i) {
        return jgg_d(jgg_X.extend({}, jgg_H, jgg_i));
      };
      return jgg_U;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    jgg_X.sum = function (jgg_h) {
      return jgg_X.reduce(jgg_h, function (jgg_y, jgg_o) {
        return jgg_y + jgg_o;
      }, 0);
    };
    jgg_X.max = function (jgg_h, jgg_y) {
      var jgg_o = -1;
      var jgg_K = -Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_u, jgg_r) {
        jgg_u = jgg_y(jgg_u);
        jgg_u > jgg_K && (jgg_K = jgg_u, jgg_o = jgg_r);
      });
      return jgg_o > -1 ? jgg_h[jgg_o] : jgg_K;
    };
    jgg_X.min = function (jgg_h, jgg_y) {
      var jgg_K = -1;
      var jgg_u = Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_r, jgg_C) {
        jgg_r = jgg_y(jgg_r);
        jgg_r < jgg_u && (jgg_u = jgg_r, jgg_K = jgg_C);
      });
      return jgg_K > -1 ? jgg_h[jgg_K] : jgg_u;
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.inited = false;
    this.isReady = false;
  }
  var jgg_h = jgg_T(19);
  var jgg_y = jgg_T(25);
  var jgg_o = jgg_T(28)();
  var jgg_K = jgg_V.prototype;
  jgg_K.init = function () {
    var jgg_u = this;
    if (!jgg_u.inited) {
      jgg_u.inited = true;
      var jgg_r = "//cdn.jsdelivr.net/npm/eruda";
      jgg_y.loadScript(jgg_r, function () {
        try {
          jgg_u.run();
        } catch (jgg_C) {}
      });
    }
  };
  jgg_K.ready = function (jgg_u) {
    jgg_o.queue(jgg_u);
  };
  jgg_K.run = function () {
    try {
      eruda.init();
      this.isReady = true;
      jgg_o.open();
    } catch (jgg_u) {}
  };
  jgg_K.handler = jgg_h.handler;
  jgg_W.exports = new jgg_V();
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_r, jgg_C) {
    var jgg_O = "";
    jgg_r = jgg_r.replace(jgg_C, function (jgg_z) {
      jgg_O = jgg_z;
      return "";
    });
    return [jgg_O, jgg_r];
  }
  function jgg_h(jgg_r, jgg_C) {
    var jgg_O = [];
    var jgg_z = jgg_K.indexOf(jgg_r, jgg_C);
    -1 == jgg_z ? jgg_O[0] = jgg_r : (jgg_O[0] = jgg_r.slice(0, jgg_z), jgg_O[1] = jgg_r.slice(jgg_z + jgg_C.length));
    return jgg_O;
  }
  function jgg_y(jgg_r) {
    var jgg_C = jgg_h(jgg_r, "@");
    var jgg_O = jgg_C[0];
    var jgg_z = jgg_C[1];
    jgg_z || (jgg_z = jgg_C[0], jgg_O = null);
    return [jgg_O, jgg_z];
  }
  var jgg_o = jgg_T(26);
  var jgg_K = jgg_T(2);
  jgg_a.parse = function (jgg_r, jgg_C) {
    if ("string" != typeof jgg_r) {
      return jgg_r;
    }
    var jgg_U;
    var jgg_i;
    var jgg_I = {};
    jgg_I.href = jgg_r;
    jgg_U = jgg_h(jgg_r, "#");
    jgg_i = jgg_U[0];
    jgg_U[1] && (jgg_I.hash = "#" + jgg_U[1]);
    jgg_U = jgg_V(jgg_i, /^[a-zA-Z][a-zA-Z0-9+-.]*:/);
    jgg_i = jgg_U[1];
    jgg_I.protocol = jgg_U[0].toLowerCase();
    jgg_U = jgg_h(jgg_i, "?");
    jgg_i = jgg_U[0];
    var jgg_d = jgg_U[1];
    if (jgg_C && (jgg_d = jgg_o.parse(jgg_d)), jgg_I.query = jgg_d, "/" != jgg_i.charAt(0) && jgg_I.schema) {
      jgg_I.opaque = jgg_i;
      return jgg_I;
    }
    if (jgg_K.startsWith(jgg_i, "//")) {
      jgg_i = jgg_i.slice(2);
      jgg_U = jgg_h(jgg_i, "/");
      jgg_I.pathname = "/" + unescape(jgg_U[1] || "");
      jgg_U = jgg_y(jgg_U[0]);
      jgg_I.auth = jgg_U[0];
      var jgg_H = jgg_U[1];
      jgg_U = jgg_h(jgg_H, ":");
      jgg_I.hostname = jgg_U[0];
      jgg_I.port = ~~jgg_U[1];
    }
    return jgg_I;
  };
  var jgg_u = "http https ftp gopher file".split(" ");
  jgg_a.format = function (jgg_r) {
    if (!jgg_r || "object" != typeof jgg_r) {
      return jgg_r;
    }
    var jgg_z = jgg_r.protocol;
    var jgg_d = [jgg_z];
    jgg_z && !jgg_K.includes(jgg_u, jgg_z.slice(0, jgg_z.length - 1)) || jgg_d.push("//");
    jgg_r.auth && jgg_d.push(jgg_r.auth, "@");
    jgg_d.push(jgg_r.hostname);
    jgg_r.port && jgg_d.push(":", jgg_r.port);
    jgg_d.push(jgg_r.pathname);
    var jgg_H = jgg_r.query;
    jgg_H && ("string" != typeof jgg_H && (jgg_H = jgg_o.stringify(jgg_H)), jgg_H && jgg_d.push("?", jgg_H));
    jgg_d.push(jgg_r.hash);
    for (var jgg_U = [], jgg_i = 0; jgg_i < jgg_d.length; jgg_i++) {
      jgg_d[jgg_i] && jgg_U.push(jgg_d[jgg_i]);
    }
    return jgg_U.join("");
  };
  jgg_a.appendQuery = function (jgg_r, jgg_C) {
    var jgg_O = jgg_h(jgg_r, "#");
    jgg_r = jgg_O[0];
    var jgg_z = jgg_O[1];
    jgg_K.isObject(jgg_C) && (jgg_C = jgg_o.stringify(jgg_C));
    jgg_K.includes(jgg_r, "?") ? jgg_K.endsWith(jgg_r, "&") || jgg_K.endsWith(jgg_r, "?") || jgg_C && (jgg_C = "&" + jgg_C) : jgg_C && (jgg_C = "?" + jgg_C);
    jgg_C && (jgg_r += jgg_C);
    jgg_z && (jgg_r += "#" + jgg_z);
    return jgg_r;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(42);
  var jgg_h = jgg_T(52);
  jgg_h.resolve = jgg_T(54);
  jgg_h.reject = jgg_T(55);
  jgg_h.prototype.catch = jgg_h.prototype.caught = function (jgg_y) {
    return this.then(null, jgg_y);
  };
  jgg_h.prototype.delay = function (jgg_y) {
    var jgg_o;
    return this.then(function (jgg_K) {
      jgg_o = jgg_K;
      return jgg_h.delay(jgg_y);
    }).then(function () {
      return jgg_o;
    });
  };
  jgg_h.delay = function (jgg_y) {
    return new jgg_h(function (jgg_o) {
      setTimeout(jgg_o, jgg_y);
    });
  };
  jgg_h.all = function (jgg_y) {
    var jgg_K = [];
    var jgg_u = jgg_V.size(jgg_y);
    var jgg_r = 0;
    return new jgg_h(function (jgg_C, jgg_O) {
      0 === jgg_u && jgg_C(jgg_K);
      jgg_V.each(jgg_y, function (jgg_d, jgg_H) {
        jgg_h.resolve(jgg_d).then(function (jgg_i) {
          jgg_K[jgg_H] = jgg_i;
          jgg_r++;
          jgg_r === jgg_u && jgg_C(jgg_K);
        }, function (jgg_i) {
          jgg_O(jgg_i);
        });
      });
    });
  };
  jgg_h.race = function (jgg_y) {
    return new jgg_h(function (jgg_K, jgg_u) {
      jgg_V.each(jgg_y, function (jgg_r) {
        jgg_h.resolve(jgg_r).then(function (jgg_O) {
          jgg_K(jgg_O);
        }, function (jgg_O) {
          jgg_u(jgg_O);
        });
      });
    });
  };
  jgg_W.exports = jgg_h;
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = jgg_T(43);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_V(jgg_y) {
      return this instanceof jgg_V ? (this.__value = jgg_y, void (this.__chain = false)) : new jgg_V(jgg_y);
    }
    var jgg_h = jgg_T(4);
    jgg_W.exports = jgg_h.extend(jgg_V, jgg_h);
    jgg_T(44)(jgg_V);
    jgg_T(45)(jgg_V);
    jgg_T(46)(jgg_V);
    jgg_T(47)(jgg_V);
    jgg_T(48)(jgg_V);
    jgg_T(50)(jgg_V);
    jgg_T(51)(jgg_V);
    jgg_V.mixin(jgg_V, jgg_V);
  }).call(jgg_a, jgg_T(42));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_T) {
    var jgg_X = jgg_T.is;
    jgg_T.isString = jgg_X.string;
    jgg_T.isArray = jgg_X.array;
    jgg_T.isArrayLike = jgg_X.arraylike;
    jgg_T.isBoolean = jgg_X.bool;
    jgg_T.isElement = jgg_X.element;
    jgg_T.isEmpty = jgg_X.empty;
    jgg_T.isFunction = jgg_X.fn;
    jgg_T.isInteger = jgg_X.integer;
    jgg_T.isNaN = jgg_X.nan;
    jgg_T.isNumber = jgg_X.number;
    jgg_T.isObject = jgg_X.object;
    jgg_T.isPlainObject = jgg_X.plainObject;
    jgg_T.isRegExp = jgg_X.regexp;
    jgg_T.isString = jgg_X.string;
    jgg_T.isUndefined = jgg_X.undef;
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    var jgg_V = jgg_X.is;
    jgg_X.now = function () {
      return +new Date();
    };
    jgg_X.constant = function (jgg_y) {
      return function () {
        return jgg_y;
      };
    };
    jgg_X.identity = function (jgg_y) {
      return jgg_y;
    };
    jgg_X.random = function (jgg_y, jgg_o) {
      return jgg_y + Math.floor(Math.random() * (jgg_o - jgg_y + 1));
    };
    jgg_X.mixin = function (jgg_y, jgg_o, jgg_K) {
      var jgg_u = jgg_X.functions(jgg_o);
      if (jgg_y) {
        if (jgg_V.fn(jgg_y)) {
          jgg_K = jgg_K || {};
          var jgg_r = jgg_y.prototype;
          jgg_X.each(jgg_u, function (jgg_C) {
            var jgg_O = jgg_o[jgg_C];
            jgg_r[jgg_C] = function () {
              var jgg_z = this;
              var jgg_d = [jgg_z.__value];
              jgg_d.push.apply(jgg_d, arguments);
              var jgg_H = jgg_O.apply(jgg_z, jgg_d);
              return jgg_z.__chain ? (jgg_z.__value = jgg_H, jgg_z) : jgg_H;
            };
          });
        } else {
          jgg_X.each(jgg_u, function (jgg_C) {
            jgg_y[jgg_C] = jgg_o[jgg_C];
          });
        }
      }
      return jgg_y;
    };
    jgg_X.chain = function (jgg_y) {
      var jgg_o = jgg_X(jgg_y);
      jgg_o.__chain = true;
      return jgg_o;
    };
    jgg_X.value = function () {
      this.__chain = false;
      return this.__value;
    };
    var jgg_h = 0;
    jgg_X.uniqueId = function (jgg_y) {
      jgg_h++;
      return jgg_X.toString(jgg_y) + jgg_h;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_C, jgg_O) {
      var jgg_z = jgg_X.size(jgg_O);
      jgg_C < 0 && (jgg_C += jgg_z);
      jgg_C < 0 && (jgg_C = 0);
      jgg_C > jgg_z && (jgg_C = jgg_z);
      return jgg_C || 0;
    }
    function jgg_y(jgg_C, jgg_O) {
      var jgg_d = [];
      var jgg_H = jgg_X.len(jgg_O);
      if (jgg_H) {
        for (jgg_O = jgg_O.sort(function (jgg_i, jgg_I) {
          return jgg_i - jgg_I;
        }); jgg_H--;) {
          var jgg_U = jgg_O[jgg_H];
          jgg_d.push(jgg_r.splice.call(jgg_C, jgg_U, 1)[0]);
        }
      }
      jgg_d.reverse();
      return jgg_d;
    }
    jgg_X.forEach = jgg_X.each;
    var jgg_o = jgg_X.forEach;
    var jgg_K = jgg_X.includes;
    var jgg_u = jgg_X.is;
    var jgg_r = Array.prototype;
    jgg_X.reject = function (jgg_C, jgg_O) {
      return jgg_X.filter(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        return !jgg_O(jgg_d, jgg_H, jgg_U);
      });
    };
    jgg_X.without = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_X.difference(jgg_C, jgg_O);
    };
    jgg_X.difference = function (jgg_C, jgg_O) {
      var jgg_z = [];
      jgg_X.each(jgg_C, function (jgg_d) {
        jgg_K(jgg_O, jgg_d) || jgg_z.push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.pluck = function (jgg_C, jgg_O) {
      return jgg_X.map(jgg_C, function (jgg_z) {
        if (jgg_z) {
          return jgg_z[jgg_O];
        }
      });
    };
    jgg_X.nth = function (jgg_C, jgg_O) {
      jgg_O = jgg_h(jgg_O, jgg_C);
      jgg_O = jgg_O || 0;
      var jgg_z;
      return jgg_z = jgg_X.isString(jgg_C) ? jgg_C.charAt(jgg_O) : jgg_C[jgg_O];
    };
    jgg_X.first = function (jgg_C) {
      if (jgg_C) {
        return jgg_X.nth(jgg_C, 0);
      }
    };
    jgg_X.last = function (jgg_C) {
      var jgg_O = jgg_X.len(jgg_C);
      if (jgg_O) {
        return jgg_X.nth(jgg_C, jgg_O - 1);
      }
    };
    jgg_X.asyncMap = function (jgg_C, jgg_O, jgg_z) {
      var jgg_H;
      var jgg_U;
      var jgg_i = [];
      var jgg_I = 0;
      jgg_o(jgg_C, function (jgg_Z, jgg_q) {
        jgg_U = true;
        jgg_O(jgg_Z, function (jgg_G, jgg_Y) {
          if (!jgg_H) {
            if (jgg_I++, jgg_G) {
              jgg_H = true;
              return jgg_z(jgg_G);
            }
            jgg_i[jgg_q] = jgg_Y;
            jgg_I == jgg_C.length && (jgg_H = true, jgg_z(null, jgg_i));
          }
        });
      });
      jgg_U || jgg_z(null);
    };
    jgg_X.uniq = function (jgg_C) {
      return jgg_X.uniqBy(jgg_C);
    };
    jgg_X.uniqBy = function (jgg_C, jgg_O) {
      var jgg_d = [];
      var jgg_H = [];
      jgg_u.fn(jgg_O) || (jgg_O = null);
      jgg_o(jgg_C, function (jgg_U) {
        var jgg_i = jgg_U;
        jgg_O && (jgg_i = jgg_O(jgg_U));
        jgg_K(jgg_H, jgg_i) || (jgg_H.push(jgg_i), jgg_d.push(jgg_U));
      });
      return jgg_d;
    };
    jgg_X.flatten = function (jgg_C) {
      var jgg_z = [];
      jgg_o(jgg_C, function (jgg_d) {
        jgg_u.arraylike(jgg_d) ? jgg_o(jgg_d, function (jgg_H) {
          jgg_z.push(jgg_H);
        }) : jgg_z.push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.union = function () {
      return jgg_X.uniq(jgg_X.flatten(arguments));
    };
    jgg_X.sampleSize = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.toArray(jgg_C), jgg_d = jgg_z.length, jgg_H = Math.min(jgg_O || 1, jgg_d), jgg_U = 0; jgg_U < jgg_d; jgg_U++) {
        var jgg_i = jgg_X.random(jgg_U, jgg_d - 1);
        var jgg_I = jgg_z[jgg_i];
        jgg_z[jgg_i] = jgg_z[jgg_U];
        jgg_z[jgg_U] = jgg_I;
      }
      jgg_z.length = jgg_H;
      return jgg_z;
    };
    jgg_X.sample = function (jgg_C) {
      return jgg_X.first(jgg_X.sampleSize(jgg_C, 1));
    };
    jgg_X.shuffle = function (jgg_C) {
      return jgg_X.sampleSize(jgg_C, Infinity);
    };
    jgg_X.compact = function (jgg_C) {
      return jgg_X.filter(jgg_C, jgg_X.identity);
    };
    jgg_X.rest = function (jgg_C) {
      return jgg_X.slice(jgg_C, 1);
    };
    jgg_X.invoke = function () {
      var jgg_C = arguments;
      var jgg_O = jgg_C[0];
      var jgg_z = jgg_C[1];
      var jgg_d = jgg_u.fn(jgg_z);
      jgg_C = jgg_X.slice(jgg_C, 2);
      return jgg_X.map(jgg_O, function (jgg_H) {
        if (jgg_d) {
          return jgg_z.apply(jgg_H, jgg_C);
        }
        if (null != jgg_H) {
          var jgg_U = jgg_H[jgg_z];
          if (jgg_u.fn(jgg_U)) {
            return jgg_U.apply(jgg_H, jgg_C);
          }
        }
      });
    };
    jgg_X.partition = function (jgg_C, jgg_O) {
      var jgg_z = jgg_X.groupBy(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        return jgg_i ? 1 : 2;
      });
      return [jgg_z[1] || [], jgg_z[2] || []];
    };
    jgg_X.groupBy = function (jgg_C, jgg_O) {
      var jgg_z = {};
      jgg_X.each(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        jgg_z[jgg_i] = jgg_z[jgg_i] || [];
        jgg_z[jgg_i].push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.range = function () {
      var jgg_C = arguments;
      if (jgg_C.length < 2) {
        return jgg_X.range(jgg_C[1], jgg_C[0]);
      }
      var jgg_O = jgg_C[0] || 0;
      var jgg_z = jgg_C[1] || 0;
      var jgg_d = jgg_C[2];
      jgg_u.number(jgg_d) || (jgg_d = 1);
      var jgg_H = jgg_z - jgg_O;
      0 != jgg_d && (jgg_H /= jgg_d);
      for (var jgg_U = [], jgg_i = jgg_O, jgg_I = 0; jgg_I < jgg_H; jgg_I++) {
        jgg_U.push(jgg_i);
        jgg_i += jgg_d;
      }
      return jgg_U;
    };
    jgg_X.pullAt = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_y(jgg_C, jgg_O);
    };
    jgg_X.remove = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.len(jgg_C) || 0, jgg_d = []; jgg_z--;) {
        jgg_O(jgg_C[jgg_z], jgg_z, jgg_C) && jgg_d.push(jgg_z);
      }
      return jgg_y(jgg_C, jgg_d);
    };
    jgg_X.fill = function (jgg_C, jgg_O, jgg_z, jgg_d) {
      var jgg_H = jgg_X.size(jgg_C);
      jgg_z = jgg_h(jgg_z, jgg_C) || 0;
      jgg_d = jgg_h(jgg_d, jgg_C) || jgg_H;
      for (var jgg_U = jgg_z; jgg_U < jgg_d; jgg_U++) {
        jgg_C[jgg_U] = jgg_O;
      }
      return jgg_C;
    };
    jgg_X.size = function (jgg_C) {
      var jgg_O = 0;
      if (jgg_C) {
        var jgg_z = jgg_C.length;
        jgg_X.isInteger(jgg_z) && jgg_z >= 0 ? jgg_O = jgg_z : jgg_X.isObject(jgg_C) && (jgg_O = jgg_X.keys(jgg_C).length);
      }
      return jgg_O;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_r) {
      if (jgg_y.array(jgg_r)) {
        return jgg_r;
      }
      var jgg_C = [];
      jgg_X.toString(jgg_r).replace(jgg_K, function (jgg_O, jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_z || jgg_O;
        jgg_d && (jgg_U = jgg_H.replace(jgg_u, "$1"));
        jgg_C.push(jgg_U);
      });
      return jgg_C;
    }
    var jgg_y = jgg_X.is;
    var jgg_o = jgg_X.forIn;
    jgg_X.only = function (jgg_r, jgg_C) {
      jgg_r = jgg_r || {};
      jgg_y.string(jgg_C) && (jgg_C = jgg_C.split(/ +/));
      return jgg_X.reduce(jgg_C, function (jgg_O, jgg_z) {
        null != jgg_r[jgg_z] && (jgg_O[jgg_z] = jgg_r[jgg_z]);
        return jgg_O;
      }, {});
    };
    jgg_X.values = function (jgg_r) {
      return jgg_X.map(jgg_X.keys(jgg_r), function (jgg_C) {
        return jgg_r[jgg_C];
      });
    };
    jgg_X.pick = function (jgg_r, jgg_C) {
      if (!jgg_y.fn(jgg_C)) {
        return jgg_X.pick(jgg_r, function (jgg_z, jgg_d) {
          return jgg_d == jgg_C;
        });
      }
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_C(jgg_z, jgg_d, jgg_H) && (jgg_O[jgg_d] = jgg_z);
      });
      return jgg_O;
    };
    jgg_X.functions = function (jgg_r) {
      return jgg_X.keys(jgg_X.pick(jgg_r, function (jgg_C) {
        return jgg_y.fn(jgg_C);
      }));
    };
    jgg_X.mapKeys = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_C(jgg_z, jgg_d, jgg_H);
        jgg_O[jgg_U] = jgg_z;
      });
      return jgg_O;
    };
    jgg_X.mapObject = jgg_X.mapValues = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_O[jgg_d] = jgg_C(jgg_z, jgg_d, jgg_H);
      });
      return jgg_O;
    };
    jgg_X.get = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return jgg_r;
        }
      }
    };
    jgg_X.has = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r && jgg_y.owns(jgg_r, jgg_z)) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return true;
        }
      }
      return false;
    };
    jgg_X.set = function (jgg_r, jgg_C, jgg_O) {
      jgg_C = jgg_h(jgg_C);
      var jgg_d = jgg_r;
      jgg_X.every(jgg_C, function (jgg_H, jgg_U) {
        if (jgg_y.oof(jgg_d)) {
          if (jgg_U + 1 != jgg_C.length) {
            var jgg_i = jgg_d[jgg_H];
            if (null == jgg_i) {
              var jgg_i = {};
              ~~jgg_H == jgg_H && (jgg_i = []);
            }
            jgg_d = jgg_d[jgg_H] = jgg_i;
            return true;
          }
          jgg_d[jgg_H] = jgg_O;
        }
      });
      return jgg_r;
    };
    jgg_X.create = function () {
      function jgg_C() {}
      return function (jgg_O, jgg_z) {
        "object" != typeof jgg_O && (jgg_O = null);
        jgg_C.prototype = jgg_O;
        return jgg_X.extend(new jgg_C(), jgg_z);
      };
    }();
    jgg_X.defaults = function () {
      var jgg_r = arguments;
      var jgg_C = jgg_r[0];
      var jgg_O = jgg_X.slice(jgg_r, 1);
      jgg_C && jgg_X.each(jgg_O, function (jgg_z) {
        jgg_X.mapObject(jgg_z, function (jgg_d, jgg_H) {
          jgg_y.undef(jgg_C[jgg_H]) && (jgg_C[jgg_H] = jgg_d);
        });
      });
      return jgg_C;
    };
    jgg_X.isMatch = function (jgg_r, jgg_C) {
      var jgg_O = true;
      jgg_r = jgg_r || {};
      jgg_o(jgg_C, function (jgg_z, jgg_d) {
        if (jgg_z !== jgg_r[jgg_d]) {
          jgg_O = false;
          return false;
        }
      });
      return jgg_O;
    };
    jgg_X.toPlainObject = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_z] = jgg_O;
      });
      return jgg_C;
    };
    jgg_X.invert = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_O] = jgg_z;
      });
      return jgg_C;
    };
    var jgg_K = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var jgg_u = /\\(\\)?/g;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = function (jgg_V) {
    function jgg_y(jgg_u) {
      function jgg_r() {
        var jgg_O = arguments;
        var jgg_z = jgg_O[0];
        if (!jgg_C.has(jgg_z)) {
          var jgg_d = jgg_u.apply(this, jgg_O);
          jgg_C.set(jgg_z, jgg_d);
        }
        return jgg_C.get(jgg_z);
      }
      var jgg_C = new jgg_y.Cache();
      jgg_r.cache = jgg_C;
      return jgg_r;
    }
    var jgg_o = jgg_V.is;
    var jgg_K = jgg_V.slice;
    jgg_V.bind = function (jgg_u, jgg_r) {
      if (jgg_o.string(jgg_r)) {
        var jgg_C = jgg_u;
        jgg_u = jgg_C[jgg_r];
        jgg_r = jgg_C;
      }
      if (!jgg_o.fn(jgg_u)) {
        return jgg_u;
      }
      var jgg_O = jgg_K(arguments, 2);
      jgg_r = jgg_r || this;
      return function () {
        return jgg_u.apply(jgg_r, jgg_V.flatten([jgg_O, arguments]));
      };
    };
    jgg_V.inherits = function (jgg_u, jgg_r) {
      jgg_u.super_ = jgg_r;
      jgg_u.prototype = jgg_V.create(jgg_r.prototype, {
        constructor: jgg_u
      });
    };
    jgg_V.delay = function (jgg_u, jgg_r) {
      var jgg_C = jgg_V.slice(arguments, 2);
      return setTimeout(function () {
        jgg_u.apply(this, jgg_C);
      }, jgg_r);
    };
    jgg_V.before = function (jgg_u, jgg_r) {
      return function () {
        if (jgg_u > 1) {
          jgg_u--;
          return jgg_r.apply(this, arguments);
        }
      };
    };
    jgg_V.once = function (jgg_u) {
      return jgg_V.before(2, jgg_u);
    };
    jgg_V.after = function (jgg_u, jgg_r) {
      return function () {
        return jgg_u > 1 ? void jgg_u-- : jgg_r.apply(this, arguments);
      };
    };
    jgg_V.throttle = function (jgg_u, jgg_r, jgg_C) {
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: true,
        trailing: true,
        maxWait: jgg_r
      }, jgg_C);
      return jgg_V.debounce(jgg_u, jgg_r, jgg_C);
    };
    jgg_V.debounce = function (jgg_u, jgg_r, jgg_C) {
      function jgg_O() {
        return !(jgg_q - jgg_I > jgg_r) && !(jgg_i && jgg_q - jgg_Z > jgg_i);
      }
      function jgg_z(jgg_G, jgg_Y, jgg_c) {
        jgg_I = jgg_V.now();
        return jgg_G.apply(jgg_Y, jgg_c);
      }
      function jgg_d() {
        jgg_U && (clearTimeout(jgg_U), jgg_U = null);
      }
      function jgg_H() {
        jgg_q = jgg_V.now();
        var jgg_G = jgg_O();
        jgg_Z = jgg_q;
        var jgg_Y = this;
        var jgg_c = arguments;
        jgg_d();
        jgg_G ? jgg_C.trailing && (jgg_U = jgg_V.delay(function () {
          jgg_z(jgg_u, jgg_Y, jgg_c);
        }, jgg_r)) : jgg_z(jgg_u, jgg_Y, jgg_c);
      }
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: false,
        trailing: true
      }, jgg_C);
      var jgg_U;
      var jgg_i = jgg_C.maxWait;
      var jgg_I = 0;
      var jgg_Z = 0;
      var jgg_q = jgg_V.now();
      jgg_C.leading || (jgg_I = jgg_q);
      jgg_H.cancel = jgg_d;
      return jgg_H;
    };
    jgg_y.Cache = jgg_T(49);
    jgg_V.memoize = jgg_y;
    jgg_V.wrap = function (jgg_u, jgg_r) {
      return function () {
        var jgg_C = [jgg_u];
        jgg_C.push.apply(jgg_C, arguments);
        return jgg_r.apply(this, jgg_C);
      };
    };
    jgg_V.curry = function (jgg_u) {
      function jgg_C(jgg_z) {
        return function () {
          var jgg_d = jgg_z.concat(jgg_V.slice(arguments));
          return jgg_d.length >= jgg_O ? (jgg_d.length = jgg_O, jgg_u.apply(this, jgg_d)) : jgg_C(jgg_d);
        };
      }
      var jgg_O = jgg_u.length;
      return jgg_C([]);
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.data = {};
  }
  var jgg_h = jgg_T(4);
  var jgg_y = jgg_h.is;
  jgg_W.exports = jgg_V;
  var jgg_o = jgg_V.prototype;
  jgg_o.has = function (jgg_K) {
    return jgg_y.owns(this.data, jgg_K);
  };
  jgg_o.get = function (jgg_K) {
    return this.data[jgg_K];
  };
  jgg_o.set = function (jgg_K, jgg_u) {
    this.data[jgg_K] = jgg_u;
  };
  jgg_o.delete = function (jgg_K) {
    delete this.data[jgg_K];
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_u, jgg_r) {
      jgg_u = jgg_y(jgg_u) || " ";
      var jgg_C = Math.floor(jgg_r / jgg_u.length) + 1;
      return jgg_X.repeat(jgg_u, jgg_C).slice(0, jgg_r);
    }
    function jgg_y(jgg_u) {
      return jgg_u || 0 == jgg_u ? jgg_u + "" : "";
    }
    jgg_X.tostr = jgg_X.toString = jgg_y;
    var jgg_o = jgg_X.indexOf;
    jgg_X.split = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.split(jgg_r, jgg_C);
    };
    jgg_X.capitalize = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1).toLowerCase();
    };
    jgg_X.upperFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1);
    };
    jgg_X.lowerFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toLowerCase() + jgg_u.substr(1);
    };
    jgg_X.camelCase = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      var jgg_r = jgg_u.split(/[^\w]|_+/);
      jgg_r = jgg_X.map(jgg_r, function (jgg_C) {
        return jgg_X.capitalize(jgg_C);
      });
      return jgg_X.lowerFirst(jgg_r.join(""));
    };
    jgg_X.startsWith = function (jgg_u, jgg_r) {
      return 0 == jgg_o(jgg_u, jgg_r);
    };
    jgg_X.endsWith = function (jgg_u, jgg_r) {
      jgg_r += "";
      return jgg_r == jgg_X.slice(jgg_u, jgg_X.len(jgg_u) - jgg_X.len(jgg_r));
    };
    jgg_X.toLower = jgg_X.lower = function (jgg_u) {
      return jgg_y(jgg_u).toLowerCase();
    };
    jgg_X.toUpper = jgg_X.upper = function (jgg_u) {
      return jgg_y(jgg_u).toUpperCase();
    };
    jgg_X.repeat = function (jgg_u, jgg_r) {
      return jgg_X.map(jgg_X.range(jgg_r), function () {
        return jgg_u;
      }).join("");
    };
    jgg_X.padStart = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_h(jgg_C, jgg_O) + jgg_u;
    };
    jgg_X.padEnd = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_u + jgg_h(jgg_C, jgg_O);
    };
    var jgg_K = {
      "&": "&amp",
      "<": "&lt",
      ">": "&gt",
      "\"": "&quot",
      "'": "&#39"
    };
    jgg_X.escape = function (jgg_u) {
      return jgg_y(jgg_u).replace(/[&<>"']/g, function (jgg_r) {
        return jgg_K[jgg_r] || jgg_r;
      });
    };
    jgg_X.template = function (jgg_u) {
      function jgg_C(jgg_i) {
        var jgg_I = jgg_X.first(jgg_i);
        if ("=" === jgg_I || "-" === jgg_I) {
          var jgg_Z = jgg_X.slice(jgg_i, 1);
          "-" === jgg_I && (jgg_Z = "_.escape(" + jgg_Z + ")");
          jgg_z.push("ret += " + jgg_Z);
        } else {
          jgg_z.push(jgg_i);
        }
      }
      function jgg_O(jgg_i) {
        jgg_z.push("ret += \"" + jgg_i.replace(/('|"|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "\"");
      }
      var jgg_z = ["with(data) {var ret = \"\""];
      jgg_X.each(jgg_X.split(jgg_u, "<%"), function (jgg_i, jgg_I) {
        var jgg_Z = jgg_i.split("%>");
        return jgg_Z[1] ? (jgg_C(jgg_X.trim(jgg_Z[0])), jgg_O(jgg_Z[1])) : void jgg_O(jgg_Z[0]);
      });
      jgg_z.push("return ret}");
      var jgg_d = new Function("data", jgg_z.join("\n"));
      var jgg_H = {
        _: jgg_X
      };
      var jgg_U = function (jgg_i) {
        return jgg_d(jgg_X.extend({}, jgg_H, jgg_i));
      };
      return jgg_U;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    jgg_X.sum = function (jgg_h) {
      return jgg_X.reduce(jgg_h, function (jgg_y, jgg_o) {
        return jgg_y + jgg_o;
      }, 0);
    };
    jgg_X.max = function (jgg_h, jgg_y) {
      var jgg_o = -1;
      var jgg_K = -Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_u, jgg_r) {
        jgg_u = jgg_y(jgg_u);
        jgg_u > jgg_K && (jgg_K = jgg_u, jgg_o = jgg_r);
      });
      return jgg_o > -1 ? jgg_h[jgg_o] : jgg_K;
    };
    jgg_X.min = function (jgg_h, jgg_y) {
      var jgg_K = -1;
      var jgg_u = Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_r, jgg_C) {
        jgg_r = jgg_y(jgg_r);
        jgg_r < jgg_u && (jgg_u = jgg_r, jgg_K = jgg_C);
      });
      return jgg_K > -1 ? jgg_h[jgg_K] : jgg_u;
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V, jgg_h, jgg_y) {
    function jgg_V(jgg_Z) {
      var jgg_l = this;
      jgg_l.handlers = {};
      jgg_l.children = [];
      jgg_l.state = jgg_O;
      jgg_l.spread = false;
      var jgg_Y = jgg_U(jgg_l, jgg_z);
      var jgg_c = jgg_I(jgg_l, jgg_d);
      if (!jgg_C.fn(jgg_Z)) {
        throw new TypeError("expecting a function");
      }
      try {
        jgg_Z(function (jgg_w) {
          jgg_Y(jgg_w);
        }, function (jgg_w) {
          jgg_c(jgg_w);
        });
      } catch (jgg_w) {
        jgg_c(jgg_w);
      }
    }
    function jgg_K(jgg_Z, jgg_q, jgg_G) {
      jgg_u(function () {
        var jgg_Y = jgg_Z.handlers[jgg_q];
        if (jgg_C.fn(jgg_Y)) {
          var jgg_c;
          try {
            jgg_c = jgg_Z.spread ? jgg_Y.apply(null, jgg_G) : jgg_Y(jgg_G);
          } catch (jgg_l) {
            return jgg_i(jgg_Z, jgg_d, jgg_l);
          }
          jgg_H(jgg_Z, jgg_z, jgg_c);
        } else {
          jgg_H(jgg_Z, jgg_q, jgg_G);
        }
      });
    }
    function jgg_u(jgg_Z) {
      jgg_h.process && jgg_y.nextTick ? jgg_y.nextTick(jgg_Z) : setTimeout(jgg_Z);
    }
    var jgg_r = jgg_T(42);
    var jgg_C = jgg_r.is;
    var jgg_O = 0;
    var jgg_z = 1;
    var jgg_d = -1;
    jgg_W.exports = jgg_V;
    jgg_V.prototype.then = function (jgg_Z, jgg_q) {
      var jgg_G = this;
      var jgg_Y = new jgg_V(jgg_r.noop);
      jgg_Y.spread = this.spread;
      var jgg_c = jgg_Y.handlers;
      jgg_c[jgg_z] = jgg_Z;
      jgg_c[jgg_d] = jgg_q;
      jgg_O == jgg_G.state ? jgg_G.children.push(jgg_Y) : jgg_K(jgg_Y, jgg_G.state, jgg_G.result);
      return jgg_Y;
    };
    var jgg_H = function (jgg_Z, jgg_q, jgg_G) {
      if (jgg_Z === jgg_G) {
        return jgg_H(jgg_Z, jgg_d, new TypeError("circle promise"));
      }
      var jgg_w;
      if (jgg_C.oof(jgg_G)) {
        try {
          jgg_w = jgg_G.then;
        } catch (jgg_m) {
          return jgg_i(jgg_Z, jgg_d, jgg_m);
        }
      }
      if (jgg_C.fn(jgg_w)) {
        var jgg_l = jgg_r.once(function (jgg_v, jgg_M) {
          jgg_v == jgg_d ? jgg_i(jgg_Z, jgg_v, jgg_M) : jgg_H(jgg_Z, jgg_v, jgg_M);
        });
        try {
          jgg_w.call(jgg_G, function (jgg_v) {
            jgg_l(jgg_z, jgg_v);
          }, function (jgg_v) {
            jgg_l(jgg_d, jgg_v);
          });
        } catch (jgg_v) {
          jgg_l(jgg_d, jgg_v);
        }
      } else {
        jgg_i(jgg_Z, jgg_q, jgg_G);
      }
    };
    var jgg_U = jgg_r.curry(jgg_H);
    var jgg_i = function (jgg_Z, jgg_q, jgg_G) {
      jgg_Z.state == jgg_O && (jgg_Z.state = jgg_q, jgg_Z.result = jgg_G, jgg_r.each(jgg_Z.children, function (jgg_Y) {
        jgg_K(jgg_Y, jgg_q, jgg_G);
      }));
    };
    var jgg_I = jgg_r.curry(jgg_i);
  }).call(jgg_a, jgg_T(41), function () {
    return this;
  }(), jgg_T(53));
}, function (jgg_W, jgg_a) {
  function jgg_X() {
    throw new Error("setTimeout has not been defined");
  }
  function jgg_V() {
    throw new Error("clearTimeout has not been defined");
  }
  function jgg_h(jgg_I) {
    if (jgg_C === setTimeout) {
      return setTimeout(jgg_I, 0);
    }
    if ((jgg_C === jgg_X || !jgg_C) && setTimeout) {
      jgg_C = setTimeout;
      return setTimeout(jgg_I, 0);
    }
    try {
      return jgg_C(jgg_I, 0);
    } catch (jgg_Z) {
      try {
        return jgg_C.call(null, jgg_I, 0);
      } catch (jgg_q) {
        return jgg_C.call(this, jgg_I, 0);
      }
    }
  }
  function jgg_y(jgg_I) {
    if (jgg_O === clearTimeout) {
      return clearTimeout(jgg_I);
    }
    if ((jgg_O === jgg_V || !jgg_O) && clearTimeout) {
      jgg_O = clearTimeout;
      return clearTimeout(jgg_I);
    }
    try {
      return jgg_O(jgg_I);
    } catch (jgg_Z) {
      try {
        return jgg_O.call(null, jgg_I);
      } catch (jgg_q) {
        return jgg_O.call(this, jgg_I);
      }
    }
  }
  function jgg_o() {
    jgg_U && jgg_d && (jgg_U = false, jgg_d.length ? jgg_H = jgg_d.concat(jgg_H) : jgg_i = -1, jgg_H.length && jgg_K());
  }
  function jgg_K() {
    if (!jgg_U) {
      var jgg_I = jgg_h(jgg_o);
      jgg_U = true;
      for (var jgg_Z = jgg_H.length; jgg_Z;) {
        for (jgg_d = jgg_H, jgg_H = []; ++jgg_i < jgg_Z;) {
          jgg_d && jgg_d[jgg_i].run();
        }
        jgg_i = -1;
        jgg_Z = jgg_H.length;
      }
      jgg_d = null;
      jgg_U = false;
      jgg_y(jgg_I);
    }
  }
  function jgg_u(jgg_I, jgg_Z) {
    this.fun = jgg_I;
    this.array = jgg_Z;
  }
  function jgg_r() {}
  var jgg_C;
  var jgg_O;
  jgg_W.exports = {};
  var jgg_z = jgg_W.exports;
  !function () {
    try {
      jgg_C = "function" == typeof setTimeout ? setTimeout : jgg_X;
    } catch (jgg_I) {
      jgg_C = jgg_X;
    }
    try {
      jgg_O = "function" == typeof clearTimeout ? clearTimeout : jgg_V;
    } catch (jgg_Z) {
      jgg_O = jgg_V;
    }
  }();
  var jgg_d;
  var jgg_H = [];
  var jgg_U = false;
  var jgg_i = -1;
  jgg_z.nextTick = function (jgg_I) {
    var jgg_Z = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var jgg_q = 1; jgg_q < arguments.length; jgg_q++) {
        jgg_Z[jgg_q - 1] = arguments[jgg_q];
      }
    }
    jgg_H.push(new jgg_u(jgg_I, jgg_Z));
    1 !== jgg_H.length || jgg_U || jgg_h(jgg_K);
  };
  jgg_u.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  jgg_z.title = "browser";
  jgg_z.browser = true;
  jgg_z.env = {};
  jgg_z.argv = [];
  jgg_z.version = "";
  jgg_z.versions = {};
  jgg_z.on = jgg_r;
  jgg_z.addListener = jgg_r;
  jgg_z.once = jgg_r;
  jgg_z.off = jgg_r;
  jgg_z.removeListener = jgg_r;
  jgg_z.removeAllListeners = jgg_r;
  jgg_z.emit = jgg_r;
  jgg_z.prependListener = jgg_r;
  jgg_z.prependOnceListener = jgg_r;
  jgg_z.listeners = function (jgg_I) {
    return [];
  };
  jgg_z.binding = function (jgg_I) {
    throw new Error("process.binding is not supported");
  };
  jgg_z.cwd = function () {
    return "/";
  };
  jgg_z.chdir = function (jgg_I) {
    throw new Error("process.chdir is not supported");
  };
  jgg_z.umask = function () {
    return 0;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(52);
  jgg_W.exports = function (jgg_h) {
    return new jgg_V(function (jgg_y, jgg_o) {
      jgg_y(jgg_h);
    });
  };
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(52);
  jgg_W.exports = function (jgg_h) {
    return new jgg_V(function (jgg_y, jgg_o) {
      jgg_o(jgg_h);
    });
  };
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    var jgg_K = this;
    jgg_K.resources = {};
    jgg_K.resource = {};
    var jgg_u = [];
    "object" == typeof navigator && (jgg_u = navigator.languages || [navigator.language]);
    jgg_K.setLocales(jgg_u);
  }
  var jgg_h = jgg_T(2);
  var jgg_y = jgg_V.prototype;
  jgg_y.is = function (jgg_K) {
    return jgg_h.includes(jgg_h.lower(this.locale), jgg_h.lower(jgg_K));
  };
  jgg_y.setResource = function (jgg_K, jgg_u) {
    this.resources[jgg_K] = jgg_u;
  };
  jgg_y.setResources = function (jgg_K) {
    jgg_h.extend(this.resources, jgg_K);
  };
  jgg_y.setLocale = function (jgg_K) {
    var jgg_u = this;
    if (jgg_K) {
      jgg_u.locale = jgg_K;
      var jgg_r = jgg_V.matchLocale(jgg_h.keys(jgg_u.resources), jgg_K);
      jgg_u.resource = jgg_u.resources[jgg_r] || {};
      return jgg_r;
    }
  };
  jgg_y.setLocales = function (jgg_K) {
    this.locales = jgg_K;
    this.setLocale(jgg_h.first(jgg_K));
  };
  jgg_y.translate = function (jgg_K) {
    return this.resource[jgg_K] || jgg_K;
  };
  jgg_y.t = jgg_y.translate;
  jgg_V.matchLocale = function (jgg_K, jgg_u) {
    jgg_K = jgg_h.map(jgg_K, function (jgg_C) {
      return {
        raw: jgg_C,
        score: jgg_V.getSimilar(jgg_C, jgg_u)
      };
    }).sort(function (jgg_C, jgg_O) {
      return jgg_C.score - jgg_O.score;
    });
    var jgg_r = jgg_h.last(jgg_K) || {};
    return jgg_r.raw;
  };
  jgg_V.getSimilar = function (jgg_K, jgg_u) {
    var jgg_r = 0;
    jgg_K = jgg_V.parseLocale(jgg_h.lower(jgg_K));
    jgg_u = jgg_V.parseLocale(jgg_h.lower(jgg_u));
    jgg_K.language && jgg_K.language == jgg_u.language && (jgg_r += 50);
    jgg_K.country && jgg_K.country == jgg_u.country && (jgg_r += 40);
    jgg_K.language && jgg_K.language == jgg_u.country && (jgg_r += 20);
    jgg_u.language && jgg_u.language == jgg_K.country && (jgg_r += 20);
    return jgg_r;
  };
  jgg_V.parseLocale = function (jgg_K) {
    var jgg_u = jgg_K.split(/[^a-zA-Z]+/);
    var jgg_r = {
      language: jgg_u[0],
      country: jgg_u[1]
    };
    return jgg_r;
  };
  var jgg_o = new jgg_V();
  jgg_W.exports = jgg_a = jgg_o;
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y(jgg_O) {
      jgg_V.isString(jgg_O) && jgg_C("head").append("<style>" + jgg_O + "</style>");
    }
    function jgg_o() {
      var jgg_O;
      try {
        window.top.document && window.top.QHPass && (jgg_O = window.top);
      } catch (jgg_z) {
        jgg_O = null;
      }
      return jgg_O = jgg_O || window;
    }
    function jgg_K(jgg_O) {
      jgg_V.isObject(jgg_O) && (jgg_O = jgg_O.areaCode + jgg_O.mobileNumber);
      return jgg_O;
    }
    function jgg_u(jgg_O) {
      var jgg_z = jgg_O;
      jgg_V.isString(jgg_O) && (jgg_z = {
        mobileNumber: jgg_O
      });
      jgg_z.regExp || (jgg_z = jgg_V.extend({}, jgg_z, {
        areaCode: "+86",
        regExp: "^1d{10}$"
      }));
      return jgg_z;
    }
    function jgg_r(jgg_O) {
      var jgg_z = new RegExp("(^|&)" + jgg_O + "=([^&]*)(&|$)");
      var jgg_d = window.location.search.substr(1).match(jgg_z) || window.location.hash.substring(window.location.hash.search(/\?/) + 1).match(jgg_z);
      if (null != jgg_d) {
        return decodeURIComponent(jgg_d[2]);
      }
    }
    var jgg_C = jgg_T(106);
    jgg_a.addStyle = jgg_V.once(jgg_y);
    jgg_a.getTopWindow = jgg_o;
    jgg_a.getMobileStr = jgg_K;
    jgg_a.normalizeMobileObj = jgg_u;
    jgg_a.getQueryString = jgg_r;
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    var jgg_h = jgg_T(107);
    var jgg_y = jgg_V.jQuery || jgg_h;
    jgg_W.exports = jgg_y;
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y(jgg_d, jgg_H) {
      if (jgg_O.fn(jgg_d)) {
        return jgg_y(jgg_C).ready(jgg_d);
      }
      if (!(this instanceof jgg_y)) {
        return new jgg_y(jgg_d, jgg_H);
      }
      if (this.length = 0, jgg_d) {
        jgg_O.string(jgg_d) && (jgg_d = -1 == jgg_d.indexOf("<") ? jgg_u(jgg_d, jgg_H) : jgg_K.html(jgg_d));
        jgg_O.arraylike(jgg_d) || (jgg_d = [jgg_d]);
        for (var jgg_U = jgg_d.length, jgg_i = 0; jgg_i < jgg_U; jgg_i++) {
          this[jgg_i] = jgg_d[jgg_i];
        }
        this.length = jgg_U;
      }
    }
    var jgg_o = jgg_T(108);
    var jgg_K = jgg_T(118);
    var jgg_u = jgg_T(129);
    var jgg_r = jgg_T(130);
    jgg_r.prefix = "minJQ-";
    var jgg_C = jgg_V.document;
    var jgg_O = jgg_o.is;
    jgg_W.exports = jgg_a = jgg_y;
    jgg_y.fn = jgg_y.prototype;
    var jgg_z = jgg_y.fn;
    jgg_y.extend = jgg_z.extend = function () {
      var jgg_d = arguments;
      return 1 == jgg_d.length ? jgg_o.extend(this, jgg_d[0]) : jgg_o.extend.apply(jgg_o, jgg_d);
    };
    jgg_z.extend({
      jquery: true
    });
    jgg_T(131);
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = jgg_T(109);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_V(jgg_y) {
      return this instanceof jgg_V ? (this.__value = jgg_y, void (this.__chain = false)) : new jgg_V(jgg_y);
    }
    var jgg_h = jgg_T(4);
    jgg_W.exports = jgg_h.extend(jgg_V, jgg_h);
    jgg_T(110)(jgg_V);
    jgg_T(111)(jgg_V);
    jgg_T(112)(jgg_V);
    jgg_T(113)(jgg_V);
    jgg_T(114)(jgg_V);
    jgg_T(116)(jgg_V);
    jgg_T(117)(jgg_V);
    jgg_V.mixin(jgg_V, jgg_V);
  }).call(jgg_a, jgg_T(108));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_T) {
    var jgg_X = jgg_T.is;
    jgg_T.isString = jgg_X.string;
    jgg_T.isArray = jgg_X.array;
    jgg_T.isArrayLike = jgg_X.arraylike;
    jgg_T.isBoolean = jgg_X.bool;
    jgg_T.isElement = jgg_X.element;
    jgg_T.isEmpty = jgg_X.empty;
    jgg_T.isFunction = jgg_X.fn;
    jgg_T.isInteger = jgg_X.integer;
    jgg_T.isNaN = jgg_X.nan;
    jgg_T.isNumber = jgg_X.number;
    jgg_T.isObject = jgg_X.object;
    jgg_T.isPlainObject = jgg_X.plainObject;
    jgg_T.isRegExp = jgg_X.regexp;
    jgg_T.isString = jgg_X.string;
    jgg_T.isUndefined = jgg_X.undef;
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    var jgg_h = jgg_X.is;
    jgg_X.now = function () {
      return +new Date();
    };
    jgg_X.constant = function (jgg_o) {
      return function () {
        return jgg_o;
      };
    };
    jgg_X.identity = function (jgg_o) {
      return jgg_o;
    };
    jgg_X.random = function (jgg_o, jgg_K) {
      return jgg_o + Math.floor(Math.random() * (jgg_K - jgg_o + 1));
    };
    jgg_X.mixin = function (jgg_o, jgg_K, jgg_u) {
      var jgg_r = jgg_X.functions(jgg_K);
      if (jgg_o) {
        if (jgg_h.fn(jgg_o)) {
          jgg_u = jgg_u || {};
          var jgg_C = jgg_o.prototype;
          jgg_X.each(jgg_r, function (jgg_O) {
            var jgg_z = jgg_K[jgg_O];
            jgg_C[jgg_O] = function () {
              var jgg_d = this;
              var jgg_H = [jgg_d.__value];
              jgg_H.push.apply(jgg_H, arguments);
              var jgg_U = jgg_z.apply(jgg_d, jgg_H);
              return jgg_d.__chain ? (jgg_d.__value = jgg_U, jgg_d) : jgg_U;
            };
          });
        } else {
          jgg_X.each(jgg_r, function (jgg_O) {
            jgg_o[jgg_O] = jgg_K[jgg_O];
          });
        }
      }
      return jgg_o;
    };
    jgg_X.chain = function (jgg_o) {
      var jgg_K = jgg_X(jgg_o);
      jgg_K.__chain = true;
      return jgg_K;
    };
    jgg_X.value = function () {
      this.__chain = false;
      return this.__value;
    };
    var jgg_y = 0;
    jgg_X.uniqueId = function (jgg_o) {
      jgg_y++;
      return jgg_X.toString(jgg_o) + jgg_y;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_C, jgg_O) {
      var jgg_z = jgg_X.size(jgg_O);
      jgg_C < 0 && (jgg_C += jgg_z);
      jgg_C < 0 && (jgg_C = 0);
      jgg_C > jgg_z && (jgg_C = jgg_z);
      return jgg_C || 0;
    }
    function jgg_y(jgg_C, jgg_O) {
      var jgg_z = [];
      var jgg_d = jgg_X.len(jgg_O);
      if (jgg_d) {
        for (jgg_O = jgg_O.sort(function (jgg_U, jgg_i) {
          return jgg_U - jgg_i;
        }); jgg_d--;) {
          var jgg_H = jgg_O[jgg_d];
          jgg_z.push(jgg_r.splice.call(jgg_C, jgg_H, 1)[0]);
        }
      }
      jgg_z.reverse();
      return jgg_z;
    }
    jgg_X.forEach = jgg_X.each;
    var jgg_o = jgg_X.forEach;
    var jgg_K = jgg_X.includes;
    var jgg_u = jgg_X.is;
    var jgg_r = Array.prototype;
    jgg_X.reject = function (jgg_C, jgg_O) {
      return jgg_X.filter(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        return !jgg_O(jgg_d, jgg_H, jgg_U);
      });
    };
    jgg_X.without = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_X.difference(jgg_C, jgg_O);
    };
    jgg_X.difference = function (jgg_C, jgg_O) {
      var jgg_z = [];
      jgg_X.each(jgg_C, function (jgg_d) {
        jgg_K(jgg_O, jgg_d) || jgg_z.push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.pluck = function (jgg_C, jgg_O) {
      return jgg_X.map(jgg_C, function (jgg_z) {
        if (jgg_z) {
          return jgg_z[jgg_O];
        }
      });
    };
    jgg_X.nth = function (jgg_C, jgg_O) {
      jgg_O = jgg_h(jgg_O, jgg_C);
      jgg_O = jgg_O || 0;
      var jgg_z;
      return jgg_z = jgg_X.isString(jgg_C) ? jgg_C.charAt(jgg_O) : jgg_C[jgg_O];
    };
    jgg_X.first = function (jgg_C) {
      if (jgg_C) {
        return jgg_X.nth(jgg_C, 0);
      }
    };
    jgg_X.last = function (jgg_C) {
      var jgg_O = jgg_X.len(jgg_C);
      if (jgg_O) {
        return jgg_X.nth(jgg_C, jgg_O - 1);
      }
    };
    jgg_X.asyncMap = function (jgg_C, jgg_O, jgg_z) {
      var jgg_d;
      var jgg_H;
      var jgg_U = [];
      var jgg_i = 0;
      jgg_o(jgg_C, function (jgg_I, jgg_Z) {
        jgg_H = true;
        jgg_O(jgg_I, function (jgg_G, jgg_Y) {
          if (!jgg_d) {
            if (jgg_i++, jgg_G) {
              jgg_d = true;
              return jgg_z(jgg_G);
            }
            jgg_U[jgg_Z] = jgg_Y;
            jgg_i == jgg_C.length && (jgg_d = true, jgg_z(null, jgg_U));
          }
        });
      });
      jgg_H || jgg_z(null);
    };
    jgg_X.uniq = function (jgg_C) {
      return jgg_X.uniqBy(jgg_C);
    };
    jgg_X.uniqBy = function (jgg_C, jgg_O) {
      var jgg_z = [];
      var jgg_d = [];
      jgg_u.fn(jgg_O) || (jgg_O = null);
      jgg_o(jgg_C, function (jgg_H) {
        var jgg_U = jgg_H;
        jgg_O && (jgg_U = jgg_O(jgg_H));
        jgg_K(jgg_d, jgg_U) || (jgg_d.push(jgg_U), jgg_z.push(jgg_H));
      });
      return jgg_z;
    };
    jgg_X.flatten = function (jgg_C) {
      var jgg_z = [];
      jgg_o(jgg_C, function (jgg_d) {
        jgg_u.arraylike(jgg_d) ? jgg_o(jgg_d, function (jgg_H) {
          jgg_z.push(jgg_H);
        }) : jgg_z.push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.union = function () {
      return jgg_X.uniq(jgg_X.flatten(arguments));
    };
    jgg_X.sampleSize = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.toArray(jgg_C), jgg_d = jgg_z.length, jgg_H = Math.min(jgg_O || 1, jgg_d), jgg_U = 0; jgg_U < jgg_d; jgg_U++) {
        var jgg_i = jgg_X.random(jgg_U, jgg_d - 1);
        var jgg_I = jgg_z[jgg_i];
        jgg_z[jgg_i] = jgg_z[jgg_U];
        jgg_z[jgg_U] = jgg_I;
      }
      jgg_z.length = jgg_H;
      return jgg_z;
    };
    jgg_X.sample = function (jgg_C) {
      return jgg_X.first(jgg_X.sampleSize(jgg_C, 1));
    };
    jgg_X.shuffle = function (jgg_C) {
      return jgg_X.sampleSize(jgg_C, Infinity);
    };
    jgg_X.compact = function (jgg_C) {
      return jgg_X.filter(jgg_C, jgg_X.identity);
    };
    jgg_X.rest = function (jgg_C) {
      return jgg_X.slice(jgg_C, 1);
    };
    jgg_X.invoke = function () {
      var jgg_C = arguments;
      var jgg_O = jgg_C[0];
      var jgg_z = jgg_C[1];
      var jgg_d = jgg_u.fn(jgg_z);
      jgg_C = jgg_X.slice(jgg_C, 2);
      return jgg_X.map(jgg_O, function (jgg_H) {
        if (jgg_d) {
          return jgg_z.apply(jgg_H, jgg_C);
        }
        if (null != jgg_H) {
          var jgg_U = jgg_H[jgg_z];
          if (jgg_u.fn(jgg_U)) {
            return jgg_U.apply(jgg_H, jgg_C);
          }
        }
      });
    };
    jgg_X.partition = function (jgg_C, jgg_O) {
      var jgg_d = jgg_X.groupBy(jgg_C, function (jgg_H, jgg_U, jgg_i) {
        var jgg_I = jgg_O(jgg_H, jgg_U, jgg_i);
        return jgg_I ? 1 : 2;
      });
      return [jgg_d[1] || [], jgg_d[2] || []];
    };
    jgg_X.groupBy = function (jgg_C, jgg_O) {
      var jgg_z = {};
      jgg_X.each(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        jgg_z[jgg_i] = jgg_z[jgg_i] || [];
        jgg_z[jgg_i].push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.range = function () {
      var jgg_C = arguments;
      if (jgg_C.length < 2) {
        return jgg_X.range(jgg_C[1], jgg_C[0]);
      }
      var jgg_O = jgg_C[0] || 0;
      var jgg_z = jgg_C[1] || 0;
      var jgg_d = jgg_C[2];
      jgg_u.number(jgg_d) || (jgg_d = 1);
      var jgg_H = jgg_z - jgg_O;
      0 != jgg_d && (jgg_H /= jgg_d);
      for (var jgg_U = [], jgg_i = jgg_O, jgg_I = 0; jgg_I < jgg_H; jgg_I++) {
        jgg_U.push(jgg_i);
        jgg_i += jgg_d;
      }
      return jgg_U;
    };
    jgg_X.pullAt = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_y(jgg_C, jgg_O);
    };
    jgg_X.remove = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.len(jgg_C) || 0, jgg_d = []; jgg_z--;) {
        jgg_O(jgg_C[jgg_z], jgg_z, jgg_C) && jgg_d.push(jgg_z);
      }
      return jgg_y(jgg_C, jgg_d);
    };
    jgg_X.fill = function (jgg_C, jgg_O, jgg_z, jgg_d) {
      var jgg_H = jgg_X.size(jgg_C);
      jgg_z = jgg_h(jgg_z, jgg_C) || 0;
      jgg_d = jgg_h(jgg_d, jgg_C) || jgg_H;
      for (var jgg_U = jgg_z; jgg_U < jgg_d; jgg_U++) {
        jgg_C[jgg_U] = jgg_O;
      }
      return jgg_C;
    };
    jgg_X.size = function (jgg_C) {
      var jgg_O = 0;
      if (jgg_C) {
        var jgg_z = jgg_C.length;
        jgg_X.isInteger(jgg_z) && jgg_z >= 0 ? jgg_O = jgg_z : jgg_X.isObject(jgg_C) && (jgg_O = jgg_X.keys(jgg_C).length);
      }
      return jgg_O;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_r) {
      if (jgg_y.array(jgg_r)) {
        return jgg_r;
      }
      var jgg_O = [];
      jgg_X.toString(jgg_r).replace(jgg_K, function (jgg_z, jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_d || jgg_z;
        jgg_H && (jgg_i = jgg_U.replace(jgg_u, "$1"));
        jgg_O.push(jgg_i);
      });
      return jgg_O;
    }
    var jgg_y = jgg_X.is;
    var jgg_o = jgg_X.forIn;
    jgg_X.only = function (jgg_r, jgg_C) {
      jgg_r = jgg_r || {};
      jgg_y.string(jgg_C) && (jgg_C = jgg_C.split(/ +/));
      return jgg_X.reduce(jgg_C, function (jgg_z, jgg_d) {
        null != jgg_r[jgg_d] && (jgg_z[jgg_d] = jgg_r[jgg_d]);
        return jgg_z;
      }, {});
    };
    jgg_X.values = function (jgg_r) {
      return jgg_X.map(jgg_X.keys(jgg_r), function (jgg_C) {
        return jgg_r[jgg_C];
      });
    };
    jgg_X.pick = function (jgg_r, jgg_C) {
      if (!jgg_y.fn(jgg_C)) {
        return jgg_X.pick(jgg_r, function (jgg_z, jgg_d) {
          return jgg_d == jgg_C;
        });
      }
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_C(jgg_z, jgg_d, jgg_H) && (jgg_O[jgg_d] = jgg_z);
      });
      return jgg_O;
    };
    jgg_X.functions = function (jgg_r) {
      return jgg_X.keys(jgg_X.pick(jgg_r, function (jgg_C) {
        return jgg_y.fn(jgg_C);
      }));
    };
    jgg_X.mapKeys = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_C(jgg_z, jgg_d, jgg_H);
        jgg_O[jgg_U] = jgg_z;
      });
      return jgg_O;
    };
    jgg_X.mapObject = jgg_X.mapValues = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_O[jgg_d] = jgg_C(jgg_z, jgg_d, jgg_H);
      });
      return jgg_O;
    };
    jgg_X.get = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return jgg_r;
        }
      }
    };
    jgg_X.has = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_z = jgg_X.every(jgg_C, function (jgg_d) {
          if (null != jgg_r && jgg_y.owns(jgg_r, jgg_d)) {
            jgg_r = jgg_r[jgg_d];
            return true;
          }
        });
        if (jgg_z) {
          return true;
        }
      }
      return false;
    };
    jgg_X.set = function (jgg_r, jgg_C, jgg_O) {
      jgg_C = jgg_h(jgg_C);
      var jgg_d = jgg_r;
      jgg_X.every(jgg_C, function (jgg_H, jgg_U) {
        if (jgg_y.oof(jgg_d)) {
          if (jgg_U + 1 != jgg_C.length) {
            var jgg_i = jgg_d[jgg_H];
            if (null == jgg_i) {
              var jgg_i = {};
              ~~jgg_H == jgg_H && (jgg_i = []);
            }
            jgg_d = jgg_d[jgg_H] = jgg_i;
            return true;
          }
          jgg_d[jgg_H] = jgg_O;
        }
      });
      return jgg_r;
    };
    jgg_X.create = function () {
      function jgg_r() {}
      return function (jgg_C, jgg_O) {
        "object" != typeof jgg_C && (jgg_C = null);
        jgg_r.prototype = jgg_C;
        return jgg_X.extend(new jgg_r(), jgg_O);
      };
    }();
    jgg_X.defaults = function () {
      var jgg_r = arguments;
      var jgg_C = jgg_r[0];
      var jgg_O = jgg_X.slice(jgg_r, 1);
      jgg_C && jgg_X.each(jgg_O, function (jgg_z) {
        jgg_X.mapObject(jgg_z, function (jgg_d, jgg_H) {
          jgg_y.undef(jgg_C[jgg_H]) && (jgg_C[jgg_H] = jgg_d);
        });
      });
      return jgg_C;
    };
    jgg_X.isMatch = function (jgg_r, jgg_C) {
      var jgg_z = true;
      jgg_r = jgg_r || {};
      jgg_o(jgg_C, function (jgg_d, jgg_H) {
        if (jgg_d !== jgg_r[jgg_H]) {
          jgg_z = false;
          return false;
        }
      });
      return jgg_z;
    };
    jgg_X.toPlainObject = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_z] = jgg_O;
      });
      return jgg_C;
    };
    jgg_X.invert = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_O] = jgg_z;
      });
      return jgg_C;
    };
    var jgg_K = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var jgg_u = /\\(\\)?/g;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = function (jgg_V) {
    function jgg_y(jgg_u) {
      function jgg_r() {
        var jgg_O = arguments;
        var jgg_z = jgg_O[0];
        if (!jgg_C.has(jgg_z)) {
          var jgg_d = jgg_u.apply(this, jgg_O);
          jgg_C.set(jgg_z, jgg_d);
        }
        return jgg_C.get(jgg_z);
      }
      var jgg_C = new jgg_y.Cache();
      jgg_r.cache = jgg_C;
      return jgg_r;
    }
    var jgg_o = jgg_V.is;
    var jgg_K = jgg_V.slice;
    jgg_V.bind = function (jgg_u, jgg_r) {
      if (jgg_o.string(jgg_r)) {
        var jgg_C = jgg_u;
        jgg_u = jgg_C[jgg_r];
        jgg_r = jgg_C;
      }
      if (!jgg_o.fn(jgg_u)) {
        return jgg_u;
      }
      var jgg_O = jgg_K(arguments, 2);
      jgg_r = jgg_r || this;
      return function () {
        return jgg_u.apply(jgg_r, jgg_V.flatten([jgg_O, arguments]));
      };
    };
    jgg_V.inherits = function (jgg_u, jgg_r) {
      jgg_u.super_ = jgg_r;
      jgg_u.prototype = jgg_V.create(jgg_r.prototype, {
        constructor: jgg_u
      });
    };
    jgg_V.delay = function (jgg_u, jgg_r) {
      var jgg_C = jgg_V.slice(arguments, 2);
      return setTimeout(function () {
        jgg_u.apply(this, jgg_C);
      }, jgg_r);
    };
    jgg_V.before = function (jgg_u, jgg_r) {
      return function () {
        if (jgg_u > 1) {
          jgg_u--;
          return jgg_r.apply(this, arguments);
        }
      };
    };
    jgg_V.once = function (jgg_u) {
      return jgg_V.before(2, jgg_u);
    };
    jgg_V.after = function (jgg_u, jgg_r) {
      return function () {
        return jgg_u > 1 ? void jgg_u-- : jgg_r.apply(this, arguments);
      };
    };
    jgg_V.throttle = function (jgg_u, jgg_r, jgg_C) {
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: true,
        trailing: true,
        maxWait: jgg_r
      }, jgg_C);
      return jgg_V.debounce(jgg_u, jgg_r, jgg_C);
    };
    jgg_V.debounce = function (jgg_u, jgg_r, jgg_C) {
      function jgg_z() {
        return !(jgg_G - jgg_Z > jgg_r) && !(jgg_I && jgg_G - jgg_q > jgg_I);
      }
      function jgg_d(jgg_Y, jgg_c, jgg_l) {
        jgg_Z = jgg_V.now();
        return jgg_Y.apply(jgg_c, jgg_l);
      }
      function jgg_H() {
        jgg_i && (clearTimeout(jgg_i), jgg_i = null);
      }
      function jgg_U() {
        jgg_G = jgg_V.now();
        var jgg_D = jgg_z();
        jgg_q = jgg_G;
        var jgg_l = this;
        var jgg_w = arguments;
        jgg_H();
        jgg_D ? jgg_C.trailing && (jgg_i = jgg_V.delay(function () {
          jgg_d(jgg_u, jgg_l, jgg_w);
        }, jgg_r)) : jgg_d(jgg_u, jgg_l, jgg_w);
      }
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: false,
        trailing: true
      }, jgg_C);
      var jgg_i;
      var jgg_I = jgg_C.maxWait;
      var jgg_Z = 0;
      var jgg_q = 0;
      var jgg_G = jgg_V.now();
      jgg_C.leading || (jgg_Z = jgg_G);
      jgg_U.cancel = jgg_H;
      return jgg_U;
    };
    jgg_y.Cache = jgg_T(115);
    jgg_V.memoize = jgg_y;
    jgg_V.wrap = function (jgg_u, jgg_r) {
      return function () {
        var jgg_C = [jgg_u];
        jgg_C.push.apply(jgg_C, arguments);
        return jgg_r.apply(this, jgg_C);
      };
    };
    jgg_V.curry = function (jgg_u) {
      function jgg_C(jgg_z) {
        return function () {
          var jgg_d = jgg_z.concat(jgg_V.slice(arguments));
          return jgg_d.length >= jgg_O ? (jgg_d.length = jgg_O, jgg_u.apply(this, jgg_d)) : jgg_C(jgg_d);
        };
      }
      var jgg_O = jgg_u.length;
      return jgg_C([]);
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.data = {};
  }
  var jgg_h = jgg_T(4);
  var jgg_y = jgg_h.is;
  jgg_W.exports = jgg_V;
  var jgg_o = jgg_V.prototype;
  jgg_o.has = function (jgg_K) {
    return jgg_y.owns(this.data, jgg_K);
  };
  jgg_o.get = function (jgg_K) {
    return this.data[jgg_K];
  };
  jgg_o.set = function (jgg_K, jgg_u) {
    this.data[jgg_K] = jgg_u;
  };
  jgg_o.delete = function (jgg_K) {
    delete this.data[jgg_K];
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_u, jgg_r) {
      jgg_u = jgg_y(jgg_u) || " ";
      var jgg_C = Math.floor(jgg_r / jgg_u.length) + 1;
      return jgg_X.repeat(jgg_u, jgg_C).slice(0, jgg_r);
    }
    function jgg_y(jgg_u) {
      return jgg_u || 0 == jgg_u ? jgg_u + "" : "";
    }
    jgg_X.tostr = jgg_X.toString = jgg_y;
    var jgg_o = jgg_X.indexOf;
    jgg_X.split = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.split(jgg_r, jgg_C);
    };
    jgg_X.capitalize = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1).toLowerCase();
    };
    jgg_X.upperFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1);
    };
    jgg_X.lowerFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toLowerCase() + jgg_u.substr(1);
    };
    jgg_X.camelCase = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      var jgg_r = jgg_u.split(/[^\w]|_+/);
      jgg_r = jgg_X.map(jgg_r, function (jgg_C) {
        return jgg_X.capitalize(jgg_C);
      });
      return jgg_X.lowerFirst(jgg_r.join(""));
    };
    jgg_X.startsWith = function (jgg_u, jgg_r) {
      return 0 == jgg_o(jgg_u, jgg_r);
    };
    jgg_X.endsWith = function (jgg_u, jgg_r) {
      jgg_r += "";
      return jgg_r == jgg_X.slice(jgg_u, jgg_X.len(jgg_u) - jgg_X.len(jgg_r));
    };
    jgg_X.toLower = jgg_X.lower = function (jgg_u) {
      return jgg_y(jgg_u).toLowerCase();
    };
    jgg_X.toUpper = jgg_X.upper = function (jgg_u) {
      return jgg_y(jgg_u).toUpperCase();
    };
    jgg_X.repeat = function (jgg_u, jgg_r) {
      return jgg_X.map(jgg_X.range(jgg_r), function () {
        return jgg_u;
      }).join("");
    };
    jgg_X.padStart = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_h(jgg_C, jgg_O) + jgg_u;
    };
    jgg_X.padEnd = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_u + jgg_h(jgg_C, jgg_O);
    };
    var jgg_K = {
      "&": "&amp",
      "<": "&lt",
      ">": "&gt",
      "\"": "&quot",
      "'": "&#39"
    };
    jgg_X.escape = function (jgg_u) {
      return jgg_y(jgg_u).replace(/[&<>"']/g, function (jgg_r) {
        return jgg_K[jgg_r] || jgg_r;
      });
    };
    jgg_X.template = function (jgg_u) {
      function jgg_C(jgg_i) {
        var jgg_I = jgg_X.first(jgg_i);
        if ("=" === jgg_I || "-" === jgg_I) {
          var jgg_Z = jgg_X.slice(jgg_i, 1);
          "-" === jgg_I && (jgg_Z = "_.escape(" + jgg_Z + ")");
          jgg_z.push("ret += " + jgg_Z);
        } else {
          jgg_z.push(jgg_i);
        }
      }
      function jgg_O(jgg_i) {
        jgg_z.push("ret += \"" + jgg_i.replace(/('|"|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "\"");
      }
      var jgg_z = ["with(data) {var ret = \"\""];
      jgg_X.each(jgg_X.split(jgg_u, "<%"), function (jgg_i, jgg_I) {
        var jgg_Z = jgg_i.split("%>");
        return jgg_Z[1] ? (jgg_C(jgg_X.trim(jgg_Z[0])), jgg_O(jgg_Z[1])) : void jgg_O(jgg_Z[0]);
      });
      jgg_z.push("return ret}");
      var jgg_d = new Function("data", jgg_z.join("\n"));
      var jgg_H = {
        _: jgg_X
      };
      var jgg_U = function (jgg_i) {
        return jgg_d(jgg_X.extend({}, jgg_H, jgg_i));
      };
      return jgg_U;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    jgg_X.sum = function (jgg_h) {
      return jgg_X.reduce(jgg_h, function (jgg_y, jgg_o) {
        return jgg_y + jgg_o;
      }, 0);
    };
    jgg_X.max = function (jgg_h, jgg_y) {
      var jgg_K = -1;
      var jgg_u = -Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_r, jgg_C) {
        jgg_r = jgg_y(jgg_r);
        jgg_r > jgg_u && (jgg_u = jgg_r, jgg_K = jgg_C);
      });
      return jgg_K > -1 ? jgg_h[jgg_K] : jgg_u;
    };
    jgg_X.min = function (jgg_h, jgg_y) {
      var jgg_o = -1;
      var jgg_K = Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_u, jgg_r) {
        jgg_u = jgg_y(jgg_u);
        jgg_u < jgg_K && (jgg_K = jgg_u, jgg_o = jgg_r);
      });
      return jgg_o > -1 ? jgg_h[jgg_o] : jgg_K;
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y(jgg_C) {
      jgg_C = jgg_o.trim(jgg_C + "");
      var jgg_d;
      var jgg_H;
      var jgg_U = jgg_C.replace(jgg_r, function (jgg_I, jgg_Z, jgg_q, jgg_G) {
        jgg_H && jgg_Z && (jgg_d = 0);
        return (jgg_d = 0) ? jgg_I : (jgg_H = jgg_q || jgg_Z, jgg_d += !jgg_G - !jgg_q, "");
      });
      if (jgg_U = jgg_o.trim(jgg_U)) {
        throw new Error("Invalid JSON: " + jgg_C);
      }
      return Function("return " + jgg_C)();
    }
    var jgg_o = jgg_T(119);
    var jgg_K = jgg_o.is;
    jgg_a.html = function (jgg_C, jgg_O) {
      if (jgg_K.str(jgg_C)) {
        jgg_O = jgg_O || document;
        var jgg_z = jgg_O.createElement("div");
        jgg_z.innerHTML = jgg_C + "";
        return jgg_z.childNodes;
      }
      return [];
    };
    jgg_a.xml = function (jgg_C, jgg_O) {
      jgg_C += "";
      var jgg_H;
      var jgg_U;
      try {
        if (jgg_V.DOMParser) {
          var jgg_q = new DOMParser();
          jgg_H = jgg_q.parseFromString(jgg_C, "text/xml");
        } else {
          jgg_H = new ActiveXObject("Microsoft.XMLDOM");
          jgg_H.async = "false";
          jgg_H.loadXML(jgg_C);
        }
      } catch (jgg_G) {
        jgg_U = jgg_G;
      }
      if (!jgg_U) {
        if (jgg_H) {
          if (jgg_H.documentElement) {
            var jgg_i = jgg_H.getElementsByTagName("parsererror")[0];
            if (jgg_i) {
              var jgg_I = jgg_i.textContent;
              jgg_U = new Error(jgg_I);
            }
          } else {
            var jgg_Z = jgg_H.parseError;
            jgg_Z && (jgg_U = new Error("line " + jgg_Z.line + ": " + jgg_Z.reason));
          }
        } else {
          jgg_U = new Error("parse error");
        }
      }
      jgg_K.fn(jgg_O) && jgg_O(jgg_U, jgg_H);
      return jgg_H;
    };
    var jgg_u = jgg_V.JSON || {};
    jgg_a.json = jgg_u.parse || jgg_y;
    var jgg_r = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = jgg_T(120);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_V(jgg_y) {
      return this instanceof jgg_V ? (this.__value = jgg_y, void (this.__chain = false)) : new jgg_V(jgg_y);
    }
    var jgg_h = jgg_T(4);
    jgg_W.exports = jgg_h.extend(jgg_V, jgg_h);
    jgg_T(121)(jgg_V);
    jgg_T(122)(jgg_V);
    jgg_T(123)(jgg_V);
    jgg_T(124)(jgg_V);
    jgg_T(125)(jgg_V);
    jgg_T(127)(jgg_V);
    jgg_T(128)(jgg_V);
    jgg_V.mixin(jgg_V, jgg_V);
  }).call(jgg_a, jgg_T(119));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_T) {
    var jgg_X = jgg_T.is;
    jgg_T.isString = jgg_X.string;
    jgg_T.isArray = jgg_X.array;
    jgg_T.isArrayLike = jgg_X.arraylike;
    jgg_T.isBoolean = jgg_X.bool;
    jgg_T.isElement = jgg_X.element;
    jgg_T.isEmpty = jgg_X.empty;
    jgg_T.isFunction = jgg_X.fn;
    jgg_T.isInteger = jgg_X.integer;
    jgg_T.isNaN = jgg_X.nan;
    jgg_T.isNumber = jgg_X.number;
    jgg_T.isObject = jgg_X.object;
    jgg_T.isPlainObject = jgg_X.plainObject;
    jgg_T.isRegExp = jgg_X.regexp;
    jgg_T.isString = jgg_X.string;
    jgg_T.isUndefined = jgg_X.undef;
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    var jgg_h = jgg_X.is;
    jgg_X.now = function () {
      return +new Date();
    };
    jgg_X.constant = function (jgg_o) {
      return function () {
        return jgg_o;
      };
    };
    jgg_X.identity = function (jgg_o) {
      return jgg_o;
    };
    jgg_X.random = function (jgg_o, jgg_K) {
      return jgg_o + Math.floor(Math.random() * (jgg_K - jgg_o + 1));
    };
    jgg_X.mixin = function (jgg_o, jgg_K, jgg_u) {
      var jgg_r = jgg_X.functions(jgg_K);
      if (jgg_o) {
        if (jgg_h.fn(jgg_o)) {
          jgg_u = jgg_u || {};
          var jgg_C = jgg_o.prototype;
          jgg_X.each(jgg_r, function (jgg_O) {
            var jgg_z = jgg_K[jgg_O];
            jgg_C[jgg_O] = function () {
              var jgg_d = this;
              var jgg_H = [jgg_d.__value];
              jgg_H.push.apply(jgg_H, arguments);
              var jgg_U = jgg_z.apply(jgg_d, jgg_H);
              return jgg_d.__chain ? (jgg_d.__value = jgg_U, jgg_d) : jgg_U;
            };
          });
        } else {
          jgg_X.each(jgg_r, function (jgg_O) {
            jgg_o[jgg_O] = jgg_K[jgg_O];
          });
        }
      }
      return jgg_o;
    };
    jgg_X.chain = function (jgg_o) {
      var jgg_K = jgg_X(jgg_o);
      jgg_K.__chain = true;
      return jgg_K;
    };
    jgg_X.value = function () {
      this.__chain = false;
      return this.__value;
    };
    var jgg_y = 0;
    jgg_X.uniqueId = function (jgg_o) {
      jgg_y++;
      return jgg_X.toString(jgg_o) + jgg_y;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_C, jgg_O) {
      var jgg_z = jgg_X.size(jgg_O);
      jgg_C < 0 && (jgg_C += jgg_z);
      jgg_C < 0 && (jgg_C = 0);
      jgg_C > jgg_z && (jgg_C = jgg_z);
      return jgg_C || 0;
    }
    function jgg_y(jgg_C, jgg_O) {
      var jgg_z = [];
      var jgg_d = jgg_X.len(jgg_O);
      if (jgg_d) {
        for (jgg_O = jgg_O.sort(function (jgg_U, jgg_i) {
          return jgg_U - jgg_i;
        }); jgg_d--;) {
          var jgg_H = jgg_O[jgg_d];
          jgg_z.push(jgg_r.splice.call(jgg_C, jgg_H, 1)[0]);
        }
      }
      jgg_z.reverse();
      return jgg_z;
    }
    jgg_X.forEach = jgg_X.each;
    var jgg_o = jgg_X.forEach;
    var jgg_K = jgg_X.includes;
    var jgg_u = jgg_X.is;
    var jgg_r = Array.prototype;
    jgg_X.reject = function (jgg_C, jgg_O) {
      return jgg_X.filter(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        return !jgg_O(jgg_d, jgg_H, jgg_U);
      });
    };
    jgg_X.without = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_X.difference(jgg_C, jgg_O);
    };
    jgg_X.difference = function (jgg_C, jgg_O) {
      var jgg_z = [];
      jgg_X.each(jgg_C, function (jgg_d) {
        jgg_K(jgg_O, jgg_d) || jgg_z.push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.pluck = function (jgg_C, jgg_O) {
      return jgg_X.map(jgg_C, function (jgg_z) {
        if (jgg_z) {
          return jgg_z[jgg_O];
        }
      });
    };
    jgg_X.nth = function (jgg_C, jgg_O) {
      jgg_O = jgg_h(jgg_O, jgg_C);
      jgg_O = jgg_O || 0;
      var jgg_z;
      return jgg_z = jgg_X.isString(jgg_C) ? jgg_C.charAt(jgg_O) : jgg_C[jgg_O];
    };
    jgg_X.first = function (jgg_C) {
      if (jgg_C) {
        return jgg_X.nth(jgg_C, 0);
      }
    };
    jgg_X.last = function (jgg_C) {
      var jgg_O = jgg_X.len(jgg_C);
      if (jgg_O) {
        return jgg_X.nth(jgg_C, jgg_O - 1);
      }
    };
    jgg_X.asyncMap = function (jgg_C, jgg_O, jgg_z) {
      var jgg_H;
      var jgg_U;
      var jgg_i = [];
      var jgg_I = 0;
      jgg_o(jgg_C, function (jgg_Z, jgg_q) {
        jgg_U = true;
        jgg_O(jgg_Z, function (jgg_G, jgg_Y) {
          if (!jgg_H) {
            if (jgg_I++, jgg_G) {
              jgg_H = true;
              return jgg_z(jgg_G);
            }
            jgg_i[jgg_q] = jgg_Y;
            jgg_I == jgg_C.length && (jgg_H = true, jgg_z(null, jgg_i));
          }
        });
      });
      jgg_U || jgg_z(null);
    };
    jgg_X.uniq = function (jgg_C) {
      return jgg_X.uniqBy(jgg_C);
    };
    jgg_X.uniqBy = function (jgg_C, jgg_O) {
      var jgg_z = [];
      var jgg_d = [];
      jgg_u.fn(jgg_O) || (jgg_O = null);
      jgg_o(jgg_C, function (jgg_H) {
        var jgg_U = jgg_H;
        jgg_O && (jgg_U = jgg_O(jgg_H));
        jgg_K(jgg_d, jgg_U) || (jgg_d.push(jgg_U), jgg_z.push(jgg_H));
      });
      return jgg_z;
    };
    jgg_X.flatten = function (jgg_C) {
      var jgg_O = [];
      jgg_o(jgg_C, function (jgg_z) {
        jgg_u.arraylike(jgg_z) ? jgg_o(jgg_z, function (jgg_d) {
          jgg_O.push(jgg_d);
        }) : jgg_O.push(jgg_z);
      });
      return jgg_O;
    };
    jgg_X.union = function () {
      return jgg_X.uniq(jgg_X.flatten(arguments));
    };
    jgg_X.sampleSize = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.toArray(jgg_C), jgg_d = jgg_z.length, jgg_H = Math.min(jgg_O || 1, jgg_d), jgg_U = 0; jgg_U < jgg_d; jgg_U++) {
        var jgg_i = jgg_X.random(jgg_U, jgg_d - 1);
        var jgg_I = jgg_z[jgg_i];
        jgg_z[jgg_i] = jgg_z[jgg_U];
        jgg_z[jgg_U] = jgg_I;
      }
      jgg_z.length = jgg_H;
      return jgg_z;
    };
    jgg_X.sample = function (jgg_C) {
      return jgg_X.first(jgg_X.sampleSize(jgg_C, 1));
    };
    jgg_X.shuffle = function (jgg_C) {
      return jgg_X.sampleSize(jgg_C, Infinity);
    };
    jgg_X.compact = function (jgg_C) {
      return jgg_X.filter(jgg_C, jgg_X.identity);
    };
    jgg_X.rest = function (jgg_C) {
      return jgg_X.slice(jgg_C, 1);
    };
    jgg_X.invoke = function () {
      var jgg_O = arguments;
      var jgg_z = jgg_O[0];
      var jgg_d = jgg_O[1];
      var jgg_H = jgg_u.fn(jgg_d);
      jgg_O = jgg_X.slice(jgg_O, 2);
      return jgg_X.map(jgg_z, function (jgg_U) {
        if (jgg_H) {
          return jgg_d.apply(jgg_U, jgg_O);
        }
        if (null != jgg_U) {
          var jgg_i = jgg_U[jgg_d];
          if (jgg_u.fn(jgg_i)) {
            return jgg_i.apply(jgg_U, jgg_O);
          }
        }
      });
    };
    jgg_X.partition = function (jgg_C, jgg_O) {
      var jgg_z = jgg_X.groupBy(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        return jgg_i ? 1 : 2;
      });
      return [jgg_z[1] || [], jgg_z[2] || []];
    };
    jgg_X.groupBy = function (jgg_C, jgg_O) {
      var jgg_z = {};
      jgg_X.each(jgg_C, function (jgg_d, jgg_H, jgg_U) {
        var jgg_i = jgg_O(jgg_d, jgg_H, jgg_U);
        jgg_z[jgg_i] = jgg_z[jgg_i] || [];
        jgg_z[jgg_i].push(jgg_d);
      });
      return jgg_z;
    };
    jgg_X.range = function () {
      var jgg_C = arguments;
      if (jgg_C.length < 2) {
        return jgg_X.range(jgg_C[1], jgg_C[0]);
      }
      var jgg_O = jgg_C[0] || 0;
      var jgg_z = jgg_C[1] || 0;
      var jgg_d = jgg_C[2];
      jgg_u.number(jgg_d) || (jgg_d = 1);
      var jgg_H = jgg_z - jgg_O;
      0 != jgg_d && (jgg_H /= jgg_d);
      for (var jgg_U = [], jgg_i = jgg_O, jgg_I = 0; jgg_I < jgg_H; jgg_I++) {
        jgg_U.push(jgg_i);
        jgg_i += jgg_d;
      }
      return jgg_U;
    };
    jgg_X.pullAt = function (jgg_C) {
      var jgg_O = jgg_X.slice(arguments, 1);
      return jgg_y(jgg_C, jgg_O);
    };
    jgg_X.remove = function (jgg_C, jgg_O) {
      for (var jgg_z = jgg_X.len(jgg_C) || 0, jgg_d = []; jgg_z--;) {
        jgg_O(jgg_C[jgg_z], jgg_z, jgg_C) && jgg_d.push(jgg_z);
      }
      return jgg_y(jgg_C, jgg_d);
    };
    jgg_X.fill = function (jgg_C, jgg_O, jgg_z, jgg_d) {
      var jgg_H = jgg_X.size(jgg_C);
      jgg_z = jgg_h(jgg_z, jgg_C) || 0;
      jgg_d = jgg_h(jgg_d, jgg_C) || jgg_H;
      for (var jgg_U = jgg_z; jgg_U < jgg_d; jgg_U++) {
        jgg_C[jgg_U] = jgg_O;
      }
      return jgg_C;
    };
    jgg_X.size = function (jgg_C) {
      var jgg_O = 0;
      if (jgg_C) {
        var jgg_z = jgg_C.length;
        jgg_X.isInteger(jgg_z) && jgg_z >= 0 ? jgg_O = jgg_z : jgg_X.isObject(jgg_C) && (jgg_O = jgg_X.keys(jgg_C).length);
      }
      return jgg_O;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_r) {
      if (jgg_y.array(jgg_r)) {
        return jgg_r;
      }
      var jgg_C = [];
      jgg_X.toString(jgg_r).replace(jgg_K, function (jgg_O, jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_z || jgg_O;
        jgg_d && (jgg_U = jgg_H.replace(jgg_u, "$1"));
        jgg_C.push(jgg_U);
      });
      return jgg_C;
    }
    var jgg_y = jgg_X.is;
    var jgg_o = jgg_X.forIn;
    jgg_X.only = function (jgg_r, jgg_C) {
      jgg_r = jgg_r || {};
      jgg_y.string(jgg_C) && (jgg_C = jgg_C.split(/ +/));
      return jgg_X.reduce(jgg_C, function (jgg_O, jgg_z) {
        null != jgg_r[jgg_z] && (jgg_O[jgg_z] = jgg_r[jgg_z]);
        return jgg_O;
      }, {});
    };
    jgg_X.values = function (jgg_r) {
      return jgg_X.map(jgg_X.keys(jgg_r), function (jgg_C) {
        return jgg_r[jgg_C];
      });
    };
    jgg_X.pick = function (jgg_r, jgg_C) {
      if (!jgg_y.fn(jgg_C)) {
        return jgg_X.pick(jgg_r, function (jgg_z, jgg_d) {
          return jgg_d == jgg_C;
        });
      }
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_C(jgg_z, jgg_d, jgg_H) && (jgg_O[jgg_d] = jgg_z);
      });
      return jgg_O;
    };
    jgg_X.functions = function (jgg_r) {
      return jgg_X.keys(jgg_X.pick(jgg_r, function (jgg_C) {
        return jgg_y.fn(jgg_C);
      }));
    };
    jgg_X.mapKeys = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        var jgg_U = jgg_C(jgg_z, jgg_d, jgg_H);
        jgg_O[jgg_U] = jgg_z;
      });
      return jgg_O;
    };
    jgg_X.mapObject = jgg_X.mapValues = function (jgg_r, jgg_C) {
      var jgg_O = {};
      jgg_o(jgg_r, function (jgg_z, jgg_d, jgg_H) {
        jgg_O[jgg_d] = jgg_C(jgg_z, jgg_d, jgg_H);
      });
      return jgg_O;
    };
    jgg_X.get = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return jgg_r;
        }
      }
    };
    jgg_X.has = function (jgg_r, jgg_C) {
      if (jgg_C = jgg_h(jgg_C), jgg_C.length) {
        var jgg_O = jgg_X.every(jgg_C, function (jgg_z) {
          if (null != jgg_r && jgg_y.owns(jgg_r, jgg_z)) {
            jgg_r = jgg_r[jgg_z];
            return true;
          }
        });
        if (jgg_O) {
          return true;
        }
      }
      return false;
    };
    jgg_X.set = function (jgg_r, jgg_C, jgg_O) {
      jgg_C = jgg_h(jgg_C);
      var jgg_d = jgg_r;
      jgg_X.every(jgg_C, function (jgg_H, jgg_U) {
        if (jgg_y.oof(jgg_d)) {
          if (jgg_U + 1 != jgg_C.length) {
            var jgg_i = jgg_d[jgg_H];
            if (null == jgg_i) {
              var jgg_i = {};
              ~~jgg_H == jgg_H && (jgg_i = []);
            }
            jgg_d = jgg_d[jgg_H] = jgg_i;
            return true;
          }
          jgg_d[jgg_H] = jgg_O;
        }
      });
      return jgg_r;
    };
    jgg_X.create = function () {
      function jgg_r() {}
      return function (jgg_C, jgg_O) {
        "object" != typeof jgg_C && (jgg_C = null);
        jgg_r.prototype = jgg_C;
        return jgg_X.extend(new jgg_r(), jgg_O);
      };
    }();
    jgg_X.defaults = function () {
      var jgg_r = arguments;
      var jgg_C = jgg_r[0];
      var jgg_O = jgg_X.slice(jgg_r, 1);
      jgg_C && jgg_X.each(jgg_O, function (jgg_z) {
        jgg_X.mapObject(jgg_z, function (jgg_d, jgg_H) {
          jgg_y.undef(jgg_C[jgg_H]) && (jgg_C[jgg_H] = jgg_d);
        });
      });
      return jgg_C;
    };
    jgg_X.isMatch = function (jgg_r, jgg_C) {
      var jgg_O = true;
      jgg_r = jgg_r || {};
      jgg_o(jgg_C, function (jgg_z, jgg_d) {
        if (jgg_z !== jgg_r[jgg_d]) {
          jgg_O = false;
          return false;
        }
      });
      return jgg_O;
    };
    jgg_X.toPlainObject = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_z] = jgg_O;
      });
      return jgg_C;
    };
    jgg_X.invert = function (jgg_r) {
      var jgg_C = {};
      jgg_o(jgg_r, function (jgg_O, jgg_z) {
        jgg_C[jgg_O] = jgg_z;
      });
      return jgg_C;
    };
    var jgg_K = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var jgg_u = /\\(\\)?/g;
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_W.exports = function (jgg_V) {
    function jgg_y(jgg_u) {
      function jgg_r() {
        var jgg_O = arguments;
        var jgg_z = jgg_O[0];
        if (!jgg_C.has(jgg_z)) {
          var jgg_d = jgg_u.apply(this, jgg_O);
          jgg_C.set(jgg_z, jgg_d);
        }
        return jgg_C.get(jgg_z);
      }
      var jgg_C = new jgg_y.Cache();
      jgg_r.cache = jgg_C;
      return jgg_r;
    }
    var jgg_o = jgg_V.is;
    var jgg_K = jgg_V.slice;
    jgg_V.bind = function (jgg_u, jgg_r) {
      if (jgg_o.string(jgg_r)) {
        var jgg_C = jgg_u;
        jgg_u = jgg_C[jgg_r];
        jgg_r = jgg_C;
      }
      if (!jgg_o.fn(jgg_u)) {
        return jgg_u;
      }
      var jgg_O = jgg_K(arguments, 2);
      jgg_r = jgg_r || this;
      return function () {
        return jgg_u.apply(jgg_r, jgg_V.flatten([jgg_O, arguments]));
      };
    };
    jgg_V.inherits = function (jgg_u, jgg_r) {
      jgg_u.super_ = jgg_r;
      jgg_u.prototype = jgg_V.create(jgg_r.prototype, {
        constructor: jgg_u
      });
    };
    jgg_V.delay = function (jgg_u, jgg_r) {
      var jgg_C = jgg_V.slice(arguments, 2);
      return setTimeout(function () {
        jgg_u.apply(this, jgg_C);
      }, jgg_r);
    };
    jgg_V.before = function (jgg_u, jgg_r) {
      return function () {
        if (jgg_u > 1) {
          jgg_u--;
          return jgg_r.apply(this, arguments);
        }
      };
    };
    jgg_V.once = function (jgg_u) {
      return jgg_V.before(2, jgg_u);
    };
    jgg_V.after = function (jgg_u, jgg_r) {
      return function () {
        return jgg_u > 1 ? void jgg_u-- : jgg_r.apply(this, arguments);
      };
    };
    jgg_V.throttle = function (jgg_u, jgg_r, jgg_C) {
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: true,
        trailing: true,
        maxWait: jgg_r
      }, jgg_C);
      return jgg_V.debounce(jgg_u, jgg_r, jgg_C);
    };
    jgg_V.debounce = function (jgg_u, jgg_r, jgg_C) {
      function jgg_z() {
        return !(jgg_G - jgg_Z > jgg_r) && !(jgg_I && jgg_G - jgg_q > jgg_I);
      }
      function jgg_d(jgg_Y, jgg_c, jgg_l) {
        jgg_Z = jgg_V.now();
        return jgg_Y.apply(jgg_c, jgg_l);
      }
      function jgg_H() {
        jgg_i && (clearTimeout(jgg_i), jgg_i = null);
      }
      function jgg_U() {
        jgg_G = jgg_V.now();
        var jgg_D = jgg_z();
        jgg_q = jgg_G;
        var jgg_l = this;
        var jgg_w = arguments;
        jgg_H();
        jgg_D ? jgg_C.trailing && (jgg_i = jgg_V.delay(function () {
          jgg_d(jgg_u, jgg_l, jgg_w);
        }, jgg_r)) : jgg_d(jgg_u, jgg_l, jgg_w);
      }
      jgg_r = jgg_r || 0;
      jgg_C = jgg_V.extend({
        leading: false,
        trailing: true
      }, jgg_C);
      var jgg_i;
      var jgg_I = jgg_C.maxWait;
      var jgg_Z = 0;
      var jgg_q = 0;
      var jgg_G = jgg_V.now();
      jgg_C.leading || (jgg_Z = jgg_G);
      jgg_U.cancel = jgg_H;
      return jgg_U;
    };
    jgg_y.Cache = jgg_T(126);
    jgg_V.memoize = jgg_y;
    jgg_V.wrap = function (jgg_u, jgg_r) {
      return function () {
        var jgg_C = [jgg_u];
        jgg_C.push.apply(jgg_C, arguments);
        return jgg_r.apply(this, jgg_C);
      };
    };
    jgg_V.curry = function (jgg_u) {
      function jgg_C(jgg_z) {
        return function () {
          var jgg_d = jgg_z.concat(jgg_V.slice(arguments));
          return jgg_d.length >= jgg_O ? (jgg_d.length = jgg_O, jgg_u.apply(this, jgg_d)) : jgg_C(jgg_d);
        };
      }
      var jgg_O = jgg_u.length;
      return jgg_C([]);
    };
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.data = {};
  }
  var jgg_h = jgg_T(4);
  var jgg_y = jgg_h.is;
  jgg_W.exports = jgg_V;
  var jgg_o = jgg_V.prototype;
  jgg_o.has = function (jgg_K) {
    return jgg_y.owns(this.data, jgg_K);
  };
  jgg_o.get = function (jgg_K) {
    return this.data[jgg_K];
  };
  jgg_o.set = function (jgg_K, jgg_u) {
    this.data[jgg_K] = jgg_u;
  };
  jgg_o.delete = function (jgg_K) {
    delete this.data[jgg_K];
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    function jgg_h(jgg_u, jgg_r) {
      jgg_u = jgg_y(jgg_u) || " ";
      var jgg_C = Math.floor(jgg_r / jgg_u.length) + 1;
      return jgg_X.repeat(jgg_u, jgg_C).slice(0, jgg_r);
    }
    function jgg_y(jgg_u) {
      return jgg_u || 0 == jgg_u ? jgg_u + "" : "";
    }
    jgg_X.tostr = jgg_X.toString = jgg_y;
    var jgg_o = jgg_X.indexOf;
    jgg_X.split = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.split(jgg_r, jgg_C);
    };
    jgg_X.capitalize = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1).toLowerCase();
    };
    jgg_X.upperFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toUpperCase() + jgg_u.substr(1);
    };
    jgg_X.lowerFirst = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      return jgg_u.charAt(0).toLowerCase() + jgg_u.substr(1);
    };
    jgg_X.camelCase = function (jgg_u) {
      jgg_u = jgg_y(jgg_u);
      var jgg_r = jgg_u.split(/[^\w]|_+/);
      jgg_r = jgg_X.map(jgg_r, function (jgg_C) {
        return jgg_X.capitalize(jgg_C);
      });
      return jgg_X.lowerFirst(jgg_r.join(""));
    };
    jgg_X.startsWith = function (jgg_u, jgg_r) {
      return 0 == jgg_o(jgg_u, jgg_r);
    };
    jgg_X.endsWith = function (jgg_u, jgg_r) {
      jgg_r += "";
      return jgg_r == jgg_X.slice(jgg_u, jgg_X.len(jgg_u) - jgg_X.len(jgg_r));
    };
    jgg_X.toLower = jgg_X.lower = function (jgg_u) {
      return jgg_y(jgg_u).toLowerCase();
    };
    jgg_X.toUpper = jgg_X.upper = function (jgg_u) {
      return jgg_y(jgg_u).toUpperCase();
    };
    jgg_X.repeat = function (jgg_u, jgg_r) {
      return jgg_X.map(jgg_X.range(jgg_r), function () {
        return jgg_u;
      }).join("");
    };
    jgg_X.padStart = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_h(jgg_C, jgg_O) + jgg_u;
    };
    jgg_X.padEnd = function (jgg_u, jgg_r, jgg_C) {
      jgg_u = jgg_y(jgg_u);
      jgg_r = jgg_r || 0;
      var jgg_O = jgg_r - jgg_u.length;
      return jgg_u + jgg_h(jgg_C, jgg_O);
    };
    var jgg_K = {
      "&": "&amp",
      "<": "&lt",
      ">": "&gt",
      "\"": "&quot",
      "'": "&#39"
    };
    jgg_X.escape = function (jgg_u) {
      return jgg_y(jgg_u).replace(/[&<>"']/g, function (jgg_r) {
        return jgg_K[jgg_r] || jgg_r;
      });
    };
    jgg_X.template = function (jgg_u) {
      function jgg_C(jgg_i) {
        var jgg_I = jgg_X.first(jgg_i);
        if ("=" === jgg_I || "-" === jgg_I) {
          var jgg_Z = jgg_X.slice(jgg_i, 1);
          "-" === jgg_I && (jgg_Z = "_.escape(" + jgg_Z + ")");
          jgg_z.push("ret += " + jgg_Z);
        } else {
          jgg_z.push(jgg_i);
        }
      }
      function jgg_O(jgg_i) {
        jgg_z.push("ret += \"" + jgg_i.replace(/('|"|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "\"");
      }
      var jgg_z = ["with(data) {var ret = \"\""];
      jgg_X.each(jgg_X.split(jgg_u, "<%"), function (jgg_i, jgg_I) {
        var jgg_Z = jgg_i.split("%>");
        return jgg_Z[1] ? (jgg_C(jgg_X.trim(jgg_Z[0])), jgg_O(jgg_Z[1])) : void jgg_O(jgg_Z[0]);
      });
      jgg_z.push("return ret}");
      var jgg_d = new Function("data", jgg_z.join("\n"));
      var jgg_H = {
        _: jgg_X
      };
      var jgg_U = function (jgg_i) {
        return jgg_d(jgg_X.extend({}, jgg_H, jgg_i));
      };
      return jgg_U;
    };
  };
}, function (jgg_W, jgg_a) {
  jgg_W.exports = function (jgg_X) {
    jgg_X.sum = function (jgg_h) {
      return jgg_X.reduce(jgg_h, function (jgg_y, jgg_o) {
        return jgg_y + jgg_o;
      }, 0);
    };
    jgg_X.max = function (jgg_h, jgg_y) {
      var jgg_o = -1;
      var jgg_K = -Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_u, jgg_r) {
        jgg_u = jgg_y(jgg_u);
        jgg_u > jgg_K && (jgg_K = jgg_u, jgg_o = jgg_r);
      });
      return jgg_o > -1 ? jgg_h[jgg_o] : jgg_K;
    };
    jgg_X.min = function (jgg_h, jgg_y) {
      var jgg_o = -1;
      var jgg_K = Infinity;
      jgg_y = jgg_y || jgg_X.identity;
      jgg_X.each(jgg_h, function (jgg_u, jgg_r) {
        jgg_u = jgg_y(jgg_u);
        jgg_u < jgg_K && (jgg_K = jgg_u, jgg_o = jgg_r);
      });
      return jgg_o > -1 ? jgg_h[jgg_o] : jgg_K;
    };
  };
}, function (jgg_W, jgg_a) {
  (function (jgg_X) {
    function jgg_V(jgg_K, jgg_u) {
      jgg_u = jgg_u || jgg_o;
      var jgg_r;
      var jgg_C = [];
      if (jgg_K && jgg_u.getElementsByTagName) {
        if (jgg_K += "", jgg_y.test(jgg_K)) {
          jgg_r = jgg_u.getElementsByTagName(jgg_K);
        } else {
          var jgg_O = jgg_K.substr(1);
          if (jgg_o == jgg_u && "#" == jgg_K.charAt(0) && jgg_y.test(jgg_O)) {
            var jgg_z = jgg_o.getElementById(jgg_O);
            if (jgg_z) {
              return [jgg_z];
            }
          } else {
            var jgg_d = jgg_a.custom || jgg_h;
            try {
              jgg_r = jgg_d(jgg_K, jgg_u);
            } catch (jgg_i) {}
          }
        }
        if (jgg_r) {
          for (var jgg_H = jgg_r.length || 0, jgg_U = 0; jgg_U < jgg_H; jgg_U++) {
            jgg_C.push(jgg_r[jgg_U]);
          }
        }
      }
      return jgg_C;
    }
    function jgg_h(jgg_K, jgg_u) {
      return jgg_u.querySelectorAll(jgg_K);
    }
    jgg_W.exports = jgg_a = jgg_V;
    var jgg_y = /^[-\w]+$/;
    var jgg_o = jgg_X.document;
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a) {
  function jgg_X(jgg_V) {
    jgg_V = jgg_V || 7;
    var jgg_h = Math.random().toString(35).substr(2, jgg_V);
    return jgg_a.prefix + jgg_h;
  }
  jgg_W.exports = jgg_a = jgg_X;
  jgg_a.prefix = "";
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_T(132);
  jgg_T(133);
  jgg_T(134);
  jgg_T(135);
  jgg_T(136);
  jgg_T(138);
  jgg_T(139);
  jgg_T(140);
  jgg_T(141);
  jgg_T(142);
  jgg_T(143);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    var jgg_y = jgg_T(107);
    var jgg_o = jgg_T(108);
    var jgg_K = jgg_T(118);
    var jgg_u = jgg_o.is;
    var jgg_r = "boolean number string function array date regexp object error".split(" ");
    jgg_y.extend({
      noop: jgg_o.noop,
      toArray: function (jgg_C, jgg_O) {
        return jgg_y.merge(jgg_O, jgg_C);
      },
      each: function (jgg_C, jgg_O) {
        jgg_o.each(jgg_C, function (jgg_z, jgg_d) {
          return jgg_O.call(jgg_z, jgg_d, jgg_z, jgg_C);
        });
        return jgg_C;
      },
      grep: jgg_o.filter,
      inArray: jgg_o.includes,
      isArray: jgg_u.arr,
      isEmptyObject: jgg_u.empty,
      isFunction: jgg_u.fn,
      isNumeric: jgg_u.num,
      isPlainObject: jgg_u.hash,
      isWindow: function (jgg_C) {
        return jgg_C == jgg_V;
      },
      makeArray: jgg_o.slice,
      map: jgg_o.map,
      merge: function (jgg_C, jgg_O) {
        jgg_C = jgg_C || [];
        var jgg_z = jgg_C.length || 0;
        jgg_o.each(jgg_O, function (jgg_d, jgg_H) {
          jgg_C.length++;
          jgg_C[jgg_z + jgg_H] = jgg_d;
        });
        return jgg_C;
      },
      now: jgg_o.now,
      parseHTML: jgg_K.html,
      parseJSON: jgg_K.json,
      parseXML: jgg_K.xml,
      proxy: jgg_o.bind,
      trim: jgg_o.trim,
      type: function (jgg_C) {
        var jgg_O = jgg_u._class(jgg_C);
        jgg_o.includes(jgg_r, jgg_O) || (jgg_O = "object");
        return jgg_O;
      }
    });
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_r, jgg_C, jgg_O) {
    jgg_r.addEventListener ? jgg_r.addEventListener(jgg_C, jgg_O, false) : jgg_r.attachEvent && jgg_r.attachEvent("on" + jgg_C, jgg_O);
  }
  function jgg_h(jgg_r, jgg_C, jgg_O) {
    jgg_r.removeEventListener ? jgg_r.removeEventListener(jgg_C, jgg_O, false) : jgg_r.detachEvent && jgg_r.detachEvent("on" + jgg_C, jgg_O);
  }
  var jgg_y = jgg_T(107);
  var jgg_o = jgg_T(108);
  var jgg_K = jgg_o.is;
  var jgg_u = "events";
  jgg_y.Event = function (jgg_r, jgg_C) {
    return this instanceof jgg_y.Event ? (jgg_r = jgg_r || {}, "string" == typeof jgg_r && (jgg_r = {
      type: jgg_r
    }), this.originalEvent = jgg_r, this.type = jgg_r.type, this.target = jgg_r.target || jgg_r.srcElement, void (jgg_C && jgg_y.extend(this, jgg_C))) : new jgg_y.Event(jgg_r, jgg_C);
  };
  jgg_y.extend({
    one: function (jgg_r, jgg_C, jgg_O, jgg_z, jgg_d) {
      if (jgg_K.fn(jgg_O)) {
        var jgg_H = jgg_o.once(function () {
          jgg_y.off(jgg_r, jgg_C, jgg_H);
          jgg_H = null;
          jgg_O.apply(this, arguments);
        });
        return jgg_y.on(jgg_r, jgg_C, jgg_H, jgg_z, jgg_d);
      }
    },
    on: function (jgg_r, jgg_C, jgg_O, jgg_z, jgg_d) {
      var jgg_I = jgg_y._data(jgg_r, jgg_u);
      var jgg_Z = jgg_C.split(".");
      jgg_C = jgg_Z[0];
      var jgg_i = jgg_Z[1];
      jgg_I || (jgg_I = {}, jgg_y._data(jgg_r, jgg_u, jgg_I));
      var jgg_Y = jgg_y._data(jgg_r, "handler");
      jgg_Y || (jgg_Y = function (jgg_c) {
        jgg_y.trigger(jgg_r, jgg_y.Event(jgg_c));
      }, jgg_y._data(jgg_r, "handler", jgg_Y));
      jgg_I[jgg_C] || (jgg_I[jgg_C] = [], jgg_V(jgg_r, jgg_C, jgg_Y));
      var jgg_q = jgg_I[jgg_C];
      var jgg_G = {
        handler: jgg_O,
        namespace: jgg_i,
        selector: jgg_d,
        type: jgg_C
      };
      jgg_q.push(jgg_G);
    },
    trigger: function (jgg_r, jgg_C) {
      var jgg_O = jgg_y._data(jgg_r, jgg_u);
      "string" == typeof jgg_C && (jgg_C = jgg_y.Event(jgg_C, {
        target: jgg_r
      }));
      var jgg_z = jgg_O[jgg_C.type];
      if (jgg_z) {
        jgg_z = jgg_z.slice();
        for (var jgg_d = jgg_z.length, jgg_H = 0; jgg_H < jgg_d; jgg_H++) {
          var jgg_U = jgg_z[jgg_H];
          var jgg_i = jgg_U.handler.call(jgg_r, jgg_C);
          false === jgg_i && (jgg_C = jgg_C.originalEvent || jgg_C, jgg_C.preventDefault ? jgg_C.preventDefault() : jgg_C.returnValue = false, jgg_C.stopPropagation && jgg_C.stopPropagation(), jgg_C.cancelBubble = true);
        }
      }
    },
    off: function (jgg_r, jgg_C, jgg_O) {
      var jgg_z = jgg_y._data(jgg_r, jgg_u);
      if (jgg_z) {
        if (jgg_C = jgg_C || "", jgg_C && "." != jgg_C.charAt(0)) {
          var jgg_d = jgg_C.split(".");
          var jgg_H = jgg_d[0];
          var jgg_U = jgg_d[1];
          var jgg_i = jgg_z[jgg_H];
          if (jgg_i) {
            for (var jgg_I = jgg_i.length - 1; jgg_I >= 0; jgg_I--) {
              var jgg_Z = jgg_i[jgg_I];
              var jgg_q = true;
              jgg_U && jgg_U != jgg_Z.namespace && (jgg_q = false);
              jgg_O && jgg_O != jgg_Z.handler && (jgg_q = false);
              jgg_q && jgg_i.splice(jgg_I, 1);
            }
            jgg_z[jgg_H].length || (jgg_h(jgg_r, jgg_H, jgg_y._data(jgg_r, "handler")), jgg_z[jgg_H] = null);
          }
        } else {
          for (var jgg_G in jgg_z) jgg_y.off(jgg_r, jgg_G + jgg_C, jgg_O);
        }
      }
    }
  });
  jgg_y.fn.extend({
    eventHandler: function (jgg_r, jgg_C, jgg_O) {
      return jgg_r ? (jgg_r = jgg_r.split(" "), this.each(function () {
        for (var jgg_d = 0; jgg_d < jgg_r.length; jgg_d++) {
          jgg_O(this, jgg_r[jgg_d], jgg_C);
        }
      })) : this.each(function () {
        jgg_O(this);
      });
    },
    on: function (jgg_r, jgg_C) {
      return this.eventHandler(jgg_r, jgg_C, jgg_y.on);
    },
    one: function (jgg_r, jgg_C) {
      return this.eventHandler(jgg_r, jgg_C, jgg_y.one);
    },
    off: function (jgg_r, jgg_C) {
      return this.eventHandler(jgg_r, jgg_C, jgg_y.off);
    },
    trigger: function (jgg_r, jgg_C) {
      return this.eventHandler(jgg_r, jgg_C, jgg_y.trigger);
    }
  });
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_h() {
      return jgg_C && "complete" == jgg_C.readyState ? (jgg_K.ctx = jgg_o, jgg_K.open()) : (jgg_o(jgg_C).on(jgg_u, jgg_y), void jgg_o(jgg_V).on(jgg_r, jgg_y));
    }
    function jgg_y() {
      jgg_o(jgg_V).off(jgg_u, jgg_y);
      jgg_o(jgg_C).off(jgg_r, jgg_y);
      jgg_K.ctx = jgg_o;
      jgg_K.open();
    }
    var jgg_o = jgg_T(107);
    var jgg_K = jgg_T(28)();
    var jgg_u = "DOMContentLoaded";
    var jgg_r = "load";
    var jgg_C = jgg_V.document;
    jgg_o.fn.extend({
      ready: function (jgg_O) {
        jgg_K.queue(jgg_O);
        return this;
      }
    });
    setTimeout(jgg_h);
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(107);
  var jgg_h = jgg_T(108);
  var jgg_y = jgg_h.is;
  jgg_V.fn.extend({
    toArray: function () {
      return jgg_V.toArray(this);
    },
    pushStack: function (jgg_o) {
      var jgg_K = jgg_V(jgg_o);
      jgg_K.prevObject = this;
      jgg_K.context = this.context;
      return jgg_K;
    },
    get: function (jgg_o) {
      return jgg_y.num(jgg_o) ? jgg_o > 0 ? this[jgg_o] : this.get(jgg_o + this.length) : this.toArray();
    },
    each: function (jgg_o) {
      jgg_h.each(this, function (jgg_K, jgg_u) {
        return jgg_o.call(jgg_K, jgg_u, jgg_K, this);
      });
      return this;
    },
    map: function (jgg_o) {
      var jgg_K = jgg_h.map(this, function (jgg_u, jgg_r) {
        return jgg_o.call(jgg_u, jgg_r, jgg_u, this);
      });
      return this.pushStack(jgg_K);
    },
    filter: function (jgg_o) {
      var jgg_K = jgg_h.filter(this, function (jgg_u, jgg_r) {
        return jgg_o.call(jgg_u, jgg_r, jgg_u, this);
      });
      return this.pushStack(jgg_K);
    },
    end: function () {
      return this.prevObject || jgg_V();
    },
    eq: function (jgg_o) {
      return jgg_o < 0 ? this.eq(jgg_o + this.length) : this.pushStack([this[jgg_o]]);
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    slice: function (jgg_o, jgg_K) {
      var jgg_u = jgg_h.slice(this, jgg_o, jgg_K);
      return this.pushStack(jgg_u);
    },
    find: function (jgg_o) {
      var jgg_K = jgg_h.map(this, function (jgg_u) {
        return jgg_V(jgg_o, jgg_u);
      });
      return this.pushStack(jgg_h.union.apply(jgg_h, jgg_K));
    }
  });
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    var jgg_y = jgg_T(108);
    var jgg_o = jgg_T(107);
    var jgg_K = jgg_T(137);
    jgg_T(130);
    jgg_y.is;
    var jgg_u = new jgg_K();
    var jgg_r = new jgg_K();
    var jgg_C = jgg_V.getComputedStyle || function (jgg_O) {
      return jgg_O && jgg_O.currentStyle ? jgg_O.currentStyle : {};
    };
    jgg_o.extend({
      expando: jgg_r.expando,
      access: function (jgg_O, jgg_z, jgg_d, jgg_H, jgg_U) {
        var jgg_i = 0;
        if (jgg_d && "object" == typeof jgg_d) {
          for (jgg_i in jgg_d) jgg_o.access(jgg_O, jgg_z, jgg_i, jgg_d[jgg_i], true);
        } else {
          if (undefined === jgg_H) {
            var jgg_I;
            if (jgg_O[0] && (jgg_I = jgg_z(jgg_O[0], jgg_d)), !jgg_U) {
              return jgg_I;
            }
          } else {
            for (jgg_i = 0; jgg_i < jgg_O.length; jgg_i++) {
              jgg_z(jgg_O[jgg_i], jgg_d, jgg_H);
            }
          }
        }
        return jgg_O;
      },
      attr: function (jgg_O, jgg_z, jgg_d) {
        return undefined === jgg_d ? jgg_O.getAttribute(jgg_z) : null === jgg_d ? jgg_O.removeAttribute(jgg_z) : void jgg_O.setAttribute(jgg_z, "" + jgg_d);
      },
      text: function (jgg_O, jgg_z, jgg_d) {
        if (undefined !== jgg_d) {
          return jgg_O.textContent = "" + jgg_d;
        }
        var jgg_i = jgg_O.nodeType;
        if (3 == jgg_i || 4 == jgg_i) {
          return jgg_O.nodeValue;
        }
        if ("string" == typeof jgg_O.textContent) {
          return jgg_O.textContent;
        }
        var jgg_I = "";
        for (jgg_O = jgg_O.firstChild; jgg_O; jgg_O = jgg_O.nextSibling) {
          jgg_I += jgg_o.text(jgg_O);
        }
        return jgg_I;
      },
      html: function (jgg_O, jgg_z, jgg_d) {
        return undefined === jgg_d ? jgg_O.innerHTML : void (jgg_O.innerHTML = "" + jgg_d);
      },
      prop: function (jgg_O, jgg_z, jgg_d) {
        return undefined === jgg_d ? jgg_O[jgg_z] : void (jgg_O[jgg_z] = jgg_d);
      },
      css: function (jgg_O, jgg_z, jgg_d) {
        var jgg_H = jgg_O.style || {};
        if (undefined === jgg_d) {
          var jgg_U = jgg_H[jgg_z];
          return jgg_U ? jgg_U : jgg_C(jgg_O, null)[jgg_z];
        }
        jgg_H[jgg_z] = jgg_d;
      },
      data: function (jgg_O, jgg_z, jgg_d) {
        if (undefined !== jgg_d) {
          jgg_u.set(jgg_O, jgg_z, jgg_d);
        } else {
          if (!jgg_z || "object" != typeof jgg_z) {
            return jgg_z ? jgg_u.get(jgg_O, jgg_z) : jgg_u.getData(jgg_O, true);
          }
          for (var jgg_H in jgg_z) jgg_o.data(jgg_O, jgg_H, jgg_z[jgg_H]);
        }
      },
      _data: function (jgg_O, jgg_z, jgg_d) {
        if (undefined !== jgg_d) {
          jgg_r.set(jgg_O, jgg_z, jgg_d);
        } else {
          if (!jgg_z || "object" != typeof jgg_z) {
            return jgg_r.get(jgg_O, jgg_z);
          }
          for (var jgg_H in jgg_z) jgg_o._data(jgg_O, jgg_H, jgg_z[jgg_H]);
        }
      },
      removeData: function (jgg_O, jgg_z) {
        jgg_u.remove(jgg_O, jgg_z);
      }
    });
    jgg_o.fn.extend({
      text: function (jgg_O) {
        return jgg_o.access(this, jgg_o.text, null, jgg_O);
      },
      html: function (jgg_O) {
        return jgg_o.access(this, jgg_o.html, null, jgg_O);
      },
      attr: function (jgg_O, jgg_z) {
        return jgg_o.access(this, jgg_o.attr, jgg_O, jgg_z);
      },
      prop: function (jgg_O, jgg_z) {
        return jgg_o.access(this, jgg_o.prop, jgg_O, jgg_z);
      },
      css: function (jgg_O, jgg_z) {
        return jgg_o.access(this, jgg_o.css, jgg_O, jgg_z);
      },
      data: function (jgg_O, jgg_z) {
        return jgg_o.access(this, jgg_o.data, jgg_O, jgg_z);
      },
      _data: function (jgg_O, jgg_z) {
        return jgg_o.access(this, jgg_o.data, jgg_O, jgg_z);
      },
      removeData: function (jgg_O) {
        return jgg_o.access(this, jgg_o.removeData, jgg_O, undefined, true);
      }
    });
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    this.expando = jgg_h();
    this.cache = [null];
  }
  var jgg_h = jgg_T(130);
  jgg_W.exports = jgg_V;
  var jgg_y = jgg_V.prototype;
  jgg_y.get = function (jgg_o, jgg_K) {
    var jgg_u = this.getData(jgg_o);
    return null == jgg_K ? jgg_u : jgg_u[jgg_K];
  };
  jgg_y.set = function (jgg_o, jgg_K, jgg_u) {
    var jgg_r = this.getData(jgg_o, true);
    jgg_r[jgg_K] = jgg_u;
    return jgg_o;
  };
  jgg_y.remove = function (jgg_o, jgg_K) {
    if (undefined === jgg_K) {
      this.discard(jgg_o);
    } else {
      var jgg_u = this.getData(jgg_o);
      delete jgg_u[jgg_K];
    }
    return jgg_o;
  };
  jgg_y.getData = function (jgg_o, jgg_K) {
    var jgg_u = {};
    if (jgg_o) {
      var jgg_r = jgg_o[this.expando];
      var jgg_C = this.cache;
      if (jgg_r) {
        return jgg_C[jgg_r];
      }
      jgg_K && (jgg_o[this.expando] = jgg_C.length, jgg_C.push(jgg_u));
    }
    return jgg_u;
  };
  jgg_y.discard = function (jgg_o) {
    jgg_o && jgg_o[this.expando] && (jgg_o[this.expando] = undefined);
  };
}, function (jgg_W, jgg_a, jgg_T) {
  jgg_T(108);
  var jgg_V = jgg_T(107);
  jgg_V.buildFragment = function (jgg_h, jgg_y) {
    jgg_y = jgg_y || document;
    for (var jgg_o, jgg_K = jgg_y.createDocumentFragment(), jgg_u = 0; jgg_o = jgg_h[jgg_u++];) {
      var jgg_r = [];
      if ("string" == typeof jgg_o) {
        if (jgg_o.indexOf("<") == -1) {
          jgg_r.push(jgg_y.createTextNode(jgg_o));
        } else {
          var jgg_C = document.createElement("div");
          jgg_C.innerHTML = jgg_o;
          jgg_V.toArray(jgg_C.childNodes, jgg_r);
        }
      } else {
        "object" == typeof jgg_o && (jgg_o.nodeType ? jgg_r.push(jgg_o) : jgg_V.toArray(jgg_o, jgg_r));
      }
    }
    for (var jgg_O, jgg_u = 0; jgg_O = jgg_r[jgg_u++];) {
      jgg_K.appendChild(jgg_O);
    }
    return jgg_K;
  };
  jgg_V.fn.extend({
    domManip: function (jgg_h, jgg_y) {
      return this.each(function () {
        var jgg_o = jgg_V.buildFragment(jgg_h);
        jgg_y.call(this, jgg_o);
      });
    },
    remove: function () {
      return this.domManip(arguments, function () {
        this.parentNode && this.parentNode.removeChild(this);
      });
    },
    before: function () {
      return this.domManip(arguments, function (jgg_h) {
        jgg_h.parentNode && jgg_h.parentNode.insertBefore(jgg_h, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (jgg_h) {
        jgg_h.parentNode && jgg_h.parentNode.insertBefore(jgg_h, this.nextSibling);
      });
    },
    append: function () {
      return this.domManip(arguments, function (jgg_h) {
        this.appendChild(jgg_h);
      });
    }
  });
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(107);
  var jgg_h = jgg_T(108);
  var jgg_y = "display";
  jgg_h.each("show hide toggle".split(" "), function (jgg_o) {
    jgg_V.fn[jgg_o] = function () {
      return this.each(function (jgg_u, jgg_r) {
        var jgg_C = jgg_o;
        var jgg_O = jgg_V.css(jgg_r, jgg_y);
        var jgg_z = "none" == jgg_O;
        if ("toggle" == jgg_o && (jgg_C = "hide", jgg_z && (jgg_C = "show")), "show" == jgg_C && jgg_z) {
          var jgg_d = jgg_V._data(jgg_r, jgg_y) || "";
          jgg_V.css(jgg_r, jgg_y, jgg_d);
        } else {
          "hide" != jgg_C || jgg_z || (jgg_V._data(jgg_r, jgg_y, jgg_O), jgg_V.css(jgg_r, jgg_y, "none"));
        }
      });
    };
  });
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y(jgg_H, jgg_U, jgg_i) {
      function jgg_Z(jgg_c) {
        if (jgg_Y) {
          if (jgg_i) {
            var jgg_l = {
              status: 200
            };
            jgg_c && (jgg_l = {
              status: 0
            });
            jgg_i(jgg_c, jgg_l);
          }
          jgg_Y.onload = jgg_Y.onerror = jgg_Y.onreadystatechange = null;
          jgg_G.removeChild(jgg_Y);
          jgg_Y = null;
        }
      }
      function jgg_q() {
        jgg_Y.async = true;
        jgg_Y.src = jgg_H;
        jgg_Y.onload = jgg_Y.onerror = jgg_Y.onreadystatechange = function (jgg_c) {
          var jgg_l = jgg_Y.readyState;
          jgg_c && "error" == jgg_c.type ? jgg_Z("error") : jgg_l && !/loaded|complete/.test(jgg_l) || jgg_Z(null);
        };
        jgg_G.appendChild(jgg_Y);
      }
      var jgg_G = jgg_C("head")[0];
      var jgg_Y = document.createElement("script");
      return {
        abort: function () {
          jgg_i = null;
          jgg_Z();
        },
        send: jgg_q
      };
    }
    function jgg_o(jgg_H, jgg_U, jgg_i) {
      "function" == typeof jgg_U && (jgg_i = jgg_U, jgg_U = {});
      var jgg_q;
      var jgg_G = false;
      var jgg_Y = function (jgg_B, jgg_R, jgg_L) {
        jgg_G || (jgg_i = jgg_i || jgg_C.noop, jgg_G = true, jgg_i(jgg_B, jgg_R, jgg_L));
      };
      var jgg_c = jgg_U.dataType || "text";
      var jgg_l = false;
      if ("jsonp" == jgg_c) {
        jgg_l = true;
        var jgg_w = jgg_U.jsonp || jgg_d.jsonp;
        var jgg_D = jgg_U.jsonpCallback || [jgg_C.expando, jgg_C.now(), Math.random()].join("_");
        jgg_D = jgg_D.replace(/[^\w|$]/g, "");
        var jgg_m = jgg_w + "=?";
        var jgg_v = jgg_C.extend({}, jgg_U.data);
        jgg_H.indexOf(jgg_m) != -1 ? jgg_H.replace(jgg_m, jgg_w + "=" + jgg_D) : jgg_v[jgg_w] = jgg_D;
        jgg_U.cache || (jgg_v._ = jgg_C.now());
        jgg_H = jgg_u(jgg_H, jgg_v);
        jgg_c = "script";
        jgg_V[jgg_D] = function (jgg_B) {
          jgg_Y(null, {
            status: 200
          }, jgg_B);
          jgg_V[jgg_D] = null;
        };
      }
      "script" == jgg_c ? jgg_q = jgg_y(jgg_H, jgg_U, jgg_l ? null : jgg_Y) : /html|text/.test(jgg_c) && (jgg_q = jgg_K(jgg_H, jgg_U, jgg_Y));
      jgg_q.send();
      jgg_U.timeout && setTimeout(function () {
        jgg_q.abort();
        jgg_Y("timeout", {
          status: 0,
          readyState: 0,
          statusText: "timeout"
        });
        jgg_l && (window[jgg_D] = jgg_C.noop);
      }, jgg_U.timeout);
    }
    function jgg_K(jgg_H, jgg_U, jgg_i) {
      function jgg_Z() {
        if (jgg_G) {
          var jgg_m = jgg_U.type || "GET";
          jgg_H = jgg_u(jgg_H, jgg_U.data);
          jgg_G.open(jgg_m, jgg_H, !jgg_i.async);
          jgg_O in jgg_G && (jgg_z.cors = true, jgg_G[jgg_O] = true);
          var jgg_D = jgg_U.headers;
          if (jgg_D) {
            for (var jgg_w in jgg_D) jgg_G.setRequestHeader(jgg_w, jgg_D[jgg_w]);
          }
          jgg_G.send(jgg_U.data || null);
          var jgg_v = function () {
            jgg_v && 4 === jgg_G.readyState && (jgg_v = undefined, jgg_i && jgg_i(null, jgg_G, jgg_G.responseText));
          };
          false === jgg_U.async ? jgg_v() : 4 === jgg_G.readyState ? setTimeout(jgg_v) : jgg_G.onreadystatechange = jgg_v;
        }
      }
      function jgg_q() {
        jgg_G && (jgg_i = null, jgg_G.abort());
      }
      var jgg_G = jgg_d.xhr();
      return {
        send: jgg_Z,
        abort: jgg_q
      };
    }
    function jgg_u(jgg_H, jgg_U) {
      if (jgg_U = jgg_r.stringify(jgg_U)) {
        -1 == jgg_H.indexOf("?") && (jgg_H += "?");
        var jgg_i = jgg_H.charAt(jgg_H.length - 1);
        "&" != jgg_i && "?" != jgg_i && (jgg_H += "&");
        jgg_H += jgg_U;
      }
      return jgg_H;
    }
    var jgg_r = jgg_T(26);
    var jgg_C = jgg_T(107);
    jgg_T(130);
    var jgg_O = "withCredentials";
    var jgg_z = {};
    jgg_C.support = jgg_z;
    var jgg_d = {
      xhr: function () {
        try {
          return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        } catch (jgg_H) {}
      },
      jsonp: "callback"
    };
    jgg_C.ajaxSetting = jgg_d;
    jgg_C.ajax = function (jgg_H) {
      var jgg_U = {};
      jgg_H = jgg_H || {};
      jgg_o(jgg_H.url, jgg_H, function (jgg_i, jgg_I, jgg_Z) {
        jgg_I = jgg_I || {};
        var jgg_Y = {
          status: jgg_I.status,
          statusText: jgg_I.statusText,
          readyState: jgg_I.readyState
        };
        jgg_C.extend(jgg_U, jgg_Y);
        var jgg_c = "success";
        jgg_i || 200 != jgg_U.status ? (jgg_c = "error", "timeout" == jgg_i && (jgg_c = "timeout"), jgg_H.error && jgg_H.error(jgg_U, jgg_c, jgg_I.statusText)) : jgg_H.success && jgg_H.success(jgg_Z || jgg_I.responseText, jgg_c, jgg_U);
        jgg_H.complete && jgg_H.complete(jgg_U, jgg_c);
      });
      return jgg_U;
    };
    jgg_C.each(["get", "post"], function (jgg_H, jgg_U) {
      jgg_C[jgg_U] = function (jgg_I, jgg_Z, jgg_q, jgg_G) {
        "function" == typeof jgg_Z && (jgg_G = jgg_q, jgg_q = jgg_Z, jgg_Z = undefined);
        jgg_C.ajax({
          url: jgg_I,
          type: jgg_U,
          dataType: jgg_G,
          data: jgg_Z,
          success: jgg_q
        });
      };
    });
  }).call(jgg_a, function () {
    return this;
  }());
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(107);
  var jgg_h = jgg_T(108);
  jgg_h.each("width height".split(" "), function (jgg_y) {
    jgg_h.each(["inner", "outer", ""], function (jgg_K) {
      var jgg_r = jgg_y;
      var jgg_C = jgg_y.charAt(0).toUpperCase() + jgg_y.substr(1);
      jgg_K && (jgg_r = jgg_K + jgg_C);
      jgg_V.fn[jgg_r] = function () {
        var jgg_O = this[0];
        if (jgg_O) {
          var jgg_z = 0;
          jgg_z = "outer" == jgg_K ? jgg_O["offset" + jgg_C] : jgg_O["offset" + jgg_C];
          return parseFloat(jgg_z) || 0;
        }
      };
    });
  });
  jgg_V.fn.offset = function () {
    var jgg_y = this[0];
    if (jgg_y) {
      var jgg_o = jgg_y.getBoundingClientRect();
      return jgg_h.only(jgg_o, "left top");
    }
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_u) {}
  function jgg_h(jgg_u) {
    return jgg_y.trim(jgg_u.className).split(/\s+/);
  }
  var jgg_y = jgg_T(108);
  var jgg_o = jgg_T(107);
  var jgg_K = jgg_V.prototype;
  jgg_y.extend(jgg_K, {
    add: function () {
      var jgg_u = jgg_h(this);
      this.className = jgg_y.union(jgg_u, arguments).join(" ");
    },
    remove: function () {
      var jgg_u = jgg_h(this);
      this.className = jgg_y.difference(jgg_u, arguments).join(" ");
    },
    contains: function (jgg_u) {
      return jgg_y.includes(jgg_h(this), jgg_u);
    },
    toggle: function (jgg_u, jgg_r) {
      var jgg_C = jgg_K.contains.call(this, jgg_u);
      var jgg_O = "add";
      1 != jgg_r && (jgg_C || 0 == jgg_r) && (jgg_O = "remove");
      jgg_K[jgg_O].call(this, jgg_u);
    }
  });
  jgg_y.each("add remove toggle".split(" "), function (jgg_u) {
    jgg_o.fn[jgg_u + "Class"] = function () {
      var jgg_r = arguments;
      return this.each(function () {
        jgg_K[jgg_u].apply(this, jgg_r);
      });
    };
  });
  jgg_o.fn.hasClass = function (jgg_u) {
    return jgg_y.every(this, function (jgg_r) {
      return jgg_K.contains.call(jgg_r, jgg_u);
    });
  };
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V(jgg_K) {
    return jgg_h.union.apply(null, jgg_K);
  }
  var jgg_h = jgg_T(108);
  var jgg_y = jgg_T(107);
  var jgg_o = {
    children: function (jgg_K) {
      for (var jgg_u = [], jgg_r = jgg_K.firstChild; jgg_r; jgg_r = jgg_r.nextSibling) {
        1 == jgg_r.nodeType && jgg_u.push(jgg_r);
      }
      return jgg_u;
    },
    parent: function (jgg_K) {
      return jgg_K.parentNode;
    }
  };
  jgg_h.each("children parent".split(" "), function (jgg_K) {
    jgg_y.fn[jgg_K] = function () {
      return jgg_V(jgg_h.map(this, function (jgg_r) {
        return jgg_o[jgg_K].apply(null, arguments);
      }));
    };
  });
},,,,,,,,,,,, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    window._smConf = {
      organization: "BsHKz7OMBibZYAoy3ZCA",
      staticHost: "report.passport.360.cn",
      apiHost: "report.passport.360.cn",
      apiPath: ""
    };
    var jgg_K = function () {
      var jgg_C = _smConf.staticHost + "/static2";
      var jgg_O = "https:" === document.location.protocol;
      var jgg_z = jgg_O ? "https://" : "http://";
      var jgg_d = "/fpv2.js";
      var jgg_H = jgg_z + _smConf.staticHost + jgg_d;
      var jgg_U = navigator.userAgent.toLowerCase();
      var jgg_i = /windows\s(?:nt\s5.1)|(?:xp)/.test(jgg_U);
      var jgg_I = /msie\s[678]\.0/.test(jgg_U);
      jgg_O && jgg_i && jgg_I && (jgg_H = jgg_z + jgg_C + jgg_d);
      return jgg_H;
    }();
    var jgg_u = document.createElement("script");
    var jgg_r = document.getElementsByTagName("script")[0];
    jgg_u.src = jgg_K;
    jgg_r.parentNode.insertBefore(jgg_u, jgg_r);
  }
  var jgg_h = jgg_T(14).getLogger("shumei");
  var jgg_y = false;
  jgg_a.load = function () {
    jgg_y || (jgg_y = true, jgg_h.debug("load"), jgg_V());
  };
  jgg_a.getShumeiDeviceId = function () {
    var jgg_o;
    try {
      jgg_o = SMSdk.getDeviceId();
    } catch (jgg_K) {
      jgg_o = "";
    }
    return jgg_o;
  };
},,, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function () {
      var jgg_r = jgg_T(14).getLogger("core");
      var jgg_C = jgg_T(159);
      var jgg_O = jgg_T(26);
      var jgg_z = jgg_T(40);
      var jgg_d = jgg_T(105);
      jgg_r.sdk.prefix = "quc:jssdk:";
      window.QHPass = {
        VERSION: "7.3.1",
        $: jQuery,
        _: jgg_V,
        qs: jgg_O,
        Url: jgg_z,
        utils: {},
        plugin: {},
        ui: {},
        tool: jgg_C,
        log: jgg_r.getLogger("qhpass")
      };
      var jgg_K = window.QHPass;
      jgg_K.version = jgg_K.VERSION;
      jgg_r.debug("version", jgg_K.version);
      jgg_K.isI360 = function () {
        return "i.360.cn" == location.hostname;
      };
      jgg_K.DEBUG = false;
      var jgg_u = jgg_T(163);
      jgg_V.includes(["i.360.cn", "e.360.cn"], location.host) && jgg_u.init({
        id: 360,
        uin: "crash",
        random: 1,
        repeat: 2,
        url: "//i.360.cn/clogo.gif",
        offlineLog: false
      });
      window.QUC = window.QUC || {};
      QUC.t6 = +new Date();
      jgg_K.init = function (jgg_H) {
        window.QUC = window.QUC || {};
        QUC.t7 = +new Date();
        jgg_r.debug("init", jgg_H);
        var jgg_i = jgg_K.$;
        if ("string" == typeof jgg_H && (jgg_H = {
          src: jgg_H
        }), jgg_i.isPlainObject(jgg_H) && jgg_K.setConfig(jgg_H), !jgg_K._isInit) {
          !jgg_K.getConfig("disableSecurityCheck");
          var jgg_q = jgg_T(164);
          jgg_q = jgg_q.replace(/__now__/g, jgg_V.now());
          var jgg_G = jgg_K.getConfig("primaryColor");
          jgg_G && (jgg_q = jgg_q.replace(/#00D092/gi, jgg_G));
          jgg_d.addStyle(jgg_q);
          jgg_K._isInit = true;
          jgg_K.events.trigger("init.core");
          jgg_K.events.on("afterShow.* DOMUpdated.*", function (jgg_Y, jgg_c) {
            setTimeout(function () {
              jgg_K.utils.initPlaceholder(jgg_i(jgg_c).find("[placeholder]"));
              jgg_r.debug("try add placeholder");
            }, 0);
          });
          jgg_C.bindGlobalEvent();
          jgg_K.utils.getMidAndAsc();
        }
      };
    }();
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V, jgg_h) {
    var jgg_o = jgg_T(14).getLogger("tool");
    var jgg_K = jgg_T(104);
    var jgg_u = jgg_T(40);
    var jgg_r = jgg_T(160);
    var jgg_C = jgg_a;
    jgg_C.bindGlobalEvent = jgg_V.once(function () {
      var jgg_z = $(document);
      jgg_z.on("click", function () {
        $(".quc-option-wrapper").hide();
      });
      jgg_z.on("click", ".quc-input-zone", function (jgg_d) {
        $(".quc-mobile-Statelist").toggle();
        return false;
      });
      jgg_z.on("click", ".quc-select", function () {
        $(this).find(".quc-option-wrapper").toggle();
        return false;
      });
    });
    jgg_C.initMobileStates = function (jgg_O) {
      var jgg_d = jgg_O;
      jgg_d.model.prepareMobileState().then(function (jgg_H) {
        function jgg_i(jgg_G) {
          var jgg_Y = jgg_V.find(jgg_Z, function (jgg_l) {
            return jgg_l.zone === jgg_G;
          });
          if (jgg_Y) {
            var jgg_c = jgg_d.$el.find(".quc-activeState");
            jgg_c.text(jgg_Y.zone).data("quc-area-code", jgg_Y.zone);
            jgg_c.parents(".quc-field").find("input").data({
              regExp: jgg_Y.pattern,
              areaCode: jgg_Y.zone
            });
          }
        }
        var jgg_I = jgg_d.$el.find(".quc-mobile-Statelist");
        var jgg_Z = jgg_H.data;
        jgg_V.each(jgg_Z, function (jgg_G) {
          var jgg_Y = $("<li>");
          jgg_Y.addClass("quc-option");
          jgg_Y.data("areaCode", jgg_G.zone);
          var jgg_c = $("<span>").text(jgg_G.zone);
          var jgg_l = $("<span>").addClass("quc-right").text(jgg_G.state);
          jgg_Y.append(jgg_l).append(jgg_c);
          jgg_I.append(jgg_Y);
        });
        jgg_I.on("click", ".quc-option", function (jgg_G) {
          var jgg_Y = $(this);
          var jgg_c = jgg_Y.data("areaCode");
          jgg_i(jgg_c);
        });
        var jgg_q = jgg_V.first(jgg_Z);
        jgg_q && jgg_i(jgg_q.zone);
        jgg_d.$el.find(".quc-list-item").eq(0).click();
        jgg_d.$el.find(".quc-mobile-Statelist").hide();
      }, function (jgg_H) {
        jgg_d.model.trigger("invalid", jgg_H);
      });
    };
    jgg_C.initView = function (jgg_O) {
      function jgg_d(jgg_I) {
        var jgg_Z = jgg_I.parents(".quc-field");
        jgg_C.setFieldStatus(jgg_Z);
        jgg_C.clearTip(jgg_U);
      }
      function jgg_H(jgg_I) {
        var jgg_Z = QHPass.utils.getErrorType(jgg_I);
        "mobile" === jgg_Z && "signIn" === jgg_O.model.name && QHPass.getConfig("signIn.normal.onlyMobile") && (jgg_Z = "userName");
        var jgg_q = jgg_U.find("[name=" + jgg_Z + "]");
        var jgg_G = jgg_q.parents(".quc-field");
        return jgg_G;
      }
      var jgg_U = jgg_O.$el;
      var jgg_i = $("<input>")[0];
      jgg_U.on("submit", ".quc-form", function () {
        var jgg_v = $(this);
        var jgg_M = jgg_U.find("[type=submit]");
        jgg_C.showButtonLoading(jgg_M);
        jgg_O.model.one("invalid", function () {
          jgg_C.clearButtonLoading(jgg_M);
        });
        var jgg_D = jgg_v.serializeArray();
        var jgg_m = {};
        jgg_V.each(jgg_D, function (jgg_L) {
          jgg_m[jgg_L.name] = jgg_L.value;
        });
        jgg_v.find("[type=checkbox]").each(function () {
          var jgg_L = $(this);
          jgg_m[jgg_L.attr("name")] = jgg_L.prop("checked");
        });
        var jgg_R = jgg_U.find(".quc-activeState");
        if (jgg_R[0]) {
          var jgg_G = jgg_R.parents(".quc-field");
          var jgg_Y = jgg_G.find("input");
          var jgg_c = jgg_Y.data("regExp");
          var jgg_l = jgg_Y.data("areaCode");
          var jgg_w = {
            mobileNumber: jgg_Y.val(),
            regExp: jgg_c,
            areaCode: jgg_l
          };
          jgg_m.mobile = jgg_w;
        }
        var jgg_B = !!jgg_U.find("[name=captcha]:visible")[0];
        jgg_m.isNeedCheckCaptcha = jgg_B;
        var jgg_q = !!jgg_U.find("[name=captcha-slide]:visible")[0];
        jgg_m.isNeedCheckCaptchaSlide = jgg_q;
        jgg_o.debug("submit", jgg_m);
        jgg_V.forIn(jgg_m, function (jgg_L, jgg_f) {
          jgg_O.model.set(jgg_f, jgg_L);
        });
        try {
          jgg_O.model.submit();
        } catch (jgg_L) {
          jgg_o.error("submit crash", jgg_L.message);
        }
        return false;
      }).on(null === jgg_i.oninput ? "input" : "keyup", "input", function () {
        jgg_d($(this));
      }).on("change", ":checkbox", function () {
        jgg_d($(this));
      });
      jgg_O.model.on("invalid", function (jgg_I, jgg_Z) {
        console.log("invalid");
        jgg_C.clearTip(jgg_U);
        jgg_Z = jgg_Z || {};
        var jgg_q;
        var jgg_G = QHPass.utils.getErrorType(jgg_Z.errno);
        var jgg_Y = jgg_Z.errmsg;
        var jgg_c = jgg_Z.field;
        jgg_Z.userinfo && jgg_Z.userinfo.userRisk && (jgg_q = jgg_Z.userinfo.userRisk.frontOp);
        jgg_V.isEmpty(jgg_Z.field) && (jgg_c = jgg_H(jgg_Z.errno));
        jgg_c[0] ? "captcha-slide" === jgg_G || "account-risk" == jgg_G && jgg_q == jgg_r.FRONT_OP.doubleCheck || jgg_C.setFieldStatus(jgg_c, "error", jgg_Y) : "captcha-slide" === jgg_G || "account-risk" == jgg_G && jgg_q == jgg_r.FRONT_OP.doubleCheck || "is-agree" === jgg_G || jgg_C.showTipError(jgg_Y, jgg_U);
      });
      jgg_O.model.on("afterShow.changeType", function () {
        jgg_C.clearTip(jgg_U);
      });
    };
    jgg_C.setFieldStatus = function (jgg_O, jgg_z, jgg_d) {
      var jgg_H = "quc-form-item-error";
      var jgg_U = "quc-form-item-has-error";
      if (jgg_O.removeClass(jgg_U), jgg_O.find("." + jgg_H).remove(), "error" === jgg_z) {
        jgg_O.addClass(jgg_U).show();
        var jgg_i = $("<div>").addClass(jgg_H);
        jgg_i.html(jgg_d);
        jgg_O.find(".quc-form-item-content").append(jgg_i);
      }
    };
    jgg_C.gotoPage = function (jgg_O) {
      jgg_o.debug("change location", jgg_O);
      location.href = jgg_O;
    };
    jgg_C.showTipSuccess = function (jgg_O, jgg_z) {
      jgg_C.clearTip(jgg_z);
      var jgg_d = $(jgg_z).find(".quc-tip");
      jgg_O && (jgg_d.addClass("quc-tip-success"), jgg_d.append(jgg_O).show());
    };
    jgg_C.showTipError = function (jgg_O, jgg_z) {
      jgg_C.clearTip(jgg_z);
      var jgg_d = $(jgg_z).find(".quc-tip");
      jgg_O && (jgg_d.addClass("quc-tip-error"), jgg_d.append("<i class=\"quc-icon quc-icon-warning\">&#xe696;</i>").append(jgg_O).show());
    };
    jgg_C.clearTip = function (jgg_O) {
      var jgg_z = $(jgg_O).find(".quc-tip");
      jgg_z.empty().removeClass("quc-tip-error").removeClass("quc-tip-success").hide();
    };
    jgg_C.showButtonLoading = function (jgg_O) {
      $(jgg_O).prop("disabled", true);
      var jgg_z = $(jgg_O).val();
      $(jgg_O).val(jgg_z + "中...");
    };
    jgg_C.clearButtonLoading = function (jgg_O) {
      $(jgg_O).prop("disabled", false);
      var jgg_z = $(jgg_O).val();
      $(jgg_O).val(jgg_z.replace("中...", ""));
    };
    jgg_C.tryHandleAbnormalPassword = function (jgg_O, jgg_z) {
      return new jgg_h(function (jgg_H, jgg_U) {
        if (jgg_O) {
          var jgg_I = jgg_O.weakInfo;
          var jgg_Z = jgg_O.frontOp;
          if (jgg_Z == jgg_r.FRONT_OP.warnModifyPwd && (jgg_I = {
            frontOp: jgg_Z
          }), jgg_I) {
            if (jgg_z = jgg_I.password || jgg_z) {
              var jgg_q = QHPass.validate.checkPasswordFrontendSync({
                password: jgg_z
              });
              jgg_I.checkResult = jgg_q;
              jgg_I.password = jgg_z;
              jgg_q.reason && (jgg_I.isWeak = true);
            }
            jgg_o.debug("weak info", jgg_I);
            var jgg_G = jgg_I.isLeak && jgg_I.noticeWhenLeak;
            var jgg_Y = jgg_I.isWeak && jgg_I.noticeWhenWeak;
            if (jgg_I.ignoreWeak && (jgg_Y = false), jgg_G || jgg_Y || jgg_Z == jgg_r.FRONT_OP.warnModifyPwd) {
              var jgg_m;
              var jgg_v = {
                onconfirm: function () {
                  jgg_o.debug("confirm");
                  jgg_m.hide(true);
                  jgg_H({
                    shouldChangePassword: true
                  });
                },
                oncancel: function () {
                  jgg_o.debug("cancel");
                  jgg_m.hide(true);
                  return jgg_Z == jgg_r.FRONT_OP.warnModifyPwd ? jgg_H() : void (jgg_G ? jgg_I.limitWhenLeak ? jgg_U(new Error("user reject change password and not login")) : jgg_H() : jgg_Y && (jgg_I.limitWhenWeak ? jgg_U(new Error("user reject change password and not login")) : jgg_H()));
                },
                confirmButtonText: jgg_K.t("修改密码"),
                cancelButtonText: jgg_K.t("取消"),
                title: jgg_K.t("账号异常"),
                content: jgg_K.t("weak password warning")
              };
              jgg_G && (jgg_v.content = jgg_K.t("leak password warning"));
              var jgg_w = jgg_T(161);
              jgg_m = new QHPass.utils.Panel({
                type: "message",
                title: jgg_v.title,
                content: jgg_w,
                status: "warning"
              });
              var jgg_D = jgg_m.$el;
              jgg_D.find(".quc-panel-message-inner").html("<i class=\"quc-icon quc-icon-sad\"></i>" + jgg_v.content);
              jgg_D.find(".quc-panel-close").on("click", jgg_v.oncancel);
              jgg_D.find(".quc-button-cancel").text(jgg_v.cancelButtonText).on("click", jgg_v.oncancel);
              jgg_D.find(".quc-button-confirm").text(jgg_v.confirmButtonText).on("click", jgg_v.onconfirm);
              return void jgg_m.show();
            }
          }
        }
        jgg_H();
      });
    };
    jgg_C.checkBindMobile = function (jgg_O, jgg_z) {
      return jgg_h.resolve(QHPass.sync.bindMobileCheck(jgg_O, jgg_z)).then(function (jgg_H) {
        jgg_o.debug("bind mobile check result", jgg_H);
        jgg_H = jgg_H || {};
        return new jgg_h(function (jgg_i, jgg_I) {
          function jgg_q(jgg_m) {
            jgg_l.hide(true);
            jgg_i({
              condition: 0,
              status: jgg_Y,
              type: jgg_m
            });
          }
          function jgg_G() {
            jgg_l.hide(true);
            jgg_I(new Error("user reject override mobile"));
          }
          if (0 == jgg_H.errno) {
            var jgg_Y = jgg_H.status;
            if (2 == jgg_Y || 3 == jgg_Y || 4 == jgg_Y || 5 == jgg_Y) {
              var jgg_c = jgg_T(162);
              var jgg_l = new QHPass.utils.Panel({
                type: "message",
                title: " ",
                content: jgg_c
              });
              var jgg_w = jgg_l.$el;
              var jgg_D = "";
              2 == jgg_Y ? (jgg_D = "该手机号已被使用，点击“继续绑定”按钮，手机号将与原账号解除绑定，<b>原账号将无法使用此手机号登录，也可能无法再次找回原账号</b>，请谨慎操作。", jgg_w.find(".quc-button-1").text("取消").on("click", jgg_G), jgg_w.find(".quc-button-2").text("继续绑定").on("click", function () {
                jgg_q("bindMobile");
              })) : 3 == jgg_Y ? (jgg_D = "该手机号已被使用，点击“继续绑定”按钮，手机号将与原账号解除绑定，<b>原账号将无法使用此手机号登录，也可能无法再次找回原账号</b>，或者点击“仅关联”按钮，<b>该手机号仅可作为关联使用，无法登录该账号</b>，请谨慎操作。", jgg_w.find(".quc-button-1").text("仅关联").on("click", function () {
                jgg_q("relMobile");
              }), jgg_w.find(".quc-button-2").text("继续绑定").on("click", function () {
                jgg_q("bindMobile");
              })) : 4 == jgg_Y ? (jgg_D = "该手机号已被使用，点击“仅关联”按钮，<b>该手机号仅可作为关联使用，无法登录该账号</b>，请谨慎操作。", jgg_w.find(".quc-button-1").text("取消").on("click", jgg_G), jgg_w.find(".quc-button-2").text("仅关联").on("click", function () {
                jgg_q("relMobile");
              })) : 5 == jgg_Y && (jgg_D = jgg_H.data.msg, jgg_w.find(".quc-button-1").text("取消").on("click", jgg_G), jgg_w.find(".quc-button-2").text("更换手机号").on("click", jgg_G));
              jgg_w.find(".quc-panel-message-inner").html(jgg_D);
              jgg_w.find(".quc-panel-title").html(jgg_K.t("操作提醒"));
              jgg_w.find(".quc-panel-close").on("click", jgg_G);
              jgg_l.show();
            } else {
              0 != jgg_Y && 1 != jgg_Y || jgg_i({
                condition: 2,
                status: jgg_Y
              });
            }
          }
        });
      });
    };
    jgg_C.appendSearchParams = function (jgg_O) {
      var jgg_z = jgg_V.slice(location.search, 1);
      return jgg_u.appendQuery(jgg_O, jgg_z);
    };
    jgg_C.gotoPageWithSearchParams = function (jgg_O) {
      jgg_O = jgg_C.appendSearchParams(jgg_O);
      return jgg_C.gotoPage(jgg_O);
    };
  }).call(jgg_a, jgg_T(2), jgg_T(41));
}, function (jgg_W, jgg_a) {
  jgg_a.SMS_CONDITION_ALWAYS = 0;
  jgg_a.SMS_CONDITION_EXIST = 1;
  jgg_a.SMS_CONDITION_NOT_EXIST = 2;
  jgg_a.SMS_SCENE_LOGIN = 0;
  jgg_a.SMS_SCENE_FINDPWD = 1;
  jgg_a.SMS_SCENE_REG = 2;
  jgg_a.SMS_SCENE_BIND_MOBILE = 5;
  jgg_a.SMS_SCENE_UNBIND_MOBILE = 6;
  jgg_a.SMS_SCENE_MODIFY_MOBILE = 7;
  jgg_a.SMS_SCENE_SET_EMAIL = 8;
  jgg_a.SMS_SCENE_MODIFY_EMAIL = 9;
  jgg_a.SMS_SCENE_MODIFY_PASS = 10;
  jgg_a.SMS_SCENE_CANCEL_ACCOUNT = 11;
  jgg_a.SMS_SCENE_OAUTH_BIND_MOBILE = 12;
  jgg_a.SMS_SCENE_MODIFY_SECEMAIL = 13;
  jgg_a.SMS_SCENE_SET_SECEMAIL = 14;
  jgg_a.SMS_SCENE_DOUBLE_CHECK = 15;
  jgg_a.SMS_SCENE_REL_MOBILE = 16;
  jgg_a.SMS_SCENE_OTHER = 99;
  jgg_a.CAPTCHA_APP_ID = "LS3yVZANuLCqvFn1IWNGVNeC37ExAbuL";
  jgg_a.CAPTCHA_APP_ID_DIFF = "APkWfh83oG4I4WbQwcW5ZniBJVPkQK2g";
  jgg_a.CAPTCHA_SLIDE_TYPE = "slide";
  jgg_a.CAPTCHA_GRAPH_TYPE = "graph";
  jgg_a.LAST_SIGNIN_TYPE = "quc-lastsignin-type";
  jgg_a.LOGIN_TYPES_MAP = {
    accountAndPass: 0,
    sms: 1,
    appToken: 2,
    normalLock: 3,
    qrcode: 4,
    email: 8,
    isp: 11,
    smsAndPass: 101,
    smsAndCode: 102,
    smsAndCodeAndPass: 103,
    emailAndPass: 801,
    emailAndCode: 802,
    emailAndCodeAndPass: 803,
    weishiQRcode: 401,
    weixinQRcode: 402,
    qqQRcode: 403,
    alipayQRcode: 404,
    qqThirdApp: 1201,
    weixinThirdApp: 1202,
    wxxcxThirdApp: 1203,
    sinaThirdApp: 1204,
    alipayThirdApp: 1205
  };
  jgg_a.FRONT_OP = {
    warnModifyPwd: 2,
    captcha: 3,
    doubleCheck: 4,
    forceModifyPwd: 5
  };
  jgg_a.MID_KEY = "__quc_mid__";
  jgg_a.ASC_KEY = "__quc_asc__";
  jgg_a.MNAME_KEY = "__quc_mname__";
  jgg_a.SILENT_KEY = "__quc_silent__";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-main><div class=quc-panel-status></div><div class=quc-panel-message-inner></div><div class=\"quc-button-list quc-button-list-double quc-clearfix\"><button class=\"quc-button quc-button-outline-primary quc-left quc-button-cancel\"></button> <button class=\"quc-button quc-button-primary quc-right quc-button-confirm\"></button></div></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-main><div class=quc-panel-status></div><div class=quc-panel-message-inner></div><div class=\"quc-button-list quc-button-list-double quc-clearfix\"><button class=\"quc-button quc-button-outline-primary quc-button-1\"></button> <button class=\"quc-button quc-button-primary quc-button-2\" style=margin-top:5px></button></div></div>";
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = function (jgg_h) {
    if (jgg_h.BJ_REPORT) {
      return jgg_h.BJ_REPORT;
    }
    var jgg_o = [];
    var jgg_K = {};
    var jgg_u = {
      id: 0,
      uin: 0,
      url: "",
      offline_url: "",
      offline_auto_url: "",
      ext: null,
      level: 4,
      ignore: [],
      random: 1,
      delay: 1000,
      submit: null,
      repeat: 5,
      offlineLog: false,
      offlineLogExp: 5,
      offlineLogAuto: false
    };
    var jgg_r = {
      db: null,
      ready: function (jgg_Y) {
        var jgg_l = this;
        if (!window.indexedDB || !jgg_u.offlineLog) {
          jgg_u.offlineLog = false;
          return jgg_Y();
        }
        if (this.db) {
          return void setTimeout(function () {
            jgg_Y(null, jgg_l);
          }, 0);
        }
        var jgg_w = 1;
        var jgg_D = window.indexedDB.open("badjs", jgg_w);
        return jgg_D ? (jgg_D.onerror = function (jgg_m) {
          jgg_Y(jgg_m);
          jgg_u.offlineLog = false;
          console.log("indexdb request error");
          return true;
        }, jgg_D.onsuccess = function (jgg_m) {
          jgg_l.db = jgg_m.target.result;
          setTimeout(function () {
            jgg_Y(null, jgg_l);
          }, 500);
        }, void (jgg_D.onupgradeneeded = function (jgg_m) {
          var jgg_v = jgg_m.target.result;
          jgg_v.objectStoreNames.contains("logs") || jgg_v.createObjectStore("logs", {
            autoIncrement: true
          });
        })) : (jgg_u.offlineLog = false, jgg_Y());
      },
      insertToDB: function (jgg_Y) {
        var jgg_c = this.getStore();
        jgg_c.add(jgg_Y);
      },
      addLog: function (jgg_Y) {
        this.db && this.insertToDB(jgg_Y);
      },
      addLogs: function (jgg_Y) {
        if (this.db) {
          for (var jgg_c = 0; jgg_c < jgg_Y.length; jgg_c++) {
            this.addLog(jgg_Y[jgg_c]);
          }
        }
      },
      getLogs: function (jgg_Y, jgg_c) {
        if (this.db) {
          var jgg_l = this.getStore();
          var jgg_w = jgg_l.openCursor();
          var jgg_D = [];
          jgg_w.onsuccess = function (jgg_m) {
            var jgg_v = jgg_m.target.result;
            jgg_v ? (jgg_v.value.time >= jgg_Y.start && jgg_v.value.time <= jgg_Y.end && jgg_v.value.id == jgg_Y.id && jgg_v.value.uin == jgg_Y.uin && jgg_D.push(jgg_v.value), jgg_v.continue()) : jgg_c(null, jgg_D);
          };
          jgg_w.onerror = function (jgg_m) {
            jgg_c(jgg_m);
            return true;
          };
        }
      },
      clearDB: function (jgg_Y) {
        if (this.db) {
          var jgg_l = this.getStore();
          if (!jgg_Y) {
            return void jgg_l.clear();
          }
          var jgg_w = Date.now() - 24 * (jgg_Y || 2) * 3600 * 1000;
          var jgg_D = jgg_l.openCursor();
          jgg_D.onsuccess = function (jgg_m) {
            var jgg_v = jgg_m.target.result;
            jgg_v && (jgg_v.value.time < jgg_w || !jgg_v.value.time) && (jgg_l.delete(jgg_v.primaryKey), jgg_v.continue());
          };
        }
      },
      getStore: function () {
        var jgg_Y = this.db.transaction("logs", "readwrite");
        return jgg_Y.objectStore("logs");
      }
    };
    var jgg_C = {
      isOBJByType: function (jgg_Y, jgg_c) {
        return Object.prototype.toString.call(jgg_Y) === "[object " + (jgg_c || "Object") + "]";
      },
      isOBJ: function (jgg_Y) {
        var jgg_c = typeof jgg_Y;
        return "object" === jgg_c && !!jgg_Y;
      },
      isEmpty: function (jgg_Y) {
        return null === jgg_Y || !jgg_C.isOBJByType(jgg_Y, "Number") && !jgg_Y;
      },
      extend: function (jgg_Y, jgg_c) {
        for (var jgg_l in jgg_c) jgg_Y[jgg_l] = jgg_c[jgg_l];
        return jgg_Y;
      },
      processError: function (jgg_Y) {
        try {
          if (jgg_Y.stack) {
            var jgg_m = jgg_Y.stack.match("https?://[^\n]+");
            jgg_m = jgg_m ? jgg_m[0] : "";
            var jgg_w = jgg_m.match(":(\\d+):(\\d+)");
            jgg_w || (jgg_w = [0, 0, 0]);
            var jgg_D = jgg_C.processStackMsg(jgg_Y);
            return {
              msg: jgg_D,
              rowNum: jgg_w[1],
              colNum: jgg_w[2],
              target: jgg_m.replace(jgg_w[0], ""),
              _orgMsg: jgg_Y.toString()
            };
          }
          return jgg_Y.name && jgg_Y.message && jgg_Y.description ? {
            msg: JSON.stringify(jgg_Y)
          } : jgg_Y;
        } catch (jgg_v) {
          return jgg_Y;
        }
      },
      processStackMsg: function (jgg_Y) {
        var jgg_c = jgg_Y.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, "");
        var jgg_l = jgg_Y.toString();
        jgg_c.indexOf(jgg_l) < 0 && (jgg_c = jgg_l + "@" + jgg_c);
        return jgg_c;
      },
      isRepeat: function (jgg_Y) {
        if (!jgg_C.isOBJ(jgg_Y)) {
          return true;
        }
        var jgg_c = jgg_Y.msg;
        jgg_K[jgg_c] = (parseInt(jgg_K[jgg_c], 10) || 0) + 1;
        var jgg_l = jgg_K[jgg_c];
        return jgg_l > jgg_u.repeat;
      }
    };
    var jgg_O = jgg_h.onerror;
    jgg_h.onerror = function (jgg_Y, jgg_c, jgg_l, jgg_w, jgg_D) {
      var jgg_m = jgg_Y;
      jgg_D && jgg_D.stack && (jgg_m = jgg_C.processStackMsg(jgg_D));
      jgg_C.isOBJByType(jgg_m, "Event") && (jgg_m += jgg_m.type ? "--" + jgg_m.type + "--" + (jgg_m.target ? jgg_m.target.tagName + "::" + jgg_m.target.src : "") : "");
      jgg_G.push({
        msg: jgg_m,
        target: jgg_c,
        rowNum: jgg_l,
        colNum: jgg_w,
        _orgMsg: jgg_Y
      });
      jgg_q();
      jgg_O && jgg_O.apply(jgg_h, arguments);
    };
    var jgg_z = function (jgg_Y, jgg_c) {
      var jgg_l = [];
      var jgg_w = [];
      var jgg_D = [];
      if (jgg_C.isOBJ(jgg_Y)) {
        jgg_Y.level = jgg_Y.level || jgg_u.level;
        for (var jgg_m in jgg_Y) {
          var jgg_v = jgg_Y[jgg_m];
          if (!jgg_C.isEmpty(jgg_v)) {
            if (jgg_C.isOBJ(jgg_v)) {
              try {
                jgg_v = JSON.stringify(jgg_v);
              } catch (jgg_M) {
                jgg_v = "[BJ_REPORT detect value stringify error] " + jgg_M.toString();
              }
            }
            jgg_D.push(jgg_m + ":" + jgg_v);
            jgg_l.push(jgg_m + "=" + encodeURIComponent(jgg_v));
            jgg_w.push(jgg_m + "[" + jgg_c + "]=" + encodeURIComponent(jgg_v));
          }
        }
      }
      return [jgg_w.join("&"), jgg_D.join(","), jgg_l.join("&")];
    };
    var jgg_d = [];
    var jgg_H = function (jgg_Y, jgg_c) {
      jgg_c = jgg_C.extend({
        id: jgg_u.id,
        uin: jgg_u.uin,
        time: new Date() - 0
      }, jgg_c);
      return jgg_r.db ? void jgg_r.addLog(jgg_c) : (jgg_r.db || jgg_d.length || jgg_r.ready(function (jgg_l, jgg_w) {
        jgg_w && jgg_d.length && (jgg_w.addLogs(jgg_d), jgg_d = []);
      }), void jgg_d.push(jgg_c));
    };
    var jgg_U = function () {
      var jgg_Y = document.createElement("script");
      jgg_Y.src = jgg_u.offline_auto_url || jgg_u.url.replace(/badjs$/, "offlineAuto") + "?id=" + jgg_u.id + "&uin=" + jgg_u.uin;
      window._badjsOfflineAuto = function (jgg_c) {
        jgg_c && jgg_V.reportOfflineLog();
      };
      document.head.appendChild(jgg_Y);
    };
    var jgg_i = [];
    var jgg_I = 0;
    var jgg_Z = function () {
      if (clearTimeout(jgg_I), jgg_i.length) {
        var jgg_Y = jgg_u._reportUrl + jgg_i.join("&") + "&count=" + jgg_i.length + "&_t=" + +new Date();
        if (jgg_u.submit) {
          jgg_u.submit(jgg_Y);
        } else {
          var jgg_c = new Image();
          jgg_c.src = jgg_Y;
        }
        jgg_I = 0;
        jgg_i = [];
      }
    };
    var jgg_q = function (jgg_Y) {
      if (jgg_u._reportUrl) {
        for (var jgg_c = Math.random() >= jgg_u.random; jgg_o.length;) {
          var jgg_l = false;
          var jgg_w = jgg_o.shift();
          if (jgg_w.msg = (jgg_w.msg + "" || "").substr(0, 500), !jgg_C.isRepeat(jgg_w)) {
            var jgg_D = jgg_z(jgg_w, jgg_i.length);
            if (jgg_C.isOBJByType(jgg_u.ignore, "Array")) {
              for (var jgg_m = 0, jgg_v = jgg_u.ignore.length; jgg_m < jgg_v; jgg_m++) {
                var jgg_M = jgg_u.ignore[jgg_m];
                if (jgg_C.isOBJByType(jgg_M, "RegExp") && jgg_M.test(jgg_D[1]) || jgg_C.isOBJByType(jgg_M, "Function") && jgg_M(jgg_w, jgg_D[1])) {
                  jgg_l = true;
                  break;
                }
              }
            }
            jgg_l || (jgg_u.offlineLog && jgg_H("badjs_" + jgg_u.id + jgg_u.uin, jgg_w), jgg_c || 20 == jgg_w.level || (jgg_i.push(jgg_D[0]), jgg_u.onReport && jgg_u.onReport(jgg_u.id, jgg_w)));
          }
        }
        jgg_Y ? jgg_Z() : jgg_I || (jgg_I = setTimeout(jgg_Z, jgg_u.delay));
      }
    };
    jgg_h.BJ_REPORT = {
      push: function (jgg_Y) {
        var jgg_c = jgg_C.isOBJ(jgg_Y) ? jgg_C.processError(jgg_Y) : {
          msg: jgg_Y
        };
        if (jgg_u.ext && !jgg_c.ext && (jgg_c.ext = jgg_u.ext), jgg_c.from || (jgg_c.from = location.href), jgg_c._orgMsg) {
          var jgg_l = jgg_c._orgMsg;
          delete jgg_c._orgMsg;
          jgg_c.level = 2;
          var jgg_w = jgg_C.extend({}, jgg_c);
          jgg_w.level = 4;
          jgg_w.msg = jgg_l;
          jgg_o.push(jgg_c);
          jgg_o.push(jgg_w);
        } else {
          jgg_o.push(jgg_c);
        }
        jgg_q();
        return jgg_G;
      },
      report: function (jgg_Y, jgg_c) {
        jgg_Y && jgg_G.push(jgg_Y);
        jgg_c && jgg_q(true);
        return jgg_G;
      },
      info: function (jgg_Y) {
        return jgg_Y ? (jgg_C.isOBJ(jgg_Y) ? jgg_Y.level = 2 : jgg_Y = {
          msg: jgg_Y,
          level: 2
        }, jgg_G.push(jgg_Y), jgg_G) : jgg_G;
      },
      debug: function (jgg_Y) {
        return jgg_Y ? (jgg_C.isOBJ(jgg_Y) ? jgg_Y.level = 1 : jgg_Y = {
          msg: jgg_Y,
          level: 1
        }, jgg_G.push(jgg_Y), jgg_G) : jgg_G;
      },
      reportOfflineLog: function () {
        return window.indexedDB ? void jgg_r.ready(function (jgg_Y, jgg_c) {
          if (jgg_c) {
            var jgg_w = new Date() - 0 - 24 * jgg_u.offlineLogExp * 3600 * 1000;
            var jgg_D = new Date() - 0;
            jgg_c.getLogs({
              start: jgg_w,
              end: jgg_D,
              id: jgg_u.id,
              uin: jgg_u.uin
            }, function (jgg_m, jgg_v) {
              var jgg_M = document.createElement("iframe");
              jgg_M.name = "badjs_offline_" + (new Date() - 0);
              jgg_M.frameborder = 0;
              jgg_M.height = 0;
              jgg_M.width = 0;
              jgg_M.src = "javascript:false;";
              jgg_M.onload = function () {
                var jgg_B = document.createElement("form");
                jgg_B.style.display = "none";
                jgg_B.target = jgg_M.name;
                jgg_B.method = "POST";
                jgg_B.action = jgg_u.offline_url || jgg_u.url.replace(/badjs$/, "offlineLog");
                jgg_B.enctype.method = "multipart/form-data";
                var jgg_R = document.createElement("input");
                jgg_R.style.display = "none";
                jgg_R.type = "hidden";
                jgg_R.name = "offline_log";
                jgg_R.value = JSON.stringify({
                  logs: jgg_v,
                  userAgent: navigator.userAgent,
                  startDate: jgg_w,
                  endDate: jgg_D,
                  id: jgg_u.id,
                  uin: jgg_u.uin
                });
                jgg_M.contentDocument.body.appendChild(jgg_B);
                jgg_B.appendChild(jgg_R);
                jgg_B.submit();
                setTimeout(function () {
                  document.body.removeChild(jgg_M);
                }, 10000);
                jgg_M.onload = null;
              };
              document.body.appendChild(jgg_M);
            });
          }
        }) : void jgg_V.info("unsupport offlineLog");
      },
      offlineLog: function (jgg_Y) {
        return jgg_Y ? (jgg_C.isOBJ(jgg_Y) ? jgg_Y.level = 20 : jgg_Y = {
          msg: jgg_Y,
          level: 20
        }, jgg_G.push(jgg_Y), jgg_G) : jgg_G;
      },
      init: function (jgg_Y) {
        if (jgg_C.isOBJ(jgg_Y)) {
          for (var jgg_l in jgg_Y) jgg_u[jgg_l] = jgg_Y[jgg_l];
        }
        var jgg_w = parseInt(jgg_u.id, 10);
        jgg_w && (/qq\.com$/gi.test(location.hostname) && (jgg_u.url || (jgg_u.url = "//badjs2.qq.com/badjs"), jgg_u.uin || (jgg_u.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), jgg_u._reportUrl = (jgg_u.url || "/badjs") + "?id=" + jgg_w + "&uin=" + jgg_u.uin + "&");
        jgg_o.length && jgg_q();
        jgg_r._initing || (jgg_r._initing = true, jgg_r.ready(function (jgg_D, jgg_m) {
          jgg_m && setTimeout(function () {
            jgg_m.clearDB(jgg_u.offlineLogExp);
            setTimeout(function () {
              jgg_u.offlineLogAuto && jgg_U();
            }, 5000);
          }, 1000);
        }));
        return jgg_G;
      },
      __onerror__: jgg_h.onerror
    };
    var jgg_G = jgg_h.BJ_REPORT;
    "undefined" != typeof console && console.error && setTimeout(function () {
      var jgg_Y = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
      jgg_Y && console.error("BJ_ERROR", decodeURIComponent(jgg_Y).replace(/(:\d+:\d+)\s*/g, "$1\n"));
    }, 0);
    return jgg_G;
  }(window);
  jgg_W.exports = jgg_V;
}, function (jgg_W, jgg_a) {
  jgg_W.exports = ".quc-wrapper{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;*font-family:SimSun,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-size:14px;line-height:1.5;background-color:#fff;color:#9ba7ba;position:relative;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-weight:400}.quc-wrapper,.quc-wrapper *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.quc-wrapper ol,.quc-wrapper p,.quc-wrapper ul{margin:0;padding:0}.quc-wrapper ol,.quc-wrapper ul{list-style:none}.quc-wrapper div,.quc-wrapper h1,.quc-wrapper h2,.quc-wrapper h3,.quc-wrapper h4,.quc-wrapper h5,.quc-wrapper h6,.quc-wrapper p,.quc-wrapper span{margin:0;font-weight:400}.quc-wrapper a{text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects;-webkit-tap-highlight-color:transparent;outline:none}.quc-wrapper button,.quc-wrapper input,.quc-wrapper select,.quc-wrapper textarea{color:inherit}.quc-wrapper table{border-collapse:collapse;border-spacing:0}.quc-wrapper button,.quc-wrapper input,.quc-wrapper select,.quc-wrapper textarea{margin:0;padding:0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:inherit;background-color:inherit}.quc-wrapper [type=button],.quc-wrapper [type=reset],.quc-wrapper [type=submit],.quc-wrapper button,.quc-wrapper textarea{-webkit-appearance:button}.quc-wrapper textarea{width:100%;resize:none}.quc-wrapper ::-ms-clear{display:none}.quc-wrapper ::-webkit-contacts-auto-fill-button{visibility:hidden;display:none!important;pointer-events:none;position:absolute;right:0}.quc-wrapper :-ms-input-placeholder{color:#9ba7ba!important}.quc-wrapper ::-webkit-input-placeholder{color:#9ba7ba!important}.quc-wrapper ::-moz-placeholder{color:#9ba7ba!important}.quc-wrapper ::placeholder{color:#9ba7ba!important}.quc-wrapper input:-webkit-autofill,.quc-wrapper input:-webkit-autofill:active,.quc-wrapper input:-webkit-autofill:focus,.quc-wrapper input:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 30px #fff inset;box-shadow:inset 0 0 0 30px #fff}.quc-wrapper a{color:inherit;*color:#9ba7ba;cursor:pointer}.quc-wrapper a:hover{color:#00d092}.quc-wrapper b,.quc-wrapper strong{color:#333;font-weight:500}.quc-wrapper .quc-clearfix{*zoom:1}.quc-wrapper .quc-clearfix:after,.quc-wrapper .quc-clearfix:before{display:table;content:\"\"}.quc-wrapper .quc-clearfix:after{clear:both}.quc-wrapper .quc-right{float:right}.quc-wrapper .quc-left{float:left}.quc-wrapper .quc-hide{display:none}.quc-wrapper .quc-primary{color:#00d092}.quc-wrapper .quc-error{color:#ff5e68}.quc-wrapper .quc-success{color:#00d092}.quc-wrapper .quc-text-center{text-align:center}.quc-wrapper .quc-link{color:#00d092;cursor:pointer}.quc-wrapper .quc-link.quc-button-disabled{color:#999}.quc-wrapper .quc-text-primary{color:#333}.quc-wrapper .quc-dot-list li{padding-left:6px}.quc-wrapper .quc-dot-list li:before{content:\"·\";font-size:14px;padding-right:3px;width:6px;margin-left:-6px}@font-face{font-family:quc-icon;src:url(//s1.ssl.qhimg.com/static/c5ad2cc0efb72de5.eot?t=__now__);src:url(//s1.ssl.qhimg.com/static/c5ad2cc0efb72de5.eot?t=__now__#iefix) format(\"embedded-opentype\"),url(//s3.ssl.qhimg.com/static/ef61370030425682.woff) format(\"woff\"),url(//s5.ssl.qhimg.com/static/40d932e215321ea2.ttf) format(\"truetype\"),url(//s1.ssl.qhimg.com/static/02b31c73c2181dca.svg) format(\"svg\")}@font-face{font-family:quc-icon-new;src:url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABEcAAwAAAAAHlQAABDLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoIyIzIGYABECrFgpTkBNgIkA4ECC4EAAAQgBYF8ByAb2BYjkpJWCLK/wLbhDRG5sYnW3aEzyPYYwP69lisEvVsAAACAAYADJ5CADwD4wAQoMkMpCd72tnn791qjtSoUGEk88QQhCbIqjTAYe8aR+x9+m3+RJ8IQ9sgWjCKMpBWxEASjAgPX2Cwizlz87482lumPrGX5f7lV9enVFPQw70VaRoxmzISQFcdWPSvUcVPXhABtI+BtIpHLffv/whwwD9Xt7/6WaQxJ+FY3bjyw/m9as9m9AnKHpkuVCMk7I7EY82eyV3767PU6u1d6kzwUWGTzyfVQE1opwiC0AZtrHJfvgDOdaVvL2nIIFwlGYRSY+dQnJtDGD7mEUCi5If+3hlKgTEKFhCoJNRLqJDRIaJLQIqFNQoeELgk9EoZIGCZhhIRREsacknFjyibM3JwnzamYwjQRwSz3L4l5LGARS1jGClaxhnVsYBNb2MYOdrEn2Vd1oOTQ3nWEY3Gi7FTfdSacO1+ouFS4UnXNd93gNnYnM1C9NmHeGVSNbpqFwbatsvnd2+8MBJgXmWO+sgm9DshZvPGX00cK48E+nXhyHBqAxdH1+Xm05abBL3H/QuEdAMUrcxUBSfqbBIZaUmBkoZhNsgOsgpIESvtC/0InmBt6/Ymt5n+e/J/8rpJUqt6jwEvfZ1B5B/VG4qRq18afAQAAZrLApnrLmpKKcpKZxJiqFpmTInE2iXqaFHMoIdE0CrqASwmkmPmMFOW8imoeRnLOMlln6UaGd3dpKYuWgv1Wmbty4xH3NrfTuY2nNL6aXiKziex+d6jTZt4pp6uK5Np/yZNOZ1kgR90s/87uHGhW0IHw4RijsEE1ymlUiIS09B95uq9I9oYjxq6CsjsY3pWL7gkFaTxGpESa0xBxAC34comgUy4U0bMyXd3siK4wh7IGnewr4l8gHNCr+ViGDYZjKVZNcJ82IV0QmO67FOJcJ5U1XRxFLTqyUIwvjZE/d3wZV2JfGrbxY5piIrcrVah4aVlMGgYq787vJEtMjiCDHkTDVAe5VDHQiponNnTbsEnb3AfRHONUCvA6KWIXzaObUYBgTBE53ViGGD6fmmKUDO+3LKik2RvIet6lQCTuDMHYEcUUSiIQLvZ7NtALwZwiQsQRbZlp3ea5tncZ6qWyNmqa+9Whg/GR3VqeyyfibGrieIfVxzNqj3Gya46P1Q2fKhSaKhoG+CbbHvfWtRfBtvuzpIlCy9eWyTSPRiftkIicIAEjbXhduwIIg2/pzxAjljxzOJ/JiJFsdCU0Qgww4EAE3uPNkMvhLGGiKOHYuw5XiVyxxYgQk1YIwo6FQK/jF7jUH1PYyUdxxGYUhA76gxaBFFrlkLxU4nZp0TymxQhNy9xBpr8r0wzR6fl942MnR1byqTXoM2/IjGGoTcTDWlqQFh79xDhcdbyEP1Th6D8WyzCgsL5UuZgv89hiS1RfzRzjN7cDCxfAdHxOZpSCGMh+j0xjavdRqhVxK3XA+L4wxQwA2RAqhpA01R1wknXKaVH2vKrwq5l/e+FDsXpxZXf5CpALMPVseHY/FL2ouIFUVnNvtjXRb8AN4iFdcBpjySViylGBevdWl8pqIJCE30tGVBkyb4S3EMGVKGecS0TRScABTBC86fvgAlKV6VKEVeES6ALaObg58bxMjbMNQzxoCyH2taKbfaIzX1uDaFlv1p7cw09kVS3Ye7YIuRGIVdxEBzLEKKXlZvhYp7tkMZ1tReJNN/+EmqPISKUDxyDGbR8tVix/gZ7kD21Uy34FdJpx05FpxcSSgl5dg54qL5KVsxSxQUraljPKVJVPmvPJvjU12cUVce6k7Q33RX9qYgMOETwcq3KfZCITeZ7LJcu/MiLuW6vbh+0bnZOzJ9p3OgEDo5cTHeM90hUbvs5PqH1truDpLJSptY2z8qqXV1Heb8CIUd2Pi93RUrbfspQJll0wzNFBzsxxVZc0DWvmGXFcylgn/f5m2xaEOu6DCdqmecajqsB+ZBgWz2eaXrbL9U19XYu6TP2ruqrMxMwMqwbOV9fUddwwfC2G+WDQNG9tcWFY1o6XPUF7LNxfGEagw1rbUmfbp7rN0c21QTWzQrtlyxNlcUmJDcmJaogq08p6sI9RU+V4qizOaVuxdNI0ty0PnS2aIlWXPlzyqQ+eFvLzwbLtx7bo9/EbRAkQvs46O2TdtIzHK4b4wjyjsfGaMlVldV3I9nt1Lt3p0dJcLMa/tA+N27ey0/54rkopQHXRk877YEcp1Ycr+gfowpbtAKMJFdZt62mZpVPG/YXBNVk0JT3LnY6FmvZe/iCpF3E0x/p8fjptDiIThjHFx4r93VnXlDGA9KPbtKAX+roy3yyRaKuDlvOTl8snbao2z5mwu4F0PstMFI0Wlq3uxvzQUVLTYsR9fZVqqqhr9mYbN9c2SPGGqkzT1vpmT7rxJ8WaO4JK95JrncfSbcb4SkkCqcY0gcSlwVCmcKdkE52P7UqVjVrkG4Cull0PLlJrGrR7QOukWQCNrsNmp5raADrunk6i/7ApXnj519n/p/PrT8+8qkef4H+NzjlWTrQ9H14CwZPjM+jcGT14HaGz7V+cCEzbzjbzxGerPukoC4/BloAeGxU7/LpyJK8egXWT8is0d88hba035UKMbcp5diI2HlInIPm8La+9y0j9NRp0wwM67K106d0c3afx90aNoKdxdDQJJP3aG/vO77yNN72AMzRcp1CvT06eoFLmXp6ck14/ITvhG0/nAgPEvqn0j01DYqGEUqTpXQrp/jFAQY7S1o+lEnu/jxTO2H8UMcGHFWbF/BVe3qX43gpMlHnjMm5gtd1Xr+5Wj9jHl6YP824wmOMsn4flYTK7exoJTJTKYPpYA+Ms0KixID8YJq+Whx2UN7h3GqmN7Jo81hWValmaXNhEMSvLsdjPlB9prYWhmpS6FM1D5F+m4pHgKGnwr1JhxvZG/A8E2xgPSqwXoo3GaH603vAR7qMO7ib+Ret3iXuDc4Vzg5vIuWmDOi2YEPzGF/D5hOYN4t13ig6PPO2sPOfSXdrUqyDha3z05dRVnet8yvi8qKR7enrSLBDwBevUUsErpXx6+6XwpR1aXcjUp+741FYbRFUxoMr0qejXVJFblPqr6NPjcQicoL6977sCXoZfnnx/dUhnSPG5M1fFuq/GItbIfjagnnFhwXjCP8veevqPQvjHr8xvSX3XfhTJ42dtD53wXwoYR8byAYs1rioyMze0LgGeEc+9tvVEFON7xgHdo95pMqFTqNHknBobW5vsMJngiz5HcPuE4aKeaGycsRPnRkfnNKYYrszgXCLdnnXQjF3r6GrsNNHpSLWv147GBt0OrWMDvb6e4XCkCIhmD2Kst2XGtmaNbaalRTCPN2NrCbq/7IY5zLPjVOrx7OwtW+akc9o5nX77BIV6QrI7biKetgileWhQ0p/68q5ObY2GPcLj8rjyEEu6vIxqMfX0mi2WHrO55wIBX3P6WYL5z9ZYWZHQ6uncpytybU/sbw/K1lyh2IzWQyCYqA8oIxzI8wwaD5WX6yd6B22hL6zLNrsjRv7MiHCvb3l4v15W0a72ZdniV9W2DZuycWQ3baGHTPyhTDfhHswO3RHPJwCicodf3RPhzlg+Mv9/RZtm1JoXv6qmbcSUhaPFk+nuhbiSgL05/YPGo9CPD3SR5kiuQJJVbi4mmVkY7G78o4/qcDo7ovR6WU7nnk4fbGTSGXVtbT3NyGN1bUY1a253CTyNpJnz1XEnCbQYKznGh1pC2slfuYO/84aPv2Ml31cU5dDgFt+NnZ8DhAiheqp6VBiScOKkzUZCyCQ0dEM2d3jou28Zcmo+98SfsP4oWafbu+bxI46XrgtfMR2xQky+tXCFTEOe/PtikyC6B7JUXiLJN07SdwaO+0ik3/jQEujKN+r1quyVr7zCaif31DIZAQFMpsFudPE2gOVXhTZHdIJx8WLzQDiPCL8PQ8D6mUM+uUNepejozNwXXpG3VtyRqM8Jhzhu5fpoS05JWlXoBerpxHwcgaufPWYgvgfijAnLmu/i83KWqa35Ko3VsUyZk2NlVocmhj/GKzthk80VF4gT9AtwZxyb/END8jYPmQOFkZ8ICZaQtoV7WkJMstVBQaufrJBQt9OCz1jP5Mw5VklMO095vbJhFEksVtb4bfOFYPWYLb3piksRpQTCuZcjInJIseqCAk0c6eK5i6//fAn/nPsPWCYGuLZqG9vI6VJda5g9M7ImIeRDqXj2wZJkSb0xwupJ18a31OStCI++wzpNo69gMT+k004TafO05pisWh/jsx+3p7QonCZVKZJqrnOxXdWabc1cbavCnhZZorHYuseM/h+hLhQtoNQwpZ5vCKlvfsm3FzblTK1aNZXT1CSY4EZT8Et07ooZroky324qCLV5rPkJjtAws5WuuprL/Hziu6Gw84+SRLsTTkpP2iGLmFN+TXot4TC9MDL3x9ZV8fWpR99v4SeobPHc2oMFoMd4W2yzq1fP7l7QqVavts22oP8zKG9C78Cfsj/zLsjW4zmNV4MqZGP80s4v/nwp2EHMWnP/bjbdS2iOKkhnm7r9H5olm1carnHMh3OYr6UxHLy9EhdNr+V+kTcv068z0Zfg2mSfB2Q0QROvIbZsgXnBffeS+aYeiMPg6Kd3rX5L6Uf1S9qJXo+IOHCr7oFaLUUiy7T5z/bUh760LbL+OHlZSPfOX9zSAcKIG/9aYe0gTNIduDXBRXnmNGv5sM4R4MCtDS68uelhY/w7WUKCXB5kSAt/5+H8JFYuN5jDoHCReBf1JMo58MWX2Tg5G/8yHj9Z0q4vYyekDL7DG3imhIy0RR5rBgRxzC7zixdp/Ry9M1ZViJUdqPj2MzvEbPyNO97PxpisxXrKZ/+k5q77pRvPCcITw8rbO7L+Qd8KAIMBBHtSaU39ojX0vM1/Q9ilvyJXsx0/pWSuHU2smarxw9EMtcq2r5bUdMmKpD/fuoXwmM9I1d/LarTXt+ZviUW+1dP30pHreuXJ2xRgfEunzdH8j9Pp70PCATygcCO4i8l47MKAV75cvmxDdZlUerdXwt6v8CpW7F83LLQQbj+79/vIF7WX7tcA2r+q0hr9xQycIWPQvluoDyVvX4g2Qk7gdBZPTvAvzkUc8EXjLrpx2eWG8A4bYn+8ACWmarkpOdy4dBQu3JMoxVhPgIXhENh5Rja0hq83FWZFmtEDAAfM6Hr8psLw9a3A5hn5dqYjwOLBipWSe+dRLFFhNCU3y+HdLMN/InSfQf8UhX0zVtF/5n0foE/1hn0Anwal05umVAgiqbdZiMnJuhZbvQRBVFNN6XS42IvfQCJtwJuPsQEP+qDF5w80SRF/aWPjj466d2RYFkAiGJwRmkxWIa4Im9kGJ6CtwQvnK9RkOiMg/a133478GQbP8sipw1Q3O5E3CUj2Bm5f/3puGeLW5DBsJKAaRl9u5MSJm5ULU+7jS5C4qp82zLntZebvzy9jsF6Aa6bkAuHrNI5AhmS4a7AwoojS3HDQ6MIFmbDOrHNBDbyU7b8BuACQAkKgAH7+PpQCCvkQDYlokGjSK4LhzwAACkAETfArJtxvvd9rwMash0+gFbMMY8O8i2HDy91BnW0uGOSwtCcOcgELGIRwyaoDV/06EYZ9WIgD4T4ExOBE/6/eC4hLWm4dNEMtdEIHNJjX1gsOqIdG6IM2qAY3qCAKlEwkQy7YdExzhxWfLvI+bFZSYiwIxNzQA80wWdzAmCpNxwI92nw7DQAA\") format(\"woff2\"),url(//at.alicdn.com/t/c/font_3935847_qy37sg36g7j.woff?t=1684741107258) format(\"woff\"),url(//at.alicdn.com/t/c/font_3935847_qy37sg36g7j.ttf?t=1684741107258) format(\"truetype\")}.quc-icon{font-family:quc-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.quc-wrapper .quc-button{-webkit-font-smoothing:auto;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:none;white-space:nowrap;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:40px;line-height:40px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;text-align:center;width:100%;cursor:pointer;-webkit-border-radius:40px;-moz-border-radius:40px;border-radius:40px;font-size:16px;-webkit-filter:chroma(color=#000);filter:chroma(color=#000);display:inline-block;*display:inline;*zoom:1;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.quc-wrapper .quc-button:hover{opacity:.9}.quc-wrapper .quc-button:active{opacity:1}.quc-wrapper .quc-button .quc-icon{margin-right:5px}.quc-wrapper .quc-button-primary{border-color:#00d092;background-color:#00d092;color:#fff}.quc-wrapper .quc-button-primary:hover{color:#fff}.quc-wrapper input.quc-button-primary{*border:none}.quc-wrapper .quc-button-outline-primary{color:#00d092;border:1px solid #00d092;height:38px;line-height:38px}.quc-wrapper .quc-button-outline-primary:hover{color:#00d092}.quc-wrapper .quc-button-list{margin-top:10px}.quc-wrapper .quc-select{z-index:400;cursor:pointer}.quc-wrapper .quc-select:hover input{cursor:pointer;border-color:#00d092}.quc-wrapper .quc-input{position:relative;width:100%}.quc-wrapper .quc-input .quc-input-clear{font-size:12px;cursor:pointer}.quc-wrapper .quc-input .quc-input-clear:hover{color:#9ba7ba}.quc-wrapper .quc-input input{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;outline:none;width:100%;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;font-size:14px;display:inline-block;*display:inline;*zoom:1;color:#333;background:#f7f9fa;border:1px solid #f7f9fa;height:24px;line-height:24px;padding:7px 16px;-webkit-border-radius:48px;-moz-border-radius:48px;border-radius:48px}.quc-wrapper .quc-input input:-webkit-autofill{-webkit-box-shadow:inset 0 0 0 30px #f7f9fa;box-shadow:inset 0 0 0 30px #f7f9fa;-webkit-text-fill-color:#333}.quc-wrapper .quc-input input:focus{border-color:#00d092}.quc-wrapper .quc-input .quc-input-inner-custom{position:absolute;line-height:1;left:10px;top:13px}.quc-wrapper .quc-input .quc-input-prefix{left:1px}.quc-wrapper .quc-input .quc-input-suffix{right:1px}.quc-wrapper .quc-input .quc-input-append,.quc-wrapper .quc-input .quc-input-prefix,.quc-wrapper .quc-input .quc-input-suffix{position:absolute;top:1px;*top:2px;width:40px;text-align:center;height:40px;line-height:40px;color:#ccc;z-index:12}.quc-wrapper .quc-input .quc-option-wrapper{z-index:101;background:#fff;border:1px solid #d8d8d8;border-top:0;max-height:180px;overflow-x:hidden;overflow-y:auto;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;font-size:12px;position:absolute;*top:43px;right:0;left:0}.quc-wrapper .quc-input .quc-option-wrapper.quc-mobile-Statelist{width:200px}.quc-wrapper .quc-input .quc-option-wrapper .quc-option{line-height:30px;color:#333;padding:0 10px;cursor:pointer;*padding-right:30px}.quc-wrapper .quc-input .quc-option-wrapper .quc-option.quc-option-active,.quc-wrapper .quc-input .quc-option-wrapper .quc-option:hover{background-color:#fafafa;color:#00d092}.quc-wrapper .quc-input .quc-input-zone{width:116px;text-align:left;cursor:pointer;white-space:nowrap}.quc-wrapper .quc-input .quc-input-zone .quc-activeState{display:inline-block;*display:inline;*zoom:1;padding-left:16px;width:64px;color:#333;text-align:center}.quc-wrapper .quc-input .quc-input-zone .quc-icon{display:inline-block;*display:inline;*zoom:1;text-align:center;vertical-align:middle;font-size:12px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:-o-transform .3s;-moz-transition:transform .3s,-moz-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s,-moz-transform .3s,-o-transform .3s;width:42px}.quc-wrapper .quc-input .quc-input-zone-active .quc-icon{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.quc-wrapper .quc-input .quc-input-zone-active .quc-option-wrapper{display:block}.quc-wrapper .quc-input .quc-input-append{right:0;text-align:center;width:auto;padding-right:16px;z-index:100}.quc-wrapper .quc-input-hidden{width:0!important;height:0!important;border:none!important;margin:0!important;padding:0!important;outline:none!important;display:block!important}.quc-wrapper .quc-form{position:relative;z-index:2}.quc-wrapper .quc-form-item{margin-bottom:24px}.quc-wrapper .quc-form-item:first-child{margin-top:0}.quc-wrapper .quc-form-item-content{position:relative}.quc-wrapper .quc-form-item-has-error .quc-input input{border-color:#ff5e68}.quc-wrapper .quc-form-item-error,.quc-wrapper .quc-tip-error{color:#ff5e68}.quc-wrapper .quc-tip-success{color:#00d092}.quc-wrapper .quc-form-item-error{font-size:12px;line-height:1;padding-top:6px;position:absolute;top:100%;left:0;padding-left:16px;padding-right:16px}.quc-wrapper .quc-form-tips{margin-top:12px;color:#9ba7ba;font-size:12px;line-height:20px}.quc-wrapper .quc-form-tips a{color:#00d092}.quc-wrapper .quc-form-tips .sep{display:inline-block;width:1px;height:16px;background:#d8e0e8;margin:0 10px;vertical-align:middle;position:relative;top:-2px}.quc-wrapper .quc-form-item-img-captcha{*zoom:1}.quc-wrapper .quc-form-item-img-captcha:after,.quc-wrapper .quc-form-item-img-captcha:before{display:table;content:\"\"}.quc-wrapper .quc-form-item-img-captcha:after{clear:both}.quc-wrapper .quc-form-item-img-captcha .quc-input{display:inline-block;*display:inline;*zoom:1;width:auto;float:left}.quc-wrapper .quc-form-item-img-captcha .quc-input input{width:130px}.quc-wrapper .quc-form-item-img-captcha img{cursor:pointer;border:1px solid #ddd;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;height:40px;width:100px;position:relative;*top:1px;float:left;margin-left:10px}.quc-wrapper .quc-form-item-img-captcha span{float:right;display:inline-block;*display:inline;*zoom:1;white-space:nowrap;line-height:42px}.quc-wrapper .quc-form-item-checkbox{color:#9ba7ba;font-size:12px}.quc-wrapper .quc-form-item-checkbox input{margin-right:5px;vertical-align:middle;margin-bottom:1px}.quc-wrapper .quc-form-agreement{color:#9ba7ba;font-size:12px;height:40px}.quc-wrapper .quc-form-agreement input{margin-right:5px;vertical-align:middle;margin-bottom:1px}.quc-wrapper .quc-captcha-slide{height:42px}.quc-wrapper .quc-form .quc-button-list{margin-top:10px}.quc-wrapper .quc-tab-list{display:inline-block;*display:inline;*zoom:1;line-height:1;text-align:center;vertical-align:middle}.quc-wrapper .quc-tab-item{position:relative;float:left;margin:0 10px}.quc-wrapper .quc-tab-item:first-child .quc-tab-sep{display:none}.quc-wrapper .quc-tab-item.bold .quc-tab-item-inner{color:#1b2532;font-weight:700}.quc-wrapper .quc-tab-item-inner{font-size:16px;line-height:24px;color:#626f84;float:left;padding-top:8px;padding-bottom:5px;border-bottom:3px solid transparent;-webkit-transition:all 2s ease;-o-transition:all 2s ease;-moz-transition:all 2s ease;transition:all 2s ease}.quc-wrapper .quc-tab-sep{float:left;border-right:1px solid #e3e3e3}.quc-wrapper .quc-tab-item-active .quc-tab-item-inner{border-bottom:3px solid #00d092;color:#1b2532;font-weight:700!important}.quc-wrapper .quc-panel-title,.quc-wrapper .quc-panel-title .quc-tab-item-inner{font-weight:500}.quc-wrapper .quc-panel-title .quc-tab-list{font-size:14px;color:#333}.quc-wrapper .quc-panel-title .quc-tab-sep{margin:2px 16px 0;height:16px}.quc-wrapper .quc-entrance .quc-tab-list{font-size:14px;color:#9ba7ba}.quc-wrapper .quc-entrance .quc-tab-sep{margin:1px 10px 0;height:12px}.quc-panel{margin:0 auto;width:420px}.quc-panel .quc-main{position:relative}.quc-panel-popup{z-index:4001}.quc-panel-middle{width:420px}.quc-panel-middle .quc-button,.quc-panel-middle .quc-mobile-Statelist{width:370px}.quc-panel-middle .quc-button-list-double .quc-button{width:174px}.quc-panel-middle .quc-main{margin:0 auto;padding-top:24px;padding-bottom:32px;width:372px}.quc-panel-middle .quc-input input{width:338px;position:relative;z-index:10}.quc-panel-middle .quc-input-has-prefix input{padding-left:40px;width:314px}.quc-panel-middle .quc-input-has-suffix input{padding-right:40px;width:314px}.quc-panel-middle .quc-input-has-zone{z-index:2}.quc-panel-middle .quc-input-has-zone input{padding-left:116px;width:238px}.quc-panel-middle .quc-input-has-both input{padding-left:40px;padding-right:40px;width:290px}.quc-panel-middle .quc-input-has-append input{padding-right:120px;width:234px}.quc-panel-middle .quc-input-has-prefix-append input{padding-left:40px;padding-right:131px;width:199px}.quc-panel-middle .quc-form-item-img-captcha .quc-input input{width:174px}.quc-panel-middle .quc-form-item-img-captcha .quc-input-has-prefix input{width:150px}.quc-panel-large{width:450px}.quc-panel-large .quc-button,.quc-panel-large .quc-mobile-Statelist{width:370px}.quc-panel-large .quc-button-list-double .quc-button{width:174px}.quc-panel-large .quc-main{margin:0 auto;padding-top:24px;padding-bottom:32px;width:372px}.quc-panel-large .quc-input input{width:338px;position:relative;z-index:10}.quc-panel-large .quc-input-has-prefix input{padding-left:40px;width:314px}.quc-panel-large .quc-input-has-suffix input{padding-right:40px;width:314px}.quc-panel-large .quc-input-has-zone{z-index:2}.quc-panel-large .quc-input-has-zone input{padding-left:116px;width:238px}.quc-panel-large .quc-input-has-both input{padding-left:40px;padding-right:40px;width:290px}.quc-panel-large .quc-input-has-append input{padding-right:120px;width:234px}.quc-panel-large .quc-input-has-prefix-append input{padding-left:40px;padding-right:131px;width:199px}.quc-panel-large .quc-form-item-img-captcha .quc-input input{width:174px}.quc-panel-large .quc-form-item-img-captcha .quc-input-has-prefix input{width:150px}.quc-panel-small{width:360px}.quc-panel-small .quc-button,.quc-panel-small .quc-mobile-Statelist{width:310px}.quc-panel-small .quc-button-list-double .quc-button{width:144px}.quc-panel-small .quc-main{margin:0 auto;padding-top:24px;padding-bottom:32px;width:312px}.quc-panel-small .quc-input input{width:278px;position:relative;z-index:10}.quc-panel-small .quc-input-has-prefix input{padding-left:40px;width:254px}.quc-panel-small .quc-input-has-suffix input{padding-right:40px;width:254px}.quc-panel-small .quc-input-has-zone{z-index:2}.quc-panel-small .quc-input-has-zone input{padding-left:116px;width:178px}.quc-panel-small .quc-input-has-both input{padding-left:40px;padding-right:40px;width:230px}.quc-panel-small .quc-input-has-append input{padding-right:120px;width:174px}.quc-panel-small .quc-input-has-prefix-append input{padding-left:40px;padding-right:131px;width:139px}.quc-panel-small .quc-form-item-img-captcha .quc-input input{width:114px}.quc-panel-small .quc-form-item-img-captcha .quc-input-has-prefix input{width:90px}.quc-panel-message{width:450px}.quc-panel-message .quc-main{width:330px;margin:0 auto;padding-top:30px;padding-bottom:40px}.quc-panel-message .quc-main .quc-button{width:330px}.quc-panel-message .quc-main input{width:298px}.quc-panel-message .quc-main .quc-input-has-zone input{padding-left:116px;width:196px}.quc-wrapper .quc-logo{height:35px;width:auto;margin-bottom:10px}.quc-wrapper .quc-panel-hd{color:#333;-webkit-font-smoothing:auto}.quc-wrapper .quc-panel-close{color:#d2d0d0;font-size:12px}.quc-wrapper .quc-panel-close .quc-icon-close{font-size:12px}.quc-wrapper .quc-panel-close:hover{color:#9a9a9a}.quc-wrapper .quc-panel-message-inner{color:#9ba7ba;font-size:14px}.quc-wrapper .quc-panel-message-has-status .quc-panel-message-inner{margin-left:36px}.quc-wrapper .quc-panel-status{float:left;padding-right:10px;padding-left:2px}.quc-wrapper .quc-panel-status .quc-icon{vertical-align:top;font-size:24px}.quc-wrapper .quc-panel-message-title{font-size:18px;color:#333}.quc-wrapper .quc-panel-message-desc{margin-top:4px}.quc-wrapper .quc-login-switch{position:absolute;bottom:8px;right:8px;width:40px;height:40px;line-height:40px;color:#9a9a9a;cursor:pointer}.quc-wrapper .quc-login-switch .quc-btn-web{display:none}.quc-wrapper .quc-login-switch .quc-icon{cursor:pointer;font-size:40px}.quc-wrapper .quc-tip{font-size:14px}.quc-wrapper .quc-tip .quc-icon{padding-right:8px;font-size:14px}.quc-wrapper .quc-tip-absolute{line-height:1;font-size:12px;position:absolute;top:4px;left:16px}.quc-wrapper .quc-tag{position:absolute;width:56px;height:28px;left:50%;top:-22px;margin-left:-28px;background:url(https://p0.ssl.qhimg.com/t01a2beff018a5e9abe.png) no-repeat 0 0;-webkit-background-size:100% 100%;-moz-background-size:100%;background-size:100%}.quc-wrapper .quc-third-item .quc-tag{height:24px;top:-14px;margin-left:0;background:url(https://p0.ssl.qhimg.com/t017c8b946faaf4e2ee.png) no-repeat 0 0;-webkit-background-size:100% 100%;-moz-background-size:100%;background-size:100%}.quc-panel-login-qrcode .quc-login-switch .quc-btn-web{display:block}.quc-panel-login-qrcode .quc-login-switch .quc-btn-qrcode{display:none}.quc-panel-message .quc-panel-hd{text-align:left;background-color:#fcfcfc;font-size:16px;color:#333;border-bottom:1px solid #eaeaea;padding:13px 20px;-webkit-border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.quc-panel-message .quc-panel-close{position:absolute;right:20px;top:13px}.quc-panel-message .quc-button-list{margin-top:24px}.quc-panel-dialog .quc-panel-hd{padding-top:48px;text-align:center}.quc-panel-dialog .quc-panel-close{position:absolute;right:30px;top:26px}.quc-panel-dialog .quc-button{font-size:16px}.quc-wrapper .quc-third{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.quc-wrapper .quc-third-hd{border-bottom:1px solid #e3e3e3;text-align:center;font-size:14px;line-height:1;color:#999;margin-bottom:20px}.quc-wrapper .quc-third-hd span{position:relative;padding:0 5px;top:7px;background-color:#fff}.quc-wrapper .quc-third-bd{text-align:center;letter-spacing:-3px}.quc-wrapper .quc-third-bd table{width:100%}.quc-wrapper .quc-third-bd td{text-align:center;padding:0}.quc-wrapper .quc-third-item{position:relative;cursor:pointer;display:inline-block;*display:inline;*zoom:1;width:48px;height:48px;line-height:48px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;text-align:center;background:#f7f9fa no-repeat 50%;-webkit-background-size:40px 40px;-moz-background-size:40px 40px;background-size:40px 40px;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out;font-size:28px;letter-spacing:0;vertical-align:middle}.quc-wrapper .quc-third-item:hover{opacity:.9;filter:alpha(opacity=90)}.quc-wrapper .quc-third-item.quc-icon-wechat{background-image:url(https://p0.ssl.qhimg.com/t0105fec92266aa4e4d.png)}.quc-wrapper .quc-third-item.quc-icon-qq{background-image:url(https://p0.ssl.qhimg.com/t016b6d19c4136c447f.png)}.quc-wrapper .quc-third-item.quc-icon-weibo{background-image:url(https://p0.ssl.qhimg.com/t01f5acae85944ad9d7.png)}.quc-wrapper .quc-third-item.quc-icon-zhifubao{background-image:url(https://p0.ssl.qhimg.com/t01caafc0ee37f9d1c3.png);-webkit-background-size:28px 28px;-moz-background-size:28px 28px;background-size:28px 28px}.quc-wrapper .quc-qrcode-box{margin-bottom:44px}.quc-wrapper .quc-qrcode{position:relative}.quc-wrapper .quc-qrcode-active .quc-qrcode-expired{display:none}.quc-wrapper .quc-qrcode-icon{top:73px;left:73px;width:32px;height:32px;position:absolute}.quc-wrapper .quc-qrcode-inner{-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out;display:inline-block;*display:inline;*zoom:1;padding:12px;left:0;line-height:1;height:154px;width:154px;position:relative;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#f7f9fa}.quc-wrapper .quc-qrcode-inner .quc-qrcode-img{width:154px;height:154px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.quc-wrapper .quc-qrcode-inner .quc-qrcode-scaned{display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.9);text-align:center}.quc-wrapper .quc-qrcode-inner .quc-qrcode-scaned-text{margin-top:50px;font-size:16px;color:#9ba7ba}.quc-wrapper .quc-qrcode-inner .quc-qrcode-scaned .quc-icon{margin-top:16px;font-size:36px;display:block;color:#00d092}.quc-wrapper .quc-qrcode-inner .quc-qrcode-expired{position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.9);text-align:center}.quc-wrapper .quc-qrcode-inner .quc-qrcode-expired .quc-qrcode-expired-text{margin-top:50px;font-size:16px;color:#9ba7ba}.quc-wrapper .quc-qrcode-inner .quc-qrcode-expired .quc-button{margin-top:20px;width:118px;font-size:16px}.quc-wrapper .quc-qrcode-title{margin-top:12px;line-height:28px;font-size:18px;color:#1b2532}.quc-wrapper .quc-qrcode-desc{font-size:14px;line-height:22px;margin-top:4px;color:#9ba7ba}.quc-wrapper .quc-qrcode-help{-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out;position:absolute;right:0;top:0;width:122px;height:192px;opacity:0;filter:alpha(opacity=0);background-repeat:no-repeat}.quc-wrapper .quc-entrance{margin-top:64px}.quc-wrapper .quc-mod-identify .quc-identify-method{margin-top:20px;margin-bottom:10px}.quc-wrapper .quc-mod-identify b{margin-right:10px}.quc-wrapper .quc-mod-identify .quc-form-tips{font-size:12px}.quc-wrapper .quc-mod-identify select{vertical-align:baseline}.quc-wrapper .quc-mod-active-email .quc-top-tip{margin-bottom:14px}.quc-wrapper .quc-mod-active-email .quc-tip{margin-top:6px}.quc-wrapper .quc-mod-active-email .quc-button{width:155px;margin-top:16px;margin-bottom:18px}.quc-wrapper .quc-mod-active-email hr{margin:0;border:none;border-bottom:1px dashed #eaeaea}.quc-wrapper .quc-mod-active-email .quc-resend{margin-top:16px}.quc-wrapper .quc-mod-active-email .quc-link-jump,.quc-wrapper .quc-mod-active-email .quc-resend-result{margin-left:18px}.quc-wrapper .quc-field-has-option{z-index:400;position:relative}.quc-wrapper .quc-identify-title{line-height:1;margin:18px 0 9px}.quc-wrapper .quc-slide .verify-slide-con .img-con{position:relative;z-index:600}.quc-agreement-main{width:320px;padding:24px;background:#fff;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;position:fixed;z-index:10000;left:50%;top:50%;margin-left:-160px;margin-top:-79px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.quc-agreement-mask{position:fixed;z-index:9999;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5)}.quc-agreement-content{color:#1b2532;font-size:14px;padding-bottom:32px}.quc-agreement-content a{color:#00d092;text-decoration:none}.quc-agreement .quc-button-list{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.quc-agreement .quc-button-list .quc-button{width:48%;height:40px;font-size:14px;-webkit-border-radius:40px;-moz-border-radius:40px;border-radius:40px;outline:none;--webkit-appearance:none;cursor:pointer;border:none}.quc-agreement .quc-button-list .quc-button-cancel{color:#657083;background:#f7f9fa}.quc-agreement .quc-button-list .quc-button-confirm{color:#fff;background:#00d092}.quc-agreement-sm .quc-agreement-main{width:230px;margin-left:-115px;margin-top:-66px;padding:16px 24px}.quc-agreement-sm .quc-agreement-content{padding-bottom:24px}.quc-agreement-sm .quc-button-list .quc-button{height:32px}.quc-ie-placeholder{color:#9ba7ba!important}.quc-mask{position:fixed;z-index:4000;top:0;right:0;left:0;bottom:0;background-color:#000;opacity:.3;filter:alpha(opacity=30)}.quc-loading{position:fixed;background-image:url(//p4.ssl.qhimg.com/t01d0a2195eaa0dab4d.png);background-repeat:no-repeat;-webkit-background-size:100% 100%;-moz-background-size:100%;background-size:100%;width:36px;height:36px;top:50%;left:50%;margin-top:-36px;margin-left:-36px;z-index:5000;-webkit-animation:quc-rotate 1.2s linear infinite;-moz-animation:quc-rotate 1.2s linear infinite;-o-animation:quc-rotate 1.2s linear infinite;animation:quc-rotate 1.2s linear infinite}.quc-mod-quick-sign-in .quc-sign-in-iframe{width:100%;height:280px}.quc-alternative-wrapper{font-size:12px}.quc-alternative-wrapper .quc-alternatives{line-height:1}.quc-alternative-wrapper .quc-alternatives .quc-link{margin-right:1em}@-webkit-keyframes quc-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@-moz-keyframes quc-rotate{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(-1turn);transform:rotate(-1turn)}}@-o-keyframes quc-rotate{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@keyframes quc-rotate{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);-moz-transform:rotate(-1turn);transform:rotate(-1turn)}}";
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    function jgg_y(jgg_D) {
      var jgg_m = jgg_V.get(jgg_D, "data") || {};
      return jgg_m.o + "." + jgg_m.m;
    }
    function jgg_o(jgg_D) {
      jgg_q.each(jgg_D, function (jgg_v, jgg_M) {
        "boolean" == jgg_q.type(jgg_M) && (jgg_D[jgg_v] = jgg_M ? 1 : 0);
      });
      return jgg_D;
    }
    function jgg_K(jgg_D, jgg_m) {
      jgg_m.url && (jgg_m.action = jgg_m.url, delete jgg_m.url);
      jgg_m.method = "post";
      var jgg_v = jgg_q("<form>").attr(jgg_m).hide();
      jgg_q.each(jgg_D, function (jgg_M, jgg_B) {
        jgg_q("<input>").attr({
          type: "hidden",
          name: jgg_M,
          value: jgg_B
        }).appendTo(jgg_v);
      });
      return jgg_v[0];
    }
    function jgg_u(jgg_D) {
      for (var jgg_m = "0123456789abcdefghijklmnopqrstuvwxyz", jgg_v = "", jgg_M = jgg_D; jgg_M > 0; --jgg_M) {
        jgg_v += jgg_m[Math.floor(Math.random() * jgg_m.length)];
      }
      return jgg_v;
    }
    function jgg_r(jgg_D) {
      return jgg_D && 32 != jgg_D.length ? jgg_Z.utils.md5(jgg_D) : jgg_D;
    }
    function jgg_C(jgg_D) {
      if (!jgg_D) {
        return "";
      }
      var jgg_m = jgg_Z.utils.md5(jgg_D);
      jgg_m = jgg_m.substring(0, 8) + jgg_u(7) + jgg_m.substring(8);
      var jgg_v = jgg_u(9) + jgg_m + jgg_u(7);
      return jgg_v;
    }
    function jgg_O(jgg_D, jgg_m) {
      return jgg_Z.utils.md5(jgg_D + jgg_m + "WrdnMdsnkBqD2YT");
    }
    function jgg_z(jgg_D) {
      return function (jgg_m) {
        var jgg_v = jgg_q.Deferred();
        var jgg_M = Object.prototype.toString.call(jgg_m).replace(/\[object (\w+)\]$/, "$1");
        "Array" == jgg_M && (jgg_m = {
          errno: 0,
          data: jgg_m
        });
        jgg_m.errno.toString().indexOf("login_captcha") == -1 ? jgg_m.errno = parseInt(jgg_m.errno, 10) : jgg_m.errno = jgg_Z.ERROR.CAPTCHA_INVALID.errno;
        jgg_m.errno === jgg_D ? jgg_v.resolve(jgg_m) : (jgg_m.errmsg = jgg_Z.utils.getErrorMsg(jgg_m.errno, jgg_m.errmsg || jgg_m.msg || ""), jgg_v.reject(jgg_m));
        return jgg_v.promise();
      };
    }
    function jgg_d() {
      jgg_l = null;
    }
    var jgg_H = jgg_T(155);
    var jgg_U = jgg_T(160);
    var jgg_i = jgg_T(40);
    var jgg_I = jgg_T(14).getLogger("request");
    var jgg_Z = QHPass;
    var jgg_q = jgg_Z.$;
    var jgg_G = false;
    var jgg_Y = jgg_T(105);
    var jgg_c = function (jgg_D, jgg_m, jgg_v, jgg_M) {
      function jgg_B() {
        var jgg_g = jgg_Z.getConfig("currentDomain", "");
        var jgg_P = jgg_R.getDomainApi(jgg_g);
        return jgg_M ? jgg_P : jgg_L + "://login.360.cn";
      }
      var jgg_R = this;
      jgg_v = jgg_v || "https" == jgg_Z.getConfig("protocol").toLowerCase();
      this.protocol = jgg_v && !jgg_G ? "https" : "http";
      var jgg_L = this.protocol;
      var jgg_f = {
        src: jgg_Z.getConfig("src"),
        from: jgg_Z.getConfig("src"),
        charset: jgg_Z.getConfig("charset"),
        requestScema: jgg_L,
        quc_sdk_version: QHPass.version,
        quc_sdk_name: "jssdk",
        mid: jgg_Z.utils.getCookie(jgg_U.MID_KEY),
        asc: jgg_Z.utils.getCookie(jgg_U.ASC_KEY),
        mname: jgg_Z.utils.getCookie(jgg_U.MNAME_KEY)
      };
      var jgg_j = {
        url: jgg_B(),
        type: "GET",
        dataType: "jsonp",
        timeout: 10000
      };
      jgg_D = jgg_D || {};
      jgg_m = jgg_m || {};
      this.protocol = jgg_L;
      this.param = jgg_q.extend(jgg_f, jgg_o(jgg_D));
      this.ajaxOpt = jgg_q.extend({
        data: this.param
      }, jgg_j, jgg_m);
      this.I360 = jgg_L + "://i.360.cn";
    };
    jgg_q.extend(jgg_c.prototype, {
      get: function (jgg_D) {
        var jgg_v = this;
        var jgg_M = jgg_V.extend(this.ajaxOpt, {
          url: jgg_D
        });
        var jgg_B = jgg_q.ajax(jgg_M);
        var jgg_R = this.ajaxOpt.data.m;
        var jgg_L = QHPass.getConfig("mainDomain", []);
        var jgg_f = jgg_D ? jgg_D.replace(/(http|https):\/\/login./gi, "") : "";
        jgg_B.done(function (jgg_j) {
          jgg_I.debug("get", jgg_y(jgg_v.ajaxOpt), jgg_M, jgg_j);
        });
        return jgg_B.then(this.done, function (jgg_j) {
          if ("setcookie" == jgg_R && jgg_q.inArray(jgg_f, jgg_L) == -1) {
            var jgg_g = {
              errno: 0,
              errmsg: "",
              domain: "not mainDomain"
            };
            return jgg_v.done(jgg_g);
          }
          return jgg_v.fail({
            method: "get",
            url: jgg_D,
            status: jgg_j
          });
        });
      },
      post: function (jgg_D) {
        var jgg_v = this;
        var jgg_M = jgg_q.Deferred();
        var jgg_B = null;
        var jgg_R = jgg_Z.utils.getGuid();
        var jgg_L = "QiUserJsonp" + jgg_R;
        var jgg_f = "QucI360Form" + jgg_R;
        var jgg_j = "QucI360Iframe" + jgg_R;
        var jgg_g = jgg_q("<iframe name=\"" + jgg_j + "\">").hide();
        var jgg_P = jgg_q.extend({}, this.param, {
          proxy: jgg_Z.getConfig("proxy"),
          callback: jgg_L,
          func: jgg_L
        });
        var jgg_E = jgg_K(jgg_P, {
          name: jgg_f,
          target: jgg_j,
          url: jgg_D || this.ajaxOpt.url
        });
        window[jgg_L] = function (jgg_n) {
          clearTimeout(jgg_B);
          var jgg_Q;
          for (var jgg_x in jgg_n) jgg_n.hasOwnProperty(jgg_x) && (jgg_Q = decodeURIComponent(jgg_n[jgg_x]), jgg_Q.match(/^(\{.*\})|(\[.*\])$/) && (jgg_Q = jgg_q.parseJSON(jgg_Q)), jgg_n[jgg_x] = jgg_Q);
          jgg_M.resolve(jgg_n);
          jgg_I.debug("post", jgg_y(jgg_v.ajaxOpt), jgg_v.ajaxOpt, jgg_n);
        };
        jgg_B = setTimeout(function () {
          jgg_I.error("psp_jump 超时");
          jgg_M.reject({
            method: "post",
            url: jgg_D,
            status: {
              status: 0,
              statusText: "post 请求超时"
            }
          });
        }, this.ajaxOpt.timeout);
        jgg_M.always(function (jgg_n) {
          try {
            delete window[jgg_L];
          } catch (jgg_Q) {
            window[jgg_L] = null;
          }
        });
        jgg_q(document.body).append(jgg_g).append(jgg_E);
        jgg_q(jgg_E).submit();
        return jgg_M.then(this.done, jgg_Z.utils.bind(this.fail, this));
      },
      done: jgg_z(0),
      fail: function (jgg_D) {
        if ("https" == this.protocol && "http:" == location.protocol && jgg_Z.getConfig("retryWithHttp", true)) {
          "sso" == this.ajaxOpt.data.o && "getToken" == this.ajaxOpt.data.m && (jgg_G = true);
          return this.retryHttp(jgg_D);
        }
        var jgg_m = jgg_q.Deferred();
        jgg_m.reject({
          errno: 999999,
          errmsg: "string" == jgg_q.type(jgg_D) ? jgg_D : "请求超时，请重试"
        });
        jgg_Z.events.trigger("error.sync", jgg_D.url || this.ajaxOpt.url);
        return jgg_m.promise();
      },
      getDomainApi: function (jgg_D) {
        jgg_D = jgg_D || location.hostname.replace(/^(?:.+\.)?(\w+\.\w+)$/, "$1");
        return this.protocol + "://login." + jgg_D;
      },
      retryHttp: function (jgg_D) {
        this.protocol = "http";
        this.ajaxOpt.url = this.ajaxOpt.url.replace(/^https/, "http");
        this.I360 = "http://i.360.cn";
        var jgg_m = jgg_D.url && jgg_D.url.replace(/^https/, "http");
        jgg_Z.events.trigger("retryHttp.sync", jgg_m || this.ajaxOpt.url);
        return this[jgg_D.method](jgg_m);
      }
    });
    var jgg_l = null;
    jgg_Z.getUserInfoCache = function () {
      return jgg_l;
    };
    jgg_Z.sync = {
      getRd: function () {
        var jgg_D = new jgg_c({
          o: "sso",
          m: "getRd"
        });
        jgg_D.done = function (jgg_m) {
          var jgg_v = jgg_q.Deferred();
          jgg_m.rd ? jgg_v.resolve(jgg_m) : jgg_v.reject({
            errno: "999999",
            errmsg: "请登录账号"
          });
          return jgg_v.promise();
        };
        return jgg_D.get();
      },
      getToken: function (jgg_D) {
        var jgg_m = new jgg_c({
          o: "sso",
          m: "getToken",
          userName: jgg_D
        }, {
          jsonp: "func"
        }, true);
        return jgg_m.get();
      },
      actualGetUserInfo: function (jgg_D) {
        jgg_D = jgg_V.extend({
          o: "sso",
          m: "info"
        }, jgg_D);
        var jgg_m = new jgg_c(jgg_D);
        jgg_m.done = function (jgg_v) {
          var jgg_M = jgg_q.Deferred();
          return jgg_M.resolve(jgg_v);
        };
        return jgg_m.get();
      },
      getUserInfo: function (jgg_D, jgg_m) {
        var jgg_R = jgg_Z.getConfig("headSize", "100_100");
        var jgg_L = jgg_Z.getConfig("currentDomain", "");
        var jgg_f = {
          "20_20": "a",
          "48_48": "s",
          "50_50": "e",
          "64_64": "m",
          "70_70": "i",
          "100_100": "b",
          "150_150": "q"
        };
        if (undefined === jgg_D ? jgg_D = true : "boolean" != jgg_q.type(jgg_D) && (jgg_m = jgg_D, jgg_D = false), jgg_D && jgg_l && undefined === jgg_m) {
          return jgg_q.Deferred().resolve(jgg_l).promise();
        }
        var jgg_j = {
          o: "sso",
          m: "info",
          show_name_flag: "1",
          head_type: jgg_f[jgg_R]
        };
        var jgg_g = jgg_Z.getConfig("getUserInfo.showRelMobile");
        jgg_g && (jgg_j.relmobile_format = "hide");
        var jgg_B = new jgg_c(jgg_j);
        jgg_B.done = function (jgg_P) {
          var jgg_E = jgg_q.Deferred();
          jgg_P.qid ? (undefined === jgg_m && (jgg_l = jgg_P), jgg_P.renew_rd && jgg_Z.sync.setCookie(jgg_P.renew_rd), jgg_E.resolve(jgg_P)) : jgg_E.reject({
            errno: "999999",
            errmsg: "无法获取登录状态"
          });
          return jgg_E.promise();
        };
        return jgg_Z.getConfig("ignoreCookie") ? jgg_B.get() : jgg_L && jgg_Z.utils.getCookie("Q") ? jgg_B.get(jgg_B.getDomainApi(jgg_L)) : jgg_Z.utils.getCookie("Q") ? jgg_B.get(jgg_B.getDomainApi(jgg_m)) : jgg_q.Deferred().reject(jgg_Z.ERROR.NOT_SIGNED_IN).promise();
      },
      getUserSecInfo: function (jgg_D) {
        var jgg_m = new jgg_c({
          crumb: jgg_D
        });
        return jgg_m.get(jgg_m.I360 + "/security/getUserSecInfo");
      },
      getIdentifyMethod: function (jgg_D, jgg_m, jgg_v) {
        var jgg_M = {
          o: "User",
          m: "getSecWays",
          crumb: jgg_D,
          sensop: jgg_m,
          tk: jgg_v
        };
        var jgg_B = new jgg_c(jgg_M, {}, false, true);
        return jgg_B.post();
      },
      checkWeakPwd: function (jgg_D) {
        var jgg_m = new jgg_c({
          password: jgg_r(jgg_D)
        });
        return jgg_m.get(jgg_m.I360 + "/reg/checkWeakPwd");
      },
      modifyPassword: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          o: "user",
          m: "modifyPwd",
          newPwd: jgg_r(jgg_m),
          rePwd: jgg_r(jgg_m),
          crumb: jgg_D
        }, {}, true, true);
        return jgg_v.post();
      },
      getCaptchaUrl: function (jgg_D) {
        var jgg_m = jgg_Z.getConfig("captchaAppId", "i360");
        var jgg_v = new jgg_c({
          captchaScene: jgg_D,
          captchaApp: jgg_m,
          border: "none"
        });
        return jgg_v.get(jgg_v.I360 + "/QuCapt/getQuCaptUrl");
      },
      checkEmailExist: function (jgg_D) {
        var jgg_m = new jgg_c({
          o: "User",
          m: "checkemail",
          loginEmail: jgg_D
        });
        jgg_m.done = jgg_z(202);
        return jgg_m.get();
      },
      checkUsernameExist: function (jgg_D) {
        var jgg_m = new jgg_c({
          o: "User",
          m: "checkuser",
          userName: jgg_D
        });
        jgg_m.done = jgg_z(10000);
        return jgg_m.get();
      },
      checkNicknameExist: function (jgg_D) {
        var jgg_m = new jgg_c({
          o: "User",
          m: "checknickname",
          nickName: jgg_D
        });
        jgg_m.done = jgg_z(259);
        return jgg_m.get();
      },
      checkMobileNumberExist: function (jgg_D, jgg_m, jgg_v) {
        jgg_D = jgg_m ? jgg_m + jgg_D : jgg_D;
        jgg_v = jgg_v || "";
        var jgg_M = new jgg_c({
          o: "User",
          m: "checkmobile",
          mobile: jgg_D,
          type: jgg_v
        });
        return jgg_M.get();
      },
      checkEmailStatus: function (jgg_D) {
        var jgg_m = new jgg_c({
          crumb: jgg_D
        });
        return jgg_m.get(jgg_m.I360 + "/active/checkLoginEmailStatus");
      },
      getMobileState: function () {
        var jgg_D = new jgg_c({
          o: "user",
          m: "getStateList",
          quc_lang: ""
        });
        return jgg_D.get();
      },
      checkMobileLogin: function (jgg_D) {
        var jgg_m = new jgg_c({
          o: "user",
          m: "checkLoginMethod",
          acctype: 2,
          lm: 1,
          account: jgg_D
        });
        return jgg_m.get();
      },
      checkSignUpCaptchaRequired: function () {
        var jgg_D = new jgg_c({
          captchaApp: jgg_Z.getConfig("captchaAppId", "i360")
        });
        return jgg_D.get(jgg_D.I360 + "/reg/checkcap");
      },
      checkSignInCaptchaRequired: function (jgg_D) {
        var jgg_m = {
          o: "sso",
          m: "checkNeedCaptcha",
          account: jgg_D,
          captchaApp: jgg_Z.getConfig("captchaAppId", "i360")
        };
        var jgg_v = new jgg_c(jgg_m);
        return jgg_v.get();
      },
      identify: function (jgg_D, jgg_m, jgg_v, jgg_M, jgg_B, jgg_R, jgg_L) {
        var jgg_f = {
          o: "User",
          m: "checkSecWay",
          crumb: jgg_D,
          vtype: jgg_v,
          sensop: jgg_m,
          tk: jgg_L
        };
        "pwd" == jgg_v && (jgg_M = jgg_r(jgg_M), jgg_f.captcha = jgg_B, jgg_f.qucrypt_code = jgg_R);
        jgg_f.vc = jgg_M;
        var jgg_j = new jgg_c(jgg_f, {}, true, true);
        return jgg_j.post();
      },
      setUsername: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          o: "User",
          m: "modifyUserName",
          userName: jgg_m,
          crumb: jgg_D
        }, {}, true);
        return jgg_v.post().done(function () {
          jgg_d();
        });
      },
      setNickname: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          o: "User",
          m: "modifyNickName",
          nickName: jgg_m,
          crumb: jgg_D
        }, {}, true);
        return jgg_v.post().done(function () {
          jgg_d();
        });
      },
      setEmail: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          crumb: jgg_D,
          loginEmail: jgg_m
        }, {}, true);
        return jgg_v.post(jgg_v.I360 + "/active/doSetLoginEmail").done(function () {
          jgg_d();
        });
      },
      setSecEmail: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          crumb: jgg_D,
          secemail: jgg_m
        }, {}, true);
        return jgg_v.post(jgg_v.I360 + "/profile/dosetsecemail").done(function () {
          jgg_d();
        });
      },
      setLoginMethod: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          o: "user",
          m: "modifyLoginMethod",
          loginMethod: 1,
          crumb: jgg_D,
          toValue: jgg_m
        }, {}, true);
        return jgg_v.post().done(function () {
          jgg_d();
        });
      },
      setCookie: function (jgg_D, jgg_m) {
        jgg_I.debug("set cookie", jgg_D, jgg_m);
        var jgg_M = jgg_Z.getConfig("supportHttps");
        var jgg_B = "https" == jgg_Z.getConfig("protocol", null).toLowerCase();
        jgg_D = decodeURIComponent(jgg_D);
        undefined === jgg_m ? jgg_m = jgg_Z.getConfig("domainList", []) : jgg_q.isArray(jgg_m) || (jgg_m = [jgg_m]);
        var jgg_R;
        var jgg_L = [];
        jgg_q.each(jgg_m, function (jgg_f, jgg_j) {
          jgg_q.inArray(jgg_j, jgg_M) > -1 ? (jgg_R = new jgg_c({
            o: "sso",
            m: "setcookie",
            s: jgg_D
          }, {
            jsonp: "func"
          }), jgg_L.push(jgg_R.get(jgg_R.getDomainApi(jgg_j)))) : jgg_B || (jgg_R = new jgg_c({
            o: "sso",
            m: "setcookie",
            s: jgg_D
          }, {
            jsonp: "func"
          }), jgg_L.push(jgg_R.get(jgg_R.getDomainApi(jgg_j))));
        });
        return jgg_q.when.apply(jgg_q, jgg_L);
      },
      bindMobileCheck: function (jgg_D, jgg_m) {
        var jgg_v = {
          o: "User",
          mobile: jgg_D,
          m: "bindMobileCheck",
          isRelMobile: jgg_m
        };
        var jgg_M = new jgg_c(jgg_v, {}, false, true);
        return jgg_M.get();
      },
      sendSmsTokenNeedPhrase: function (jgg_D, jgg_m, jgg_v, jgg_M, jgg_B, jgg_R) {
        var jgg_L = "";
        "boolean" == typeof jgg_D && (jgg_v = jgg_m, jgg_m = jgg_D, jgg_M = jgg_v, jgg_B = jgg_M, jgg_D = null);
        "login" == jgg_R ? jgg_L = jgg_U.SMS_SCENE_LOGIN : "reg" == jgg_R && (jgg_L = jgg_U.SMS_SCENE_REG);
        var jgg_f = jgg_m ? jgg_U.SMS_CONDITION_EXIST : jgg_U.SMS_CONDITION_NOT_EXIST;
        var jgg_j = {
          condition: jgg_f,
          account: jgg_v,
          crumb: jgg_D,
          sms_scene: jgg_L,
          captcha: jgg_M,
          vt: jgg_B
        };
        return jgg_Z.sync.sendSmsCodeNew(jgg_j);
      },
      sendSmsCodeNew: function (jgg_D) {
        jgg_D = jgg_V.extend({
          o: "User",
          m: "sendSmsCodeNew"
        }, jgg_D);
        var jgg_m = new jgg_c(jgg_D, {}, false, true);
        return jgg_m.post();
      },
      sendSmsCodeNewV2: function (jgg_D) {
        jgg_D.captchaType != jgg_U.CAPTCHA_SLIDE_TYPE || jgg_D.slideToken && jgg_D.slideVd || (jgg_D.captchaType = "");
        jgg_D = jgg_V.extend({
          o: "User",
          m: "sendSmsCodeNewV2"
        }, jgg_D);
        var jgg_m = new jgg_c(jgg_D);
        return jgg_m.post();
      },
      sendSmsToken: function (jgg_D, jgg_m, jgg_v, jgg_M) {
        var jgg_f = "";
        "boolean" == typeof jgg_D && (jgg_v = jgg_m, jgg_m = jgg_D, jgg_D = null);
        "object" == typeof jgg_v && (jgg_v = jgg_v.areaCode + jgg_v.mobileNumber);
        "findpwd" == jgg_M && (jgg_f = jgg_U.SMS_SCENE_FINDPWD);
        var jgg_L;
        jgg_L = jgg_V.isNumber(jgg_m) ? jgg_m : jgg_m ? jgg_U.SMS_CONDITION_EXIST : jgg_U.SMS_CONDITION_NOT_EXIST;
        var jgg_j = {
          o: "User",
          m: "sendSmsCode",
          condition: jgg_L,
          account: jgg_v,
          crumb: jgg_D,
          sms_scene: jgg_f
        };
        var jgg_g = new jgg_c(jgg_j);
        return jgg_g.post();
      },
      sendEmailToken: function (jgg_D, jgg_m, jgg_v) {
        var jgg_M = {
          o: "User",
          m: "sendEmsCode",
          condition: 1,
          crumb: jgg_D,
          vtype: jgg_m,
          tk: jgg_v
        };
        var jgg_B = new jgg_c(jgg_M, {}, false, true);
        return jgg_B.post();
      },
      sendEmsCodeNew: function (jgg_D) {
        jgg_D.captchaType != jgg_U.CAPTCHA_SLIDE_TYPE || jgg_D.slideToken && jgg_D.slideVd || (jgg_D.captchaType = "");
        jgg_D = jgg_V.extend({
          o: "User",
          m: "sendEmsCodeNew"
        }, jgg_D);
        var jgg_m = new jgg_c(jgg_D);
        return jgg_m.post();
      },
      sendActivationEmail: function (jgg_D) {
        var jgg_m = new jgg_c({
          crumb: jgg_D
        });
        return jgg_m.post(jgg_m.I360 + "/active/doSendActiveEmail");
      },
      sendSecActivationEmail: function (jgg_D) {
        var jgg_m = new jgg_c({
          crumb: jgg_D
        });
        return jgg_m.post(jgg_m.I360 + "/profile/resendSecurityEmail");
      },
      sendSignUpActivationEmail: function (jgg_D) {
        var jgg_m = new jgg_c();
        return jgg_m.get(jgg_D);
      },
      bindMobile: function (jgg_D, jgg_m, jgg_v) {
        jgg_m = jgg_m.areaCode + jgg_m.mobileNumber;
        var jgg_M = new jgg_c({
          o: "user",
          m: "bindMobile",
          crumb: jgg_D,
          mobile: jgg_m,
          smscode: jgg_v
        }, {}, true, true);
        return jgg_M.post().done(function () {
          jgg_d();
        });
      },
      relMobile: function (jgg_D, jgg_m, jgg_v) {
        jgg_m = jgg_m.areaCode + jgg_m.mobileNumber;
        var jgg_M = new jgg_c({
          o: "user",
          m: "bindRelMobile",
          crumb: jgg_D,
          mobile: jgg_m,
          smscode: jgg_v
        }, {}, true, true);
        return jgg_M.post().done(function () {
          jgg_d();
        });
      },
      bindMobileNew: function (jgg_D, jgg_m, jgg_v, jgg_M) {
        jgg_m = jgg_m.areaCode + jgg_m.mobileNumber;
        var jgg_B = new jgg_c({
          o: "user",
          m: "bindMobileNew",
          crumb: jgg_D,
          mobile: jgg_m,
          smscode: jgg_v,
          force_bind: jgg_M ? 1 : 0
        }, {}, true, true);
        return jgg_B.post().done(function () {
          jgg_d();
        });
      },
      signUp: function (jgg_D) {
        var jgg_m = {
          captchaFlag: true,
          captchaApp: jgg_Z.getConfig("captchaAppId", "i360"),
          smDeviceId: jgg_H.getShumeiDeviceId()
        };
        jgg_D = jgg_q.extend(jgg_m, jgg_D);
        jgg_D.password = jgg_r(jgg_D.password);
        jgg_D.rePassword = jgg_r(jgg_D.rePassword) || jgg_D.password;
        var jgg_v = new jgg_c(jgg_D, {}, true);
        return jgg_v.post(jgg_v.I360 + "/reg/doregAccount").done(function () {
          jgg_d();
        });
      },
      signIn: function (jgg_D) {
        var jgg_m = {
          o: "sso",
          m: "login",
          lm: "mobile" == jgg_D.type ? 1 : "email" == jgg_D.type ? 8 : 0,
          captFlag: 1,
          rtype: "data",
          validatelm: jgg_Z.getConfig("signIn.mobile.isMustUseMobileSignIn", false) ? 1 : 0,
          isKeepAlive: false,
          captchaApp: jgg_Z.getConfig("captchaAppId", "i360"),
          userName: jgg_D.account,
          smDeviceId: jgg_H.getShumeiDeviceId(),
          captcha: ""
        };
        "mobile" == jgg_D.type ? jgg_D.acctype = 2 : "normal" == jgg_D.type && (jgg_D.password = jgg_C(jgg_D.password), jgg_D.x = jgg_O(jgg_Z.getConfig("src"), jgg_D.password));
        return jgg_q.when().then(function () {
          return jgg_D.token || jgg_Z.sync.getToken(jgg_D.account).done(function (jgg_v) {
            jgg_D.token = jgg_v.token;
          });
        }).then(function () {
          var jgg_M = new jgg_c(jgg_q.extend(jgg_m, jgg_D), {}, true);
          return jgg_M.post().done(function () {
            jgg_d();
          });
        });
      },
      signOut: function (jgg_D) {
        var jgg_v = jgg_Z.getConfig("supportHttps");
        var jgg_M = "https" == jgg_Z.getConfig("protocol", null).toLowerCase();
        undefined === jgg_D || jgg_D === true ? jgg_D = jgg_Z.getConfig("domainList", []) : jgg_q.isArray(jgg_D) || (jgg_D = [jgg_D]);
        var jgg_B;
        var jgg_R = [];
        jgg_q.each(jgg_D, function (jgg_L, jgg_f) {
          jgg_q.inArray(jgg_f, jgg_v) > -1 ? (jgg_B = new jgg_c({
            o: "sso",
            m: "logout"
          }, {
            jsonp: "func"
          }), jgg_R.push(jgg_B.get(jgg_B.getDomainApi(jgg_f)))) : jgg_M || (jgg_B = new jgg_c({
            o: "sso",
            m: "logout"
          }, {
            jsonp: "func"
          }), jgg_R.push(jgg_B.get(jgg_B.getDomainApi(jgg_f))));
        });
        jgg_d();
        return jgg_q.when.apply(jgg_q, jgg_R);
      },
      fillProfile: function (jgg_D, jgg_m, jgg_v, jgg_M, jgg_B, jgg_R) {
        jgg_M = jgg_M || jgg_v;
        var jgg_f = new jgg_c({
          o: "User",
          m: "perfectInfo",
          crumb: jgg_D,
          userName: jgg_m,
          captcha: jgg_B,
          qucrypt_code: jgg_R,
          password: jgg_r(jgg_v),
          rePassword: jgg_r(jgg_M)
        }, {}, true);
        return jgg_f.post().done(function () {
          jgg_d();
        });
      },
      perfectMobile: function (jgg_D, jgg_m, jgg_v, jgg_M, jgg_B) {
        var jgg_R = new jgg_c({
          o: "user",
          m: "perfectMobile",
          crumb: jgg_D,
          mobile: jgg_m,
          password: jgg_r(jgg_v),
          rePassword: jgg_r(jgg_v),
          smscode: jgg_M,
          force_bind: jgg_B ? 1 : 0
        }, {});
        return jgg_R.post();
      },
      checkQrCodeSignInStatus: function () {
        var jgg_D = jgg_Z.getConfig("currentDomain", "");
        var jgg_m = new jgg_c({
          o: "sso",
          m: "qrLogin"
        }, {
          jsonp: "func"
        });
        return jgg_m.get(jgg_m.getDomainApi(jgg_D));
      },
      getAuthenticationStatus: function (jgg_D) {
        var jgg_m = new jgg_c({
          o: "User",
          m: "getShiMingStatus",
          crumb: jgg_D
        });
        return jgg_m.get();
      },
      submitAuthenMobile: function (jgg_D, jgg_m, jgg_v) {
        var jgg_M = new jgg_c({
          o: "User",
          m: "verifyShiMingCaptcha",
          mobile: jgg_D,
          captcha: jgg_m,
          crumb: jgg_v
        }, {}, true);
        return jgg_M.post();
      },
      fillAuthenInfo: function (jgg_D, jgg_m, jgg_v) {
        var jgg_M = new jgg_c({
          o: "User",
          m: "verifyShiMingSmsCode",
          vt: jgg_D,
          vc: jgg_m,
          crumb: jgg_v
        }, {}, true);
        return jgg_M.post();
      },
      authSendSmsToken: function (jgg_D, jgg_m) {
        var jgg_v = new jgg_c({
          o: "User",
          m: "sendShiMingSmsCode",
          crumb: jgg_D,
          vt: jgg_m
        }, {}, true);
        return jgg_v.post();
      },
      authBindMobile: function (jgg_D, jgg_m) {
        var jgg_M = jgg_i.parse(location.href, true);
        var jgg_B = jgg_M.query;
        var jgg_R = {
          mobile: jgg_Y.getMobileStr(jgg_D),
          smscode: jgg_m,
          f: jgg_B.f,
          c: jgg_B.c,
          type: jgg_B.type,
          mid: jgg_Z.utils.getCookie(jgg_U.MID_KEY),
          asc: jgg_Z.utils.getCookie(jgg_U.ASC_KEY),
          mname: jgg_Z.utils.getCookie(jgg_U.MNAME_KEY)
        };
        return jgg_q.ajax({
          url: "/oauth/mobileBind",
          method: "POST",
          data: jgg_R
        }).then(function (jgg_L) {
          var jgg_f = jgg_q.Deferred();
          jgg_L && 0 === parseInt(jgg_L.errno) ? jgg_f.resolve(jgg_L) : jgg_f.reject(jgg_L);
          return jgg_f.promise();
        });
      },
      mpAuthBindMobile: function (jgg_D, jgg_m) {
        var jgg_v = jgg_Y.getQueryString("openid");
        var jgg_M = jgg_Y.getQueryString("ticket");
        jgg_D = jgg_D || {};
        jgg_m = jgg_m || {};
        var jgg_B = new jgg_c(jgg_V.extend({
          o: "sso",
          m: "oauthLogin",
          fill_info: 1,
          use_mp: 1,
          platform: "weixin",
          openid: jgg_v,
          ticket: jgg_M,
          mid: jgg_Z.utils.getCookie(jgg_U.MID_KEY),
          asc: jgg_Z.utils.getCookie(jgg_U.ASC_KEY),
          mname: jgg_Z.utils.getCookie(jgg_U.MNAME_KEY)
        }, jgg_D), jgg_V.extend({
          url: "//login.360.cn"
        }, jgg_m), true);
        return jgg_B.get();
      },
      getMidByGuard: function (jgg_D) {
        return jgg_q.ajax({
          url: "https://local.info.g9hc4.cn:" + jgg_D,
          dataType: "jsonp",
          jsonpCallback: "uuidjsonpcb2020",
          timeout: 2000
        });
      }
    };
    var jgg_w = {};
    jgg_q.each(jgg_Z.sync, function (jgg_D, jgg_m) {
      var jgg_v = function () {
        var jgg_M = arguments[0];
        var jgg_B = jgg_D + (jgg_q.isPlainObject(jgg_M) ? jgg_Z.utils.JSON.stringify(jgg_M) : [].join.apply(arguments));
        var jgg_R = jgg_w[jgg_B];
        return jgg_R ? jgg_w[jgg_B] : (jgg_R = jgg_w[jgg_B] = jgg_m.apply(jgg_Z.sync, arguments), jgg_R.always(function () {
          delete jgg_w[jgg_B];
        }), jgg_R);
      };
      jgg_v.funcName = jgg_m.funcName = "sync." + jgg_D;
      jgg_Z.sync[jgg_D] = jgg_v;
    });
    jgg_Z.Sync = jgg_c;
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_T(14).getLogger("config");
    var jgg_o = jgg_V.$;
    var jgg_K = ["360.cn", "360pay.cn", "so.com", "qiku.com", "360.com", "360kuai.com", "6360.cn", "kuaijianji.com", "sou.com", "360.net", "n.cn"];
    var jgg_u = ["360kuai.com", "6360.cn", "kuaijianji.com"];
    var jgg_r = {
      charset: document.charset || document.defaultCharset || document.characterSet || "UTF-8",
      supportHttps: jgg_K,
      domainList: jgg_K,
      protocol: location.protocol.replace(":", ""),
      proxy: location.protocol + "//" + location.host + "/psp_jump.html",
      ignoreCookie: false,
      disableSecurityCheck: false,
      useMonitor: true,
      maskZIndex: 4000,
      signIn: {
        hideKeepAlive: true,
        accountPlaceholder: "手机号/用户名/邮箱",
        mobilePlaceholder: "手机号",
        emailPlaceholder: "邮箱",
        passwordPlaceholder: "密码",
        signUpTip: "快速注册",
        findPwdTip: "找回密码",
        keepAliveTip: "保持登录状态",
        protocolText: "360用户服务条款",
        protocolUrl: "//i.360.cn/reg/protocol",
        privacyText: "360用户隐私政策",
        privacyUrl: "//i.360.cn/reg/privacy",
        agreementTip: "",
        agreementTip1: "已仔细阅读并同意",
        agreementTip2: "未注册手机号验证后自动登录，且代表您已同意",
        normal: {
          onlyMobile: false
        },
        qrcode: {
          panelTitle: "扫码登录",
          icon: "//p4.ssl.qhimg.com/t013668e3d403844d04.png",
          appLegendUrl: "//p5.ssl.qhimg.com/t017d5686aa6ea6224d.png",
          appName: "360账号卫士",
          appUrl: "//i.360.cn/security/accountguard",
          title: "微信扫一扫更方便",
          description: "更多方式：360账号卫士/QQ/微博/支付宝",
          qrcodeType: "miniprogram",
          userCenter: 1
        },
        autoreg: 1,
        agreement: true,
        captchaWidth: ""
      },
      signUp: {
        types: ["mobile", "email"],
        hideUsername: true,
        hideNickname: true,
        hidePasswordAgain: true,
        mobilePlaceholder: "手机号",
        emailPlaceholder: "邮箱",
        captchaPlaceholder: "验证码",
        smscodePlaceholder: "短信验证码",
        emailCodePlaceholder: "邮箱验证码",
        passwordPlaceholder: "密码（8-20个字符）",
        nickNamePlaceholder: "昵称",
        userNamePlaceholder: "用户名",
        protocolText: "360用户服务条款",
        protocolUrl: "//i.360.cn/reg/protocol",
        privacyText: "360用户隐私政策",
        privacyUrl: "//i.360.cn/reg/privacy"
      },
      fillProfile: {
        hidePasswordAgain: true,
        type: "mobile"
      },
      bindMobile: {
        showMoBileZone: true,
        isRelMobile: 0
      }
    };
    jgg_V.getConfig = function (jgg_z, jgg_d) {
      jgg_d = undefined !== jgg_d ? jgg_d : null;
      for (var jgg_H, jgg_U = jgg_r, jgg_i = jgg_z.split("."); jgg_i.length > 0;) {
        if (jgg_H = jgg_i.shift(), 0 != jgg_H.length) {
          if (undefined === jgg_U[jgg_H] || jgg_i.length > 0 && !jgg_o.isPlainObject(jgg_U[jgg_H])) {
            return jgg_d;
          }
          jgg_U = jgg_U[jgg_H];
        }
      }
      var jgg_I = jgg_o.isPlainObject(jgg_U) ? jgg_o.extend({}, jgg_U) : jgg_U;
      jgg_y.verbose("get config", {
        key: jgg_z,
        value: jgg_I
      });
      return jgg_I;
    };
    jgg_V.setConfig = function (jgg_z, jgg_d) {
      if (!jgg_z) {
        jgg_V.events.trigger("warn.config", "setConfig parameter key is null or undefined");
        return jgg_V;
      }
      if (jgg_o.isPlainObject(jgg_z)) {
        jgg_z.domainList && jgg_C(jgg_z.domainList);
        jgg_O(true, jgg_r, jgg_z);
        return jgg_V;
      }
      for (var jgg_H, jgg_U, jgg_i = jgg_r, jgg_I = jgg_z.split("."), jgg_Z = false; jgg_I.length > 0;) {
        if (jgg_U = jgg_I.shift(), undefined === jgg_i[jgg_U] && (jgg_i[jgg_U] = {}), !jgg_o.isPlainObject(jgg_i[jgg_U]) && jgg_I.length > 0) {
          jgg_Z = true;
          break;
        }
        jgg_H = jgg_i;
        jgg_i = jgg_i[jgg_U];
      }
      jgg_Z ? jgg_V.events.trigger("warn.config", "setConfig cannot be set on " + jgg_z) : ("domainList" === jgg_U && jgg_C(jgg_d), jgg_H[jgg_U] = jgg_d);
      return jgg_V;
    };
    var jgg_C = function (jgg_z) {
      if (jgg_z && jgg_z.length) {
        for (var jgg_d = 0; jgg_d < jgg_u.length; jgg_d++) {
          jgg_z.indexOf(jgg_u[jgg_d]) === -1 && jgg_z.push(jgg_u[jgg_d]);
        }
      }
    };
    var jgg_O = function () {
      var jgg_z;
      var jgg_d;
      var jgg_H;
      var jgg_U;
      var jgg_i;
      var jgg_I = arguments[0] || {};
      var jgg_Z = 1;
      var jgg_q = arguments.length;
      var jgg_G = false;
      for ("boolean" == typeof jgg_I && (jgg_G = jgg_I, jgg_I = arguments[1] || {}, jgg_Z = 2), "object" == typeof jgg_I || jgg_o.isFunction(jgg_I) || (jgg_I = {}); jgg_Z < jgg_q; jgg_Z++) {
        if (null != (jgg_U = arguments[jgg_Z])) {
          for (jgg_H in jgg_U) jgg_z = jgg_I[jgg_H], jgg_d = jgg_U[jgg_H], jgg_I !== jgg_d && (jgg_G && jgg_d && jgg_o.isPlainObject(jgg_d) ? (jgg_i = jgg_z && jgg_o.isPlainObject(jgg_z) ? jgg_z : {}, jgg_I[jgg_H] = jgg_O(jgg_G, jgg_i, jgg_d)) : undefined !== jgg_d && (jgg_I[jgg_H] = jgg_d));
        }
      }
      return jgg_I;
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_T(14).getLogger("events");
    var jgg_o = jgg_V.$;
    var jgg_K = jgg_o({});
    jgg_V.events = {
      trigger: function (jgg_u, jgg_r) {
        jgg_y.debug("trigger", jgg_u);
        jgg_u = jgg_u.toLowerCase();
        jgg_K.triggerHandler(jgg_u, jgg_r);
        var jgg_C = jgg_u.match(/^([^.]+)\.(.*)$/);
        jgg_C && (jgg_u = jgg_C[1] + ".\\*", jgg_r = {
          namespace: jgg_C[2],
          data: jgg_r
        }, jgg_K.triggerHandler(jgg_u, jgg_r));
      },
      getHandler: function (jgg_u) {
        jgg_u = jgg_u.toLowerCase(jgg_u + "");
        var jgg_r = jgg_u.split(".");
        var jgg_C = jgg_r[0];
        var jgg_O = jgg_o._data(jgg_K[0]).events;
        var jgg_z = jgg_O[jgg_C];
        return jgg_z;
      }
    };
    jgg_o.each(["on", "off", "one"], function (jgg_u, jgg_r) {
      jgg_V.events[jgg_r] = function () {
        var jgg_C;
        var jgg_O;
        var jgg_z = [].slice.apply(arguments);
        jgg_z[0] = jgg_z[0].toLowerCase();
        jgg_z[0].match(/\.\*$/) && (jgg_O = jgg_z.pop(), jgg_C = function (jgg_d, jgg_H) {
          jgg_d.namespace = jgg_d.namespace.replace(/\\\*/, jgg_H.namespace);
          jgg_d.isWildcard = true;
          jgg_O.call(this, jgg_d, jgg_H.data);
        }, jgg_C.guid = jgg_O.guid || (jgg_O.guid = jgg_V.utils.getGuid()), jgg_z.push(jgg_C));
        jgg_o.fn[jgg_r].apply(jgg_K, jgg_z);
      };
    });
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K = jgg_y.$;
      var jgg_u = jgg_y.utils;
      var jgg_r = parseInt(new Date().getTime().toString().substr(4), 10);
      var jgg_C = jgg_T(160);
      var jgg_O = jgg_C.CAPTCHA_GRAPH_TYPE;
      jgg_u.isExisted = function (jgg_I) {
        var jgg_Z = jgg_I.length;
        return jgg_Z > 0;
      };
      jgg_u.addRandomParam = function () {
        var jgg_Z = jgg_y.utils.md5;
        var jgg_q = jgg_K("a");
        var jgg_G = /\//;
        var jgg_Y = /\?/;
        var jgg_c = /#/;
        var jgg_l = "";
        jgg_K.each(jgg_q, function () {
          var jgg_w = jgg_K(this).attr("href");
          var jgg_D = jgg_G.test(jgg_w);
          var jgg_m = jgg_Y.test(jgg_w);
          var jgg_v = jgg_c.test(jgg_w);
          var jgg_M = Math.random() + "";
          jgg_D && !jgg_v && (jgg_l = jgg_m ? "&sb_param=" + jgg_Z(jgg_M) : "?sb_param=" + jgg_Z(jgg_M), jgg_K(this).attr("href", jgg_w + jgg_l));
        });
      };
      jgg_u.getGuid = function () {
        return jgg_r++;
      };
      var jgg_z = "quc-ie-placeholder";
      if (jgg_u.initPlaceholder = function (jgg_I) {
        jgg_K(jgg_I).placeholder({
          customClass: jgg_z
        });
      }, jgg_u.resetPlaceholder = function (jgg_I) {
        jgg_K(jgg_I).each(function () {
          var jgg_Z = jgg_K(this);
          if (jgg_Z.hasClass(jgg_z)) {
            jgg_Z.removeData("placeholderEnabled");
            jgg_Z.val("");
            jgg_Z.removeClass(jgg_z);
            var jgg_q = jgg_Z.data("placeholder-password");
            jgg_q && (jgg_Z.remove(), jgg_q.removeData().show());
            jgg_Z.removeData();
          }
        });
      }, jgg_u.parseCallback = function (jgg_I) {
        return "function" == jgg_K.type(jgg_I) ? jgg_I : jgg_I === true ? function () {
          location.reload();
        } : "string" == jgg_K.type(jgg_I) && 0 === jgg_I.indexOf("http") ? function () {
          location.href = jgg_I;
        } : function () {};
      }, jgg_u.setCookie = function (jgg_I, jgg_Z, jgg_q) {
        var jgg_G = new Date();
        jgg_q = undefined !== jgg_q ? jgg_q : 2;
        jgg_G.setTime(jgg_G.getTime() + 86400000 * jgg_q);
        document.cookie = jgg_I + "=" + encodeURIComponent(jgg_Z) + ";expires=" + jgg_G.toGMTString() + ";path=/";
      }, jgg_u.getCookie = function (jgg_I) {
        var jgg_Z = null;
        var jgg_q = new RegExp("(^| )" + jgg_I + "=([^;]*)(;|$)");
        var jgg_G = document.cookie.match(jgg_q);
        jgg_G && (jgg_Z = decodeURIComponent(jgg_G[2]));
        return jgg_Z;
      }, jgg_u.throttle = function (jgg_I, jgg_Z, jgg_q, jgg_G) {
        var jgg_c;
        var jgg_l;
        var jgg_w;
        var jgg_D = +new Date();
        var jgg_m = 0;
        var jgg_v = 0;
        var jgg_M = null;
        var jgg_B = function () {
          jgg_v = jgg_D;
          jgg_I.apply(jgg_l, jgg_w);
        };
        return function () {
          jgg_D = +new Date();
          jgg_l = this;
          jgg_w = arguments;
          jgg_c = jgg_D - (jgg_G ? jgg_m : jgg_v) - jgg_Z;
          clearTimeout(jgg_M);
          jgg_G ? jgg_q ? jgg_M = setTimeout(jgg_B, jgg_Z) : jgg_c >= 0 && jgg_B() : jgg_c >= 0 ? jgg_B() : jgg_q && (jgg_M = setTimeout(jgg_B, -jgg_c));
          jgg_m = jgg_D;
        };
      }, jgg_u.debounce = function (jgg_I, jgg_Z, jgg_q) {
        return jgg_u.throttle(jgg_I, jgg_Z, jgg_q, true);
      }, jgg_u.bind = function (jgg_I, jgg_Z) {
        if (jgg_I.bind && jgg_I.bind === Function.prototype.bind) {
          return jgg_I.bind(jgg_Z);
        }
        if (!jgg_K.isFunction(jgg_I)) {
          throw new TypeError();
        }
        var jgg_q = [].slice.call(arguments, 2);
        var jgg_G = function () {
          var jgg_Y = [].slice.apply(arguments);
          if (!(this instanceof jgg_G)) {
            return jgg_I.apply(jgg_Z, jgg_q.concat(jgg_Y));
          }
          var jgg_c = function () {};
          jgg_c.prototype = jgg_I.prototype;
          var jgg_l = new jgg_c();
          jgg_c.prototype = null;
          var jgg_w = jgg_I.apply(jgg_l, jgg_q.concat(jgg_Y));
          return Object(jgg_w) === jgg_w ? jgg_w : jgg_l;
        };
        return jgg_G;
      }, jgg_u.initInputId = function (jgg_I) {
        jgg_K(jgg_I).find(".quc-input:not([id])").each(function (jgg_q, jgg_G) {
          var jgg_Y = jgg_K(jgg_G);
          var jgg_c = jgg_Y.parent();
          if (jgg_c = "LABEL" == jgg_c[0].tagName ? jgg_c : jgg_c.siblings("label"), jgg_c.length) {
            var jgg_l = "quc_" + jgg_Y.attr("name") + "_" + jgg_u.getGuid();
            jgg_Y.attr("id", jgg_l);
            jgg_c.attr("for", jgg_l);
          }
        });
      }, jgg_u.selectText = function (jgg_I, jgg_Z, jgg_q) {
        var jgg_G = jgg_K(jgg_I);
        var jgg_Y = jgg_G.val().length;
        for (jgg_Z = parseInt(jgg_Z) || 0, jgg_q = parseInt(jgg_q) || jgg_Y; jgg_Z < 0;) {
          jgg_Z += jgg_Y;
        }
        jgg_G.each(function (jgg_c, jgg_l) {
          if (jgg_l.createTextRange) {
            var jgg_w = jgg_l.createTextRange();
            jgg_w.collapse(true);
            jgg_w.moveStart("character", jgg_Z);
            jgg_w.moveEnd("character", jgg_q);
            jgg_w.select();
          } else {
            if (jgg_l.setSelectionRange) {
              jgg_l.setSelectionRange(jgg_Z, jgg_q);
            } else {
              if (!jgg_l.selectionStart) {
                return false;
              }
              jgg_l.selectionStart = jgg_Z;
              jgg_l.selectionEnd = jgg_q;
            }
          }
        });
        jgg_G.focus();
      }, jgg_u.JSON = {
        parse: jgg_K.parseJSON,
        stringify: window.JSON && JSON.stringify ? JSON.stringify : function (jgg_I) {
          var jgg_q = function (jgg_Y) {
            var jgg_D = typeof jgg_Y;
            var jgg_m = jgg_K.isArray(jgg_Y);
            if ("string" == jgg_D) {
              return "\"" + jgg_Y.replace(/"/g, "\"") + "\"";
            }
            if ("number" == jgg_D || "boolean" == jgg_D) {
              return jgg_Y;
            }
            if (jgg_m || jgg_K.isPlainObject(jgg_Y)) {
              var jgg_w = jgg_K.map(jgg_Y, function (jgg_v, jgg_M) {
                return jgg_m ? jgg_q(jgg_v) : "\"" + jgg_M.toString().replace(/"/g, "\"") + "\":" + jgg_q(jgg_v);
              }).join();
              return jgg_m ? "[" + jgg_w + "]" : "{" + jgg_w + "}";
            }
            return null;
          };
          var jgg_G = jgg_q(jgg_I);
          return jgg_G && jgg_G.toString();
        }
      }, jgg_u.support = jgg_K.extend({
        fixed: false
      }, jgg_K.support), jgg_K(function () {
        try {
          var jgg_I = jgg_K(document.body);
          var jgg_Z = jgg_K("<div>").height(3000);
          var jgg_q = jgg_K("<div>").css({
            position: "fixed",
            top: 100
          }).html("x").appendTo(jgg_Z);
          var jgg_G = jgg_I.scrollTop();
          jgg_Z.appendTo(jgg_I);
          var jgg_Y = jgg_K(document.documentElement).position().top;
          jgg_Y = jgg_Y > 0 ? jgg_Y : 0;
          jgg_I.scrollTop(500);
          var jgg_c = jgg_q[0].offsetTop;
          jgg_u.support.fixed = jgg_c - jgg_Y === 100;
          jgg_Z.remove();
          jgg_I.scrollTop(jgg_G);
        } catch (jgg_l) {}
      }), jgg_u.browser = function () {
        var jgg_I = window.navigator;
        var jgg_Z = jgg_I.userAgent.toLowerCase();
        var jgg_q = /(msie|webkit|gecko|presto|opera|safari|firefox|chrome|maxthon|android|ipad|iphone|webos|hpwos|trident)[ \/os]*([\d_.]+)/gi;
        var jgg_G = {
          platform: jgg_I.platform
        };
        if (jgg_Z.replace(jgg_q, function (jgg_c, jgg_l, jgg_w) {
          jgg_G[jgg_l] || (jgg_G[jgg_l] = jgg_w);
        }), jgg_G.opera && jgg_Z.replace(/opera.*version\/([\d.]+)/, function (jgg_c, jgg_l) {
          jgg_G.opera = jgg_l;
        }), !jgg_G.msie && jgg_G.trident && jgg_Z.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/gi, function (jgg_c, jgg_l) {
          jgg_G.msie = jgg_l;
        }), jgg_G.msie) {
          jgg_G.ie = jgg_G.msie;
          var jgg_Y = parseInt(jgg_G.msie, 10);
          jgg_G["ie" + jgg_Y] = true;
        }
        return jgg_G;
      }(), jgg_u.browser.ie && jgg_u.browser.ie6) {
        try {
          document.execCommand("BackgroundImageCache", false, true);
        } catch (jgg_I) {}
      }
      jgg_u.loadSlideCaptcha = function () {
        var jgg_Z = false;
        return function () {
          return jgg_Z ? jgg_V.resolve() : new jgg_V(function (jgg_G, jgg_Y) {
            jgg_K.getScript("https://s.ssl.qhres2.com/pkg/jszt_captcha/captcha.min.1.0.0.js").then(function () {
              jgg_Z = true;
              jgg_G();
            }, function (jgg_l) {
              console.log(jgg_l);
              jgg_Y(jgg_l);
            });
          });
        };
      }();
      jgg_u.getCaptchaType = function (jgg_Z) {
        return jgg_u.browser.ie && !jgg_u.browser.ie11 ? jgg_O : jgg_Z;
      };
      jgg_y.events.on("afterShow.* DOMUpdated.*", function (jgg_Z, jgg_q) {
        jgg_u.initInputId(jgg_q);
      });
      var jgg_d = function () {
        var jgg_Z;
        try {
          jgg_Z = external.GetMID(external.GetSID(window));
        } catch (jgg_q) {}
        return jgg_Z;
      };
      var jgg_H = function () {
        var jgg_Z;
        try {
          jgg_Z = external.GetASC(external.GetSID(window));
        } catch (jgg_q) {}
        return jgg_Z;
      };
      var jgg_U = function () {
        var jgg_Z;
        try {
          jgg_Z = external.GetDeviceName(external.GetSID(window));
        } catch (jgg_q) {}
        return jgg_Z;
      };
      var jgg_i = function () {
        return new jgg_V(function (jgg_q, jgg_G) {
          var jgg_l = jgg_d();
          var jgg_w = jgg_H();
          var jgg_D = jgg_U() || jgg_y.getConfig("device.name");
          if (jgg_l || jgg_w) {
            return jgg_q({
              mid: jgg_l,
              asc: jgg_w,
              cn: jgg_D
            });
          }
          var jgg_R = jgg_u.getCookie(jgg_C.SILENT_KEY);
          if (jgg_R) {
            var jgg_m = jgg_y.getConfig("device.mid");
            var jgg_v = jgg_y.getConfig("device.asc");
            var jgg_M = jgg_y.getConfig("device.name");
            return jgg_m || jgg_v ? jgg_q({
              mid: jgg_m,
              asc: jgg_v,
              cn: jgg_M
            }) : jgg_G();
          }
          jgg_y.sync.getMidByGuard(54360).done(function (jgg_L) {
            jgg_q(jgg_L);
          }).fail(function (jgg_L) {
            jgg_y.sync.getMidByGuard(51360).done(function (jgg_f) {
              jgg_q(jgg_f);
            }).fail(function (jgg_f) {
              jgg_u.setCookie(jgg_C.SILENT_KEY, 1, 0.16666666666666666);
              var jgg_j = jgg_y.getConfig("device.mid");
              var jgg_g = jgg_y.getConfig("device.asc");
              var jgg_P = jgg_y.getConfig("device.name");
              jgg_j || jgg_g ? jgg_q({
                mid: jgg_j,
                asc: jgg_g,
                cn: jgg_P
              }) : jgg_G(jgg_f);
            });
          });
        });
      };
      jgg_u.getMidAndAsc = function () {
        jgg_i().then(function (jgg_Z) {
          jgg_Z.mid && jgg_u.setCookie(jgg_C.MID_KEY, jgg_Z.mid, 30);
          jgg_Z.asc && jgg_u.setCookie(jgg_C.ASC_KEY, jgg_Z.asc, 30);
          jgg_Z.cn && jgg_u.setCookie(jgg_C.MNAME_KEY, jgg_Z.cn, 30);
        }).catch(function () {});
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(41));
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = window.document;
    var jgg_o = {
      set: function (jgg_i, jgg_I) {
        localStorage.setItem(jgg_i, jgg_I);
      },
      get: function (jgg_i, jgg_I) {
        var jgg_Z = localStorage.getItem(jgg_i);
        return null !== jgg_Z ? jgg_Z : jgg_I;
      },
      remove: function (jgg_i) {
        localStorage.removeItem(jgg_i);
      }
    };
    var jgg_K = {
      set: function (jgg_i, jgg_I) {
        sessionStorage.setItem(jgg_i, jgg_I);
      },
      get: function (jgg_i, jgg_I) {
        var jgg_Z = sessionStorage.getItem(jgg_i);
        return null !== jgg_Z ? jgg_Z : jgg_I;
      },
      remove: function (jgg_i) {
        sessionStorage.removeItem(jgg_i);
      }
    };
    var jgg_u = {
      set: function (jgg_i, jgg_I, jgg_Z) {
        jgg_Z = jgg_Z || {};
        var jgg_q = jgg_Z.expires;
        "number" == typeof jgg_q && (jgg_q = new Date(), jgg_q.setTime(jgg_q.getTime() + jgg_Z.expires));
        try {
          jgg_y.cookie = jgg_i + "=" + escape(jgg_I) + (jgg_q ? ";expires=" + jgg_q.toGMTString() : "") + (jgg_Z.path ? ";path=" + jgg_Z.path : "") + (jgg_Z.domain ? "; domain=" + jgg_Z.domain : "");
          return true;
        } catch (jgg_G) {
          return false;
        }
      },
      get: function (jgg_i, jgg_I) {
        try {
          var jgg_Z = new RegExp("(^| )" + jgg_i + "=([^;]*)(;|$)");
          var jgg_q = jgg_y.cookie.match(jgg_Z);
          if (jgg_q) {
            return unescape(jgg_q[2]);
          }
        } catch (jgg_G) {}
        return jgg_I;
      },
      remove: function (jgg_i) {
        this.set(jgg_i, null, -100);
      }
    };
    jgg_X.utils.isCookieEnabled = function () {
      if (!jgg_y.cookie && !navigator.cookieEnabled) {
        return false;
      }
      var jgg_q = "test_cookie_enable";
      var jgg_G = "test" + Math.random();
      var jgg_Y = jgg_u.set(jgg_q, jgg_G);
      if (!jgg_Y) {
        return false;
      }
      var jgg_Z = jgg_u.get(jgg_q);
      jgg_u.remove(jgg_q);
      return jgg_G == jgg_Z;
    };
    var jgg_r = jgg_X.utils.isCookieEnabled;
    var jgg_C = {
      storeName: "qucUserDataStore",
      init: function () {
        var jgg_i = this;
        if (!jgg_i.isInit) {
          jgg_i.isInit = true;
          jgg_i.object = jgg_h.extend(true, {}, jgg_O);
          var jgg_I = jgg_i.object;
          jgg_I.init();
          jgg_h(function () {
            var jgg_q = "QhpassUserData";
            var jgg_G = jgg_X.getConfig("proxy") + "?fun=" + jgg_q;
            var jgg_Y = jgg_h("<iframe>").attr("src", jgg_G).hide();
            jgg_h(jgg_y.body).append(jgg_Y);
            window[jgg_q] = function () {
              clearTimeout(jgg_c);
              delete jgg_i.object;
              var jgg_l = jgg_Y[0].contentWindow;
              var jgg_w = jgg_l.document;
              jgg_i.store = jgg_w.createElement("input");
              var jgg_D = jgg_i.store;
              setTimeout(function () {
                jgg_D.addBehavior("#default#userData");
                jgg_w.body.appendChild(jgg_D);
                jgg_D.load(jgg_i.storeName);
                jgg_h.each(jgg_I.data, function (jgg_m, jgg_v) {
                  jgg_D.setAttribute(jgg_m, jgg_v);
                });
                jgg_D.save(jgg_i.storeName);
              }, 30);
            };
            var jgg_c = setTimeout(function () {
              jgg_Y.remove();
            }, 20000);
          });
        }
      },
      set: function (jgg_i, jgg_I) {
        this.object ? this.object.set(jgg_i, jgg_I) : (this.store.load(this.storeName), this.store.setAttribute(jgg_i, jgg_I), this.store.save(this.storeName));
      },
      get: function (jgg_i, jgg_I) {
        if (this.object) {
          return this.object.get(jgg_i, jgg_I);
        }
        this.store.load(this.storeName);
        var jgg_Z = this.store.getAttribute(jgg_i);
        return null !== jgg_Z ? jgg_Z : jgg_I;
      },
      remove: function (jgg_i) {
        this.object ? this.object.remove(jgg_i) : this.store.removeAttribute(jgg_i);
      }
    };
    var jgg_O = {
      init: function () {
        this.data = this.data || {};
      },
      set: function (jgg_i, jgg_I) {
        this.data[jgg_i] = jgg_I;
      },
      get: function (jgg_i, jgg_I) {
        var jgg_Z = this.data[jgg_i];
        return undefined !== jgg_Z ? jgg_Z : jgg_I;
      },
      remove: function (jgg_i) {
        delete this.data[jgg_i];
      }
    };
    var jgg_z = navigator.userAgent.toLowerCase();
    var jgg_d = jgg_z.match(/msie ([\d.]+)/);
    var jgg_H = jgg_d && jgg_d[1];
    var jgg_U = 6 == jgg_H || 7 == jgg_H;
    jgg_X.utils.storage = function (jgg_i) {
      var jgg_I;
      switch (jgg_i) {
        default:
        case "local":
          try {
            jgg_I = window.localStorage ? jgg_o : jgg_U ? jgg_C : jgg_O;
          } catch (jgg_Z) {
            jgg_I = jgg_O;
          }
          break;
        case "session":
          try {
            jgg_I = window.sessionStorage ? jgg_K : jgg_O;
          } catch (jgg_q) {
            jgg_I = jgg_O;
          }
          break;
        case "cookie":
          jgg_I = jgg_r() ? jgg_u : jgg_O;
          break;
        case "page":
          jgg_I = jgg_O;
      }
      jgg_I.init && jgg_I.init();
      return jgg_I;
    };
    jgg_U && jgg_C.init();
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_h) {
      var jgg_K = jgg_h.$ || window.$;
      var jgg_u = "<a class=\"quc-link quc-link-login\" href=\"//i.360.cn/login\" target=\"_blank\">立即登录</a>";
      var jgg_r = {
        REALNAME_EMPTY: {
          errno: 204,
          errmsg: "请输入您的真实姓名",
          errmsg_en: "Please enter actual name"
        },
        REALNAME_INVALID: {
          errno: 227,
          errmsg: "请确认您输入的真实姓名是否有误",
          errmsg_en: "Actual name error"
        },
        ACCOUNT_EMPTY: {
          errno: 1030,
          errmsg: "请输入360账号",
          errmsg_en: "Please enter your account"
        },
        ACCOUNT_INVALID: {
          errno: 1035,
          errmsg: "账号不合法",
          errmsg_en: "Account error"
        },
        ACCOUNT_NOT_EXIST: {
          errno: 1036,
          errmsg: "账号或密码错误，请重新输入"
        },
        ACCOUNT_DUPLICATE: {
          errno: 1037,
          errmsg: "该账号已经注册，" + jgg_u,
          errmsg_en: "Account occupied"
        },
        ACCOUNT_RISK: {
          errno: 108,
          errmsg: "",
          errmsg_en: ""
        },
        ACCOUNT_RISK_PANELCLOSE: {
          errno: "",
          errmsg: "登录失败，请按照弹窗操作进行验证",
          errmsg_en: ""
        },
        USERNAME_DUPLICATE: {
          errno: 213,
          errmsg: "用户名已经被使用，" + jgg_u,
          errmsg_en: "Username occupied"
        },
        USERNAME_EMPTY: {
          errno: 215,
          errmsg: "请输入用户名",
          errmsg_en: "Please enter username"
        },
        USERNAME_INAPPROPRIATE: {
          errno: 225,
          errmsg: "用户名包含不适当内容",
          errmsg_en: ""
        },
        USERNAME_INVALID: {
          errno: 199,
          errmsg: "用户名应为2-14个字符,支持中英文、数字或\"_\"",
          errmsg_en: "Username error"
        },
        USERNAME_SIGNIN_INVALID: {
          errno: "",
          errmsg: "用户名应大于2位\"",
          errmsg_en: "Username error"
        },
        USERNAME_NUMBER: {
          errno: 200,
          errmsg: "用户名不能全为数字",
          errmsg_en: ""
        },
        NICKNAME_EMPTY: {
          errno: 205,
          errmsg: "请输入昵称",
          errmsg_en: "Please enter nickname"
        },
        NICKNAME_DUPLICATE: {
          errno: 260,
          errmsg: "昵称已经被占用",
          errmsg_en: "Nickname occupied"
        },
        NICKNAME_INAPPROPRIATE: {
          errno: 226,
          errmsg: "昵称包含不适当内容",
          errmsg_en: ""
        },
        NICKNAME_NUMBER: {
          errno: 262,
          errmsg: "昵称不能全部是数字",
          errmsg_en: ""
        },
        NICKNAME_INVALID: {
          errno: 15000,
          errmsg: "昵称应为2-14个字符,支持中英文、数字、\"_\"或\".\"",
          errmsg_en: ""
        },
        EMAIL_EMPTY: {
          errno: 203,
          errmsg: "请输入邮箱",
          errmsg_en: "Please enter mail address"
        },
        EMAIL_INVALID: {
          errno: 1532,
          errmsg: "邮箱格式有误",
          errmsg_en: "E-mail format error"
        },
        EMAIL_CAPTVHA_EMPTY: {
          errno: 30001,
          errmsg: "请输入验证码",
          errmsg_en: "Please enter the verification code"
        },
        EMAIL_CAPTVHA_INCORRECT: {
          errno: 30002,
          errmsg: "验证码输入有误",
          errmsg_en: "Please enter the verification code"
        },
        EMAIL_NOT_ACTIVATED: {
          errno: 20000
        },
        MOBILE_EMPTY: {
          errno: 1107,
          errmsg: "请输入手机号",
          errmsg_en: "Please enter phone number"
        },
        MOBILE_INVALID: {
          errno: 1100,
          errmsg: "手机号格式有误",
          errmsg_en: "Phone number error"
        },
        MOBILE_DUPLICATE: {
          errno: 1106,
          errmsg: "该手机号已经注册，" + jgg_u,
          errmsg_en: "Phone number occupied"
        },
        MOBILE_NOT_EXIST: {
          errno: 1105,
          errmsg: "该手机号未注册360账号"
        },
        CAPTCHA_INVALID: {
          errno: 78000,
          errmsg: "验证码错误请重新输入",
          errmsg_en: "Please enter the verification code"
        },
        CAPTCHA_INVALID_OLD: {
          errno: 1670,
          errmsg: "验证码错误请重新输入",
          errmsg_en: "Please enter the verification code"
        },
        CAPTCHA_EMPTY: {
          errno: 78002,
          errmsg: "请输入验证码",
          errmsg_en: "Please enter the verification code"
        },
        CAPTCHA_APPID_INVALID: {
          errno: 1300,
          errmsg: "验证码格式有误",
          errmsg_en: "Incorrect Verification Code"
        },
        SMS_TOKEN_EMPTY: {
          errno: 1350,
          errmsg: "请输入验证码",
          errmsg_en: "Please enter the verification code"
        },
        SMS_TOKEN_INCORRECT: {
          errno: 1351,
          errmsg: "验证码输入有误",
          errmsg_en: "Verification Code Error"
        },
        SlideCAPTCHA_EMPTY: {
          errno: 78500,
          errmsg: "请滑动滑块",
          errmsg_en: "Please enter the verification code"
        },
        PASSWORD_TOO_SHORT: {
          errno: 51066,
          errmsg: "密码不能少于8位字符，请重新输入",
          errmsg_en: "The password can't be less than 8 characters, please reenter"
        },
        PASSWORD_TOO_LONG: {
          errno: 51067,
          errmsg: "密码最大长度为20位，请重新输入",
          errmsg_en: "The password maximum length is 20 characters, please reenter"
        },
        PASSWORD_TOO_SIMPLE: {
          errno: 51068,
          errmsg: "至少包含数字/字母/字符两种组合，请重新输入",
          errmsg_en: "Contain at least two combinations of number/letter/character, please reenter"
        },
        PASSWORD_HAS_EMPTY: {
          errno: 51069,
          errmsg: "密码不允许有空格，请重新输入",
          errmsg_en: "The password isn't allowed to have Spaces, please reenter"
        },
        PASSWORD_CHAR_INVALID: {
          errno: 51070,
          errmsg: "不能含有非法字符，请重新输入",
          errmsg_en: "Can't contain illegal characters, please reenter"
        },
        PASSWORD_ACCOUNT_INCLUDES: {
          errno: 51071,
          errmsg: "您的密码与用户名过于相似，请重新输入",
          errmsg_en: "Your password is too similar to the user name, please reenter"
        },
        PASSWORD_EMPTY: {
          errno: 211,
          errmsg: "请输入密码",
          errmsg_en: "You can't leave password empty"
        },
        PASSWORD_INVALID: {
          errno: 1065,
          errmsg: "密码长度应为8-20个字符",
          errmsg_en: "Use at least 8 characters"
        },
        PASSWORD_LEVEL_LOW: {
          errno: 54999,
          errmsg: "密码安全级别过低",
          errmsg_en: "These passwords are easy to guess"
        },
        PASSWORD_WEAK: {
          errno: 54999,
          errmsg: "密码弱，有风险，请重新输入",
          errmsg_en: "These passwords are easy to guess"
        },
        PASSWORD_ORDERED: {
          errno: 54999,
          errmsg: "密码不能为连续字符",
          errmsg_en: "These passwords are easy to guess"
        },
        PASSWORD_CHAR_REPEAT: {
          errno: 54999,
          errmsg: "密码不能全为相同字符",
          errmsg_en: "These passwords are easy to guess"
        },
        PASSWORD_NOT_MATCH: {
          errno: 1091,
          errmsg: "两次密码输入不一致",
          errmsg_en: "These passwords don't match"
        },
        PASSWORD_FULL_SHARP: {
          errno: 54000,
          errmsg: "密码不能包含中文字符，请重新设置",
          errmsg_en: "Please use only letters (a-z), numbers, and periods."
        },
        IDENTIFY_EXPIRE: {
          errno: 153000
        },
        NOT_SIGNED_IN: {
          errno: 1501,
          errmsg: "用户未登陆",
          errmsg_en: ""
        },
        UNKNOWN_ERROR: {
          errno: 999999,
          errmsg: "未知错误",
          errmsg_en: ""
        },
        SUCCESS: {
          errno: 0,
          errmsg: "操作成功",
          errmsg_en: ""
        },
        TIME_OUT: {
          errno: 1,
          errmsg: "网络超时",
          errmsg_en: ""
        },
        IS_AGREE: {
          errno: 1675,
          errmsg: "请阅读并同意“用户协议”和“用户隐私政策”",
          errmsg_en: ""
        }
      };
      var jgg_C = "errmsg";
      var jgg_O = window.i18n;
      jgg_O && jgg_O.is("en") && (jgg_C = "errmsg_en");
      jgg_h.ERROR = jgg_V.forIn(jgg_r, function (jgg_i, jgg_I) {
        jgg_i.errmsg = jgg_i[jgg_C] || jgg_i.errmsg;
      });
      var jgg_z = jgg_h.ERROR;
      jgg_h.utils = jgg_h.utils || {};
      var jgg_d = jgg_h.utils;
      var jgg_H = {
        1402: "手机号当天发送短信次数超限",
        201: "该邮箱已经注册，" + jgg_u,
        30000: "该手机号已经注册，请直接用手机号登录",
        30007: "该手机号已经注册，请直接用手机号登录",
        65002: "该账号未开启短信登录功能，<a class=\"quc-link\" href=\"//i.360.cn/security/setloginmethod\" target=\"_blank\">立即开启</a>",
        65001: "该账号只能通过短信登录，<a class=\"quc-link quc-link-login\" href=\"//i.360.cn/security/setloginmethod\" target=\"_blank\">关闭此功能</a>",
        221: "账号被封禁，<a class=\"quc-link quc-link-login\" href=\"//i.360.cn/complaint\" target=\"_blank\">点此联系客服</a>",
        78001: "提交过于频繁，请稍后重试"
      };
      jgg_K.each(jgg_z, function (jgg_i, jgg_I) {
        jgg_I.errmsg && jgg_I.errmsg.length > 0 && (jgg_H[jgg_I.errno] = jgg_I.errmsg);
      });
      jgg_d.isSameError = function (jgg_i, jgg_I) {
        return undefined !== jgg_i.errno && undefined !== jgg_I.errno && jgg_i.errno === jgg_I.errno;
      };
      jgg_d.defineError = function (jgg_i, jgg_I) {
        var jgg_Z;
        for (var jgg_q in jgg_z) jgg_z.hasOwnProperty(jgg_q) && jgg_z[jgg_q].errno == jgg_i && (jgg_Z = jgg_z[jgg_q], jgg_Z.errmsg = jgg_I);
        jgg_H[jgg_i] = jgg_I;
      };
      jgg_d.getErrorMsg = function (jgg_i, jgg_I) {
        jgg_K.isPlainObject(jgg_i) && (jgg_I = jgg_i.errmsg, jgg_i = jgg_i.errno);
        return jgg_H[jgg_i] || jgg_I.replace(/\+/g, " ").replace(/class=(['"]).+?\1/, "class=\"quc-link\"");
      };
      jgg_d.getErrorType = function (jgg_i) {
        if (null != jgg_i) {
          switch (jgg_i = jgg_i.errno || jgg_i) {
            case jgg_z.MOBILE_EMPTY.errno:
            case jgg_z.MOBILE_INVALID.errno:
            case jgg_z.MOBILE_DUPLICATE.errno:
            case jgg_z.MOBILE_NOT_EXIST.errno:
              return "mobile";
            case jgg_z.EMAIL_EMPTY.errno:
            case jgg_z.EMAIL_INVALID.errno:
              return "email";
            case jgg_z.EMAIL_CAPTVHA_EMPTY.errno:
            case jgg_z.EMAIL_CAPTVHA_INCORRECT.errno:
              return "emailCode";
            case jgg_z.ACCOUNT_EMPTY.errno:
            case jgg_z.USERNAME_EMPTY.errno:
            case jgg_z.USERNAME_INVALID.errno:
            case jgg_z.USERNAME_DUPLICATE.errno:
            case jgg_z.USERNAME_NUMBER.errno:
            case jgg_z.USERNAME_INAPPROPRIATE.errno:
              return "userName";
            case jgg_z.NICKNAME_EMPTY.errno:
            case jgg_z.NICKNAME_INVALID.errno:
            case jgg_z.NICKNAME_DUPLICATE.errno:
            case jgg_z.NICKNAME_INAPPROPRIATE.errno:
            case jgg_z.NICKNAME_NUMBER.errno:
              return "nickName";
            case jgg_z.ACCOUNT_INVALID.errno:
            case jgg_z.ACCOUNT_DUPLICATE.errno:
              return "account";
            case jgg_z.PASSWORD_INVALID.errno:
            case jgg_z.PASSWORD_EMPTY.errno:
            case jgg_z.PASSWORD_CHAR_REPEAT.errno:
            case jgg_z.PASSWORD_ORDERED.errno:
            case jgg_z.PASSWORD_WEAK.errno:
            case jgg_z.PASSWORD_LEVEL_LOW.errno:
              return "password";
            case jgg_z.PASSWORD_NOT_MATCH.errno:
              return "rePassword";
            case jgg_z.CAPTCHA_INVALID.errno:
            case jgg_z.CAPTCHA_EMPTY.errno:
            case jgg_z.CAPTCHA_APPID_INVALID.errno:
            case jgg_z.CAPTCHA_INVALID_OLD.errno:
              return "captcha";
            case jgg_z.SMS_TOKEN_EMPTY.errno:
            case jgg_z.SMS_TOKEN_INCORRECT.errno:
              return "smscode";
            case jgg_z.SlideCAPTCHA_EMPTY.errno:
              return "captcha-slide";
            case jgg_z.ACCOUNT_RISK.errno:
              return "account-risk";
            case jgg_z.IS_AGREE.errno:
              return "is-agree";
          }
          jgg_i -= jgg_i > 900000 ? 900000 : 0;
          return jgg_i >= 10000 && jgg_i < 15000 ? "userName" : jgg_i >= 15000 && jgg_i < 20000 ? "nickName" : jgg_i >= 20000 && jgg_i < 30000 ? "email" : jgg_i >= 30000 && jgg_i < 45000 ? "mobile" : jgg_i >= 50000 && jgg_i < 55000 || 1070 == jgg_i ? "password" : jgg_i >= 55000 && jgg_i < 60000 ? "secemail" : jgg_i >= 65000 && jgg_i < 75000 ? "account" : jgg_i >= 78000 && jgg_i < 78500 ? "captcha" : jgg_i >= 78500 && jgg_i < 79000 ? "captcha-slide" : "other";
        }
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    function jgg_h(jgg_c, jgg_l) {
      var jgg_w = (65535 & jgg_c) + (65535 & jgg_l);
      var jgg_D = (jgg_c >> 16) + (jgg_l >> 16) + (jgg_w >> 16);
      return jgg_D << 16 | 65535 & jgg_w;
    }
    function jgg_y(jgg_c, jgg_l) {
      return jgg_c << jgg_l | jgg_c >>> 32 - jgg_l;
    }
    function jgg_o(jgg_c, jgg_l, jgg_w, jgg_D, jgg_m, jgg_v) {
      return jgg_h(jgg_y(jgg_h(jgg_h(jgg_l, jgg_c), jgg_h(jgg_D, jgg_v)), jgg_m), jgg_w);
    }
    function jgg_K(jgg_c, jgg_l, jgg_w, jgg_D, jgg_m, jgg_v, jgg_M) {
      return jgg_o(jgg_l & jgg_w | ~jgg_l & jgg_D, jgg_c, jgg_l, jgg_m, jgg_v, jgg_M);
    }
    function jgg_u(jgg_c, jgg_l, jgg_w, jgg_D, jgg_m, jgg_v, jgg_M) {
      return jgg_o(jgg_l & jgg_D | jgg_w & ~jgg_D, jgg_c, jgg_l, jgg_m, jgg_v, jgg_M);
    }
    function jgg_r(jgg_c, jgg_l, jgg_w, jgg_D, jgg_m, jgg_v, jgg_M) {
      return jgg_o(jgg_l ^ jgg_w ^ jgg_D, jgg_c, jgg_l, jgg_m, jgg_v, jgg_M);
    }
    function jgg_C(jgg_c, jgg_l, jgg_w, jgg_D, jgg_m, jgg_v, jgg_M) {
      return jgg_o(jgg_w ^ (jgg_l | ~jgg_D), jgg_c, jgg_l, jgg_m, jgg_v, jgg_M);
    }
    function jgg_O(jgg_c, jgg_l) {
      jgg_c[jgg_l >> 5] |= 128 << jgg_l % 32;
      jgg_c[(jgg_l + 64 >>> 9 << 4) + 14] = jgg_l;
      var jgg_w;
      var jgg_D;
      var jgg_m;
      var jgg_v;
      var jgg_M;
      var jgg_B = 1732584193;
      var jgg_R = -271733879;
      var jgg_L = -1732584194;
      var jgg_f = 271733878;
      for (jgg_w = 0; jgg_w < jgg_c.length; jgg_w += 16) {
        jgg_D = jgg_B;
        jgg_m = jgg_R;
        jgg_v = jgg_L;
        jgg_M = jgg_f;
        jgg_B = jgg_K(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w], 7, -680876936);
        jgg_f = jgg_K(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 1], 12, -389564586);
        jgg_L = jgg_K(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 2], 17, 606105819);
        jgg_R = jgg_K(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 3], 22, -1044525330);
        jgg_B = jgg_K(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 4], 7, -176418897);
        jgg_f = jgg_K(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 5], 12, 1200080426);
        jgg_L = jgg_K(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 6], 17, -1473231341);
        jgg_R = jgg_K(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 7], 22, -45705983);
        jgg_B = jgg_K(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 8], 7, 1770035416);
        jgg_f = jgg_K(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 9], 12, -1958414417);
        jgg_L = jgg_K(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 10], 17, -42063);
        jgg_R = jgg_K(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 11], 22, -1990404162);
        jgg_B = jgg_K(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 12], 7, 1804603682);
        jgg_f = jgg_K(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 13], 12, -40341101);
        jgg_L = jgg_K(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 14], 17, -1502002290);
        jgg_R = jgg_K(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 15], 22, 1236535329);
        jgg_B = jgg_u(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 1], 5, -165796510);
        jgg_f = jgg_u(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 6], 9, -1069501632);
        jgg_L = jgg_u(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 11], 14, 643717713);
        jgg_R = jgg_u(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w], 20, -373897302);
        jgg_B = jgg_u(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 5], 5, -701558691);
        jgg_f = jgg_u(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 10], 9, 38016083);
        jgg_L = jgg_u(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 15], 14, -660478335);
        jgg_R = jgg_u(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 4], 20, -405537848);
        jgg_B = jgg_u(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 9], 5, 568446438);
        jgg_f = jgg_u(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 14], 9, -1019803690);
        jgg_L = jgg_u(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 3], 14, -187363961);
        jgg_R = jgg_u(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 8], 20, 1163531501);
        jgg_B = jgg_u(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 13], 5, -1444681467);
        jgg_f = jgg_u(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 2], 9, -51403784);
        jgg_L = jgg_u(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 7], 14, 1735328473);
        jgg_R = jgg_u(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 12], 20, -1926607734);
        jgg_B = jgg_r(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 5], 4, -378558);
        jgg_f = jgg_r(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 8], 11, -2022574463);
        jgg_L = jgg_r(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 11], 16, 1839030562);
        jgg_R = jgg_r(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 14], 23, -35309556);
        jgg_B = jgg_r(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 1], 4, -1530992060);
        jgg_f = jgg_r(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 4], 11, 1272893353);
        jgg_L = jgg_r(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 7], 16, -155497632);
        jgg_R = jgg_r(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 10], 23, -1094730640);
        jgg_B = jgg_r(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 13], 4, 681279174);
        jgg_f = jgg_r(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w], 11, -358537222);
        jgg_L = jgg_r(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 3], 16, -722521979);
        jgg_R = jgg_r(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 6], 23, 76029189);
        jgg_B = jgg_r(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 9], 4, -640364487);
        jgg_f = jgg_r(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 12], 11, -421815835);
        jgg_L = jgg_r(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 15], 16, 530742520);
        jgg_R = jgg_r(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 2], 23, -995338651);
        jgg_B = jgg_C(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w], 6, -198630844);
        jgg_f = jgg_C(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 7], 10, 1126891415);
        jgg_L = jgg_C(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 14], 15, -1416354905);
        jgg_R = jgg_C(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 5], 21, -57434055);
        jgg_B = jgg_C(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 12], 6, 1700485571);
        jgg_f = jgg_C(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 3], 10, -1894986606);
        jgg_L = jgg_C(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 10], 15, -1051523);
        jgg_R = jgg_C(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 1], 21, -2054922799);
        jgg_B = jgg_C(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 8], 6, 1873313359);
        jgg_f = jgg_C(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 15], 10, -30611744);
        jgg_L = jgg_C(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 6], 15, -1560198380);
        jgg_R = jgg_C(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 13], 21, 1309151649);
        jgg_B = jgg_C(jgg_B, jgg_R, jgg_L, jgg_f, jgg_c[jgg_w + 4], 6, -145523070);
        jgg_f = jgg_C(jgg_f, jgg_B, jgg_R, jgg_L, jgg_c[jgg_w + 11], 10, -1120210379);
        jgg_L = jgg_C(jgg_L, jgg_f, jgg_B, jgg_R, jgg_c[jgg_w + 2], 15, 718787259);
        jgg_R = jgg_C(jgg_R, jgg_L, jgg_f, jgg_B, jgg_c[jgg_w + 9], 21, -343485551);
        jgg_B = jgg_h(jgg_B, jgg_D);
        jgg_R = jgg_h(jgg_R, jgg_m);
        jgg_L = jgg_h(jgg_L, jgg_v);
        jgg_f = jgg_h(jgg_f, jgg_M);
      }
      return [jgg_B, jgg_R, jgg_L, jgg_f];
    }
    function jgg_z(jgg_c) {
      var jgg_l;
      var jgg_w = "";
      for (jgg_l = 0; jgg_l < 32 * jgg_c.length; jgg_l += 8) {
        jgg_w += String.fromCharCode(jgg_c[jgg_l >> 5] >>> jgg_l % 32 & 255);
      }
      return jgg_w;
    }
    function jgg_d(jgg_c) {
      var jgg_l;
      var jgg_w = [];
      for (jgg_w[(jgg_c.length >> 2) - 1] = undefined, jgg_l = 0; jgg_l < jgg_w.length; jgg_l += 1) {
        jgg_w[jgg_l] = 0;
      }
      for (jgg_l = 0; jgg_l < 8 * jgg_c.length; jgg_l += 8) {
        jgg_w[jgg_l >> 5] |= (255 & jgg_c.charCodeAt(jgg_l / 8)) << jgg_l % 32;
      }
      return jgg_w;
    }
    function jgg_H(jgg_c) {
      return jgg_z(jgg_O(jgg_d(jgg_c), 8 * jgg_c.length));
    }
    function jgg_U(jgg_c, jgg_l) {
      var jgg_w;
      var jgg_D;
      var jgg_m = jgg_d(jgg_c);
      var jgg_v = [];
      var jgg_M = [];
      for (jgg_v[15] = jgg_M[15] = undefined, jgg_m.length > 16 && (jgg_m = jgg_O(jgg_m, 8 * jgg_c.length)), jgg_w = 0; jgg_w < 16; jgg_w += 1) {
        jgg_v[jgg_w] = 909522486 ^ jgg_m[jgg_w];
        jgg_M[jgg_w] = 1549556828 ^ jgg_m[jgg_w];
      }
      jgg_D = jgg_O(jgg_v.concat(jgg_d(jgg_l)), 512 + 8 * jgg_l.length);
      return jgg_z(jgg_O(jgg_M.concat(jgg_D), 640));
    }
    function jgg_i(jgg_c) {
      var jgg_l;
      var jgg_w;
      var jgg_D = "0123456789abcdef";
      var jgg_m = "";
      for (jgg_w = 0; jgg_w < jgg_c.length; jgg_w += 1) {
        jgg_l = jgg_c.charCodeAt(jgg_w);
        jgg_m += jgg_D.charAt(jgg_l >>> 4 & 15) + jgg_D.charAt(15 & jgg_l);
      }
      return jgg_m;
    }
    function jgg_I(jgg_c) {
      return unescape(encodeURIComponent(jgg_c));
    }
    function jgg_Z(jgg_c) {
      return jgg_H(jgg_I(jgg_c));
    }
    function jgg_q(jgg_c) {
      return jgg_i(jgg_Z(jgg_c));
    }
    function jgg_G(jgg_c, jgg_l) {
      return jgg_U(jgg_I(jgg_c), jgg_I(jgg_l));
    }
    function jgg_Y(jgg_c, jgg_l) {
      return jgg_i(jgg_G(jgg_c, jgg_l));
    }
    jgg_X.utils.md5 = function (jgg_c, jgg_l) {
      return jgg_l ? jgg_Y(jgg_l, jgg_c) : jgg_q(jgg_c);
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      function jgg_K(jgg_q) {
        return String(jgg_q).replace(/[^\x00-\xff]/g, "--").length;
      }
      function jgg_u(jgg_q, jgg_G, jgg_Y) {
        var jgg_c = jgg_K(jgg_q);
        return jgg_G <= jgg_c && jgg_c <= jgg_Y;
      }
      function jgg_r(jgg_q) {
        jgg_q = undefined === jgg_q ? "" : jgg_q;
        return 0 == jgg_q.length;
      }
      function jgg_C(jgg_q) {
        jgg_q = String(jgg_q);
        for (var jgg_G, jgg_Y = jgg_q.length, jgg_c = null, jgg_l = 1; jgg_l < jgg_Y; jgg_l++) {
          if (jgg_G = jgg_q.charCodeAt(jgg_l) - jgg_q.charCodeAt(jgg_l - 1), null !== jgg_c && jgg_c !== jgg_G || Math.abs(jgg_G) > 1) {
            return false;
          }
          jgg_c = jgg_G;
        }
        return true;
      }
      function jgg_O(jgg_q) {
        jgg_q = String(jgg_q);
        var jgg_l;
        var jgg_w = jgg_q.length;
        var jgg_D = jgg_q.split("");
        var jgg_m = jgg_H.unique(jgg_D);
        if (jgg_w >= 21 || jgg_w <= 5) {
          return -1;
        }
        if (1 == jgg_m.length) {
          return -2;
        }
        if (jgg_C(jgg_q)) {
          return -3;
        }
        if (jgg_i.join("#").indexOf("#" + jgg_q + "#") > -1) {
          return -4;
        }
        var jgg_c = {
          d: 0,
          c: 0,
          o: 0
        };
        jgg_H.each(jgg_m, function (jgg_v, jgg_M) {
          /\d/.test(jgg_M) ? jgg_c.d = 1 : /[a-zA-Z]/.test(jgg_M) ? jgg_c.c = 1 : jgg_c.o = 1;
        });
        jgg_l = jgg_c.d + jgg_c.c + jgg_c.o + (jgg_w > 9 ? 2 : 1);
        return jgg_l = Math.max(3, jgg_l);
      }
      var jgg_z = window.logger || jgg_T(14);
      var jgg_d = jgg_z.getLogger("validate");
      var jgg_H = jgg_y.$ || window.$;
      var jgg_U = jgg_y.ERROR;
      var jgg_i = ["", "abcabc", "abc123", "a1b2c3", "aaa111", "123abc", "123456abc", "abc123456", "qwerty", "qwertyuiop", "qweasd", "123qwe", "1qaz2wsx", "1q2w3e4r", "1q2w3e4r5t", "asdasd", "asdfgh", "asdfghjkl", "zxcvbn", "qazwsxedc", "qq123456", "admin", "password", "p@ssword", "passwd", "Password", "Passwd", "Iloveyou", "Woaini", "iloveyou", "Wodemima", "Woaiwojia", "tamade", "nimade", "123789", "1234560", "123465", "123321", "102030", "100200", "4655321", "987654", "123123", "123123123", "121212", "111222", "12301230", "168168", "456456", "321321", "521521", "5201314", "520520", "201314", "211314", "7758258", "7758521", "1314520", "1314521", "147258369", "147852369", "159357", "741852", "741852963", "654321", "852963", "963852741", "115415", "123000", ""];
      var jgg_I = ["erotontrans.@163.com"];
      QHPass.validate = {
        checkRealName: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.REALNAME_EMPTY : !/^[\u4e00-\u9fa5]{2,5}$/.test(jgg_q) && jgg_U.REALNAME_INVALID;
        },
        checkUsername: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.USERNAME_EMPTY : !/^[\w\u4e00-\u9fa5\.]{2,14}$/.test(jgg_q) && jgg_U.USERNAME_INVALID;
        },
        checkSignInUsername: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.USERNAME_EMPTY : jgg_q.length < 2 && jgg_U.USERNAME_SIGNIN_INVALID;
        },
        checkNickname: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.NICKNAME_EMPTY : jgg_u(jgg_q, 2, 14) ? !/^[\w\u4e00-\u9fa5\.]{2,14}$/.test(jgg_q) && jgg_U.NICKNAME_INVALID : jgg_U.NICKNAME_TOO_SHORT;
        },
        isInEmailWhiteList: function (jgg_q, jgg_G) {
          return jgg_V.includes(jgg_q, jgg_G);
        },
        checkEmail: function (jgg_q) {
          var jgg_G = /^[a-z0-9](?:[\w.\-+]*[a-z0-9])?@[a-z0-9][\w.-]*\.[a-z]{2,8}$/i;
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.EMAIL_EMPTY : !jgg_G.test(jgg_q) && !jgg_Z.isInEmailWhiteList(jgg_I, jgg_q) && jgg_U.EMAIL_INVALID;
        },
        checkMobile: function (jgg_q, jgg_G) {
          var jgg_Y;
          var jgg_c;
          var jgg_l;
          jgg_G ? (jgg_Y = jgg_H.trim(jgg_q.mobileNumber), jgg_c = jgg_q.regExp || "^1\\d{10}$", jgg_l = new RegExp(jgg_c)) : (jgg_Y = jgg_H.trim(jgg_q), jgg_l = /^0?1[3456789]\d{9}$/);
          return jgg_r(jgg_Y) ? jgg_U.MOBILE_EMPTY : !jgg_l.test(jgg_Y) && jgg_U.MOBILE_INVALID;
        },
        checkAccount: function (jgg_q) {
          return jgg_V.isEmpty(jgg_q) ? jgg_U.ACCOUNT_EMPTY : !!(this.checkUsername(jgg_q) && this.checkEmail(jgg_q) && this.checkMobile(jgg_q)) && jgg_U.ACCOUNT_INVALID;
        },
        checkSignInAccount: function (jgg_q) {
          return jgg_V.isEmpty(jgg_q) ? jgg_U.ACCOUNT_EMPTY : !!this.checkSignInUsername(jgg_q) && jgg_U.ACCOUNT_INVALID;
        },
        checkCaptcha: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.CAPTCHA_EMPTY : !/^([a-z0-9]{4,7}|\d{1,3}|[\u4E00-\u9FA5]{1,5})$/i.test(jgg_q) && jgg_U.CAPTCHA_INVALID;
        },
        checkSmsToken: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.SMS_TOKEN_EMPTY : !(6 == jgg_q.length && !isNaN(jgg_q)) && jgg_U.SMS_TOKEN_INCORRECT;
        },
        checkEmailToken: function (jgg_q) {
          jgg_q = jgg_H.trim(jgg_q);
          return jgg_r(jgg_q) ? jgg_U.EMAIL_CAPTVHA_EMPTY : !(6 == jgg_q.length && !isNaN(jgg_q)) && jgg_U.EMAIL_CAPTVHA_INCORRECT;
        },
        isInWeakPasswordPool: function (jgg_q) {
          return jgg_V.includes(jgg_i, jgg_q);
        },
        checkPasswordFrontend: function (jgg_q, jgg_G) {
          jgg_V.isString(jgg_q) && (jgg_q = {
            password: jgg_q
          });
          jgg_q = jgg_q || {};
          var jgg_Y = jgg_q.password;
          jgg_Z.checkWeakPasswordRule(jgg_q, function (jgg_c, jgg_l) {
            jgg_l.isInWeakPool = jgg_Z.isInWeakPasswordPool(jgg_Y);
            jgg_l.isInWeakPool && (jgg_c || (jgg_l.level = -4, jgg_c = jgg_l.reason = jgg_V.extend({
              detail: "在弱密码库中"
            }, jgg_U.PASSWORD_WEAK)));
            jgg_d.debug("check password frontend", jgg_q, jgg_l);
            jgg_G(jgg_c, jgg_l);
          });
        },
        looseCheckPasswordFrontend: function (jgg_q, jgg_G) {
          jgg_V.isString(jgg_q) && (jgg_q = {
            password: jgg_q
          });
          jgg_Z.checkWeakPasswordRule(jgg_q, function (jgg_c, jgg_l) {
            jgg_G(jgg_c, jgg_l);
          }, true);
        },
        checkPasswordFrontendSync: function (jgg_q) {
          var jgg_G;
          var jgg_Y = jgg_y.getConfig("src");
          "pcw_swan" === jgg_Y ? jgg_Z.looseCheckPasswordFrontend(jgg_q, function (jgg_c, jgg_l) {
            jgg_G = jgg_l;
          }) : jgg_Z.checkPasswordFrontend(jgg_q, function (jgg_c, jgg_l) {
            jgg_G = jgg_l;
          });
          return jgg_G;
        },
        checkWeakPasswordRule: function (jgg_q, jgg_G, jgg_Y) {
          jgg_q = jgg_q || {};
          var jgg_l = jgg_q.password || "";
          var jgg_w = null;
          var jgg_D = 0;
          var jgg_m = false;
          var jgg_v = jgg_l.length;
          var jgg_M = {
            number: 0,
            letter: 0,
            other: 0
          };
          jgg_V.each(jgg_V.split(jgg_l, ""), function (jgg_j) {
            /\d/.test(jgg_j) ? jgg_M.number++ : /[a-zA-Z]/.test(jgg_j) ? jgg_M.letter++ : jgg_M.other++;
          });
          var jgg_B = jgg_V.filter(jgg_V.keys(jgg_M), function (jgg_j) {
            return jgg_M[jgg_j] > 0;
          });
          if (jgg_v < 8 ? jgg_w = jgg_U.PASSWORD_TOO_SHORT : jgg_v > 20 ? jgg_w = jgg_U.PASSWORD_TOO_LONG : / /.test(jgg_l) ? jgg_w = jgg_U.PASSWORD_HAS_EMPTY : /[^\x00-\xff]/.test(jgg_l) ? jgg_w = jgg_U.PASSWORD_CHAR_INVALID : jgg_B.length < 2 && !jgg_Y && (jgg_w = jgg_U.PASSWORD_TOO_SIMPLE), jgg_Y) {
            switch (jgg_O(jgg_l)) {
              case -2:
                jgg_w = jgg_U.PASSWORD_CHAR_REPEAT;
                break;
              case -3:
                jgg_w = jgg_U.PASSWORD_ORDERED;
            }
          }
          if (!jgg_w) {
            var jgg_R = jgg_q.userName;
            if (jgg_R) {
              var jgg_L = Math.abs(jgg_R.length - jgg_l.length);
              jgg_L <= 1 && (jgg_V.includes(jgg_R, jgg_l) || jgg_V.includes(jgg_l, jgg_R)) && (jgg_w = jgg_U.PASSWORD_ACCOUNT_INCLUDES);
            }
          }
          jgg_w && (jgg_m = true);
          var jgg_f = {
            isWeakRule: jgg_m,
            complexLevel: jgg_D,
            reason: jgg_w,
            charTypes: jgg_B,
            charCount: jgg_M
          };
          jgg_f.isWeakRule ? jgg_G(jgg_f.reason, jgg_f) : jgg_G(null, jgg_f);
        },
        checkPassword: function (jgg_q, jgg_G) {
          if (jgg_q = String(jgg_q), jgg_r(jgg_q)) {
            return jgg_U.PASSWORD_EMPTY;
          }
          if (jgg_q.match(/[^\x00-\xff]/)) {
            return jgg_U.PASSWORD_FULL_SHARP;
          }
          if (!jgg_G) {
            return false;
          }
          switch (jgg_O(jgg_q)) {
            case -1:
              return jgg_U.PASSWORD_INVALID;
            case -2:
              return jgg_U.PASSWORD_CHAR_REPEAT;
            case -3:
              return jgg_U.PASSWORD_ORDERED;
            case -4:
              return jgg_U.PASSWORD_WEAK;
            default:
              return false;
          }
        },
        evaluatePassword: function (jgg_q) {
          return jgg_O(jgg_q);
        },
        checkPasswordConfirm: function (jgg_q, jgg_G) {
          return jgg_q !== jgg_G && jgg_U.PASSWORD_NOT_MATCH;
        },
        checkSdToken: function (jgg_q) {
          if (!jgg_q) {
            return jgg_U.SlideCAPTCHA_EMPTY;
          }
        },
        checkSdVd: function (jgg_q) {
          if (!jgg_q) {
            return jgg_U.SlideCAPTCHA_EMPTY;
          }
        },
        checkIsAgree: function (jgg_q) {
          if (!jgg_q) {
            return jgg_U.IS_AGREE;
          }
        }
      };
      var jgg_Z = QHPass.validate;
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V, jgg_h) {
    !function (jgg_o) {
      var jgg_u = jgg_T(105);
      var jgg_r = jgg_o.$;
      var jgg_C = jgg_T(174);
      var jgg_O = {
        title: "欢迎登录360",
        wrapper: null,
        content: "",
        closeSelector: ".quc-panel-close",
        titleSelector: ".quc-panel-title",
        contentSelector: ".quc-panel-bd",
        closeRemove: true,
        showMask: true,
        fixed: true,
        tpl: jgg_C,
        status: null,
        size: "",
        type: "dialog"
      };
      var jgg_z = function (jgg_d) {
        this.opt = jgg_r.extend({}, jgg_O, jgg_d);
        this._init();
        this._initEvent();
      };
      jgg_r.extend(jgg_z.prototype, {
        _init: function () {
          var jgg_d = this.opt;
          var jgg_H = jgg_d.tpl;
          jgg_d.title && (jgg_H = jgg_H.replace("{title}", jgg_d.title));
          jgg_d.content && (jgg_H = jgg_H.replace("{content}", jgg_d.content));
          this.$el = jgg_r(jgg_H);
          this.$el.addClass("quc-panel-" + jgg_d.size).addClass("quc-panel-" + jgg_d.type);
          jgg_d.wrapper || this.$el.addClass("quc-panel-popup").css("z-index", jgg_o.getConfig("maskZIndex"));
          this.$hd = this.$el.find(jgg_d.titleSelector);
          this.$bd = this.$el.find(jgg_d.contentSelector);
          this.setStatus(jgg_d.status);
        },
        _initEvent: function () {
          var jgg_d = this;
          this.$el.on("click", this.opt.closeSelector, function (jgg_i) {
            jgg_i.preventDefault();
            jgg_d.hide();
            jgg_r(jgg_d).triggerHandler("close");
          });
          var jgg_H = jgg_o.utils.throttle(jgg_d.adjustPosition, 10, true);
          this._adjustPosition = function () {
            setTimeout(function () {
              jgg_H.apply(jgg_d);
            });
          };
          var jgg_U = jgg_r(jgg_u.getTopWindow());
          jgg_U.on("resize", this._adjustPosition);
          this.opt.fixed && !jgg_o.utils.support.fixed && jgg_U.on("scroll", this._adjustPosition);
          this.$el.on("DOMNodeInserted DOMNodeRemoved", this._adjustPosition);
        },
        setMask: function () {
          var jgg_d = jgg_u.getTopWindow();
          if (this.opt.showMask) {
            jgg_z.$mask = jgg_z.$mask || jgg_r(jgg_T(175));
            var jgg_H = parseInt(this.$el.css("z-index"));
            if (jgg_z.$mask.css("z-index", jgg_H - 1), jgg_r(jgg_d.document.body).append(jgg_z.$mask), !jgg_o.utils.support.fixed) {
              var jgg_U = jgg_r(jgg_d.document.body);
              jgg_z.$mask.css({
                height: jgg_U.height(),
                width: jgg_U.width()
              });
            }
          }
          return this;
        },
        removeMask: function () {
          if (this.opt.showMask && jgg_z.$mask) {
            if (jgg_V.first(this.$lastPanel)) {
              var jgg_d = parseInt(this.$lastPanel.css("z-index"));
              if (jgg_d > 0) {
                return void jgg_z.$mask.css("z-index", jgg_d - 1);
              }
            }
            jgg_z.$mask.remove();
          }
          return this;
        },
        removeClose: function () {
          this.$el.find(this.opt.closeSelector).remove();
          return this;
        },
        setStatus: function (jgg_d) {
          var jgg_H = this.$el.find(".quc-panel-status");
          if (jgg_d) {
            var jgg_U = jgg_r("<i>").addClass("quc-icon");
            jgg_U.html("&#xe698;");
            var jgg_i = "quc-error";
            var jgg_I = "quc-icon-reminder";
            "success" === jgg_d && (jgg_i = "quc-success", jgg_I = "quc-icon-success", jgg_U.html("&#xe697;"));
            this.$el.find(".quc-main").addClass("quc-panel-message-has-status");
            jgg_U.addClass(jgg_I);
            jgg_H.addClass(jgg_i).append(jgg_U);
          }
        },
        setTitle: function (jgg_d) {
          "string" == jgg_r.type(jgg_d) && "<" != jgg_r.trim(jgg_d).substr(0, 1) ? this.$hd.html(jgg_d) : this.$hd.empty().append(jgg_r(jgg_d));
          return this;
        },
        setContent: function (jgg_d) {
          var jgg_H = jgg_r(jgg_d);
          this.$bd.empty().append(jgg_H);
          this.adjustPosition();
          jgg_H.on("QucDOMUpdated", this._adjustPosition);
          return this;
        },
        setSize: function (jgg_d, jgg_H) {
          jgg_d && this.$el.width(jgg_d);
          jgg_H && this.$bd.height(jgg_H);
          this.adjustPosition();
          return this;
        },
        adjustPosition: function (jgg_d, jgg_H) {
          if (!this.opt.wrapper) {
            var jgg_U = jgg_u.getTopWindow();
            var jgg_i = jgg_r(jgg_U);
            var jgg_I = this.opt.fixed && this.$el.height() <= jgg_i.height();
            var jgg_Z = jgg_o.utils.support.fixed;
            if (0 == this.$el.parents("body").length) {
              return this;
            }
            if (jgg_d && "center" != jgg_d ? jgg_d = parseInt(jgg_d, 10) : (jgg_d = (jgg_i.height() - this.$el.height()) / 2, jgg_d = jgg_d < 0 ? 0 : jgg_d), jgg_H && "center" != jgg_H ? jgg_H = parseInt(jgg_H, 10) : (jgg_H = (jgg_i.width() - this.$el.width()) / 2, jgg_H = jgg_H < 0 ? 0 : jgg_H), jgg_I && jgg_Z || (jgg_d += jgg_i.scrollTop(), jgg_H += jgg_i.scrollLeft()), this.$el.css({
              top: jgg_d,
              left: jgg_H
            }), jgg_Z) {
              this.$el.css("position", jgg_I ? "fixed" : "absolute");
            } else {
              if (jgg_i.off("scroll", this._adjustPosition), jgg_I && jgg_i.on("scroll", this._adjustPosition), this.opt.showMask) {
                var jgg_q = jgg_r(jgg_U.document.body);
                jgg_z.$mask.css({
                  height: jgg_q.height(),
                  width: jgg_q.width()
                });
              }
            }
            return this;
          }
        },
        show: function () {
          var jgg_d = this.opt.wrapper;
          if (jgg_d) {
            jgg_r(jgg_d).empty().append(this.$el);
            this.$el.find(this.opt.closeSelector).hide();
          } else {
            this.$lastPanel = jgg_r(".quc-panel-popup");
            var jgg_I = parseInt(this.$lastPanel.css("z-index"));
            jgg_I && this.$el.css("z-index", jgg_I + 2);
            this.setMask();
            var jgg_i = jgg_u.getTopWindow();
            this.$el.hide();
            0 == this.$el.parent().length && this.$el.appendTo(jgg_i.document.body);
            this.adjustPosition();
            this.$el.show();
          }
          return this;
        },
        hide: function (jgg_d) {
          this.removeMask();
          jgg_d === true || this.opt.closeRemove ? this.remove() : jgg_d !== false && this.opt.closeRemove || this.$el.hide();
          return this;
        },
        remove: function () {
          this.$hd.detach();
          this.$bd.detach();
          this.$el.remove();
          jgg_r(jgg_u.getTopWindow()).off("resize", this._adjustPosition);
          return this;
        }
      });
      jgg_o.utils.Panel = jgg_z;
      jgg_o.$message = function (jgg_d) {
        return new jgg_h(function (jgg_H, jgg_U) {
          var jgg_i = jgg_T(176);
          var jgg_I = new jgg_o.utils.Panel({
            type: "message",
            title: jgg_d.title,
            content: jgg_i,
            status: jgg_d.status
          });
          var jgg_Z = jgg_I.$el;
          jgg_Z.find(".quc-panel-message-inner").html(jgg_d.content);
          jgg_I.show();
          setTimeout(function () {
            jgg_I.hide(true);
            jgg_H();
          }, 3000);
        });
      };
      jgg_o.$alert = function () {};
      jgg_o.$confirm = function () {};
      jgg_o.$prompt = function () {};
    }(QHPass);
  }).call(jgg_a, jgg_T(2), jgg_T(41));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=\"quc-panel quc-wrapper\"><div class=quc-panel-hd><div class=quc-panel-title>{title}</div><a class=quc-panel-close href=javascript:;><i class=\"quc-icon quc-icon-close\">&#xe695;</i></a></div><div class=quc-panel-bd>{content}</div></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mask></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-main><div class=quc-panel-status></div><div class=quc-panel-message-inner></div></div>";
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_K = jgg_X.$;
    var jgg_u = function (jgg_r) {
      this.timeOut = jgg_r || 120;
      this.timeLeft = this.timeOut;
      this.timeStep = 1000;
      this.running = false;
    };
    jgg_K.extend(jgg_u.prototype, {
      start: function () {
        jgg_K(this).trigger("timer_start", this.timeLeft);
        this.running || (this.running = true, this.interval = setInterval(jgg_X.utils.bind(function () {
          this.timeLeft--;
          this.timeLeft <= 0 ? this.stop() : jgg_K(this).trigger("timer_tick", this.timeLeft);
        }, this), this.timeStep));
      },
      resume: function () {
        this.start();
      },
      pause: function () {
        this.running = false;
        clearInterval(this.interval);
        jgg_K(this).trigger("timer_pause", this.timeLeft);
      },
      stop: function () {
        clearInterval(this.interval);
        this.running = false;
        this.reset();
        jgg_K(this).trigger("timer_stop");
      },
      reset: function () {
        this.timeLeft = this.timeOut;
      },
      setTimeOut: function (jgg_r) {
        this.timeOut = jgg_r;
      },
      isRunning: function () {
        return this.running;
      },
      on: function () {
        jgg_K().on.apply(jgg_K(this), arguments);
      }
    });
    var jgg_y = {};
    jgg_X.utils.getTimer = function (jgg_r, jgg_C) {
      jgg_y[jgg_r] || (jgg_y[jgg_r] = new jgg_u(jgg_C));
      return jgg_y[jgg_r];
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    jgg_X.utils.changeRT = function (jgg_y, jgg_o, jgg_K) {
      var jgg_r = jgg_h(jgg_y);
      isNaN(jgg_o) && (jgg_K = jgg_o, jgg_o = 30);
      jgg_r.on("QucChangeRT", jgg_K);
      jgg_r.each(function (jgg_C, jgg_O) {
        function jgg_z() {
          var jgg_i = jgg_U.val();
          jgg_d !== jgg_i && (jgg_U.trigger("QucChangeRT", {
            oldValue: jgg_d,
            newValue: jgg_i
          }), jgg_d = jgg_i);
        }
        if ("TEXTAREA" == jgg_O.tagName || "INPUT" == jgg_O.tagName) {
          var jgg_d;
          var jgg_H;
          var jgg_U = jgg_h(jgg_O);
          jgg_U.focus(function () {
            jgg_d = jgg_U.val();
            jgg_H = setInterval(jgg_z, jgg_o);
          });
          jgg_U.blur(function () {
            clearInterval(jgg_H);
            jgg_z();
            jgg_d = null;
          });
        }
      });
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    jgg_X(jQuery);
  }(function (jgg_X) {
    function jgg_h(jgg_I) {
      var jgg_Z = {};
      var jgg_q = /^jQuery\d+$/;
      jgg_X.each(jgg_I.attributes, function (jgg_G, jgg_Y) {
        jgg_Y.specified && !jgg_q.test(jgg_Y.name) && (jgg_Z[jgg_Y.name] = jgg_Y.value);
      });
      return jgg_Z;
    }
    function jgg_y(jgg_I, jgg_Z) {
      var jgg_q = this;
      var jgg_G = jgg_X(this);
      if (jgg_q.value === jgg_G.attr(jgg_C ? "placeholder-x" : "placeholder") && jgg_G.hasClass(jgg_i.customClass)) {
        if (jgg_q.value = "", jgg_G.removeClass(jgg_i.customClass), jgg_G.data("placeholder-password")) {
          if (jgg_G = jgg_G.hide().nextAll("input[type=\"password\"]:first").show().attr("id", jgg_G.removeAttr("id").data("placeholder-id")), jgg_I === true) {
            jgg_G[0].value = jgg_Z;
            return jgg_Z;
          }
          jgg_G.focus();
        } else {
          jgg_q == jgg_K() && jgg_q.select();
        }
      }
    }
    function jgg_o(jgg_I) {
      var jgg_Z;
      var jgg_q = this;
      var jgg_G = jgg_X(this);
      var jgg_Y = jgg_q.id;
      if (!jgg_I || "blur" !== jgg_I.type || !jgg_G.hasClass(jgg_i.customClass)) {
        if ("" === jgg_q.value) {
          if ("password" === jgg_q.type) {
            if (!jgg_G.data("placeholder-textinput")) {
              try {
                jgg_Z = jgg_G.clone().prop({
                  type: "text"
                });
              } catch (jgg_l) {
                jgg_Z = jgg_X("<input>").attr(jgg_X.extend(jgg_h(this), {
                  type: "text"
                }));
              }
              jgg_Z.removeAttr("name").data({
                "placeholder-enabled": true,
                "placeholder-password": jgg_G,
                "placeholder-id": jgg_Y
              }).bind("focus.placeholder", jgg_y);
              jgg_G.data({
                "placeholder-textinput": jgg_Z,
                "placeholder-id": jgg_Y
              }).before(jgg_Z);
            }
            jgg_q.value = "";
            jgg_G = jgg_G.removeAttr("id").hide().prevAll("input[type=\"text\"]:first").attr("id", jgg_G.data("placeholder-id")).show();
          } else {
            var jgg_c = jgg_G.data("placeholder-password");
            jgg_c && (jgg_c[0].value = "", jgg_G.attr("id", jgg_G.data("placeholder-id")).show().nextAll("input[type=\"password\"]:last").hide().removeAttr("id"));
          }
          jgg_G.addClass(jgg_i.customClass);
          jgg_G[0].value = jgg_G.attr(jgg_C ? "placeholder-x" : "placeholder");
        } else {
          jgg_G.removeClass(jgg_i.customClass);
        }
      }
    }
    function jgg_K() {
      try {
        return document.activeElement;
      } catch (jgg_I) {}
    }
    var jgg_u;
    var jgg_r;
    var jgg_C = false;
    var jgg_O = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
    var jgg_z = "placeholder" in document.createElement("input") && !jgg_O && !jgg_C;
    var jgg_d = "placeholder" in document.createElement("textarea") && !jgg_O && !jgg_C;
    var jgg_H = jgg_X.valHooks;
    var jgg_U = jgg_X.propHooks;
    var jgg_i = {};
    jgg_z && jgg_d ? (jgg_r = jgg_X.fn.placeholder = function () {
      return this;
    }, jgg_r.input = true, jgg_r.textarea = true) : (jgg_r = jgg_X.fn.placeholder = function (jgg_I) {
      var jgg_Z = {
        customClass: "placeholder"
      };
      jgg_i = jgg_X.extend({}, jgg_Z, jgg_I);
      return this.filter((jgg_z ? "textarea" : ":input") + "[" + (jgg_C ? "placeholder-x" : "placeholder") + "]").not("." + jgg_i.customClass).not(":radio, :checkbox, [type=hidden]").bind({
        "focus.placeholder": jgg_y,
        "blur.placeholder": jgg_o
      }).data("placeholder-enabled", true).trigger("blur.placeholder");
    }, jgg_r.input = jgg_z, jgg_r.textarea = jgg_d, jgg_u = {
      get: function (jgg_I) {
        var jgg_Z = jgg_X(jgg_I);
        var jgg_q = jgg_Z.data("placeholder-password");
        return jgg_q ? jgg_q[0].value : jgg_Z.data("placeholder-enabled") && jgg_Z.hasClass(jgg_i.customClass) ? "" : jgg_I.value;
      },
      set: function (jgg_I, jgg_Z) {
        var jgg_q;
        var jgg_G;
        var jgg_Y = jgg_X(jgg_I);
        "" !== jgg_Z && (jgg_q = jgg_Y.data("placeholder-textinput"), jgg_G = jgg_Y.data("placeholder-password"), jgg_q ? (jgg_y.call(jgg_q[0], true, jgg_Z) || (jgg_I.value = jgg_Z), jgg_q[0].value = jgg_Z) : jgg_G && (jgg_y.call(jgg_I, true, jgg_Z) || (jgg_G[0].value = jgg_Z), jgg_I.value = jgg_Z));
        return jgg_Y.data("placeholder-enabled") ? ("" === jgg_Z ? (jgg_I.value = jgg_Z, jgg_I != jgg_K() && jgg_o.call(jgg_I)) : (jgg_Y.hasClass(jgg_i.customClass) && jgg_y.call(jgg_I), jgg_I.value = jgg_Z), jgg_Y) : (jgg_I.value = jgg_Z, jgg_Y);
      }
    }, jgg_z || (jgg_H.input = jgg_u, jgg_U.value = jgg_u), jgg_d || (jgg_H.textarea = jgg_u, jgg_U.value = jgg_u), jgg_X(function () {
      jgg_X(document).delegate("form", "submit.placeholder", function () {
        var jgg_I = jgg_X("." + jgg_i.customClass, this).each(function () {
          jgg_y.call(this, true, "");
        });
        setTimeout(function () {
          jgg_I.each(jgg_o);
        }, 10);
      });
    }), jgg_X(window).bind("beforeunload.placeholder", function () {
      var jgg_I = true;
      try {
        "javascript:void(0)" === document.activeElement.toString() && (jgg_I = false);
      } catch (jgg_Z) {}
      jgg_I && jgg_X("." + jgg_i.customClass).each(function () {
        this.value = "";
      });
    }));
  });
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = "quc-option-active";
    jgg_X.utils.emailHint = function (jgg_o, jgg_K) {
      function jgg_r(jgg_H) {
        var jgg_i = jgg_h("<div class=\"quc-option-wrapper\"></div>");
        var jgg_I = jgg_i;
        var jgg_Z = function () {
          var jgg_l = jgg_H.val();
          jgg_O && jgg_l.indexOf("@") < 0 || !jgg_l.match(/^[\w._]+@?[\w.]*$/) ? jgg_I.hide() : (jgg_I.show(), setTimeout(function () {
            0 == jgg_I.find("." + jgg_y + ":visible").length && (jgg_I.find("." + jgg_y).removeClass(jgg_y), jgg_I.children(":visible").first().addClass(jgg_y));
          }, 30));
        };
        var jgg_q = function (jgg_c) {
          switch (jgg_c.which) {
            case 38:
              jgg_G(true);
              break;
            case 40:
              jgg_G();
              break;
            case 13:
            case 32:
              var jgg_l = jgg_I.find("." + jgg_y);
              jgg_l.length > 0 && jgg_l.mousedown();
              break;
            case 27:
              jgg_Y(0);
              break;
            default:
              return;
          }
          jgg_c.preventDefault();
        };
        var jgg_G = function (jgg_c) {
          var jgg_l = jgg_I.find("." + jgg_y);
          0 == jgg_l.length ? jgg_l = jgg_I.children(":visible").first() : jgg_l.removeClass(jgg_y);
          var jgg_w = jgg_c ? jgg_l.prevAll(":visible").first() : jgg_l.nextAll(":visible").first();
          0 == jgg_w.length && (jgg_w = jgg_c ? jgg_I.children(":visible").last() : jgg_I.children(":visible").first());
          jgg_w.addClass(jgg_y);
        };
        var jgg_Y = function (jgg_c) {
          jgg_H.off("blur", jgg_Y);
          jgg_H.trigger("blur");
          setTimeout(function () {
            jgg_H.off("QucChangeRT", jgg_Z);
            jgg_H.off("keydown", jgg_q);
            jgg_i.remove();
          }, isNaN(jgg_c) ? 100 : jgg_c);
        };
        jgg_H.on("QucChangeRT", jgg_Z);
        jgg_H.on("keydown", jgg_q);
        jgg_H.on("blur", jgg_Y);
        jgg_Z();
        jgg_h.each(jgg_d, function (jgg_c, jgg_l) {
          var jgg_D = jgg_h("<a>").attr("href", "#").attr("tabindex", -1).addClass("quc-option").appendTo(jgg_I).click(function (jgg_v) {
            jgg_v.preventDefault();
          }).mousedown(function () {
            jgg_H.val(jgg_H.val().split("@")[0] + "@" + jgg_l);
            setTimeout(function () {
              jgg_H.parents(".quc-field").next(".quc-field").find(".quc-input,.quc-button").focus();
            }, 30);
            jgg_Y(0);
          }).on("selectstart", function (jgg_v) {
            jgg_v.preventDefault();
          }).on("mouseover", function () {
            jgg_D.addClass(jgg_y).siblings("." + jgg_y).removeClass(jgg_y);
          });
          var jgg_m = function () {
            var jgg_v = jgg_H.val().split("@");
            jgg_D.html(jgg_v[0].replace(/^(.{10}).{2,}(.{7})$/, "$1...$2") + "@" + jgg_l);
            jgg_v[1] && jgg_l.indexOf("." + jgg_v[1]) == -1 && 0 !== jgg_l.indexOf(jgg_v[1]) ? (jgg_D.hide(), jgg_D.hasClass(jgg_y) && (jgg_D.removeClass(jgg_y), jgg_I.children(":visible").first().addClass(jgg_y))) : jgg_D.css("display", "block");
          };
          jgg_H.on("QucChangeRT", jgg_m);
          jgg_H.one("blur", function () {
            jgg_H.off("QucChangeRT", jgg_m);
          });
          jgg_m();
        });
        jgg_H.after(jgg_i);
      }
      var jgg_C = jgg_h(jgg_o);
      var jgg_O = "account" == jgg_K;
      var jgg_z = jgg_C.filter(":text").add(jgg_C.find(":text"));
      var jgg_d = jgg_X.getConfig("emailHint", ["sina.com", "163.com", "qq.com", "126.com", "vip.sina.com", "sina.cn", "hotmail.com", "gmail.com", "sohu.com", "yahoo.com", "139.com", "189.cn"]);
      jgg_z.on("focus", function (jgg_H) {
        jgg_r(jgg_h(jgg_H.target));
      });
      0 != jgg_z.length && jgg_X.utils.changeRT(jgg_z);
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = {
      wrapper: jgg_h("<div>").css({
        lineHeight: 1.2,
        fontSize: 12
      }),
      init: function () {
        var jgg_O = this;
        jgg_h(function () {
          var jgg_z = jgg_h("<div>").css({
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 200000,
            background: "lightyellow",
            border: "1px orange solid",
            padding: 5
          }).appendTo(document.body);
          jgg_h("<a>").attr("href", "#").css({
            marginRight: 5,
            color: "blue"
          }).html("显示日志").click(function (jgg_d) {
            jgg_d.preventDefault();
            jgg_z.remove();
            var jgg_H = window.open("about:blank", "Quc_JS_SDK_Console", "width=800,height=600,location=0,menubar=0,status=0,toolbar=0");
            jgg_h(jgg_H.document.body).append(jgg_O.wrapper);
          }).appendTo(jgg_z);
          jgg_h("<a>").attr("href", "#").css({
            color: "blue"
          }).html("关闭").click(function (jgg_d) {
            jgg_d.preventDefault();
            jgg_z.remove();
          }).appendTo(jgg_z);
        });
        this.init = function () {};
      },
      log: function (jgg_C, jgg_O) {
        this.init();
        jgg_O && (jgg_C = jgg_C.replace(/%c(.*)$/g, "<span style=\"" + jgg_O + "\">$1</span>"));
        jgg_h("<p>").css({
          margin: 0,
          padding: 0
        }).html(jgg_C).appendTo(this.wrapper);
      },
      clear: function () {
        this.wrapper.clear();
      },
      trace: function () {}
    };
    var jgg_o = window.console ? window.console : jgg_y;
    jgg_X.DEBUG_LEVEL = {
      ERROR: 1,
      FATAL: 1,
      WARN: 2,
      WARNING: 2,
      DEBUG: 4,
      INFO: 8,
      WARN_OR_UPPER: 3,
      WARNING_OR_UPPER: 3,
      DEBUG_OR_UPPER: 7,
      INFO_OR_UPPER: 15,
      ALL: 15
    };
    var jgg_K = jgg_X.DEBUG_LEVEL;
    var jgg_u = function () {
      var jgg_C = jgg_X.DEBUG;
      return isNaN(parseInt(jgg_C, 10)) ? jgg_C && jgg_K[jgg_C] || jgg_K.DEBUG_OR_UPPER : jgg_C;
    };
    jgg_X.logger = {
      history: [],
      log: function (jgg_C, jgg_O) {
        if (QHPass.DEBUG) {
          jgg_O = jgg_O || null;
          var jgg_z = new Date();
          var jgg_d = jgg_z.getHours();
          var jgg_H = jgg_z.getMinutes();
          var jgg_U = jgg_z.getSeconds();
          var jgg_i = jgg_z.getMilliseconds();
          jgg_C = (jgg_d < 10 ? "0" : "") + jgg_d + ":" + (jgg_H < 10 ? "0" : "") + jgg_H + ":" + (jgg_U < 10 ? "0" : "") + jgg_U + "." + (jgg_i < 100 ? jgg_i < 10 ? "00" : "0" : "") + jgg_i + " QHPASS " + jgg_C;
          jgg_O ? jgg_o.log("%c" + jgg_C, "color:" + jgg_O) : jgg_o.log("LOG: " + jgg_C);
        }
      },
      info: function (jgg_C) {
        this.history.push({
          time: new Date(),
          level: jgg_K.INFO,
          message: jgg_C
        });
        jgg_u() & jgg_K.INFO && this.log("INFO: " + jgg_C, "blue");
      },
      debug: function (jgg_C) {
        this.history.push({
          time: new Date(),
          level: jgg_K.DEBUG,
          message: jgg_C
        });
        jgg_u() & jgg_K.DEBUG && this.log("DEBUG: " + jgg_C, "green");
      },
      warn: function (jgg_C) {
        this.history.push({
          time: new Date(),
          level: jgg_K.WARN,
          message: jgg_C
        });
        jgg_u() & jgg_K.WARN && this.log("WARN: " + jgg_C, "orange");
      },
      error: function (jgg_C) {
        if (this.history.push({
          time: new Date(),
          level: jgg_K.ERROR,
          message: jgg_C
        }), jgg_u() & jgg_K.ERROR) {
          throw new Error(jgg_C);
        }
      },
      download: function (jgg_C, jgg_O, jgg_z) {
        var jgg_H = this.history;
        jgg_O = jgg_O && jgg_O.getTime();
        jgg_z = jgg_z && jgg_z.getTime();
        jgg_H = jgg_C ? jgg_h.grep(jgg_H, function (jgg_Z) {
          return jgg_Z.level & jgg_C;
        }) : jgg_H;
        jgg_H = jgg_O ? jgg_h.grep(jgg_H, function (jgg_Z) {
          return jgg_O <= jgg_Z.time.getTime();
        }) : jgg_H;
        jgg_H = jgg_z ? jgg_h.grep(jgg_H, function (jgg_Z) {
          return jgg_z <= jgg_Z.time.getTime();
        }) : jgg_H;
        jgg_H = jgg_h.map(jgg_H, function (jgg_Z) {
          var jgg_q = jgg_Z.time;
          var jgg_G = jgg_q.getFullYear();
          var jgg_Y = jgg_q.getMonth();
          var jgg_c = jgg_q.getDate();
          var jgg_l = jgg_q.getHours();
          var jgg_w = jgg_q.getMinutes();
          var jgg_D = jgg_q.getSeconds();
          var jgg_m = jgg_q.getMilliseconds();
          return jgg_G + "-" + (jgg_Y < 10 ? "0" : "") + jgg_Y + "-" + (jgg_c < 10 ? "0" : "") + jgg_c + " " + (jgg_l < 10 ? "0" : "") + jgg_l + ":" + (jgg_w < 10 ? "0" : "") + jgg_w + ":" + (jgg_D < 10 ? "0" : "") + jgg_D + "." + (jgg_m < 100 ? jgg_m < 10 ? "00" : "0" : "") + jgg_m + " " + jgg_Z.message;
        });
        try {
          var jgg_U = jgg_h("<a>").attr("download", "QHPass_log_" + new Date().getTime() + ".txt").attr("href", URL.createObjectURL(new Blob([jgg_H.join("\r\n")]))).click();
          var jgg_i = document.createEvent("HTMLEvents");
          jgg_i.initEvent("click", false, false);
          jgg_U[0].dispatchEvent(jgg_i);
        } catch (jgg_Z) {
          var jgg_I = window.open("about:blank", "QHPass Log");
          jgg_I.document.write(jgg_H.join("\r\n"));
        }
      }
    };
    var jgg_r = jgg_X.logger;
    jgg_X.events.on("init.core", function () {
      jgg_r.info("初始化");
    });
    jgg_X.events.on("readConfig.config", function (jgg_C, jgg_O) {
      var jgg_z = jgg_O.value;
      jgg_r.info("读取配置 Key:" + jgg_O.key + " Value:" + jgg_X.utils.JSON.stringify(jgg_z));
    });
    jgg_X.events.on("get.sync post.sync", function (jgg_C, jgg_O) {
      jgg_r.info("发送数据 Method:" + jgg_C.type + " Data:" + jgg_X.utils.JSON.stringify(jgg_O.opt.data) + " Url:" + (jgg_O.url || jgg_O.opt.url));
    });
    jgg_X.events.on("receive.sync", function (jgg_C, jgg_O) {
      jgg_r.info("接收数据 Data:" + jgg_X.utils.JSON.stringify(jgg_O));
    });
    jgg_X.events.on("error.sync", function (jgg_C, jgg_O) {
      jgg_r.warn("发送数据失败 Url:" + jgg_O);
    });
    jgg_X.events.on("retryHttp.sync", function (jgg_C, jgg_O) {
      jgg_r.warn("https请求失败，降级至http重试 Url:" + jgg_O);
    });
    jgg_X.events.on("init.*", function (jgg_C) {
      jgg_r.info("模块初始化 Module:" + jgg_C.namespace);
    });
    jgg_X.events.on("show.*", function (jgg_C) {
      jgg_r.info("显示界面 Module:" + jgg_C.namespace);
    });
    jgg_X.events.on("hide.*", function (jgg_C) {
      jgg_r.info("隐藏界面 Module:" + jgg_C.namespace);
    });
    jgg_X.events.on("showLoading.*", function (jgg_C) {
      jgg_r.info("准备界面 Module:" + jgg_C.namespace);
    });
    jgg_X.events.on("hideLoading.*", function (jgg_C) {
      jgg_r.info("界面准备完毕 Module:" + jgg_C.namespace);
    });
    jgg_X.events.on("invalid.*", function (jgg_C, jgg_O) {
      jgg_r.debug("用户输入校验错误 Module:" + jgg_C.namespace + " ErrorCode:" + jgg_O.errno + " ErrorMessage:" + jgg_O.errmsg);
    });
    jgg_X.events.on("warn.* warning.*", function (jgg_C, jgg_O) {
      jgg_O.errno && (jgg_O = "(" + jgg_O.errno + ")" + jgg_O.errmsg);
      jgg_r.warn(" Module:" + jgg_C.namespace + " Message:" + jgg_O);
    });
    jgg_X.events.on("error.* fatal.*", function (jgg_C, jgg_O) {
      jgg_O.errno && (jgg_O = "(" + jgg_O.errno + ")" + jgg_O.errmsg);
      jgg_r.warn(" Module:" + jgg_C.namespace + " Message:" + jgg_O);
    });
    jgg_X.debug = {
      exportLog: function () {
        jgg_r.download.apply(jgg_r, arguments);
      },
      clearLog: function () {
        jgg_r.history = [];
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    jgg_h && jgg_h.fn && jgg_h.fn.jquery || jgg_X.logger.error("未检测到jQuery，QHPass依赖jQuery库，请加载jQuery 1.8+");
    var jgg_y = parseInt(jgg_h.fn.jquery.replace(/\.(\d+)/g, function (jgg_K, jgg_u) {
      return ("0" + jgg_u).slice(-2);
    }));
    var jgg_o = 10800;
    jgg_y < jgg_o && jgg_X.logger.error("jQuery版本过低，目前加载的版本:" + jgg_h.fn.jquery + "，需要版本1.8.0+");
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = jgg_X.events;
    var jgg_o = window;
    var jgg_K = function () {
      function jgg_O(jgg_Z) {
        var jgg_q = 0;
        var jgg_G = 0;
        var jgg_Y = jgg_Z.length - 1;
        for (jgg_Y; jgg_Y >= 0; jgg_Y--) {
          var jgg_c = parseInt(jgg_Z.charCodeAt(jgg_Y), 10);
          jgg_q = (jgg_q << 6 & 268435455) + jgg_c + (jgg_c << 14);
          0 != (jgg_G = 266338304 & jgg_q) && (jgg_q ^= jgg_G >> 21);
        }
        return jgg_q;
      }
      function jgg_z() {
        for (var jgg_Z = navigator, jgg_q = [jgg_Z.appName, jgg_Z.version, jgg_Z.language || jgg_Z.browserLanguage, jgg_Z.platform, jgg_Z.userAgent, screen.width, "x", screen.height, screen.colorDepth, document.referrer].join(""), jgg_G = jgg_q.length, jgg_Y = jgg_o.history.length; jgg_Y;) {
          jgg_q += jgg_Y-- ^ jgg_G++;
        }
        return 2147483647 * (Math.round(2147483647 * Math.random()) ^ jgg_O(jgg_q));
      }
      var jgg_d = "__guid";
      var jgg_H = jgg_X.utils.storage("cookie");
      var jgg_U = document.domain;
      var jgg_i = jgg_H.get(jgg_d);
      if (!jgg_i) {
        jgg_i = [jgg_O(jgg_U), jgg_z(), +new Date() + Math.random() + Math.random()].join(".");
        var jgg_I = {
          expires: 25920000000,
          path: "/",
          domain: jgg_U.toLowerCase().replace(/^(?:.+\.)?(\w+\.\w+)$/, ".$1")
        };
        jgg_H.set(jgg_d, jgg_i, jgg_I);
      }
      return function () {
        return jgg_i;
      };
    }();
    jgg_X.utils.monitor = {};
    jgg_o.__quc_moitor_imgs = {};
    var jgg_u = jgg_o.__quc_moitor_imgs;
    jgg_X.utils.monitor.send = function (jgg_C) {
      if (!jgg_X.DEBUG && jgg_X.getConfig("useMonitor")) {
        var jgg_O = jgg_X.getConfig("monitorUrl", jgg_X.getConfig("protocol") + "://s.360.cn/i360/qhpass.htm");
        var jgg_z = "moitor_img+" + jgg_X.utils.getGuid();
        jgg_u[jgg_z] = new Image();
        var jgg_d = jgg_u[jgg_z];
        jgg_C = jgg_h.param(jgg_h.extend({
          src: jgg_X.getConfig("src"),
          version: jgg_X.version,
          guid: jgg_K()
        }, jgg_C));
        jgg_O += (jgg_O.indexOf("?") > 0 ? "&" : "?") + jgg_C;
        jgg_d.onload = jgg_d.onerror = function () {
          jgg_u && jgg_u[jgg_z] && (jgg_u[jgg_z] = null, delete jgg_u[jgg_z]);
        };
        jgg_d.src = jgg_O;
      }
    };
    var jgg_r = jgg_X.utils.monitor.send;
    jgg_y.on("init.core", function () {
      var jgg_C = jgg_o.screen;
      jgg_r({
        action: "init",
        resolution: [jgg_C.width, jgg_C.height].join("x"),
        color: jgg_C.colorDepth,
        language: navigator.language,
        isCookieEnabled: jgg_X.utils.isCookieEnabled()
      });
    });
    jgg_y.on("retryHttp.sync", function (jgg_C, jgg_O) {
      jgg_O = jgg_O.replace(/\?.*/, "");
      jgg_r({
        action: "retryHttp",
        api: jgg_O
      });
    });
    jgg_y.on("error.sync", function (jgg_C, jgg_O) {
      jgg_O = jgg_O.replace(/\?.*/, "");
      jgg_r({
        action: "netError",
        api: jgg_O
      });
    });
    jgg_y.on("show.*", function (jgg_C) {
      jgg_r({
        action: "show",
        module: jgg_C.namespace
      });
    });
    jgg_y.on("beforeSubmit.*", function (jgg_C) {
      jgg_r({
        action: "submit",
        module: jgg_C.namespace
      });
    });
    jgg_y.on("success.*", function (jgg_C, jgg_O) {
      var jgg_z = {
        action: "success",
        module: jgg_C.namespace
      };
      jgg_O && (jgg_z.type = jgg_O);
      jgg_r(jgg_z);
    });
    jgg_y.on("changeType.*", function (jgg_C, jgg_O) {
      var jgg_z = "change" + jgg_C.namespace.replace(/^./, function (jgg_d) {
        return jgg_d.toUpperCase();
      }) + "Type";
      jgg_r({
        action: jgg_z,
        module: jgg_C.namespace,
        type: jgg_O
      });
    });
    jgg_y.on("invalid.*", function (jgg_C, jgg_O) {
      jgg_r({
        action: "invalid",
        module: jgg_C.namespace,
        errno: jgg_O.errno,
        errmsg: jgg_O.errmsg
      });
    });
    jgg_y.on("warn.* warning.*", function (jgg_C, jgg_O) {
      jgg_O.errno && (jgg_O = "(" + jgg_O.errno + ")" + jgg_O.errmsg);
      jgg_r({
        action: "warn",
        module: jgg_C.namespace,
        message: jgg_O
      });
    });
    jgg_y.on("error.* fatal.*", function (jgg_C, jgg_O) {
      jgg_O.errno && (jgg_O = "(" + jgg_O.errno + ")" + jgg_O.errmsg);
      jgg_r({
        action: "error",
        module: jgg_C.namespace,
        message: jgg_O
      });
    });
    Math.random() < 0.01 && jgg_h.get(jgg_X.getConfig("proxy"), function (jgg_C) {
      var jgg_O = jgg_C.match(/version\s*=\s*['"]?([\d.]+)['"]?/i);
      var jgg_z = jgg_O && jgg_O[1] || "old version";
      jgg_r({
        action: "pspJumpInit",
        jumpVersion: jgg_z
      });
    }, "text");
    jgg_y.on("init.core", function () {
      jgg_X.getConfig("preventClickPenetrate", true) && jgg_y.on("afterShow.*", function () {
        jgg_h(".quc-wrapper").mousedown(function (jgg_O) {
          jgg_O.stopPropagation();
        });
      });
      jgg_y.on("afterShow.*", function (jgg_O) {
        jgg_h(".quc-wrapper").on("click", "a", function () {
          var jgg_z = this;
          jgg_z.href.match(/[^#]$/) && "_blank" == jgg_z.target && jgg_r({
            action: "click",
            module: jgg_O.namespace,
            title: jgg_h(jgg_z).text(),
            link: jgg_z.href
          });
        });
      });
    });
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    function jgg_h(jgg_O, jgg_z) {
      return !jgg_O || (jgg_K.isFunction(jgg_O) ? jgg_O(jgg_z) : jgg_z === jgg_O);
    }
    function jgg_y(jgg_O, jgg_z) {
      if (!jgg_O) {
        return false;
      }
      var jgg_H = 0;
      jgg_K.each(jgg_O.match(/(\d+[wdhms]?)/g), function (jgg_U, jgg_i) {
        var jgg_I = parseInt(jgg_i, 10);
        var jgg_Z = jgg_i.substr(jgg_i.length - 1);
        jgg_H += jgg_C[jgg_Z] ? jgg_I * jgg_C[jgg_Z] : jgg_I;
      });
      return new Date().getTime() - jgg_z >= jgg_H;
    }
    function jgg_o(jgg_O) {
      return jgg_K.map(jgg_O, function (jgg_z) {
        return jgg_z.toString();
      }).join();
    }
    var jgg_K = jgg_X.$;
    var jgg_u = "quc.funcCache";
    var jgg_r = {};
    jgg_X.utils.cache = {
      read: function (jgg_O, jgg_z, jgg_d) {
        function jgg_U() {
          jgg_G[jgg_q] = jgg_G[jgg_q] || {};
          jgg_G[jgg_q][jgg_Y] = jgg_I;
          jgg_i.set(jgg_u, jgg_X.utils.JSON.stringify(jgg_G));
        }
        jgg_K.isPlainObject(jgg_z) && (jgg_d = jgg_z);
        jgg_d = jgg_d || {};
        var jgg_i;
        var jgg_I;
        var jgg_Z;
        var jgg_q = jgg_O.funcName;
        jgg_q ? jgg_i = jgg_X.utils.storage("local") : (jgg_q = jgg_O.qucGuid || (jgg_O.qucGuid = jgg_X.utils.getGuid()), jgg_i = jgg_X.utils.storage("page"));
        var jgg_G = jgg_X.utils.JSON.parse(jgg_i.get(jgg_u, "{}"));
        var jgg_Y = jgg_o(jgg_z);
        return (jgg_Z = jgg_r[jgg_q] && jgg_r[jgg_q][jgg_Y]) ? jgg_Z : (jgg_I = jgg_G[jgg_q] && jgg_G[jgg_q][jgg_Y], !jgg_I || jgg_y(jgg_d.expire, jgg_I.date) ? (jgg_I = {
          data: jgg_O.apply(jgg_d.context || null, jgg_z),
          date: new Date().getTime()
        }, jgg_I.data.done && jgg_I.data.fail ? ((jgg_r[jgg_q] = jgg_r[jgg_q] || {})[jgg_Y] = jgg_I, jgg_I.data.done(function (jgg_c) {
          jgg_h(jgg_d.condition, true) && (jgg_I.data = jgg_c, jgg_I.promise = "resolve", jgg_U());
        }).fail(function (jgg_c) {
          jgg_h(jgg_d.condition, false) && (jgg_I.data = jgg_c, jgg_I.promise = "reject", jgg_U());
        }).always(function () {
          delete jgg_r[jgg_q][jgg_Y];
        })) : (jgg_h(jgg_d.condition, jgg_I.data) && jgg_U(), jgg_I.data)) : jgg_I.promise ? jgg_K.Deferred()[jgg_I.promise](jgg_I.data).promise() : jgg_I.data);
      },
      clear: function (jgg_O, jgg_z) {
        jgg_O ? cache[jgg_O] && jgg_z ? delete jgg_r[jgg_O][jgg_o(jgg_z)] : delete jgg_r[jgg_O] : (jgg_r = {}, jgg_X.utils.storage("page".remove(jgg_u)), jgg_X.utils.storage("local".remove(jgg_u)));
      }
    };
    var jgg_C = {
      s: 1000,
      m: 60000,
      h: 3600000,
      d: 86400000,
      w: 604800000
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K = jgg_y.$;
      var jgg_u = jgg_T(40);
      var jgg_r = null;
      var jgg_C = function (jgg_O) {
        this.name = "func_" + jgg_y.utils.getGuid();
        this.extend(jgg_O);
        this._initFlag = false;
        this._data = {};
      };
      jgg_K.extend(jgg_C.prototype, {
        init: function () {
          var jgg_O = this;
          jgg_O._initFlag ? jgg_O.reset() : (jgg_O._initFlag = true, jgg_O.setUI(jgg_y.ui[jgg_O.name]), jgg_O.setDeferred(), jgg_O.trigger("init"), jgg_O.on("show", function () {
            jgg_O._isShown = true;
          }), jgg_O.on("hide", function () {
            jgg_O._isShown = false;
          }));
          jgg_O._passThrough = jgg_r;
          jgg_r = null;
          return jgg_O;
        },
        reset: function () {
          this._isShown && this.trigger("hide");
          this.setDeferred();
          return this;
        },
        isInit: function () {
          return this._initFlag;
        },
        get: function (jgg_O, jgg_z) {
          var jgg_d = this._data[jgg_O];
          return undefined !== jgg_d ? jgg_d : jgg_z;
        },
        set: function (jgg_O, jgg_z) {
          jgg_K.isPlainObject(jgg_O) ? jgg_K.extend(this._data, jgg_O) : this._data[jgg_O] = jgg_z;
          return this;
        },
        setDeferred: function (jgg_O) {
          var jgg_z = this;
          jgg_z._deferred = jgg_O || jgg_K.Deferred();
          jgg_z._deferred.done(function (jgg_d) {
            jgg_z._callback && jgg_y.utils.parseCallback(jgg_z._callback)(jgg_d);
          });
          return jgg_z;
        },
        resolve: function (jgg_O) {
          this._deferred && this._deferred.resolve(jgg_O);
          return this;
        },
        getCallback: function () {
          return this._callback;
        },
        setCallback: function (jgg_O) {
          this._callback = jgg_O;
          return this;
        },
        clear: function () {
          this._data = {};
          return this;
        },
        getUI: function () {
          return this.ui;
        },
        setUI: function (jgg_O) {
          this.ui = jgg_O;
          jgg_O.init(this);
          return this;
        },
        getPassThrough: function () {
          return this._passThrough;
        },
        setPassThrough: function (jgg_O) {
          jgg_r = jgg_O;
        },
        reportError: function (jgg_O, jgg_z, jgg_d) {
          jgg_z = jgg_z ? "Msg:" + jgg_z + " " : "";
          jgg_O.errno ? jgg_z = jgg_z + "Error:(" + jgg_O.errno + ")" + jgg_O.errmsg : jgg_z += jgg_O.toString();
          jgg_y.events.trigger((jgg_d ? "warn." : "error.") + this.name, jgg_z);
        },
        reportWarn: function (jgg_O, jgg_z) {
          this.reportError(jgg_O, jgg_z, true);
        },
        extend: function () {
          var jgg_O = [].slice.apply(arguments);
          jgg_O.unshift(this);
          jgg_K.extend.apply(null, jgg_O);
        },
        setCaptchaUrl: function (jgg_O) {
          this._captchaUrl = jgg_O;
        },
        getCaptchaUrl: function (jgg_O, jgg_z) {
          var jgg_d = this;
          var jgg_H = jgg_d._captchaUrl;
          var jgg_U = jgg_K.Deferred();
          jgg_d.set("qucrypt_code", "");
          !jgg_z && jgg_H ? (jgg_H = jgg_u.appendQuery(jgg_H, {
            _: jgg_V.now(),
            border: "none",
            format: "json"
          }), jgg_d.getBase64CaptchaUrl(jgg_H).then(function (jgg_i) {
            jgg_U.resolve(jgg_i);
          }, function (jgg_i) {
            jgg_U.reject(jgg_i);
          })) : jgg_y.sync.getCaptchaUrl(jgg_O).then(function (jgg_i) {
            jgg_H = jgg_d._captchaUrl = jgg_i.captchaUrl;
            jgg_H = jgg_u.appendQuery(jgg_H, {
              _: jgg_V.now(),
              border: "none",
              format: "json"
            });
            jgg_d.getBase64CaptchaUrl(jgg_H).then(function (jgg_I) {
              jgg_U.resolve(jgg_I);
            }, function (jgg_I) {
              jgg_U.reject(jgg_I);
            });
          });
          return jgg_U.promise();
        },
        getBase64CaptchaUrl: function (jgg_O) {
          var jgg_z = this;
          var jgg_d = jgg_K.Deferred();
          jgg_K.ajax({
            url: jgg_O,
            dataType: "jsonp"
          }).done(function (jgg_H) {
            "0" == jgg_H.errno ? (jgg_z.set("qucrypt_code", jgg_H.qucrypt_code), jgg_d.resolve("data:image/png;base64," + jgg_H.image)) : jgg_d.reject(jgg_H.errmsg);
          }).fail(function (jgg_H) {
            jgg_d.reject(jgg_H);
          });
          return jgg_d.promise();
        }
      });
      jgg_K.each(["on", "one", "off", "trigger"], function (jgg_O, jgg_z) {
        jgg_C.prototype[jgg_z] = function () {
          arguments[0] = arguments[0].replace(/( |$)/g, "." + this.name + "$1");
          jgg_y.events[jgg_z].apply(null, arguments);
          return this;
        };
      });
      jgg_y.getLogic = function (jgg_O) {
        return new jgg_C(jgg_O);
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_V = jgg_X.$;
    jgg_X.getUserInfo = function (jgg_h, jgg_y, jgg_o) {
      "function" == jgg_V.type(jgg_h) && (jgg_o = jgg_y, jgg_y = jgg_h, jgg_h = undefined);
      return jgg_X.sync.getUserInfo(jgg_h).done(function (jgg_u) {
        jgg_y && jgg_y(jgg_u);
      }).fail(function (jgg_u) {
        jgg_o && jgg_o(jgg_u);
      });
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_T) {
    jgg_T.getUserSecInfo = function (jgg_X) {
      jgg_T.sync.getUserInfo().then(function (jgg_V) {
        return jgg_T.sync.getUserSecInfo(jgg_V.crumb);
      }).always(jgg_X);
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_T) {
    jgg_T.getEmailStatus = function (jgg_X) {
      jgg_T.sync.getUserInfo().then(function (jgg_V) {
        return jgg_T.sync.checkEmailStatus(jgg_V.crumb);
      }).always(jgg_X);
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h;
    var jgg_y = jgg_X.$;
    jgg_X.getQuickLoginStatus = function (jgg_o, jgg_K) {
      if (jgg_y.isFunction(jgg_o) && (jgg_K = jgg_o, jgg_o = 20000), !jgg_h) {
        var jgg_r = jgg_X.getConfig("protocol");
        var jgg_C = jgg_r + "://axlogin.passport.360.cn/ptlogin.php";
        var jgg_O = jgg_C + "?nextUrl=" + jgg_X.getConfig("proxy") + "&us=1&func=QHPass.getQuickLoginUserLength";
        var jgg_z = jgg_y("<iframe>").attr("src", jgg_O).hide().appendTo(document.body);
        jgg_h = jgg_y.Deferred();
        var jgg_d = setTimeout(function () {
          jgg_h.reject();
        }, jgg_o);
        jgg_X.getQuickLoginUserLength = function (jgg_H) {
          jgg_h.resolve(jgg_H);
        };
        jgg_h.always(function () {
          jgg_h = null;
          clearTimeout(jgg_d);
          jgg_z.remove();
        });
      }
      jgg_h.then(function (jgg_H) {
        jgg_K(jgg_y.extend({}, jgg_X.ERROR.SUCCESS, {
          status: jgg_H.us > 0 ? 1 : 2,
          userLength: jgg_H.us
        }));
      }, function () {
        jgg_K(jgg_y.extend({}, jgg_X.ERROR.TIME_OUT));
      });
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    jgg_X.signOut = function (jgg_V, jgg_h) {
      undefined === jgg_h && (jgg_h = jgg_V, jgg_V = true);
      jgg_X.sync.signOut(jgg_V).done(function () {
        jgg_X.events.trigger("success.signOut");
        jgg_X.utils.parseCallback(jgg_h)();
      });
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K;
      var jgg_u;
      var jgg_r = jgg_y.$;
      var jgg_C = jgg_T(14).getLogger("signIn");
      var jgg_O = jgg_T(192);
      var jgg_z = jgg_T(193);
      var jgg_d = jgg_T(194);
      var jgg_H = jgg_T(195);
      var jgg_U = jgg_T(196);
      var jgg_i = jgg_T(197);
      var jgg_I = jgg_T(198);
      var jgg_Z = jgg_T(159);
      var jgg_q = jgg_T(160);
      var jgg_G = jgg_q.CAPTCHA_APP_ID_DIFF;
      var jgg_Y = jgg_q.CAPTCHA_SLIDE_TYPE;
      var jgg_c = jgg_q.CAPTCHA_GRAPH_TYPE;
      var jgg_l = jgg_q.LAST_SIGNIN_TYPE;
      var jgg_w = {};
      var jgg_D = 0;
      var jgg_m = jgg_V.noop;
      var jgg_v = {
        init: function (jgg_M) {
          var jgg_B = jgg_y.getConfig("signIn");
          var jgg_R = jgg_y.getConfig("signIn.autoreg");
          1 == jgg_R ? jgg_B.agreementTip = jgg_B.agreementTip2 : jgg_B.agreementTip = jgg_B.agreementTip1;
          this.loginTpl = {
            normal: jgg_V.template(jgg_O)(jgg_B),
            mobile: jgg_V.template(jgg_z)(jgg_B),
            email: jgg_V.template(jgg_H)(jgg_B),
            loginSwitch: jgg_i,
            qrcode: jgg_V.template(jgg_d)(jgg_B),
            quick: "<iframe class=\"quc-sign-in-iframe\" src=\"about:blank\" frameborder=\"0\" scrolling=\"no\" allowtransparency></iframe>"
          };
          jgg_w = {};
          this.model = jgg_M;
          this.$el = jgg_r(jgg_U);
          this.initForm();
          jgg_Z.initView(this);
          this.initFooterLink();
          this.initThirdPartSignIn();
          this.initModelEvent();
          this.initGetToken();
          this.initQrCode();
          this.initCaptcha();
          this.initAgreement();
        },
        bindEvent: function (jgg_M, jgg_B) {
          var jgg_R = this;
          jgg_M.on("click", ".quc-login-switch", function () {
            "qrcode" == jgg_R.getCurrentType() ? jgg_R.changeType("normal") : jgg_R.changeType("qrcode");
          });
          jgg_M.on("click", "[data-login-type]", function (jgg_L) {
            var jgg_f = jgg_r(this).data("login-type");
            jgg_f && jgg_R.changeType(jgg_f);
          });
          jgg_M.on("click", ".quc-link-sign-up", function (jgg_L) {
            var jgg_f = jgg_y.getConfig("signUp.url");
            jgg_f ? window.open(jgg_f, "_blank") : jgg_R.onSignUp(jgg_B);
          });
          jgg_M.on("click", ".quc-third-item", function (jgg_L) {
            var jgg_f = jgg_r(this).data("third");
            jgg_R.model.thirdPartSignIn(jgg_f);
          });
        },
        reset: function () {
          jgg_w = {};
          this.initQuickSignIn();
          jgg_D = 0;
          this.signInType = null;
          jgg_Z.clearTip(this.$el);
        },
        changeType: function (jgg_M) {
          var jgg_E;
          var jgg_n = this;
          var jgg_Q = jgg_n.model;
          var jgg_x = jgg_w[jgg_M];
          if (jgg_n.$el.attr("class", "quc-mod-sign-in quc-mod-" + jgg_M + "-sign-in"), !jgg_x) {
            jgg_x = jgg_w[jgg_M] = jgg_r(jgg_n.loginTpl[jgg_M]);
            var jgg_g = this.model.get("saveAccount");
            jgg_g && jgg_M == jgg_g.type && (jgg_E = jgg_x.find(".quc-input-account,.quc-input-mobile").val(jgg_g.account));
          }
          var jgg_j = jgg_n.$el.find(".quc-login-content");
          jgg_y.utils.resetPlaceholder(jgg_j.find("input, textarea"));
          var jgg_f = jgg_y.getConfig("signIn.hideKeepAlive");
          jgg_f === false && jgg_x.find("[name=isKeepAlive]").parents(".quc-field").show();
          jgg_j.empty().append(jgg_x);
          jgg_Q.trigger("DOMUpdated", this.$el);
          jgg_n.signInType = jgg_M;
          var jgg_P = jgg_n.getTitle();
          jgg_n.$nav.replaceWith(jgg_P);
          jgg_n.$nav = jgg_P;
          jgg_x.find(".quc-input").each(function (jgg_b, jgg_N) {
            var jgg_A = jgg_r(jgg_N);
            if (!jgg_A.val()) {
              jgg_Q.one("changeType afterShow", function () {
                jgg_E && jgg_E.focus();
                jgg_A.focus();
              });
              return false;
            }
          });
          jgg_Q.trigger("afterShow.changeType", jgg_n.$el[0]);
          jgg_Q.trigger("changeType", jgg_M);
          jgg_Q.trigger("changeType:" + jgg_M);
          jgg_Q.set("userType", jgg_M);
          setTimeout(function () {
            var jgg_b = "quc-panel-login-qrcode";
            "qrcode" === jgg_M ? jgg_n.panel.$el.addClass(jgg_b) : jgg_n.panel.$el.removeClass(jgg_b);
          }, 0);
        },
        initQuickSignIn: function () {
          if (this.model.isQuickSignInAvailable()) {
            var jgg_M = jgg_r(this.loginTpl.quick);
            jgg_M.attr("src", this.model.getQuickSignInUrl());
            jgg_w.quick = jgg_M;
          }
        },
        initForm: function () {
          var jgg_B = this;
          jgg_B.model.on("changeType", function (jgg_R, jgg_L) {
            "quick" != jgg_L && (jgg_y.getConfig("signIn.showEmailHint", true) && jgg_y.utils.emailHint(jgg_B.$el.find("[name=userName]"), "account"), jgg_y.utils.emailHint(jgg_B.$el.find("[name=email]")), jgg_B.initAgreement());
          });
        },
        initFooterLink: function () {
          var jgg_M = this;
          var jgg_B = this.$el.find(".quc-footer");
          this.$el.find(".quc-link-quick-sign-in").click(function (jgg_R) {
            jgg_R.preventDefault();
            jgg_M.changeType("quick");
          }).end().find(".quc-link-normal-sign-in").click(function (jgg_R) {
            jgg_R.preventDefault();
            jgg_M.changeType(jgg_M.model.getSignInTypes()[0]);
          });
          jgg_M.model.on("changeType", function (jgg_R, jgg_L) {
            "quick" == jgg_L ? 0 == jgg_M.model.getSignInTypes().length && jgg_B.hide() : jgg_M.model.isQuickSignInAvailable() || jgg_B.find(".quc-link-quick-sign-in").hide();
          });
        },
        initQrCode: function () {
          function jgg_B() {
            jgg_j.model.listenQrcodeLogin().done(function () {
              clearTimeout(jgg_n);
              clearInterval(jgg_E);
            }).fail(function (jgg_Q) {
              "1020204" == jgg_Q.errno ? jgg_j.model.trigger("scaned") : "1020202" == jgg_Q.errno && jgg_j.model.trigger("timeout");
            });
          }
          var jgg_R;
          var jgg_L;
          var jgg_f;
          var jgg_j = this;
          var jgg_g = 720000;
          var jgg_P = "二维码加载中...";
          var jgg_E = 0;
          var jgg_n = 0;
          jgg_j.model.on("changeType:qrcode", function () {
            jgg_L = jgg_j.$el.find(".quc-qrcode .quc-qrcode-img");
            jgg_f = jgg_j.$el.find(".quc-qrcode-expired");
            new Date().getTime() - jgg_D >= jgg_g ? jgg_m() : (jgg_f.hide(), jgg_E = setInterval(jgg_B, 2000));
            jgg_j.model.on("changeType", function (jgg_x, jgg_b) {
              "qrcode" != jgg_b && clearInterval(jgg_E);
            });
          }).on("scaned", function () {
            jgg_r(".quc-qrcode-scaned").is(":hidden") && jgg_r(".quc-qrcode-scaned").show();
          }).on("clearQrTime", function () {
            jgg_D = 0;
            clearTimeout(jgg_n);
            clearInterval(jgg_E);
          }).on("timeout", function () {
            jgg_C.debug("qrcode timeout");
            clearInterval(jgg_E);
            jgg_r(".quc-qrcode-scaned").hide();
            jgg_j.$el.find(".quc-qrcode").removeClass("quc-qrcode-active");
            jgg_f.find(".quc-qrcode-expired-text").html("二维码已失效");
            jgg_f.find(".quc-qrcode-refresh").css("cursor", "pointer").show();
            jgg_f.off("click").one("click", ".quc-qrcode-refresh", function () {
              jgg_f.find(".quc-qrcode-expired-text").html("二维码加载中...");
              jgg_r(this).hide();
              jgg_m();
            }).show();
          });
          jgg_m = function () {
            jgg_R = jgg_j.model.getDomainApi();
            jgg_r(".quc-qrcode-scaned").hide();
            jgg_f.show().find(".quc-qrcode-expired-text").html(jgg_P);
            jgg_L.hide();
            jgg_L.off("load").on("load", function () {
              jgg_L.show();
              jgg_j.$el.find(".quc-qrcode").addClass("quc-qrcode-active");
              jgg_f.hide();
              jgg_D = new Date().getTime();
              jgg_E = setInterval(jgg_B, 2000);
              jgg_n = setTimeout(function () {
                jgg_j.model.trigger("timeout");
                clearInterval(jgg_E);
              }, jgg_g);
            });
            jgg_L.off("error").on("error", function () {
              jgg_f.find(".quc-qrcode-expired-text").html("二维码获取失败");
              jgg_f.find(".quc-qrcode-refresh").css("cursor", "pointer").show();
              jgg_f.off("click").one("click", ".quc-qrcode-refresh", function () {
                jgg_f.find(".quc-qrcode-expired-text").html("二维码加载中...");
                jgg_r(this).hide();
                jgg_m();
              }).show();
            });
            jgg_L.attr("src", jgg_R);
          };
        },
        initGetToken: function () {
          var jgg_B;
          var jgg_R;
          var jgg_L;
          var jgg_f;
          var jgg_j;
          var jgg_g = this;
          var jgg_P = function (jgg_n) {
            jgg_f = jgg_y.utils.getTimer("sign_in_" + jgg_j);
            jgg_f.on("timer_start", function (jgg_Q, jgg_x) {
              jgg_n.removeClass("quc-link");
              jgg_n.html(jgg_x + "秒后重新获取");
            });
            jgg_f.on("timer_tick", function (jgg_Q, jgg_x) {
              jgg_n.html(jgg_x + "秒后重新获取");
            });
            jgg_f.on("timer_stop", function () {
              jgg_n.html("重新获取验证码");
              jgg_n.addClass("quc-link");
            });
          };
          var jgg_E = function (jgg_n) {
            if (jgg_n.preventDefault(), jgg_L.hasClass("quc-link")) {
              jgg_g.model.set(jgg_j, jgg_B.val());
              jgg_g.model.set("captcha", jgg_R.val());
              jgg_L.html("发送中...");
              jgg_L.removeClass("quc-link");
              var jgg_x = "email" == jgg_j ? "sendEmsCodeNew" : "sendSmsTokenV2";
              jgg_g.model[jgg_x]().done(function (jgg_b) {
                jgg_g.model.clearSlideInfo();
                jgg_Z.showTipSuccess("发送成功", jgg_g.$el);
                jgg_r("[name=smscode]").one("change", function () {
                  jgg_Z.clearTip(jgg_g.$el);
                });
                jgg_f.start();
                jgg_g.model.set("token", jgg_b.vt);
                jgg_g.model.trigger("dealCaptcha");
              }).fail(function (jgg_b) {
                if (jgg_g.model.clearSlideInfo(), jgg_b.handle = "btnClickHandle", "78500" == jgg_b.errno && jgg_g.model.set("captchaType", jgg_y.utils.getCaptchaType(jgg_Y)), jgg_b.errdetail && jgg_b.errdetail.captchaType && jgg_g.model.set("captchaType", jgg_y.utils.getCaptchaType(jgg_b.errdetail.captchaType)), jgg_g.model.get("captchaType") == jgg_Y) {
                  jgg_b.fromServer = true;
                } else {
                  if (jgg_g.model.get("captchaType") == jgg_c) {
                    "78502" == jgg_b.errno && (jgg_b.errno = "78002", jgg_b.errdetail.captchaType = jgg_c);
                    var jgg_N = jgg_b.errdetail && jgg_b.errdetail.captchaUrl;
                    jgg_N && (jgg_b.fromServer = true, jgg_g.model.setCaptchaUrl(jgg_N));
                  }
                }
                jgg_L.html("获取验证码");
                jgg_L.addClass("quc-link");
                jgg_b.field = jgg_g.$el.find("[name=" + jgg_j + "]").parents("quc-field");
                jgg_g.model.trigger("invalid", jgg_b);
              });
            }
          };
          jgg_g.model.on("changeType:mobile changeType:email", function (jgg_n) {
            jgg_j = jgg_g.getCurrentType();
            jgg_B = jgg_g.$el.find("[name=" + jgg_j + "]");
            jgg_R = jgg_g.$el.find("[name=captcha]");
            jgg_L = jgg_g.$el.find(".quc-get-token");
            jgg_P(jgg_L);
            jgg_L.off("click", jgg_E).on("click", jgg_E);
          });
        },
        initThirdPartSignIn: function () {
          var jgg_M = this;
          jgg_M.model.on("changeType:normal changeType:mobile changeType:qrcode changeType:email", function () {
            var jgg_B = jgg_M.model.getThirdPartProviders();
            var jgg_R = {
              sina: {
                title: "新浪微博",
                iconName: "quc-icon-weibo",
                iconCode: "&#xe63b;"
              },
              tencent: {
                title: "QQ",
                iconName: "quc-icon-qq",
                iconCode: "&#xe63d;"
              },
              weixin: {
                title: "微信",
                iconName: "quc-icon-wechat",
                iconCode: "&#xe63c;"
              },
              zhifubao: {
                title: "支付宝",
                iconName: "quc-icon-zhifubao",
                iconCode: "&#xe63a;"
              }
            };
            var jgg_L = jgg_V.compact(jgg_V.map(jgg_B, function (jgg_g) {
              if (jgg_R[jgg_g]) {
                return jgg_V.extend({
                  name: jgg_g
                }, jgg_R[jgg_g]);
              }
            }));
            if (jgg_B.length > 0) {
              var jgg_f = jgg_T(199);
              var jgg_j = jgg_V.template(jgg_f);
              jgg_M.$el.find(".quc-form").after(jgg_j({
                thirdPartyList: jgg_L
              }));
            } else {
              jgg_M.$el.find(".quc-field-third-part").hide();
            }
            jgg_M.initLastSignInType();
          });
        },
        initAgreement: function () {
          var jgg_M;
          var jgg_B = this;
          var jgg_R = jgg_y.getConfig("signIn.agreement");
          jgg_M = jgg_B.$el.find(".quc-form-agreement");
          jgg_R ? jgg_M.show() : jgg_M.hide();
        },
        initLastSignInType: function () {
          var jgg_B = this.model.getSignInTypes();
          var jgg_R = this.model.getThirdPartProviders();
          var jgg_L = jgg_B.concat(jgg_R);
          if (jgg_L.length && 1 != jgg_L.length) {
            var jgg_f = ["qrcode", "normal", "mobile", "email"];
            var jgg_j = ["weixin", "sina", "qq", "zhifubao"];
            var jgg_g = jgg_y.utils.storage().get(jgg_l);
            var jgg_P = "<span class='quc-tag quc-lastsignin-type'></span>";
            if (this.$el.find(".quc-lastsignin-type").remove(), jgg_f.indexOf(jgg_g) != -1) {
              setTimeout(function () {
                jgg_r("[data-login-type=" + jgg_g + "]").parent().append(jgg_P);
              }, 0);
            } else {
              if (jgg_j.indexOf(jgg_g) != -1) {
                var jgg_E = jgg_g;
                "qq" === jgg_g && (jgg_E = "tencent");
                this.$el.find(".quc-third-item[data-third=" + jgg_E + "]").append(jgg_P);
              }
            }
          }
        },
        initModelEvent: function () {
          var jgg_B = this;
          var jgg_R = jgg_B.getCurrentType();
          jgg_B.model.on("show", function (jgg_L, jgg_f) {
            jgg_B.show(jgg_f && jgg_f.wrapper);
          }).on("success", function () {
            var jgg_L = jgg_y.getConfig("signInBoxWrapper", "");
            var jgg_f = jgg_y.getConfig("signInBoxOpts", {});
            jgg_L && jgg_y.plugin.signInBox && jgg_r(jgg_L).empty().html(jgg_y.plugin.signInBox(jgg_f));
          }).on("hide", function () {
            jgg_B.hide();
          }).on("afterhide close", function () {
            var jgg_L = jgg_B.getCurrentType();
            "qrcode" == jgg_L ? jgg_B.model.trigger("clearQrTime") : "mobile" != jgg_L && "email" != jgg_L || (jgg_B.model.set("token", null), jgg_B.model.trigger("timer_stop", "*"));
          }).on("timer_stop", function (jgg_L, jgg_f) {
            function jgg_g(jgg_E) {
              var jgg_n = jgg_y.utils.getTimer("sign_in_" + jgg_E);
              jgg_n.isRunning() && jgg_n.stop();
            }
            var jgg_P = ["email", "mobile"];
            "*" == jgg_f ? jgg_r.each(jgg_P, function (jgg_E, jgg_n) {
              jgg_g(jgg_n);
            }) : jgg_g(jgg_f);
          }).on("dealCaptcha", function () {
            jgg_K = jgg_B.model.get("captchaType");
            var jgg_f = jgg_B.$el.find("[name=captcha]").parents(".quc-field");
            jgg_f.hide();
            jgg_B.$el.find("[name=captcha]").val("");
            jgg_B.$el.find("[name=" + jgg_R + "]").off("change").on("change", function () {
              jgg_K == jgg_Y ? jgg_B.initSlideCaptcha() : jgg_K == jgg_c && jgg_f.show();
              try {
                jgg_B.$el.find(".quc-captcha-change").filter(":visible").eq(0).trigger("click");
              } catch (jgg_j) {}
              jgg_B.model.set("token", null);
              jgg_B.model.trigger("timer_stop", jgg_R);
            });
          }).on("invalid", function (jgg_L, jgg_f) {
            var jgg_g = jgg_B.model.get("frontOp");
            var jgg_P = jgg_B.model.get("tk");
            var jgg_E = jgg_y.utils.getErrorType(jgg_f);
            "account-risk" == jgg_E && jgg_g == jgg_q.FRONT_OP.doubleCheck ? jgg_y.identify(jgg_B.model, function () {
              jgg_r(".quc-button-submit").trigger("click");
            }, {
              tk: jgg_P,
              frontOp: jgg_g,
              isNewPopup: true
            }).done(function () {
              jgg_y.setConfig("identify.panelCloseHandler", function () {
                jgg_B.model.trigger("invalid", jgg_y.ERROR.ACCOUNT_RISK_PANELCLOSE);
                jgg_B.model.set("frontOp", "");
                jgg_B.model.set("tk", "");
              });
              jgg_B.model.trigger("identifyShow", jgg_B.$el);
            }) : "is-agree" == jgg_E && jgg_B.showAgreeDialog();
          });
        },
        onSignUp: function (jgg_M) {
          this.model.signUp(jgg_M);
        },
        initSlideCaptcha: function (jgg_M) {
          var jgg_R;
          var jgg_L = this;
          jgg_R = "submit" == jgg_M ? jgg_L.$el.find(".quc-button-submit") : jgg_L.$el.find(".quc-get-token");
          jgg_L.$el.find("input[name=\"userName\"]").blur();
          jgg_y.utils.loadSlideCaptcha().then(function () {
            window.QHPassCaptcha.init({
              appid: jgg_G,
              src: jgg_y.getConfig("src"),
              adaptScreen: false,
              needDialog: true,
              imgShow: true,
              captchaSite: jgg_u,
              width: jgg_y.getConfig("signIn.captchaWidth") || 328,
              callBack: function (jgg_f) {
                jgg_f.success && (jgg_L.model.set("slideToken", jgg_f.token), jgg_L.model.set("slideVd", jgg_f.vd), jgg_R.trigger("click"));
              }
            });
          });
        },
        initCaptcha: function () {
          var jgg_B;
          var jgg_R = this;
          var jgg_L = function () {
            jgg_B.show();
            var jgg_j = jgg_R.getCurrentType();
            var jgg_g = "mobile" == jgg_j ? "strictreg" : "email" == jgg_j ? "reg" : "login";
            jgg_R.model.getCaptchaUrl(jgg_g, true).then(function (jgg_P) {
              jgg_B.find(".quc-captcha-img").attr("src", jgg_P);
              jgg_B.find("[name=captcha]").val("");
              jgg_B.find(".quc-captcha-change").off("click").off("mousedon").on("mousedown", function (jgg_n) {
                jgg_n.preventDefault();
              }).on("click", function (jgg_n) {
                jgg_n.preventDefault();
                jgg_L();
              });
            });
          };
          jgg_R.model.on("changeType", function (jgg_f) {
            jgg_B = jgg_R.$el.find(".quc-field-captcha");
            jgg_B.hide();
            jgg_R.model.set("frontOp", "");
            jgg_R.model.set("tk", "");
          });
          jgg_R.model.on("invalid", function (jgg_f, jgg_j) {
            var jgg_g = jgg_y.utils.getErrorType(jgg_j);
            var jgg_P = jgg_R.model.get("frontOp");
            jgg_j.errdetail && jgg_j.errdetail.captchaType && (jgg_K = jgg_y.utils.getCaptchaType(jgg_j.errdetail.captchaType), jgg_R.model.set("captchaType", jgg_K));
            "captcha-slide" == jgg_g || "account-risk" == jgg_g && jgg_P == jgg_q.FRONT_OP.captcha ? jgg_K == jgg_Y ? jgg_R.initSlideCaptcha(jgg_j && jgg_j.handle) : jgg_K == jgg_c && jgg_L() : "captcha" == jgg_g && jgg_L();
          });
        },
        getCurrentType: function () {
          this.signInType || (this.signInType = this.model.isQuickSignInAvailable() ? "quick" : this.model.getSignInTypes()[0]);
          return this.signInType;
        },
        getTitle: function () {
          var jgg_L = this;
          var jgg_f = jgg_r("<div>");
          var jgg_j = jgg_y.getConfig("signIn.panelLogo");
          if (jgg_j) {
            var jgg_R = jgg_r("<img>").attr("src", jgg_j).addClass("quc-logo");
            jgg_f.append(jgg_r("<div>").append(jgg_R));
          }
          var jgg_g = [{
            name: "quick",
            title: jgg_y.getConfig("signIn.quick.panelTitle", "快速登录")
          }, {
            name: "normal",
            title: jgg_y.getConfig("signIn.normal.panelTitle", "360账号登录")
          }, {
            name: "mobile",
            title: jgg_y.getConfig("signIn.mobile.panelTitle", "短信登录")
          }, {
            name: "qrcode",
            title: jgg_y.getConfig("signIn.qrcode.panelTitle", "扫码登录")
          }, {
            name: "onekey",
            title: jgg_y.getConfig("signIn.onekey.panelTitle", "一键登录")
          }, {
            name: "email",
            title: jgg_y.getConfig("signIn.email.panelTitle", "邮箱登录")
          }];
          var jgg_P = jgg_L.getCurrentType();
          var jgg_E = [];
          jgg_E = jgg_V.uniq(jgg_L.model.getSignInTypes());
          jgg_E = jgg_V.difference(jgg_E, ["onekey", "quick"]);
          jgg_E = jgg_V.compact(jgg_V.map(jgg_E, function (jgg_x) {
            return jgg_V.find(jgg_g, function (jgg_N) {
              return jgg_N.name === jgg_x;
            });
          }));
          var jgg_n = jgg_T(200);
          var jgg_Q = jgg_V.template(jgg_n)({
            types: jgg_E,
            currentTypeName: jgg_P,
            opt: "login"
          });
          jgg_f.append(jgg_Q);
          return jgg_f;
        },
        show: function (jgg_M) {
          var jgg_j = this;
          this.reset();
          this.$nav = this.getTitle();
          this.changeType(this.getCurrentType());
          var jgg_g = {
            size: jgg_y.getConfig("signIn.panelSize", "small"),
            wrapper: jgg_M
          };
          this.panel = this.model.panel = new jgg_y.utils.Panel(jgg_g);
          var jgg_P = this.panel;
          if (jgg_P.setTitle(this.$nav), jgg_P.setContent(this.$el), this.model.trigger("beforeShow", this.$el[0]), jgg_j.bindEvent(jgg_P.$el, jgg_M), jgg_P.show(), jgg_r(jgg_P).on("close", jgg_y.getConfig("signIn.panelCloseHandler", jgg_r.noop)), jgg_r(jgg_P).on("close", function () {
            jgg_j.model.trigger("close");
          }), this.model.trigger("afterShow", this.$el[0]), jgg_M) {
            var jgg_L = jgg_M instanceof jgg_r ? jgg_M : jgg_r(jgg_M);
            jgg_u = jgg_L.find(".quc-panel")[0];
          }
        },
        hide: function () {
          this.model.trigger("beforeHide", this.$el[0]);
          this.panel && (jgg_V.get(this.panel, "opt.wrapper") || this.panel.hide());
          this.model.trigger("afterHide", this.$el[0]);
        },
        showAgreeDialog: function () {
          var jgg_B = jgg_V.template(jgg_I)({
            protocolText: jgg_y.getConfig("signIn.protocolText"),
            protocolUrl: jgg_y.getConfig("signIn.protocolUrl"),
            privacyText: jgg_y.getConfig("signIn.privacyText"),
            privacyUrl: jgg_y.getConfig("signIn.privacyUrl"),
            size: jgg_r(".quc-panel").outerWidth() <= 230 ? "sm" : "normal"
          });
          jgg_r("body").append(jgg_B);
          var jgg_R = jgg_r(".quc-agreement");
          var jgg_L = jgg_R.find(".quc-agreement-main");
          jgg_u && jgg_L.css({
            left: jgg_r(jgg_u).offset().left + (jgg_r(jgg_u).outerWidth() - jgg_L.outerWidth()) / 2,
            top: jgg_r(jgg_u).offset().top + (jgg_r(jgg_u).outerHeight() - jgg_L.outerHeight()) / 2,
            marginTop: 0,
            marginLeft: 0
          });
          var jgg_f = jgg_R.find(".quc-button-cancel");
          jgg_f.one("click", function () {
            jgg_R.remove();
          });
          var jgg_j = jgg_R.find(".quc-button-confirm");
          jgg_j.one("click", function () {
            jgg_r("[name=is_agree]").prop("checked", true);
            jgg_R.remove();
            jgg_r(".quc-button-submit").trigger("click");
          });
        }
      };
      jgg_y.ui.signIn = {
        init: function () {
          jgg_v.init.apply(jgg_v, arguments);
        },
        changeType: function (jgg_M) {
          jgg_v.changeType(jgg_M);
        },
        setOnSignUpCallback: function (jgg_M) {
          jgg_v.onSignUp = jgg_M;
        },
        refreshQrcode: function () {
          jgg_m();
        }
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<form method=POST class=quc-form autocomplete=off><div class=\"quc-form-item quc-field quc-field-has-option\"><div class=quc-form-item-content><div class=quc-input><input name=userName placeholder=\"<%= normal.onlyMobile ? mobilePlaceholder : accountPlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=\"<%= passwordPlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\" style=\"display: none\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=quc-input><input placeholder=验证码 name=captcha maxlength=7 autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-item quc-field quc-form-agreement\" style=\"display: none\"><div class=quc-form-item-content><label><input type=checkbox name=is_agree><%= agreementTip1 %><a href=<%= protocolUrl %> target=_blank class=quc-link>《<%= protocolText %>》 </a><a href=<%= privacyUrl %> target=_blank class=quc-link>《<%= privacyText %>》</a></label></div></div><div class=quc-button-list><input type=submit value=登录 class=\"quc-button-submit quc-button quc-button-primary\"></div><div class=\"quc-form-tips quc-form-item quc-clearfix\"><div class=\"quc-field quc-form-item-checkbox quc-left\" style=\"display: none\"><div class=quc-form-item-content><label><input type=checkbox name=isKeepAlive checked><%= keepAliveTip %> </label></div></div><div class=\"quc-clearfix quc-right\"><a href=javascript:; target=_self class=quc-link-sign-up><%= signUpTip %></a><span class=sep></span><a href=//i.360.cn/findpwd/ class=quc-link-findpwd target=_blank><%= findPwdTip %></a></div></div></form>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<form method=POST class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input name=mobile placeholder=\"<%= mobilePlaceholder %>\" maxlength=11></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\" style=\"display: none\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=quc-input><input placeholder=验证码 maxlength=7 name=captcha autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=\"quc-input quc-input-has-append\"><input maxlength=6 name=smscode placeholder=短信验证码 autocomplete=off><div class=quc-input-append><span class=\"quc-link quc-get-token\">获取验证码</span></div></div></div></div><div class=\"quc-form-item quc-field quc-form-agreement\" style=\"display: none\"><div class=quc-form-item-content><label><input type=checkbox name=is_agree><%= agreementTip %><a href=<%= protocolUrl %> target=_blank class=quc-link>《<%= protocolText %>》 </a><a href=<%= privacyUrl %> target=_blank class=quc-link>《<%= privacyText %>》</a></label></div></div><div class=quc-button-list><input type=submit value=登录 class=\"quc-button-submit quc-button quc-button-primary\"></div><div class=\"quc-form-item quc-form-tips quc-clearfix\"><div class=\"quc-field quc-form-item-checkbox quc-left\" style=\"display: none\"><div class=quc-form-item-content><label><input type=checkbox name=isKeepAlive checked><%= keepAliveTip %> </label></div></div><div class=\"quc-clearfix quc-right\"><a href=javascript:; class=quc-link-sign-up><%= signUpTip %></a> <% if(signUpTip && findPwdTip){ %> <span class=sep></span> <% } %> <a href=//i.360.cn/findpwd/ class=quc-link-findpwd target=_blank><%= findPwdTip %></a></div></div></form>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=\"quc-text-center quc-form quc-qrcode-box\"><div class=\"quc-qrcode quc-qrcode-active\"><div class=quc-qrcode-help style=\"background-image: url(<%= qrcode.appLegendUrl%>)\"></div><div class=quc-qrcode-inner><img class=quc-qrcode-img> <img class=quc-qrcode-icon src=<%= qrcode.icon %>><div class=quc-qrcode-scaned><div class=quc-qrcode-scaned-text>扫描成功</div><i class=\"quc-icon quc-icon-success\">&#xe697;</i></div><div class=quc-qrcode-expired><div class=quc-qrcode-expired-text>二维码已失效</div><a href=javascript:; class=\"quc-button quc-button-primary quc-qrcode-refresh\"><i class=\"quc-icon quc-icon-refresh\">&#xe69b;</i>点击刷新</a></div></div></div><p class=quc-qrcode-title><%= qrcode.title %><p class=quc-qrcode-desc><%= qrcode.description %></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<form method=POST class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input name=email placeholder=\"<%= emailPlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\" style=\"display: none\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=quc-input><input placeholder=验证码 maxlength=7 name=captcha autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=\"quc-input quc-input-has-append\"><input maxlength=6 name=smscode placeholder=邮箱验证码 autocomplete=off><div class=quc-input-append><span class=\"quc-link quc-get-token\">获取验证码</span></div></div></div></div><div class=\"quc-form-item quc-field quc-form-agreement\" style=\"display: none\"><div class=quc-form-item-content><label><input type=checkbox name=is_agree>未注册邮箱验证后自动登录，且代表您已同意<a href=<%= protocolUrl %> target=_blank class=quc-link> 《<%= protocolText %>》 </a><a href=<%= privacyUrl %> target=_blank class=quc-link>《<%= privacyText %>》</a></label></div></div><div class=quc-button-list><input type=submit value=登录 class=\"quc-button-submit quc-button quc-button-primary\"></div><div class=\"quc-form-item quc-form-tips quc-clearfix\"><div class=\"quc-field quc-form-item-checkbox quc-left\" style=\"display: none\"><div class=quc-form-item-content><label><input type=checkbox name=isKeepAlive checked><%= keepAliveTip %> </label></div></div><div class=\"quc-clearfix quc-right\"><a href=javascript:; class=quc-link-sign-up><%= signUpTip %></a> <% if(signUpTip && findPwdTip){ %> <span class=sep></span> <% } %> <a href=//i.360.cn/findpwd/ class=quc-link-findpwd target=_blank><%= findPwdTip %></a></div></div></form>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-sign-in><div class=quc-main><div><div class=\"quc-tip quc-tip-absolute\"></div><div class=quc-login-content></div></div></div></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-login-switch><a href=javascript:;><i class=\"quc-icon quc-icon-quccode quc-btn-qrcode\">&#xe699;</i></a> <a href=javascript:;><i class=\"quc-icon quc-icon-qucweb quc-btn-web\">&#xe69a;</i></a></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=\"quc-agreement quc-agreement-<%= size %>\"><div class=quc-agreement-mask></div><div class=quc-agreement-main><div class=quc-agreement-content>请您阅读并同意 <a href=<%= protocolUrl %> target=_blank>《<%= protocolText %>》</a> 和 <a href=<%= privacyUrl %> target=_blank>《<%= privacyText %>》</a></div><div class=quc-button-list><button class=\"quc-button quc-button-cancel\">不同意</button> <button class=\"quc-button quc-button-confirm\">同意</button></div></div></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-third><div class=quc-third-bd><table><tr> <% _.each(thirdPartyList, function(thirdParty) { %> <td><i data-third=\"<%= thirdParty.name %>\" class=\"quc-third-item quc-icon <%= thirdParty.iconName %>\"></i></td> <% }) %> </table></div></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-tab-list> <% if (_.size(types) === 1) { %> <div class=\"quc-tab-item bold\"><span <%= 'data-' + opt + '-type' %>=\"<%= types[0].name %>\" class=\"quc-tab-item-inner quc-primary\"><%= types[0].title %></span></div> <% } else { %> <% _.each(types, function(type, i) { %> <div class=\"quc-tab-item <% if (type.name === currentTypeName) { %>quc-tab-item-active<% } %>\" style=\"<% if (_.size(types) > 3) { %>margin:0 5px;<% } %>\"><a target=_self href=javascript:; <%= 'data-' + opt + '-type' %>=\"<%= type.name %>\" class=quc-tab-item-inner><%= type.title %></a></div> <% }) %> <% } %> </div>";
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V, jgg_h) {
    var jgg_o = jgg_T(160);
    var jgg_K = jgg_T(26);
    var jgg_u = jgg_o.CAPTCHA_APP_ID_DIFF;
    var jgg_r = jgg_o.CAPTCHA_SLIDE_TYPE;
    var jgg_C = jgg_o.LAST_SIGNIN_TYPE;
    var jgg_O = jgg_o.LOGIN_TYPES_MAP;
    var jgg_z = jgg_o.MID_KEY;
    var jgg_d = jgg_o.ASC_KEY;
    var jgg_H = jgg_o.MNAME_KEY;
    !function (jgg_U) {
      var jgg_I;
      var jgg_Z;
      var jgg_q = jgg_U.$;
      var jgg_G = jgg_T(14).getLogger("signIn");
      var jgg_Y = jgg_T(159);
      var jgg_c = jgg_U.getLogic({
        name: "signIn",
        validate: function (jgg_w, jgg_D) {
          var jgg_m = jgg_U.validate;
          var jgg_v = false;
          switch (jgg_D = jgg_D || this.get(jgg_w), jgg_w) {
            case "userName":
              jgg_v = jgg_U.getConfig("signIn.normal.onlyMobile") ? jgg_m.checkMobile(jgg_D) : jgg_m.checkSignInAccount(jgg_D);
              break;
            case "password":
              jgg_v = jgg_m.checkPassword(jgg_D);
              jgg_v && (jgg_v = jgg_U.utils.isSameError(jgg_v, jgg_U.ERROR.PASSWORD_EMPTY) ? jgg_v : jgg_U.ERROR.PASSWORD_WRONG);
              break;
            case "mobile":
              jgg_v = jgg_m.checkMobile(jgg_D);
              break;
            case "email":
              jgg_v = jgg_m.checkEmail(jgg_D);
              break;
            case "smscode":
              jgg_v = jgg_m.checkSmsToken(jgg_D);
              break;
            case "captcha":
              jgg_v = jgg_m.checkCaptcha(jgg_D);
              break;
            case "slideToken":
              jgg_v = jgg_m.checkSdToken(jgg_D);
              break;
            case "slideVd":
              jgg_v = jgg_m.checkSdVd(jgg_D);
              break;
            case "is_agree":
              jgg_v = jgg_m.checkIsAgree(jgg_D);
          }
          return jgg_v;
        },
        getSignInTypes: function () {
          return jgg_q.grep(jgg_U.getConfig("signIn.types"), function (jgg_D) {
            return "quick" != jgg_D;
          });
        },
        getThirdPartProviders: function () {
          return jgg_U.getConfig("signIn.thirdPart.providers", ["tencent", "weixin", "sina", "zhifubao"]) || [];
        },
        prepareQuickSignIn: function (jgg_w) {
          var jgg_m = this;
          var jgg_v = jgg_q.Deferred();
          undefined !== jgg_I && !jgg_w || jgg_q.inArray("quick", jgg_U.getConfig("signIn.types")) == -1 ? jgg_v.resolve() : (jgg_U.ptLogin = function (jgg_M) {
            0 == jgg_M.s ? jgg_U.sync.getRd().then(function (jgg_R) {
              return jgg_U.sync.setCookie(jgg_R.rd);
            }).then(function () {
              return jgg_U.getUserInfo(false);
            }).then(function (jgg_R) {
              jgg_m.trigger("hide").trigger("success", jgg_R).resolve(jgg_R);
            }) : 2 == jgg_M.s && (jgg_I = false, jgg_m.trigger("quickSignInFailed"), jgg_v.reject());
          }, jgg_U.getQuickLoginStatus(function (jgg_M) {
            jgg_I = 0 == jgg_M.errno && jgg_M.status < 2;
            jgg_v.resolve();
          }));
          return jgg_v.promise();
        },
        isQuickSignInAvailable: function () {
          return !!jgg_I;
        },
        sendSmsToken: function () {
          var jgg_w = this.get("mobile");
          var jgg_D = this.get("captcha");
          var jgg_m = this.get("qucrypt_code");
          var jgg_v = this.get("token");
          var jgg_M = this.validate("mobile", jgg_w);
          return jgg_M ? jgg_q.Deferred().reject(jgg_M).promise() : jgg_U.sync.sendSmsCodeNew({
            condition: 1 == jgg_U.getConfig("signIn.autoreg") ? jgg_o.SMS_CONDITION_ALWAYS : jgg_o.SMS_CONDITION_EXIST,
            sms_scene: jgg_o.SMS_SCENE_LOGIN,
            account: jgg_w,
            captcha: jgg_D,
            qucrypt_code: jgg_m,
            vt: jgg_v
          });
        },
        sendSmsTokenV2: function () {
          var jgg_w;
          var jgg_D = this.get("mobile");
          var jgg_m = this.get("captcha");
          var jgg_v = this.get("qucrypt_code");
          var jgg_M = this.get("token");
          var jgg_B = this.get("slideToken");
          var jgg_R = this.get("slideVd");
          var jgg_L = this.get("captchaType");
          jgg_B && jgg_R ? jgg_Z = jgg_u : (jgg_L && (jgg_L = jgg_U.utils.getCaptchaType(jgg_L)), jgg_Z = "");
          jgg_w = jgg_L == jgg_r ? this.validate("mobile") || this.validate("slideToken") || this.validate("slideVd") : this.validate("mobile");
          return jgg_w ? jgg_q.Deferred().reject(jgg_w).promise() : jgg_U.sync.sendSmsCodeNewV2({
            condition: 1 == jgg_U.getConfig("signIn.autoreg") ? jgg_o.SMS_CONDITION_ALWAYS : jgg_o.SMS_CONDITION_EXIST,
            sms_scene: jgg_o.SMS_SCENE_LOGIN,
            account: jgg_D,
            captcha: jgg_m,
            qucrypt_code: jgg_v,
            vt: jgg_M,
            captchaType: jgg_L,
            appid: jgg_Z,
            slideToken: jgg_B,
            slideVd: jgg_R
          });
        },
        sendEmsCodeNew: function () {
          var jgg_w;
          var jgg_D = this.get("email");
          var jgg_m = this.get("captcha");
          var jgg_v = this.get("qucrypt_code");
          var jgg_M = this.get("slideToken");
          var jgg_B = this.get("slideVd");
          var jgg_R = this.get("captchaType");
          jgg_w = jgg_R == jgg_r ? this.validate("email") || this.validate("slideToken") || this.validate("slideVd") : this.validate("email");
          return jgg_w ? jgg_q.Deferred().reject(jgg_w).promise() : jgg_U.sync.sendEmsCodeNew({
            condition: 1 == jgg_U.getConfig("signIn.autoreg") ? jgg_o.SMS_CONDITION_ALWAYS : jgg_o.SMS_CONDITION_EXIST,
            email: jgg_D,
            vtype: "email",
            captcha: jgg_m || "",
            qucrypt_code: jgg_v,
            captchaType: jgg_R,
            appid: jgg_u,
            slideToken: jgg_M,
            slideVd: jgg_B
          });
        },
        run: function (jgg_w) {
          jgg_G.debug("sign in");
          var jgg_m = this;
          jgg_m.isInit() || jgg_m.set("isKeepAlive", jgg_U.getConfig("signIn.defaultKeepAlive"));
          jgg_m.init().trigger("showLoading");
          var jgg_v = jgg_U.utils.storage().get("lastSignInAccount", "").split(",");
          jgg_v[2] && new Date().getTime() <= jgg_v[2] ? jgg_m.set("saveAccount", {
            type: jgg_v[1],
            account: jgg_v[0]
          }) : jgg_U.utils.storage().remove("lastSignInAccount");
          jgg_m.prepareQuickSignIn().always(function () {
            jgg_m.trigger("hideLoading").trigger("show", {
              wrapper: jgg_w
            });
          });
        },
        submit: function () {
          var jgg_D;
          var jgg_m = this;
          var jgg_v = jgg_m.get("userType");
          var jgg_M = {
            type: jgg_v,
            loginType: "normal" === jgg_v ? jgg_O.accountAndPass : "mobile" === jgg_v ? jgg_O.smsAndCode : jgg_O.emailAndCode,
            captchaType: jgg_m.get("captchaType"),
            slideToken: jgg_m.get("slideToken"),
            slideVd: jgg_m.get("slideVd")
          };
          var jgg_B = jgg_m.get("isNeedCheckCaptcha", false);
          var jgg_R = jgg_m.get("isNeedCheckCaptchaSlide", false);
          var jgg_L = jgg_U.getConfig("signIn.agreement");
          jgg_M.slideToken && jgg_M.slideVd ? jgg_M.appid = jgg_u : (jgg_M.appid = "", jgg_M.captchaType = "");
          this.trigger("beforeSubmit");
          jgg_B = jgg_m.get("isNeedCheckCaptcha");
          jgg_R = jgg_m.get("isNeedCheckCaptchaSlide");
          "mobile" == jgg_v || "email" == jgg_v ? (jgg_M.account = jgg_m.get(jgg_v), jgg_M.password = jgg_m.get("smscode"), jgg_M.autoreg = jgg_U.getConfig("signIn.autoreg"), jgg_D = jgg_M.captchaType == jgg_r ? jgg_m.validate(jgg_v) || jgg_m.validate("smscode") || jgg_L && jgg_m.validate("is_agree") || jgg_R && jgg_m.validate("slideToken") && jgg_m.validate("slideVd") : jgg_m.validate(jgg_v) || jgg_m.validate("smscode") || jgg_L && jgg_m.validate("is_agree") || jgg_B && jgg_m.validate("captcha")) : (jgg_M.account = jgg_m.get("userName"), jgg_U.getConfig("signIn.normal.onlyMobile") && (jgg_V.startsWith(jgg_M.account, "+") || (jgg_M.account = "+86" + jgg_M.account)), jgg_M.password = jgg_m.get("password"), jgg_M.captcha = jgg_m.get("captcha"), jgg_M.qucrypt_code = jgg_m.get("qucrypt_code"), jgg_D = jgg_M.captchaType == jgg_r ? jgg_m.validate("userName") || jgg_m.validate("password") || jgg_L && jgg_m.validate("is_agree") || jgg_R && jgg_m.validate("slideToken") && jgg_m.validate("slideVd") : jgg_m.validate("userName") || jgg_m.validate("password") || jgg_L && jgg_m.validate("is_agree") || jgg_B && jgg_m.validate("captcha"));
          jgg_M.isKeepAlive = jgg_m.get("isKeepAlive");
          jgg_M.tk = jgg_m.get("tk");
          return jgg_D ? (jgg_D.signInType = jgg_v, void jgg_m.trigger("invalid", jgg_D)) : void jgg_h.resolve(jgg_U.sync.signIn(jgg_M)).then(function (jgg_f) {
            return jgg_f && 0 === jgg_f.errno ? (jgg_m.trigger("hide"), jgg_f.userinfo && jgg_f.userinfo.userRisk && jgg_m.set("frontOp", jgg_f.userinfo.userRisk.frontOp), jgg_U.sync.setCookie(jgg_f.s).then(function () {
              return jgg_f.userinfo || {};
            })) : jgg_h.reject(new Error("login fail"));
          }).then(function (jgg_f) {
            var jgg_g;
            jgg_g = jgg_U.isI360() && jgg_V.startsWith(location.pathname, "/oauth/bind") ? jgg_h.resolve() : jgg_Y.tryHandleAbnormalPassword(jgg_V.extend(jgg_f, {
              frontOp: jgg_m.get("frontOp")
            }), jgg_m.get("password"));
            return jgg_g.then(function (jgg_P) {
              if (jgg_P && jgg_P.shouldChangePassword) {
                return jgg_U.isI360() ? (jgg_Y.gotoPageWithSearchParams("/profile/chuserpwd?op=modifyPwd"), jgg_h.reject(new Error("auto goto change pwd page"))) : new jgg_h(function (jgg_n, jgg_Q) {
                  jgg_U.modifyPassword(function () {
                    jgg_G.debug("change password success");
                    jgg_U.$message({
                      title: "密码修改成功",
                      content: "密码修改成功, 请您使用新密码登录",
                      status: "success"
                    }).then(function () {
                      jgg_n();
                    });
                  });
                  jgg_m.trigger("invalid", jgg_D);
                });
              }
            }).caught(function (jgg_P) {
              console.log("promise caught:", jgg_P);
              /goto/i.test(jgg_P.message) || (jgg_G.debug("sign out"), jgg_U.signOut(function () {
                jgg_G.debug("sign out success");
              }));
              return jgg_h.reject(jgg_P);
            });
          }).then(function () {
            return jgg_U.getUserInfo(false);
          }).then(function (jgg_f) {
            var jgg_j = jgg_U.getConfig("signIn.saveAccount", 604800);
            if (jgg_j && "normal" == jgg_v) {
              var jgg_g = new Date().getTime() + 1000 * jgg_j;
              jgg_U.utils.storage().set("lastSignInAccount", [jgg_M.account, jgg_v, jgg_g].join(","));
            }
            jgg_U.utils.storage().set(jgg_C, jgg_v);
            jgg_m.trigger("success", jgg_v).resolve(jgg_f);
            jgg_m.clearSlideInfo();
          }, function (jgg_f) {
            jgg_m.clearSlideInfo();
            jgg_G.debug("login fail", jgg_f);
            jgg_f.fromServer = true;
            jgg_f.signInType = jgg_v;
            jgg_f.handle = "submit";
            var jgg_j = jgg_f.userinfo && jgg_f.userinfo.userRisk;
            jgg_j && (jgg_m.set("tk", jgg_j.tk), jgg_m.set("frontOp", jgg_j.frontOp));
            jgg_m.trigger("invalid", jgg_f);
          });
        },
        clearSlideInfo: function (jgg_w) {
          var jgg_D = this;
          jgg_D.set("slideToken", "");
          jgg_D.set("slideVd", "");
          jgg_D.set("appid", "");
          jgg_w || jgg_D.set("captchaType", "");
        },
        checkIsCaptchaRequired: function (jgg_w) {
          var jgg_D = jgg_q.Deferred();
          var jgg_m = this;
          jgg_U.sync.checkSignInCaptchaRequired(jgg_w).always(function (jgg_v) {
            jgg_v.captchaType && (jgg_v.captchaType = jgg_U.utils.getCaptchaType(jgg_v.captchaType));
            jgg_v.captchaType == jgg_r || jgg_v.captchaUrl && jgg_m.setCaptchaUrl(jgg_v.captchaUrl);
            jgg_D.resolve(!!jgg_v.captchaFlag, jgg_v.captchaType);
          });
          return jgg_D.promise();
        },
        getQuickSignInUrl: function () {
          var jgg_w = jgg_q.map(jgg_U.getConfig("domainList", []), function (jgg_B) {
            return jgg_B.split(".")[0];
          }).join(",");
          var jgg_D = jgg_U.getConfig("protocol");
          var jgg_m = jgg_U.getConfig("signIn.quick.showUserNum", 3);
          var jgg_v = jgg_U.getConfig("signIn.quick.stylesheet", "");
          var jgg_M = jgg_U.getConfig("signIn.quick.mode", "picture");
          return jgg_D + "://axlogin.passport.360.cn/ptlogin.php?displayType=" + jgg_M + "&custUserNum=" + jgg_m + "&nextUrl=" + encodeURIComponent(jgg_U.getConfig("proxy")) + "&requestScema=" + jgg_D + "&custStyleUrl=" + encodeURIComponent(jgg_v) + "&src=" + jgg_U.getConfig("src") + "&domain_list=" + jgg_w + "&t=" + new Date().getTime();
        },
        thirdPartSignIn: function (jgg_w, jgg_D) {
          var jgg_n;
          var jgg_Q = this;
          var jgg_x = jgg_U.getConfig("signIn.thirdPart", {});
          var jgg_b = "jump" == jgg_x.mode;
          var jgg_N = this.get("callback");
          var jgg_A = jgg_b && jgg_x.jumpUrl || jgg_b && "string" == typeof jgg_N && jgg_N || location.href;
          var jgg_k = {
            sina: "Sina",
            renren: "RenRen",
            msn: "Msn",
            fetion: "Fetion",
            telecom: "Telecom",
            tencent: "qq",
            weixin: "weixin",
            zhifubao: "zhifubao"
          };
          jgg_V.isFunction(jgg_D) && jgg_Q.setCallback(jgg_D);
          jgg_A = jgg_b ? jgg_A.replace(/(?:http(s?):\/\/)?(.*)/, "http$1://$2") : jgg_A.replace(/((?:https?:\/\/)?[\w.:]*\/?).*/, "$1");
          var jgg_g = jgg_A;
          var jgg_P = jgg_U.getConfig("protocol") + "://i.360.cn/oauth/loginByOauth?c=" + jgg_k[jgg_w] + "&type=" + (jgg_b ? "normal" : "pop") + "&destUrl=" + encodeURIComponent(jgg_g) + "&f=" + jgg_U.getConfig("src") + "&mid=" + (jgg_U.utils.getCookie(jgg_z) || "") + "&asc=" + (jgg_U.utils.getCookie(jgg_d) || "") + "&mname=" + (jgg_U.utils.getCookie(jgg_H) || "") + "&r=" + new Date().getTime();
          if (jgg_b) {
            location.href = jgg_P;
          } else {
            var jgg_M = "";
            if ("tab" != jgg_x.mode) {
              var jgg_B = jgg_q(window);
              var jgg_R = 520;
              var jgg_L = 800;
              var jgg_f = Math.max(Math.round((jgg_B.outerWidth() - jgg_L) / 2), 0);
              var jgg_j = Math.max(Math.round((jgg_B.outerHeight() - jgg_R) / 2), 0);
              jgg_M = "height=" + jgg_R + ",width=" + jgg_L + ",left=" + jgg_f + ",top=" + jgg_j + ",alwaysRaised=yes";
            }
            jgg_n = window.open(jgg_P, "oauthlogin", jgg_M);
          }
          jgg_U.thirdLoginSuccess = function (jgg_e) {
            var jgg_F = {
              sdrcP: "hide",
              gZSJI: "success",
              eTZFr: "cookie",
              oetxg: function (jgg_p, jgg_t) {
                return jgg_p != jgg_t;
              },
              qEuhx: function (jgg_p, jgg_t) {
                return jgg_p - jgg_t;
              },
              zJNQV: function (jgg_p, jgg_t) {
                return jgg_p - jgg_t;
              }
            };
            jgg_U.sync.setCookie(jgg_e.s).then(function () {
              return jgg_U.getUserInfo(false);
            }).then(function (jgg_p) {
              var jgg_W0 = jgg_U.utils.storage(jgg_F.eTZFr).get("Q");
              if (jgg_W0) {
                jgg_W0 = jgg_W0.toLowerCase();
                var jgg_W1 = jgg_K.parse(jgg_W0).src;
                var jgg_W2 = jgg_W1.split("_");
                var jgg_W3 = ["weixin", "sina", "qq", "zhifubao"];
                jgg_F.oetxg(jgg_W3.indexOf(jgg_W2[jgg_F.qEuhx(jgg_W2.length, 1)]), -1) && jgg_U.utils.storage().set(jgg_C, jgg_W2[jgg_F.zJNQV(jgg_W2.length, 1)]);
              }
              jgg_n.close();
              var jgg_S = jgg_Q.trigger(jgg_F.sdrcP).trigger(jgg_F.gZSJI, "thirdLogin");
              jgg_S.resolve(jgg_p);
            }, function (jgg_p) {
              jgg_U.reportWarn(jgg_p);
              jgg_Q.trigger("invalid", jgg_p);
            });
          };
        },
        getDomainApi: function () {
          var jgg_w = jgg_U.getConfig("currentDomain", "");
          var jgg_D = jgg_w || location.hostname.replace(/^(?:.+\.)?(\w+\.\w+)$/, "$1");
          var jgg_m = jgg_U.getConfig("src", "");
          var jgg_v = jgg_U.getConfig("signIn.qrcode.appUrl", "");
          var jgg_M = jgg_U.getConfig("signIn.qrcode.qrcodeType", "");
          var jgg_B = jgg_U.getConfig("signIn.qrcode.advertiseUrl", "");
          var jgg_R = jgg_U.getConfig("signIn.qrcode.bConf", "");
          var jgg_L = jgg_U.getConfig("signIn.qrcode.jumpUrl", "");
          var jgg_f = jgg_U.getConfig("signIn.qrcode.srcDomain");
          var jgg_j = jgg_U.getConfig("signIn.qrcode.userCenter", "");
          var jgg_g = jgg_U.getConfig("protocol") + "://login." + jgg_D + "/?o=sso&m=getLoginQrcode&s=3&src=" + jgg_m;
          if ("miniprogram" === jgg_M) {
            if (jgg_g += "&qrcodeType=miniprogram", 1 == jgg_j && (jgg_g += "&userCenter=1"), jgg_B && (jgg_g += "&advertiseUrl=" + encodeURIComponent(jgg_B)), "object" == typeof jgg_R) {
              var jgg_P = [];
              for (var jgg_E in jgg_R) jgg_P.push("bConf[" + jgg_E + "]=" + jgg_R[jgg_E]);
              jgg_P.length && (jgg_g += "&" + jgg_P.join("&"));
            }
          } else {
            "unifycode" === jgg_M ? (jgg_g += "&qrcodeType=unifycode", jgg_L && (jgg_g += "&jumpUrl=" + encodeURIComponent(jgg_L)), jgg_f && (jgg_g += "&srcDomain=" + jgg_f)) : jgg_g += "&qr_down_url=" + encodeURIComponent(jgg_v);
          }
          return jgg_U.getConfig("signIn.qrCodeUrl", jgg_g) + "&t=" + Math.random();
        },
        signUp: function (jgg_w) {
          jgg_w && jgg_U.setConfig("_fromSignin", true);
          var jgg_D = this.getCallback();
          jgg_U.signUp ? (this.trigger("hide"), jgg_U.signUp(jgg_D)) : location.href = "//i.360.cn/reg/?src=" + jgg_U.getConfig("src") + "&destUrl=" + encodeURIComponent("string" == typeof jgg_D ? jgg_D : location.href);
        },
        listenQrcodeLogin: function () {
          var jgg_D = this;
          if (jgg_U.utils.getCookie("i360QRKEY")) {
            return jgg_U.sync.checkQrCodeSignInStatus().done(function (jgg_m) {
              return jgg_U.sync.setCookie(jgg_m.s).then(function () {
                return jgg_U.getUserInfo(false);
              }).then(function (jgg_v) {
                jgg_U.utils.storage().set(jgg_C, "qrcode");
                jgg_D.trigger("hide").trigger("success", "qrcode").resolve(jgg_v);
              }, function (jgg_v) {
                jgg_U.reportWarn(jgg_v);
                jgg_D.trigger("invalid", jgg_v);
              });
            });
          }
        }
      });
      jgg_U.thirdPartSignIn = function (jgg_w, jgg_D) {
        jgg_c.init();
        return jgg_c.thirdPartSignIn(jgg_w, jgg_D);
      };
      jgg_U.events.on("init.core", function () {
        jgg_U.getConfig("signIn.prepareQuick", false) && jgg_c.prepareQuickSignIn();
      });
      jgg_U.signIn = function (jgg_w, jgg_D) {
        !jgg_w || 1 == jgg_w.nodeType || jgg_w instanceof jgg_q || (jgg_D = jgg_w, jgg_w = undefined);
        jgg_c.setCallback(jgg_D).run(jgg_w);
      };
      var jgg_l = ["quick", "normal", "mobile", "qrcode"];
      jgg_U.setConfig({
        signIn: {
          types: jgg_l,
          defaultKeepAlive: true
        }
      });
    }(QHPass);
  }).call(jgg_a, jgg_T(2), jgg_T(41));
}, function (jgg_W, jgg_a, jgg_T) {
  var jgg_V = jgg_T(14).getLogger("modifyPassword");
  !function (jgg_h) {
    "use strict";

    var jgg_o = jgg_h.$;
    var jgg_K = jgg_T(203);
    var jgg_u = jgg_T(159);
    var jgg_r = {
      init: function (jgg_C) {
        this.model = jgg_C;
        this.$el = jgg_o(jgg_K);
        this.initModelEvent();
        this.initElementEvent();
        jgg_u.initView(this);
      },
      reset: function () {
        jgg_V.debug("reset");
        this.$el && this.$el.html(jgg_o(jgg_K).html());
      },
      initElementEvent: function () {
        var jgg_O = this;
        jgg_O.$el.find(".quc-input").focus(function () {
          jgg_o(this).parent().addClass("quc-input-bg-focus");
        }).blur(function () {
          jgg_o(this).parent().removeClass("quc-input-bg-focus");
          jgg_O.model.set("password", jgg_O.$el.find(".quc-input-password").val());
          jgg_O.model.set("rePassword", jgg_O.$el.find(".quc-input-rePassword").val());
        }).blur(function () {
          var jgg_d;
          var jgg_H = jgg_o(this).val();
          var jgg_U = jgg_o(this).attr("name");
          jgg_H.length > 0 && ("password" == jgg_U ? jgg_d = jgg_O.model.validate(jgg_U, true).done(function (jgg_i) {
            jgg_O.model.set("weakError", false);
            jgg_O.model.set("oldpwd", jgg_H);
          }).fail(function (jgg_i) {
            jgg_i && (jgg_O.model.set("weakError", jgg_i), jgg_O.showTip(jgg_i.errmsg, jgg_i.errno));
          }) : (jgg_d = jgg_O.model.validate(jgg_U), jgg_d ? jgg_O.showTip(jgg_d.errmsg, jgg_d.errno) : jgg_d = jgg_O.model.validate("password", true).done(function (jgg_i) {
            jgg_O.model.set("weakError", false);
            jgg_O.model.set("oldpwd", jgg_H);
          }).fail(function (jgg_i) {
            jgg_i && (jgg_O.model.set("weakError", jgg_i), jgg_O.showTip(jgg_i.errmsg, jgg_i.errno));
          })));
        });
      },
      initModelEvent: function () {
        var jgg_C = this;
        jgg_C.model.on("show", function (jgg_O, jgg_z) {
          jgg_C.show(jgg_z && jgg_z.wrapper);
        }).on("hide", function () {
          jgg_C.hide();
        }).on("reset", function () {
          jgg_C.$el.find(".quc-button-submit").prop("disabled", false).val("提交");
        });
      },
      show: function (jgg_C) {
        if (this.reset(), jgg_V.debug("show panel"), jgg_C) {
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_o(jgg_C).addClass("quc-wrapper quc-page").empty().append(this.$el);
        } else {
          this.panel = this.model.panel = new jgg_h.utils.Panel({
            type: "message"
          });
          var jgg_O = this.panel;
          jgg_O.setTitle(jgg_h.getConfig("modifyPassword.panelTitle", "修改密码"));
          jgg_O.setContent(this.$el);
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_O.show();
          jgg_o(jgg_O).on("close", jgg_h.getConfig("modifyPassword.panelCloseHandler", jgg_o.noop));
        }
        this.model.trigger("afterShow", this.$el[0]);
      },
      hide: function () {
        jgg_V.debug("hide panel");
        this.model.trigger("beforeHide", this.$el[0]);
        this.panel && this.panel.hide();
        this.model.trigger("afterHide", this.$el[0]);
      }
    };
    jgg_h.ui.modifyPassword = {
      init: function () {
        jgg_r.init.apply(jgg_r, arguments);
      }
    };
  }(QHPass);
  (function (jgg_h) {
    "use strict";

    var jgg_o = jgg_h.getLogic({
      name: "modifyPassword",
      validate: function (jgg_K, jgg_u) {
        jgg_V.debug("validate", jgg_K, jgg_u);
        var jgg_r;
        var jgg_C = this.get("password");
        var jgg_O = this.get("rePassword");
        switch (jgg_K) {
          case "password":
            var jgg_z = jgg_h.getUserInfoCache() || {};
            var jgg_d = jgg_h.validate.checkPasswordFrontendSync({
              password: jgg_C,
              userName: jgg_z.userName
            });
            jgg_r = jgg_d.reason;
            !jgg_r && jgg_O && (jgg_r = this.validate("rePassword"));
            break;
          case "rePassword":
            jgg_r = jgg_h.validate.checkPasswordConfirm(jgg_C, jgg_O);
        }
        if (!jgg_u) {
          return jgg_r;
        }
        var jgg_H = $.Deferred();
        if (jgg_r) {
          return jgg_H.reject(jgg_r);
        }
        switch (jgg_K.toLowerCase()) {
          case "password":
            return this.get("oldpwd") != jgg_C ? jgg_h.sync.checkWeakPwd(jgg_C) : jgg_H.resolve(this.get("weakError"));
        }
      },
      run: function (jgg_K) {
        var jgg_r = this;
        jgg_r.init().trigger("showLoading");
        jgg_V.debug("show loading and identify");
        jgg_h.identify(jgg_r).always(function () {
          jgg_r.trigger("hideLoading");
        }).done(function () {
          jgg_r.trigger("show", {
            wrapper: jgg_K
          });
        });
      },
      submit: function () {
        var jgg_u = this;
        var jgg_r = false;
        jgg_V.debug("submit");
        this.trigger("beforeSubmit");
        $.each(["password", "rePassword"], function (jgg_C, jgg_O) {
          if (jgg_r = jgg_u.validate(jgg_O)) {
            jgg_u.trigger("invalid", jgg_r);
            return false;
          }
        });
        jgg_r || (jgg_V.debug("validate pass"), jgg_h.getUserInfo().then(function (jgg_C) {
          return jgg_h.sync.modifyPassword(jgg_C.crumb, jgg_u.get("password"));
        }).then(function (jgg_C) {
          jgg_u.trigger("hide").resolve(jgg_C);
          jgg_V.debug("success");
        }, function (jgg_C) {
          jgg_u.trigger("invalid", jgg_C);
          jgg_V.debug("error");
        }));
      }
    });
    jgg_h.modifyPassword = function (jgg_K, jgg_u) {
      jgg_V.debug("run");
      "function" == typeof jgg_K && (jgg_u = jgg_K, jgg_K = undefined);
      jgg_o.setCallback(jgg_u).run(jgg_K);
    };
  })(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-modify-password><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=请输入新密码（8-20个字符）></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=quc-input><input type=password name=rePassword placeholder=请再次输入新密码></div></div></div><div class=quc-button-list><input type=submit value=提交 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K;
      var jgg_u = jgg_y.$;
      var jgg_r = jgg_T(205);
      var jgg_C = jgg_T(198);
      var jgg_O = jgg_T(159);
      var jgg_z = jgg_T(160);
      var jgg_d = jgg_z.CAPTCHA_APP_ID_DIFF;
      var jgg_H = jgg_z.CAPTCHA_SLIDE_TYPE;
      var jgg_U = jgg_z.CAPTCHA_GRAPH_TYPE;
      var jgg_i = {};
      var jgg_I = {
        init: function (jgg_Z) {
          this.model = jgg_Z;
          this.supportSignUpTypes = [{
            name: "mobile",
            title: jgg_y.getConfig("signUp.mobile.panelTitle", "手机号注册"),
            fields: ["mobile", "captcha", "captcha-slide", "smscode", "userName", "nickName", "password", "rePassword"]
          }, {
            name: "email",
            title: jgg_y.getConfig("signUp.email.panelTitle", "邮箱注册"),
            fields: ["email", "userName", "nickName", "captcha", "emailCode", "password", "rePassword", "captcha-slide"]
          }, {
            name: "username",
            title: jgg_y.getConfig("signUp.username.panelTitle", "用户名注册"),
            fields: ["userName", "nickName", "password", "rePassword", "captcha", "captcha-slide"]
          }];
          this.initModelEvent();
          this.initSmsToken();
        },
        bindEvent: function (jgg_Z) {
          var jgg_G = this;
          jgg_Z.on("click", "[data-signup-type]", function (jgg_Y) {
            var jgg_c = jgg_u(this).data("signup-type");
            jgg_c && jgg_G.changeType(jgg_c);
          });
          jgg_Z.on("click", ".quc-link-sign-in, .quc-link-login", function (jgg_Y) {
            var jgg_c = jgg_y.getConfig("signIn.url");
            jgg_c ? window.open(jgg_c, "_blank") : jgg_G.onSignIn();
            return false;
          });
        },
        setElement: function () {
          jgg_i = {};
          var jgg_Z = this;
          jgg_Z.$el && jgg_Z.$el.remove();
          jgg_Z.$el = jgg_u(jgg_V.template(jgg_r)(jgg_y.getConfig("signUp")));
        },
        initModelEvent: function () {
          var jgg_q = this;
          jgg_q.model.on("show", function (jgg_G, jgg_Y) {
            jgg_q.show(jgg_Y && jgg_Y.wrapper);
          }).on("success", function () {
            var jgg_G = jgg_y.getConfig("signInBoxWrapper", "");
            var jgg_Y = jgg_y.getConfig("signInBoxOpts", {});
            jgg_G && jgg_y.plugin.signInBox && jgg_u(jgg_G).empty().html(jgg_y.plugin.signInBox(jgg_Y));
          }).on("hide", function () {
            jgg_q.hide();
          }).on("dealCaptcha", function () {
            var jgg_Y = jgg_q.$el.find("[name=captcha]").parents(".quc-field");
            jgg_Y.hide();
            jgg_q.$el.find("[name=captcha]").val("");
            jgg_q.$el.find("[name=mobile]").off("change").on("change", function () {
              jgg_Y.show();
              jgg_q.$el.find(".quc-captcha-change").trigger("click");
              jgg_q.model.set("token", null);
              jgg_q.model.trigger("timer_stop");
            });
          }).on("dealSlideCaptcha", function () {
            jgg_q.$el.find("[name=mobile]").off("change").on("change", function () {
              jgg_q.model.set("token", null);
              jgg_q.model.set("slideToken", "");
              jgg_q.model.set("slideVd", "");
            });
          });
        },
        initCaptcha: function () {
          var jgg_q;
          var jgg_G;
          var jgg_Y = this;
          var jgg_c = function (jgg_w) {
            var jgg_m = "mobile" == jgg_w ? "strictreg" : "reg";
            jgg_Y.model.getCaptchaUrl(jgg_m, true).then(function (jgg_v) {
              jgg_G.find(".quc-captcha-img").attr("src", jgg_v);
              jgg_G.find("[name=captcha]").val("");
              jgg_G.find(".quc-tip").removeClass("quc-tip-error").html(function () {
                return jgg_u(this).attr("data-default-tip");
              });
              jgg_G.find(".quc-tip-icon").removeClass("quc-tip-icon-incorrect quc-tip-icon-correct");
            });
          };
          var jgg_l = function (jgg_w) {
            jgg_c(jgg_w);
            jgg_G.show();
            jgg_G.find(".quc-captcha-change").on("mousedown", function (jgg_D) {
              jgg_D.preventDefault();
            }).on("click", function (jgg_D) {
              jgg_D.preventDefault();
              jgg_c(jgg_w);
              jgg_G.find("[name=captcha]").val("").focus();
            });
          };
          jgg_Y.model.on("changeType", function (jgg_w, jgg_D) {
            jgg_Y.$el.find(".quc-field-captcha").hide();
            var jgg_m = jgg_Y.model.get("captchaType");
            if (jgg_m == jgg_H) {
              jgg_q || (jgg_q = jgg_Y.model.isCaptchaRequired());
            } else {
              if (jgg_m == jgg_U) {
                if (jgg_G = jgg_Y.$el.find(".quc-field-captcha"), 0 == jgg_G.length) {
                  return;
                }
                (jgg_q || (jgg_q = jgg_Y.model.isCaptchaRequired()) || "mobile" == jgg_D) && jgg_l(jgg_D);
              }
            }
          });
          this.model.on("invalid", function (jgg_w, jgg_D) {
            jgg_Y.model.set("slideToken", "");
            jgg_Y.model.set("slideVd", "");
            var jgg_m = jgg_D.type || "reg";
            var jgg_v = jgg_y.utils.getErrorType(jgg_D);
            console.log("errorType", jgg_v);
            "captcha-slide" == jgg_v ? jgg_Y.showSlideCaptcha(jgg_m) : "captcha" == jgg_v ? jgg_q ? jgg_D.fromServer && jgg_c(jgg_m) : (jgg_q = true, jgg_l(jgg_m)) : "is-agree" == jgg_v && jgg_Y.showAgreeDialog();
          });
        },
        showSlideCaptcha: function (jgg_Z) {
          var jgg_G = this;
          jgg_y.utils.loadSlideCaptcha().then(function () {
            window.QHPassCaptcha.init({
              appid: jgg_d,
              src: jgg_y.getConfig("src"),
              adaptScreen: false,
              width: 330,
              needDialog: true,
              imgShow: true,
              captchaSite: jgg_K,
              callBack: function (jgg_Y) {
                jgg_Y.success && (jgg_G.model.set("slideToken", jgg_Y.token), jgg_G.model.set("slideVd", jgg_Y.vd), "mobile" == jgg_Z ? jgg_G.$el.find(".quc-get-token").trigger("click") : "reg" == jgg_Z ? jgg_G.$el.find("input[type=submit]").trigger("click") : "email" == jgg_Z && jgg_G.$el.find(".quc-get-email-token").trigger("click"));
              }
            });
          });
        },
        initSmsToken: function () {
          var jgg_w;
          var jgg_D;
          var jgg_m;
          var jgg_v;
          var jgg_M;
          var jgg_B;
          var jgg_R;
          var jgg_L = this;
          var jgg_f = "quc-button-disabled";
          var jgg_j = jgg_y.utils.getTimer("sign_up");
          jgg_j.on("timer_start", function (jgg_g, jgg_P) {
            jgg_D.addClass(jgg_f);
            jgg_D.html(jgg_P + "秒后重新获取");
          });
          jgg_j.on("timer_tick", function (jgg_g, jgg_P) {
            jgg_D.html(jgg_P + "秒后重新获取");
          });
          jgg_j.on("timer_stop", function () {
            jgg_D.html("重新获取验证码");
            jgg_D.removeClass(jgg_f);
          });
          jgg_L.model.on("timer_stop", function () {
            jgg_j.stop();
          });
          var jgg_l = jgg_y.utils.getTimer("sign_up_email");
          jgg_l.on("timer_start", function (jgg_g, jgg_P) {
            jgg_R.addClass(jgg_f);
            jgg_R.html(jgg_P + "秒后重新获取");
          });
          jgg_l.on("timer_tick", function (jgg_g, jgg_P) {
            jgg_R.html(jgg_P + "秒后重新获取");
          });
          jgg_l.on("timer_stop", function () {
            jgg_R.html("重新获取验证码");
            jgg_R.removeClass(jgg_f);
          });
          jgg_L.model.on("timer_stop", function () {
            jgg_l.stop();
          });
          var jgg_Y = function (jgg_g) {
            console.log("btnClickHandle");
            jgg_g.preventDefault();
            var jgg_E = jgg_D.siblings(".quc-tip-icon");
            jgg_D.hasClass(jgg_f) || (jgg_L.model.set("mobile", jgg_w.val()), jgg_L.model.set("captcha", jgg_v.val()), jgg_D.html("发送中..."), jgg_D.addClass(jgg_f), jgg_E.hide(), jgg_L.model.trigger("afterShow.changeType"), jgg_L.model.sendSmsToken().done(function (jgg_n) {
              var jgg_Q = jgg_m.find(".quc-tip");
              jgg_Q.addClass("quc-tip-success").html("发送成功").show();
              jgg_m.find(".quc-input").one("change", function () {
                jgg_Q.removeClass("quc-tip-success").html(jgg_Q.attr("data-default-tip"));
              });
              jgg_E.show();
              jgg_j.start();
              jgg_L.model.set("token", jgg_n.vt);
              var jgg_x = jgg_L.model.get("captchaType");
              jgg_x == jgg_U ? jgg_L.model.trigger("dealCaptcha") : jgg_x == jgg_H && jgg_L.model.trigger("dealSlideCaptcha");
            }).fail(function (jgg_n) {
              jgg_E.show();
              jgg_D.html("获取验证码");
              jgg_D.removeClass(jgg_f);
              jgg_n.type = "mobile";
              var jgg_Q = jgg_n.errdetail && jgg_n.errdetail.captchaUrl;
              jgg_Q && (jgg_n.fromServer = true, jgg_L.model.setCaptchaUrl(jgg_Q));
              jgg_L.model.trigger("invalid", jgg_n);
            }));
          };
          var jgg_c = function (jgg_g) {
            jgg_g.preventDefault();
            var jgg_E = jgg_R.siblings(".quc-tip-icon");
            if (!jgg_R.hasClass(jgg_f)) {
              jgg_L.model.set("email", jgg_M.val());
              jgg_L.model.set("emailCode", jgg_B.val());
              var jgg_n = jgg_L.model.get("captchaType");
              jgg_n == jgg_U && jgg_L.model.set("captcha", jgg_v.val());
              jgg_R.html("发送中...");
              jgg_R.addClass(jgg_f);
              jgg_E.hide();
              jgg_L.model.trigger("afterShow.changeType");
              jgg_L.model.sendEmailToken().done(function (jgg_Q) {
                var jgg_x = jgg_m.find(".quc-tip");
                jgg_x.addClass("quc-tip-success").html("发送成功").show();
                jgg_m.find(".quc-input").one("change", function () {
                  jgg_x.removeClass("quc-tip-success").html(jgg_x.attr("data-default-tip"));
                });
                jgg_E.show();
                jgg_l.start();
                jgg_L.model.set("token", jgg_Q.vt);
                var jgg_b = jgg_L.model.get("captchaType");
                jgg_b == jgg_U ? jgg_L.model.trigger("dealCaptcha") : jgg_b == jgg_H && jgg_L.model.trigger("dealSlideCaptcha");
              }).fail(function (jgg_Q) {
                if (jgg_E.show(), jgg_R.html("获取验证码"), jgg_R.removeClass(jgg_f), jgg_Q.type = "email", 78002 == jgg_Q.errno || 78000 == jgg_Q.errno) {
                  jgg_L.model.set("captchaType", jgg_U);
                  var jgg_x = jgg_Q.errdetail && jgg_Q.errdetail.captchaUrl;
                  jgg_x && (jgg_Q.fromServer = true, jgg_L.model.setCaptchaUrl(jgg_x));
                } else {
                  78502 != jgg_Q.errno && 78503 != jgg_Q.errno || jgg_L.model.set("captchaType", jgg_H);
                }
                jgg_L.model.trigger("invalid", jgg_Q);
              });
            }
          };
          this.model.on("changeType", function () {
            "mobile" == jgg_L.currentType ? (jgg_m = jgg_L.$form.find("[name=smscode]").parents(".quc-field"), jgg_w = jgg_L.$form.find("[name=mobile]"), jgg_v = jgg_L.$form.find("[name=captcha]"), jgg_D = jgg_m.find(".quc-get-token"), jgg_D.off("click", jgg_Y).on("click", jgg_Y)) : (jgg_m = jgg_L.$form.find("[name=emailCode]").parents(".quc-field"), jgg_M = jgg_L.$form.find("[name=email]"), jgg_B = jgg_L.$form.find("[name=emailCode]"), jgg_v = jgg_L.$form.find("[name=captcha]"), jgg_R = jgg_m.find(".quc-get-email-token"), jgg_R.off("click", jgg_c).on("click", jgg_c));
            0 != jgg_m.length && (jgg_j.isRunning() && jgg_j.resume(), jgg_l.isRunning() && jgg_l.resume());
          });
        },
        getTitle: function () {
          var jgg_q = this;
          var jgg_G = jgg_u("<div>");
          var jgg_Y = jgg_y.getConfig("signUp.panelLogo");
          if (jgg_Y) {
            var jgg_c = jgg_u("<img>").attr("src", jgg_Y).addClass("quc-logo");
            jgg_G.append(jgg_u("<div>").append(jgg_c));
          }
          var jgg_l = jgg_V.uniq(jgg_q.model.getTypes());
          jgg_l = jgg_V.compact(jgg_V.map(jgg_l, function (jgg_v) {
            return jgg_V.find(jgg_q.supportSignUpTypes, function (jgg_B) {
              return jgg_B.name === jgg_v;
            });
          }));
          var jgg_w = jgg_q.currentType;
          var jgg_D = jgg_T(200);
          var jgg_m = jgg_V.template(jgg_D)({
            types: jgg_l,
            currentTypeName: jgg_w,
            opt: "signup"
          });
          jgg_G.append(jgg_m);
          return jgg_G;
        },
        onSignIn: function () {
          this.model.signIn();
        },
        getFormEl: function (jgg_Z) {
          var jgg_G = this;
          if (!jgg_i[jgg_Z]) {
            var jgg_Y = jgg_u(jgg_V.template(jgg_T(206))(jgg_y.getConfig("signUp")));
            var jgg_c = jgg_V.find(jgg_G.supportSignUpTypes, function (jgg_D) {
              return jgg_D.name === jgg_Z;
            });
            var jgg_l = jgg_u("<div>");
            if (jgg_c) {
              var jgg_w = jgg_c.fields;
              jgg_w = jgg_V.filter(jgg_w, function (jgg_D) {
                return ("userName" !== jgg_D || !jgg_y.getConfig("signUp.hideUsername")) && ("nickName" !== jgg_D || !jgg_y.getConfig("signUp.hideNickname")) && ("rePassword" !== jgg_D || !jgg_y.getConfig("signUp.hidePasswordAgain"));
              });
              jgg_V.each(jgg_w, function (jgg_D) {
                var jgg_m = jgg_Y.find("[name=" + jgg_D + "]");
                jgg_m[0] && jgg_l.append(jgg_m.parents(".quc-form-item"));
              });
              jgg_i[jgg_Z] = jgg_l;
              jgg_y.utils.emailHint(jgg_l.find("[name=email]"));
              jgg_l.find(".quc-input input").on("focus", function () {
                jgg_O.clearTip(jgg_G.$el);
              }).on("blur", function () {
                var jgg_D = jgg_u(this).parents(".quc-form-item");
                jgg_G.validate(jgg_D);
                jgg_D.is("[name=password]") && jgg_G.validate(jgg_D.siblings("[name=rePassword]"));
                jgg_D.is("[name=rePassword]") && jgg_G.validate(jgg_D.siblings("[name=password]"));
              });
            }
          }
          return jgg_i[jgg_Z][0];
        },
        changeType: function (jgg_Z) {
          var jgg_q = this;
          jgg_q.currentType = jgg_Z || jgg_V.first(jgg_q.model.getTypes());
          jgg_q.panel.setTitle(jgg_q.getTitle());
          this.$el.find(".quc-panel-title .quc-tab-item").removeClass("quc-tab-item-active");
          this.$form && this.$form.detach();
          this.$form = jgg_u(this.getFormEl(jgg_q.currentType));
          this.$el.find(".quc-signup-content").append(this.$form);
          this.model.trigger("DOMUpdated", this.$el);
          this.$el.triggerHandler("QucDOMUpdated");
          jgg_y.utils.resetPlaceholder(this.$el.find("[placeholder]"));
          this.model.trigger("afterShow.changeType", this.$el[0]);
          this.model.trigger("changeType", jgg_q.currentType);
          this.$form.find(".quc-field .quc-tip").attr("data-default-tip", function () {
            return jgg_u(this).html();
          });
          var jgg_G = this.model.get("captchaType");
          this.model.clear();
          jgg_q.model.set("captchaType", jgg_G);
          jgg_q.model.set("userType", jgg_q.currentType);
        },
        validate: function (jgg_Z) {
          var jgg_G = this;
          var jgg_Y = jgg_Z.find(".quc-input input");
          var jgg_c = jgg_Y.attr("data-name") || jgg_Y.attr("name");
          var jgg_l = jgg_Y.val();
          0 != jgg_Z.length && 0 != jgg_l.length && (jgg_Y.trigger("quc-validate"), jgg_O.setFieldStatus(jgg_Z), jgg_G.model.validate(jgg_c, jgg_l, true).done(function () {
            jgg_O.setFieldStatus(jgg_Z);
          }).fail(function (jgg_w) {
            jgg_w.field = jgg_Z;
            jgg_G.model.trigger("invalid", jgg_w);
          }));
        },
        show: function (jgg_Z) {
          var jgg_q = this;
          jgg_Z && (jgg_Z instanceof jQuery && (jgg_Z = jgg_Z[0]), jgg_K = jgg_Z);
          this.setElement();
          jgg_O.initView(this);
          var jgg_G = {
            size: jgg_y.getConfig("signIn.panelSize", "small"),
            wrapper: jgg_Z
          };
          this.panel = this.model.panel = new jgg_y.utils.Panel(jgg_G);
          var jgg_Y = this.panel;
          this.model.panel = jgg_Y;
          jgg_Y.setContent(this.$el);
          jgg_q.initCaptcha();
          this.changeType();
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_q.bindEvent(jgg_Y.$el);
          jgg_Y.show();
          jgg_Y.$el.addClass("quc-panel-middle");
          jgg_u(jgg_Y).on("close", jgg_y.getConfig("signUp.panelCloseHandler", jgg_u.noop));
          this.model.trigger("afterShow", this.$el[0]);
        },
        hide: function () {
          this.model.trigger("beforeHide", this.$el[0]);
          this.panel && this.panel.hide();
          this.model.trigger("afterHide", this.$el[0]);
        },
        showAgreeDialog: function () {
          var jgg_c = jgg_V.template(jgg_C)({
            protocolText: jgg_y.getConfig("signUp.protocolText"),
            protocolUrl: jgg_y.getConfig("signUp.protocolUrl"),
            privacyText: jgg_y.getConfig("signUp.privacyText"),
            privacyUrl: jgg_y.getConfig("signUp.privacyUrl"),
            size: jgg_u(".quc-panel").outerWidth() <= 230 ? "sm" : "normal"
          });
          jgg_u("body").append(jgg_c);
          var jgg_G = jgg_u(".quc-agreement");
          var jgg_Y = jgg_G.find(".quc-agreement-main");
          jgg_K && jgg_Y.css({
            left: jgg_u(jgg_K).offset().left + (jgg_u(jgg_K).outerWidth() - jgg_Y.outerWidth()) / 2,
            top: jgg_u(jgg_K).offset().top + (jgg_u(jgg_K).outerHeight() - jgg_Y.outerHeight()) / 2,
            marginTop: 0,
            marginLeft: 0
          });
          var jgg_l = jgg_G.find(".quc-button-cancel");
          jgg_l.one("click", function () {
            jgg_G.remove();
          });
          var jgg_w = jgg_G.find(".quc-button-confirm");
          jgg_w.one("click", function () {
            jgg_u("[name=is_agree]").prop("checked", true);
            jgg_G.remove();
            jgg_u("input[type=submit]").trigger("click");
          });
        }
      };
      jgg_y.ui.signUp = {
        init: function () {
          jgg_I.init.apply(jgg_I, arguments);
        },
        changeType: function (jgg_Z) {
          jgg_I.changeType(jgg_Z);
        }
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-sign-up><div class=quc-main><div><div class=\"quc-tip quc-tip-absolute\"></div><form method=POST class=quc-form autocomplete=off action=https://i.360.cn/signUp/dosignUpAccount><input class=quc-input-hidden> <input type=password name=password autocomplete=new-password class=quc-input-hidden><div class=quc-signup-content></div><div class=\"quc-form-item quc-field quc-form-item-checkbox\"><label><input type=checkbox name=is_agree>已仔细阅读并同意<a href=<%= protocolUrl %> target=_blank class=quc-link>《<%= protocolText %>》</a>和<a href=<%= privacyUrl %> target=_blank class=quc-link>《<%= privacyText %>》</a></label></div><div class=quc-button-list><input type=submit value=注册 class=\"quc-button quc-button-primary\"></div><div class=\"quc-form-tips quc-clearfix\"><div class=quc-right>已有账号，<a class=\"quc-link quc-link-sign-in\">直接登录</a></div><div class=quc-left></div></div></form></div></div></div>";
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix\"><input name=mobile placeholder=\"<%= mobilePlaceholder %>\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-phone\">&#xe68d;</i></div></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\" style=\"display: none\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=\"quc-input quc-input-has-prefix\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-code\">&#xe68e;</i></div><input name=captcha placeholder=\"<%= captchaPlaceholder %>\" maxlength=7 autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix-append\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-message\">&#xe690;</i></div><input name=smscode maxlength=6 autocomplete=off placeholder=\"<%= smscodePlaceholder %>\"><div class=quc-input-append><span class=\"quc-link quc-get-token\">获取验证码</span></div></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-message\">&#xe690;</i></div><input name=email placeholder=\"<%= emailPlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-user\">&#xe691;</i></div><input maxlength=14 name=userName autocomplete=off placeholder=\"<%= userNamePlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-user\">&#xe691;</i></div><input maxlength=14 name=nickName placeholder=\"<%= nickNamePlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-password\">&#xe68f;</i></div><input type=password autocomplete=off name=password placeholder=\"<%= passwordPlaceholder %>\"></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-password\">&#xe68f;</i></div><input type=password name=rePassword autocomplete=new-password placeholder=请再次输入密码></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix-append\"><div class=quc-input-prefix><i class=\"quc-icon quc-icon-message\">&#xe690;</i></div><input name=emailCode maxlength=6 autocomplete=off placeholder=\"<%= emailCodePlaceholder %>\"><div class=quc-input-append><span class=\"quc-link quc-get-email-token\">获取验证码</span></div></div></div></div>";
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y;
    var jgg_o = jgg_V.$;
    var jgg_K = jgg_T(160);
    var jgg_u = jgg_K.CAPTCHA_APP_ID_DIFF;
    var jgg_r = jgg_K.CAPTCHA_SLIDE_TYPE;
    var jgg_C = jgg_K.LOGIN_TYPES_MAP;
    var jgg_O = {
      email: 1,
      mobile: 2,
      username: 4
    };
    var jgg_z = {
      email: jgg_C.emailAndCodeAndPass,
      mobile: jgg_C.smsAndCodeAndPass,
      username: jgg_C.accountAndPass
    };
    var jgg_d = jgg_V.getLogic({
      name: "signUp",
      validate: function (jgg_H, jgg_U, jgg_i) {
        var jgg_I;
        var jgg_Z = jgg_V.validate;
        switch ("boolean" == typeof jgg_U && (jgg_U = this.get(jgg_H)), jgg_H) {
          case "mobile":
            jgg_I = jgg_Z.checkMobile(jgg_U);
            break;
          case "email":
            jgg_I = jgg_Z.checkEmail(jgg_U);
            break;
          case "userName":
            this.set("userName", jgg_U);
            jgg_I = jgg_Z.checkUsername(jgg_U);
            break;
          case "nickName":
            jgg_I = jgg_Z.checkNickname(jgg_U);
            break;
          case "password":
            this.set("password", jgg_U);
            var jgg_q = jgg_Z.checkPasswordFrontendSync({
              password: jgg_U,
              userName: this.get("userName")
            });
            jgg_I = jgg_q.reason;
            break;
          case "rePassword":
            jgg_I = jgg_Z.checkPasswordConfirm(this.get("password"), jgg_U);
            break;
          case "captcha":
            jgg_I = jgg_Z.checkCaptcha(jgg_U);
            break;
          case "smscode":
            jgg_I = jgg_Z.checkSmsToken(jgg_U);
            break;
          case "emailCode":
            jgg_I = jgg_Z.checkEmailToken(jgg_U);
        }
        if (!jgg_i) {
          return jgg_I;
        }
        var jgg_G = jgg_V.sync;
        var jgg_Y = jgg_o.Deferred();
        if (jgg_I) {
          return jgg_Y.reject(jgg_I);
        }
        switch (jgg_H.toLowerCase()) {
          case "mobile":
            return jgg_G.checkMobileNumberExist(jgg_U);
          case "userName":
            return jgg_G.checkUsernameExist(jgg_U);
          case "nickName":
            return jgg_G.checkNicknameExist(jgg_U);
          default:
            return jgg_Y.resolve();
        }
      },
      isCaptchaRequired: function () {
        return jgg_y;
      },
      prepareCaptcha: function () {
        var jgg_H = this;
        return jgg_V.sync.checkSignUpCaptchaRequired().then(function (jgg_U) {
          jgg_y = jgg_U.captchaFlag;
          jgg_H.setCaptchaUrl(jgg_U.captchaUrl);
          jgg_H.set("captchaType", jgg_V.utils.getCaptchaType(jgg_U.captchaType));
        }, function () {
          jgg_y = true;
          return jgg_o.Deferred().resolve().promise();
        });
      },
      isShowField: function (jgg_H, jgg_U) {
        var jgg_i = jgg_o.inArray(jgg_H, ["userName", "nickName", "rePassword"]) >= 0;
        var jgg_I = "signUp.hide" + jgg_H.substr(0, 1).toUpperCase() + jgg_H.substr(1);
        return !jgg_i || jgg_U == jgg_H || !jgg_V.getConfig(jgg_I, false);
      },
      sendSmsToken: function () {
        var jgg_H = this.get("mobile");
        var jgg_U = this.get("captcha");
        var jgg_i = this.get("qucrypt_code");
        var jgg_I = this.get("token");
        var jgg_Z = this.validate("mobile", jgg_H);
        return jgg_Z ? jgg_o.Deferred().reject(jgg_Z).promise() : jgg_V.sync.sendSmsCodeNewV2({
          condition: jgg_K.SMS_CONDITION_NOT_EXIST,
          account: jgg_H,
          crumb: null,
          sms_scene: jgg_K.SMS_SCENE_REG,
          captcha: jgg_U,
          qucrypt_code: jgg_i,
          vt: jgg_I,
          captchaType: this.get("captchaType"),
          slideToken: this.get("slideToken"),
          slideVd: this.get("slideVd"),
          appid: jgg_u
        });
      },
      sendEmailToken: function () {
        var jgg_H;
        var jgg_U = this.get("email");
        var jgg_i = this.get("captcha");
        var jgg_I = this.get("qucrypt_code");
        var jgg_Z = this.get("token");
        var jgg_q = this.validate("email", jgg_U);
        var jgg_G = this.get("captchaType");
        jgg_H = jgg_G != jgg_r ? "" : jgg_u;
        return jgg_q ? jgg_o.Deferred().reject(jgg_q).promise() : jgg_V.sync.sendEmsCodeNew({
          condition: 1,
          email: jgg_U,
          vtype: "email",
          qucrypt_code: jgg_I,
          vt: jgg_Z,
          captcha: jgg_i,
          captchaType: this.get("captchaType"),
          slideToken: this.get("slideToken"),
          slideVd: this.get("slideVd"),
          appid: jgg_H
        });
      },
      run: function (jgg_H) {
        var jgg_U = this;
        jgg_U.init().trigger("showLoading");
        jgg_U.prepareCaptcha().then(function () {
          return jgg_V.activeEmail.prepare(jgg_U, jgg_H);
        }).done(function () {
          jgg_U.trigger("hideLoading").trigger("show", {
            wrapper: jgg_H
          });
        });
      },
      getTypes: function () {
        return jgg_V.getConfig("signUp.types");
      },
      submit: function () {
        var jgg_U = this;
        var jgg_i = jgg_U.get("userType");
        var jgg_I = jgg_U.get("isNeedCheckCaptcha", false);
        var jgg_Z = jgg_O[jgg_i];
        if (!jgg_Z) {
          return void jgg_U.model.reportWarn("未定义的类别 typeConf:" + jgg_i);
        }
        this.trigger("beforeSubmit");
        var jgg_q = {
          acctype: jgg_Z,
          loginType: jgg_z[jgg_i],
          account: jgg_U.get(jgg_i),
          password: jgg_U.get("password"),
          loginEmailActiveFlag: jgg_V.getConfig("signUp.sendActiveEmail", true)
        };
        jgg_o.each(["userName", "nickName", "rePassword", "smscode", "emailCode", "is_agree"], function (jgg_c, jgg_l) {
          var jgg_w = jgg_U.get(jgg_l, undefined);
          undefined !== jgg_w && (jgg_q[jgg_l] = jgg_w);
        });
        jgg_I && (jgg_q.captcha = jgg_U.get("captcha"), jgg_q.qucrypt_code = jgg_U.get("qucrypt_code"));
        jgg_q.captchaType = jgg_U.get("captchaType");
        jgg_q.captchaType == jgg_r && (jgg_q.slideToken = jgg_U.get("slideToken"), jgg_q.slideVd = jgg_U.get("slideVd"), jgg_q.appid = jgg_u);
        var jgg_G = false;
        var jgg_Y = {
          mobile: jgg_U.get("mobile"),
          email: jgg_U.get("email")
        };
        jgg_o.each(jgg_o.extend({}, jgg_q, jgg_Y), function (jgg_c, jgg_l) {
          var jgg_w = jgg_U.validate(jgg_c, jgg_l);
          jgg_w && jgg_U.trigger("invalid", jgg_w);
          jgg_G = jgg_G || jgg_w;
        });
        !jgg_G && jgg_V.sync.signUp(jgg_q).then(function (jgg_c) {
          var jgg_l = jgg_o.Deferred();
          jgg_c.activeurl ? (jgg_c.email = jgg_U.get("email"), jgg_V.activeEmail(jgg_c, function () {
            jgg_V.sync.getRd().done(function (jgg_w) {
              jgg_l.resolve(jgg_w);
            }).fail(function () {
              jgg_U.signIn();
            });
          })) : (jgg_c.rd = encodeURIComponent(jgg_c.rd), jgg_l.resolve(jgg_c));
          return jgg_l.promise();
        }).then(function (jgg_c) {
          return jgg_V.sync.setCookie(jgg_c.rd);
        }).then(function () {
          return jgg_V.getUserInfo(false);
        }).done(function (jgg_c) {
          jgg_U.trigger("hide").trigger("success", jgg_i).resolve(jgg_c);
        }).fail(function (jgg_c) {
          jgg_c.fromServer = true;
          var jgg_l = jgg_c.errdetail && jgg_c.errdetail.captchaUrl;
          jgg_l && (jgg_y = true, jgg_U.setCaptchaUrl(jgg_l));
          jgg_U.trigger("invalid", jgg_c);
        });
      },
      signIn: function () {
        var jgg_H = this.getCallback();
        jgg_V.signIn ? (this.trigger("hide"), jgg_V.getConfig("_fromSignin") || jgg_V.signIn(jgg_H)) : location.href = "//i.360.cn/login/?src=" + jgg_V.getConfig("src") + "&destUrl=" + encodeURIComponent("string" == typeof jgg_H ? jgg_H : location.href);
      }
    });
    jgg_V.signUp = function (jgg_H, jgg_U) {
      !jgg_H || 1 == jgg_H.nodeType || jgg_H instanceof jgg_o || (jgg_U = jgg_H, jgg_H = undefined);
      jgg_d.setCallback(jgg_U).run(jgg_H);
    };
    jgg_V.setConfig("signUp.hideNickname", true);
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(209);
    var jgg_K = jgg_T(159);
    var jgg_u = "<a href=\"#\" class=\"quc-link\"></a>";
    var jgg_r = {
      init: function (jgg_C) {
        this.model = jgg_C;
        this.$el = jgg_y(jgg_o);
        jgg_K.initView(this);
        this.initModelEvent();
      },
      reset: function () {
        this.$el && this.$el.html(jgg_y(jgg_o).html());
      },
      initModelEvent: function () {
        var jgg_C = this;
        jgg_C.model.on("show", function (jgg_O, jgg_z) {
          jgg_C.show(jgg_z && jgg_z.wrapper);
        }).on("hide", function () {
          jgg_C.hide();
        }).on("invalid", function (jgg_O, jgg_z) {
          jgg_V.utils.isSameError(jgg_z, jgg_V.ERROR.USERNAME_DUPLICATE) && jgg_C.model.get("alternatives", []).length > 0 && (jgg_K.setFieldStatus(jgg_C.$el.find("[name=userName]").parents(".quc-field")), jgg_C.showAlternatives());
        });
      },
      setUsername: function (jgg_C) {
        this.$el.find("[name=userName]").val(jgg_C).focus();
      },
      showAlternatives: function () {
        var jgg_O;
        var jgg_z = this;
        var jgg_d = this.model.get("alternatives", []);
        var jgg_H = this.$el.find(".quc-tip");
        if (!(jgg_d.length <= 0)) {
          var jgg_U = this.$el.find(".quc-alternatives");
          var jgg_i = function (jgg_q) {
            return function (jgg_G) {
              jgg_G.preventDefault();
              jgg_z.setUsername(jgg_q);
            };
          };
          jgg_U.empty();
          for (var jgg_I = 0, jgg_Z = jgg_d.length; jgg_I < jgg_Z; jgg_I++) {
            jgg_O = jgg_d[jgg_I];
            jgg_y(jgg_u).html(jgg_O).on("click", jgg_i(jgg_O)).appendTo(jgg_U);
          }
          jgg_U.parent().show();
          jgg_H.hide();
          this.$el.find("[name=userName]").on("change", function (jgg_q) {
            var jgg_G = jgg_y(this);
            jgg_y.inArray(jgg_G.val(), jgg_d) == -1 && (jgg_U.parent().hide(), jgg_H.show(), jgg_G.off(jgg_q));
          });
        }
      },
      show: function (jgg_C) {
        if (jgg_C) {
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_y(jgg_C).addClass("quc-wrapper quc-page").empty().append(this.$el);
        } else {
          this.panel && this.reset();
          this.panel = this.model.panel = new jgg_V.utils.Panel({
            type: "message"
          });
          var jgg_O = this.panel;
          jgg_O.setTitle(jgg_V.getConfig("setUsername.panelTitle", "设置用户名"));
          jgg_O.setContent(this.$el);
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_O.show();
          jgg_y(jgg_O).on("close", jgg_V.getConfig("setUsername.panelCloseHandler", jgg_y.noop));
        }
        this.model.trigger("afterShow", this.$el[0]);
      },
      hide: function () {
        this.model.trigger("beforeHide", this.$el[0]);
        this.panel && this.panel.hide();
        this.model.trigger("afterHide", this.$el[0]);
      }
    };
    jgg_V.ui.setUsername = {
      init: function () {
        jgg_r.init.apply(jgg_r, arguments);
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-set-username><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input name=userName placeholder=请输入用户名：2-14个字符,支持中英文 maxlength=14 autocomplete=off></div></div><div class=quc-alternative-wrapper style=\"display: none\"><p class=quc-tip-error>用户名已经被占用，我们为您推荐以下用户名：<div class=quc-alternatives></div></div></div><div class=quc-button-list><input type=submit value=保存 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = jgg_X.getLogic({
      name: "setUsername",
      validate: function (jgg_o) {
        jgg_o = jgg_o || this.get("userName");
        return jgg_X.validate.checkUsername(jgg_o);
      },
      run: function (jgg_o) {
        this.init().trigger("show", {
          wrapper: jgg_o
        });
      },
      submit: function () {
        var jgg_K = this;
        var jgg_u = jgg_h.Deferred();
        var jgg_r = jgg_K.validate();
        this.trigger("beforeSubmit");
        jgg_r ? jgg_u.reject(jgg_r) : jgg_u.resolve();
        return jgg_u.then(function () {
          return jgg_X.getUserInfo(false);
        }).then(function (jgg_C) {
          return jgg_X.sync.setUsername(jgg_C.crumb, jgg_K.get("userName"));
        }).done(function (jgg_C) {
          jgg_K.trigger("hide").trigger("success").resolve(jgg_C);
        }).fail(function (jgg_C) {
          jgg_K.set("alternatives", jgg_C.userinfo);
          jgg_K.trigger("invalid", jgg_C);
        });
      }
    });
    jgg_X.setUsername = function (jgg_o, jgg_K) {
      !jgg_o || 1 == jgg_o.nodeType || jgg_o instanceof jgg_h || (jgg_K = jgg_o, jgg_o = undefined);
      jgg_y.setCallback(jgg_K).run(jgg_o);
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(212);
    var jgg_K = jgg_T(159);
    var jgg_u = "<a href=\"#\" class=\"quc-link\"></a>";
    var jgg_r = {
      init: function (jgg_C) {
        this.model = jgg_C;
        this.$el = jgg_y(jgg_o);
        jgg_K.initView(this);
        this.initModelEvent();
      },
      reset: function () {
        this.$el && this.$el.html(jgg_y(jgg_o).html());
        this.model.reset();
      },
      initModelEvent: function () {
        var jgg_O = this;
        jgg_O.model.on("show", function (jgg_z, jgg_d) {
          jgg_O.show(jgg_d && jgg_d.wrapper);
        }).on("hide", function () {
          jgg_O.hide();
        }).on("invalid", function (jgg_z, jgg_d) {
          jgg_V.utils.isSameError(jgg_d, jgg_V.ERROR.NICKNAME_DUPLICATE) && jgg_O.model.get("alternatives", []).length > 0 && (jgg_K.setFieldStatus(jgg_O.$el.find("[name=nickName]").parents(".quc-field")), jgg_O.showAlternatives());
        });
      },
      setNickname: function (jgg_C) {
        this.$el.find("[name=nickName]").val(jgg_C).focus();
      },
      showAlternatives: function () {
        var jgg_C;
        var jgg_O = this;
        var jgg_z = this.model.get("alternatives", []);
        var jgg_d = this.$el.find(".quc-tip");
        if (!(jgg_z.length <= 0)) {
          var jgg_H = this.$el.find(".quc-alternatives");
          var jgg_U = function (jgg_Z) {
            return function (jgg_q) {
              jgg_q.preventDefault();
              jgg_O.setNickname(jgg_Z);
            };
          };
          jgg_H.empty();
          for (var jgg_i = 0, jgg_I = jgg_z.length; jgg_i < jgg_I; jgg_i++) {
            jgg_C = jgg_z[jgg_i];
            jgg_y(jgg_u).html(jgg_C).on("click", jgg_U(jgg_C)).appendTo(jgg_H);
          }
          jgg_H.parent().show();
          jgg_d.hide();
          this.$el.find("[name=nickName]").on("change", function (jgg_Z) {
            var jgg_q = jgg_y(this);
            jgg_y.inArray(jgg_q.val(), jgg_z) == -1 && (jgg_H.parent().hide(), jgg_d.show(), jgg_q.off(jgg_Z));
          });
        }
      },
      show: function (jgg_C) {
        var jgg_O = this.model.get("nickName");
        if (jgg_C) {
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_y(jgg_C).addClass("quc-wrapper quc-page").empty().append(this.$el);
        } else {
          this.panel && this.reset();
          this.panel = this.model.panel = new jgg_V.utils.Panel({
            type: "message"
          });
          var jgg_z = this.panel;
          jgg_z.setTitle(jgg_V.getConfig("setNickname.panelTitle", jgg_O ? "修改昵称" : "设置昵称"));
          jgg_z.setContent(this.$el);
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_z.show();
          jgg_y(jgg_z).on("close", jgg_V.getConfig("setNickname.panelCloseHandler", jgg_y.noop));
        }
        this.$el.find("[name=nickName]").val(jgg_O);
        this.model.trigger("aftershow", this.$el[0]);
      },
      hide: function () {
        this.model.trigger("beforehide", this.$el[0]);
        this.panel && this.panel.hide();
        this.model.trigger("afterhide", this.$el[0]);
      }
    };
    jgg_V.ui.setNickname = {
      init: function () {
        jgg_r.init.apply(jgg_r, arguments);
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-set-nickname><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input name=nickName placeholder=请输入昵称：2-14个字符,支持中英文 maxlength=14 autocomplete=off></div></div><div class=quc-alternative-wrapper style=\"display: none\"><p class=quc-tip-error>昵称已经被占用，我们为您推荐以下昵称：<div class=quc-alternatives></div></div></div><div class=quc-button-list><input type=submit value=保存 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h;
    var jgg_y = jgg_X.$;
    var jgg_o = jgg_X.getLogic({
      name: "setNickname",
      validate: function (jgg_K) {
        jgg_K = jgg_K || this.get("nickName");
        return jgg_X.validate.checkNickname(jgg_K);
      },
      run: function (jgg_K) {
        var jgg_u = this;
        jgg_u.init().trigger("showLoading");
        jgg_X.getUserInfo().always(function () {
          jgg_u.trigger("hideLoading");
        }).done(function (jgg_r) {
          var jgg_C = jgg_r.nickname;
          jgg_C && (jgg_u.set("nickName", jgg_C), jgg_h = jgg_C);
          jgg_u.trigger("show", {
            wrapper: jgg_K
          });
        });
      },
      submit: function () {
        var jgg_u = this;
        var jgg_r = jgg_y.Deferred();
        var jgg_C = jgg_u.validate();
        this.trigger("beforeSubmit");
        jgg_C ? jgg_r.reject(jgg_C) : jgg_r.resolve();
        return jgg_r.then(function () {
          return jgg_X.getUserInfo();
        }).then(function (jgg_O) {
          return jgg_X.sync.setNickname(jgg_O.crumb, jgg_u.get("nickName"));
        }).done(function () {
          var jgg_O = {
            oldValue: jgg_h,
            newValue: jgg_u.get("nickName")
          };
          jgg_h = jgg_O.newValue;
          jgg_u.trigger("hide").trigger("success").resolve(jgg_O);
        }).fail(function (jgg_O) {
          jgg_X.utils.isSameError(jgg_X.ERROR.NICKNAME_DUPLICATE, jgg_O) && jgg_u.set("alternatives", jgg_O.userinfo);
          jgg_u.trigger("invalid", jgg_O);
        });
      }
    });
    jgg_X.setNickname = function (jgg_K, jgg_u) {
      !jgg_K || 1 == jgg_K.nodeType || jgg_K instanceof jgg_y || (jgg_u = jgg_K, jgg_K = undefined);
      jgg_o.setCallback(jgg_u).run(jgg_K);
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(215);
    var jgg_K = jgg_T(159);
    var jgg_u = {
      init: function (jgg_r) {
        this.model = jgg_r;
        this.$el = jgg_y(jgg_o);
        this._$el = this.$el;
        this.initModelEvent();
        jgg_K.initView(this);
        jgg_V.utils.emailHint(this.$el.find("[name=email]"));
      },
      reset: function () {
        this.$el = this._$el;
        jgg_K.clearButtonLoading(this.$el.find(".quc-button"));
      },
      initModelEvent: function () {
        var jgg_r = this;
        this.model.on("show", function (jgg_C, jgg_O) {
          jgg_r.show(jgg_O && jgg_O.wrapper);
        }).on("hide", function () {
          jgg_r.hide();
        });
      },
      show: function (jgg_r) {
        if (this.reset(), jgg_r) {
          this.model.trigger("beforeshow", this.$el[0]);
          jgg_r.addClass("quc-wrapper quc-page").empty().append(this.$el);
        } else {
          this.panel = this.model.panel = new jgg_V.utils.Panel({
            type: "message"
          });
          var jgg_C = this.panel;
          jgg_C.setTitle(jgg_V.getConfig("setEmail.panelTitle", "设置登录邮箱"));
          jgg_C.setContent(this.$el);
          this.model.trigger("beforeshow", this.$el[0]);
          jgg_C.show();
          jgg_y(jgg_C).on("close", jgg_V.getConfig("setEmail.panelCloseHandler", jgg_y.noop));
        }
        this.model.trigger("aftershow", this.$el[0]);
      },
      hide: function () {
        this.model.trigger("beforehide", this.$el[0]);
        this.panel && this.panel.hide();
        this.model.trigger("afterhide", this.$el[0]);
      }
    };
    jgg_V.ui.setEmail = {
      init: function () {
        jgg_u.init.apply(jgg_u, arguments);
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-set-email><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input name=email placeholder=请输入您的登录邮箱 autocomplete=off></div></div></div><div class=quc-button-list><input type=submit value=提交 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = jgg_X.getLogic({
      name: "setEmail",
      validate: function (jgg_o) {
        jgg_o = jgg_o || this.get("email");
        return jgg_X.validate.checkEmail(jgg_o);
      },
      run: function (jgg_o) {
        var jgg_u = this;
        jgg_u.init().trigger("showLoading");
        jgg_X.identify(jgg_u).then(function () {
          return jgg_X.activeEmail.prepare(jgg_u);
        }).always(function () {
          jgg_u.trigger("hideLoading");
        }).done(function () {
          jgg_u.trigger("show", {
            wrapper: jgg_o
          });
        });
      },
      submit: function () {
        var jgg_K = this;
        var jgg_u = jgg_h.Deferred();
        var jgg_r = jgg_K.validate();
        this.trigger("beforeSubmit");
        jgg_r ? jgg_u.reject(jgg_r) : jgg_u.resolve();
        return jgg_u.then(function () {
          return jgg_X.getUserInfo();
        }).then(function (jgg_C) {
          return jgg_X.sync.setEmail(jgg_C.crumb, jgg_K.get("email"));
        }).then(function (jgg_C) {
          jgg_K.trigger("next");
          var jgg_O = jgg_h.Deferred();
          jgg_X.activeEmail(jgg_C, function () {
            jgg_O.resolve();
          });
          return jgg_O.promise();
        }).then(function (jgg_C) {
          jgg_K.trigger("hide").trigger("success").resolve(jgg_C);
        }, function (jgg_C) {
          jgg_K.trigger("invalid", jgg_C);
        });
      }
    });
    jgg_X.setEmail = function (jgg_o, jgg_K) {
      !jgg_o || 1 == jgg_o.nodeType || jgg_o instanceof jgg_h || (jgg_K = jgg_o, jgg_o = undefined);
      jgg_y.setCallback(jgg_K).run(jgg_o);
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(218);
    var jgg_K = jgg_T(159);
    var jgg_u = {
      init: function (jgg_r) {
        this.model = jgg_r;
        this.$el = jgg_y(jgg_o);
        this.initModelEvent();
        jgg_K.initView(this);
      },
      initModelEvent: function () {
        var jgg_r = this;
        jgg_r.model.on("show", function (jgg_C, jgg_O) {
          jgg_r.show(jgg_O && jgg_O.wrapper);
        }).on("hide", function () {
          jgg_r.hide();
        });
      },
      show: function (jgg_r) {
        if (jgg_r) {
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_y(jgg_r).addClass("quc-wrapper quc-page").empty().append(this.$el);
        } else {
          this.panel && this.$el.html(jgg_y(jgg_o).html());
          this.panel = this.model.panel = new jgg_V.utils.Panel({
            type: "message"
          });
          var jgg_C = this.panel;
          jgg_C.setTitle(jgg_V.getConfig("setSecEmail.panelTitle", "设置密保邮箱"));
          jgg_C.setContent(this.$el);
          jgg_V.utils.emailHint(this.$el.find("[name=secemail]"));
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_C.show();
          jgg_y(jgg_C).on("close", jgg_V.getConfig("setSecEmail.panelCloseHandler", jgg_y.noop));
        }
        this.model.trigger("afterShow", this.$el[0]);
      },
      hide: function () {
        this.model.trigger("beforeHide", this.$el[0]);
        this.panel && this.panel.hide();
        this.model.trigger("afterHide", this.$el[0]);
      }
    };
    jgg_V.ui.setSecEmail = {
      init: function () {
        jgg_u.init.apply(jgg_u, arguments);
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-set-sec-email><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field\"><div class=quc-form-item-content><div class=quc-input><input name=secemail placeholder=请输入密保邮箱 autocomplete=off></div></div></div><div class=quc-button-list><input type=submit value=提交 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = jgg_X.getLogic({
      name: "setSecEmail",
      validate: function (jgg_o) {
        jgg_o = jgg_o || this.get("secemail");
        return jgg_X.validate.checkEmail(jgg_o);
      },
      run: function (jgg_o) {
        var jgg_K = this;
        jgg_K.init().trigger("showLoading");
        jgg_X.identify(jgg_K).then(function () {
          return jgg_X.activeEmail.prepare(jgg_K);
        }).always(function () {
          jgg_K.trigger("hideLoading");
        }).done(function () {
          jgg_K.trigger("show", {
            wrapper: jgg_o
          });
        });
      },
      submit: function () {
        var jgg_K = this;
        var jgg_u = jgg_h.Deferred();
        var jgg_r = jgg_K.validate();
        this.trigger("beforeSubmit");
        jgg_r ? jgg_u.reject(jgg_r) : jgg_u.resolve();
        return jgg_u.then(function () {
          return jgg_X.getUserInfo();
        }).then(function (jgg_C) {
          return jgg_X.sync.setSecEmail(jgg_C.crumb, jgg_K.get("secemail"));
        }).then(function (jgg_C) {
          jgg_K.trigger("next");
          var jgg_O = jgg_h.Deferred();
          jgg_X.activeEmail(jgg_C, function () {
            jgg_O.resolve();
          });
          return jgg_O.promise();
        }).then(function (jgg_C) {
          jgg_K.trigger("hide").trigger("success").resolve(jgg_C);
        }, function (jgg_C) {
          jgg_K.trigger("invalid", jgg_C);
        });
      }
    });
    jgg_X.setSecEmail = function (jgg_o, jgg_K) {
      !jgg_o || 1 == jgg_o.nodeType || jgg_o instanceof jgg_h || (jgg_K = jgg_o, jgg_o = undefined);
      jgg_y.setCallback(jgg_K).run(jgg_o);
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K = jgg_T(14).getLogger("bindMobile");
      var jgg_u = jgg_y.$;
      var jgg_r = jgg_T(221);
      var jgg_C = jgg_T(159);
      var jgg_O = jgg_T(105);
      var jgg_z = jgg_T(160);
      var jgg_d = jgg_z.CAPTCHA_APP_ID;
      var jgg_H = jgg_z.CAPTCHA_SLIDE_TYPE;
      var jgg_U = jgg_z.CAPTCHA_GRAPH_TYPE;
      var jgg_i = {
        init: function (jgg_I) {
          this.model = jgg_I;
          this.$el = jgg_u(this.getCompiledHtml());
          this.initModelEvent();
          this.initSmsToken();
          jgg_C.initView(this);
          jgg_C.initMobileStates(this);
          this.initTips();
        },
        reset: function () {
          jgg_K.debug("reset ui");
          this.$el ? this.$el.html(jgg_u(this.getCompiledHtml()).html()) : this.$el = jgg_u("<div>");
          jgg_C.initMobileStates(this);
          this.initTips();
          this.model.set("mobileCheckData", null);
        },
        getCompiledHtml: function () {
          var jgg_I = jgg_V.extend({
            fromSocial: this.model.fromSocial || false
          }, jgg_y.getConfig("signUp"), jgg_y.getConfig("bindMobile"));
          return jgg_V.template(jgg_r)(jgg_I);
        },
        initTips: function () {
          this.$el.find(".quc-field .quc-tip").attr("data-default-tip", function () {
            return jgg_u(this).html();
          });
        },
        iePlaceholder: function () {
          jgg_y.utils.initPlaceholder(jgg_u("input[name=account],input[name=smscode]"));
        },
        initSmsToken: function () {
          var jgg_q;
          var jgg_G;
          var jgg_Y = this;
          var jgg_c = "quc-button-disabled";
          var jgg_l = jgg_y.utils.getTimer("bind_mobile");
          jgg_l.on("timer_start", function (jgg_M, jgg_B) {
            jgg_G.addClass(jgg_c);
            jgg_G.html(jgg_B + "秒后重新获取");
          });
          jgg_l.on("timer_tick", function (jgg_M, jgg_B) {
            jgg_G.html(jgg_B + "秒后重新获取");
          });
          jgg_l.on("timer_stop", function () {
            jgg_G.html("重新获取验证码");
            jgg_G.removeClass(jgg_c);
          });
          var jgg_m = function (jgg_M) {
            jgg_M.preventDefault();
            var jgg_R = jgg_q.val();
            var jgg_L = jgg_q.data("areaCode");
            var jgg_f = jgg_q.data("regExp");
            jgg_Y.model.set("mobile", jgg_O.normalizeMobileObj({
              mobileNumber: jgg_R,
              regExp: jgg_f,
              areaCode: jgg_L
            }));
            jgg_Y.model.set("captcha", jgg_Y.$el.find("[name=captcha]").val());
            jgg_G.hasClass(jgg_c) || (jgg_G.html("发送中..."), jgg_G.addClass(jgg_c), jgg_Y.model.bindMobileCheck().then(function (jgg_j) {
              "relMobile" == jgg_j.type && (jgg_Y.model.set("actionType", "relMobile"), jgg_Y.model.panel && jgg_Y.model.panel.setTitle("关联手机号"));
              return jgg_Y.model.sendSmsToken(jgg_j);
            }).then(function (jgg_j) {
              jgg_Y.model.clearSlideInfo();
              var jgg_P = jgg_Y.$el.find("[name=mobile]").parents(".quc-field");
              var jgg_E = jgg_P.find(".quc-tip");
              jgg_E.removeClass("quc-tip-error").addClass("quc-tip-success").html("发送成功").show();
              jgg_P.find(".quc-input").on("change", function () {
                jgg_E.removeClass("quc-tip-success").html(jgg_E.attr("data-default-tip"));
                jgg_P.find(jgg_v.NMeUv).removeClass(jgg_v.MZIFP);
              }).parent().removeClass("quc-input-bg-incorrect");
              jgg_P.find(".quc-tip-icon").removeClass("quc-tip-icon-incorrect").addClass("quc-tip-icon-correct");
              jgg_l.start();
              jgg_C.setFieldStatus(jgg_P);
              jgg_Y.model.set("token", jgg_j.vt);
              jgg_Y.model.trigger("dealCaptcha");
            }).caught(function (jgg_j) {
              if (jgg_Y.model.clearSlideInfo(), jgg_K.debug("get validate code fail", jgg_j), jgg_G.html("获取验证码"), jgg_G.removeClass(jgg_c), jgg_j.errmsg) {
                if ("78500" == jgg_j.errno && jgg_Y.model.set("captchaType", jgg_y.utils.getCaptchaType(jgg_H)), jgg_j.errdetail && jgg_j.errdetail.captchaType && jgg_Y.model.set("captchaType", jgg_y.utils.getCaptchaType(jgg_j.errdetail.captchaType)), jgg_j.field = jgg_Y.$el.find("[name=mobile]").parents("quc-field"), jgg_Y.model.get("captchaType") == jgg_H) {
                  jgg_j.fromServer = true;
                } else {
                  if (jgg_Y.model.get("captchaType") == jgg_U) {
                    "78502" == jgg_j.errno && (jgg_j.errno = "78002", jgg_j.errdetail.captchaType = jgg_U);
                    var jgg_g = jgg_j.errdetail && jgg_j.errdetail.captchaUrl;
                    jgg_g && (jgg_j.fromServer = true, jgg_Y.model.setCaptchaUrl(jgg_g));
                  }
                }
                jgg_Y.model.trigger("invalid", jgg_j);
              }
            }));
          };
          jgg_Y.model.on("show", function () {
            jgg_q = jgg_Y.$el.find("[name=mobile]");
            jgg_G = jgg_Y.$el.find(".quc-get-token");
            jgg_G.off("click", jgg_m).on("click", jgg_m);
            jgg_l.isRunning() && jgg_l.resume();
          }).on("invalid", function (jgg_M, jgg_B) {
            jgg_B.fromServer && (jgg_Y.model.get("captchaType") == jgg_H ? jgg_Y.initSlideCaptcha() : jgg_w());
          }).on("dealCaptcha", function () {
            var jgg_M = jgg_Y.$el.find("[name=captcha]").parents(".quc-field");
            jgg_M.hide();
            jgg_Y.$el.find("[name=captcha]").val("");
            jgg_Y.$el.find("[name=mobile]").off("change").on("change", function () {
              jgg_Y.model.get("captchaType") == jgg_U && jgg_M.show();
              jgg_Y.$el.find(".quc-captcha-change").trigger("click");
              jgg_Y.model.set("token", null);
              jgg_Y.model.trigger("timer_stop");
            });
          });
          var jgg_w = function () {
            var jgg_M = {
              HhPyK: function (jgg_B, jgg_R) {
                return jgg_B(jgg_R);
              },
              aCCJl: "data-default-tip"
            };
            jgg_Y.model.getCaptchaUrl().then(function (jgg_B) {
              var jgg_R = jgg_Y.$el.find("[name=captcha]").parents(".quc-field");
              jgg_R.find(".quc-captcha-img").attr("src", jgg_B);
              jgg_R.find("[name=captcha]").val("");
              jgg_R.find(".quc-tip").removeClass("quc-tip-error").html(function () {
                return jgg_M.HhPyK(jgg_u, this).attr(jgg_M.aCCJl);
              });
              jgg_R.find(".quc-tip-icon").removeClass("quc-tip-icon-incorrect");
              jgg_R.show();
              jgg_D();
            });
          };
          var jgg_D = function () {
            var jgg_M = {
              ZkpZN: function (jgg_R) {
                return jgg_R();
              },
              WCrzs: "[name=captcha]"
            };
            var jgg_B = jgg_Y.$el.find("[name=captcha]").parents(".quc-field");
            jgg_B.find(".quc-captcha-change").off("mousedown").off("click").on("mousedown", function (jgg_R) {
              jgg_R.preventDefault();
            }).on("click", function (jgg_R) {
              jgg_R.preventDefault();
              jgg_M.ZkpZN(jgg_w);
              jgg_B.find(jgg_M.WCrzs).focus();
            });
          };
          jgg_D();
        },
        initModelEvent: function () {
          var jgg_I = this;
          jgg_I.model.on("show", function (jgg_Z, jgg_q) {
            jgg_I.show(jgg_q && jgg_q.wrapper);
          }).on("hide", function () {
            jgg_I.panel && jgg_I.panel.hide();
          });
        },
        initSlideCaptcha: function () {
          var jgg_Z = this;
          jgg_y.utils.loadSlideCaptcha().then(function () {
            window.QHPassCaptcha.init({
              appid: jgg_d,
              adaptScreen: false,
              imgShow: true,
              needDialog: true,
              width: 330,
              callBack: function (jgg_q) {
                jgg_q.success && (jgg_Z.model.set("slideToken", jgg_q.token), jgg_Z.model.set("slideVd", jgg_q.vd), jgg_Z.$el.find(".quc-get-token").trigger("click"));
              }
            });
          });
        },
        bindEvent: function () {
          var jgg_Z = this;
          jgg_Z.$el.find("input[name=mobile]").off("change").on("change", function () {
            jgg_Z.model.set("mobileCheckData", null);
          });
        },
        show: function (jgg_I) {
          var jgg_Z = this;
          if (jgg_K.debug("show panel"), jgg_I) {
            jgg_Z.model.trigger("beforeShow", jgg_Z.$el[0]);
            jgg_u(jgg_I).addClass("quc-wrapper quc-page").empty().append(jgg_Z.$el);
          } else {
            jgg_Z.panel && jgg_Z.reset();
            jgg_Z.panel = this.model.panel = new jgg_y.utils.Panel({
              type: "message"
            });
            var jgg_q = jgg_Z.panel;
            jgg_q.setTitle(jgg_y.getConfig("bindMobile.panelTitle", "绑定手机号"));
            jgg_q.setContent(this.$el);
            jgg_Z.model.trigger("beforeShow", jgg_Z.$el[0]);
            jgg_q.show();
            jgg_u(jgg_q).on("close", jgg_y.getConfig("bindMobile.panelCloseHandler", jgg_u.noop));
          }
          jgg_Z.bindEvent();
          jgg_Z.model.trigger("afterShow", this.$el[0]);
        }
      };
      jgg_y.ui.bindMobile = {
        init: function () {
          jgg_i.init.apply(jgg_i, arguments);
        }
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-bind-mobile><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field quc-field-has-option\"><div class=quc-form-item-content><div class=\"quc-input <% if (showMoBileZone) { %>quc-input-has-prefix quc-input-has-zone<% } %>\"> <% if (showMoBileZone) { %> <div class=\"quc-input-prefix quc-input-zone\"><span class=quc-activeState></span><i class=\"quc-state-arrow quc-icon quc-icon-arrow_down\">&#xe69e;</i><ul class=\"quc-mobile-Statelist quc-option-wrapper\"></ul></div> <% } %> <input name=mobile placeholder=请输入手机号></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\" style=\"display: none\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=quc-input><input placeholder=验证码 name=captcha maxlength=7 autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-append\"><input name=smscode placeholder=短信验证码><div class=quc-input-append><span class=\"quc-link quc-get-token\">获取验证码</span></div></div></div></div> <% if (fromSocial) { %><div class=\"quc-link create-account-btn\" style=\"margin: -10px 0 10px 0; float: right\">跳过</div><% } %> <div class=quc-button-list><input type=submit value=\"<%= fromSocial ? '同意并绑定' : '提交' %>\" class=\"quc-button-submit quc-button quc-button-primary\"> <% if (fromSocial) { %> <div style=\"font-size: 12px; margin-top: 10px\">阅读并同意<a href=<%= protocolUrl %> target=_blank class=quc-link>《<%= protocolText %>》</a>和<a href=<%= privacyUrl %> target=_blank class=quc-link>《<%= privacyText %>》</a></div> <% } %> </div></form></div></div>";
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V, jgg_h) {
    !function (jgg_o) {
      var jgg_u = jgg_T(160);
      var jgg_r = jgg_T(14).getLogger("bindMobile");
      var jgg_C = jgg_u.CAPTCHA_APP_ID;
      var jgg_O = jgg_T(105);
      var jgg_z = jgg_o.$;
      var jgg_d = {};
      var jgg_H = jgg_o.getLogic({
        name: "bindMobile",
        validate: function (jgg_U, jgg_i, jgg_I) {
          jgg_r.debug("validate");
          var jgg_Z;
          var jgg_q = jgg_o.validate;
          if ("boolean" != typeof jgg_i && undefined !== jgg_i || (jgg_i = this.get(jgg_U)), /mobile/i.test(jgg_U) && (jgg_i = jgg_O.normalizeMobileObj(jgg_i), jgg_i && jgg_i.mobileNumber)) {
            return !!jgg_I && jgg_z.Deferred().resolve();
          }
          switch (jgg_U.toLowerCase()) {
            case "mobile":
              jgg_Z = jgg_q.checkMobile(jgg_i, true);
              break;
            case "smscode":
              jgg_Z = jgg_q.checkSmsToken(jgg_i);
          }
          if (jgg_I) {
            var jgg_G;
            var jgg_Y = jgg_o.sync;
            if (jgg_Z) {
              jgg_G = jgg_z.Deferred();
              jgg_G.reject(jgg_Z);
            } else {
              if ("mobile" == jgg_U) {
                var jgg_c = jgg_i.mobileNumber;
                var jgg_l = jgg_i.areaCode;
                var jgg_w = jgg_d[jgg_c];
                if (jgg_w) {
                  return jgg_w;
                }
                jgg_G = jgg_Y.checkMobileNumberExist(jgg_c, jgg_l);
                jgg_d[jgg_c] = jgg_G.promise();
              } else {
                jgg_G = jgg_z.Deferred();
                jgg_G.resolve();
              }
            }
            return jgg_G.promise();
          }
          return jgg_Z;
        },
        run: function (jgg_U) {
          jgg_r.debug("run");
          var jgg_I = this;
          jgg_I.init();
          this.fromSocial ? jgg_I.trigger("show", {
            wrapper: jgg_U
          }) : (jgg_I.trigger("showLoading"), jgg_o.identify(jgg_I).then(function (jgg_Z) {
            jgg_r.debug("prepare identify");
            jgg_I.trigger("show", {
              wrapper: jgg_U
            });
          }, function (jgg_Z) {
            if ("1552" == jgg_Z.errno) {
              jgg_r.debug("shadow account fill profile first");
              return jgg_o.fillProfile(function () {
                return jgg_I.trigger("hide").trigger("success").resolve();
              });
            }
          }).always(function () {
            jgg_I.trigger("hideLoading");
          }));
        },
        prepareMobileState: function () {
          return jgg_o.sync.getMobileState();
        },
        submit: function () {
          var jgg_i = this;
          var jgg_I = jgg_z.Deferred();
          jgg_r.debug("logic submit");
          this.trigger("beforeSubmit");
          var jgg_Z = jgg_i.validate("mobile") || jgg_i.validate("smscode");
          jgg_Z ? jgg_I.reject(jgg_Z) : jgg_I.resolve();
          jgg_I = jgg_H.fromSocial ? jgg_I.then(function () {
            return jgg_H.fromWechatMP ? jgg_o.sync.mpAuthBindMobile({
              mobile: jgg_O.getMobileStr(jgg_i.get("mobile")),
              smscode: jgg_i.get("smscode")
            }) : jgg_o.sync.authBindMobile(jgg_i.get("mobile"), jgg_i.get("smscode"));
          }) : jgg_I.then(function () {
            return jgg_o.getUserInfo();
          }).then(function (jgg_q) {
            return "relMobile" === jgg_i.get("actionType") ? jgg_o.sync.relMobile(jgg_q.crumb, jgg_i.get("mobile"), jgg_i.get("smscode")) : jgg_o.sync.bindMobileNew(jgg_q.crumb, jgg_i.get("mobile"), jgg_i.get("smscode"), jgg_i.get("canForceBind"));
          });
          return jgg_I.done(function () {
            jgg_i.trigger("hide").trigger("success").resolve();
            jgg_o.isI360() || ("relMobile" === jgg_i.get("actionType") ? jgg_o.$message({
              title: "关联手机号成功",
              content: "关联手机号成功， 该手机号无法用于登录该账号， 请知悉",
              status: "success"
            }) : jgg_o.$message({
              title: "绑定手机号成功",
              content: "绑定手机号成功, 您以后可以使用该手机号进行登录啦",
              status: "success"
            }));
          }).fail(function (jgg_q) {
            jgg_i.trigger("invalid", jgg_q);
          });
        },
        clearSlideInfo: function () {
          var jgg_U = this;
          jgg_U.set("slideToken", "");
          jgg_U.set("slideVd", "");
          jgg_U.set("appid", "");
          jgg_U.set("captchaType", "");
        },
        bindMobileCheck: function () {
          if (jgg_H.fromSocial) {
            return jgg_V.resolve({
              condition: jgg_u.SMS_CONDITION_ALWAYS
            });
          }
          var jgg_I = this;
          var jgg_Z = jgg_I.get("mobile");
          jgg_r.debug("bind mobile check", jgg_Z);
          var jgg_Y = jgg_I.validate("mobile");
          if (jgg_Y) {
            return jgg_V.reject(jgg_Y);
          }
          var jgg_q = jgg_Z.areaCode + jgg_Z.mobileNumber;
          var jgg_G = jgg_o.getConfig("bindMobile.isRelMobile");
          jgg_I.set("canForceBind", false);
          var jgg_c = jgg_I.get("mobileCheckData");
          return jgg_c ? (0 == jgg_c.condition && jgg_I.set("canForceBind", true), jgg_V.resolve(jgg_c)) : jgg_o.tool.checkBindMobile(jgg_q, jgg_G).then(function (jgg_l) {
            0 == jgg_l.condition && jgg_I.set("canForceBind", true);
            5 != jgg_l.status && jgg_I.set("mobileCheckData", jgg_l);
            return jgg_l;
          });
        },
        sendSmsToken: function (jgg_U) {
          jgg_r.debug("send sms token", jgg_U);
          var jgg_i = this;
          var jgg_I = jgg_i.validate("mobile");
          return jgg_I ? jgg_z.Deferred().reject(jgg_I).promise() : jgg_H.fromSocial ? jgg_o.sync.sendSmsCodeNewV2({
            condition: jgg_h.get(jgg_U, "condition"),
            account: jgg_O.getMobileStr(jgg_i.get("mobile")),
            captcha: jgg_i.get("captcha"),
            vt: jgg_i.get("token"),
            sms_scene: jgg_u.SMS_SCENE_OAUTH_BIND_MOBILE,
            qucrypt_code: jgg_i.get("qucrypt_code"),
            captchaType: jgg_i.get("captchaType"),
            appid: jgg_i.get("slideToken") && jgg_i.get("slideVd") ? jgg_C : "",
            slideToken: jgg_i.get("slideToken"),
            slideVd: jgg_i.get("slideVd")
          }) : jgg_o.getUserInfo().then(function () {
            var jgg_Z = {
              condition: jgg_h.get(jgg_U, "condition"),
              account: jgg_O.getMobileStr(jgg_i.get("mobile")),
              captcha: jgg_i.get("captcha"),
              qucrypt_code: jgg_i.get("qucrypt_code"),
              vt: jgg_i.get("token"),
              sms_scene: jgg_u.SMS_SCENE_BIND_MOBILE
            };
            "relMobile" === jgg_i.get("actionType") && (jgg_Z.sms_scene = jgg_u.SMS_SCENE_REL_MOBILE);
            return jgg_o.sync.sendSmsCodeNew(jgg_Z);
          });
        }
      });
      jgg_o.bindMobile = function (jgg_U, jgg_i) {
        !jgg_U || 1 == jgg_U.nodeType || jgg_U instanceof jgg_z || (jgg_i = jgg_U, jgg_U = undefined);
        jgg_H.setCallback(jgg_i).run(jgg_U);
      };
      jgg_o.bindMobileFromSocial = function (jgg_U, jgg_i, jgg_I) {
        !jgg_U || 1 == jgg_U.nodeType || jgg_U instanceof jgg_z || (jgg_i = jgg_U, jgg_U = undefined);
        jgg_r.debug("from social");
        jgg_H.fromSocial = true;
        jgg_H.fromWechatMP = jgg_I;
        jgg_H.setCallback(jgg_i).run(jgg_U);
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(41), jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(159);
    var jgg_K = jgg_T(224);
    var jgg_u = {
      init: function (jgg_r) {
        this.model = jgg_r;
        this.initModelEvent();
        this.initCaptcha();
        this.initSmsToken();
      },
      initCaptcha: function () {
        var jgg_C;
        var jgg_O = this;
        var jgg_z = function () {
          jgg_O.model.getCaptchaUrl().then(function (jgg_U) {
            jgg_C.find(".quc-captcha-img").attr("src", jgg_U);
            jgg_C.find("[name=captcha]").val("");
            jgg_C.find(".quc-tip").removeClass("quc-tip-error").html(function () {
              return jgg_y(this).attr("data-default-tip");
            });
            jgg_C.find(".quc-tip-icon").removeClass("quc-tip-icon-incorrect");
          });
        };
        var jgg_d = function () {
          jgg_z();
          jgg_C.find(".quc-captcha-change").on("mousedown", function (jgg_H) {
            jgg_H.preventDefault();
          }).on("click", function (jgg_H) {
            jgg_H.preventDefault();
            jgg_z();
            jgg_C.find("[name=captcha]").focus();
          });
        };
        this.model.on("show", function () {
          jgg_C = jgg_O.$el.find(".quc-field-captcha");
          jgg_d();
        }).on("invalid", function (jgg_H, jgg_U) {
          jgg_U.fromServer && jgg_z();
        }).on("dealCaptcha", function () {
          var jgg_U = jgg_O.$el.find("[name=captcha]").parents(".quc-field");
          jgg_U.hide();
          jgg_O.$el.find("[name=captcha]").val("");
          jgg_O.$el.find("[name=mobile]").off("change").on("change", function () {
            jgg_U.show();
            jgg_O.$el.find(".quc-captcha-change").trigger("click");
            jgg_O.model.set("token", null);
            jgg_O.model.trigger("timer_stop");
          });
        });
      },
      initSmsToken: function () {
        var jgg_z;
        var jgg_d;
        var jgg_H;
        var jgg_U;
        var jgg_i = this;
        var jgg_I = "quc-button-disabled";
        var jgg_Z = jgg_V.utils.getTimer("sign_up");
        jgg_Z.on("timer_start", function (jgg_G, jgg_Y) {
          jgg_d.addClass(jgg_I);
          jgg_d.html(jgg_Y + "秒后重新获取");
        });
        jgg_Z.on("timer_tick", function (jgg_G, jgg_Y) {
          jgg_d.html(jgg_Y + "秒后重新获取");
        });
        jgg_Z.on("timer_stop", function () {
          jgg_d.html("重新获取验证码");
          jgg_d.removeClass(jgg_I);
        });
        jgg_i.model.on("timer_stop", function () {
          jgg_Z.stop();
        });
        var jgg_O = function (jgg_G) {
          jgg_G.preventDefault();
          var jgg_c = jgg_d.siblings(".quc-tip-icon");
          if (!jgg_d.hasClass(jgg_I)) {
            var jgg_l = jgg_z.val();
            var jgg_w = jgg_z.data("areaCode");
            var jgg_D = jgg_z.data("regExp");
            jgg_i.model.set("mobile", {
              mobileNumber: jgg_l,
              regExp: jgg_D,
              areaCode: jgg_w
            });
            jgg_i.model.set("captcha", jgg_U.val());
            jgg_d.html("发送中...");
            jgg_d.addClass(jgg_I);
            jgg_c.hide();
            jgg_i.model.trigger("afterShow.changeType");
            jgg_i.model.sendSmsToken().done(function (jgg_m) {
              var jgg_v = jgg_H.find(".quc-tip");
              var jgg_M = jgg_H.find(".quc-tip-icon");
              var jgg_B = jgg_H.find(".quc-input-bg");
              jgg_v.addClass("quc-tip-success").html("发送成功").show();
              jgg_B.removeClass("quc-input-bg-incorrect");
              jgg_M.removeClass("quc-tip-icon-incorrect").addClass("quc-tip-icon-correct");
              jgg_H.find(".quc-input").one("change", function () {
                jgg_v.removeClass("quc-tip-success").html(jgg_v.attr("data-default-tip"));
              });
              jgg_c.show();
              jgg_Z.start();
              jgg_i.model.set("token", jgg_m.vt);
              jgg_i.model.trigger("dealCaptcha");
            }).fail(function (jgg_m) {
              jgg_c.show();
              jgg_d.html("获取验证码");
              jgg_d.removeClass(jgg_I);
              jgg_m.type = "mobile";
              var jgg_v = jgg_m.errdetail && jgg_m.errdetail.captchaUrl;
              jgg_v && (jgg_m.fromServer = true, jgg_i.model.setCaptchaUrl(jgg_v), jgg_i.$el.find(".quc-field-captcha .quc-tip-icon").removeClass("quc-tip-icon-correct"));
              jgg_i.model.trigger("invalid", jgg_m);
            });
          }
        };
        this.model.on("show", function () {
          jgg_z = jgg_i.$el.find("[name=mobile]");
          jgg_U = jgg_i.$el.find("[name=captcha]");
          jgg_d = jgg_i.$el.find(".quc-get-token");
          jgg_H = jgg_d.parents(".quc-field");
          jgg_d.off("click", jgg_O).on("click", jgg_O);
          jgg_Z.isRunning() && jgg_Z.resume();
        });
      },
      setElement: function () {
        var jgg_O = this;
        jgg_O.$el && jgg_O.$el.remove();
        jgg_O.$el = jgg_y(jgg_K);
        var jgg_d = jgg_O.model.isFillProfileByMobile();
        jgg_d && (jgg_O.$el.find("[name=mobile], [name=smscode]").parents(".quc-field").show(), jgg_O.$el.find("[name=userName]").parents(".quc-field").hide());
        jgg_O.model.isShowPasswordAgain() || jgg_O.$el.find(".quc-field-password-again").remove();
        jgg_O.$el.find(":text,:password").focus(function () {
          var jgg_H = jgg_y(this).parent();
          var jgg_U = jgg_H.siblings(".quc-tip");
          var jgg_i = jgg_O.$el.find(".quc-global-error .quc-tip");
          jgg_i.hide();
          jgg_H.addClass("quc-input-bg-focus");
          jgg_U.removeClass("quc-tip-success").html(jgg_U.attr("data-default-tip"));
        }).blur(function () {
          var jgg_H = jgg_y(this);
          var jgg_U = jgg_H.parents(".quc-field");
          var jgg_i = jgg_U.siblings(".quc-field-password-again");
          var jgg_I = jgg_U.siblings(".quc-field-password");
          jgg_H.parent().removeClass("quc-input-bg-focus");
          jgg_O.validate(jgg_U);
          jgg_U.hasClass("quc-field-password") && jgg_V.utils.isExisted(jgg_i) && jgg_O.validate(jgg_i);
          jgg_U.hasClass("quc-field-password-again") && jgg_V.utils.isExisted(jgg_I) && jgg_O.validate(jgg_I);
        });
        jgg_O.$el.find(".quc-go-signIn").on("click", function () {
          jgg_O.model.signin();
        });
        this.$el.find(".quc-field .quc-tip").attr("data-default-tip", function () {
          return jgg_y(this).html();
        });
      },
      validate: function (jgg_r) {
        var jgg_C = this;
        var jgg_O = jgg_r.find(".quc-input input");
        var jgg_z = jgg_O.attr("data-name") || jgg_O.attr("name");
        var jgg_d = jgg_O.data("areaCode");
        var jgg_H = jgg_O.data("regExp");
        var jgg_U = "mobile" == jgg_z ? {
          mobileNumber: jgg_O.val(),
          regExp: jgg_H,
          areaCode: jgg_d
        } : jgg_O.val();
        0 == jgg_U.length || "mobile" == jgg_z && 0 == jgg_O.val().length || (jgg_O.trigger("quc-validate"), jgg_o.setFieldStatus(jgg_r), jgg_C.model.validate(jgg_z, jgg_U, true).done(function () {
          jgg_o.setFieldStatus(jgg_r);
        }).fail(function (jgg_i) {
          jgg_i.field = jgg_r;
          jgg_C.model.trigger("invalid", jgg_i);
        }));
      },
      initModelEvent: function () {
        var jgg_r = this;
        jgg_r.model.on("show", function (jgg_C, jgg_O) {
          jgg_r.show(jgg_O && jgg_O.wrapper);
        }).on("hide", function () {
          jgg_r.hide();
        });
      },
      show: function (jgg_r) {
        if (this.setElement(), jgg_o.initView(this), jgg_o.initMobileStates(this), jgg_r) {
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_y(jgg_r).addClass("quc-wrapper quc-page").empty().append(this.$el);
        } else {
          this.panel = this.model.panel = new jgg_V.utils.Panel({
            type: "message"
          });
          var jgg_C = this.panel;
          jgg_C.setTitle(jgg_V.getConfig("fillProfile.panelTitle", "完善账号资料"));
          jgg_C.setContent(this.$el);
          this.model.trigger("beforeShow", this.$el[0]);
          jgg_C.show();
          jgg_y(jgg_C).on("close", jgg_V.getConfig("fillProfile.panelCloseHandler", jgg_y.noop));
        }
        this.model.trigger("afterShow", this.$el[0]);
      },
      hide: function () {
        this.model.trigger("beforeHide", this.$el[0]);
        this.panel && this.panel.hide();
        this.model.trigger("afterHide", this.$el[0]);
      }
    };
    jgg_V.ui.fillProfile = {
      init: function () {
        jgg_u.init.apply(jgg_u, arguments);
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-fill-profile><div class=quc-main><div class=\"quc-tip quc-tip-absolute\"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class=\"quc-form-item quc-field quc-field-has-option\"><div class=quc-form-item-content><div class=\"quc-input quc-input-has-prefix quc-input-has-zone\"><div class=\"quc-input-prefix quc-input-zone\"><span class=quc-activeState></span><i class=\"quc-state-arrow quc-icon quc-icon-arrow_down\">&#xe69e;</i><ul class=\"quc-mobile-Statelist quc-option-wrapper\"></ul></div><input name=mobile placeholder=请输入手机号 autocomplete=new-password></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=quc-input><input placeholder=验证码 name=captcha maxlength=7 autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-item quc-field\" style=\"display: none\"><label class=quc-label></label><div class=quc-form-item-content><div class=\"quc-input quc-input-has-append\"><input name=smscode placeholder=短信验证码><div class=quc-input-append><span class=\"quc-link quc-get-token\">获取验证码</span></div></div></div></div><div class=\"quc-form-item quc-field\"><label class=quc-label></label><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=密码（8-20个字符） autocomplete=new-password></div></div></div><div class=quc-button-list><input type=submit value=注册 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(160);
    var jgg_K = {};
    var jgg_u = jgg_V.getLogic({
      name: "fillProfile",
      validate: function (jgg_r, jgg_C, jgg_O) {
        var jgg_z;
        var jgg_d = jgg_V.validate;
        switch ("boolean" != typeof jgg_C && undefined !== jgg_C || (jgg_C = this.get(jgg_r)), jgg_r) {
          case "userName":
            this.set("userName", jgg_C);
            jgg_z = jgg_d.checkUsername(jgg_C);
            break;
          case "password":
            this.set("password", jgg_C);
            var jgg_H = jgg_d.checkPasswordFrontendSync({
              password: jgg_C,
              userName: this.get("userName")
            });
            jgg_z = jgg_H.reason;
            break;
          case "rePassword":
            jgg_z = jgg_d.checkPasswordConfirm(this.get("password"), jgg_C);
            break;
          case "mobile":
            jgg_z = jgg_d.checkMobile(jgg_C, true);
            break;
          case "smscode":
            jgg_z = jgg_d.checkSmsToken(jgg_C);
            break;
          case "captcha":
            jgg_z = jgg_d.checkCaptcha(jgg_C);
        }
        if (jgg_O) {
          var jgg_U;
          var jgg_i = jgg_V.sync;
          var jgg_I = jgg_y.Deferred();
          if (jgg_z) {
            jgg_I = jgg_y.Deferred();
            jgg_I.reject(jgg_z);
          } else {
            if ("userName" == jgg_r) {
              if (jgg_U = jgg_K[jgg_C]) {
                return jgg_U;
              }
              jgg_I = jgg_i.checkUsernameExist(jgg_C);
              jgg_K[jgg_C] = jgg_I.promise();
            } else {
              if ("mobile" == jgg_r) {
                var jgg_Z = jgg_C.mobileNumber;
                var jgg_q = jgg_C.areaCode;
                if (jgg_U = jgg_K[jgg_Z]) {
                  return jgg_U;
                }
                jgg_I = jgg_i.checkMobileNumberExist(jgg_Z, jgg_q, "fillProfile");
                jgg_K[jgg_Z] = jgg_I.promise();
              } else {
                jgg_I = jgg_y.Deferred();
                jgg_I.resolve();
              }
            }
          }
          return jgg_I.promise();
        }
        return jgg_z;
      },
      sendSmsToken: function () {
        var jgg_r = this.get("mobile");
        var jgg_C = this.get("captcha");
        var jgg_O = this.get("qucrypt_code");
        var jgg_z = this.get("token");
        var jgg_d = this.validate("mobile", jgg_r) || !jgg_z && this.validate("captcha", jgg_C);
        return jgg_d ? jgg_y.Deferred().reject(jgg_d).promise() : (jgg_r = jgg_r.areaCode + jgg_r.mobileNumber, jgg_V.getUserInfo().then(function (jgg_H) {
          return jgg_V.sync.sendSmsCodeNew({
            condition: jgg_o.SMS_CONDITION_NOT_EXIST,
            account: jgg_r,
            crumb: jgg_H.crumb,
            sms_scene: jgg_o.SMS_SCENE_OAUTH_BIND_MOBILE,
            captcha: jgg_C,
            qucrypt_code: jgg_O,
            vt: jgg_z
          });
        }));
      },
      prepareMobileState: function () {
        return jgg_V.sync.getMobileState();
      },
      prepareCaptcha: function () {
        var jgg_r = this;
        var jgg_C = "";
        var jgg_O = this.isFillProfileByMobile();
        jgg_C = jgg_O ? "strictreg" : "";
        return jgg_V.sync.getCaptchaUrl(jgg_C).then(function (jgg_z) {
          jgg_r.setCaptchaUrl(jgg_z.captchaUrl);
        }, function () {
          return jgg_y.Deferred().resolve().promise();
        });
      },
      run: function (jgg_r) {
        var jgg_O = this;
        jgg_O.init().trigger("showLoading");
        jgg_O.prepareCaptcha().done(function () {
          jgg_O.trigger("hideLoading").trigger("show", {
            wrapper: jgg_r
          });
        });
      },
      submit: function () {
        var jgg_C;
        var jgg_O = this;
        var jgg_z = [];
        var jgg_d = jgg_O.isFillProfileByMobile();
        var jgg_H = jgg_O.get("mobile");
        var jgg_U = jgg_O.get("smscode");
        var jgg_i = jgg_O.get("password");
        var jgg_I = jgg_O.get("captcha");
        var jgg_Z = jgg_O.get("userName");
        var jgg_q = jgg_O.get("qucrypt_code");
        if (this.trigger("beforeSubmit"), jgg_d) {
          var jgg_G = jgg_O.get("isNeedCheckCaptcha", false);
          jgg_z = ["mobile", "smscode", "password"];
          jgg_G && jgg_z.push("captcha");
        } else {
          jgg_z = ["password", "captcha"];
        }
        jgg_O.isShowPasswordAgain() && jgg_z.push("rePassword");
        jgg_y.each(jgg_z, function (jgg_Y, jgg_c) {
          var jgg_l = jgg_O.validate(jgg_c);
          jgg_l && jgg_O.trigger("invalid", jgg_l);
          jgg_C = jgg_C || jgg_l;
        });
        !jgg_C && jgg_V.getUserInfo().then(function (jgg_Y) {
          return jgg_d ? (jgg_H = jgg_H.areaCode + jgg_H.mobileNumber, jgg_V.sync.perfectMobile(jgg_Y.crumb, jgg_H, jgg_i, jgg_U)) : jgg_V.sync.fillProfile(jgg_Y.crumb, jgg_Z, jgg_i, jgg_O.get("rePassword", undefined), jgg_I, jgg_q);
        }).done(function () {
          jgg_O.trigger("hide").trigger("success").resolve();
        }).fail(function (jgg_Y) {
          jgg_Y.fromServer = true;
          var jgg_c = jgg_Y.errdetail && jgg_Y.errdetail.captchaUrl;
          jgg_c && jgg_O.setCaptchaUrl(jgg_c);
          jgg_O.trigger("invalid", jgg_Y);
        });
      },
      signin: function () {
        var jgg_r = this.getCallback();
        jgg_V.signIn ? (this.trigger("hide"), jgg_V.signIn(jgg_r)) : location.href = "//i.360.cn/reg/?src=" + jgg_V.getConfig("src") + "&destUrl=" + encodeURIComponent("string" == typeof jgg_r ? jgg_r : location.href);
      },
      isShowPasswordAgain: function () {
        return !jgg_V.getConfig("fillProfile.hidePasswordAgain");
      },
      isFillProfileByMobile: function () {
        var jgg_r = jgg_V.getConfig("fillProfile.type");
        var jgg_C = "mobile" === jgg_r;
        return jgg_C;
      }
    });
    jgg_V.fillProfile = function (jgg_r, jgg_C) {
      !jgg_r || 1 == jgg_r.nodeType || jgg_r instanceof jgg_y || (jgg_C = jgg_r, jgg_r = undefined);
      jgg_u.setCallback(jgg_C).run(jgg_r);
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K = jgg_y.$;
      var jgg_u = jgg_T(227);
      var jgg_r = jgg_T(159);
      var jgg_C = {
        init: function (jgg_O) {
          this.model = jgg_O;
          this.initModelEvent();
          this.initMethods();
          this.initToken();
        },
        selElement: function () {
          this.$el && this.$el.remove();
          this.$el = jgg_K(jgg_u);
          this.initElementEvent();
        },
        initToken: function () {
          var jgg_z;
          var jgg_d = this;
          var jgg_H = jgg_y.utils.getTimer("identify");
          var jgg_U = "quc-button-disabled";
          jgg_H.on("timer_start", function (jgg_I, jgg_Z) {
            jgg_z.addClass(jgg_U);
            jgg_z.html(jgg_Z + "秒后重新获取");
          });
          jgg_H.on("timer_tick", function (jgg_I, jgg_Z) {
            jgg_z.html(jgg_Z + "秒后重新获取");
          });
          jgg_H.on("timer_stop", function () {
            jgg_z.html("重新获取验证码");
            jgg_z.removeClass(jgg_U);
          });
          var jgg_i = function (jgg_I) {
            jgg_I.preventDefault();
            jgg_z.hasClass(jgg_U) || (jgg_z.html("发送中..."), jgg_z.addClass(jgg_U), jgg_d.model.sendToken().done(function () {
              jgg_H.start();
              jgg_d.$el.find(".quc-tip-wrapper .quc-tip").removeClass("quc-tip-error").addClass("quc-tip-success").html("发送成功，请查收！");
            }).fail(function (jgg_q) {
              jgg_z.html("获取验证码");
              jgg_z.removeClass(jgg_U);
              jgg_d.model.trigger("invalid", jgg_q);
            }));
          };
          jgg_d.model.on("show", function () {
            jgg_z = jgg_d.$el.find(".quc-get-token");
            jgg_z.on("click", jgg_i);
            jgg_H.isRunning() && jgg_H.resume();
          });
        },
        initElementEvent: function () {
          var jgg_z = this;
          this.$el.find(".quc-select-method").on("change", function () {
            var jgg_d = jgg_K(this).val();
            "secMobile" == jgg_d ? jgg_z.$el.find(".quc-sec-help").children("a").attr("href", "//i.360.cn/findpwd/customerhelper#mobiledisabled") : jgg_z.$el.find(".quc-sec-help").children("a").attr("href", "//i.360.cn/findpwd/customerhelper#recieveemailcode");
          });
        },
        initMethods: function () {
          var jgg_z = this;
          this.model.on("show", function () {
            var jgg_H = jgg_z.model.getMethods();
            var jgg_U = jgg_V.map(jgg_V.keys(jgg_H), function (jgg_Z) {
              return jgg_V.extend({
                way: jgg_Z
              }, jgg_H[jgg_Z]);
            });
            var jgg_i = jgg_z.$el.find("[name=way]").parents(".quc-select");
            var jgg_I = jgg_i.find(".quc-option-wrapper");
            jgg_V.each(jgg_U, function (jgg_Z) {
              var jgg_q = jgg_Z.name;
              "pwd" !== jgg_Z.way && (jgg_q += " <span class=\"quc-primary\">(" + jgg_Z.value + ")</span>");
              var jgg_G = jgg_K("<li class=\"quc-option\"></li>").attr({
                way: jgg_Z.way
              }).html(jgg_q);
              jgg_I.append(jgg_G);
            });
            jgg_r.bindGlobalEvent();
            jgg_i.on("click", ".quc-option", function () {
              var jgg_Z = jgg_K(this);
              var jgg_q = jgg_Z.attr("way");
              var jgg_G = jgg_H[jgg_q];
              jgg_G && (jgg_z.changeMethod(jgg_q, jgg_G.captchaUrl), jgg_i.find(".quc-input-inner-custom").html(jgg_Z.html()));
            });
            setTimeout(function () {
              jgg_i.find(".quc-option").eq(0).trigger("click");
            }, 0);
          });
        },
        changeMethod: function (jgg_O, jgg_z) {
          var jgg_H = this.$el.find(".quc-token-tip");
          var jgg_U = this.$el.find(".quc-field-captcha");
          var jgg_i = this;
          var jgg_I = function (jgg_Z) {
            jgg_i.model.getCaptchaUrl("login").then(function (jgg_G) {
              jgg_U.find(".quc-captcha-img").attr("src", jgg_G);
              var jgg_Y = jgg_U.find("[name=captcha]").val("");
              jgg_U.show();
              jgg_Z && jgg_Y.focus();
            });
          };
          "pwd" == jgg_O ? (jgg_i.$el.find("[name=password]").parents(".quc-form-item").show(), jgg_z && (this.model.setCaptchaUrl(jgg_z), jgg_I()), this.$el.find(".quc-captcha-change").click(function (jgg_Z) {
            jgg_Z.preventDefault();
            jgg_I();
          })) : (jgg_i.$el.find("[name=token]").parents(".quc-form-item").show(), "secMobile" == jgg_O ? jgg_H.attr("href", "//i.360.cn/findpwd/customerhelper#mobiledisabled").html("收不到短信验证码怎么办？") : jgg_H.attr("href", "//i.360.cn/findpwd/customerhelper#recieveemailcode").html("收不到邮件验证码怎么办？"));
          this.model.set("method", jgg_O);
          this.model.on("invalid", function (jgg_Z, jgg_q) {
            jgg_q.fromServer && "pwd" === jgg_O && jgg_I();
          });
        },
        initModelEvent: function () {
          var jgg_O = this;
          jgg_O.model.on("show", function (jgg_z, jgg_d) {
            jgg_O.show(jgg_d);
          }).on("hide", function () {
            jgg_O.hide();
          });
        },
        show: function (jgg_O) {
          this.$orgForm = jgg_K(jgg_O);
          this.selElement();
          jgg_r.initView(this);
          this.model.trigger("beforeShow", this.$el[0]);
          var jgg_z = this.model.get("isNewPopup");
          if (this.$orgForm.parents(".quc-panel").length > 0 && !jgg_z) {
            this.$orgForm.hide().before(this.$el);
          } else {
            this.panel = this.model.panel = new jgg_y.utils.Panel({
              type: "message"
            });
            var jgg_d = this.panel;
            jgg_d.setTitle(jgg_y.getConfig("identify.panelTitle", "需要校验您的身份")).setContent(this.$el).show();
            jgg_K(jgg_d).on("close", jgg_y.getConfig("identify.panelCloseHandler", jgg_K.noop));
          }
          this.$orgForm.triggerHandler("QucDOMUpdated");
          this.model.trigger("afterShow", this.$el[0]);
        },
        hide: function () {
          this.model.trigger("beforeHide", this.$el[0]);
          this.panel ? this.panel.hide() : (this.$el.remove(), this.$orgForm.show());
          this.$orgForm.triggerHandler("QucDOMUpdated");
          this.model.trigger("afterHide", this.$el[0]);
        }
      };
      jgg_y.ui.identify = {
        init: function () {
          jgg_C.init.apply(jgg_C, arguments);
        }
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-identify><div class=quc-main><div class=quc-description>为了保护您的账号安全，操作前请您进行安全验证</div><div class=quc-tip></div><form class=quc-form autocomplete=off><div class=quc-identify-title><b>验证方式</b></div><div class=\"quc-form-item quc-field quc-field-has-option\"><div class=quc-form-item-content><div class=quc-select><div class=\"quc-input quc-input-has-suffix\"><div class=quc-input-suffix><i class=\"quc-state-arrow quc-icon quc-icon-arrow_down\">&#xe69e;</i></div><div class=quc-input-inner-custom></div><input readonly name=way><ul class=quc-option-wrapper></ul></div></div></div></div><div class=\"quc-form-item quc-field\" style=\"display: none\"><div class=quc-form-item-content><div class=quc-input><input name=token placeholder=验证码 maxlength=6 autocomplete=new-password><div class=quc-input-append><span class=\"quc-link quc-get-token\">获取验证码</span></div></div></div></div><div class=\"quc-form-item quc-field\" style=\"display: none\"><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=密码 autocomplete=new-password></div></div></div><div class=\"quc-form-item quc-field quc-field-captcha\" style=\"display: none\"><label class=quc-label></label><div class=\"quc-form-item-content quc-form-item-img-captcha\"><div class=quc-input><input placeholder=验证码 name=captcha maxlength=7 autocomplete=new-password></div><img class=\"quc-captcha-change quc-captcha-img\"> <span class=\"quc-captcha-change quc-link\">换一张</span></div></div><div class=\"quc-form-tips quc-clearfix\"><a class=\"quc-token-tip quc-right quc-link\" href=//i.360.cn/complaint target=_blank>验证方式都不能用了？</a></div><div id=slide-captcha-place></div><div class=quc-button-list><input type=submit value=提交 class=\"quc-button-submit quc-button quc-button-primary\"></div></form></div></div>";
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V) {
    !function (jgg_y) {
      var jgg_K;
      var jgg_u;
      var jgg_r = jgg_T(14).getLogger("identify");
      var jgg_C = jgg_T(160);
      var jgg_O = jgg_y.$;
      var jgg_z = {};
      var jgg_d = jgg_y.getLogic({
        name: "identify",
        validate: function (jgg_U, jgg_i) {
          var jgg_I;
          var jgg_Z = jgg_y.validate;
          switch (jgg_i = jgg_i || this.get(jgg_U), jgg_U.toLowerCase()) {
            case "token":
              jgg_I = jgg_Z.checkSmsToken(jgg_i);
              break;
            case "password":
              jgg_I = jgg_Z.checkPassword(jgg_i);
              jgg_I && (jgg_I = jgg_y.utils.isSameError(jgg_I, jgg_y.ERROR.PASSWORD_EMPTY) ? jgg_I : jgg_y.ERROR.PASSWORD_WRONG);
              break;
            case "captcha":
              jgg_I = jgg_Z.checkCaptcha(jgg_i);
          }
          return jgg_I;
        },
        getMethods: function () {
          return jgg_z[jgg_K];
        },
        prepareMethods: function (jgg_U) {
          var jgg_i = this;
          return jgg_i.getUserInfo(jgg_U).then(function (jgg_I) {
            return jgg_y.sync.getIdentifyMethod(jgg_I.crumb, jgg_U, jgg_i.get("tk"));
          }).done(function (jgg_I) {
            jgg_z[jgg_U] = jgg_I.ways;
          });
        },
        getUserInfo: function (jgg_U) {
          if ("doubleCheck" === jgg_U) {
            var jgg_i = jgg_O.Deferred();
            jgg_i.resolve({});
            return jgg_i.promise();
          }
          return jgg_y.getUserInfo();
        },
        getDynActionCode: function () {
          for (var jgg_U = "", jgg_i = 0; jgg_i < 3; jgg_i++) {
            jgg_U += Math.floor(10 * Math.random());
          }
          return jgg_K + "_" + jgg_U;
        },
        sendToken: function (jgg_U) {
          var jgg_Z = this;
          jgg_U = jgg_U || this.get("method");
          var jgg_q = jgg_Z.get("tk") || "";
          return this.getUserInfo(jgg_K).then(function (jgg_Y) {
            return "secMobile" == jgg_U ? jgg_y.sync.sendSmsCodeNew({
              condition: jgg_C.SMS_CONDITION_EXIST,
              crumb: jgg_Y.crumb,
              sms_scene: jgg_u,
              m: "sendSmsCode",
              tk: jgg_q,
              dynActionCode: jgg_Z.getDynActionCode()
            }) : jgg_y.sync.sendEmailToken(jgg_Y.crumb, jgg_U, jgg_q);
          }).fail(function (jgg_Y) {
            jgg_Z.trigger("invalid", jgg_Y);
          });
        },
        run: function (jgg_U, jgg_i) {
          jgg_r.debug("run");
          var jgg_Y = this;
          jgg_Y.init();
          jgg_K = jgg_U.sensop;
          jgg_u = jgg_U.scene;
          var jgg_q = jgg_Y.getMethods();
          var jgg_G = jgg_V.keys(jgg_q);
          jgg_r.debug("identify ways", jgg_G);
          "bindMobile" === jgg_K && 1 === jgg_G.length && "pwd" === jgg_G[0] ? jgg_r.debug("no need identify") : (jgg_r.debug("need identify"), jgg_Y.trigger("show", jgg_i));
        },
        submit: function () {
          jgg_r.debug("submit");
          var jgg_i = this;
          var jgg_I = jgg_i.get("token");
          var jgg_Z = jgg_i.get("method");
          var jgg_q = jgg_i.get("password");
          var jgg_G = jgg_i.get("captcha");
          var jgg_Y = jgg_i.get("qucrypt_code");
          var jgg_c = jgg_i.get("tk");
          var jgg_l = jgg_O.Deferred();
          this.trigger("beforeSubmit");
          var jgg_w = "pwd" == jgg_Z ? jgg_i.validate("password") || jgg_i.validate("captcha") : jgg_i.validate("token");
          jgg_w ? jgg_l.reject(jgg_w) : jgg_l.resolve();
          return jgg_l.then(function () {
            return jgg_i.getUserInfo(jgg_K);
          }).then(function (jgg_D) {
            var jgg_m = "pwd" == jgg_Z ? jgg_q : jgg_I;
            return jgg_y.sync.identify(jgg_D.crumb, jgg_K, jgg_Z, jgg_m, jgg_G, jgg_Y, jgg_c);
          }).done(function () {
            jgg_r.debug("success");
            jgg_i.trigger("hide").trigger("success").resolve();
          }).fail(function (jgg_D) {
            jgg_r.debug("fail");
            var jgg_m = jgg_D.errdetail && jgg_D.errdetail.captchaUrl;
            jgg_m && jgg_i.setCaptchaUrl(jgg_m);
            jgg_D.fromServer = true;
            jgg_i.trigger("invalid", jgg_D);
          });
        }
      });
      var jgg_H = {
        signIn: {
          sensop: "doubleCheck",
          scene: jgg_C.SMS_SCENE_DOUBLE_CHECK
        },
        bindMobile: {
          sensop: "bindMobile",
          scene: jgg_C.SMS_SCENE_BIND_MOBILE
        },
        modifyMobile: {
          sensop: "modifyMobile",
          scene: jgg_C.SMS_SCENE_MODIFY_MOBILE
        },
        delBindMobile: {
          sensop: "delMobile",
          scene: jgg_C.SMS_SCENE_UNBIND_MOBILE
        },
        setEmail: {
          sensop: "setLoginEmail",
          scene: jgg_C.SMS_SCENE_SET_EMAIL
        },
        modifyEmail: {
          sensop: "modifyLoginEmail",
          scene: jgg_C.SMS_SCENE_MODIFY_EMAIL
        },
        identifyEmail: {
          sensop: "verifyLoginEmail",
          scene: jgg_C.SMS_SCENE_OTHER
        },
        setSecEmail: {
          sensop: "setSecEmail",
          scene: jgg_C.SMS_SCENE_SET_SECEMAIL
        },
        modifySecEmail: {
          sensop: "modifySecEmail",
          scene: jgg_C.SMS_SCENE_MODIFY_SECEMAIL
        },
        modifyPassword: {
          sensop: "modifyPwd",
          scene: jgg_C.SMS_SCENE_MODIFY_PASS
        },
        setCommonArea: {
          sensop: "setComArea",
          scene: jgg_C.SMS_SCENE_OTHER
        },
        closeTextLogin: {
          sensop: "closeCodeLogin",
          scene: jgg_C.SMS_SCENE_OTHER
        },
        secwarnopen: {
          sensop: "secwarnopen",
          scene: jgg_C.SMS_SCENE_OTHER
        },
        secwarnclose: {
          sensop: "secwarnclose",
          scene: jgg_C.SMS_SCENE_OTHER
        },
        cancelAccount: {
          sensop: "cancelAccount",
          scene: jgg_C.SMS_SCENE_CANCEL_ACCOUNT
        }
      };
      jgg_y.identify = function (jgg_U, jgg_i, jgg_I) {
        jgg_I = jgg_I || {};
        jgg_r.debug("should identify");
        var jgg_Z;
        var jgg_q = jgg_H[jgg_U.name];
        for (var jgg_G in jgg_I) jgg_d.set(jgg_G, jgg_I[jgg_G]);
        jgg_U.one("beforeShow", function (jgg_Y, jgg_c) {
          jgg_Z = jgg_c;
          jgg_d.run(jgg_q, jgg_c);
        });
        jgg_U.one("identifyShow", function (jgg_Y, jgg_c) {
          jgg_Z = jgg_c;
          jgg_d.setCallback(jgg_i).run(jgg_q, jgg_c);
        });
        jgg_U.on("invalid", function (jgg_Y, jgg_c) {
          jgg_y.utils.isSameError(jgg_c, jgg_y.ERROR.IDENTIFY_EXPIRE) && jgg_d.run(jgg_q, jgg_Z);
        });
        jgg_U.on("reset", function () {
          jgg_d.run(jgg_q, jgg_Z);
        });
        return jgg_d.prepareMethods(jgg_q.sensop);
      };
    }(QHPass);
  }).call(jgg_a, jgg_T(2));
}, function (jgg_W, jgg_a, jgg_T) {
  !function (jgg_V) {
    var jgg_y = jgg_V.$;
    var jgg_o = jgg_T(230);
    var jgg_K = {
      init: function (jgg_u) {
        this.model = jgg_u;
        this.initModelEvent();
      },
      initModelEvent: function () {
        var jgg_u = this;
        jgg_u.model.on("show", function (jgg_r, jgg_C) {
          jgg_u.show(jgg_C);
        }).on("hide", function () {
          jgg_u.hide();
        }).on("resendSuccess", function () {
          jgg_u.$el.find(".quc-resend-result").removeClass("quc-resending quc-tip-error").html("发送成功！").show();
        }).on("resendFail", function (jgg_r, jgg_C) {
          jgg_u.$el.find(".quc-resend-result").removeClass("quc-resending").addClass("quc-tip-error").html(jgg_C.errmsg).show();
        });
      },
      selElement: function () {
        var jgg_C = this;
        jgg_C.$el && jgg_C.$el.remove();
        jgg_C.$el = jgg_y(jgg_o);
        var jgg_O = this.model.getEmailInfo();
        jgg_O.site && jgg_C.$el.find(".quc-link-jump").attr("href", jgg_O.site).show();
        "signUp" == jgg_O.type && jgg_C.$el.find(".quc-modify-wrapper").hide();
        jgg_C.$el.find(".quc-email-address").text(jgg_O.email);
        jgg_C.$el.find(".quc-link-resend").click(function (jgg_d) {
          jgg_d.preventDefault();
          jgg_C.model.resend();
          jgg_C.$el.find(".quc-resend-result").addClass("quc-resending").html("发送中...").show();
        });
        jgg_C.$el.find(".quc-link-modify").click(function (jgg_d) {
          jgg_d.preventDefault();
          jgg_C.hide();
          var jgg_H = jgg_C.model.getEmailInfo().model.name;
          QHPass[jgg_H]();
        });
        jgg_C.$el.find(".quc-button-activated").click(function (jgg_d) {
          jgg_d.preventDefault();
          var jgg_H = jgg_y(this);
          jgg_H.html("检查激活状态...").addClass("quc-button-disabled");
          jgg_C.model.checkActive().fail(function () {
            var jgg_U = jgg_O.site ? "<a class=\"quc-link\" href=\"" + jgg_O.site + "\" target=\"_blank\">登录邮箱</a>" : "登录邮箱";
            jgg_C.$el.find(".quc-tip").addClass("quc-tip-error").html("您似乎还没有激活，请" + jgg_U + "，并按邮件内的提示操作。");
            jgg_H.html("已完成激活").removeClass("quc-button-disabled");
          });
        });
      },
      show: function () {
        this.$orgForm = jgg_y(this.model.getEmailInfo().el);
        this.selElement();
        this.model.trigger("beforeShow", this.$el[0]);
        var jgg_C = this.model.getEmailInfo().model.panel;
        jgg_C && jgg_C.hide();
        this.panel = this.model.panel = new jgg_V.utils.Panel({
          type: "message"
        });
        var jgg_O = this.panel;
        jgg_O.setTitle("请激活您的邮箱").setContent(this.$el).show();
        this.$orgForm.triggerHandler("QucDOMUpdated");
        this.model.trigger("afterShow", this.$el[0]);
      },
      hide: function () {
        this.model.trigger("beforeHide", this.$el[0]);
        this.panel ? this.panel.hide() : (this.$el.remove(), this.$orgForm.show());
        this.$orgForm.triggerHandler("QucDOMUpdated");
        this.model.trigger("afterHide", this.$el[0]);
      }
    };
    jgg_V.ui.activeEmail = {
      init: function () {
        jgg_K.init.apply(jgg_K, arguments);
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=quc-mod-active-email><div class=quc-main><div class=quc-top-tip>验证邮件已经发送到您的邮箱:</div><div><span class=\"quc-primary quc-email-address\"></span> <a href=javascript:; class=\"quc-link quc-link-jump\" target=_blank>去激活</a></div><div class=quc-tip>请您在48小时内登录邮箱完成验证</div><div><a class=\"quc-button quc-button-primary quc-button-activated\">已完成激活</a></div><hr><div class=quc-resend><div>没收到邮件怎么办？</div><ul class=quc-dot-list><li class=quc-modify-wrapper>邮箱填错了，<a href=javascript:; class=\"quc-link quc-link-modify\">重新设置邮箱</a><li><a class=\"quc-link quc-link-resend\">重新发送</a>验证邮件<span class=quc-resend-result></span><li>依然收不到邮件，<a class=quc-link target=_blank href=//i.360.cn/findpwd/customerhelper#recieveemailcode>查看帮助</a></ul></div></div></div>";
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    var jgg_y = {};
    var jgg_o = jgg_X.getLogic({
      name: "activeEmail",
      run: function (jgg_K) {
        var jgg_r = this;
        var jgg_C = jgg_X.getConfig("activeEmail.destUrl", location.href);
        if (jgg_r.init(), "signUp" == jgg_y.type) {
          if (jgg_y.activeUrl = jgg_K.activeurl + "&destUrl=" + encodeURIComponent(jgg_C), jgg_y.email = jgg_K.email, jgg_y.wrapper) {
            return void (location.href = jgg_y.activeUrl);
          }
          jgg_X.sync.sendSignUpActivationEmail(jgg_y.activeUrl).then(function (jgg_O) {
            jgg_y.site = jgg_O.goToMail;
            jgg_r.trigger("show");
          });
        } else {
          if ("setEmail" == jgg_y.type) {
            jgg_y.email = jgg_K.loginEmailUnactivated;
          } else {
            if ("setSecEmail" != jgg_y.type) {
              return void this.trigger("error", "");
            }
            jgg_y.email = jgg_K.safeSecEmail;
          }
          jgg_y.site = jgg_K.mailHostUrl;
          jgg_r.trigger("show");
        }
      },
      getEmailInfo: function () {
        return jgg_y;
      },
      resend: function () {
        var jgg_u = this;
        var jgg_r = jgg_h.when();
        "signUp" == jgg_y.type ? jgg_r = jgg_X.sync.sendSignUpActivationEmail(jgg_y.activeUrl) : "setEmail" == jgg_y.type ? jgg_r = jgg_X.getUserInfo().then(function (jgg_C) {
          return jgg_X.sync.sendActivationEmail(jgg_C.crumb);
        }) : "setSecEmail" == jgg_y.type && (jgg_r = jgg_X.getUserInfo().then(function (jgg_C) {
          return jgg_X.sync.sendSecActivationEmail(jgg_C.crumb);
        }));
        return jgg_r.done(function (jgg_C) {
          jgg_u.trigger("resendSuccess", jgg_C);
        }).fail(function (jgg_C) {
          jgg_u.trigger("resendFail", jgg_C);
        });
      },
      modify: function () {
        jgg_y.model.trigger("reset");
      },
      checkActive: function () {
        var jgg_u = this;
        var jgg_r = jgg_h.Deferred();
        "signUp" == jgg_y.type ? jgg_X.sync.checkEmailExist(jgg_y.email).always(function (jgg_C) {
          jgg_X.utils.isSameError(jgg_C, jgg_X.ERROR.EMAIL_NOT_ACTIVATED) ? jgg_r.reject() : jgg_r.resolve();
        }) : "setEmail" == jgg_y.type ? jgg_X.getEmailStatus(function (jgg_C) {
          jgg_C.loginEmail ? jgg_r.resolve() : jgg_r.reject();
        }) : jgg_X.getUserSecInfo(function (jgg_C) {
          jgg_C.safeSecEmail ? jgg_r.resolve() : jgg_r.reject();
        });
        jgg_r.then(function () {
          jgg_u.trigger("hide").trigger("success").resolve();
        });
        return jgg_r.promise();
      }
    });
    jgg_X.activeEmail = function (jgg_K, jgg_u) {
      jgg_o.setCallback(jgg_u).run(jgg_K);
    };
    jgg_X.activeEmail.prepare = function (jgg_K, jgg_u) {
      jgg_y.model = jgg_K;
      jgg_y.wrapper = jgg_u;
      jgg_y.type = jgg_K.name;
      jgg_K.on("beforeShow", function (jgg_r, jgg_C) {
        jgg_y.el = jgg_C;
      });
    };
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_V = jgg_X.$;
    jgg_X.ui.loading = {
      $el: jgg_V("<div class=\"quc-mask\"></div><div class=\"quc-loading\"></div>"),
      show: function () {
        jgg_h.$el.appendTo(document.body);
      },
      hide: function () {
        jgg_h.$el.remove();
      }
    };
    var jgg_h = jgg_X.ui.loading;
    jgg_X.events.on("showLoading.*", jgg_h.show);
    jgg_X.events.on("hideLoading.*", jgg_h.hide);
  }(QHPass);
}, function (jgg_W, jgg_a) {
  !function (jgg_X) {
    var jgg_h = jgg_X.$;
    jgg_X.when = {
      signIn: function (jgg_y) {
        var jgg_K = function (jgg_u) {
          "bind" == jgg_u.type && 0 == jgg_u.userName.indexOf("360U") ? jgg_X.fillProfile(function () {
            jgg_y(jgg_u);
          }) : jgg_y(jgg_u);
        };
        jgg_X.getUserInfo(false, jgg_K, function () {
          jgg_X.signIn(jgg_K);
        });
      },
      username: function (jgg_y) {
        this.signIn(function (jgg_K) {
          0 == jgg_K.username.indexOf("360U") ? jgg_X.setUsername(jgg_y) : jgg_y();
        });
      },
      nickname: function (jgg_y) {
        this.signIn(function (jgg_o) {
          jgg_o.nickname ? jgg_y() : jgg_X.setNickname(jgg_y);
        });
      },
      email: function (jgg_y) {
        this.signIn(function () {
          jgg_X.getEmailStatus(function (jgg_o) {
            jgg_o.loginEmail ? jgg_y() : jgg_X.setEmail(jgg_y);
          });
        });
      },
      secEmail: function (jgg_y) {
        this.signIn(function () {
          jgg_X.getUserSecInfo(function (jgg_K) {
            jgg_K.safeSecEmail ? jgg_y() : jgg_X.setSecEmail(jgg_y);
          });
        });
      },
      mobile: function (jgg_y) {
        this.signIn(function () {
          jgg_X.getUserSecInfo(function (jgg_K) {
            jgg_K.safeSecMobile ? jgg_y() : jgg_X.bindMobile(jgg_y);
          });
        });
      },
      emailOrMobile: function (jgg_y, jgg_o) {
        this.signIn(function () {
          var jgg_K = jgg_h.Deferred();
          var jgg_u = jgg_h.Deferred();
          jgg_X.getUserSecInfo(function (jgg_r) {
            jgg_r.safeSecMobile ? jgg_u.reject() : jgg_u.resolve();
          });
          jgg_X.getEmailStatus(function (jgg_r) {
            jgg_r.loginEmail ? jgg_K.reject() : jgg_K.resolve();
          });
          jgg_h.when(jgg_K, jgg_u).then(function () {
            jgg_o ? jgg_X.bindMobile(jgg_y) : jgg_X.setEmail(jgg_y);
          }, jgg_y);
        });
      },
      mobileOrEmail: function (jgg_y, jgg_o) {
        this.emailOrMobile(jgg_y, !jgg_o);
      },
      authenticate: function (jgg_y) {
        this.signIn(function (jgg_o) {
          var jgg_u = jgg_o.crumb;
          jgg_X.sync.getAuthenticationStatus(jgg_u).then(function (jgg_r) {
            var jgg_C = jgg_r.details && jgg_r.details.mobile;
            var jgg_O = jgg_r.details && jgg_r.details.isNeedAuthen;
            jgg_O ? jgg_X.authenticate(jgg_y) : jgg_y && jgg_y(jgg_C);
          });
        });
      }
    };
  }(QHPass);
}, function (jgg_W, jgg_a, jgg_T) {
  function jgg_V() {
    jgg_h.setResources(jgg_y);
    jgg_h.setLocale("zh_CN");
  }
  var jgg_h = jgg_T(104);
  jgg_W.exports = jgg_h;
  var jgg_y = {
    zh_CN: {
      "取消": "取消",
      "override phone warning": "该手机号已被使用，点击“继续绑定”按钮，手机号将与原账号解除绑定，<b>原账号将无法使用此手机号登录，也可能无法再次找回原账号</b>，请谨慎操作。",
      "weak password warning": "系统检测到您账号安全等级较低，建议立即修改密码",
      "leak password warning": "系统检测到您账号存在安全风险，请先修改密码"
    },
    en: {
      "取消": "Cancel",
      "修改密码": "Set",
      "weak password warning": "Weak password, please change the password first",
      "leak password warning": "Your account has security risk, please change the password first",
      "继续绑定": "Continue",
      "override phone warning": "This phone number has been associated with another 360 account, <b>click \"continue\" will disassociate it and associate with the current account</b>, operate with cautions."
    }
  };
  jgg_V();
}, function (jgg_W, jgg_a, jgg_T) {
  (function (jgg_V, jgg_h) {
    function jgg_o() {
      var jgg_z = jgg_u.parse(jgg_V.slice(location.search, 1));
      if (QHPass.isI360() && "/" === location.pathname) {
        var jgg_d = jgg_O.parse(document.referrer, true);
        if ("/oauth/bind" === jgg_d.pathname && "dobind" !== jgg_d.query.a) {
          return jgg_K();
        }
        jgg_z.checkPwd && jgg_K();
      }
    }
    function jgg_K() {
      return jgg_h.resolve(QHPass.sync.actualGetUserInfo({
        need_weak_info: 1
      })).then(function (jgg_d) {
        jgg_r.debug("check pwd", jgg_d);
        return jgg_C.tryHandleAbnormalPassword(jgg_d);
      }).then(function (jgg_d) {
        jgg_d && jgg_d.shouldChangePassword && jgg_C.gotoPageWithSearchParams("/profile/chuserpwd?op=modifyPwd");
      }).caught(function () {
        jgg_r.debug("sign out");
        QHPass.signOut(function () {
          QHPass.isI360() && "/login" !== location.pathname && jgg_C.gotoPage("/login");
        });
      });
    }
    var jgg_u = jgg_T(26);
    var jgg_r = jgg_T(14).getLogger("request");
    var jgg_C = jgg_T(159);
    var jgg_O = jgg_T(40);
    jgg_o();
  }).call(jgg_a, jgg_T(2), jgg_T(41));
}, function (jgg_W, jgg_a) {
  jgg_W.exports = "<div class=control-panel><div class=quc-main> <% _.each(methods, function(item) { %> <a href=\"javascript: QHPass['<%= item %>']();\" class=\"quc-button quc-button-primary\" style=\"margin: 10px 0\">QHPass.<%= item %></a> <% }) %> </div></div>";
}]);
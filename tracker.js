(function (f) {
  typeof define == "function" && define.amd ? define(f) : f();
(function (f) {
  typeof define == "function" && define.amd ? define(f) : f();
})(function () {
  "use strict";
  function f() {
  function f() {
    return crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substr(2, 10);
  }
  function g(n, e, t) {
    document.cookie = `${n}=${e}; path=/; max-age=${t}`;
  }
  function d(n) {
    if (typeof document > "u") return null;
    const t = document.cookie
      .split("; ")
      .map((i) => i.trim())
      .find((i) => i.startsWith(`${n}=`));
      .map((i) => i.trim())
      .find((i) => i.startsWith(`${n}=`));
    return t ? t.split("=")[1] : null;
  }
  const l = Object.freeze({
  const l = Object.freeze({
    PAGE_VIEW: "pageview",
    SESSION_START: "session_start",
    SESSION_END: "session_end",
    SCROLL_DEPTH: "scroll_depth",
    TIME_ON_PAGE: "time_on_page",
    CLICK: "click",
    FORM_VIEW: "form_view",
    FORM_FOCUS: "form_focus",
    FORM_SUBMIT: "form_submit",
    OUTBOUND_LINK_CLICK: "outbound_link_click",
    VIDEO_PLAY: "video_play",
    VIDEO_PAUSE: "video_pause",
    VIDEO_WATCH_PERCENTAGE: "video_watch_percentage",
    DOWNLOAD: "download",
  });
  function E() {
    if (!d("jw_user_id")) {
      const i = f();
      g("jw_user_id", i, 31536e3);
      const i = f();
      g("jw_user_id", i, 31536e3);
    }
    if (!d("jw_session_id")) {
      const i = f();
      return g("jw_session_id", i, 1800), !0;
      const i = f();
      return g("jw_session_id", i, 1800), !0;
    }
    return !1;
  }
  function h() {
    if (typeof window > "u" || typeof document > "u") return !1;
    const n = typeof navigator < "u" && navigator.doNotTrack === "1",
      e = document.cookie.includes("jw_opt_out=true"),
      t = window.JourneyWiseConsentGiven === !1;
    return !n && !e && !t;
  }
  function b() {
  function b() {
    let n = localStorage.getItem("jw_device_id");
    return n || ((n = f()), localStorage.setItem("jw_device_id", n)), n;
    return n || ((n = f()), localStorage.setItem("jw_device_id", n)), n;
  }
  function y() {
  function y() {
    const n = JSON.parse(sessionStorage.getItem("jw_campaign_origin"));
    if (n) return n;
    const e = new URLSearchParams(window.location.search),
      t = {
        utm_source: e.get("utm_source") || null,
        utm_medium: e.get("utm_medium") || null,
        utm_campaign: e.get("utm_campaign") || null,
        utm_term: e.get("utm_term") || null,
        utm_content: e.get("utm_content") || null,
      };
    return sessionStorage.setItem("jw_campaign_origin", JSON.stringify(t)), t;
  }
  const A = "https://flight.journeywise.io/api/v1/website-event-tracking";
  function r(n, e) {
    var u, c, a, _, p, m, I, D, O, k, T;
    if (!h() || window.JourneyWiseConsentGiven === !1) {
      console.warn(
        "[JourneyWise] Tracking skipped: user opted out or DNT enabled."
      );
      return;
    }
    const t = d("jw_user_id"),
      i = d("jw_user_id"),
      o = y(),
      i = d("jw_user_id"),
      o = y(),
      s = {
        identifier: n,
        pageview_id: 409606162,
        platform: "web",
        utm_tracking: o,
        utm_tracking: o,
        user_data: {
          anonymous_id: t,
          email:
            ((u = e == null ? void 0 : e.fields) == null ? void 0 : u.email) ||
            void 0,
          email:
            ((u = e == null ? void 0 : e.fields) == null ? void 0 : u.email) ||
            void 0,
          workEmail:
            ((c = e == null ? void 0 : e.fields) == null
              ? void 0
              : c.workEmail) || void 0,
          fullName:
            ((a = e == null ? void 0 : e.fields) == null
            ((c = e == null ? void 0 : e.fields) == null
              ? void 0
              : c.workEmail) || void 0,
          fullName:
            ((a = e == null ? void 0 : e.fields) == null
              ? void 0
              : a.fullName) || void 0,
              : a.fullName) || void 0,
          firstName:
            ((_ = e == null ? void 0 : e.fields) == null
            ((_ = e == null ? void 0 : e.fields) == null
              ? void 0
              : _.firstName) || void 0,
              : _.firstName) || void 0,
          lastName:
            ((p = e == null ? void 0 : e.fields) == null
            ((p = e == null ? void 0 : e.fields) == null
              ? void 0
              : p.lastName) || void 0,
              : p.lastName) || void 0,
          phone:
            ((m = e == null ? void 0 : e.fields) == null
              ? void 0
              : m.phoneNumber) || void 0,
          company:
            ((I = e == null ? void 0 : e.fields) == null
              ? void 0
              : I.company) || void 0,
          company:
            ((I = e == null ? void 0 : e.fields) == null
              ? void 0
              : I.company) || void 0,
          companyName:
            ((D = e == null ? void 0 : e.fields) == null
            ((D = e == null ? void 0 : e.fields) == null
              ? void 0
              : D.companyName) || void 0,
              : D.companyName) || void 0,
          companySize:
            ((O = e == null ? void 0 : e.fields) == null
            ((O = e == null ? void 0 : e.fields) == null
              ? void 0
              : O.companySize) || void 0,
              : O.companySize) || void 0,
          jobTitle:
            ((k = e == null ? void 0 : e.fields) == null
            ((k = e == null ? void 0 : e.fields) == null
              ? void 0
              : k.jobTitle) || void 0,
              : k.jobTitle) || void 0,
          country:
            ((T = e == null ? void 0 : e.fields) == null
            ((T = e == null ? void 0 : e.fields) == null
              ? void 0
              : T.country) || void 0,
              : T.country) || void 0,
        },
        event: "Website Activity",
        subEvent: n,
        metadata: { additional_data: { ...e } },
        referer: e != null && e.url ? e.url : document.referrer,
        device_identifier: i,
        device_identifier: i,
        apiKey: window.__JW_API_KEY__ || "",
      };
    fetch(A, {
    fetch(A, {
      method: "POST",
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s),
    }).catch((Y) => {
      console.warn("Failed to send JourneyWise event:", Y);
    }).catch((Y) => {
      console.warn("Failed to send JourneyWise event:", Y);
    });
  }
  function N(n) {
  function N(n) {
    const e = {};
    for (const [t, i] of n.entries()) t.toLowerCase(), (e[t] = i);
    for (const [t, i] of n.entries()) t.toLowerCase(), (e[t] = i);
    return e;
  }
  let S = Date.now();
  const L = E();
  const L = E();
  function w() {
    r(l.PAGE_VIEW, {
    r(l.PAGE_VIEW, {
      url: location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      timestamp: Date.now(),
    }),
      L && j(),
      R(),
      W(),
      L && j(),
      R(),
      W(),
      P(),
      C();
      C();
  }
  function P() {
  function P() {
    const n = window.__JW_API_KEY__;
    !n ||
      !h() ||
      r("test_connection", {
        apiKey: n,
        page_url: location.href,
        hostname: location.hostname,
        user_agent: navigator.userAgent,
        referrer: document.referrer,
        timestamp: Date.now(),
      });
  }
  function j() {
  function j() {
    const n = d("jw_session_id");
    r(l.SESSION_START, { session_id: n, timestamp: Date.now() });
    r(l.SESSION_START, { session_id: n, timestamp: Date.now() });
  }
  function C() {
  function C() {
    const n = [25, 50, 75, 100],
      e = new Set();
    window.addEventListener("scroll", () => {
      const t = window.scrollY,
        i = document.documentElement.scrollHeight - window.innerHeight,
        o = Math.round((t / i) * 100);
        i = document.documentElement.scrollHeight - window.innerHeight,
        o = Math.round((t / i) * 100);
      n.forEach((s) => {
        o >= s &&
        o >= s &&
          !e.has(s) &&
          (e.add(s),
          r(l.SCROLL_DEPTH, {
          r(l.SCROLL_DEPTH, {
            percent: s,
            url: location.href,
            timestamp: Date.now(),
          }));
      }),
        (S = Date.now());
    });
  }
  function W({ delayMs: n = 5e4, pageStartTs: e } = {}) {
  function W({ delayMs: n = 5e4, pageStartTs: e } = {}) {
    const t = typeof e == "number" ? e : performance.timeOrigin || Date.now(),
      i = "sessionTimeSent";
      i = "sessionTimeSent";
    setTimeout(() => {
      const o = Date.now(),
        s = Math.floor((o - t) / 1e3),
      const o = Date.now(),
        s = Math.floor((o - t) / 1e3),
        u = new Date().toISOString().slice(0, 10);
      localStorage.getItem(i) !== u &&
      localStorage.getItem(i) !== u &&
        (typeof r == "function" &&
          typeof l < "u" &&
          r(l.TIME_ON_PAGE, {
          typeof l < "u" &&
          r(l.TIME_ON_PAGE, {
            time_spent: s,
            url: location.href,
            session_id: typeof d == "function" ? d("jw_session_id") : void 0,
            timestamp: o,
            timestamp: o,
          }),
        localStorage.setItem(i, u));
        localStorage.setItem(i, u));
    }, n);
  }
  function R() {
  function R() {
    setInterval(() => {
      const e = Date.now();
      e - S >= 5 * 60 * 1e3 &&
        r(l.SESSION_END, { session_id: d("jw_session_id"), timestamp: e });
        r(l.SESSION_END, { session_id: d("jw_session_id"), timestamp: e });
    }, 6e4);
  }
  function M() {
  function M() {
    const n = new WeakSet(),
      e = (o) => {
        if (n.has(o)) return;
        n.add(o);
        const s = o.id || o.name || "unnamed_form";
        o.addEventListener("submit", (u) => {
          var m;
      e = (o) => {
        if (n.has(o)) return;
        n.add(o);
        const s = o.id || o.name || "unnamed_form";
        o.addEventListener("submit", (u) => {
          var m;
          const c = u.submitter;
          if (
            !(
              c &&
              (c.formNoValidate ||
                ((m = c.hasAttribute) == null
                ((m = c.hasAttribute) == null
                  ? void 0
                  : m.call(c, "formnovalidate")))
                  : m.call(c, "formnovalidate")))
            ) &&
            !o.checkValidity()
            !o.checkValidity()
          )
            return;
          const _ = new FormData(o),
            p = N(_);
          r(l.FORM_SUBMIT, {
          const _ = new FormData(o),
            p = N(_);
          r(l.FORM_SUBMIT, {
            form_id: s,
            title: o.title || "Unnamed Form",
            title: o.title || "Unnamed Form",
            status: "submitted",
            fields: p,
            url: location.href,
            submit_url: o.action || null,
            submit_url: o.action || null,
            timestamp: Date.now(),
          });
        });
      },
      t = () => {
        document.querySelectorAll("form").forEach(e);
      };
    t(),
      new MutationObserver(t).observe(document.body, {
        childList: !0,
        subtree: !0,
      });
  }
  function U() {
  function U() {
    const n = [
      "pdf",
      "zip",
      "png",
      "jpg",
      "jpeg",
      "doc",
      "docx",
      "xls",
      "xlsx",
    ];
    document.addEventListener("click", (e) => {
      const t = e.target.closest("a");
      if (!t) return;
      const i = t.getAttribute("href");
      if (!i) return;
      const o = new URL(i, location.href),
        s = o.pathname.split(".").pop().toLowerCase(),
      const i = t.getAttribute("href");
      if (!i) return;
      const o = new URL(i, location.href),
        s = o.pathname.split(".").pop().toLowerCase(),
        u = t.hasAttribute("download"),
        c = n.includes(s);
      (u || c) &&
        r(l.DOWNLOAD, {
          file_name: o.pathname.split("/").pop(),
          file_url: o.href,
        r(l.DOWNLOAD, {
          file_name: o.pathname.split("/").pop(),
          file_url: o.href,
          file_extension: s,
          element_type: "A",
          page_url: location.href,
          timestamp: Date.now(),
        });
    });
  }
  function V() {
  function V() {
    const n = new Set(),
      e = () => {
        document.querySelectorAll("video").forEach((i) => {
          if (n.has(i)) return;
          n.add(i);
          const o = i.id || "unnamed_video";
        document.querySelectorAll("video").forEach((i) => {
          if (n.has(i)) return;
          n.add(i);
          const o = i.id || "unnamed_video";
          let s = [25, 50, 75, 100],
            u = new Set();
          i.addEventListener("play", () => {
            r(l.VIDEO_PLAY, { video_id: o, timestamp: Date.now() });
          i.addEventListener("play", () => {
            r(l.VIDEO_PLAY, { video_id: o, timestamp: Date.now() });
          }),
            i.addEventListener("pause", () => {
              r(l.VIDEO_PAUSE, {
                video_id: o,
                current_time: i.currentTime,
            i.addEventListener("pause", () => {
              r(l.VIDEO_PAUSE, {
                video_id: o,
                current_time: i.currentTime,
                timestamp: Date.now(),
              });
            }),
            i.addEventListener("timeupdate", () => {
              const c = Math.floor((i.currentTime / i.duration) * 100);
              s.forEach((a) => {
                c >= a &&
                  !u.has(a) &&
                  (u.add(a),
                  r(l.VIDEO_WATCH_PERCENTAGE, {
                    video_id: o,
                    percent_watched: a,
            i.addEventListener("timeupdate", () => {
              const c = Math.floor((i.currentTime / i.duration) * 100);
              s.forEach((a) => {
                c >= a &&
                  !u.has(a) &&
                  (u.add(a),
                  r(l.VIDEO_WATCH_PERCENTAGE, {
                    video_id: o,
                    percent_watched: a,
                    timestamp: Date.now(),
                  }));
              });
            });
        });
      };
    new MutationObserver(e).observe(document.body, {
      childList: !0,
      subtree: !0,
    }),
      e();
  }
  function J(n, e = {}) {
  function J(n, e = {}) {
    const t = {
      ...e,
      url: location.href,
      timestamp: Date.now(),
      visitor_id: d("jw_user_id"),
      session_id: d("jw_session_id"),
      device_identifier: b(),
      device_identifier: b(),
    };
    r(n, t);
  }
  function v(n, ...e) {
  function v(n, ...e) {
    switch (n) {
      case "init":
        window.__JW_API_KEY__ = e[0];
        break;
      case "track":
        J(...e);
        J(...e);
        break;
      default:
        console.warn(`Unknown JourneyWise command: ${n}`);
    }
  }
  function x(n) {
    n.forEach((e) => v(...e));
  function x(n) {
    n.forEach((e) => v(...e));
  }
  function F() {
  function F() {
    const n = history.pushState;
    (history.pushState = function (...e) {
      n.apply(history, e), w();
    }),
      window.addEventListener("popstate", w);
  }
  (function () {
    var t;
    const e = ((t = window.JourneyWise) == null ? void 0 : t.q) || [];
    (window.JourneyWise = function (...i) {
      v(...i);
    (window.JourneyWise = function (...i) {
      v(...i);
    }),
      (window.JourneyWise.q = e),
      x(e),
      x(e),
      E(),
      setTimeout(() => {
        w(), y(), V(), U(), M(), F();
        w(), y(), V(), U(), M(), F();
      }, 1e3);
  })();
});

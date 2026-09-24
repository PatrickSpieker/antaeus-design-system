/* @ds-bundle: {"format":4,"namespace":"AntaeusHealthDesignSystem_ee3fc4","components":[{"name":"Button","sourcePath":"components/Button.jsx"}],"sourceHashes":{"components/Button.jsx":"d13ecc589136","ui_kits/consumer_app/ios-frame.jsx":"d67eb3ffe562","ui_kits/consumer_app/Shared.jsx":"0267433822b3","ui_kits/consumer_app/TodayScreen.jsx":"1cff12eee4ef","ui_kits/consumer_app/RecordScreen.jsx":"804e41dc1573","ui_kits/consumer_app/CareScreen.jsx":"3d0a8ea8340b"},"inlinedExternals":[],"unexposedExports":[]} */
(() => {
  function Button({ variant = "primary", size = "md", disabled = false, onClick, children }) {
    const kind = ["primary", "secondary", "ghost", "tertiary", "destructive"].includes(variant) ? variant : "primary";
    const scale = ["sm", "md", "lg"].includes(size) ? size : "md";
    return /* @__PURE__ */ React.createElement("button", { type: "button", className: `btn btn-${kind} btn-${scale}`, disabled, onClick }, children);
  }
  function IOSStatusBar({ dark = false, time = "9:41" }) {
    const c = dark ? "#fff" : "#000";
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: 154,
      alignItems: "center",
      justifyContent: "center",
      padding: "21px 24px 19px",
      boxSizing: "border-box",
      position: "relative",
      zIndex: 20,
      width: "100%"
    } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 22, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 1.5 } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: "22px",
      color: c
    } }, time)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 22, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, paddingTop: 1, paddingRight: 1 } }, /* @__PURE__ */ React.createElement("svg", { width: "19", height: "12", viewBox: "0 0 19 12" }, /* @__PURE__ */ React.createElement("rect", { x: "0", y: "7.5", width: "3.2", height: "4.5", rx: "0.7", fill: c }), /* @__PURE__ */ React.createElement("rect", { x: "4.8", y: "5", width: "3.2", height: "7", rx: "0.7", fill: c }), /* @__PURE__ */ React.createElement("rect", { x: "9.6", y: "2.5", width: "3.2", height: "9.5", rx: "0.7", fill: c }), /* @__PURE__ */ React.createElement("rect", { x: "14.4", y: "0", width: "3.2", height: "12", rx: "0.7", fill: c })), /* @__PURE__ */ React.createElement("svg", { width: "17", height: "12", viewBox: "0 0 17 12" }, /* @__PURE__ */ React.createElement("path", { d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z", fill: c }), /* @__PURE__ */ React.createElement("path", { d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z", fill: c }), /* @__PURE__ */ React.createElement("circle", { cx: "8.5", cy: "10.5", r: "1.5", fill: c })), /* @__PURE__ */ React.createElement("svg", { width: "27", height: "13", viewBox: "0 0 27 13" }, /* @__PURE__ */ React.createElement("rect", { x: "0.5", y: "0.5", width: "23", height: "12", rx: "3.5", stroke: c, strokeOpacity: "0.35", fill: "none" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "2", width: "20", height: "9", rx: "2", fill: c }), /* @__PURE__ */ React.createElement("path", { d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z", fill: c, fillOpacity: "0.4" }))));
  }
  function IOSGlassPill({ children, dark = false, style = {} }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: dark ? "0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)" : "0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)",
      ...style
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: 9999,
      backdropFilter: "blur(12px) saturate(180%)",
      WebkitBackdropFilter: "blur(12px) saturate(180%)",
      background: dark ? "rgba(120,120,128,0.28)" : "rgba(255,255,255,0.5)"
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? "inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)" : "inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)",
      border: dark ? "0.5px solid rgba(255,255,255,0.15)" : "0.5px solid rgba(0,0,0,0.06)"
    } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", padding: "0 4px" } }, children));
  }
  function IOSNavBar({ title = "Title", dark = false, trailingIcon = true }) {
    const muted = dark ? "rgba(255,255,255,0.6)" : "#404040";
    const text = dark ? "#fff" : "#000";
    const pillIcon = (content) => /* @__PURE__ */ React.createElement(IOSGlassPill, { dark }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" } }, content));
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: "relative",
      zIndex: 5
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px"
    } }, pillIcon(
      /* @__PURE__ */ React.createElement("svg", { width: "12", height: "20", viewBox: "0 0 12 20", fill: "none", style: { marginLeft: -1 } }, /* @__PURE__ */ React.createElement("path", { d: "M10 2L2 10l8 8", stroke: muted, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }))
    ), trailingIcon && pillIcon(
      /* @__PURE__ */ React.createElement("svg", { width: "22", height: "6", viewBox: "0 0 22 6" }, /* @__PURE__ */ React.createElement("circle", { cx: "3", cy: "3", r: "2.5", fill: muted }), /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "3", r: "2.5", fill: muted }), /* @__PURE__ */ React.createElement("circle", { cx: "19", cy: "3", r: "2.5", fill: muted }))
    )), /* @__PURE__ */ React.createElement("div", { style: {
      padding: "0 16px",
      fontFamily: "-apple-system, system-ui",
      fontSize: 34,
      fontWeight: 700,
      lineHeight: "41px",
      color: text,
      letterSpacing: 0.4
    } }, title));
  }
  function IOSListRow({ title, detail, icon, chevron = true, isLast = false, dark = false }) {
    const text = dark ? "#fff" : "#000";
    const sec = dark ? "rgba(235,235,245,0.6)" : "rgba(60,60,67,0.6)";
    const ter = dark ? "rgba(235,235,245,0.3)" : "rgba(60,60,67,0.3)";
    const sep = dark ? "rgba(84,84,88,0.65)" : "rgba(60,60,67,0.12)";
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      minHeight: 52,
      padding: "0 16px",
      position: "relative",
      fontFamily: "-apple-system, system-ui",
      fontSize: 17,
      letterSpacing: -0.43
    } }, icon && /* @__PURE__ */ React.createElement("div", { style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, color: text } }, title), detail && /* @__PURE__ */ React.createElement("span", { style: { color: sec, marginRight: 6 } }, detail), chevron && /* @__PURE__ */ React.createElement("svg", { width: "8", height: "14", viewBox: "0 0 8 14", style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("path", { d: "M1 1l6 6-6 6", stroke: ter, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })), !isLast && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    } }));
  }
  function IOSList({ header, children, dark = false }) {
    const hc = dark ? "rgba(235,235,245,0.6)" : "rgba(60,60,67,0.6)";
    const bg = dark ? "#1C1C1E" : "#fff";
    return /* @__PURE__ */ React.createElement("div", null, header && /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "-apple-system, system-ui",
      fontSize: 13,
      color: hc,
      textTransform: "uppercase",
      padding: "8px 36px 6px",
      letterSpacing: -0.08
    } }, header), /* @__PURE__ */ React.createElement("div", { style: {
      background: bg,
      borderRadius: 26,
      margin: "0 16px",
      overflow: "hidden"
    } }, children));
  }
  function IOSDevice({
    children,
    width = 402,
    height = 874,
    dark = false,
    title,
    keyboard = false
  }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      width,
      height,
      borderRadius: 48,
      overflow: "hidden",
      position: "relative",
      background: dark ? "#000" : "#F2F2F7",
      boxShadow: "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)",
      fontFamily: "-apple-system, system-ui, sans-serif",
      WebkitFontSmoothing: "antialiased"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 11,
      left: "50%",
      transform: "translateX(-50%)",
      width: 126,
      height: 37,
      borderRadius: 24,
      background: "#000",
      zIndex: 50
    } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 } }, /* @__PURE__ */ React.createElement(IOSStatusBar, { dark })), /* @__PURE__ */ React.createElement("div", { style: { height: "100%", display: "flex", flexDirection: "column" } }, title !== void 0 && /* @__PURE__ */ React.createElement(IOSNavBar, { title, dark }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto" } }, children), keyboard && /* @__PURE__ */ React.createElement(IOSKeyboard, { dark })), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingBottom: 8,
      pointerEvents: "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.25)"
    } })));
  }
  function IOSKeyboard({ dark = false }) {
    const glyph = dark ? "rgba(255,255,255,0.7)" : "#595959";
    const sugg = dark ? "rgba(255,255,255,0.6)" : "#333";
    const keyBg = dark ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.85)";
    const icons = {
      shift: /* @__PURE__ */ React.createElement("svg", { width: "19", height: "17", viewBox: "0 0 19 17" }, /* @__PURE__ */ React.createElement("path", { d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z", fill: glyph })),
      del: /* @__PURE__ */ React.createElement("svg", { width: "23", height: "17", viewBox: "0 0 23 17" }, /* @__PURE__ */ React.createElement("path", { d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z", fill: "none", stroke: glyph, strokeWidth: "1.6", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M10 5l7 7M17 5l-7 7", stroke: glyph, strokeWidth: "1.6", strokeLinecap: "round" })),
      ret: /* @__PURE__ */ React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14" }, /* @__PURE__ */ React.createElement("path", { d: "M18 1v6H4m0 0l4-4M4 7l4 4", fill: "none", stroke: "#fff", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }))
    };
    const key = (content, { w, flex, ret, fs = 25, k } = {}) => /* @__PURE__ */ React.createElement("div", { key: k, style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : void 0,
      width: w,
      minWidth: 0,
      background: ret ? "#08f" : keyBg,
      boxShadow: "0 1px 0 rgba(0,0,0,0.075)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? "#fff" : glyph
    } }, content);
    const row = (keys, pad = 0) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6.5, justifyContent: "center", padding: `0 ${pad}px` } }, keys.map((l) => key(l, { flex: true, k: l })));
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      zIndex: 15,
      borderRadius: 27,
      overflow: "hidden",
      padding: "11px 0 2px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: dark ? "0 -2px 20px rgba(0,0,0,0.09)" : "0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: 27,
      backdropFilter: "blur(12px) saturate(180%)",
      WebkitBackdropFilter: "blur(12px) saturate(180%)",
      background: dark ? "rgba(120,120,128,0.14)" : "rgba(255,255,255,0.25)"
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? "inset 1.5px 1.5px 1px rgba(255,255,255,0.15)" : "inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)",
      border: dark ? "0.5px solid rgba(255,255,255,0.15)" : "0.5px solid rgba(0,0,0,0.06)",
      pointerEvents: "none"
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: 20,
      alignItems: "center",
      padding: "8px 22px 13px",
      width: "100%",
      boxSizing: "border-box",
      position: "relative"
    } }, ['"The"', "the", "to"].map((w, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, i > 0 && /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 25, background: "#ccc", opacity: 0.3 } }), /* @__PURE__ */ React.createElement("div", { style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "-apple-system, system-ui",
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: "22px"
    } }, w)))), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 13,
      padding: "0 6.5px",
      width: "100%",
      boxSizing: "border-box",
      position: "relative"
    } }, row(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]), row(["a", "s", "d", "f", "g", "h", "j", "k", "l"], 20), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14.25, alignItems: "center" } }, key(icons.shift, { w: 45, k: "shift" }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6.5, flex: 1 } }, ["z", "x", "c", "v", "b", "n", "m"].map((l) => key(l, { flex: true, k: l }))), key(icons.del, { w: 45, k: "del" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center" } }, key("ABC", { w: 92.25, fs: 18, k: "abc" }), key("", { flex: true, k: "space" }), key(icons.ret, { w: 92.25, ret: true, k: "ret" }))), /* @__PURE__ */ React.createElement("div", { style: { height: 56, width: "100%", position: "relative" } }));
  }
  Object.assign(window, {
    IOSDevice,
    IOSStatusBar,
    IOSNavBar,
    IOSGlassPill,
    IOSList,
    IOSListRow,
    IOSKeyboard
  });
  function Icon({ name, size = 20, stroke = 1.5, color = "currentColor" }) {
    const paths = {
      activity: /* @__PURE__ */ React.createElement("path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.68 3.18a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4.44 13H2" }),
      heart: /* @__PURE__ */ React.createElement("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }),
      pill: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }), /* @__PURE__ */ React.createElement("path", { d: "m8.5 8.5 7 7" })),
      clipboard: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 11h4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 16h4" }), /* @__PURE__ */ React.createElement("path", { d: "M8 11h.01" }), /* @__PURE__ */ React.createElement("path", { d: "M8 16h.01" })),
      calendar: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M8 2v4" }), /* @__PURE__ */ React.createElement("path", { d: "M16 2v4" }), /* @__PURE__ */ React.createElement("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 10h18" })),
      stethoscope: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M11 2v2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 2v2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }), /* @__PURE__ */ React.createElement("path", { d: "M8 15a6 6 0 0 0 12 0v-3" }), /* @__PURE__ */ React.createElement("circle", { cx: "20", cy: "10", r: "2" })),
      file: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })),
      bell: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }), /* @__PURE__ */ React.createElement("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })),
      message: /* @__PURE__ */ React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
      plus: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "M12 5v14" })),
      search: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "m21 21-4.3-4.3" })),
      check: /* @__PURE__ */ React.createElement("path", { d: "M20 6 9 17l-5-5" }),
      chevronR: /* @__PURE__ */ React.createElement("path", { d: "m9 18 6-6-6-6" }),
      trendUp: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M22 7 13.5 15.5 8.5 10.5 2 17" }), /* @__PURE__ */ React.createElement("path", { d: "M16 7h6v6" })),
      trendDown: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M22 17 13.5 8.5 8.5 13.5 2 7" }), /* @__PURE__ */ React.createElement("path", { d: "M16 17h6v-6" })),
      home: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 22V12h6v10" })),
      user: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "4" })),
      droplet: /* @__PURE__ */ React.createElement("path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S13 2.5 12 2c-1 .5-3 1.5-5 3.5S4 13 4 15a7 7 0 0 0 7 7Z" }),
      moon: /* @__PURE__ */ React.createElement("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }),
      footprints: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M4 16v-2.38c0-.54.1-1.07.32-1.56l.82-1.89a2 2 0 0 1 3.6-.06L9.66 12" }), /* @__PURE__ */ React.createElement("path", { d: "M20 20v-2.38c0-.54-.1-1.07-.32-1.56l-.82-1.89a2 2 0 0 0-3.6-.06l-1.04 1.89" }), /* @__PURE__ */ React.createElement("path", { d: "M3 20h6" }), /* @__PURE__ */ React.createElement("path", { d: "M14 16h6" }))
    };
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: stroke,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: { flexShrink: 0 }
      },
      paths[name] || /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "8" })
    );
  }
  function Chip({ tone = "sage", children }) {
    return /* @__PURE__ */ React.createElement("span", { className: `chip ${tone}` }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), children);
  }
  function Card({ children, style }) {
    return /* @__PURE__ */ React.createElement("div", { className: "card-soft", style }, children);
  }
  function TabBar({ active = "home", onChange = () => {
  } }) {
    const items = [
      { id: "home", label: "Today", icon: "home" },
      { id: "data", label: "Record", icon: "activity" },
      { id: "care", label: "Care", icon: "stethoscope" },
      { id: "me", label: "You", icon: "user" }
    ];
    return /* @__PURE__ */ React.createElement("nav", { className: "app-tabbar", "aria-label": "Main navigation" }, items.map((it) => /* @__PURE__ */ React.createElement("button", { key: it.id, type: "button", "aria-current": it.id === active ? "page" : void 0, onClick: () => onChange(it.id) }, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 22, stroke: 1.5 }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, it.label))));
  }
  function ScreenHeader({ eyebrow, title, subtitle }) {
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 4px 12px" } }, eyebrow && /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm", style: { marginBottom: 10 } }, eyebrow), /* @__PURE__ */ React.createElement("div", { className: "heading-moment", style: { fontSize: 34 } }, title), subtitle && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--fg-2)", marginTop: 10, lineHeight: 1.5 } }, subtitle));
  }
  Object.assign(window, { Icon, Chip, Card, TabBar, ScreenHeader });
  function TodayScreen() {
    const [glucoseCount, setGlucoseCount] = React.useState(118);
    React.useEffect(() => {
      let v = 0, target = 118, start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / 520);
        const eased = 1 - Math.pow(1 - p, 3);
        setGlucoseCount(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, []);
    return /* @__PURE__ */ React.createElement("div", { className: "app-scroll", style: { paddingBottom: 140 } }, /* @__PURE__ */ React.createElement(ScreenHeader, { eyebrow: "Friday \xB7 April 17", title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Good morning,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", { style: { fontStyle: "italic", color: "var(--plum-600)" } }, "Anya.")) }), /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm" }, "Blood pressure \xB7 7 day avg"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { className: "metric-big", style: { fontSize: 40 } }, "118", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-3)" } }, "/"), "76"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--fg-3)", marginLeft: 8 } }, "mmHg"))), /* @__PURE__ */ React.createElement(Chip, { tone: "sage" }, "Within range")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border-hairline)", fontSize: 13, color: "var(--fg-2)", lineHeight: 1.5 } }, "Five readings this week. ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--plum-600)" } }, "Trending down"), " from last month's 124/80.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Card, { style: { padding: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm" }, "Resting HR"), /* @__PURE__ */ React.createElement("div", { className: "metric-big", style: { fontSize: 30, marginTop: 6 } }, "72"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4, marginTop: 6, fontSize: 11, color: "var(--sage-500)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "trendDown", size: 12, stroke: 2 }), " \u20132 vs last wk")), /* @__PURE__ */ React.createElement(Card, { style: { padding: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm" }, "Sleep"), /* @__PURE__ */ React.createElement("div", { className: "metric-big", style: { fontSize: 30, marginTop: 6 } }, "6", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-3)", fontSize: 20 } }, "h"), "42"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-3)", marginTop: 6 } }, "Below your 7h target"))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm", style: { marginTop: 20, marginBottom: 10, paddingLeft: 4 } }, "Upcoming care"), /* @__PURE__ */ React.createElement(Card, { style: { marginBottom: 12, padding: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: 16, display: "flex", gap: 14, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 10, background: "var(--plum-100)", color: "var(--plum-600)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "stethoscope", size: 22 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600 } }, "Dr. Priya Patel"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-3)", marginTop: 2 } }, "Endocrinology \xB7 Thursday, 2:30 PM")), /* @__PURE__ */ React.createElement(Icon, { name: "chevronR", size: 16, color: "var(--fg-3)" })), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--border-hairline)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, background: "var(--bone-50)" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 6, height: 6, borderRadius: 3, background: "var(--amber-500)" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)" } }, /* @__PURE__ */ React.createElement("strong", { style: { fontWeight: 600 } }, "2 prep items"), " before your visit"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, padding: "22px 18px", borderRadius: 16, background: "linear-gradient(145deg, var(--plum-100) 0%, var(--bone-100) 100%)", border: "1px solid var(--border-hairline)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm", style: { color: "var(--plum-700)" } }, "This week"), /* @__PURE__ */ React.createElement("div", { className: "heading-moment", style: { fontSize: 26, marginTop: 10, lineHeight: 1.15 } }, "Three fasting readings above your target. ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic" } }, "Worth mentioning to Dr. Patel.")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { marginTop: 14 } }, "Add to visit prep")));
  }
  Object.assign(window, { TodayScreen });
  function RecordScreen({ onAdd }) {
    const metrics = [
      { name: "Fasting glucose", value: "128", unit: "mg/dL", tone: "amber", sub: "Taken 07:12", icon: "droplet" },
      { name: "Blood pressure", value: "118/76", unit: "mmHg", tone: "sage", sub: "5 readings \xB7 7d avg", icon: "activity" },
      { name: "Resting HR", value: "72", unit: "bpm", tone: "sage", sub: "Apple Watch", icon: "heart" },
      { name: "Weight", value: "141.2", unit: "lb", tone: "sage", sub: "Withings \xB7 yesterday", icon: "trendDown" },
      { name: "Sleep", value: "6h 42m", unit: "", tone: "amber", sub: "Below target", icon: "moon" },
      { name: "Steps", value: "7,814", unit: "", tone: "sage", sub: "Today", icon: "footprints" }
    ];
    return /* @__PURE__ */ React.createElement("div", { className: "app-scroll", style: { paddingBottom: 140 } }, /* @__PURE__ */ React.createElement(ScreenHeader, { eyebrow: "Your record", title: "What we're tracking" }), /* @__PURE__ */ React.createElement("div", { className: "field-control", style: { display: "flex", alignItems: "center", background: "#fff", border: "1px solid var(--border-input)", borderRadius: 12, padding: "10px 12px", marginBottom: 14, gap: 8 } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 15, color: "var(--fg-3)" }), /* @__PURE__ */ React.createElement("input", { "aria-label": "Search measurements", placeholder: "Search measurements, labs, medications\u2026", style: { flex: 1, border: "none", outline: "none", fontSize: 14, background: "transparent" } })), /* @__PURE__ */ React.createElement(Card, { style: { padding: 0, marginBottom: 14 } }, metrics.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m.name, style: {
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 38, borderRadius: 10, background: "var(--bone-100)", color: "var(--plum-600)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: m.icon, size: 18 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, m.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-3)", marginTop: 2 } }, m.sub)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { className: "metric-big", style: { fontSize: 17 } }, m.value), m.unit && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--fg-3)", marginTop: 2 } }, m.unit)), /* @__PURE__ */ React.createElement(Chip, { tone: m.tone }, m.tone === "sage" ? "OK" : "Check")))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: onAdd, style: { width: "100%" } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 18, stroke: 2, color: "#fff" }), " Add measurement"));
  }
  function AddMeasurementSheet({ onClose, onSave }) {
    const [value, setValue] = React.useState("128");
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      background: "var(--scrim)",
      display: "flex",
      alignItems: "flex-end"
    }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
      width: "100%",
      background: "var(--bone-50)",
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      padding: "10px 20px 34px",
      boxShadow: "0 -12px 40px rgba(26,24,20,0.2)",
      animation: "slideUp 360ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 4, background: "var(--ink-300)", borderRadius: 2, margin: "8px auto 18px" } }), /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm" }, "New reading"), /* @__PURE__ */ React.createElement("div", { className: "heading-moment", style: { fontSize: 26, marginTop: 6 } }, "Fasting glucose"), /* @__PURE__ */ React.createElement("div", { className: "field-control", style: { marginTop: 20, background: "#fff", border: "1px solid var(--border-input)", borderRadius: 12, padding: "18px 16px", display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("input", { "aria-label": "Fasting glucose", value, onChange: (e) => setValue(e.target.value), style: {
      border: "none",
      outline: "none",
      fontFamily: "var(--font-mono)",
      fontSize: 40,
      fontWeight: 500,
      color: "var(--fg-1)",
      width: 140,
      background: "transparent",
      fontVariantNumeric: "tabular-nums"
    } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--fg-3)" } }, "mg/dL")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 10, lineHeight: 1.5 } }, Number(value) > 125 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)", fontWeight: 600 } }, "Above your target."), " We'll flag this for Dr. Patel.") : /* @__PURE__ */ React.createElement(React.Fragment, null, "Within your target range of 80\u2013120.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 20 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: onClose, style: { flex: 1 } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => onSave(value), style: { flex: 2 } }, "Save reading"))), /* @__PURE__ */ React.createElement("style", null, `@keyframes slideUp { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`));
  }
  Object.assign(window, { RecordScreen, AddMeasurementSheet });
  function CareScreen() {
    const team = [
      { name: "Dr. Priya Patel", role: "Endocrinology \xB7 Primary", initials: "PP", note: "Thu 2:30 PM" },
      { name: "Dr. Marcus Okafor", role: "Cardiology", initials: "MO", note: "Next: May 3" },
      { name: "Elena Reyes, RD", role: "Nutrition", initials: "ER", note: "Messaged you" }
    ];
    const messages = [
      { from: "Dr. Patel", when: "Yesterday", preview: "Your lab results look reassuring \u2014 let's discuss the glucose trend at our visit.", unread: true },
      { from: "Antaeus", when: "Apr 14", preview: "Your refill for metformin is ready for pickup at Walgreens (2nd Ave).", unread: false }
    ];
    return /* @__PURE__ */ React.createElement("div", { className: "app-scroll", style: { paddingBottom: 140 } }, /* @__PURE__ */ React.createElement(ScreenHeader, { eyebrow: "Care", title: "Your team" }), /* @__PURE__ */ React.createElement(Card, { style: { padding: 0, marginBottom: 18 } }, team.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.name, style: { padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 22, background: "var(--plum-100)", color: "var(--plum-700)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontSize: 18 } }, p.initials), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 500 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-3)", marginTop: 2 } }, p.role)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-3)" } }, p.note)))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow-sm", style: { marginBottom: 10, paddingLeft: 4 } }, "Messages"), /* @__PURE__ */ React.createElement(Card, { style: { padding: 0 } }, messages.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { padding: "14px 16px", display: "flex", gap: 12, borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" } }, m.unread && /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: 4, background: "var(--plum-500)", marginTop: 6, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, paddingLeft: m.unread ? 0 : 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600 } }, m.from), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-3)" } }, m.when)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)", marginTop: 4, lineHeight: 1.45 } }, m.preview))))));
  }
  function YouScreen() {
    const rows = [
      { label: "Personal details", icon: "user" },
      { label: "Connected devices", icon: "activity" },
      { label: "Data sharing", icon: "file" },
      { label: "Notifications", icon: "bell" },
      { label: "Privacy & security", icon: "clipboard" }
    ];
    return /* @__PURE__ */ React.createElement("div", { className: "app-scroll", style: { paddingBottom: 140 } }, /* @__PURE__ */ React.createElement(ScreenHeader, { eyebrow: "Your profile", title: "Anya Rao", subtitle: "Member since March 2025 \xB7 34 readings logged this month" }), /* @__PURE__ */ React.createElement(Card, { style: { padding: 0, marginBottom: 14 } }, rows.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: r.label, style: { padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 8, background: "var(--bone-100)", color: "var(--plum-600)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: r.icon, size: 16 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14 } }, r.label), /* @__PURE__ */ React.createElement(Icon, { name: "chevronR", size: 16, color: "var(--fg-3)" })))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%" } }, "Sign out"));
  }
  Object.assign(window, { CareScreen, YouScreen });
  window.AntaeusHealthDesignSystem_ee3fc4 = { Button };
})();

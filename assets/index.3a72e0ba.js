import {
  e as j,
  v as m,
  r as l,
  j as t,
  F as b,
  a as c,
  V as y,
  H as O,
  I as w,
  N as E,
  b as F,
  c as L,
  d as M,
  f as z,
  B as S,
  T as p,
  g as A,
  R as B,
  h as D,
  C as H,
} from "./vendor.f423c1bf.js";
const T = function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const d of r.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = i(e);
    fetch(e.href, r);
  }
};
T();
var V = "./assets/bg.6808d548.jpg",
  P = j({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${V})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          w: "100%",
          minH: "100vh",
          fontSize: "16px",
        },
      },
    },
  });
const J = [
  { id: m(), name: "Medias", img: "https://picsum.photos/100", count: 1 },
  { id: m(), name: "caramelos", img: "https://picsum.photos/100", count: 2 },
  { id: m(), name: "Vitel Tone", img: "https://picsum.photos/100", count: 3 },
];
function $() {
  const [n, a] = l.exports.useState([]),
    [i, s] = l.exports.useState(""),
    [e, r] = l.exports.useState(""),
    [d, u] = l.exports.useState(""),
    [v, g] = l.exports.useState(1);
  l.exports.useEffect(() => {
    a(
      localStorage.getItem("regalos")
        ? JSON.parse(localStorage.getItem("regalos"))
        : J
    );
  }, []),
    l.exports.useEffect(() => {
      localStorage.setItem("regalos", JSON.stringify(n));
    }, [n]);
  const I = () =>
      i.trim().length === 0
        ? (u("El nombre del regalo no puede estar vacio"), s(""), !1)
        : e.trim().length === 0
        ? (u("La imagen del regalo no puede estar vacio"), r(""), !1)
        : (s(""), r(""), u(""), g(1), !0),
    N = (o) => {
      o.preventDefault(),
        I() && a([...n, { id: m(), name: i.trim(), img: e.trim(), count: v }]);
    },
    R = () => {
      a([]), s(""), r(""), u(""), g(1);
    },
    C = (o) => {
      const h = n.filter((f) => f.id !== o);
      a(h), s(""), r(""), u(""), g(1);
    },
    k = () =>
      n.map(({ id: o, img: h, count: f, name: x }) =>
        c(
          b,
          {
            alignItems: "center",
            justifyContent: "space-between",
            w: "100%",
            children: [
              t(A, {
                alt: x,
                boxSize: "100px",
                fallbackSrc: "https://via.placeholder.com/100",
                objectFit: "cover",
                src: h,
                w: "100px",
              }),
              t(p, { children: x }),
              t(p, { children: f }),
              t(S, {
                colorScheme: "red",
                size: "xs",
                onClick: () => C(o),
                children: "x",
              }),
            ],
          },
          o
        )
      );
  return t(b, {
    alignItems: "center",
    justifyContent: "center",
    minH: "100vh",
    w: "100%",
    children: c(y, {
      background: "white",
      boxShadow: "md",
      p: 4,
      w: "34%",
      children: [
        t(O, { fontFamily: "'Mountains of Christmas'", children: "Regalos:" }),
        c(b, {
          as: "form",
          gap: 2,
          onSubmit: N,
          children: [
            t(w, {
              placeholder: "Regalo",
              value: i,
              onChange: (o) => s(o.target.value),
            }),
            t(w, {
              placeholder: "http://imagen",
              value: e,
              onChange: (o) => r(o.target.value),
            }),
            c(E, {
              defaultValue: 1,
              max: 99,
              min: 1,
              value: v,
              onChange: (o) => g(Number(o)),
              children: [t(F, {}), c(L, { children: [t(M, {}), t(z, {})] })],
            }),
            t(S, { colorScheme: "red", type: "submit", children: "Add" }),
          ],
        }),
        c(p, { color: "red", children: [" ", d] }),
        t(y, {
          w: "100%",
          children:
            n.length !== 0
              ? k()
              : t(p, {
                  color: "gray.400",
                  children: "No hay regalos Grinch!! , agrega uno",
                }),
        }),
        n.length !== 0 &&
          t(S, {
            colorScheme: "red",
            w: "100%",
            onClick: R,
            children: "Borrar todo",
          }),
      ],
    }),
  });
}
B.render(
  t(D.StrictMode, { children: t(H, { theme: P, children: t($, {}) }) }),
  document.getElementById("root")
);

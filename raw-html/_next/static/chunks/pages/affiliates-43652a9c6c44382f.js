(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907],
  {
    612: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/affiliates",
        function () {
          return s(6391);
        },
      ]);
    },
    7053: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/Circle.d723edd7.svg",
        height: 1719,
        width: 642,
      };
    },
    1187: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo-1.99f8f25e.svg",
        height: 44,
        width: 260,
      };
    },
    4154: function (e, t, s) {
      "use strict";
      var i = s(5893);
      s(7294);
      var l = s(9008),
        a = s.n(l);
      let n = (e) => {
        let {
          title: t,
          description: s,
          og_title: l,
          og_description: n,
          og_image: x,
        } = e;
        return (0, i.jsx)("div", {
          children: (0, i.jsxs)(a(), {
            children: [
              (0, i.jsx)("meta", { charSet: "UTF-8" }),
              (0, i.jsx)("title", { children: t }),
              (0, i.jsx)("meta", { name: "description", content: s }, "desc"),
              (0, i.jsx)("meta", { property: "og:title", content: l }),
              (0, i.jsx)("meta", {
                property: n,
                content: "And a social description for our cool page",
              }),
              (0, i.jsx)("meta", { property: "og:image", content: x }),
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
              }),
            ],
          }),
        });
      };
      t.Z = n;
    },
    7720: function (e, t, s) {
      "use strict";
      var i = s(5893),
        l = s(2262);
      let a = () =>
        (0, i.jsx)("div", {
          className:
            "w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto",
          children: (0, i.jsxs)("div", {
            className:
              "bg-gray-100 md:my-[88px] my-[32px] rounded-lg md:p-16 p-5 text-center",
            children: [
              (0, i.jsx)("h3", {
                className:
                  "2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-semibold",
                children: "Sign up for our newsletter",
              }),
              (0, i.jsx)("p", {
                className:
                  "max-w-2xl mx-auto py-8 2xl:text-xl xl:text-lg md:text-base text-sm",
                children:
                  "Join the LiveTicketGroup Tribe and stay up to date on all upcoming events! Don’t worry, we’ll only email you when it’s really (we mean, really) important - like exclusive deals to some of the best live matches in the world!",
              }),
              (0, i.jsxs)("form", {
                className: "mt-2 max-w-4xl mx-auto",
                children: [
                  (0, i.jsx)("input", {
                    type: "email",
                    id: "newsInput",
                    name: "email",
                    placeholder: "Your Email Address",
                    className:
                      "border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400",
                  }),
                  (0, i.jsx)(l.Z, {
                    className: "mt-[70px] mb-[40px] md:mb-0",
                    children: "sign up now",
                  }),
                ],
              }),
            ],
          }),
        });
      t.Z = a;
    },
    4952: function (e, t, s) {
      "use strict";
      var i = s(5893),
        l = s(7294),
        a = s(6066),
        n = s(9583);
      let x = (e) => {
        let {
            setCurrentIndex: t,
            currentIndex: s,
            showDots: x,
            showArrows: r,
            sliderFor: d,
            componentData: o,
          } = e,
          c = (0, l.useRef)(null),
          m = {
            infinite: !0,
            slidesToShow: 3,
            speed: 500,
            arrows: r || !1,
            dots: x || !1,
            nextArrow: (0, i.jsx)(n.Wgy, { color: "#ea0000", size: "40px" }),
            prevArrow: (0, i.jsx)(n.MZt, { color: "#ea0000", size: "40px" }),
            onSwipe: function () {},
            afterChange: function (e) {
              t(e);
            },
            responsive: [
              {
                breakpoint: 1500,
                settings: { infinite: !0, slidesToShow: 3, speed: 500 },
              },
              {
                breakpoint: 1200,
                settings: { infinite: !0, slidesToShow: 3, speed: 500 },
              },
              {
                breakpoint: 768,
                settings: { infinite: !0, slidesToShow: 2, speed: 500 },
              },
              {
                breakpoint: 640,
                settings: { infinite: !0, slidesToShow: 1, speed: 500 },
              },
              {
                breakpoint: 480,
                settings: { infinite: !0, slidesToShow: 1, speed: 500 },
              },
              {
                breakpoint: 375,
                settings: { infinite: !0, slidesToShow: 1, speed: 500 },
              },
            ],
          };
        return (
          (0, l.useEffect)(() => {
            var e;
            null === (e = c.current) || void 0 === e || e.slickGoTo(s || 0);
          }, [s]),
          (0, i.jsx)("div", {
            className: "w-full",
            children: (0, i.jsx)("div", {
              className: "flex flex-row mt-10",
              style: { display: "block" },
              children:
                "careers" === d
                  ? (0, i.jsx)(a.Z, {
                      ref: c,
                      className: "center",
                      centerMode: !0,
                      infinite: !0,
                      centerPadding: "545px",
                      slidesToShow: 1,
                      speed: 500,
                      onSwipe: function () {},
                      afterChange: function (e) {
                        t(e);
                      },
                      responsive: [
                        {
                          breakpoint: 1800,
                          settings: {
                            className: "center",
                            centerMode: !0,
                            infinite: !0,
                            centerPadding: "360px",
                            slidesToShow: 1,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 1200,
                          settings: {
                            className: "center",
                            centerMode: !0,
                            infinite: !0,
                            centerPadding: "160px",
                            slidesToShow: 1,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 750,
                          settings: {
                            className: "center",
                            centerMode: !0,
                            infinite: !0,
                            centerPadding: "150px",
                            slidesToShow: 1,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            className: "center",
                            centerMode: !0,
                            infinite: !0,
                            centerPadding: "100px",
                            slidesToShow: 1,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            className: "center",
                            centerMode: !0,
                            infinite: !0,
                            centerPadding: "30px",
                            slidesToShow: 1,
                            speed: 500,
                          },
                        },
                      ],
                      children: o,
                    })
                  : "office" === d
                  ? (0, i.jsx)(a.Z, {
                      infinite: !0,
                      slidesToShow: 3,
                      speed: 500,
                      onSwipe: function () {},
                      afterChange: function (e) {
                        t(e);
                      },
                      responsive: [
                        {
                          breakpoint: 1500,
                          settings: {
                            infinite: !0,
                            slidesToShow: 3,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 1200,
                          settings: {
                            infinite: !0,
                            slidesToShow: 3,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 750,
                          settings: {
                            infinite: !0,
                            slidesToShow: 2.05,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            infinite: !0,
                            slidesToShow: 1.1,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            infinite: !0,
                            slidesToShow: 1.1,
                            speed: 500,
                          },
                        },
                        {
                          breakpoint: 375,
                          settings: {
                            infinite: !0,
                            slidesToShow: 1,
                            speed: 500,
                          },
                        },
                      ],
                      children: o,
                    })
                  : (0, i.jsx)(a.Z, { ref: c, ...m, children: o }),
            }),
          })
        );
      };
      t.Z = x;
    },
    6391: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return v;
          },
        });
      var i = s(5893),
        l = s(4314),
        a = s(7294),
        n = s(4952),
        x = s(5675),
        r = s.n(x),
        d = {
          src: "/_next/static/media/markus.3485200e.svg",
          height: 402,
          width: 602,
        },
        o = s(7053),
        c = s(2262),
        m = s(4154),
        p = s(1187),
        h = s(1664),
        f = s.n(h),
        g = s(7720);
      let u = [
          {
            id: 1,
            title:
              "Captivating banner ads designed to drive traffic from your site to LiveTicketGroup",
          },
          { id: 2, title: "Commission earned with every sale" },
          {
            id: 3,
            title:
              "Traffic cookies, so you can capture potential sales even if users don’t convert the first time",
          },
          {
            id: 4,
            title: "Secure transactions backed by our 100% Buyer Guarantee",
          },
        ],
        w = [
          {
            id: 1,
            title:
              "Captivating banner ads designed to drive traffic from your site to LiveTicketGroup",
          },
          { id: 2, title: "Commission earned with every sale" },
          {
            id: 3,
            title:
              "Traffic cookies, so you can capture potential sales even if users don’t convert the first time",
          },
          {
            id: 4,
            title: "Secure transactions backed by our 100% Buyer Guarantee",
          },
        ],
        j = () => {
          let [e, t] = (0, a.useState)(0),
            [s, l] = (0, a.useState)(0);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(m.Z, {
                title: "Become an Affiliate",
                description: "Lorem, ipsum dolor sit amet consectetur",
                og_title: "Affiliate",
                og_description: "Lorem, ipsum dolor sit amet consectetur",
                og_image: p.Z,
              }),
              (0, i.jsxs)("div", {
                className: "relative",
                children: [
                  (0, i.jsxs)("section", {
                    className:
                      "relative mx-auto w-full max-w-[1920px] overflow-hidden",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute -right-40 -top-[280px] md:right-0 lg:h-[1250px] h-[800px] md:-top-[350px]",
                        children: (0, i.jsx)(r(), {
                          src: o.Z,
                          width: 100,
                          alt: "circle",
                          height: 100,
                          className: "w-[100%] h-[100%] sticky",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "bg-black flex items-center h-[300px] xs:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[850px] text-white text-center md:text-left",
                        children: (0, i.jsxs)("div", {
                          className:
                            "container mx-auto px-4 md:px-8 lg:px-8 py-24 lg:py-48 max",
                          children: [
                            (0, i.jsxs)("h1", {
                              className:
                                "text-2xl md:text-3xl lg:text-6xl xl:text-7xl xl:max-w-[801px] 2xl:max-w-[901px] xl:leading-[90px] 2xl:leading-[113px] 2xl:text-8xl font-semibold md:leading-[1.1] w-full",
                              children: [
                                "Live",
                                (0, i.jsx)("span", {
                                  className: "text-[#EA0000]",
                                  children: "ticket",
                                }),
                                "group Affiliate Programm",
                              ],
                            }),
                            (0, i.jsx)("h1", {
                              className:
                                "text-white lg:mt-20 mt-10 2xl:text-[22px] xl:text-xl lg:text-lg md:text-base text-sm font-semibold",
                              children:
                                "When you market more, you’ll earn more.",
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)(f(), {
                                href: "/contact",
                                children: (0, i.jsx)(c.Z, {
                                  className: "mt-12 lg:mt-24",
                                  children: "Become an affiliate",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("section", {
                    className: "flex flex-col justify-center items-center",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full",
                        children: (0, i.jsx)("div", {
                          className: "container mt-10",
                          children: (0, i.jsxs)("div", {
                            className: "py-10",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "text-lg md:text-xl lg:leading-[30px] leading-9",
                                children:
                                  "We provide superior ticketing, marketing and service solutions for buyers and sellers. We will help strengthen your brand and enhance your earnings through our resale ticket marketplace.",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-lg md:text-xl lg:leading-[30px] leading-9",
                                children:
                                  "LiveTicketGroup affiliates connect buyers with more than XX million tickets to XX live events in Europe, UK and US - from major sporting events to popular concerts.",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "mt-10 md:mt-10 font-semibold text-xl md:text-xl lg:leading-[30px] leading-9",
                                children:
                                  "Are you interested in a media or branded partnership?",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-lg md:text-xl lg:leading-[30px] leading-9",
                                children:
                                  "Connect with more users worldwide and drive your revenue through our LIVE Affiliate Program. You’ll have access to LiveTicketGroup’s inventory, real-time reporting, and account management.",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "flex flex-row justify-center lg:justify-start",
                                children: (0, i.jsx)(f(), {
                                  href: "/contact",
                                  children: (0, i.jsx)(c.Z, {
                                    className: "mt-12 lg:mt-24",
                                    children: "Become an affiliate",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "max-w-[240px] xs:max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1364px] w-full",
                        children: (0, i.jsxs)("div", {
                          className: "mt-12 container",
                          children: [
                            (0, i.jsx)("h1", {
                              className:
                                "text-base md:text-lg lg:text-xl 2xl:text-xl font-normal ml-0.5",
                              children: "WHAT WE BELIEVE",
                            }),
                            (0, i.jsx)("h1", {
                              className:
                                "mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold",
                              children: "What’s in it for you.",
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "affiliate w-[calc(100%_-_60px)] ml-[30px] lg:py-20 md:py-16 md:pb-16 pb-12",
                              children: (0, i.jsx)(n.Z, {
                                setCurrentIndex: t,
                                sliderFor: "affiliate",
                                showArrows: !0,
                                componentData: u.map((t, s) =>
                                  (0, i.jsx)(
                                    "div",
                                    {
                                      className:
                                        " bg-[#F8F8F8] h-[100px] flex flex-row items-center justify-center ".concat(
                                          s === (e !== u.length - 1 ? e + 1 : 0)
                                            ? "opacity-100"
                                            : "md:opacity-40",
                                          "  lg:px-6 md:px-8 md:py-16 sm:px-5 px-4 py-2 rounded-lg ",
                                        ),
                                      children: (0, i.jsx)("div", {
                                        className:
                                          "h-full grid place-items-center",
                                        children: (0, i.jsx)("p", {
                                          className:
                                            "2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs max-w-lg font-bold lg:leading-9 md:leading-8 leading-7",
                                          style: {
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 3,
                                          },
                                          children: t.title,
                                        }),
                                      }),
                                    },
                                    t.id,
                                  ),
                                ),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full",
                        children: (0, i.jsx)("div", {
                          className: "container",
                          children: (0, i.jsxs)("div", {
                            className:
                              "bg-[#EA0000] px-6 lg:px-8 xl:px-10 flex flex-col lg:flex-row gap-1 lg:gap-10 rounded-md justify-center items-center md:py-8 py-10",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "flex justify-center items-center w-full",
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "w-full flex flex-col gap-9 max-w-[355px]",
                                  children: [
                                    (0, i.jsx)("h1", {
                                      className:
                                        "text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold text-center lg:text-left",
                                      children: "Affiliates T&Cs",
                                    }),
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-base md:text-lg 2xl:text-xl text-center lg:text-left text-white leading-9",
                                      children:
                                        "We want to deliver quality service to our customers - every time. Our terms & conditions protect us , our customers and our affiliates.",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "flex justify-center lg:justify-start",
                                      children: (0, i.jsx)(f(), {
                                        href: "/contact",
                                        children: (0, i.jsx)(c.Z, {
                                          className:
                                            "bg-transparent border border-white !px-4 py-2 mt-3",
                                          children: "learn more",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "w-full pt-8 md:pt-16 relative lg:pt-0 lg:flex hidden",
                                children: (0, i.jsx)(r(), {
                                  src: d,
                                  alt: "markus",
                                  width: 600,
                                  height: 400,
                                  className: "rounded-lg ",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "max-w-[240px] xs:max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1364px] w-full",
                        children: (0, i.jsx)("div", {
                          className: "relative lg:pt-32 ",
                          children: (0, i.jsxs)("div", {
                            className: "container mt-12 z-50",
                            children: [
                              (0, i.jsx)("h1", {
                                className:
                                  "text-base md:text-lg lg:text-xl 2xl:text-xl font-normal ml-0.5",
                                children: "WHAT WE BELIEVE",
                              }),
                              (0, i.jsx)("h1", {
                                className:
                                  "mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold",
                                children: "What’s in it for users.",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "affiliate lg:py-20 md:py-16 md:pb-12 pb-12",
                                children: (0, i.jsx)(n.Z, {
                                  setCurrentIndex: l,
                                  currentIndex: s,
                                  sliderFor: "affiliate",
                                  showDots: !0,
                                  componentData: w.map((e, t) =>
                                    (0, i.jsx)(
                                      "div",
                                      {
                                        onClick: () => l(t - 1),
                                        className:
                                          "flex h-[100px] flex-row items-center justify-center cursor-pointer ".concat(
                                            t ===
                                              (s !== w.length - 1 ? s + 1 : 0)
                                              ? "opacity-100 bg-[#EA0000] text-white"
                                              : "opacity-100 bg-[#EA0000] text-white md:opacity-40 md:bg-[#F8F8F8] md:text-black",
                                            " lg:px-6 md:px-8 md:py-16 lg:py-16 sm:px-5 sm:py-3 px-4 py-2 rounded-lg ",
                                          ),
                                        children: (0, i.jsx)("div", {
                                          className:
                                            "h-full grid place-items-center",
                                          children: (0, i.jsx)("p", {
                                            className:
                                              "2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs max-w-lg font-bold lg:leading-9 md:leading-8 leading-7",
                                            style: {
                                              display: "-webkit-box",
                                              overflow: "hidden",
                                              WebkitBoxOrient: "vertical",
                                              WebkitLineClamp: 3,
                                            },
                                            children: e.title,
                                          }),
                                        }),
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full",
                        children: (0, i.jsx)(g.Z, {}),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute bottom-[-80px] -z-10 right-0 h-[1450px]",
                    children: (0, i.jsx)(r(), {
                      src: o.Z,
                      width: 100,
                      alt: "circle",
                      height: 100,
                      className: "w-[100%] h-[100%] sticky z-[-1000]",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      j.getLayout = (e) => (0, i.jsx)(l.A, { children: e });
      var v = j;
    },
  },
  function (e) {
    e.O(0, [415, 866, 445, 973, 655, 314, 774, 888, 179], function () {
      return e((e.s = 612));
    }),
      (_N_E = e.O());
  },
]);

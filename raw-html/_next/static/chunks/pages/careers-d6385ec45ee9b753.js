(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    3137: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/careers",
        function () {
          return l(75);
        },
      ]);
    },
    75: function (e, t, l) {
      "use strict";
      l.r(t);
      var a = l(5893),
        s = l(7294),
        i = l(4314),
        x = l(8094),
        n = l(9352),
        r = l(9782),
        o = l(8336),
        c = l(7053),
        d = l(658),
        m = l(6757),
        p = l(5675),
        u = l.n(p),
        h = l(4952),
        g = l(2262),
        w = l(1187),
        y = l(4154),
        f = l(1664),
        v = l.n(f),
        b = l(7720);
      let j = [
          { id: 1, image: o.Z, title: "madrid" },
          { id: 2, image: d.Z, title: "amsterdam" },
          { id: 3, image: m.Z, title: "san" },
          { id: 4, image: d.Z, title: "amsterdam" },
        ],
        N = [
          {
            title: "We Raise the Bar",
            description:
              "We shape our industry – we are the competition. We’re ambitious and disciplined teammates who make smart plays and get better every day.",
          },
          {
            title: "We Create Exceptional Experiences",
            description:
              "Whether we’re engaging a fan, seller, partner, or teammate, we don’t compromise when it comes to the quality of their experience. We hold ourselves accountable and lean into every connection to make the moment count.",
          },
          {
            title: "We Commit as a Team",
            description:
              "Above all else, we’re one team that trusts and supports each other –our unity gives us the strength to tackle even the most difficult challenges facing our business. Driven in our pursuit of the optimal, we constructively voice our perspectives, and when the best play is called, we move forward together.",
          },
          {
            title: "We Embrace Change",
            description:
              "In our world, the only constant is change and we’re ready for it. As a team, we’re energized by working with speed and agility to anticipate; we aren’t afraid to be self-critical and we drive relentlessly to get the best results.",
          },
        ],
        k = [
          {
            title: "Health & Wellbeing",
            description:
              "We put employee wellbeing at the center of everything we do - we want you to be able to experience your life to the fullest. We offer benefits to support your total wellbeing - including a monthly wellbeing budget. ",
          },
          {
            title: "Time Off",
            description:
              "We provide generous paid time off, sick leave, local holidays and ‘happiness days’ - 1 day per quarter where you can take off, no questions asked, to do something you love.",
          },
          {
            title: "Flexibility",
            description:
              "We trust you to work where you work best - whether that’s in one of our offices in Madrid, Amsterdam, San Francisco or remote. You choose.",
          },
          {
            title: "Experience it LIVE benefits",
            description:
              "We enable you to go out and curate your own unforgettable moments by providing discounts on tickets and exclusive access to certain events. ",
          },
        ],
        A = [
          {
            title: "Accounting",
            description: "Accounting",
            department: "Accounting",
            location: "Amsterdam",
          },
          {
            title: "Analytics",
            description: "Sr. Business Analyst, Gaming",
            department: "Analytics",
            location: "Madrid",
          },
          {
            title: "Service",
            description: "Service",
            department: "Service",
            location: "Madrid",
          },
          {
            title: "Product Owner San Francisco",
            description: "Product Owner",
            department: "Product Owner",
            location: "San Francisco",
          },
          {
            title: "Product Owner Madrid",
            description: "Product Owner",
            department: "Product Owner",
            location: "Madrid",
          },
          {
            title: "Product Owner Amsterdam",
            description: "Product Owner",
            department: "Product Owner",
            location: "Amsterdam",
          },
        ],
        W = ["Accounting", "Analytics", "Service", "Product Owner"],
        E = ["Amsterdam", "Madrid", "San Francisco"],
        C = () => {
          let [e, t] = (0, s.useState)(0),
            [l, i] = (0, s.useState)(null),
            [o, d] = (0, s.useState)("all-departments"),
            [m, p] = (0, s.useState)("all-locations"),
            [f, C] = (0, s.useState)(A);
          return (
            (0, s.useEffect)(() => {
              let e = A.filter(
                (e) => "all-departments" === o || e.department === o,
              ).filter((e) => "all-locations" === m || e.location === m);
              C(e);
            }, [o, m]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(y.Z, {
                  title: "Careers",
                  description: "Lorem, ipsum dolor sit amet consectetur",
                  og_title: "Careers",
                  og_description: "Lorem, ipsum dolor sit amet consectetur",
                  og_image: w.Z,
                }),
                (0, a.jsxs)("div", {
                  className:
                    "relative w-full max-w-[1920px] mx-auto overflow-hidden scroll-smooth",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "bg-careerBg bg-fixed bg-cover h-[300px] xs:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[850px] flex justify-center items-center w-full text-white",
                      children: (0, a.jsxs)("div", {
                        className:
                          "max-w-xl 2xl:max-w-5xl w-full flex flex-col md:gap-4 lg:gap-5 xl:gap-10 2xl:gap-20",
                        children: [
                          (0, a.jsxs)("h1", {
                            className:
                              "px-[16px] text-3xl md:text-5xl 2xl:text-8xl md:max-w-5xl font-semibold leading-snug text-center",
                            children: [
                              "Come create ",
                              (0, a.jsx)("span", {
                                className: "text-[#EA0000]",
                                children: "live",
                              }),
                              " ",
                              "experiences with us",
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, a.jsx)(v(), {
                              href: "#work-with-us",
                              children: (0, a.jsx)(g.Z, {
                                className: "mt-8 md:!px-10",
                                children: "VIEW OPENINGS",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto my-10 md:my-14 lg:my-18 xl:my-26 2xl:my-28",
                      children: (0, a.jsxs)("div", {
                        className: "md:text-lg 2xl:text-xl",
                        children: [
                          (0, a.jsx)("p", {
                            children:
                              "At LiveTicketGroup, people are encouraged to explore and learn about all aspects of our business as part of their career development journey. When it comes to your growth, we believe you should have as much exposure as possible so you can choose where to focus and how to grow your skills.",
                          }),
                          (0, a.jsx)("p", {
                            className: "mt-6 font-semibold",
                            children:
                              "We are a growing company and would love for you to join us on our journey!",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "uppercase text-base xl:text-lg 2xl:text-xl text-gray-700",
                          children: "What we believe",
                        }),
                        (0, a.jsx)("h1", {
                          className:
                            "text-xl xl:text-2xl 2xl:text-4xl font-semibold my-3 xl:my-6 2xl:my-10",
                          children: "Culture and core values.",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "block md:grid grid-cols-2 md:gap-16 xl:gap-20 2xl:gap-24 py-8 lg:py-16 2xl:py-28 space-y-8 md:space-y-0",
                          children: N.map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-xl xl:text-2xl 2xl:text-4xl w-full max-w-[674px] font-semibold",
                                    children: e.title,
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "mt-5 2xl:mt-8 font-normal font-helvetica text-base xl:text-lg 2xl:text-xl",
                                    children: e.description,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "careers",
                      children: (0, a.jsx)(h.Z, {
                        setCurrentIndex: t,
                        currentIndex: e,
                        sliderFor: "careers",
                        componentData: j.map((l, s) =>
                          (0, a.jsx)(
                            "div",
                            {
                              onClick: () => t(s),
                              className:
                                "relative w-full h-[200px] xl:max-w-[750px] 2xl:max-w-none md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px] ".concat(
                                  s === e ? "opacity-100" : "opacity-40",
                                ),
                              children: (0, a.jsx)(u(), {
                                src: l.image,
                                alt: l.title,
                                layout: "fill",
                                className: "rounded-lg w-2 h-2",
                              }),
                            },
                            l.id,
                          ),
                        ),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto py-8 lg:py-16 2xl:py-28",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "uppercase text-base xl:text-lg 2xl:text-xl text-gray-700",
                          children: "Care and Convenience",
                        }),
                        (0, a.jsx)("h1", {
                          className:
                            "text-xl xl:text-2xl 2xl:text-4xl font-semibold pt-5 2xl:pt-10",
                          children: "Our benefits.",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "block md:grid grid-cols-2 md:gap-16 xl:gap-20 2xl:gap-24 py-8 lg:py-16 2xl:py-28 2xl:pb-0 space-y-8 md:space-y-0",
                          children: [
                            k.map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-xl xl:text-2xl 2xl:text-4xl w-full max-w-[674px] font-semibold",
                                      children: e.title
                                        .split(" ")
                                        .includes("LIVE")
                                        ? (0, a.jsxs)("p", {
                                            children: [
                                              "Experience it ",
                                              (0, a.jsx)("span", {
                                                className: "text-[#EA0000]",
                                                children: "LIVE",
                                              }),
                                              " ",
                                              "benefits",
                                            ],
                                          })
                                        : e.title,
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "mt-5 2xl:mt-8 text-base xl:text-lg 2xl:text-xl",
                                      children: e.description,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                            (0, a.jsx)("span", { id: "work-with-us" }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "uppercase text-base xl:text-lg 2xl:text-xl text-gray-700",
                          children: "Work with us",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "md:flex justify-between items-center w-full pt-5 2xl:pt-10 block",
                          children: [
                            (0, a.jsx)("h1", {
                              className:
                                "text-xl xl:text-2xl 2xl:text-4xl font-semibold items-start",
                              children: "Open roles.",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex w-max gap-2 my-8 md:my-0 md:mt-0",
                              children: [
                                (0, a.jsxs)("select", {
                                  onChange(e) {
                                    var t;
                                    return d(
                                      null === (t = e.target) || void 0 === t
                                        ? void 0
                                        : t.value,
                                    );
                                  },
                                  className:
                                    "w-[140px] xs:w-[160px] pl-3 py-2 xl:w-[200px] 2xl:w-[260px] cursor-pointer text-black font-bold text-base xl:text-lg 2xl:text-2xl rounded-md",
                                  children: [
                                    (0, a.jsx)("option", {
                                      value: "all-departments",
                                      children: "All Departments",
                                    }),
                                    W.map((e) =>
                                      (0, a.jsx)("option", {
                                        value: e,
                                        children: e,
                                      }),
                                    ),
                                  ],
                                }),
                                (0, a.jsxs)("select", {
                                  onChange(e) {
                                    var t;
                                    return p(
                                      null === (t = e.target) || void 0 === t
                                        ? void 0
                                        : t.value,
                                    );
                                  },
                                  className:
                                    "w-[140px] xs:w-[160px] xl:w-[200px] pl-3 py-2 2xl:w-[260px] cursor-pointer text-black font-bold text-base xl:text-lg 2xl:text-2xl rounded-md",
                                  children: [
                                    (0, a.jsx)("option", {
                                      value: "all-locations",
                                      children: "All Locations",
                                    }),
                                    E.map((e) =>
                                      (0, a.jsx)("option", {
                                        value: e,
                                        children: e,
                                      }),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "md:mt-10 2xl:mt-[80px]",
                          children:
                            f.length > 0
                              ? f.map((e, t) =>
                                  (0, a.jsxs)(
                                    "div",
                                    {
                                      className: "border-gray-300 border-b",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center justify-between cursor-pointer py-4 px-2",
                                          onClick: () =>
                                            null !== l && l === t
                                              ? i(null)
                                              : i(t),
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "font-bold lg:text-2xl md:text-xl text-lg    ".concat(
                                                  t === l && "text-[#EA0000]",
                                                ),
                                              children: e.title,
                                            }),
                                            (0, a.jsx)("div", {
                                              children:
                                                l === t
                                                  ? (0, a.jsx)(n.gcy, {
                                                      className:
                                                        "h-6 w-6 text-gray-700",
                                                    })
                                                  : (0, a.jsx)(n.ZXJ, {
                                                      className:
                                                        "h-6 w-6 text-gray-700",
                                                    }),
                                            }),
                                          ],
                                        }),
                                        l === t &&
                                          (0, a.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "transition ease-in-out duration-1000 text-gray-700 lg:text-xl md:text-lg text-base",
                                                children: e.description,
                                              }),
                                              (0, a.jsx)("div", {
                                                children: (0, a.jsx)(r.Z, {
                                                  location: e.location,
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    },
                                    t,
                                  ),
                                )
                              : (0, a.jsx)("div", {
                                  className:
                                    "min-h-[100px] flex justify-center items-center",
                                  children: (0, a.jsx)("p", {
                                    className: "text-base xl:text-lg",
                                    children: "No Data Found",
                                  }),
                                }),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "py-8 lg:py-16 text-lg lg:text-xl lg:leading-[30px] leading-9",
                          children:
                            "LiveTicketGroup is proud to be an equal opportunity employer. We do not discriminate based upon race, color, religion, national origin, sex, sexual orientation, gender identity, physical or mental disability, veteran status, or age. We celebrate diversity, equality, and inclusion and value the impact that different backgrounds and perspectives bring to our organization.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-10 2xl:mt-[100px]",
                      children: (0, a.jsx)(x.Z, {}),
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-24 2xl:mt-[191px]",
                      children: (0, a.jsx)(b.Z, {}),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute -right-[450px] 2xl:-right-[250px] bottom-[800px] md:bottom-[200px] 2xl:bottom-[400px] -z-10",
                      children: (0, a.jsx)(u(), { src: c.Z, alt: "image" }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      (C.getLayout = (e) => (0, a.jsx)(i.A, { children: e })), (t.default = C);
    },
  },
  function (e) {
    e.O(
      0,
      [415, 866, 445, 937, 973, 655, 314, 490, 774, 888, 179],
      function () {
        return e((e.s = 3137));
      },
    ),
      (_N_E = e.O());
  },
]);
